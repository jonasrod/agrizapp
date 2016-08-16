angular.module('agrizapp.area.controllers', [])
                    
.controller('AreasCtrl', function($scope, $rootScope, $ionicPopup, AreasService) {

	$scope.canDragSideMenus = function () { return true; };
	
	AreasService.all().then(function(result) {
		$scope.areas = result;
	}, function(error) {
		$scope.areas = {};
	});
	
	$scope.showConfirm = function(area) {
		var confirmPopup = $ionicPopup.confirm({
			title: 'Aviso!',
			template: 'Confirma exclusão?'
		});
		confirmPopup.then(function(res) {
			if(res) {
				AreasService.remove(area).then(function() {
					alert("Área removida!");
				});
			}
		});
   };
	
	$rootScope.$on("couchbase:change", function(event, args) {
		for(var i = 0; i < args.results.length; i++) {
			if(args.results[i].hasOwnProperty("deleted") && args.results[i].deleted === true) {
				delete $scope.areas[args.results[i].id];
			} else {
				if(args.results[i].id.indexOf("_design") === -1) {
					todoDatabase.getDocument(args.results[i].id).then(function(result) {
						if(result.type === "area") {
							$scope.areas[result._id] = result;
						}
					});
				}
			}
		}
	});
})

.controller('AreasIncCtrl', function($scope, $state, $cordovaGeolocation, $http, $ionicModal, AreasService, $cordovaDevice, $stateParams, SafraService, CulturaService) {
	$scope.canDragSideMenus = function () { return true; };
	$scope.PHList = AreasService.phList();
	$scope.projecaoSafras = AreasService.projecaoSafras();
	$scope.area = {
			nome: '',
			localizacao: '',
			areaCultivavel: '',
			altitude: '',
			tipoArea : 'Própria',
			medidaAltitude : 'mts',
			medida: 'ha',
			phMedio: {valor: (7.0).toPrecision(2).toString(), desc: '7,0'},
			safras: []
	};
	
	$scope.safraDisabled = false;
    $scope.hideListSafras = true;
    $scope.hideListCulturas = true;
    $scope.culturas = [];
    $scope.cultura = {
    		nome: '',
    		area: '',
    		conversao: '',
    		rendimento: ''
    };
	
	$scope.$on('$ionicView.beforeEnter', function(){
		if ($stateParams.areaId != "") {
			AreasService.get($stateParams.areaId).then(function(areaResult) {
				$scope.area = areaResult;
				//$scope.area.safras = [];
				$scope.isUpdate = true;
				$scope.hideListSafras = false;
				/*
				SafraService.safras(areaResult._id).then(function(safrasResult) {
					$scope.hideListSafras = false;
					var safras = [];
					var i = 0;
					for(var keySafra in safrasResult) {
						i++;
						CulturaService.culturas(safrasResult[keySafra]._id).then(function(culturasResult) {
							var safraId;
							var culturas = [];
							for(var keyCultura in culturasResult) {
								culturas.push(culturasResult[keyCultura]);
								safraId = culturasResult[keyCultura].safraId;
							}
							safrasResult[safraId].culturas = culturas;
							$scope.area.safras.push(safrasResult[safraId]);
						});
					}
				}, function(error) {
					$scope.safras = {};
				});*/
			});
		}
	});
	
	ionic.Platform.ready(function(){
		$scope.uuid = $cordovaDevice.getUUID();
		var posOptions = {timeout: 10000, enableHighAccuracy: true};
		$cordovaGeolocation.getCurrentPosition(posOptions).then(function (position) {
			var lat  = position.coords.latitude;
		    var long = position.coords.longitude;
		    
		    $scope.area.lat = lat;
		    $scope.area.lon = long;
		    
		    var latlng = lat + ',' + long;
		    var req = {
					method: 'GET',
					url: 'http://maps.googleapis.com/maps/api/geocode/json?latlng='+latlng+'&sensor=false'
			}
			
			$http(req).then(function (response) {
				if (response.status == 200) {
					$scope.area.localizacao = response.data.results[0].formatted_address;
				}
			}, function (err){
				console.log("ERROR GETTING ADDRESS FROM GOOGLE API -> " + JSON.stringify(err));
			});
		}, function(err) {
		      console.log("ERROR GETTING GEOLOCATION -> " + JSON.stringify(err));
		});
    });
	
	$scope.insert = function(form) {
		if(form.$valid) {
			
			if ($scope.isUpdate) {
				AreasService.update($scope.area).then(function() {
					$state.go('app.areas');
				});
			} else {
				$scope.area.type = 'area';
				$scope.area.owner = $scope.uuid;
				AreasService.add($scope.area).then(function() {
					$state.go('app.areas');
				});
			}
		}
	};
	
	$scope.remove = function(area) {
		AreasService.remove(area).then(function() {
			alert('Área removida com sucesso!');
		});
    };
    
    $scope.safra = {
    		projecaoSafra: ''
    };
    
    $scope.culturaError = false;
    $scope.areaCulturaError = false;
    $scope.remdimentoError = false;
    $scope.requiredObject = {required : true};
    
    $scope.addCultura = function() {
    	if  (!existeCultura($scope.cultura.nome)) {
    		if (culturaValida()) {
    			var cultura = {
            			nome: $scope.cultura.nome,
            			area: $scope.cultura.area,
            			conversao: $scope.cultura.conversao,
            			rendimento: $scope.cultura.rendimento,
            			plantio: [],
            			colheita: [],
            			vendas: []
            	};
            	$scope.culturas.push(cultura);
            	$scope.cultura.nome = '';
            	$scope.cultura.area = '';
            	$scope.cultura.conversao = '';
            	$scope.cultura.rendimento = '';
                $scope.hideListCulturas = false;
                $scope.culturaError = false;
                $scope.areaCulturaError = false;
                $scope.remdimentoError = false;
    		}
    	} else {
    		alert("Cultura já incluída!");
    	}
    };
    
    function culturaValida() {
    	var noError = true;
    	if ($scope.cultura.nome.trim() == '') {
    		$scope.culturaError = true;
    		noError = false;
    	} else {
    		$scope.culturaError = false;
    	}
    	if ($scope.cultura.area.trim() == '') {
    		$scope.areaCulturaError = true;
    		noError = false;
    	} else {
    		$scope.areaCulturaError = false;
    	}
    	if ($scope.cultura.rendimento.trim() == '') {
    		$scope.remdimentoError = true;
    		noError = false;
    	} else {
    		$scope.remdimentoError = false;
    	}
    	return noError;
    }
    
    function existeCultura(cultura) {
    	for (var i = 0; i < $scope.culturas.length; i++) {
    		if ($scope.culturas[i].nome == cultura) {
    			return true;
    		}
    	}
    	return false;
    }
    
    $scope.addSafra = function() {
    	if (!existeSafra($scope.safra.projecaoSafra)) {
    		if (safraValida()) {
    			var safra = {
            			projecaoSafra: $scope.safra.projecaoSafra,
            			culturas: $scope.culturas,
            			total: totalSafra($scope.culturas)
            	}
            	$scope.area.safras.push(safra);
            	$scope.culturas = [];
            	$scope.hideListSafras = false;
            	$scope.hideListCulturas = true;
            	if ($scope.area.safras.length == 3) {
            		$scope.safraDisabled = true;
            	} else {
            		$scope.safraDisabled = false;
            	}
            	$scope.projecaoSafraError = false;
    		}
    	} else {
    		alert("Safra já incluída!");
    	}
    };
    
    function safraValida() {
    	var noError = true;
    	if ($scope.safra.projecaoSafra.trim() == '') {
    		$scope.projecaoSafraError = true;
    		noError = false;
    	} else {
    		$scope.projecaoSafraError = false;
    	}
    	if ($scope.culturas.length == 0) {
    		noError = false;
    		alert('Adicione pelo menos uma Cultura!');
    	}
    	return noError;
    }
    
    function existeSafra(projecaoSafra) {
    	for (var i = 0; i < $scope.area.safras.length; i++) {
    		if ($scope.area.safras[i].projecaoSafra == projecaoSafra) {
    			return true;
    		}
    	}
    	return false;
    }
    
    $scope.delSafra = function(index) {
    	$scope.area.safras.splice(index, 1);
    	if ($scope.area.safras.length == 3) {
    		$scope.safraDisabled = true;
    	} else {
    		$scope.safraDisabled = false;
    	}
    };
    
    $scope.showConfirm = function(index) {
		var confirmPopup = $ionicPopup.confirm({
			title: 'Aviso!',
			template: 'Confirma exclusão?'
		});
		confirmPopup.then(function(res) {
			if(res) {
				$scope.culturas.splice(index, 1);
			}
		});
   };
    
    function totalSafra(culturas) {
    	var total = 0
    	for (var i = 0; i < culturas.length; i++) {
    		total = total + parseInt(culturas[i].area);
    	}
    	return total;
    }
    
    $scope.populateConversion = function() {
    	var obj = AreasService.culturas().find(getConversion);
    	$scope.cultura.conversao = obj.unidade;
    };
    
    function getConversion(cultura) {
    	if (cultura.nome == $scope.cultura.nome) {
    		return cultura;
    	}
	}
    
    $ionicModal.fromTemplateUrl('culturas-modal.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function(modal) {
        $scope.modal = modal;
    });
    $scope.openModal = function(safraIndex) {
    	$scope.modalSafra = {
    			safra: $scope.area.safras[safraIndex],
    			culturas: $scope.area.safras[safraIndex].culturas
    	};
        $scope.modal.show();
    };
    $scope.closeModal = function() {
        $scope.modal.hide();
    };
      //Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function() {
        $scope.modal.remove();
    });
})

