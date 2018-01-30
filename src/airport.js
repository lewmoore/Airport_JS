function Airport() {
  hangarArray = []

}

  Airport.prototype.hangar = function(){
    return hangarArray
  }

  Airport.prototype.land = function(plane){
    hangarArray.push(plane)
  }

  Airport.prototype.takeOff = function(plane){
    hangarArray.pop(plane)
  }
