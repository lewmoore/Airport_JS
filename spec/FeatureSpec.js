describe('Feature Tests', function() {

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
  })

  it('Airport can instruct plane to land', function() {
    airport.land(plane)
    expect(airport.hangar()).toContain(plane);
  });
});
