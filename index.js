const express = require('express');
const router = require('./router/router');
const app = express();
const cors = require('cors')

app.use(express.json());
app.get('/', (req, res)=>{
    res.send("Server is running")
});

app.use(
	cors()
)

app.use('/api/v1', router);

app.listen(4000, ()=>{
    console.log("Sever is up and running")
})