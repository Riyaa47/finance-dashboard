# Finance Dashboard

This project is a simple and interactive finance dashboard built to demonstrate frontend development skills. It focuses on presenting financial data in a clear and structured way, while maintaining a clean user interface and good user experience.

The application allows users to view financial summaries, explore transactions, and understand spending patterns through visualizations.

---

## Features

### Dashboard Overview

* Displays total balance, income, and expenses using summary cards
* Provides a quick snapshot of financial status

### Data Visualizations

* Pie chart showing category-wise spending distribution
* Bar chart showing monthly comparison of income and expenses

### Transactions Management

* Displays a list of transactions with date, category, amount, and type
* Includes search functionality to filter transactions by category

### Role-Based UI

* Viewer role can only view data
* Admin role can access additional actions such as adding transactions (UI simulation)

### Insights

* Highlights the highest spending category based on transaction data

### State Management

* Uses Context API to manage global state such as transactions, filters, and role

### Data Persistence

* Stores transaction data in local storage so that data persists across page refreshes

### Dark Mode

* Allows switching between dark and light themes

### UI and UX

* Responsive layout for different screen sizes
* Clean and minimal design using Tailwind CSS
* Smooth hover effects and transitions

---

## Tech Stack

* React (with Vite)
* Tailwind CSS
* Recharts (for charts)
* Context API (for state management)
* Local Storage (for persistence)

---

## Project Structure

```
src/
│
├── components/
│   ├── SummaryCard.jsx
│   ├── Charts.jsx
│   ├── TransactionTable.jsx
│   ├── RoleSwitcher.jsx
│   ├── Insights.jsx
│   └── DarkModeToggle.jsx
│
├── context/
│   └── AppContext.jsx
│
├── data/
│   └── mockData.js
│
├── pages/
│   └── Dashboard.jsx
│
├── App.jsx
├── main.jsx
```

---

## Installation and Setup

1. Clone the repository or download the project
2. Navigate to the project folder

```
cd finance-dashboard
```

3. Install dependencies

```
npm install
```

4. Start the development server

```
npm run dev
```

5. Open the application in your browser at

```
http://localhost:5173
```

---

## Approach

The project was designed with a focus on clarity and modularity. Components were kept reusable and simple. The Context API was used to manage shared state across the application without introducing unnecessary complexity.

Charts were implemented using Recharts to provide clear visual insights into financial data. Local storage was used to simulate persistence without requiring a backend.

The UI was built using Tailwind CSS to maintain consistency and responsiveness while keeping the design clean and minimal.

---

## Notes

* This project uses mock data and does not include backend integration
* Role-based functionality is simulated on the frontend for demonstration purposes

---

## Author

Riya 
