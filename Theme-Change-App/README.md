<!-- # React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project. -->

# ✨ Dark & Light Theme Toggle | React.js

<p align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=28&duration=3000&pause=1000&color=8B5CF6&center=true&vCenter=true&width=650&lines=Beautiful+Theme+Switcher+%F0%9F%8C%99;Light+Mode+%E2%98%80%EF%B8%8F+%7C+Dark+Mode+%F0%9F%8C%99;Built+with+React.js+%26+CSS" alt="Typing SVG" />
</p>

<p align="center">
  A modern, responsive and animated Dark & Light Mode Theme Switcher built using React.js. Experience beautiful gradients, glowing effects, smooth transitions and persistent theme preferences.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-18+-61DAFB?style=for-the-badge&logo=react&logoColor=black" />
  <img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
  <img src="https://img.shields.io/badge/CSS3-Responsive-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
  <img src="https://img.shields.io/badge/Status-Completed-22C55E?style=for-the-badge" />
</p>

---

## 🚀 Live Demo

<p align="center">
  <a href="YOUR_LIVE_WEBSITE_URL">
    <img src="https://img.shields.io/badge/🌐_View_Live_Demo-8B5CF6?style=for-the-badge" alt="Live Demo" />
  </a>
</p>

**Live Website:** [Click Here](YOUR_LIVE_WEBSITE_URL)

> Replace `YOUR_LIVE_WEBSITE_URL` with your deployed website URL from Vercel or Netlify.

---

## 🎨 Project Preview

### ☀️ Light Mode

<p align="center">
  <img src="./src/assets/image/light.png" alt="Light Theme Preview" width="90%" />
</p>

### 🌙 Dark Mode

<p align="center">
  <img src="./src/assets/image/dark.png" alt="Dark Theme Preview" width="90%" />
</p>

---

## ✨ Features

- ☀️ **Light Mode:** Beautiful cream, sky-blue and golden gradient background.
- 🌙 **Dark Mode:** Premium navy, blue and purple gradient background.
- 🎨 **Modern UI:** Attractive card design with rounded corners and wave effects.
- 🔄 **Smooth Transitions:** Animated theme switching experience.
- 💾 **LocalStorage:** Remembers the selected theme after refreshing the page.
- 📱 **Fully Responsive:** Works on desktop, tablet and mobile devices.
- 💡 **Dynamic Icons:** Sun and moon icons change according to the selected theme.
- ✨ **Gradient Effects:** Beautiful backgrounds, shadows and glowing elements.

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| React.js | Component-based UI development |
| JavaScript (ES6+) | Theme switching functionality |
| CSS3 | Styling, gradients and animations |
| React Hooks | State management and side effects |
| LocalStorage | Persistent theme preferences |
| Lucide React | Sun and Moon icons |
| Vite | Development server and build tool |

---

## 📂 Project Structure

```text
Theme-Toggle/
│
├── public/
│
├── screenshots/
│   ├── light.png
│   └── dark.png
│
├── src/
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── index.html
├── package.json
├── package-lock.json
└── README.md
```

---

## ⚙️ Installation & Setup

Follow these steps to run the project locally.

**1. Clone the repository**

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

**2. Navigate to the project folder**

```bash
cd Theme-Toggle
```

**3. Install dependencies**

```bash
npm install
```

**4. Install Lucide React**

```bash
npm install lucide-react
```

**5. Start the development server**

```bash
npm run dev
```

**6. Open in browser**

```text
http://localhost:5173
```

---

## 🧠 React Concepts Used

This project demonstrates the following React concepts:

**1. useState**

Used to manage the currently selected theme.

```jsx
const [theme, setTheme] = useState(
  localStorage.getItem("theme") || "light"
);
```

**2. useEffect**

Used to save the selected theme in LocalStorage whenever the theme changes.

```jsx
useEffect(() => {
  localStorage.setItem("theme", theme);
}, [theme]);
```

**3. Event Handling**

Used to switch between Light Mode and Dark Mode.

```jsx
const changeTheme = () => {
  setTheme(theme === "light" ? "dark" : "light");
};
```

**4. Conditional Rendering**

Used to display the correct icon and theme information.

```jsx
{theme === "light" ? <Sun /> : <Moon />}
```

---

## 🎯 How It Works

1. When the application starts, it checks LocalStorage for the previously selected theme.
2. If no theme is saved, Light Mode is selected by default.
3. When the user clicks the toggle button, the theme changes.
4. The background, card, text, icons and gradients update according to the selected theme.
5. The selected theme is saved in LocalStorage.
6. When the browser is refreshed, the previously selected theme is restored.

---

## 📱 Responsive Design

The application is optimized for different screen sizes.

- Desktop: Centered theme card with full-screen gradient background.
- Tablet: Adjusted card dimensions and spacing.
- Mobile: Flexible layout with responsive typography and controls.

---

## 🔮 Future Improvements

- [ ] Add more theme color combinations.
- [ ] Add custom theme selection.
- [ ] Add theme transition animations.
- [ ] Add system preference detection.
- [ ] Add more background styles.

---

## 👩‍💻 Author

<p align="center">
  <b>Drashti Thummar</b>
  <br/>
  Full Stack Developer | React.js Learner
  <br/><br/>
  <a href="YOUR_GITHUB_PROFILE_URL">
    <img src="https://img.shields.io/badge/GitHub-Profile-181717?style=for-the-badge&logo=github" />
  </a>
</p>

---

<p align="center">
  ⭐ If you like this project, don't forget to give it a star!
  <br/><br/>
  <b>Made with ❤️ using React.js</b>
</p>