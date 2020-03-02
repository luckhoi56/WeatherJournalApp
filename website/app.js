// hard_code ="http://api.openweathermap.org/data/2.5/weather?q=91763&appid=750c257ad74cd91d9a1d54e0c739b736"
/* Global Variables */
var api_key = '750c257ad74cd91d9a1d54e0c739b736';
var sent_data ={tem:'',userInput:'' ,current_date:''};
//const fetch = require('express');
var baseURL;
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();


document.getElementById('generate').addEventListener('click',performAction);

function performAction(e){
  const user_input_zip = document.getElementById('zip').value;
  const user_input_comment = document.getElementById('feelings').value;
  console.log("user zip is " + user_input_zip +"\n");
  baseURL =  `http://api.openweathermap.org/data/2.5/weather?q=${user_input_zip}&appid=${api_key}`;
  
  getInformationFromAPI(baseURL)
  //send the information back to the server use POST
  .then((data) =>{
    console.log(`temperature data is ${data}`);
    postData("http://localhost:3000/user",{temp:data,userInput:user_input_comment ,current_date:newDate});
  })
  .then(
    updateUI()
  )
  
  //make a GET request to get recent entry
}
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
    console.log("error is ", error);
    }
};


//Async API GET
const getInformationFromAPI = async(baseURL)=>{
  const res = await fetch(baseURL)
  try{
    const data = await res.json();
    console.log(data.main.temp);
    return data.main.temp;
  }
  catch(error) {
    console.log("error", error);
    // appropriately handle the error
  }
};

const updateUI= async() =>{
  const request = await fetch("http://localhost:3000/all");
  try {
  // Transform into JSON
  const m_entry = await request.json();
  console.log(m_entry);
  document.getElementById('date').innerHTML =m_entry.current_date;
  document.getElementById('temp').innerHTML =m_entry.temp;
  document.getElementById('content').innerHTML =m_entry.userInput;

  }
  catch(error) {
    console.log("error", error);
    // appr
}
}


