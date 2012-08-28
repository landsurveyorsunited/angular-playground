angular.module('app', ['ngResource'])

function FiddleCtrl($scope, $http){

    $scope.showIntro=function(){
        $('#loading').hide();
        $('#fiddle').hide();
        $('#intro').show();
    };

    $scope.loadFiddle=function(fiddle){
        $('#fiddle').attr('src','blank.html');
        var url=fiddle.url;
        var height= $(window).height()-80;
        $('#fiddle').css('height',height +'px');
        $('#intro').hide();

        setTimeout(function(){
            $('#fiddle').attr('src',url);
        },100);

        $('#fiddle').fadeIn('slow');
        console.log('Fiddle loaded');
    };

    $scope.getFiddles=function(){
        $http({method: 'JSONP', url: 'http://jsfiddle.net/api/user/angularplayground/demo/list.json?callback=JSON_CALLBACK'})
        .success(function(data, status, headers, config) {
            $scope.fiddles=data;
            console.log($scope.fiddles);
        }).
        error(function(data, status, headers, config) {
            $scope.error='Error';
        });
    };

    $scope.getFiddles();
};

