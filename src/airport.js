function Airport() {
}

function Plane() {
  
}

var planesArray = []

Airport.prototype.land = function(plane) {
  planesArray.push(plane)
}

// Airport.prototype.planes = function() {
//
// }
