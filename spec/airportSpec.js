describe('Airport', function(){

  beforeEach(function(){
    airport = new Airport();
  });

  it('Airport hangar has no planes', function(){
    expect(airport.hangar()).toEqual([]);
  });
});
