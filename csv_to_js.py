import csv
import json

def csv_to_js_variable(csv_file_path, variable_name):
    data = []
    with open(csv_file_path, 'r', encoding='utf-8') as file:
        csv_reader = csv.reader(file)
        next(csv_reader)  # Skip the header row
        for row in csv_reader:
            if len(row) >= 3:  # Ensure the row has at least 3 columns
                data.append({
                    'number': int(row[0]),
                    'word': row[1],
                    'definition': row[2]
                })
    
    js_data = json.dumps(data, ensure_ascii=False, indent=2)
    js_variable = f"const {variable_name} = {js_data};"
    
    return js_variable

# Usage
csv_file_path = 'words.csv'  # Replace with your CSV file path
js_variable = csv_to_js_variable(csv_file_path, 'csvData')

# Write to a JavaScript file
with open('words_data.js', 'w', encoding='utf-8') as js_file:
    js_file.write(js_variable)

print("JavaScript file 'words_data.js' has been created.")