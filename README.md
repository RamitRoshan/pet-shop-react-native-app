# 🐶 Pet Shop Mobile App

A React Native mobile application built as part of the **Pet Shop - Mobile App**.  
The app allows users to upload pet details, preview pet images, fetch random pet images, and manage a shopping cart using global state management.

---

## Platform

- React Native (Expo)
- Android & iOS supported

---

## Objective

To demonstrate understanding of:

- React Native fundamentals
- Image handling (camera & gallery)
- API integration
- Form validation
- Global state management using Zustand
- Clean architecture and reusable components

---

##  Assignment Requirements Checklist

| Requirement | Status |
|------------|--------|
| Pet image upload from gallery | ✅ Implemented |
| Camera image upload | ✅ Implemented |
| Image preview before submit | ✅ Implemented |
| Pet details form | ✅ Implemented |
| Form validation (Zod) | ✅ Implemented |
| Required fields validation | ✅ Implemented |
| API integration | ✅ Implemented |
| Random pet image API | ✅ Implemented |
| Global cart state | ✅ Implemented |
| Reusable components | ✅ Implemented |
| TypeScript usage | ✅ Implemented |
| Clean folder structure | ✅ Implemented |

---

##  Features

### Pet Image Upload
- Upload image from **gallery or camera**
- Image preview shown before submission


---

 

## Screens Implemented

- Home Screen (Pet listing)
- Add Pet Screen
- Image Upload & Preview Screen
- Cart Screen
- Pet Details Card View

---

### Pet Details Form
Form validation implemented using **Zod**.

Fields:
- Pet Name (Required)
- Breed (Required)
- Age (Required)
- Price (Required)

Validation includes:
- Required field checks
- Minimum length validation
- Numeric validation for age and price


---

## Libraries Used

| Library                            | Purpose                                              |
| ---------------------------------- | ---------------------------------------------------- |
| **Expo**                           | Rapid React Native development                       |
| **TypeScript**                     | Type safety                                          |
| **expo-router**                    | File-based navigation                                |
| **react-native-safe-area-context** | Keeps UI inside safe screen area (notch, status bar) |
| **TouchableOpacity**               | Handles press/touch actions with visual feedback     |
| **expo-image-picker**              | Camera & gallery access                              |
| **react-hook-form**                | Form state management                                |
| **zod**                            | Schema-based form validation                         |
| **@hookform/resolvers**            | Integrates Zod with react-hook-form                  |
| **axios**                          | API requests                                         |
| **zustand**                        | Global state management                              |


---

 ## ⚙️ Setup Instructions

### 1. Clone Repository
```bash
git clone https://github.com/your-username/pet-shop-app.git
```

2.  Install Dependencies
```
npm install
```

3. Start Application
```
npx expo start
```

4. Run on Device
```
Scan QR using Expo Go
or
Run on Android emulator / iOS simulator
```

## Features implemented:

- Image upload from gallery with preview

- Pet details form with Zod validation

- API integration (POST & GET)

- Random pet image fetching

- Pet listing with card-based UI

- Cart functionality with Zustand global state

- Loading, error, and success handling

- Clean architecture and reusable components

- TypeScript support

**Platform:**
>React Native (Expo)



## File Structure:
```
pet-shop-app/
│
├── app/
│ ├── index.tsx
│ ├── add-pet.tsx
│ ├── pet-list.tsx
│ ├── cart.tsx
│ └── _layout.tsx
│
├── src/
│ ├── api/
│ │ └── petApi.ts
│ │
│ ├── components/
│ │ ├── common/
│ │ │ └── AppButton.tsx
│ │ │
│ │ └── pets/
│ │ └── PetCard.tsx
│ │
│ ├── store/
│ │ └── cartStore.ts
│ │
│ ├── types/
│ │ └── pet.ts
│ │
│ └── utils/
│ └── imagePicker.ts
│
├── assets/
│
├── package.json
├── tsconfig.json
├── app.json
└── README.md
```
