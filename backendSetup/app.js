const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(morgan('dev'));

app.get('/', (req,res) =>{
   res.send('<h1>Hello world!</h1>');
})

app.listen(5000, ()=> {
    console.log('Running on Port:5000')
});