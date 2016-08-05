var mongoose = require('mongoose');
var User = mongoose.model('User');
var services=require('../services/');

function getProfile(req, res) {

 var userId = req.payload._id;

 if (!req.payload._id) {
  res.status (401).json ({
   "message": "UnauthorizedError: private profile"
  });
 }


 return services.user.getProfileById (userId)
   .then (function (data) {
      res.json (data)
     },
     function (err) {
      throw err;
     }).catch (function (err) {
    res.json ({status: "error", message: err.message, err: err})
   })


};

module.exports={
 getProfile:getProfile
}



