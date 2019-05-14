const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const passportJWT = require('passport-jwt');
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;
const User = require('../models/user')

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField : 'password',
    session: false 
},
    (email, password ,done )=>{
        User.findOne({
            email: email
        },function(err,user){
            if (err){
                return done(err);
            }
            if (!user){
                return done(null, false , {message:" User Dose not Exist "});
            }
            user.verifyPassword(password, user.password,(err, match)=>{
                if(err){return done(null, false , {message:"Something  Wrong !!! "})}
                if (!match) {
                    return done(null , false , {message: "Password Doesn't Match!  "})}
                    return done(null, user)
            })
        });
    }
));

    passport.use(new JWTStrategy({
        jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
        secretOrKey: 'your_jwt_secret'
    },
    function (jwtPayload, done) {
    
        return User.findById(jwtPayload._id)
        .then(user => {
            return done(null, user);
        })
        .catch(err => {
            return done(err);
        });
    }
    ));
    
    
    passport.serializeUser(function (user, done) {
        done(null, user.id);
    });
    
    passport.deserializeUser(function (id, done) {
        User.findById(id, function (err, user) {
        done(err, user);
        });
    });
