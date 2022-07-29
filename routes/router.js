const express = require("express");
const {exec } = require('child_process');
const Router = express.Router();

Router.get('/storage', (req, res) => {

    const child = exec(`df -h /dev/sda4 | awk '{print$5}'| sed -e 's/^[ \t]*/ /' | tr -d '[\n]'`)
    process.stdin.pipe(child.stdin)
    child.stdout.on('data', (data) => {
            
        res.json({storage: data});

    });
});

Router.get('/storage/total', (req, res) => {

    const child = exec(`df -h /dev/sda4 | awk '{print$4}'| sed -e 's/^[ \t]*/ /' | tr -d '[\n]'`)
    process.stdin.pipe(child.stdin)
    child.stdout.on('data', (data) => {
            
        res.json({storagetotal: data});

    });
});

Router.get('/uptime', (req, res) => {

    const child = exec(`uptime`)
    process.stdin.pipe(child.stdin)
    child.stdout.on('data', (data) => {
            
        res.json({uptime: data});
        
    });
});


Router.get('/whoami', (req, res) => {

    const child = exec(`whoami`)
    process.stdin.pipe(child.stdin)
    child.stdout.on('data', (data) => {
            
        res.json({whoami: data});
        
    });
});

Router.get('/hostname', (req, res) => {

    const child = exec(`uname -a`)
    process.stdin.pipe(child.stdin)
    child.stdout.on('data', (data) => {
            
        res.json({hostname: data});

    });
});

Router.get('/address', (req, res) => {

    const child = exec(`ip a | grep 'inet'| grep -v '127.0.0.1'| cut -d: -f2| awk '{print $2}'`)
    process.stdin.pipe(child.stdin)
    child.stdout.on('data', (data) => {
            
        res.json({address: data});

    });
});
    
module.exports = Router;