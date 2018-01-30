describe('Feature Tests', function() {

  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
  })

  it('Airport can instruct plane to land', function() {
    airport.land(plane)
    expect(planesArray).toContain(plane);
  })
}
)
