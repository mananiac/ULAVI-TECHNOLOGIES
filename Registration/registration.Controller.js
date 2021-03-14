const {NewUser} = require("./registration.Service");

module.exports ={
    addNewUser: function(req,res) {        //validate field length and type etc,add acc date created
        const body = req.body;
        NewUser(body);

    }
}