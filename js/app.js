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
	.otherwise({
		redirectTo: '/home',
	});
}]);
app.controller('c1controller', function($scope){
	$scope.unitPic = 'https://images.unsplash.com/photo-1418225162054-0f773a996f9e?fit=crop&fm=jpg&h=725&ixlib=rb-0.3.5&q=80&w=1325';
	$scope.unitPic2 = 'https://images.unsplash.com/photo-1444136393836-70a14068c669?ixlib=rb-0.3.5&q=80&fm=jpg&w=1080&fit=max&s=95d8b080d24aecbb7019dd411ef52264';
	$scope.title = 'Chapter 1'
	$scope.description = 'Scarcity & Decision Making'
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
