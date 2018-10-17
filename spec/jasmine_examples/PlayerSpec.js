describe("Player", function() {
  var Player = require('../../lib/jasmine_examples/Player');
  //var Song = require('../../lib/jasmine_examples/Song');
  var player;
  //var song;

  beforeEach(function() {
    player = new Player();
  //  song = new Song();
  });

  it("should be able to play a Song", function() {
    var number = 1;
      expect(player.main(number)).toEqual('1 bottle of beer on the wall, 1 bottle of beer.'+'\n'+
          'Take one down and pass it around, no more bottles of beer on the wall.'+'\n'+
          'No more bottles of beer on the wall, no more bottles of beer.'+'\n'+
          'Go to the store and buy some more, 99 bottles of beer on the wall.');

  });

  it("should be able to play two Song", function() {
    var number = 2;
    expect(player.main(number)).toEqual('2 bottle of beer on the wall, 2 bottle of beer.'+'\n'+
        'Take one down and pass it around, 1 more bottles of beer on the wall.'+'\n'+
        '1 bottle of beer on the wall, 1 bottle of beer.'+'\n'+
        'Take one down and pass it around, no more bottles of beer on the wall.'+'\n'+
        'No more bottles of beer on the wall, no more bottles of beer.'+'\n'+
        'Go to the store and buy some more, 99 bottles of beer on the wall.');
  });

    it("should be able to play two Song", function() {
        var number = 3;
        expect(player.main(number)).toEqual(
            '3 bottle of beer on the wall, 3 bottle of beer.'+'\n'+
            'Take one down and pass it around, 2 more bottles of beer on the wall.'+'\n'+
            '2 bottle of beer on the wall, 2 bottle of beer.'+'\n'+
            'Take one down and pass it around, 1 more bottles of beer on the wall.'+'\n'+
            '1 bottle of beer on the wall, 1 bottle of beer.'+'\n'+
            'Take one down and pass it around, no more bottles of beer on the wall.'+'\n'+
            'No more bottles of beer on the wall, no more bottles of beer.'+'\n'+
            'Go to the store and buy some more, 99 bottles of beer on the wall.');
    });


/*  describe("when song has been paused", function() {
    beforeEach(function() {
      player.play(song);
      player.pause();
    });

    it("should indicate that the song is currently paused", function() {
      expect(player.isPlaying).toBeFalsy();

      // demonstrates use of 'not' with a custom matcher
      expect(player).not.toBePlaying(song);
    });

    it("should be possible to resume", function() {
      player.resume();
      expect(player.isPlaying).toBeTruthy();
      expect(player.currentlyPlayingSong).toEqual(song);
    });
  });

  // demonstrates use of spies to intercept and test method calls
  it("tells the current song if the user has made it a favorite", function() {
    spyOn(song, 'persistFavoriteStatus');

    player.play(song);
    player.makeFavorite();

    expect(song.persistFavoriteStatus).toHaveBeenCalledWith(true);
  });

  //demonstrates use of expected exceptions
  describe("#resume", function() {
    it("should throw an exception if song is already playing", function() {
      player.play(song);

      expect(function() {
        player.resume();
      }).toThrowError("song is already playing");
    });
  });*/
});
