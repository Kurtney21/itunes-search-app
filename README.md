# Media Search Application

## Description

The Media Search Application is a full-stack web app that allows users to search for various media types using the iTunes Search API. Built with React on the front end and Express on the back end, this application provides an intuitive interface to explore albums, artists, and songs. Users will be able to authenticate via JWT(future release), ensuring secure access to the app's features.

## Purpose

The primary purpose of this application is to provide a seamless experience for users to search and discover media from the extensive iTunes library. Whether you're looking for music albums, individual songs, or artists, this app enables users to fetch relevant information quickly and efficiently.

## Key Features

- **Media Search**: Search for albums, songs, or artists using a simple search bar.
- **JWT Authentication**: Secure your endpoints with JSON Web Tokens.
- **Responsive Design**: An intuitive user interface that works on multiple devices.
- **Dynamic Data Fetching**: Fetches real-time data from the iTunes Search API.
- **Error Handling**: Provides clear feedback when search queries yield no results or if an error occurs.

## Installation and Running Locally

To run this application locally, follow these steps:

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (Node package manager, usually installed with Node.js)

### Clone the Repository

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/Kurtney21/itunes-search-app.git

2. Navigate to the project directory:

   ```bash
   cd itunes-search-app

### Set Up the Client

1. Navigate to the client directory:
   ```bash
   cd client

2. Install the dependencies:

   ```bash
   npm install


3. Build the React app:

   ```bash
   npm run build

### Set Up the Server

1. Navigate back to root directory:
   ```bash
   cd ..

2. Navigate to the server directory:

   ```bash
   cd server


3. Install dependencies:

   ```bash
   npm install

### Run the Application

1. Start the server(root directory):
   ```bash
   npm start

2. Open another terminal window, navigate to the client directory, and start the React application:

   ```bash
   cd client
   npm start


3. The application will be available at http://localhost:3000.

### Usage
   
Once the application is running, you can use the search bar to find albums, songs, or artists. After entering your search term, the app will fetch the relevant data from the iTunes API and display the results.

### License
   
No license.

### Acknowledgements

- iTunes Search API
- Express
- React
