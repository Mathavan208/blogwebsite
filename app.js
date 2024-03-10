require('dotenv').config();
const express=require('express');
const app=express();
const expresslayout=require('express-ejs-layouts');
app.use(express.static('./public'));
app.use(expresslayout);
app.set('layout','./layouts/main');
app.set('view engine','ejs');
const PORT=5000||process.env.PORT;
app.use('/',require('./server/routes/main'));
app.listen(PORT,()=>{
	console.log(`http://localhost:${PORT}/`);
});