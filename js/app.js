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
	 $(function(){
        $("#subtitle1").typed({
            strings: ["In Economics you learn about "],
            typeSpeed: -3,
            loop: false,
            showCursor:false,
            onStringTyped: function() {


            		 $(function(){
        $("#subtitle").typed({
            strings: ["scarcity.", "people.", 'demand and supply curves :(','wants and needs.','economic growth.', 'money $$$.', 'unemployment.', 'jobs and labour.','productivity.', 'interest rates.'],
            typeSpeed: -10,
            loop: true,
            backDelay: 4000,
            backSpeed: -3,
   		 });
    });
            }
    });
    });
	$('#scroll').on('click', function(){
		$('html,body').animate({
			scrollTop: $('.item:first').offset().top - 40
		},900);

	});
	$scope.getRandom = function(){
		return Math.round(Math.random()) ;
	};
	$scope.colors = ['blue','red', 'green'];
	$scope.chapters = ["Scarcity & Decision Making","National Decision Making",'Productive Resources','Demand, Supply & Markets','Spectrum of Markets','Distribution','Labour Unions', 'The Entrepreneur',
	'Business Organization & Finance', 'Consumption & Savings','Government Expenditures & Revenues', 'Money & Banking','Unemployment', 'Inflation', 'Economic Growth & Productivity', 'International Trade'];
});
