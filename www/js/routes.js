angular.module('agrizapp.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

	$stateProvider

    .state('app', {
            url: '/app',
            abstract: true,
            templateUrl: 'templates/menu.html',
            controller: 'AppCtrl'
           })

     .state('app.tabs', {
             url: '/tabs',
             abstract: true,
             views: {
                 'main-menu-content': {
                     templateUrl: 'templates/tabs.html'
                 }
             }
            })

    .state('app.tabs.quotes', {
            url: '/quotes',
            views: {
              'tab-quotes': {
                templateUrl: 'templates/quotes.html',
                controller: 'QuotesCtrl'
              }
            }
          })
    .state('app.tabs.quotes-detail', {
            url: '/quotes/:factorGroup',
            views: {
              'tab-quotes': {
                templateUrl: 'templates/quotes-detail.html',
                controller: 'QuoteDetailCtrl'
              }
            }
          })
    .state('app.tabs.weather', {
           url: '/weather',
           views: {
           'tab-weather': {
           templateUrl: 'templates/weather.html',
           controller: 'MapCtrl'
           }
           }
           })
     .state('app.tabs.chats', {
            url: '/chats',
            views: {
                'tab-chats': {
	                templateUrl: 'templates/chats.html',
	                controller: 'ChatsCtrl'
                }
            }
            })
     .state('app.tabs.chat-detail', {
            url: '/chats/:chatId',
            views: {
                'tab-chats': {
	                templateUrl: 'templates/chat-detail.html',
	                controller: 'ChatDetailCtrl'
                }
            }
            })
    // rotas para áreas
    .state('app.areas', {
           url: '/areas',
           views: {
               'main-menu-content': {
	               templateUrl: 'templates/areas.html',
	               controller: 'AreasCtrl'
               }
           }
           })
    .state('app.areas-detail', {
           url: '/areas/:areaId',
           views: {
               'main-menu-content': {
	               templateUrl: 'templates/area-detail.html',
	               controller: 'AreaDetailCtrl'
               }
           }
           })
     .state('app.areas-inc', {
           url: '/areas-inc/:areaId',
           views: {
               'main-menu-content': {
	               templateUrl: 'templates/areas-inc.html',
	               controller: 'AreasIncCtrl'
               }
           }
           })
     // rotas para plantio
     .state('app.planting-area', {
           url: '/planting-area',
           views: {
               'main-menu-content': {
	               templateUrl: 'templates/planting-area.html',
	               controller: 'PlantingAreaCtrl'
               }
           }
           })
     .state('app.planting-safra', {
           url: '/planting-safra/:areaId',
           views: {
               'main-menu-content': {
	               templateUrl: 'templates/planting-safra.html',
	               controller: 'PlantingSafraCtrl'
               }
           }
           })
      .state('app.planting-cultura', {
           url: '/planting-cultura/:areaId/:safraId',
           views: {
               'main-menu-content': {
	               templateUrl: 'templates/planting-cultura.html',
	               controller: 'PlantingCulturaCtrl'
               }
           }
           })
     .state('app.planting-inc', {
           url: '/planting-inc/:areaId/:safraId/:culturaId/:plantingId',
           views: {
               'main-menu-content': {
	               templateUrl: 'templates/planting-inc.html',
	               controller: 'PlantingIncCtrl'
               }
           }
           })
     .state('app.planting', {
           url: '/planting/:areaId/:safraId/:culturaId',
           views: {
               'main-menu-content': {
	               templateUrl: 'templates/planting.html',
	               controller: 'PlantingCtrl'
               }
           }
           })
     .state('app.planting-report', {
           url: '/planting-report',
           views: {
               'main-menu-content': {
	               templateUrl: 'templates/planting-report.html',
	               controller: 'PlantingReportCtrl'
               }
           }
           })
     // rotas para colheita
     .state('app.harvest-area', {
           url: '/harvest-area',
           views: {
               'main-menu-content': {
	               templateUrl: 'templates/harvest-area.html',
	               controller: 'HarvestAreaCtrl'
               }
           }
           })
     .state('app.harvest-safra', {
           url: '/harvest-safra/:areaId',
           views: {
               'main-menu-content': {
	               templateUrl: 'templates/harvest-safra.html',
	               controller: 'HarvestSafraCtrl'
               }
           }
           })
      .state('app.harvest-cultura', {
           url: '/harvest-cultura/:areaId/:safraId',
           views: {
               'main-menu-content': {
	               templateUrl: 'templates/harvest-cultura.html',
	               controller: 'HarvestCulturaCtrl'
               }
           }
           })
     .state('app.harvest-inc', {
           url: '/harvest-inc/:areaId/:safraId/:culturaId/:harvestId',
           views: {
               'main-menu-content': {
	               templateUrl: 'templates/harvest-inc.html',
	               controller: 'HarvestIncCtrl'
               }
           }
           })
     .state('app.harvest', {
           url: '/harvest/:areaId/:safraId/:culturaId',
           views: {
               'main-menu-content': {
	               templateUrl: 'templates/harvest.html',
	               controller: 'HarvestCtrl'
               }
           }
           })
     .state('app.harvest-report', {
           url: '/harvest-report',
           views: {
               'main-menu-content': {
	               templateUrl: 'templates/harvest-report.html',
	               controller: 'HarvestReportCtrl'
               }
           }
           })
     // rotas para vendas
     .state('app.selling-safra', {
           url: '/selling-safra',
           views: {
               'main-menu-content': {
	               templateUrl: 'templates/selling-safra.html',
	               controller: 'SellingSafraCtrl'
               }
           }
           })
      .state('app.selling-cultura', {
           url: '/selling-cultura/:safraId',
           views: {
               'main-menu-content': {
	               templateUrl: 'templates/selling-cultura.html',
	               controller: 'SellingCulturaCtrl'
               }
           }
           })
     .state('app.selling-inc', {
           url: '/selling-inc/:safraId/:culturaId/:vendaId',
           views: {
               'main-menu-content': {
	               templateUrl: 'templates/selling-inc.html',
	               controller: 'SellingIncCtrl'
               }
           }
           })
     .state('app.selling', {
           url: '/selling/:safraId/:culturaId',
           views: {
               'main-menu-content': {
	               templateUrl: 'templates/selling.html',
	               controller: 'SellingCtrl'
               }
           }
           })
     .state('app.selling-report', {
           url: '/selling-report',
           views: {
               'main-menu-content': {
	               templateUrl: 'templates/selling-report.html',
	               controller: 'SellingReportCtrl'
               }
           }
           })
     .state('app.profile', {
            url: '/profile',
            views: {
                'main-menu-content': {
                	templateUrl: 'templates/profile.html'
                }
            }
            })

    .state('app.about', {
            url: '/about',
            views: {
              'main-menu-content': {
                templateUrl: 'templates/about.html'
              }
            }
          })

    .state('app.admin', {
            url: '/admin',
            views: {
              'main-menu-content': {
                templateUrl: 'templates/adminCockpit.html'
              }
            }
          })

    .state('app.reports', {
           url: '/reports',
           abstract: true,
           views: {
               'main-menu-content': {
            	   templateUrl: 'templates/reports.html'
               }
           }
           })

    .state('app.reports.rptInfo', {
           url: '/rptInfo',
           views: {
               'reports-content': {
	               templateUrl: 'templates/reportsInfo.html',
	               controller : 'ReportGraphCtrl'
               }
           }
           });

    $urlRouterProvider.otherwise('/app/tabs/quotes');

  

});