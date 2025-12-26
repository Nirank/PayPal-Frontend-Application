# PayPal Frontend Application

A React-based frontend application that simulates a PayPal-style checkout interface. This project demonstrates modern frontend development practices and serves as a foundation for integrating PayPal payment flows with a backend system.

---

## 📌 Project Overview

The PayPal Frontend Application is a client-side web application built using **React** and **Create React App**. It focuses on providing a clean UI structure for payment-related workflows and can be easily connected to backend APIs for real-world PayPal order creation and payment processing.

This project is suitable for:
- Learning frontend payment UI patterns
- Integrating PayPal Checkout with backend services
- Showcasing frontend skills in interviews and resumes

---

## 🚀 Features

- React-based single-page application
- Modular and reusable UI components
- SCSS-based styling
- Ready to integrate with PayPal JavaScript SDK
- Easily connectable with backend REST APIs
- Clean project structure following best practices

---

## 🧱 Tech Stack

- **React**
- **Redux**
- **JavaScript (ES6+)**
- **SCSS**
- **HTML5 & CSS3**

---

## 📂 Project Structure

```

PayPal-Frontend-Application/
│
├── public/
│   └── index.html
│
├── src/
│   ├── components/        # Reusable UI components
│   ├── styles/            # SCSS styles
│   ├── App.js             # Root component
│   ├── index.js           # Application entry point
│
├── .gitignore
├── package.json
├── package-lock.json
└── README.md

````

---

## ⚙️ Getting Started

### Prerequisites

Make sure the following are installed on your system:
- **Node.js** (v14 or higher)
- **npm** or **yarn**

---

### Installation

Clone the repository:
```bash
git clone https://github.com/Nirank/PayPal-Frontend-Application.git
````

Navigate to the project directory:

```bash
cd PayPal-Frontend-Application
```

Install dependencies:

```bash
npm install
```

---

## ▶️ Running the Application

Start the development server:

```bash
npm start
```

The application will be available at:

```
http://localhost:3000
```

The app automatically reloads on code changes.

---

## 🧪 Available Scripts

| Command         | Description                        |
| --------------- | ---------------------------------- |
| `npm start`     | Runs the app in development mode   |
| `npm test`      | Launches the test runner           |
| `npm run build` | Builds the app for production      |
| `npm run eject` | Ejects CRA configuration (one-way) |

---

## 🔗 PayPal Integration (Future Scope)

This frontend is designed to work with a backend service that:

* Creates PayPal orders
* Captures payments securely
* Handles success/failure callbacks

To enable real PayPal payments:

1. Create backend endpoints (e.g. `/create-order`, `/capture-order`)
2. Integrate PayPal JavaScript SDK
3. Use sandbox or live PayPal client IDs





## 👨‍💻 Author

**Nirank Jawale**
Software Developer | Java & Full Stack Enthusiast

