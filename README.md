# Jobster Backend

## 👋 Introducing `Jobster Backend`

This repository contains the backend codebase responsible for handling `server-side` logic, database management, and communication between different system components

## 🔥 Demo

Here is the link to the live server. We hope you enjoy it.

> [The Jobster server Link]()

## 🏗️ How to Set up `Jobster Backend` locally?

### 🛠️ Prerequisites

Make sure you have the following installed on your machine:

-   Node.Js: [Download and install Node.js](https://nodejs.org/en)
-   Git: [Download and install Git](https://git-scm.com/)

### 🍴 Clone the Repo

1. Open a terminal or command prompt on your machine.

2. Navigate to the directory where you want to clone the project.

3. Run the following command to clone the repository:

```
git clone https://github.com/G-Mursalin/jobster-back-end.git
```

### ⬇️ Install Dependencies

1. Navigate into the project directory:

```
cd jobster-back-end
```

2. Install project dependencies using `npm`:

```
npm install
```

### 💎 Set Up Environment Variables

1. Create a `.env` file in the root of the project.
2. Check out the `.env.example` file and then copy everything into the `.env` file. Then set your own PORT, BCRYPT_SALT, JWT_ACCESS_SECRET, JWT_ACCESS_EXPIRES_IN , DATABASE_URL etc in `.env`

### 🦄 Start the Development Mode

Use the following command to start the app in the development mode:

```
npm run start:dev
```

It runs the server in development mode. Open [http://localhost:PORT](http://localhost:PORT) to view it in your browser. Where PORT is the port number specified in your `.env` file.

### 🧱 Build the App for Production

Use the following command to build the app for production:

```
npm run build
```

It builds the app for production in the `dist` folder. It contains all javascript files that were converted from typescript files.
