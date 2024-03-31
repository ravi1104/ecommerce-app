# E-Commerce Application Readme
[Hosted Link Here](https://ecommerce-app-kappa-fawn.vercel.app/settings)
## Overview

This e-commerce application provides users with a seamless shopping experience. It consists of two main pages: the Catalog Page (/catalog) and the Settings Page (/settings). The Catalog Page is server-side rendered (SSR), while the Settings Page can be client-side rendered (CSR) if needed.

## Features

### Catalog Page:

- **Navigation Bars:** Users can switch between two navigation bars, controlled from the Settings Page.
- **Display Options:**
  - **Carousel:** Users can navigate through products using a carousel with buttons on both ends.
  - **View All:** Users can view all products in a paginated manner, with infinite scroll based on user activity.
- **Product Card Variants:** Users can switch between two variants of product cards, controlled from the Settings Page.

### Settings Page:

- **Navigation Bar Type:** Users can control the type of navigation bar (NavBar1 or NavBar2).
- **Product Card Variant:** Users can choose between two variants of product cards (ProductCard1 or ProductCard2).
- **Catalog Display:** Users can choose the view of how the catalog is displayed (view_all or carousel).

### Additional Features :

- **Cart Ability:** Users can add products to their cart and remove them.
- **Bag Icon on NavBar:** Clicking on the bag icon opens a modal displaying the current cart values.

## Implementation Details

- **SSR Page:** Initial values are given, but they are updated when changed from the settings. (Note: Data updates are not persistent upon reload)
- **Mobile-First Design:** The application is designed to be responsive for mobile devices and other media devices like desktop.

## Usage

1. Install dependencies: `npm install`
2. Run the development server: `npm run dev`
3. Access the application:
   - Catalog Page: [Access Catalog Page Here](https://ecommerce-app-kappa-fawn.vercel.app/catalog)
   - Settings Page: [Access Settings Page Here](https://ecommerce-app-kappa-fawn.vercel.appsettings) 
4. Has Project Introduction: [Access Intro Pge Here](https://ecommerce-app-kappa-fawn.vercel.app/)
## Dependencies

- Next.js: Framework for React.js applications
- Tailwind CSS: Utility-first CSS framework
- FontAwesome: Icon library for React

## Folder Structure

### `/app`
- **`/components`**: Contains React components used in the application.
  - **`/catalog`**: Contains catalog page logic.
    - **`layout.js`**: Layout for the catalog page.
    - **`page.js`**: Page logic importing components.
  - **`/settings`**: Contains setting page logic.
    - **`layout.js`**: Layout for the settings page.
    - **`page.js`**: Page logic importing components.

## Authors

- Ravi Ranjan Yadav

