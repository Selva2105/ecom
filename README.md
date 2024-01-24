# E-Commerce website

Welcome to Eacom, a modern web application developed using React with TypeScript (TSX), Redux for state management, and styled with TailwindCSS along with Flowbite React components. This project aims to provide a seamless and responsive user experience, combining the power of React's component-based architecture, TypeScript's static typing, Redux for state management, and the utility-first styling of TailwindCSS with enhanced components from Flowbite.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [1. Clone the Repository](#1-clone-the-repository)
  - [2. Install Dependencies](#2-install-dependencies)
  - [3. Run the Development Server](#3-run-the-development-server)
  - [4. Build for Production](#4-build-for-production)
- [Project Structure](#project-structure)

## Features

### Prerequisites
Before setting up and running the e-commerce React application, make sure you have the following prerequisites installed on your development machine:

- [Node.js](https://nodejs.org/): Ensure you have Node.js installed, as it is required for package management and running scripts.
##

## 1. State Management with Redux Toolkit
   - Utilize `@reduxjs/toolkit` for efficient and scalable state management.

## 2. TypeScript Integration
   - Leverage TypeScript (`typescript`) for static typing, enhancing code quality and catching errors early.

## 3. HTTP Requests with Axios
   - Use `axios` for making HTTP requests, facilitating data fetching from your server.

## 4. Country, State, and City Data
   - Integrate `country-state-city` for managing and displaying location-related data in your application.

## 5. UI Framework: Flowbite React
   - Incorporate the `flowbite-react` UI framework for building responsive and visually appealing user interfaces.

## 6. Form Handling with React Hook Form
   - Implement `react-hook-form` for effective and performant form handling in your application.

## 7. Icon Library: React Icons
   - Enhance your UI with icons using the `react-icons` library.

## 8. Routing with React Router
   - Manage navigation within your application using `react-router-dom` for a seamless user experience.

## 9. Tailwind CSS Integration
   - Enhance styling capabilities by integrating `tailwindcss` along with `autoprefixer` and `postcss`.

## 10. Web Vitals
   - Monitor and optimize web performance using `web-vitals`.

## 11. React Redux for State and Logic
   - Integrate `react-redux` to connect React components with the Redux store and manage global state.

## 12. Modern React (React 18)
   - Embrace the latest features and improvements in React by using version `18.2.0`.

##
## Getting Started

Follow these steps to get your project up and running:

### 1. Clone the Repository


```bash
git clone https://github.com/Selva2105/ecom.git
```

### 2. Install Dependencies
```bash
cd ecom
npm install
```

### 3. Run the Development Server

```bash 
npm start
```

This will start the development server, and you can view your app at http://localhost:3000.

### 4. Build for Production

```bash 
npm run build

```

## Overview:

Eacom is designed to provide a seamless user experience with a straightforward workflow. Follow the steps below to navigate through the application.

### 1. Create an Account and Login:

- **Create User Account:**
  - Navigate to the registration page.
  - Fill in the required details to create a new user account.

- **Login:**
  - Use the created credentials to log in.
  - Upon successful login, the application will redirect you to the products page.

### 2. Products Page:

- **View and Manage Products:**
  - On the products page, explore the available products.
  - Add desired products to the cart.
  - Remove products from the cart if needed.

### 3. Additional Pages:

#### - Premium Page:

- Explore premium features and offerings specific to premium users.

#### - Home Page:

- Access the home page for general information and announcements.

#### - User Signout:

- Log out of your user account when you're done using the application.

## Getting Started:

To begin using Eacom, follow the installation instructions in the [Readme.md](Readme.md) file.
   -


## Project Structure

```plaintext

ecom/
|-- src/
|   |-- app/
|   |   |-- store.ts
|   |   |-- hooks.ts
|   |-- components/
|   |   |-- components/
|   |       |-- ProfileDropdown.tsx
|   |   |-- ProductCard.tsx
|   |-- constants/
|   |   |-- footerData.ts
|   |   |-- navbarData.ts
|   |-- features/
|   |   |-- products/
|   |       |-- productSlice.ts
|   |-- pages/
|   |   |-- Home/
|   |       |-- Aboutus.tsx
|   |       |-- Header.tsx
|   |       |-- Home.tsx
|   |       |-- Sponser.tsx
|   |   |-- Navbar/
|   |       |-- index.tsx
|   |       |-- MenuSlider.tsx
|   |       |-- Home.tsx
|   |   |-- Footer.tsx
|   |   |-- Login.tsx
|   |   |-- NotFound.tsx
|   |   |-- Premium.tsx
|   |   |-- ProductLisingPage.tsx
|   |   |-- ServerErrorPage.tsx
|   |   |-- Signup.
|   |-- utils/
|   |   |-- stateCityFetcher.ts
|   |-- App.tsx
|   |-- global.types.ts
|   |-- index.css
|   |-- index.tsx
|   |-- Layout.tsx
|-- public/
|   |-- index.html
|-- .gitignore
|-- tsconfig.json
|-- package.json
|-- postcss.config.js
|-- README.md
|-- tailwind.config.js
|-- webpack.config.js

```

***`Explanation`***

- **`src/`**: Main source code directory.
  - **`app/`**: Application-level files.
    - **`store.ts`**: Redux store configuration.
    - **`hooks.ts`**: Custom React hooks used across the application.
  - **`components/`**: Reusable React components.
    - **`components/`**: Unusual nested folder, might be an error or intentional separation.
    - **`ProfileDropdown.tsx`**: Component for user profile dropdown.
    - **`ProductCard.tsx`**: Component for displaying a product card.
  - **`constants/`**: Constants used in the application.
    - **`footerData.ts`**: Data for the website footer.
    - **`navbarData.ts`**: Data for the navigation bar.
  - **`features/`**: Application features organized by domain.
    - **`products/`**: Features related to product management.
      - **`productSlice.ts`**: Redux slice for managing product state.
  - **`pages/`**: React components representing pages.
    - **`Home/`**: Home page components.
      - **`Aboutus.tsx`**: About Us section of the Home page.
      - **`Header.tsx`**: Header section of the Home page.
      - **`Home.tsx`**: Main content of the Home page.
      - **`Sponser.tsx`**: Sponsors section of the Home page.
    - **`Navbar/`**: Components related to the navigation bar.
      - **`index.tsx`**: Entry point for the Navbar components.
      - **`MenuSlider.tsx`**: Component for a sliding menu in the navbar.
      - **`Home.tsx`**: Home page content specific to the navbar.
    - **`Footer.tsx`**: Footer component.
    - **`Login.tsx`**: Login page component.
    - **`NotFound.tsx`**: Page for 404 Not Found errors.
    - **`Premium.tsx`**: Premium content page.
    - **`ProductLisingPage.tsx`**: Page for listing products.
    - **`ServerErrorPage.tsx`**: Page for server errors.
    - **`Signup.`**: Possibly incomplete or typo in the file name.
  - **`utils/`**: Utility functions or modules.
    - **`stateCityFetcher.ts`**: Utility for fetching state and city data.
  - **`App.tsx`**: Main entry point of the application.
  - **`global.types.ts`**: Global TypeScript types used across the application.
  - **`index.css`**: Global CSS styles.
  - **`index.tsx`**: Entry point for rendering the React application.
  - **`Layout.tsx`**: Component defining the layout structure.
- **`public/`**: Static files served as-is.
  - **`index.html`**: The main HTML file.
- **`.gitignore`**: Configuration for Git to ignore certain files and directories.
- **`tsconfig.json`**: TypeScript configuration.
- **`package.json`**: Configuration file for npm, specifying project dependencies and scripts.
- **`postcss.config.js`**: Configuration for PostCSS.
- **`README.md`**: Markdown file with project documentation.
- **`tailwind.config.js`**: Configuration for Tailwind CSS.
- **`webpack.config.js`**: Configuration for Webpack, used for bundling and building the project.


Happy coding! 🚀