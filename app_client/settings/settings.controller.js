/**
 * Created by Aarish on 8/4/16.
 */
(function() {

 angular
   .module('meanApp')
   .controller('settingsCtrl', settingsCtrl);

 settingsCtrl.$inject = ['$location', 'meanData','$scope','$interval'];
 function settingsCtrl($location, meanData ,$scope,$interval) {
  var vm = this;

  vm.user = {};

  meanData.getProfile()
    .success(function(data) {
     vm.user = data;
    })
    .error(function (e) {
     console.log(e);
    });
  
  


  $(".button-collapse").sideNav();

  angular.element(document).ready(function () {
   $('.dropdown-button').dropdown({
      inDuration: 300,
      outDuration: 225,
      constrain_width: false, // Does not change width of dropdown to that of the activator
      hover: true, // Activate on hover
      gutter: 0, // Spacing from edge
      belowOrigin: true, // Displays dropdown below the button
      alignment: 'left' // Displays dropdown with edge aligned to the left of button
     }
   );
  });








 }

})();