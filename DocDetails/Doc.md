# Take home assignment:

=> npx create-expo-app@latest ./

**packages:**

- npm i axios

- npm install zustand


## ✅ What is StyleSheet in React Native?

**ans: StyleSheet is React Native’s built-in way of writing styles, similar to CSS, but not actual CSS.**

- “StyleSheet is React Native’s built-in CSS-like styling system, written as JavaScript objects and optimized for native performance.”


1. It comes pre-installed with React Native.
2. You don’t install anything extra.

```
import { StyleSheet } from 'react-native';
```

**How its like css:**

| CSS (Web)          | StyleSheet (React Native) |
| ------------------ | ------------------------- |
| `background-color` | `backgroundColor`         |
| `font-size`        | `fontSize`                |
| `margin-top`       | `marginTop`               |
| `display: flex`    | `flex` (default)          |


## Example:

**CSS (Web)**
```
.container {
  background-color: white;
  justify-content: center;
}
```

**StyleSheet (React Native)**

```
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    justifyContent: 'center',
  },
});
```


### ❌ How it’s NOT like CSS

- ❌ No .css files

- ❌ No class selectors (.box, #id)

- ❌ No px, %, em

- ❌ No media queries

> Everything is JavaScript objects.


## 🔥 Why React Native uses StyleSheet

### 1️⃣ Performance
Styles are optimized and sent to native side once.

### 2️⃣ Type safety
Typos like background-colour get caught.

### 3️⃣ Platform consistency
Works the same on Android & iOS.


**🤔 StyleSheet vs NativeWind (Tailwind)**

| StyleSheet       | NativeWind         |
| ---------------- | ------------------ |
| Built-in         | External library   |
| JS object styles | Tailwind classes   |
| More control     | Faster UI building |
| Verbose          | Cleaner syntax     |

> we can use both in the same project.


