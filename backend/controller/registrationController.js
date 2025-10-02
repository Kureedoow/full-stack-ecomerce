const EmailRegex = require("../EmailHelper/EmailRegex");
const passwordRegexSmallLetter = require('../EmailHelper/passwordRegexSmallLetter')
const passwordRegexCapitalLetter = require('../EmailHelper/passwordRegexCapitalLetter');
const passwordRegexDigit = require('../EmailHelper/passwordRegexDigit');
const passwordRegexSpecialCharacter = require("../EmailHelper/passwordRegexSpecialCharacter");
const userSchema = require("../models/userSchema");
const bcrypt = require('bcrypt');
const emailVerification = require('../VerificationCenter/emailVerification');
const registrationController =async (req,res) => {
    // console.log(req.body);
    //Backend errorhandling
    let {username,email,password}=req.body;
if(!username){
    res.send("username : please give a username")
}else if(!email){
    res.send("username : please give a email")
} else if(!EmailRegex(email)){
res.send("Email : please give a valid email")
}
else if(!password){
    res.send("username : please give a password")
}
else if (!passwordRegexSmallLetter(password)){
res.send("Error : Please input valid small letter" )
}else if(!passwordRegexCapitalLetter(password)){
res.send("Error : Please input valid capital letter" )
}else if(!passwordRegexDigit(password)){
    res.send("Error : Please input at list one digit number")
}else if(!passwordRegexSpecialCharacter(password)){
    res.send("Error : Please input special character")
}
else{
    let existingUser = await userSchema.find({email:email})
    console.log(existingUser);
if(existingUser.length>0){

    res.send({Error:`${existingUser[0].email}:This current email already have an account!`})
}
else{

    bcrypt.hash(password, 10, function(err, hash) {
    let data = new userSchema({
        username:username,
        email:email,
        password:hash,
    })
    console.log(hash);
    
    data.save()
  emailVerification(email)
//   res.send(req.body)
res.send("Registration done")
});
    
}

}  
}
//rapidmaan1
//pHpCvfD2DbfOlqYS 
module.exports = registrationController
