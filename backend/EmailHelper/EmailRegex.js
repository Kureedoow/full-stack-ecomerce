

const EmailRegex = (email) =>{
if(((/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))))
{
return true;
}
}

module.exports = EmailRegex;