<!-- Animated Header -->
<p align="center">
  <img
    src="https://capsule-render.vercel.app/api?type=waving&color=0:0F172A,50:312E81,100:7C3AED&height=200&section=header&text=Theme%20Change%20App&fontSize=42&fontColor=FFFFFF&fontAlignY=38&animation=fadeIn"
    width="100%"
    alt="Theme Change App Header"
  />
</p>

<h1 align="center">✨ Dark & Light Theme Toggle</h1>

<p align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=21&duration=2500&pause=900&color=8B5CF6&center=true&vCenter=true&width=600&lines=Switch+Your+Theme+Beautifully+%F0%9F%8C%99;Experience+Light+%26+Dark+Mode+%E2%98%80%EF%B8%8F;Smooth+Animations+%26+Modern+UI;Built+with+React.js+%26+CSS" alt="Animated typing text" />
</p>

<p align="center">
  A beautiful and responsive theme-switching application built with React.js. Switch between elegant Light and Dark modes with smooth transitions, colorful gradients, glowing effects and animated wave backgrounds.
</p>

<p align="center">
  <a href="https://github.com/Drash011/ReactVerse">
    <img src="https://img.shields.io/badge/Repository-ReactVerse-181717?style=for-the-badge&logo=github" />
  </a>
  <a href="https://github.com/Drash011/ReactVerse/tree/main/Theme-Change-App">
    <img src="https://img.shields.io/badge/Project-Theme--Change--App-8B5CF6?style=for-the-badge&logo=react&logoColor=white" />
  </a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React.js-61DAFB?style=flat-square&logo=react&logoColor=black" />
  <img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat-square&logo=javascript&logoColor=black" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/Responsive-Design-22C55E?style=flat-square" />
</p>

---

## 🌟 About The Project

**Theme Change App** is a modern React.js project that demonstrates how to switch between Light Mode and Dark Mode using React Hooks.

The application features a beautiful centered theme card with a dynamic background that changes completely when the user switches themes.

It combines clean UI design, attractive gradients, glowing elements, animated waves and persistent theme preferences to create a smooth user experience.

## 🎨 Project Preview

### ☀️ Light Mode

<p align="center">
  <img src="./src/assets/image/light.png" alt="Light Mode Preview" width="100%" />
</p>

<p align="center">
  <b>Soft Cream • Sky Blue • Golden Gradients</b>
</p>

### 🌙 Dark Mode

<p align="center">
  <img src="./src/assets/image/dark.png" alt="Dark Mode Preview" width="100%" />
</p>

<p align="center">
  <b>Deep Navy • Electric Blue • Purple Glow</b>
</p>

---

## ✨ Key Features

| Feature | Description |
|---|---|
| ☀️ Light Mode | Soft cream, golden and sky-blue background |
| 🌙 Dark Mode | Premium navy, blue and purple background |
| 🔄 Theme Toggle | Smooth switching between both themes |
| 🌊 Wave Effects | Beautiful layered wave designs |
| 🎨 Gradient Background | Full-page dynamic gradient backgrounds |
| 💡 Dynamic Icons | Sun and Moon icons based on selected theme |
| ✨ Glow Effects | Attractive shadows and glowing elements |
| 💾 LocalStorage | Saves the selected theme |
| 📱 Responsive UI | Supports desktop, tablet and mobile |
| ⚡ Smooth Animation | Animated theme and background transitions |

---

## 🛠️ Technologies Used

<table>
  <tr>
    <th>Technology</th>
    <th>Usage</th>
  </tr>
  <tr>
    <td>React.js</td>
    <td>Building the user interface</td>
  </tr>
  <tr>
    <td>JavaScript (ES6+)</td>
    <td>Theme switching functionality</td>
  </tr>
  <tr>
    <td>CSS3</td>
    <td>Gradients, waves, animations and responsive styling</td>
  </tr>
  <tr>
    <td>React Hooks</td>
    <td>State management and side effects</td>
  </tr>
  <tr>
    <td>LocalStorage</td>
    <td>Saving the selected theme</td>
  </tr>
  <tr>
    <td>Lucide React</td>
    <td>Sun and Moon icons</td>
  </tr>
  <tr>
    <td>Vite</td>
    <td>Development environment</td>
  </tr>
</table>

---

## ⚙️ How It Works

The application uses React Hooks to manage the theme.

**1. useState()**

Stores the currently selected theme.

```jsx
const [theme, setTheme] = useState(
  localStorage.getItem("theme") || "light"
);
```

**2. changeTheme()**

Switches between Light Mode and Dark Mode.

```jsx
const changeTheme = () => {
  setTheme(theme === "light" ? "dark" : "light");
};
```

**3. useEffect()**

Automatically saves the selected theme in LocalStorage.

```jsx
useEffect(() => {
  localStorage.setItem("theme", theme);
}, [theme]);
```

**4. Conditional Rendering**

Displays the appropriate icon according to the selected theme.

```jsx
{theme === "light" ? <Sun /> : <Moon />}
```

**5. Dynamic CSS Classes**

Updates the design based on the selected theme.

```jsx
<div className={`theme-page ${theme}`}>
```

---

## 📂 Project Structure

```text
Theme-Change-App/
│
├── public/
│
├── src/
│   ├── assets/
│   │   └── image/
│   │       ├── light.png
│   │       └── dark.png
│   │
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

## 🚀 Getting Started

Follow these steps to run the project on your local machine.

### 1. Clone Repository

```bash
git clone https://github.com/Drash011/ReactVerse.git
```

### 2. Navigate to Project Folder

```bash
cd ReactVerse/Theme-Change-App
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Install Lucide React

```bash
npm install lucide-react
```

### 5. Start Development Server

```bash
npm run dev
```

### 6. Open in Browser

```text
http://localhost:5173
```

---

## 📱 Responsive Design

The application is designed to provide a consistent experience across different devices.

- **Desktop:** Centered theme card with full-screen gradient backgrounds.
- **Tablet:** Optimized card dimensions, spacing and typography.
- **Mobile:** Flexible card layout with responsive icons and toggle controls.

---

## 💡 What I Learned

Through this project, I practiced:

- Managing component state using `useState`.
- Understanding side effects using `useEffect`.
- Handling click events in React.
- Implementing conditional rendering.
- Working with browser LocalStorage.
- Creating responsive layouts using CSS Media Queries.
- Designing gradients, shadows and wave effects.
- Building smooth CSS transitions and animations.

---

## 🔮 Future Enhancements

- [ ] Add multiple custom color themes.
- [ ] Add automatic system theme detection.
- [ ] Add more advanced theme animations.
- [ ] Add theme customization options.
- [ ] Add additional background effects.

---

## 👩‍💻 About Me

<p align="center">
  <img src="https://img.shields.io/badge/Developer-Drashti%20Thummar-8B5CF6?style=for-the-badge" />
</p>

<h3 align="center">Drashti Thummar</h3>

<p align="center">
  Full Stack Developer | React.js Learner
  <br/>
  Passionate about building modern, responsive and user-friendly web applications.
</p>

<p align="center">
  <a href="https://github.com/Drash011">
    <img src="https://img.shields.io/badge/GitHub-Drash011-181717?style=for-the-badge&logo=github" />
  </a>
</p>

---

<h3 align="center">⭐ If you like this project, give it a Star!</h3>

<p align="center">
  Your support motivates me to build more creative projects.
</p>

<!-- Animated Footer Wave -->
<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:0F172A,50:312E81,100:7C3AED&height=120&section=footer&animation=fadeIn" width="100%" />
</p>
