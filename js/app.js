var app = angular.module('app', ['ngRoute']);
// init
app.config(['$routeProvider',function($routeProvider){
	$routeProvider.when('/home',{
		templateUrl: 'home.html',
		controller: 'homeController'
	}).otherwise({
		redirectTo: '/home',
	});
}]);
app.controller('homeController', function($scope){
	$scope.getRandom = function(){
		return Math.round(Math.random()) ;
	};
	$scope.colors = ['blue','red', 'green'];
	$scope.chapters = ["Scarcity & Decision Making","National Decision Making",'Productive Resources','Demand, Supply & Markets','Spectrum of Markets','Distribution','Labour Unions', 'The Entrpreneur',
	'Business Organization & Finance', 'Consumption & Savings','Government Expenditures & Revenues', 'Money & Banking','Unemployment', 'Inflation', 'Economic Growth & Productivity', 'International Trade'];
});
