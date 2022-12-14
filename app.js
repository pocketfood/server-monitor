const express = require('express')
const Router = require("./routes/router")
const app = express()
const port = 3000

const axios = require('axios');



app.get('/', (req, res) => {


    axios.get("http://localhost:3000/storage", {
    })
    .then(function (response) {
        
        const storagejson = JSON.stringify(response.data)
        const storage = JSON.parse(storagejson)
        //console.log(storage.storage);

    axios.get("http://localhost:3000/storage/total", {
    })
    .then(function (response) {
        
        const storagetotaljson = JSON.stringify(response.data)
        const storagetotal = JSON.parse(storagetotaljson)
        //console.log(storage.storage);
     
    axios.get("http://localhost:3000/whoami", {
    })
    .then(function (response) {
            
        const whoamijson = JSON.stringify(response.data)
        const whoami = JSON.parse(whoamijson)
        //console.log(whoami.whoami);
         
    axios.get("http://localhost:3000/uptime", {
    })
    .then(function uptime (response)  {
                  
    const uptimejson = JSON.stringify(response.data)
    const uptime = JSON.parse(uptimejson)
    //console.log(uptime.uptime);
    

    axios.get("http://localhost:3000/hostname", {
    })
    .then(function (response) {
        
        const hostnamejson = JSON.stringify(response.data)
        const hostname = JSON.parse(hostnamejson)
        //console.log(hostname.hostname);
     
  

    axios.get("http://localhost:3000/address", {
    })
    .then(function (response) {
        
        const addressjson = JSON.stringify(response.data)
        const address = JSON.parse(addressjson)
        //console.log(address.address);
    
    // Shows user on page
    console.log(req.headers);
    
    // Here is where you put the varibles above
    // everytime you pull data. Parse it and whatever data you need call it within the object
    // consult the debug console. It has saved my skin numerous times
            res.render("index", {
            hostname: hostname.hostname, 
            address: address.address, 
            storage: storage.storage, 
            storagetotal: storagetotal.storagetotal, 
            whoami: whoami.whoami, 
            uptime: uptime.uptime
            
        });
        });
        });
        });
        });
        });
    });
});



app.use('/', Router)

app.use(express.static(__dirname + '/views'));

app.set('view engine', 'ejs')

app.listen(port)
