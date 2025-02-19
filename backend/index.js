const express=require('express');
const mongoose = require('mongoose');
const cors =require("cors");
require('./db/config');
const User=require('./db/User');
const Admin=require('./db/Admin');
const jwt=require('jsonwebtoken');
const jwtkey='rds';

const app= express();

app.use(express.json());
app.use(cors());

//User Register
app.post("/register",async (req,resp)=>{
    let user =new User(req.body);
    let result=await user.save();
    result=result.toObject();
    delete result.password;
    if(result){
        jwt.sign({result},jwtkey,{expiresIn:"2h"},(err,token)=>{
            if(err){
                resp.send({result:'Something went wrong'});
            }else{
            resp.send({result,auth:token});
            }
        });
    }else{
        resp.send({result:'Enter Details'});
    }
});

// User Login
app.post('/login',async (req,resp)=>{
    if(req.body.email && req.body.password){
        let user=await User.findOne(req.body).select("-password");
        if(user){
            jwt.sign({user},jwtkey,{expiresIn:"2h"},(err,token)=>{
                if(err){
                    resp.send({result:'Something went wrong'});
                }else{
                resp.send({user,auth:token});
                }
            });
        }else{
            resp.send({result:'No user Found'});
        }
    }else{
        resp.send({result:'No user Found'});
    }
});

//Admin Register
app.post("/admin/register",async (req,resp)=>{
    let admin =new Admin(req.body);
    let result=await admin.save();
    result=result.toObject();
    delete result.password;
    if(result){
        jwt.sign({result},jwtkey,{expiresIn:"2h"},(err,token)=>{
            if(err){
                resp.send({result:'Something went wrong'});
            }else{
            resp.send({result,auth:token});
            }
        });
    }else{
        resp.send({result:'Enter Details'});
    }
});

//Admin Login
app.post('/admin/login',async (req,resp)=>{
    if(req.body.email && req.body.password){
        let admin=await Admin.findOne(req.body).select("-password");
        if(admin){
            jwt.sign({admin},jwtkey,{expiresIn:"2h"},(err,token)=>{
                if(err){
                    resp.send({result:'Something went wrong'});
                }else{
                resp.send({admin,auth:token});
                }
            });
        }else{
            resp.send({result:'No user Found'});
        }
    }else{
        resp.send({result:'No user Found'});
    }
});

//One User Fetch
app.get('/user/:id',verifyToken,async (req,resp)=>{
    let result=await User.findOne({_id:req.params.id});
    if(result){
        resp.send(result);
    }else{
        resp.send({result:'no record found'});
    }
});

//One User Update
app.put('/user/:id',verifyToken,async (req,resp)=>{
    let result = await User.updateOne(
        {_id:req.params.id},
        {
            $set:req.body
        }
    )
    resp.send(result);
});

//One Admin Fetch
app.get('/admin/:id',verifyToken,async (req,resp)=>{
    let result=await Admin.findOne({_id:req.params.id});
    if(result){
        resp.send(result);
    }else{
        resp.send({result:'no record found'});
    }
});

//One Admin Update
app.put('/admin/:id',verifyToken,async (req,resp)=>{
    let result = await Admin.updateOne(
        {_id:req.params.id},
        {
            $set:req.body
        }
    )
    resp.send(result);
});

//Jwt Verification
function verifyToken(req,resp,next){
    let token=req.headers['authorization'];
    if(token){
        token=token.split(' ')[1];
        jwt.verify(token,jwtkey,(err,valid)=>{
            if(err){
                resp.status(401).send({result: 'please provide valid token'});
            }else{
                next();
            }
        })
    }else{
        resp.status(403).send({result: 'please add token with header'});
    }
}


app.listen(5000);