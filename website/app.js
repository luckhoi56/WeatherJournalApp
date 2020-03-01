/* Global Variables */
var api_key = '750c257ad74cd91d9a1d54e0c739b736';
const fetch = require('express');
var baseURL = `http://api.openweathermap.org/data/2.5/weather?q=${userZip}&appid=${api_key}`;
var hardCode ='http://api.openweathermap.org/data/2.5/weather?q=91763&appid=750c257ad74cd91d9a1d54e0c739b736'
/// Async POST
const postData = async ( url = '', data = {})=>{

    const response = await fetch(url, {
    method: 'POST', 
    credentials: 'same-origin', 
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header        
  });

    try {
      const newData = await response.json();
      return newData;
    }catch(error) {
    console.log("error", error);
    }
};

// Async GET
const retrieveData = async (url='') =>{ 
  const request = await fetch(url);
  try {
  // Transform into JSON
  const allData = await request.json()
  }
  catch(error) {
    console.log("error", error);
    // appropriately handle the error
  }
};

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

