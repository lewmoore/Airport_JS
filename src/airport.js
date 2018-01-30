function Airport() {
  hangarArray = []
  // var weather = [true, false]
  // tstormy() = weather[Math.floor(Math.random() * weather.length)];
}

  Airport.prototype.hangar = function(){
    return hangarArray;
  }

  Airport.prototype.land = function(plane){
    weather = this.stormy();
    if (weather === true) {
      throw new Error('The plane cannot land due to the weather');
    } else {
      this.addToHangar(plane);
    };
  };

  Airport.prototype.takeOff = function(plane){
    weather = this.stormy();
    if (weather === true) {
      throw new Error('The plane cannot take off due to the weather');
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
    return randWeather
  };

  // Airport.prototype.weatherReport = function() {
  //   var report = this.stormy();
  //   return report;
  // }

  // Airport.prototype.weather = function() {
  //   return this.stormy
  // }
