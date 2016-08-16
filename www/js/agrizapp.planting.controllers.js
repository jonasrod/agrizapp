angular.module('agrizapp.planting.controllers', [])

.controller('PlantingReportCtrl', function($scope, AreasService, CulturaService, PlantingService, LocationService) {
	$scope.canDragSideMenus = function () { return true; };
	$scope.showGraph = false;
	
	$scope.filter = {
			produto: '',
			startDate: '',
			endDate: '',
			area: ''
	};
	
	$scope.$on('$ionicView.beforeEnter', function() {
		
		CulturaService.all().then(function(result) {
			$scope.produtoList = result;
		}, function(error) {
			$scope.produtoList = {};
		});
		
		AreasService.all().then(function(result) {
			$scope.areas = result;
		}, function(error) {
			$scope.areas = {};
		});
	});
	
	$scope.pesquisar = function(form) {
		CulturaService.get($scope.filter.produto).then(function(result) {
			var cultura = result;
			var sdate = [$scope.filter.startDate.getFullYear(),$scope.filter.startDate.getDate(),$scope.filter.startDate.getMonth() + 1];
			var edate = [$scope.filter.endDate.getFullYear(),$scope.filter.endDate.getDate(),$scope.filter.endDate.getMonth() + 1];
			PlantingService.report(result._id, sdate, edate).then(function(result) {
				$scope.graph = {
						data: [],
						labels: [],
						series: ['Online', 'Minha Área']
				};
				
				var acumulado = 0;
				for (var i = 0; i < result.length; i++) {
					acumulado = acumulado + parseInt(result[i].plantado);
				}
				var porcentagem = ((acumulado / cultura.area) * 100);
				
				var areasInRange = [];
				
				AreasService.get($scope.filter.area).then(function(result) {
					
					var location1 = {lat: result.lat, lon: result.lon};
					
					onlineDatabase.query('agrizapp_sync/areas').then(function (result) {
						for (var i = 0; i < result.rows.length; i++) {
							if (result.rows[i].value.type == 'area') {
								var area = result.rows[i].value;
								
								var location2 = {lat: area.lat, lon: area.lon};
								var distance = LocationService.calculateDistance(location1, location2);
								
								if (distance <= $scope.filter.range) {
									areasInRange.push(area._id);
								}
							}
						}
						
						onlineDatabase.query('agrizapp_sync/safras', {keys: areasInRange}).then(function (result) {
							var safrasInRage = [];
							for (var i = 0; i < result.rows.length; i++) {
								safrasInRange.push(result.rows[i].key); 
							}
							
							onlineDatabase.query('agrizapp_sync/culturas', {keys: safrasInRange}).then(function (result) {
								var culturasInRange = [];
								var areaOnline = 0;
								for (var i = 0; i < result.rows.length; i++) {
									if (cultura.nome == result.rows[i].value.nome) {
										culturasInRange.push(result.rows[i].value._id);
										areaOnline = areaOnline + parseInt(result.rows[i].value.area);
									}
								}
								
								onlineDatabase.query('agrizapp_sync/report_planting', {startkey: sdate, endkey: edate}).then(function (result) {
									var acumuladoOnline = 0;
									for (var i = 0; i < result.rows.length; i++) {
										$scope.id = result.rows[i].key;
										if (culturasInRange.find(checkId) !== undefined) {
											acumuladoOnline = acumuladoOnline + parseInt(result.rows[i].value.plantado);
										}
									}
									
									var porcentagemOline = ((acumuladoOnline / areaOnline) * 100);
									
									$scope.graph.data.push([porcentagemOline]);
									$scope.graph.labels.push('');
									$scope.graph.data.push([porcentagem]);
									$scope.showGraph = true;
								}).catch(function (err) {
									  console.log(err);
								});
							}).catch(function (err) {
								  console.log(err);
							});
						}).catch(function (err) {
							  console.log(err);
						});
					}).catch(function (err) {
						console.log(err);
					});
				});
				
			});
		});
	};
	
	function checkId(id) {
		return id == $scope.id;
	}
})

