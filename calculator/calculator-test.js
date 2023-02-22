
it('should calculate the monthly rate correctly', function () {
//is it actually working?
  const values = {
    amount: 10000,
    years: 8,
    rate: 5.8
  };
  expect(calculateMonthlyPayment (values)).toEqual('130.44')
});


it("should return a result with 2 decimal places", function() {
//OK but does it work with two decimal places?
  const values = {
    amount: 10043,
    years: 8,
    rate: 5.8
  };
  expect(calculateMonthlyPayment(values)).toEqual('131.00');
});


it("should be able to handle maliciously high intrest rates", function(){
//OK but what about a stress test with high numbers?
  const values ={
    amount:1000,
    years: 40,
    rate:99
  };
  expect(calculateMonthlyPayment(values)).toEqual('82.50');
});

