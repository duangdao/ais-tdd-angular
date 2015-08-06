
describe('Contactical', function(){ 
	beforeEach(function(){ 
		module('Contactical'); // Load app module

	});

	describe('ContactService', function(){
		var service;

		beforeEach(function(){
			inject(function($injector){ // service is not module , injector get service in module
				service = $injector.get('ContactService'); // get service 
				$httpBackend = $injector.get('$httpBackend'); 
				$httpBackend.when('GET', 'http://localhost:9001/contacts')
                            .respond(200, [{},{}]);
			})
		});

		it('should return 2 contact when call getContacts()',function(){
			service.getContacts();
			$httpBackend.flush();
			expect(service.contacts.length).toEqual(2);

		});

		 it('should call backend api',function(){
		 	service.getContacts();
			$httpBackend.flush();

		 });
	});

});