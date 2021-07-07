const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const router = require('./routes');
require('dotenv').config();
const app = express();

app.use(cors());// cors origin allow
app.use(express.json());// allow body-parser
app.use(express.urlencoded({extended: false}));//allow urlencoded
app.use("/products", router);
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.oss1b.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
const PORT = process.env.PORT || 4040;
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
.then(()=>{
    app.listen(PORT, ()=>{
        console.log(`Server is running on PORT ${PORT}`);
    })
})