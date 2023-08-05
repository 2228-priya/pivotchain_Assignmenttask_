# Pivotchain_AssignmentTask
# Product Management Web Application

This is a web application built with Node.js, Express.js, MongoDB, HTML5, and CSS3. The application enables users to manage a comprehensive list of products, allowing them to add, update, and delete items from the list.

## Prerequisites

To run this application, you need to have the following software installed:

- Node.js
- MongoDB

## Getting Started

1. Clone the repository:
git clone # Product Management Web Application

This is a web application built with Node.js, Express.js, MongoDB, HTML5, and CSS3. The application enables users to manage a comprehensive list of products, allowing them to add, update, and delete items from the list.

## Prerequisites

To run this application, you need to have the following software installed:

- Node.js
- MongoDB

## Getting Started

1. Clone the repository:
git clone https://github.com/2228-priya/pivotchain_Assignmenttask_


2. Install dependencies:
cd product-management-app
npm install

3. Start the application:
node app.js
   
4. Open your web browser and go to [http://localhost:3000](http://localhost:3000) to access the application.

## Application Structure

The project structure is as follows:

- `app.js`: The main entry point of the application where the server is configured and routes are defined.
- `views/`: Contains EJS templates for rendering the views on the client side.
- `public/`: Contains static assets like CSS files.
- `models/`: Contains the Mongoose model for the product schema.

## Database Configuration

By default, the application uses a local MongoDB database. Make sure you have MongoDB installed and running on your machine. If you wish to use a different MongoDB instance, modify the connection URL in `app.js`.

## Functionality

- **Create a new product:** Go to [http://localhost:3000/create](http://localhost:3000/create) and fill out the form with product details to add a new product.
- **Update an existing product:** Click on the "Edit" link next to a product on the home page to update its details.
- **Show product list:** The home page [http://localhost:3000](http://localhost:3000) displays all existing products.
- **Delete a product:** Click on the "Delete" button next to a product on the home page to remove it from the list.
