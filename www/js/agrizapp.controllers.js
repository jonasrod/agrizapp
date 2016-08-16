angular.module('agrizapp.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
            // With the new view caching in Ionic, Controllers are only called
            // when they are recreated or on app start, instead of every page change.
            // To listen for when this page is active (for example, to refresh data),
            // listen for the $ionicView.enter event:
            //$scope.$on('$ionicView.enter', function(e) {
            //});

            // Form data for the login modal
            $scope.loginData = {};

            // Create the login modal that we will use later
            $ionicModal.fromTemplateUrl('templates/login.html', {
                                        scope: $scope
                                        }).then(function(modal) {
                                                $scope.modal = modal;
                                                });

            // Triggered in the login modal to close it
            $scope.closeLogin = function() {
            $scope.modal.hide();
            };

            // Open the login modal
            $scope.login = function() {
            $scope.modal.show();
            };

            // Perform the login action when the user submits the login form
            $scope.doLogin = function() {
            console.log('Doing login', $scope.loginData);

            // Simulate a login delay. Remove this and replace with your login
            // code if using a login system
            $timeout(function() {
                     $scope.closeLogin();
                     }, 1000);
            };
            })

.directive('map', function() {
           return {
           restrict: 'E',
           scope: {
           onCreate: '&'
           },
           link: function ($scope, $element, $attr) {
           function initialize() {
           var mapOptions = {
           center: new google.maps.LatLng(43.07493, -89.381388),
           zoom: 16,
           mapTypeId: google.maps.MapTypeId.ROADMAP
           };
           var map = new google.maps.Map($element[0], mapOptions);

           $scope.onCreate({map: map});

           // Stop the side bar from dragging when mousedown/tapdown on the map
           google.maps.event.addDomListener($element[0], 'mousedown', function (e) {
                                            e.preventDefault();
                                            return false;
                                            });
           }

           if (document.readyState === "complete") {
           initialize();
           } else {
           google.maps.event.addDomListener(window, 'load', initialize);
           }
           }
           }
           })

.controller('MapCtrl', function($scope, $ionicLoading) {
            $scope.canDragSideMenus = function () { return false; };

            $scope.mapCreated = function(map) {
            $scope.map = map;
            };

            $scope.centerOnMe = function () {
            console.log("Centering");
            if (!$scope.map) {
            return;
            }

            $scope.loading = $ionicLoading.show({
                                                content: 'Obtendo localização corrente...',
                                                showBackdrop: false
                                                });

            navigator.geolocation.getCurrentPosition(function (pos) {
                                                     console.log('Got pos', pos);
                                                     $scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
                                                     $ionicLoading.hide();
                                                     }, function (error) {
                                                     alert('Unable to get location: ' + error.message);
                                                     });
            };
            })

.controller('ReportGraphCtrl', function($scope) {
            $scope.graph = {};                        // Empty graph object to hold the details for this graph
            $scope.graph.data = [                     // Add bar data, this will set your bars height in the graph
                                 //Plantio
                                 [16, 15, 20, 12, 16, 12, 8],
                                 //Colheita
                                 [15, 16, 4, 12, 8, 12, 1]
                                 ];
            $scope.graph.labels = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Ago'];    // Add labels for the X-axis
            $scope.graph.series = ['Plantio', 'Colheita'];  // Add information for the hover/touch effect

            })

.controller('QuotesCtrl', function($scope, QuotesConfig) {
            $scope.factorGroups = QuotesConfig.allFactorGroups();
          })

