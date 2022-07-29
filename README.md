# server-monitor
A quick server monitor using node express and sockets


This is a sandbox I plan on putting charts and realtime api calls. 
Learned a lot about sockets, API calls and server to client data transfer.
Dumb project and I hope someone tells if theres a better way to pull json data.


---

### router.js 
This is where each shell command gets executed and pushed to each url. It's in JSON and can be pulled into differnt projects.

### app.js
Here you pull from router.js using axios and put into variables and pushes static data to index.ejs

### index.ejs
Here is the template where you see all the outputted data. There is a script on the botton of this file that pulls uptime.
