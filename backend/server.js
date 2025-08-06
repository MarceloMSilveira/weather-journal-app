
import path from "path";
const __dirname = import.meta.dirname;


// Setup empty JS object to act as endpoint for all routes
const projectData = {
  date: 'test',
  place: 'test',
  temperature: 'test',
  user_feeling: 'test'
};

// Require Express to run server and routes
import express from "express";
import cors from "cors";

// Start up an instance of app

const app = express();
const port = 3010;

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(express.urlencoded());
app.use(express.json());

// Cors for cross origin allowance
app.use(cors());

// Initialize the main project folder
app.use(express.static(path.resolve(__dirname,'../dist')));

app.get('/test',(req,res)=>{
  res.send('Success!');
})


// Setup Server
app.listen(port, ()=>{
  console.log(`server up on port ${port}`);
})