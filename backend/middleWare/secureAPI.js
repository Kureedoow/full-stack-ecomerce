const secureAPI = (req,res,next) =>{

// console.log("i am middleware");
if(req.headers.authorization == "qwertyuuuioopp"){
 next();
}else{
res.send("Error : Authorization failed");

}


}
module.exports= secureAPI