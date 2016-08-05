/**
 * Created by Aarish on 8/1/16.
 */
const Models = require('../models/');


function getProfileById(userId) {
 
  return new Promise (function (resolve, reject) {

   Models.user.findById ({_id: userId}, function (err, user) {

    if (err) {
     reject (err)
    }
    resolve (user);

   })

  })
 
}


module.exports={
 getProfileById:getProfileById
}