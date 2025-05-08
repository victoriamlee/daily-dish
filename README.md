# 🥘 Daily Dish

**Daily Dish** is a recipe discovery app that helps users find delicious meal ideas based on their search queries or cuisine preferences.

Built using the [Spoonacular API](https://spoonacular.com/food-api), Daily Dish offers a simple and elegant way to browse, explore, and learn how to cook new dishes.

---

## ✨ Features

- 🔍 **Search Recipes** by keyword
- 🌍 **Filter by Cuisine** (e.g., Italian, Asian, Mediterranean)
- 📋 **View Recipe Details** including:
  - Title and image
  - Dietary tags (e.g., Vegan, Gluten-Free)
  - List of ingredients
  - Step-by-step cooking instructions

---

## 🛠 Tech Stack

- **React** (with React Router)
- **Vite:** A fast development build tool that serves the app.
- **Ant Design** for UI components
- **Spoonacular API** for recipe data

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm or yarn
- A Spoonacular API key (get one [here](https://spoonacular.com/food-api))

### Installation

1. **Clone the Repository**

``bash
git clone https://github.com/victoriamlee/daily-dish.git
cd daily-dish``

2. **Install Dependencies**

``
npm install
``


3. **Configure Your API Key**

- Create a .env file in the root of the project directory.
- Add your API key in the .env file like this:

``
VITE_SPOONACULAR_API_KEY=your_api_key_here
``

Note: You can get your API key by signing up for a free account at [Spoonacular API](https://spoonacular.com/food-api).

4. **Start the Development Server**

``
npm run dev
``

Now you can access the app at http://localhost:3000 in your browser.