.controller('PlantingAreaCtrl', function($scope, AreasService) {
	$scope.canDragSideMenus = function () { return true; };
	$scope.$on('$ionicView.beforeEnter', function(){
		AreasService.all().then(function(result) {
			$scope.areas = result;
		}, function(error) {
			$scope.areas = {};
		});
	});
})

.controller('PlantingSafraCtrl', function($scope, $stateParams, AreasService, SafraService) {
	$scope.canDragSideMenus = function () { return true; };
	
	AreasService.get($stateParams.areaId).then(function(result) {
		$scope.area = result;
		SafraService.safras(result._id).then(function(result) {
			$scope.safras = result;
		}, function(error) {
			$scope.safras = {};
		});
	}, function(error) {
		$scope.area = {};
	});
	
})

.controller('PlantingCulturaCtrl', function($scope, $stateParams, AreasService, CulturaService) {
	$scope.canDragSideMenus = function () { return true; };
	$scope.selectedSafra = $stateParams.safra;
	AreasService.get($stateParams.areaId).then(function(result) {
		$scope.area = result;
		CulturaService.culturas($stateParams.safraId).then(function(result) {
			$scope.culturas = result;
		}, function(error) {
			$scope.culturas = {};
		});
	}, function(error) {
		$scope.area = {};
		$scope.culturas = [];
	});
	
})

.controller('PlantingIncCtrl', function($scope, $stateParams, $state, AreasService, PlantingService, CulturaService, $cordovaDevice, $ionicPopup) {
	$scope.canDragSideMenus = function () { return true; };
	$scope.planting = {};
	$scope.safraId = $stateParams.safraId;
	$scope.culturaId = $stateParams.culturaId;
	$scope.isUpdate = false;
	$scope.plantingId = $stateParams.plantingId;
	$scope.$on('$ionicView.beforeEnter', function(){
		AreasService.get($stateParams.areaId).then(function(result) {
			$scope.area = result;
			if ($stateParams.plantingId != 9999) {
				PlantingService.get($stateParams.plantingId).then(function(result) {
					$scope.planting = result;
					var date = $scope.planting.date;
					$scope.planting.date = new Date(date);
					$scope.isUpdate = true;
				});
			}
			
			CulturaService.get($stateParams.culturaId).then(function(result) {
				$scope.title = result.nome + ' - ' + $scope.area.nome + ' ' + $scope.area.areaCultivavel + ' ' + $scope.area.medida;
			}, function(error) {
				$scope.title = '';
			});
			
		}, function(error) {
			$scope.area = {};
		});
	});
	
	$scope.save = function(form) {
		if(form.$valid) {
			PlantingService.all($stateParams.culturaId).then(function(result) {
				var existe = false;
				for(var key in result) {
					var planting = result[key];
					if (planting.date == $scope.planting.date.toJSON()) {
						existe = true; 
						break;
					} 
				}
				if (!existe) {
					$scope.uuid = $cordovaDevice.getUUID();
					var planting = {
							culturaId: $scope.culturaId,
							date: $scope.planting.date,
							plantado: $scope.planting.plantado,
							acumulado: 0,
							owner: $scope.uuid,
							type: 'plantio'
					};
					if ($scope.isUpdate) {
						planting._id = $scope.planting._id;
						planting._rev = $scope.planting._rev;
						PlantingService.update(planting).then(function() {
							$state.go('app.planting', {areaId: $scope.area._id, safraId: $scope.safraId, culturaId: $scope.culturaId});
						});
					} else {
						PlantingService.save(planting).then(function() {
							$state.go('app.planting', {areaId: $scope.area._id, safraId: $scope.safraId, culturaId: $scope.culturaId});
						}, function(error) {
							alert("Falha ao salvar Plantio: " + JSON.stringify(error));				
						});
					}
				} else {
					alert("Data já cadastrada!");
				}
			});
		}
	};
	
	$scope.showConfirm = function(planting) {
		var confirmPopup = $ionicPopup.confirm({
			title: 'Aviso!',
			template: 'Confirma exclusão?'
		});
		confirmPopup.then(function(res) {
			if(res) {
				PlantingService.remove(planting._id, planting._rev).then(function() {
					$state.go('app.planting', {areaId: $scope.area._id, safraId: $scope.safraId, culturaId: $scope.culturaId});
				}, function(error) {
					alert("Falha ao remover Plantio: " + JSON.stringify(error));
				});
			}
		});
   };
	
	$scope.remove = function(planting) {
		PlantingService.remove(planting._id, planting._rev).then(function() {
			$state.go('app.planting', {areaId: $scope.area._id, safraId: $scope.safraId, culturaId: $scope.culturaId});
		}, function(error) {
			alert("Falha ao remover Plantio: " + JSON.stringify(error));
		});
	};
})

