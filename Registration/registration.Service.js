const mongoose = require("mongoose");
let users = require("../../models/users");

module.exports ={
   NewUser: function(body){
        let Fname = body.FirstName;
        let Lname = body.LastName;
       // let Cname = body.Contact;
        let Ename = body.email;
        let Bname = body.businesName;
        let BDname = body.businessDescription;
        let BAname = body.businessAddress;
        users.create({
            firstName:Fname,
            lastName:Lname,
            contact:"12345678910",
            email:Ename,
            password:"dummytest",
            roleInBusiness:"dummy",
            businesName:Bname,
            businessDescription:BDname,
            businessAddress:BAname,
            businessType:"dummy",
            country:"dummyt",
            city:"dummy",
            zip:12345,
            domainUrl:"dummy"
        }, function (err, small) {
            if (err) console.log(err);
            console.log("data inserteed")
          });
   },
    fetchEmail: function(data) {            //check if user is entering unique email

    },
    fetchDomain: function() {           //check if user is entering unique domain

    },
    fetchContact: function() {          //check if user is entering unique contact number

    }
}