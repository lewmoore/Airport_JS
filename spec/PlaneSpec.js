describe('Plane', function(){

  beforeEach(function(){
    plane = new Plane();
  });

  it('Plane can land at an airport', function(){
    expect(plane.land).not.toBeUndefined()
  });
});
