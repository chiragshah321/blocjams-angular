(function() {
     function AlbumCtrl() {
        this.albumData = angular.copy(albumPicasso); /*global albumPicasso*/
     }
 
     angular /*global angular*/
         .module('blocJams')
         .controller('AlbumCtrl', AlbumCtrl);
 })();