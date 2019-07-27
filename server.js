const express = require('express');
const app = express();

app.use(express.static('./'))

app.get('/loggedIn', (req,res)=>{
    console.log('req', req.query);
    res.send(req.query)
})

app.listen(process.env.PORT || 3030);
console.log('App is listening to localhost:3030 ...');