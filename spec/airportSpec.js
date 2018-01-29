describe('Airport', function() {

  var airport;

  beforeEach(function() {
    airport = new Airport();
  })

  it('plane lands at airport', function() {
    airport.land(plane)
    expect(airport.planes()).toContain(plane);
  })
}
)
