import http from 'http';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';
import passport from 'passport';
import LocalStrategy from 'passport-local'.'strategy';
import flash from 'connect-flash'
import db from './db';
import api from './resources';


var app = express();
app.server = http.createServer(app);

app.use(cors({
	exposedHeaders: ['Link']
}));

app.use(bodyParser.json({
	limit : '100kb'
}));

app.use(cookieParser());
app.use(require('express-session')({
	secret: 'keyboard cat',
	resave: false,
	saveUninitialized: false
}));

app.use(passport.initialize());
app.use(flash());
app.use(passport.session());

//passport config
var Account = require('./models/index');
passport.use(new LocalStrategy(Account.authenticate()));
passport.serializerUser(Account.serializerUser());
passport.deserializerUser(Account.deserializerUser());

db( _ => {
	app.use('/', api());
	app.server.listen(3000);
});

export default app;
