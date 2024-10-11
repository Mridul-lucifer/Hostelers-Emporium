const express = require('express');
const app = express();
const port = 5000;
const {verification} = require('./Functions/middlewares.js')
const {Login,SignUp,UpdateProfile,ChangePassword,AccountDelete,AddProduct,UpdateProduct,DeleteProduct,AllProducts,YourProducts,ProductBuying} = require('./Functions/Endpoints.js')
const cors = require('cors')


app.use(express.json())
app.use(cors())


app.post('/SignUp' , SignUp);
app.post('/Login' , Login);
app.post('/UpdateProfile' , verification , UpdateProfile);
app.post('/ChangePassword' , verification , ChangePassword);
app.post('/AccountDelete'  , AccountDelete);
app.post('/AddProduct' , verification , AddProduct);
app.post('/UpdateProduct' , verification , UpdateProduct);
app.post('/DeleteProduct' , verification , DeleteProduct);
app.post('/AllProducts' , verification , AllProducts);
app.post('/YourProducts' , verification , YourProducts);
app.post('/ProductBuying' , verification , ProductBuying);
 

 
app.listen(port ,()=>{
    console.log("Server Working Fine on Port "+port);
})