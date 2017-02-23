(function() {
     function CollectionCtrl(Fixtures) {
        this.albums = Fixtures.getCollection(12);
     } 
 
     angular /*global angular*/
         .module('blocJams')
         .controller('CollectionCtrl', ['Fixtures', CollectionCtrl]);
})();
