function Airport() {
  hangarArray = []

}

  Airport.prototype.hangar = function(){
    return hangarArray;
  }

  Airport.prototype.land = function(plane){
    this.addToHangar(plane);
  }

  Airport.prototype.takeOff = function(plane){
    weather = this.stormy();
    if (weather === true) {
      throw new Error('The plane cannot take off due the weather');
    } else {
      hangarArray.pop(plane);
    };
  };

  Airport.prototype.addToHangar = function (plane) {
    hangarArray.push(plane);
  };

  Airport.prototype.stormy = function () {
    var weather = [true, false]
    var randWeather = weather[Math.floor(Math.random() * weather.length)];
    randWeather
  };
