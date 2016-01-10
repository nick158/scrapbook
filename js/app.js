var app = angular.module('app', ['ngRoute','ngAnimate',"ngSanitize"]).config(function(){
	new WOW().init();
});
// init
function scrollJack(element){
	var elem = $(element)
		$('html,body').animate({
			scrollTop: elem.offset().top
		},900);
}
							  
app.config(['$routeProvider',function($routeProvider){
	$routeProvider.when('/home',{
		templateUrl: 'home.html',
		controller: 'homeController'
	}).when('/1',{
		templateUrl: "temp.html",
		controller: "c1controller",
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
//runs animation
app.animation('.animated-view', function() {
  return {
	  enter: function(element, done){
		  $(element).css({
			  opacity: 0,
  			transition:"0.75s linear all"
		  });
		  $(element).css("-webkit-transition", "0.75s linear all");
		  $(element).animate({
			  opacity: 1
		  },done);
	  },
	  leave: function(element, done){
		  $(element).css({
			  opacity: 1,
  			transition:"0s linear all"
		  });
		  $(element).css("-webkit-transition", "0s linear all");
		  $(element).animate({
			  opacity: 0
		  },done);
		  $('html,body').animate({
			scrollTop: 0
		},500);
	  }
  };
 
}); 
app.directive('compile', ['$compile', function ($compile) {
    return function(scope, element, attrs) {
        scope.$watch(
            function(scope) {
                // watch the 'compile' expression for changes
                return scope.$eval(attrs.compile);
            },
            function(value) {
                // when the 'compile' expression changes
                // assign it into the current DOM
                element.html(value);

                // compile the new DOM and link it to the current
                // scope.
                // NOTE: we only compile .childNodes so that
                // we don't get into infinite loop compiling ourselves
                $compile(element.contents())(scope);
            }
        );
    };
}])
app.directive("c1", function(){
	return{
		replace: true,
		restrict: "E",
		templateUrl: "c1template.html"
		}
	}
);
app.directive("c2", function(){
	return{
		replace: true,
		restrict: "E",
		templateUrl: "c2template.html"
		}
	}
);
app.directive("c3", function(){
	return{
		replace: true,
		restrict: "E",
		templateUrl: "c3template.html"
		}
	}
);
app.directive("c4", function(){
	return{
		replace: true,
		restrict: "E",
		templateUrl: "c4template.html"
		}
	}
);
app.directive("c5", function(){
	return{
		replace: true,
		restrict: "E",
		templateUrl: "c5template.html"
		}
	}
);
app.directive("c6", function(){
	return{
		replace: true,
		restrict: "E",
		templateUrl: "c6template.html"
		}
	}
);
app.directive("c7", function(){
	return{
		replace: true,
		restrict: "E",
		templateUrl: "c7template.html"
	}
});
app.directive("c8", function(){
	return{
		replace: true,
		restrict: "E",
		templateUrl: "c8template.html"
		}
	}
);
app.directive("c9", function(){
	return{
		replace: true,
		restrict: "E",
		templateUrl: "c9template.html",
		}
	}
);
app.directive("c10", function(){
	return{
		replace: true,
		restrict: "E",
		templateUrl: "c10template.html",
		}
	}
);
app.directive("c11", function(){
	return{
		replace: true,
		restrict: "E",
		templateUrl: "c11template.html",
		}
	}
);
app.directive("c12", function(){
	return{
		replace: true,
		restrict: "E",
		templateUrl: "c12template.html",
		}
	}
);
app.directive("c13", function(){
	return{
		replace: true,
		restrict: "E",
		templateUrl: "c13template.html"
		}
	}
);
app.directive("c14", function(){
	return{
		replace: true,
		restrict: "E",
		templateUrl: "c14template.html"
		}
	}
);
app.directive("c15", function(){
	return{
		replace: true,
		restrict: "E",
		templateUrl: "c15template.html"
		}
	}
);
app.directive("c16", function(){
	return{
		replace: true,
		restrict: "E",
		templateUrl: "c16template.html"
		}
	}
);
app.controller('c1controller', function($scope, $compile){
	$scope.title = 'Chapter 1';
	$scope.description = 'Scarcity & Decision Making';
	$scope.titleImage = "img/c1title.png";
	$scope.element = "<c1></c1>";
});
app.controller('c2controller', function($scope, $compile){
	$scope.title = 'Chapter 2';
	$scope.description = "National Decision Making";
	$scope.element = "<c2></c2>"
});
app.controller('c3controller', function($scope, $compile){
	$scope.title = 'Chapter 3';
	$scope.description = 'Productive Resources';
	$scope.element = "<c3></c3>"
});
app.controller('c4controller', function($scope, $compile){
	$scope.title = 'Chapter 6';
	$scope.description = "Demand, Supply & Markets";
	$scope.element = "<c4></c4>";
});
app.controller('c5controller', function($scope, $compile){
	$scope.title = 'Chapter 7';
	$scope.description = 'Spectrum of Markets';
	$scope.element = "<c5></c5>";
});
app.controller('c6controller', function($scope, $compile){
	$scope.title = 'Chapter 8';
	$scope.description = "Distribution";
	$scope.element = "<c6></c6>";
});
app.controller('c7controller', function($scope, $compile){
	$scope.title = 'Chapter 9';
	$scope.description = 'Labour Unions';
	$scope.element = "<c7></c7>";
});
app.controller('c8controller', function($scope, $compile){
	$scope.title = 'Chapter 4';
	$scope.description = "The Entrepreneur";
	$scope.element = "<c8></c8>";
});
app.controller('c9controller', function($scope, $compile){
	$scope.title = 'Chapter 5';
	$scope.description = 'Business Organization & Finance';
	$scope.element = "<c9></c9>";
});
app.controller('c10controller', function($scope, $compile){
	$scope.title = 'Chapter 10';
	$scope.description = "Consumption and Savings";
	$scope.element = "<c10></c10>";
});
app.controller('c11controller', function($scope, $compile){
	$scope.title = 'Chapter 11';
	$scope.description = "Government Expenditures & Revenue";
	$scope.element = "<c11></c11>";
});
app.controller('c12controller', function($scope, $compile){
	$scope.title = 'Chapter 12';
	$scope.description = "Money & Banking";
	$scope.element = "<c12></c12>";
});
app.controller('c13controller', function($scope, $compile){
	$scope.title = 'Chapter 13';
	$scope.description = 'Unemployment';
	$scope.element = "<c13></c13>";
});
app.controller('c14controller', function($scope, $compile){
	$scope.title = 'Chapter 14';
	$scope.description = "Inflation";
	$scope.element = "<c14></c14>";
});
app.controller('c15controller', function($scope, $compile){
	$scope.title = 'Chapter 15';
	$scope.description = 'Economic Growth & Productivity';
	$scope.element = "<c15></c15>";
});
app.controller('c16controller', function($scope, $compile){
	$scope.title = 'Chapter 16';
	$scope.description = "International Trade";
	$scope.element = "<c16></c16>";
});
app.controller('homeController', function($scope, $compile){
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
