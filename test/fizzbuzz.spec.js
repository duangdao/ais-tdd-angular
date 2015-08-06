describe('FizzBuzz', function(){

	it('should return string "1" when get number 1', function(){
		expect(answer(1)).toEqual("1");
	});

	it('should return string "2" when get number 2', function(){
		expect(answer(2)).toEqual("2");
	});


	it('should return string "3" when get number 3', function(){
		expect(answer(3)).toEqual("Fizz");
	});

});