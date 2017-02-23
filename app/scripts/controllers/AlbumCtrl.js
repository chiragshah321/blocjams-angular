(function() {
      function AlbumCtrl(Fixtures, SongPlayer) {
        this.albumData = Fixtures.getAlbum(); 
        this.songPlayer = SongPlayer; 
     }
 
     angular /*global angular*/
         .module('blocJams')
         .controller('AlbumCtrl', ['Fixtures', 'SongPlayer', AlbumCtrl]);
})();
 