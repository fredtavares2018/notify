angular.module('app', ['cgNotify']);

angular.module('app').controller('DemoCtrl',function($interval,$scope,notify,dateFilter){

    $scope.currentTime = dateFilter(new Date(), 'hh:mm');
     
        $scope.updateTime = $interval(function() {

        $scope.currentTime = dateFilter(new Date(), 'hh:mm');
        $scope.horaAtual = dateFilter(new Date(), 'hh');
        $scope.minutosAtual = dateFilter(new Date(), 'mm');
        $scope.SegundosAtual = dateFilter(new Date(), 'ss');
        
      

        if($scope.minutosAtual == 46 && $scope.SegundosAtual == 0)
        {

             function demoMessageTemplate(){

                    var messageTemplate = '<span>Agora tudo deu certo!</span> ';

                        notify({
                            messageTemplate: messageTemplate,
                            classes: $scope.classes,
                            scope:$scope,
                            templateUrl: $scope.template,
                            position: $scope.position,
                        });       

                    };  // fim demoMessageTemplate

                    window.load = demoMessageTemplate();
       
        } // fim if


    }, 1000); // fim do relogio


});