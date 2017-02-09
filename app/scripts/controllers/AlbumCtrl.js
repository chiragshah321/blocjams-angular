(function() {
      function AlbumCtrl(Fixtures) {
        this.albumData = Fixtures.getAlbum(); 
     }
 
     angular /*global angular*/
         .module('blocJams')
         .controller('AlbumCtrl', ['Fixtures', AlbumCtrl]);
 })();