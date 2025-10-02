const passwordRegexSpecialCharacter=(password)=>{
if((/(?=.*[@$!%*?&])/.test(password))){
return true;
}
}
module.exports = passwordRegexSpecialCharacter