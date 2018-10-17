function Player() {
}
Player.prototype.main = function(number) {
    var list = '';
    if (number>=1)
    {
      for(let i =number;i>0;i--)
      {
          list += i+' bottle of beer on the wall, '+i+' bottle of beer.'+'\n';
          let mark =i -1;
          if(mark!=0)
          {
            list += 'Take one down and pass it around, '+mark+' more bottles of beer on the wall.'+'\n';
          }
          else
          {
            list += 'Take one down and pass it around, no more bottles of beer on the wall.'+'\n';
          }
      }
    }
    list += 'No more bottles of beer on the wall, no more bottles of beer.'+'\n'+
        'Go to the store and buy some more, 99 bottles of beer on the wall.';
    return list;
};


module.exports = Player;
