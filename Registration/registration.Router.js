const router = require("express").Router();
const {addNewUser} = require("../Registration/registration.Controller");

router.post("/registration",addNewUser);    //tops registration router
router.get("/registration",function(req,res) {
    res.sendFile(__dirname + '/index.html');
})
module.exports = router;