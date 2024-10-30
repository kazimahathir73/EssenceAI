# EssenceAI

This is a web-based summarization app built with React and Bootstrap. The app allows users to input text and generate concise summaries using a custom-trained T5 model. The T5 model has been fine-tuned on the Gigaword dataset, which provides high-quality summarization results. The input and output sections are neatly arranged side by side for a user-friendly experience.

Demo Video - 

Pretrained T5 Model -

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Dataset](#dataset)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Contributing](#contributing)

## Features

- User-friendly interface for text summarization
- Input and output sections side by side
- Summarization using a custom-trained **T5 model** fine-tuned on the Gigaword dataset
- Ability to upload documents for summarization
- Clean UI built with **Bootstrap**

## Technologies Used

- **React** (Frontend)
- **Django** (Backend)
- **Bootstrap** (CSS Framework)
- **Python** for model training
- **T5 model** fine-tuned on the **Gigaword dataset**

## Dataset

This project uses the **Gigaword** dataset, which consists of pairs of long text articles and their corresponding summaries. The **T5 model** was fine-tuned on this dataset to improve summarization capabilities and generate concise summaries based on the user's input.

Dataset paper - [Paper Link](https://web.stanford.edu/class/archive/cs/cs224n/cs224n.1204/reports/custom/15722650.pdf)

Dataset download - [Kaggle Dataset Link](https://www.kaggle.com/datasets/arngowda/gigaword-corpus) 

## Installation

To get started with the project:

1. Clone the repository:

   ```bash
   git clone https://github.com/kazimahathir73/EssenceAI.git
   cd EssenceAI
   ```

2. Install frontend dependencies:

   ```bash
   cd frontend
   npm install
   ```

3. Install backend dependencies:

   ```bash
   cd ../backend
   pip install -r requirements.txt
   ```

4. Run the frontend and backend servers:

   - Frontend (React):
     ```bash
     cd frontend
     npm start
     ```

   - Backend (Django):
     ```bash
     cd backend
     python manage.py runserver
     ```


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
