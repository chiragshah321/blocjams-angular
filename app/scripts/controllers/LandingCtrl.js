(function() {
     function LandingCtrl() {
        this.heroTitle = "Turn the Music Up!";

     }
 
     angular /*global angular*/
         .module('blocJams')
         .controller('LandingCtrl', LandingCtrl);
 })();
