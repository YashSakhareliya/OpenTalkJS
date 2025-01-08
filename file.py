import os
data = [
    ["Professional_Writing", ["Generate a resignation letter", "Write a job application email", "Create a project proposal"]],
    ["Creative_Writing", ["Write a short story plot", "Generate a poem about nature", "Create character descriptions"]],
    ["Technical_Content", ["Write code documentation", "Create API documentation", "Write a bug report"]],
    ["Academic_Writing", ["Generate a research abstract", "Create a thesis statement", "Write an article summary"]],
    ["Marketing_Content", ["Write product descriptions", "Create social media posts", "Generate marketing emails"]],
]
root_dir = "./Questions"
os.makedirs(root_dir, exist_ok=True)

for category in data:
    sub_dir_name = category[0]
    questions = category[1]
    sub_dir_path = os.path.join(root_dir, sub_dir_name)
    os.makedirs(sub_dir_path, exist_ok=True)
    for idx, question in enumerate(questions, start=1):
        file_name = f"q{idx}.txt"
        file_path = os.path.join(sub_dir_path, file_name)

        with open(file_path, "w") as file:
            file.write(question)