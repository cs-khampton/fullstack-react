These notes were taken from [Arpan Neupane's Tutorial](https://youtu.be/mKmxc8TcWQ8?si=YJW80PQbZawhl5QW)

# Server Setup

1. Create a folder for server `mkdir server`

2. Initalize the server folder: `npm init -y` (creates package.json)

3. Create the server file: `touch server.js` (can be any name)

4. Install Express.js (backend framework): `npm install express`

5. Install CORS (Cross-Origin Resource Sharing): `npm install cors`

6. Install nodemon (auto restart server when changes occur):
  `npm install nodemon -D`

7. Update `server/package.json` 
     - Change `"main" : "server.js` (or to whatever you named it)
     - Add "start" and "dev" server start scripts 
      ```
      "scripts": { 
          ... 
          "start" : "node server", 
          "dev": "nodemon server"
      }
      ```
    
 8. Set up `server.js`
    - Import the Express.js module for creating the server
      ``` const express = require("express");```
    - Import the CORS module to safely allow requests from the specified origin
      ``` const cors = require("cors");```
    - Create an instance of the Express application
      ``` const app = express();```
    - Define CORS options to allow requests from specified origin(s)
        ``` 
        const corsOpts = { 
          origin: "http://localhost:5173", // 5173 is default port for React Vite
        }
        ```
    - Use the CORS middleware with defined options
      `app.use(cors(corsOpts));`
    - Define route for the API endpoint
      ```
      app.get("/api", (req, res) => {
        res.json({ name: ["item1", "item2", ...]});
      });
    - Listen for requests on specified port
      ```
      app.listen(8080, () => {
        console.log("Server started on port 8080");
      });
      ```

# Frontend Setup
1. In the parent folder, create a new vite project: `npm create vite@latest client` (creates a project called "client")
   
2. Update the project dependencies by moving into the client folder (`cd client/`) and running `npm install`
   
3. From inside the `client/` folder, install axios to make network requests: `npm install axios`
   
4. Start the client: `npm run dev`

## Server Connection Verification
1. Open `client/src/App.jsx`
2. Import axios: `import axios from 'axios'`
3. Import `useState`: `import { useEffect, useState } from 'react'`
4. Create a state array: `const [array, setArray] = useState([]);`
5. Create a a way to fetch from the API: 
   
    ``` 
    const fetchAPI = async () => {
        const response = await axios.get('http://localhost:8080/api');
        setAray(response.data.fruits); // Update the state with the fetched data
        console.log(response.data);
    }
    ```

6. Use `useEffect` to call fetchAPI on initial render

    ``` 
    useEffect(() => {
        fetchAPI();
    }, []);
    ```

7. To display if the API connection is working, add into the HTML
    ``` 
    {array.map((name, item) => (
        <p key={item}>{name}</p>
    ))}
    ```