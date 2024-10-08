# Quick Cab

## Overview
Quick Cab is a full-stack React Native application designed to provide a seamless ride-hailing experience. The app integrates with Stripe for payments and uses PostgreSQL for data storage. Key features include onboarding and authentication screens, map functionality, and ride management.

## Table of Contents
- [Installation](#installation)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Running the App](#running-the-app)
- [Contributing](#contributing)

## Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/anmolranjan1/Quick_Cab.git
    ```
2. Navigate to the project directory:
    ```bash
    cd Quick_Cab
    ```
3. Install dependencies:
    ```bash
    npm install
    ```
4. Create a `.env` file in the root directory and add the following:

```plaintext
EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY=
EXPO_PUBLIC_PLACES_API_KEY=
EXPO_PUBLIC_DIRECTIONS_API_KEY=
DATABASE_URL=
EXPO_PUBLIC_SERVER_URL=https://quickcab.dev/
EXPO_PUBLIC_GEOAPIFY_API_KEY=
EXPO_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_SECRET_KEY=
```

Replace the placeholder values with your actual [Clerk](https://clerk.com/), [Stripe](https://stripe.com/in), [NeonDB](https://neon.tech/), [Google Maps](https://console.cloud.google.com/), and [Geoapify](https://www.geoapify.com/) credentials. You can obtain these credentials by signing up on the respective websites.

## Features
- Onboarding Screens
- Authentication with Clerk Email
- Bottom Tab Navigation
- Map Functionality
- Zustand for State Management
- Stripe Payment Integration
- Location Autocomplete
- Ride Booking and History
- OAuth Authentication
- Profile and Message Screens

## Technologies Used
- **Frontend:** React Native, TypeScript, Tailwind CSS
- **Backend:** NeonDB, PostgreSQL
- **Authentication:** Clerk, OAuth
- **Payments:** Stripe
- **State Management:** Zustand

## Running the App
1. Start the development server:
    ```bash
    npx expo start
    ```
2. Run the app on a simulator or device:
    ```bash
    npm run android # for Android
    npm run ios     # for iOS
    ```
3. Alternatively, download the Expo Go app to scan the QR code and run the app on your device.

## Contributing
Feel free to submit issues and pull requests. Please follow the coding standards and guidelines outlined in the project.

---
