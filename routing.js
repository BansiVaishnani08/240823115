const express= require('express');
const app=express();
const port=800;

app.use(express.json());


// ================USING GET METHODS===============
// app.get('/',(req,res)=>
// {
//     res.send('Hello');
// });

// app.get('/store/:name',(req,res)=>{
//     res.send(`hello ${req.params.name}`);
// });

// app.get('/update/:name',(req,res)=>{
//     res.send(`update ${req.params.name}`);
// });

// ================USING POST METHODS===============

app.post('/store/:name',(req,res)=>{
    res.send(`hello ${req.params.name}`);
})

//JSON data handling
app.post('/data',(req,res)=>{
    res.send(`Data received: ${JSON.stringify(req.body)}`);
})

app.post('/data1',(req,res)=>{
    const { name, email } = req.body;
    res.send(`name: ${name}\n email: ${email}`);
})

app.post('/data2',(req,res)=>{
    const info = req.body;
    console.log(info);
    // res.json({
    //     message: "Data received successfully",
    //     data: info
    // })
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});