const mongoose = require('mongoose');
const mongodbConfig = ()=>{

    //mongodb setUpp and connection here
mongoose.connect(`mongodb+srv://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@cluster0.fqpl4kn.mongodb.net/${process.env.DATABASE_NAME}?retryWrites=true&w=majority&appName=Cluster0`)
  .then(() => console.log('Connected!'));


}
module.exports =  mongodbConfig