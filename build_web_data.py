import os
import glob
import re
import json

def parse_markdown_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    filename = os.path.basename(filepath)
    file_prefix = filename.split('_')[0]
    if not file_prefix.isdigit(): return None
    
    chapter_id = int(file_prefix)

    level_match = re.search(r'-\s*Nivel del corpus:\s*Nivel\s*(\d)', content, re.IGNORECASE)
    level = int(level_match.group(1)) if level_match else 1
    
    school_match = re.search(r'-\s*Escuela predominante:\s*(.+)', content, re.IGNORECASE)
    school = school_match.group(1).strip() if school_match else ""
    
    type_match = re.search(r'-\s*Tipo de texto:\s*(.+)', content, re.IGNORECASE)
    doc_type = type_match.group(1).strip() if type_match else ""
    
    metaphor_match = re.search(r'-\s*Met[áa]fora contempor[áa]nea:\s*(.+)', content, re.IGNORECASE)
    metaphor = metaphor_match.group(1).strip() if metaphor_match else ""

    title_match = re.search(r'^#\s+(.+)', content, re.MULTILINE)
    full_title = title_match.group(1).strip() if title_match else filename
    if ":" in full_title:
        title, subtitle = [x.strip() for x in full_title.split(':', 1)]
    else:
        title = full_title
        subtitle = ""

    apertura_match = re.search(r'## 1\. Apertura(.*?)(?:## 2\.)', content, re.DOTALL)
    apertura = apertura_match.group(1).strip() if apertura_match else ""

    pregunta_match = re.search(r'## 5\. Pregunta contemplativa de cierre(.*?)(?:## 6\.)', content, re.DOTALL)
    pregunta = pregunta_match.group(1).strip() if pregunta_match else ""

    sec3_match = re.search(r'## 3\. Traducción occidental guiada(.*?)(?:## 4\.)', content, re.DOTALL)
    sec3_content = sec3_match.group(1) if sec3_match else ""
    
    analogias = []
    parts = re.split(r'###\s*Analog[ií]a\s*\d*:?\s*', sec3_content)
    if len(parts) > 1:
        for part in parts[1:]:
            lines = part.strip().split('\n')
            a_title = lines[0].strip()
            limit_split = re.split(r'\*?\*?[Ll][íi]mite de la analog[íi]a\s?:?\*?\*?', part, maxsplit=1)
            if len(limit_split) > 1:
                a_text = limit_split[0].replace(lines[0], '', 1).strip()
                a_limit = limit_split[1].strip()
            else:
                a_text = limit_split[0].replace(lines[0], '', 1).strip()
                a_limit = ""
            analogias.append({
                "title": a_title,
                "text": a_text,
                "limit": a_limit.lstrip("- ").strip()
            })
    else:
        if sec3_content.strip():
            analogias.append({
                "title": "Traducción",
                "text": sec3_content.strip(),
                "limit": ""
            })

    return {
        "id": chapter_id,
        "file": file_prefix,
        "level": level,
        "title": title,
        "subtitle": subtitle,
        "metaphor": metaphor,
        "school": school,
        "type": doc_type,
        "apertura": apertura,
        "analogias": analogias,
        "pregunta": pregunta
    }

def main():
    files = glob.glob('*.md')
    chapters = []
    for f in files:
        if re.match(r'^\d\d_', f):
            chap = parse_markdown_file(f)
            if chap:
                chapters.append(chap)
    
    chapters.sort(key=lambda x: x['id'])

    chapters_json = json.dumps(chapters, ensure_ascii=False, indent=6)

    with open('web/js/data.js', 'r', encoding='utf-8') as f:
        data_js = f.read()

    # Auto-generate OP.chapterTerms
    glossary_terms = re.findall(r'term:\s*"([^"]+)"', data_js)
    chapter_terms = {}
    for chap in chapters:
        text_to_search = chap['title'] + " " + chap['subtitle'] + " " + chap['apertura'] + " " + chap['pregunta']
        for a in chap['analogias']:
            text_to_search += " " + a['title'] + " " + a['text'] + " " + a['limit']
        
        found_terms = []
        for term in glossary_terms:
            # Basic word boundary search
            if re.search(r'(?<![\w])' + re.escape(term) + r'(?![\w])', text_to_search, re.IGNORECASE):
                found_terms.append(term)
        if found_terms:
            chapter_terms[chap['id']] = found_terms

    chapter_terms_js = "OP.chapterTerms = {\n"
    for cid, terms in chapter_terms.items():
        terms_str = ", ".join(f"'{t}'" for t in terms)
        chapter_terms_js += f"  {cid}: [{terms_str}],\n"
    chapter_terms_js += "};"

    # Update chapters
    pattern = re.compile(r'(chapters:\s*\[).*?(\]\s*/\*\s*end chapters\s*\*/)', re.DOTALL)
    new_data_js = pattern.sub(lambda m: 'chapters: ' + chapters_json + ' /* end chapters */', data_js)

    # Update chapterTerms
    pattern_ct = re.compile(r'OP\.chapterTerms\s*=\s*\{.*?\};', re.DOTALL)
    new_data_js = pattern_ct.sub(lambda m: chapter_terms_js, new_data_js)

    with open('web/js/data.js', 'w', encoding='utf-8') as f:
        f.write(new_data_js)

    print(f"Generated {len(chapters)} chapters and updated web/js/data.js")

if __name__ == '__main__':
    main()
