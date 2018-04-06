const Record = function(artist, title, genre, price) {
  this.artist = artist;
  this.title = title;
  this.genre = genre;
  this.price = price;
};

Record.prototype.printDetails = function () {
  let details = this.artist + " " + this.title + " " + this.genre + " " + this.price;
  return details;
};


module.exports = Record;
