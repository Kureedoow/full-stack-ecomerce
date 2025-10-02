const passwordRegexCapitalLetter = (password) => {

if((/(?=.*[A-Z])/.test(password))){
    return true;
}
}
module.exports = passwordRegexCapitalLetter