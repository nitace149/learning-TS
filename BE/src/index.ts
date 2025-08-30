import express from 'express';
import mongoose from 'mongoose';
import { UserModel } from './db';
// import jwt from "jsonwebtoken";

// jwt.verify();

const app = express()

app.post('api/v1/signUp', async(req,res) => {
    //zod validation

    const userName = req.body.username;
    const password = req.body.password;
    
    await UserModel.create({
        userName: userName,
        password: password,
    })

    res.json({Message:"user signup successfully"})

})


app.post('api/v1/signIn', (req,res) => {

})



app.post('api/v1/cotent', (req,res) => {

})


app.get('api/v1/cotent', (req,res) => {

})


app.delete('api/v1/cotent', (req,res) => {

})

app.listen(5050);