# API Integration Project

## 1. API Used
This project uses the public **JSONPlaceholder API** REST endpoint: 
`https://jsonplaceholder.typicode.com/posts`

## 2. Project Overview
This application is built using **React** and dynamically fetches a collection of 100 placeholder blog posts. 

### Features Handled:
* **Asynchronous Fetching:** Uses the native JavaScript Fetch API wrapped in a React `useEffect` hook to retrieve remote data on initial page load.
* **State Management:** Dynamically tracks network status via individual states (`posts`, `loading`, and `error`).
* **Interactive Filtering:** Includes a real-time responsive client-side search component to filter down the rendered post entries based on title criteria.