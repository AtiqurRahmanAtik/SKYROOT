import json

json_path = r"e:\projects\SKYROOT\src\data\projects.json"
with open(json_path, "r", encoding="utf-8") as f:
    content = f.read()

target = "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
replacement = "/dummy.pdf"

if target in content:
    new_content = content.replace(target, replacement)
    with open(json_path, "w", encoding="utf-8") as f:
        f.write(new_content)
    print("Successfully replaced all instances.")
else:
    print("Target link not found or already replaced.")
