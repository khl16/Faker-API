// import {faker} from '@faker-js/faker';

const {faker} = require ("@faker-js/faker")
console.log(faker.datatype.uuid());
const express = require("express");
const res = require("express/lib/response");
const app = express();
app.use(express.json());
app.use(express.urlencoded( {extended:true}));

const users =[]
app.post("/api/users", function (request,response) {
const newUser = {
    user: "John",
    state:"USA",
}
users.push(newUser)
});
app.post("/api/users", function (request,response) {
   response.json(users)

    });
app.get("/api",(req,res=>{ res.send(
    "our express api server is now sending this over to the browesr");
}));
app.get("/api/users",function(request,response){

});
const server = app.listen(8000,()=>
 console.log('Server is locked and loaded on port ${server.address.port}!'))