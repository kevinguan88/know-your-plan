import pdfplumber
from openai import OpenAI
import requests
import json
import pandas as pd
import re

def summarize_text(text):
    payload = {
        "model": "mistralai/mistral-7b-instruct:free",
        "messages": [
            {
                "role": "user",
                "content": "Summarize the following insurance document text, including a section on red flags in the policy that people will not be wary to:\n\n" + text
            }
        ],
        "temperature": 0.3,
        "max_tokens": 4096
    }
    response = requests.post(
        url="https://openrouter.ai/api/v1/chat/completions",
        headers={
            "Authorization": "Bearer KEY",
            "Content-Type": "application/json",
            # "HTTP-Referer": "<YOUR_SITE_URL>", # Optional. Site URL for rankings on openrouter.ai.
            # "X-Title": "<YOUR_SITE_NAME>", # Optional. Site title for rankings on openrouter.ai.
        },
        data=json.dumps(payload)
        )
    return response.json()["choices"][0]["message"]["content"]

def extract_page_without_table(text):
    cleaned_text = clean_malformed_text(text)
    with open("final.txt", 'a', encoding="utf-8") as f:
        f.write(cleaned_text + "\n\n")

def clean_malformed_text(input_text):
    lines = input_text.splitlines()  # Split the input string into lines
    
    cleaned_lines = []
    skip_next = False

    for idx, line in enumerate(lines):
        line = line.rstrip("\n")  # Remove only newline (keep other spaces)
        
        if skip_next:
            skip_next = False
            continue

        # If line is just � or starts with � (maybe spaces around it)
        if re.fullmatch(r'\s*[�›]\s*', line):
            if idx + 1 < len(lines):
                next_line = lines[idx + 1].strip()
                # Replace `�` with `›` before appending the next line
                if cleaned_lines:
                    cleaned_lines[-1] += f"\n› {next_line}"
                else:
                    cleaned_lines.append(f"› {next_line}")
                skip_next = True
            else:
                # If no next line, just add `›`
                cleaned_lines.append("›")
        else:
            # Replace � between words with dash
            fixed_line = re.sub(r'(\w)\s*�\s*(\w)', r'\1-\2', line)
            cleaned_lines.append(fixed_line)

    # Join the cleaned lines into a single string with newline characters
    return "\n".join(cleaned_lines)

def extract_page_with_table(text, table):
    df = pd.DataFrame(table)
    df = df.replace('\n', ' ', regex=True)
    df = df.fillna("")  # Replace None values with empty strin
    # print(df)
    searchtext = clean_malformed_text(text)
    # with open("test.txt", 'w', encoding='utf-8') as file1:
        # file1.write(text1 + "\n\n\n\n\n" + text)
    lines = searchtext.split('\n')
    for i in range(2, len(df)):  # Start from index 1 (second row) and go until the end
        a = df.iloc[i, 0]  # Value in the first column (index 0)
        b = df.iloc[i, 1]  # Value in the second column (index 1)
        # print(a,b)
        for line_number, line in enumerate(lines, start=1):
            match = re.search(re.escape(b), line)
            if match:
                # Extract text before the match starts
                text_before_match = line[:match.start()]
                # print("Text before match:", text_before_match)
                df.iloc[i, 0] = text_before_match
                        
    # Find the last row and last column value
    end_value = df.iloc[-1, -1]  # Get the last row, last column value
    # print(end_value)
    start_val = None
    for cell in df.iloc[0]:
        # Find the first non-None value in the column
        if cell is not None and cell != "":
            start_val = cell
            print(start_val)
            break

    lines = searchtext.split('\n')
    # Find the line that holds the value and store the position (end)
    start_pos = None
    for line_number, line in enumerate(lines, start=1):
        match = re.search(re.escape(start_val), line)
        if match:
            # print("OOO")
            start_pos = line_number
            # print(start_pos)
            break
    
    end_pos = None
    lines = searchtext.split('\n')
    for line_number, line in enumerate(lines, start=1):
        match = re.search(re.escape(end_value), line)
        if match:
            # print("END")
            end_pos = line_number
            # # print(end_pos)
            break
    
    df_str = df.to_string(index=False)
    df_str = df_str.replace("�", "-")
    new_content = lines[:start_pos-1] + [df_str + '\n'] + lines[end_pos:]
    # Write the modified content back to the file
    with open("final.txt", 'a', encoding="utf-8") as f:
        f.writelines(new_content)
        

def extract_and_summarize(file_obj):
    """
    Modified to accept a file object instead of a file path.
    """
    # Clear final.txt
    with open("final.txt", 'w', encoding="utf-8") as f:
        f.close()

    try:
        with pdfplumber.open(file_obj) as insurance_file:
            num_of_pages = len(insurance_file.pages)
            for i in range(num_of_pages):
                page = insurance_file.pages[i]
                try:
                    text = page.extract_text()
                except Exception as e:
                    print(f"Error extracting text on page {i + 1}: {e}")
                    text = None

                try:
                    table = page.extract_table()
                except Exception as e:
                    print(f"Error extracting table on page {i + 1}: {e}")
                    table = None

                if table and text:
                    extract_page_with_table(text, table)  # Process both table and text
                elif not table and not text:
                    print(f"Extraction error on page {i + 1}: Neither table nor text found.")
                elif text:
                    print(f"Extracting text only on page {i + 1}.")
                    extract_page_without_table(text)
                else:
                    print(f"Unknown extraction error on page {i + 1}.")
    except Exception as e:
        print(f"Failed to open or process the PDF: {e}")

    # Summarize the cleaned content
    with open('final.txt', 'r', encoding='utf-8') as f:
        file_content = f.read()

    summary = summarize_text(file_content)
    return summary




