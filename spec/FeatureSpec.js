describe('Feature Tests', function() {

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
  })

  it('Airport can instruct plane to land', function() {
    spyOn(airport, 'stormy').and.returnValue(false);
    airport.land(plane);
    expect(airport.hangar()).toContain(plane);
  });

  it('Airport can instruct plane to take off', function() {
    spyOn(airport, 'stormy').and.returnValue(false);
    airport.takeOff(plane);
    expect(airport.hangar()).toEqual([]);
  })

  it('wont take off plane when stormy', function(){
    spyOn(airport, 'stormy').and.returnValue(true);
    expect(function() {airport.takeOff(plane);}).toThrow(new Error('The plane cannot take off due to the weather'));
  });

  it('wont land plane when stormy', function() {
    spyOn(airport, 'stormy').and.returnValue(true);
    expect(function() {airport.land(plane);}).toThrow(new Error('The plane cannot land due to the weather'));
  })

  it('wont land plane when the hangar is full', function() {
    spyOn(airport, 'stormy').and.returnValue(false);
    hangarArray.length = 42;
    expect(function() {airport.land(plane);}).toThrow(new Error('The plane cannot land due to the airport be full'));

  });

});
