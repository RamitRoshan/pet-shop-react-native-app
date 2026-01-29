# 📦 expo-image-picker

**✅ Command**
```
npx expo install expo-image-picker
```

**Import Using:**
```
import * as ImagePicker from 'react-native-image-picker';
```

## 📝 Why we need to install it?

- React Native does not have built-in access to gallery or camera.

- Mobile features like images need native Android & iOS APIs.

- expo-image-picker connects JavaScript → native device gallery

- Handles:

    - image selection
    - permissions
    - camera/gallery access

- Works on both Android and iOS

- Expo installs the correct SDK-compatible version


### ❌ Without installing

**You will get error:**

```
Cannot find module 'expo-image-picker'
```

**✅ Used for**

- profile photo upload

- post image upload

- document upload

- camera capture

- selecting images from gallery

**🔑 One-line**

`
“We install expo-image-picker because React Native cannot directly access native gallery and camera APIs, so this library provides a bridge between JavaScript and native mobile features.”`


- uri is a string that represents the location of the image.

<br>

<hr>

# why we need to install these packages:

## 📦 1️⃣ react-hook-form

**✅ Command**
```
npm install react-hook-form
```

**📝 Why we need it?**

- Manages form state (input values, errors, touched)

- Prevents unnecessary re-renders

- Much faster than controlled inputs

- Reduces boilerplate code

- Handles:

   - form submission
   - validation
   - error handling

**❌ Without it**

- You must manually manage:
```
useState()
onChangeText
error states
submit logic
```


## 📦 2️⃣ zod


**✅ Command**

```
npm install zod
```


**📝 Why we need it?**

- Schema-based validation library

- Defines rules for form data

- Ensures correct:

    - data types
    - required fields
    - min/max length
    - email/password format

**Provides TypeScript-safe validation**

**Example:**
```
email: z.string().email()
password: z.string().min(6)
```

## 📦 3️⃣ @hookform/resolvers

**✅ Command**

```
npm install @hookform/resolvers
```

**📝 Why we need it?**

- Connects react-hook-form with Zod

- Converts Zod validation → form errors

- Without this, react-hook-form cannot understand Zod schemas

**Acts as a bridge between:**
```
react-hook-form  ←→  zod
```

**🔁 How they work together**
```
User Input
   ↓
react-hook-form (form handling)
   ↓
@hookform/resolvers (connector)
   ↓
zod (validation rules)
```

## ✅ Why developers use this combo

- Clean code

- Strong validation

- Less bugs

- Type-safe forms

- Industry standard

## 🔥 Real-world usage

- Used for:

   - login forms
   - signup forms
   - profile update
   - password reset
   - checkout forms
   - admin dashboards

**🎯 One-line:**

`“react-hook-form manages form state efficiently, Zod handles schema-based validation, and resolvers connect both to provide type-safe and scalable form validation.”`

## Tables:

| Package             | Why needed                    |
| ------------------- | ----------------------------- |
| react-hook-form     | Form state & submission       |
| zod                 | Validation rules              |
| @hookform/resolvers | Connects form with validation |


## Single command to install all together

>npm install react-hook-form zod @hookform/resolvers
