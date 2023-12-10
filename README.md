
# Swift Cart - Ecommerce Web App

## Overview

Swift Cart is a full-stack ecommerce web application built with React (TypeScript), MUI, redux for the frontend, Node.js, Express, MongoDB and cloudinary for the backend. The web app provides comprehensive CRUD functionality. Additionally, it supports secure authentication with JWT.

## Tech Stack

- **Frontend:**
  - React (TypeScript)
  - Tailwind CSS

- **Backend:**
  - Node.js
  - Express
  - MongoDB (Database)

- **Authentication:**
  - JWT (JSON Web Tokens)

## Features

- **User Authentication:**
   - Secure user authentication using JWT (JSON Web Tokens).
   - Users can sign up and log in using their email and password.

- **Cart Management:**
   - Users can add, edit, and delete items from cart.

- **Orders Management:**
   - Users can view previous orders.

- **Stripe Payment Integration:**
   - Secure Checkout process using Stripe for payment processing.
   - Integration with Stripe's webhook endpoint to update order status.


## Project Structure

The root project has `client` and `api` folders. 

- **Client:** Frontend React application.

- **API:** Backend Node.js and Express application.

## Setup
- **Clone the Repository:**
	- git clone git@github.com:ahmedwagih96/property-pulse.git

- **Install Backend Dependencies and run the server:**
	- yarn install.
	- yarn run dev

- **Install Frontend Dependencies and run the server:**
	- cd client 
    - yarn install
	- yarn run dev 

## Local Environment Setup

- **Frontend:**
Create a `.env` file in the `client` folder with the following content:
- VITE_STRIPE_PUBLISH_KEY = YOUR_STRIPE_PUBLISH_KEY
- VITE_BASE_URL = YOUR_BACKEND_URL
  
- **Backend:**
 Create a `.env` file in the `root` folder with the following content:
- MONGODB_URI= YOUR_MONGODB_URI
- JWT_SECRET= YOUR_JWT_SECRET
- CLOUDINARY_CLOUD_NAME = YOUR_CLOUDINARY_CLOUD_NAME
- CLOUDINARY_API_KEY = YOUR_CLOUDINARY_API_KEY
- CLOUDINARY_API_SECRET = YOUR_CLOUDINARY_API_SECRET
- CLIENT_DOMAIN = YOUR_CLIENT_DOMAIN
- STRIPE_SECRET_KEY = YOUR_STRIPE_SECRET_KEY
- STRIPE_ENDPOINT_SECRET = YOUR_STRIPE_ENDPOINT_SECRET
