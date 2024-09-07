# EssenceAI

This is a web-based summarization app built with **React** and **Bootstrap**. The app allows users to input text and summarize it. The input and output sections are neatly arranged side by side for a user-friendly experience.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Contributing](#contributing)

## Features

- Responsive layout with **Bootstrap**
- Text input section for user text
- A "Summarize" button to process the input
- Display the summarized text in the output section
- Option to upload a document to be summarized
- Clear and modern UI, similar to existing summarization tools

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Bootstrap**: A CSS framework for responsive and mobile-first websites.
- **CSS**: Custom styling for the UI.
- **HTML5**: For semantic structuring of the web pages.
- **T5 Model**: T5 deep learning model was used for summarization.

## Installation

Follow the steps below to set up and run the project locally:

1. Clone the repository:

   ```bash
   git clone https://github.com/kazimahathir73/EssenceAI.git
   ```

2. Navigate into the project directory:

   ```bash
   cd frontend
   ```

3. Install the necessary dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

5. The app will be running on `http://localhost:3000/` in your web browser.


## Project Structure

```bash
├── backend
│   ├── model.py
│   ├── admin.py
│   ├── views.py
│   ├── urls.py
│   └── ...
├── frontend
│   ├── public
│   │   └── images
│   │   └── videos
│   │   └── .... 
│   ├── src
│   │   └── components
│   │       └── homepage.css
│   │       └── homepage.js
│   │       └── summary.js
│   │       └── summary.css
│   │       └── ....    
│   │   └── Apps.js
│   │   └── index.js          
│   └── ...
├── main
│   ├── asgi.py
│   ├── setting.py
│   ├── urls.py
│   ├── wsgi.py
│   └── ...
├── summarizer_model
│   ├── weights
│   ├── gigadata_corpus.csv
│   ├── response.py
│   ├── train_model.ipynb
│   └── ...
├── README.md
└── ...
```

## Contributing

Contributions are welcome! If you find any bugs or want to add a new feature:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a Pull Request.