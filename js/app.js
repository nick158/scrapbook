var app = angular.module('app', ['ngRoute']);
// init
app.config(['$routeProvider',function($routeProvider){
	$routeProvider.when('/home',{
		templateUrl: 'home.html',
		controller: 'homeController'
	}).when('/1',{
		templateUrl: "temp.html",
		controller: "c1controller"
	})
	.when('/2',{
		templateUrl : "temp.html",
		controller: "c2controller"
	})
	.when('/3',{
		templateUrl : "temp.html",
		controller: "c3controller"
	})
	.when('/4',{
		templateUrl : "temp.html",
		controller: "c4controller"
	})
	.when('/5',{
		templateUrl : "temp.html",
		controller: "c5controller"
	})
	.when('/6',{
		templateUrl : "temp.html",
		controller: "c6controller"
	})
	.when('/7',{
		templateUrl : "temp.html",
		controller: "c7controller"
	})
	.when('/8',{
		templateUrl : "temp.html",
		controller: "c8controller"
	})
	.when('/9',{
		templateUrl : "temp.html",
		controller: "c9controller"
	})
	.when('/10',{
		templateUrl : "temp.html",
		controller: "c10controller"
	})
	
	.when('/11',{
		templateUrl : "temp.html",
		controller: "c11controller"
	})
	.when('/12',{
		templateUrl : "temp.html",
		controller: "c12controller"
	})
	.when('/13',{
		templateUrl : "temp.html",
		controller: "c13controller"
	})
	.when('/14',{
		templateUrl : "temp.html",
		controller: "c14controller"
	})
	.when('/15',{
		templateUrl : "temp.html",
		controller: "c15controller"
	})
	.when('/16',{
		templateUrl : "temp.html",
		controller: "c16controller"
	})
	.otherwise({
		redirectTo: '/home',
	});
}]);
app.controller('c1controller', function($scope){
	$scope.title = 'Chapter 1';
	$scope.description = 'Scarcity & Decision Making';
});
app.controller('c2controller', function($scope){
	$scope.title = 'Chapter 2';
	$scope.description = "National Decision Making";
});
app.controller('c3controller', function($scope){
	$scope.title = 'Chapter 3';
	$scope.description = 'Productive Resources';
});
app.controller('c4controller', function($scope){
	$scope.title = 'Chapter 4';
	$scope.description = "Demand, Supply & Markets";
});
app.controller('c5controller', function($scope){
	$scope.title = 'Chapter 5';
	$scope.description = 'Spectrum of Markets';
});
app.controller('c6controller', function($scope){
	$scope.title = 'Chapter 6';
	$scope.description = "Distribution";
});
app.controller('c7controller', function($scope){
	$scope.title = 'Chapter 7';
	$scope.description = 'Labour Unions';
});
app.controller('c8controller', function($scope){
	$scope.title = 'Chapter 8';
	$scope.description = "The Entrepreneur";
});
app.controller('c9controller', function($scope){
	$scope.title = 'Chapter 9';
	$scope.description = 'Business Organization & Finance';
});
app.controller('c10controller', function($scope){
	$scope.title = 'Chapter 10';
	$scope.description = "Consumption and Savings";
});
app.controller('c11controller', function($scope){
	$scope.title = 'Chapter 11';
	$scope.description = "Government Expenditures & Revenue";
});
app.controller('c12controller', function($scope){
	$scope.title = 'Chapter 12';
	$scope.description = "Money & Banking";
});
app.controller('c13controller', function($scope){
	$scope.title = 'Chapter 13';
	$scope.description = 'Unemployment';
});
app.controller('c14controller', function($scope){
	$scope.title = 'Chapter 14';
	$scope.description = "Inflation";
});
app.controller('c15controller', function($scope){
	$scope.title = 'Chapter 15';
	$scope.description = 'Economic Growth & Productivity';
});
app.controller('c16controller', function($scope){
	$scope.title = 'Chapter 16';
	$scope.description = "International Trade";
});
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
            strings: ["scarcity.", "people.", 'demand and supply curves :)','wants and needs.','economic growth.', 'money $$$.', 'unemployment.', 'jobs and labour.','productivity.', 'interest rates.'],
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
	$scope.colors = ['col1','col2', 'col3'];
	$scope.chapters = ["Scarcity & Decision Making","National Decision Making",'Productive Resources','Demand, Supply & Markets','Spectrum of Markets','Distribution','Labour Unions', 'The Entrepreneur',
	'Business Organization & Finance', 'Consumption & Savings','Government Expenditures & Revenues', 'Money & Banking','Unemployment', 'Inflation', 'Economic Growth & Productivity', 'International Trade'];
});
