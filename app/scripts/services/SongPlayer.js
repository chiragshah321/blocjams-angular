 (function() {
     function SongPlayer() {
        var SongPlayer = {};
          
        var currentSong = null;
          
        /**
          * @desc Buzz object audio file
          * @type {Object}
          */
        var currentBuzzObject = null;
          
        /**
          * @function setSong
          * @desc Stops currently playing song and loads new audio file as currentBuzzObject
          * @param {Object} song
          */
        var setSong = function(song) {
            if (currentBuzzObject) {
            currentBuzzObject.stop();
            currentSong.playing = null;
        }
 
            currentBuzzObject = new buzz.sound(song.audioUrl, { /*global buzz*/
                formats: ['mp3'],
                preload: true
        });
 
            currentSong = song;
    };  
     
        /**
          * @function playSong
          * @desc Plays song
          * @param {Object} song
          */
        var playSong = function(song) {
            currentBuzzObject.play();
            song.playing = true;
         
    };
     
        /**
          * @function SongPlayer.play
          * @desc Loads audio files and plays song selected
          * @param {Object} song
          */
        SongPlayer.play = function(song) {
            if (currentSong !== song) {
                setSong(song);
                playSong(song); 
            } else if (currentSong === song) {
                if (currentBuzzObject.isPaused()) {
                currentBuzzObject.play();
                }
         
            } 
    };
     
       /**
         * @function SongPlayer.pause
         * @desc Pauses audiofile and stops song selected
         * @param {Object} song
         */
        SongPlayer.pause = function(song) {
        currentBuzzObject.pause();
        song.playing = false;
    };
          
          return SongPlayer;
    }
 
     angular /* global angular */
         .module('blocJams')
         .factory('SongPlayer', SongPlayer);
 })();
 