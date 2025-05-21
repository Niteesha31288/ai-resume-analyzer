# 🧠 AI Resume Analyzer

**AI Resume Analyzer** is a web-based application that leverages OpenAI's GPT model to analyze and suggest improvements to user-uploaded resumes. Built with React, this tool extracts text from PDF resumes and provides AI-driven feedback to enhance formatting, keyword optimization, and content structure.
---
## 🔍 Features

- 📤 Upload resume in **PDF format**
- 📃 Extract and preview **raw resume content**
- 🤖 Get AI-generated feedback using **OpenAI GPT-3.5**
- 🖥️ Clean, minimalist UI with sectioned layout
- 🔐 Secure API integration via environment variable

---
## 🛠 Tech Stack

| Frontend      | API Integration | Utilities     |
|---------------|------------------|----------------|
| React         | OpenAI API       | pdfjs-dist     |
| JavaScript    | RESTful API call | .env file management |
| HTML + CSS    |                  |                |

---

## 📁 Project Structure

```bash
ai-resume-analyzer/
├── public/
├── src/
│   ├── components/
│   │   ├── ResumeUpload.jsx
│   │   ├── ResumePreview.jsx
│   │   └── AnalysisPanel.jsx
│   ├── App.jsx
│   ├── App.css
│   └── index.js
├── .env              # Not pushed to GitHub
├── .gitignore
├── package.json
└── README.md

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


