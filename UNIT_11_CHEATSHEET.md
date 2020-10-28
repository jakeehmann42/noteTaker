## Starting an Express project

### 1. (Optional) Set up a repo

* Make a repo on github
* Clone it to your local device.
* Navigate to the folder

### 2. Installation

* Set up the npm stuff!

```
npm init -y
```

* Inside the package.json, add the following scripts:

```
"start":"node server.js"
"test":"jest"
```

* This is nice so that we can just run 'npm start'!
* Install any packages you may need:
    * express is the most important one! `npm install express`

### 3. Initial setup

* Create a `server.js` file.
    * This is our server! It's where our application starts! Think of it as the big box.
* Inside `server.js`:
    * Import express, and any other packages you need at the server level:
    * Set a const to your port, 3000 or 8000 are common!
    * Set a const to a new instance of express
    * Add any middleware to express you may need
    * Add any routes you may need
    * Start the server listening: 

    ```javascript
    app.listen(PORT, function() {
        console.log("App listening on PORT " + PORT);
    });
    ```

* Run your server!

### 4. Deploy:

* See the Heroku cheatsheets!