.controller('PlantingCtrl', function($scope, $rootScope, $stateParams, AreasService, SafraService, CulturaService, PlantingService) {
	$scope.canDragSideMenus = function () { return true; };
	$scope.safraId = $stateParams.safraId;
	$scope.culturaId = $stateParams.culturaId;
	$scope.$on('$ionicView.beforeEnter', function(){
		AreasService.get($stateParams.areaId).then(function(result) {
			$scope.area = result;
			
			SafraService.get($stateParams.safraId).then(function(result) {
				$scope.safra = result.projecaoSafra;
			});
			
			CulturaService.get($stateParams.culturaId).then(function(result) {
				$scope.title = result.nome + ' - ' + $scope.area.nome + ' ' + $scope.area.areaCultivavel + ' ' + $scope.area.medida;
				$scope.totalPlantar = result.area;
			}, function(error) {
				$scope.title = '';
				$scope.totalPlantar = '';
			});
			
			PlantingService.all($stateParams.culturaId).then(function(result) {
				$scope.plantio = result;
				
				$scope.graph = {
						data: [],
						labels: [],
						series: ['Acumulado']
				};
				var data = [];
				var totalPlanting = [];
				data.push('0');
				totalPlanting.push($scope.totalPlantar);
				$scope.graph.labels.push(' ');
				for(var key in result) {
					var planting = result[key];
					data.push(planting.acumulado);
					$scope.graph.labels.push(formataData(planting.date));
					totalPlanting.push($scope.totalPlantar);
				}
				$scope.graph.data.push(data);
				$scope.graph.data.push(totalPlanting);
			}, function(error) {
				$scope.plantio = [];
			});
			
		}, function(error) {
			$scope.area = {};
			$scope.plantio = [];
			$scope.title = '';
			$scope.totalPlantar = '';
		});
	});
	
	/**
	 * Formata data para dd/mm/yy
	 * @returns
	 */
	function formataData(date) {
		var objDate = new Date(date);
		return objDate.getDate() + "/" + (objDate.getMonth() + 1) + "/" + objDate.getFullYear().toString().substring(2);
	}
	
	/*
	$rootScope.$on("couchbase:change", function(event, args) {
		for(var i = 0; i < args.results.length; i++) {
			if(args.results[i].hasOwnProperty("deleted") && args.results[i].deleted === true) {
				delete $scope.plantio[args.results[i].id];
				var data = [];
				for(var key in $scope.plantio) {
					var planting = $scope.plantio[key];
					data.push(planting.acumulado);
					$scope.graph.labels.push(new Date(planting.date).toLocaleDateString());
				}
				$scope.graph.data.push(data);
			} else {
				if(args.results[i].id.indexOf("_design") === -1) {
					todoDatabase.getDocument(args.results[i].id).then(function(result) {
						if(result.type === "plantio") {
							$scope.plantio[result._id] = result;
							$scope.graph.data[0].push(result.acumulado)
							$scope.graph.labels.push(new Date(result.date).toLocaleDateString());
						}
					});
				}
			}
		}
	});*/
});
