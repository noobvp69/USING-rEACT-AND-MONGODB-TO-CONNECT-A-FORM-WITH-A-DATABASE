const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser')
app.use(express.static('public'))
//Set vies directory for any views being rendered
app.set('views' , path.join(__dirname, 'views'))
// Setting pug as the new engine
app.set('view engine', 'pug')
app.use(bodyParser.urlencoded({extended: true}))
app.get('/', (req,res)=>{
    res.render('form', {title: 'Submit Form'});
})
app.post('/submit',(req, res)=>{
    const {name, email, phone,address,gender,qualification,district}=req.body;
    res.render('result', {title: 'Form Submitted',name,email,phone,address,gender,qualification,district});
})
//Define 
app.get('/',(req,res)=>{
    items=['Item 1','Item 2','Item 3']
    
    res.render('index',{ title: 'Express & Pug Tutorial', message: 'Welcome to the Pug Template Engine!',items})
})

app.get('/form',(req,res)=>{
    res.render('form')
 })

const port = process.env.port || 3000
app.listen(port,()=>{
    console.log(`Server running on localhost:${port}`)
})