const express = require("express");
const app = express();
const PORT = 7000;
const mongoose = require("mongoose");
const User = require("./Modules/User");
const URL =
  "mongodb+srv://Ghassen:Ghassen30@cluster0.uueug.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
  app.listen(PORT, () => {
    console.log(`sever is running on port  ${PORT}`);
  });
  mongoose.connect(URL).then(() => {
    console.log("the database is connected");
  });
  const userOne = new User({ name: "Ghassen", age: 14 ,favouriteFood:["Pasra","Pizza"]});
  userOne.save().then((data) => {
    console.log(`${data} is saved `);
  });
  const arrayOfUsers = [
    { name: "ali", age: 30,favouriteFood:["Slata","Fish"] },
    { name: "oussama", age: 50,favouriteFood:["sushi","Ramen"]},
    { name: "karim", age: 24,favouriteFood:["Nuggets", "Ma9loub"] },
  ];
  User.create(arrayOfUsers);
  User.find().then((data) => {
    const users = data;
    console.log(users);
  });
  User.findOne({ name: "ali" }).then((data) => {
    console.log(data);
  }); 
  User.findById({_id:  ObjectId("6207c85f1b1949b38179919f")}, function (err, docs) {
    if (err){
        console.log(err);
    }
    else{
        console.log("Result : ", docs);
    }
});
User.findByIdAndDelete({  _id:  ObjectId("6207c85f1b1949b38179919f")}).then(() =>
  console.log("deleted")
);

