 
<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:FFFFFF,30:DBEAFE,65:E9D5FF,100:FBCFE8&height=230&section=header&text=STOPWATCH&fontSize=58&fontColor=30205F&fontAlignY=38&animation=twinkling&desc=Track%20Your%20Time%20%7C%20Manage%20Your%20Activities&descAlignY=60&descSize=18&descColor=625B85" width="100%" />
</p>

<h3 align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&weight=600&size=22&pause=900&color=8B5CF6&center=true&vCenter=true&width=650&lines=A+Modern+React+Stopwatch;Track+Every+Second+with+Style;Light+%26+Dark+Theme+Switching;Simple+Activity+Time+Management" alt="Animated typing text" />
</h3>

<p align="center">
  A modern and responsive stopwatch application built with React.js, featuring an animated timer, activity tracking, and beautiful light and dark themes.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React.js-61DAFB?style=for-the-badge&logo=react&logoColor=black" />
  <img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
  <img src="https://img.shields.io/badge/Lucide_React-Icons-orange?style=for-the-badge" />
</p>

---

## ✨ About The Project

**Stopwatch** is a React.js application designed to track time and manage daily activities with a clean, modern interface.

It includes a stopwatch with Start, Stop, and Reset controls, along with an activity tracking section where users can save completed activities and their time durations.

The application also features a beautiful theme switcher that allows users to move between light and dark modes. Both themes use gradient colors, soft shadows, glowing accents, and smooth visual transitions.

## 🎨 Theme Preview

The application supports two visually different themes.

### 🌙 Dark Theme

<p align="center">
  <img src="./src/assets/images/dark-ss.png" width="95%" alt="Stopwatch Dark Theme Preview" />
</p>

### ☀️ Light Theme

<p align="center">
  <img src="./src/assets/images/light-ss.png" width="95%" alt="Stopwatch Light Theme Preview" />
</p>

## 🚀 Features

- **Stopwatch Timer:** Tracks elapsed time in hours, minutes, and seconds.
- **Start:** Starts the stopwatch.
- **Stop:** Pauses the stopwatch without losing the elapsed time.
- **Reset:** Resets the stopwatch to zero.
- **Activity Tracking:** Add activity names with their recorded durations.
- **Activity Log:** Displays all saved activities in a separate panel.
- **Automatic Activity Icons:** Displays different icons based on activity names.
- **Light Theme:** Clean interface with soft gradients and shadows.
- **Dark Theme:** Deep navy background with glowing purple and blue accents.
- **Theme Toggle:** Switch between light and dark modes.
- **Responsive Design:** Adapts to desktop, tablet, and mobile screens.
- **Session-Based Data:** Activity logs are cleared automatically when the page is refreshed.

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| React.js | Component-based UI development |
| JavaScript | Stopwatch and activity logic |
| CSS3 | Styling, gradients, shadows, and animations |
| Vite | Development and build environment |
| Lucide React | Modern interface icons |

## ⚙️ How It Works

1. The stopwatch initially displays `00:00:00`.
2. Click **Start** to begin counting elapsed time.
3. Click **Stop** to pause the timer.
4. Click **Reset** to return the timer to zero.
5. Enter an activity name in the input field.
6. Click **Add** after stopping the timer to save the activity and its duration.
7. The saved activity appears in the Activity Log.
8. Switch between light and dark themes using the theme toggle.
9. Refreshing the page clears the activity log and resets the stopwatch.

## 🧠 React Concepts Practiced

- **useState():** Managing timer values, theme, activity input, activity logs, and running status.
- **useEffect():** Managing the stopwatch interval.
- **setInterval():** Updating the timer every second.
- **clearInterval():** Cleaning up the timer interval.
- **Conditional Rendering:** Displaying different timer states and activity icons.
- **Event Handling:** Managing Start, Stop, Reset, Add, and Theme buttons.
- **Array State Management:** Adding activities to the activity list.
- **Dynamic Styling:** Changing the interface based on the selected theme.

## 📂 Project Structure

```text
Stopwatch/
│
├── public/
│
├── src/
│   ├── assets/
│   │   └── image/
│   │       ├── dark-ss.png
│   │       └── light-ss.png
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

## 💻 Installation & Setup

**1. Clone the repository**

```bash
git clone https://github.com/Drash011/ReactVerse.git
```

**2. Navigate to the Stopwatch project**

```bash
cd ReactVerse/Stopwatch
```

**3. Install dependencies**

```bash
npm install
```

**4. Install Lucide React if it is not already included**

```bash
npm install lucide-react
```

**5. Start the development server**

```bash
npm run dev
```

## 📱 Responsive Design

The application is designed to work across different screen sizes:

- Desktop: Two-column layout with stopwatch and activity log.
- Tablet: Adaptable layout with comfortable spacing.
- Mobile: Single-column layout with responsive timer controls and activity cards.

## 📖 Learning Outcomes

Building this project helped me practice React state management, effects, timer functionality, event handling, conditional rendering, and dynamic CSS styling.

It also helped me understand how to create modern interfaces using gradients, glass-like panels, glowing effects, responsive layouts, and theme switching.

## 🔮 Future Improvements

- Save activity history using localStorage.
- Add individual activity categories.
- Add total time summaries.
- Add activity filtering and search.
- Add downloadable activity reports.

## 👩‍💻 Author

**Drashti Thummar**

Full Stack Developer | React.js Learner

<p align="center">
  <a href="https://github.com/Drash011">
    <img src="https://img.shields.io/badge/GitHub-My_Profile-181717?style=for-the-badge&logo=github&logoColor=white" />
  </a>
  <a href="https://github.com/Drash011/ReactVerse">
    <img src="https://img.shields.io/badge/ReactVerse-Repository-6C63FF?style=for-the-badge&logo=github&logoColor=white" />
  </a>
</p>

<p align="center">
  <b>Project Repository:</b><br/>
  <a href="https://github.com/Drash011/ReactVerse/tree/main/Stopwatch">Stopwatch – View on GitHub</a>
</p>

---

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:FFFFFF,30:DBEAFE,65:E9D5FF,100:FBCFE8&height=130&section=footer&animation=twinkling" width="100%" />
</p>