.controller('QuoteDetailCtrl', function($scope, $http, $interval, $stateParams, QuotesConfig) {
            factorGroup = $stateParams.factorGroup;
            factors = QuotesConfig.allFactorsFromFactorGroup(factorGroup);

            listOfFactors = "";
            for (var i = 0; i < factors.length; i++)
            {
              listOfFactors = listOfFactors + factors[i].factor + ",";
            }
            listOfFactors = listOfFactors.substring(0,listOfFactors.length-1);

            //listOfColumns = "name,symbol,last,high,low,open,previousClose,change,percentChange,volume";
            listOfColumns = "symbol,last,high,low,open,previousClose,change,percentChange,volume";

            yqlEndPoint = "https://query.yahooapis.com/v1/public/yql?q=";
            yqlQuery = "select%20*%20from%20csv%20where%20url%3D%27http%3A%2F%2Fdownload.finance.yahoo.com%2Fd%2Fquotes.csv%3Fs%3D"
            yqlQuery = yqlQuery + listOfFactors;
            //yqlQuery = yqlQuery + "%26f%3Dnsl1hgopc1cv%26e%3D.csv%27%20and%20columns%3D%27";
            yqlQuery = yqlQuery + "%26f%3Dsl1hgopc1cv%26e%3D.csv%27%20and%20columns%3D%27";
            yqlQuery = yqlQuery + listOfColumns;
            yqlQuery = yqlQuery + "%27&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";

            var timer = undefined;

            $scope.title = factorGroup;
            $scope.message = 'Aguarde enquanto carregamos os dados das bolsas...';

            $http.get(yqlEndPoint + yqlQuery).success(function(data) {
              $scope.quotes = treatFinancialData(factors, data);
              if ($scope.quotes.objs.length > 0) { $scope.message = ''; }
            });
            $scope.start = function() {
              timer = $interval(function(){
                $http.get(yqlEndPoint + yqlQuery).success(function(data) {
                  $scope.quotes = treatFinancialData(factors, data);});
                  if ($scope.quotes.objs.length > 0) { $scope.message = ''; }
                /*
                data = {"query":{
                  "count":8,
                  "created":"2015-08-26T21:07:00Z",
                  "lang":"en-us",
                  "results":{
                    "row":[
                      {"symbol":"BRL=X","last":"3.5962","high":"3.6546","low":"3.5877","open":"3.6179","previousClose":"3.6170","change":"-0.0208","percentChange":"-0.0208 - -0.5764%","volume":"0"},
                      {"symbol":"BRLEUR=X","last":"0.2458","high":"0.2464","low":"0.2393","open":"0.2402","previousClose":"0.2403","change":"+0.0055","percentChange":"+0.0055 - +2.2933%","volume":"0"},
                      {"symbol":"EURUSD=X","last":"1.1314","high":"1.1561","low":"1.1293","open":"1.1521","previousClose":"1.1507","change":"-0.0193","percentChange":"-0.0193 - -1.6751%","volume":"0"},
                      {"symbol":"AUDUSD=X","last":"0.7118","high":"0.7153","low":"0.7070","open":"0.7142","previousClose":"0.7146","change":"-0.0028","percentChange":"-0.0028 - -0.3911%","volume":"0"},
                      {"symbol":"GBPUSD=X","last":"1.5464","high":"1.5721","low":"1.5453","open":"1.5694","previousClose":"1.5692","change":"-0.0229","percentChange":"-0.0229 - -1.4561%","volume":"0"},
                      {"symbol":"JPY=X","last":"119.9450","high":"120.0250","low":"118.4650","open":"118.9830","previousClose":"119.1750","change":"+0.7700","percentChange":"+0.7700 - +0.6461%","volume":"0"},
                      {"symbol":"EURJPY=X","last":"135.7088","high":"137.6196","low":"135.4515","open":"137.0640","previousClose":"137.1347","change":"-1.4259","percentChange":"-1.4259 - -1.0398%","volume":"0"},
                      {"symbol":"EURGBP=X","last":"0.7317","high":"0.7367","low":"0.7292","open":"0.7342","previousClose":"0.7333","change":"-0.0016","percentChange":"-0.0016 - -0.2222%","volume":"0"}
                    ]
                  }
                }};
                $scope.quotes = treatFinancialData(factors, data);
                $scope.message = data;
                */
              },2000);
            };

            $scope.killtimer = function(){
              if(angular.isDefined(timer))
                {
                  $interval.cancel(timer);
                  timer = undefined;
                }
            };

            // starting the interval by default
            $scope.start();

            // stops the interval when the scope is destroyed,
            // this usually happens when a route is changed and
            // the ItemsController $scope gets destroyed. The
            // destruction of the ItemsController scope does not
            // guarantee the stopping of any intervals, you must
            // be responsible of stopping it when the scope is
            // is destroyed.
            $scope.$on('$destroy', function() {
              $scope.killtimer();
            });


          })
          .controller('ChatsCtrl', function($scope, Chats) {

                      $scope.canDragSideMenus = function () { return true; };

                      $scope.chats = Chats.all();
                      $scope.remove = function(chat) {
                      Chats.remove(chat);
                      }
                      })

          .controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {

                      $scope.canDragSideMenus = function () { return true; };

                      $scope.chat = Chats.get($stateParams.chatId);
                    });

//http://download.finance.yahoo.com/d/quotes.csv?s=%40%5EDJI,CU15.CBT&f=nsl1hgopc1cv
//nome, simbolo, last, high, low, open, previous close, change, change percent, volume
//"Corn Sep 15","CU15.CBT",368.75,370.25,354.00,365.00,368.75,+3.50,"+3.50 - +0.96%",141048
function treatFinancialData(factors, quotesData) {
    if (quotesData == undefined)
    {
      return null;
    }

    inputData = {};
    for (var i = 0; i < parseInt(quotesData["query"]["count"]); i++)
    {
      row = quotesData['query']['results']['row'][i];
      if ('symbol' in row) {
        symbol = row['symbol'];
        inputData[symbol] = row;
      }
    }

    data = {
      timestring: quotesData["query"]["created"],
      objs: []
    };

    for (var i = 0; i < factors.length; i++)
    {
      if (factors[i].factor in inputData)
      {
        register = inputData[factors[i].factor];
        data.objs.push({
          name: factors[i].name,
          shortname: factors[i].shortname,
          month: (factors[i].month != undefined && factors[i].month.length > 0) ? factors[i].month : 'N/A',
          description: (factors[i].month != undefined && factors[i].month.length > 0) ? factors[i].month : factors[i].shortname,
          symbol: register['symbol'],
          last: register['last'],
          high: register['high'],
          low: register['low'],
          open: register['open'],
          previousClose: register['previousClose'],
          change: register['change'],
          percentChange: register['percentChange'],
          volume: register['volume'],
          bias: (register['change'] != undefined && parseFloat(register['change']) < 0) ? 'down' : 'up'
      });
    }
  }
  return data;
}
