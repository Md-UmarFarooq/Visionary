# 👁️ Visionary: AI-Powered Visual Question Answering Web App

**Visionary** is an AI-driven web application that enables users to upload images and ask natural language questions about their content. Whether it's identifying objects, counting items, or understanding scenes, Visionary provides insightful answers by combining computer vision and natural language processing techniques.

🔗 [Live Demo](https://md-umarfarooq.github.io/Visionary/)

---

## 🚀 Features

- 🖼️ **Image Upload**: Easily upload images in common formats.
- ❓ **Ask Questions**: Like “How many cars are there?” or “What colors are in the image?”
- 🧠 **Visual Question Answering (VQA)**: AI interprets the image and answers based on the content.
- 🕓 **Search History**: View a list of all past image-based questions and answers.

---

## 🛠️ Technologies Used

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Python, Flask
- **Machine Learning**:
  - Hugging Face Transformers
  - Pretrained VQA models like `bert-base-uncased` + `resnet-50`
- **Storage**: LocalStorage (for search history)

---

📦 Installation Guide

1️⃣ Clone the Repository


             git clone https://github.com/md-umarfarooq/Visionary.git
            cd Visionary
2️⃣ Create a Virtual Environment (Optional but Recommended)
             python -m venv venv
             #For Windows:
             venv\Scripts\activate
             # For macOS/Linux:
             source venv/bin/activate
3️⃣ Install Required Packages

             pip install -r requirements.txt
4️⃣ Run the Application
Then open your browser and go to http://localhost:5000.

🧪 How to Use
1)Launch the app in your browser.

2)Upload an image using the upload button.

3)Ask a question like:

4)"How many people are in the image?"

5)"What color is the car?"

6)View the AI-generated answer below.

7)All previous questions & answers are saved in the history panel.

Uniquenes:
1)ImageTalk is free: It uses an open-source model, so anyone can use it without paying. 

2)It’s easy to use: It’s a simple web app with a clear design for uploading images and asking questions. 

3)It works with many images: It can handle charts, photos, and more, making it useful for different people (like students or professionals). 

Future scope:
1)Integrate voice input for asking questions
2)Add OCR for text-in-image understanding
3)Build a mobile app version
4)Shift model inference to cloud (for large-scale deployment)
5)Try advanced VLMs like Llava, MiniGPT-4, or GPT-4o when accessible