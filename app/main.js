angular.module('Contactical', [])
.service('ContactService',function($http){
	var self = this;

	self.contacts = [];
	self.getContacts=function(){

		$http.get('http://localhost:9001/contacts').then(function(response){
			self.contacts = response.data;
		},function(response){

		});
	}
})