.controller('AreaDetailCtrl', function($scope, $stateParams, AreasService, SafraService, CulturaService) {
	$scope.canDragSideMenus = function () { return true; };
	$scope.safras = [];
	$scope.graphs = [];
	$scope.graph1 = {};
	$scope.graph2 = {};
	$scope.graph3 = {};
	$scope.$on('$ionicView.beforeEnter', function(){
		AreasService.get($stateParams.areaId).then(function(areaResult) {
			$scope.area = areaResult;
			
			var safras = [];
			var i = 0;
			for(var keySafra in $scope.area.safras) {
				i++;
				var safraId;
				//var culturas = [];
				var culturaGraph = {
						data: [],
						labels: []
				};
				for(var keyCultura in $scope.area.safras[keySafra].culturas) {
					//culturas.push(culturasResult[keyCultura]);
					culturaGraph.data.push(parseInt($scope.area.safras[keySafra].culturas[keyCultura].area));
					culturaGraph.labels.push($scope.area.safras[keySafra].culturas[keyCultura].nome);
					//safraId = culturasResult[keyCultura].safraId;
				}
				culturaGraph.safra = $scope.area.safras[keySafra].projecaoSafra;
				$scope.graphs.push(culturaGraph);
				//safrasResult[safraId].culturas = culturas;
				//$scope.safras.push(safrasResult[safraId]);
			}
			
			/*
			SafraService.safras(areaResult._id).then(function(safrasResult) {
				var safras = [];
				var i = 0;
				for(var keySafra in safrasResult) {
					i++;
					CulturaService.culturas(safrasResult[keySafra]._id).then(function(culturasResult) {
						var safraId;
						var culturas = [];
						var culturaGraph = {
								data: [],
								labels: []
						};
						for(var keyCultura in culturasResult) {
							culturas.push(culturasResult[keyCultura]);
							culturaGraph.data.push(parseInt(culturasResult[keyCultura].area));
							culturaGraph.labels.push(culturasResult[keyCultura].nome);
							safraId = culturasResult[keyCultura].safraId;
						}
						culturaGraph.safra = safrasResult[safraId].projecaoSafra;
						$scope.graphs.push(culturaGraph);
						safrasResult[safraId].culturas = culturas;
						$scope.safras.push(safrasResult[safraId]);
					});
				}
			}, function(error) {
				$scope.safras = {};
			});*/
		}, function(error) {
			$scope.area = {};
		});
	});
});