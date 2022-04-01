var app = angular.module('myApp', ['ngRoute']);

//CONTROLLER FOR TABLE
app.controller('tableController', [ '$scope', '$http', function ($scope, $http) {
    $http.get('assets/data/aquatics.json')
    .then(function(response){
        console.log(response.data.table);
        $scope.info = response.data.table;
    })
    .catch(function(err){
        console.log(err)
    })
}])

// SLIDE CONTROLLER FOR IMAGE GALLERY
app.controller('slide-controller', function($scope){
    $(document).ready(function(){
        $('.gallery-slide').slick({
            lazyLoad: 'ondemand',
            autoplay: true,
            autoplaySpeed: 2000,
            centerMode: true,
            centerPadding: '80px',
            slidesToShow: 2,
            nextArrow: document.getElementById('slick-next'),
            prevArrow: document.getElementById('slick-previous'),
            variableWidth: true,
            adaptiveHeight: true,
            responsive: [
              {
                breakpoint: 768,
                settings: {
                  arrows: false,
                  centerMode: true,
                  centerPadding: '50px',
                  slidesToShow: 2
                }
              },
              {
                breakpoint: 480,
                settings: {
                  arrows: false,
                  centerMode: true,
                  centerPadding: '40px',
                  slidesToShow: 1
                }
              }
            ]
          });
      });
})
// CONTROLLER FOR THE SIDE BAR IN THE MOBILE SCREEN HEADER
 app.controller('headerController', function($scope){
     $scope.openSlide = function(){
         document.getElementById('side-menu').style.width = '250px';
     }
     $scope.closeSlide = function(){
        document.getElementById('side-menu').style.width = '0px';
    }
 })


// EVENTS CONTROLLER FOR SLIDE
app.controller('eventsController', function($scope) {
    $('.events-section-inner').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow: document.getElementById('events-next'),
        prevArrow: document.getElementById('events-previous'),
    }
    );
})

//ROUTING
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
    .when('/home',{
        templateUrl: "views/home.html#home-top",
    })
    .when('/contact',{
        templateUrl: "views/contact.html#contact-top",
    })
    .when('/events',{
        templateUrl: "views/events.html#events-top",
    })
    .when('/gallery',{
        templateUrl: "views/gallery.html#gallery-top",
        controller: "slide-controller",
    })
    .otherwise({
        redirectTo: '/home'
    })
}])