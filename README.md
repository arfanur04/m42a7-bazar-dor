# BazarDor (বাজার দর)

> A simple Bangla price tracker to see today's market prices of daily essentials at a glance.

**BazarDor** is a website where you can check the prices of rice, lentils, oil, vegetables, fish, meat, eggs and spices. You can see which prices went up or down today, browse products by category, sort them by price, and open a product to compare prices across different markets.

🔗 **Live Site:** [live-link-here](https://m42a7-bazar-dor.vercel.app)

📦 **Repository:** [github.com/arfanur04/m42a7-bazar-dor](https://github.com/arfanur04/m42a7-bazar-dor)

---

## 🛠️ Technologies Used

- **Next.js** (App Router, with TypeScript) - to build the user interface and handle page navigation
- **React.js** - to make the components and manage state
- **Tailwind CSS** - to style the website
- **HeroUI** - ready-made components for Tailwind
- **BetterAuth** - for email and password login, Google login and GitHub login
- **MongoDB** - to store the users
- **Gravity UI Icons** - for icons
- **React Marquee Text** - for the scrolling price strip
- **BazarDor API** - to get the products and category data

---

## ✨ Key Features

1. **Live price strip** - A scrolling marquee below the navbar shows each product with its emoji, price, unit and a ▲ / ▼ change badge. It pauses when you hover over it.
2. **Home page sections** - A hero banner with a button that scrolls down to the product list. Below it are "আজ দাম বেড়েছে" (top 6 risers), "আজ দাম কমেছে" (top 6 fallers) and "সব পণ্য" (all products) as cards. Prices are shown in Bangla digits, and the badge is red for up, green for down and gray for no change.
3. **Category pages** - Pick a category from the navbar to see only its products. The active category is highlighted. A sort dropdown lets you order the products by default, price low to high, or price high to low. An empty message with a button back to home shows for a wrong category.
4. **Product details page** - See the emoji, name, unit, category tag and today's price change. It also shows the minimum, maximum and average price, and a table of prices from every market. This page is only for logged-in users.
5. **Sign in and sign up** - Create an account or log in with email and password, Google or GitHub. A toast message shows for success and for errors. Logged-in users are kept out of the sign-in and sign-up pages, and logged-out users are sent to sign in when they open a protected page.
6. **Loading and error states** - Skeleton loaders show while the data is loading on every main page, and a friendly 404 page with a button back to home shows for any wrong link.
7. **Fully responsive** - The layout works on mobile, tablet and desktop. The product grid goes from 3 columns to 1, the category links become a menu on small screens, and the market table scrolls sideways.
