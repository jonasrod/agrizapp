angular.module('agrizapp.harvest.controllers', [])

.controller('HarvestReportCtrl', function($scope, AreasService, CulturaService, HarvestService) {
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
			HarvestService.report(result._id, sdate, edate).then(function(result) {
				$scope.graph = {
						data: [],
						labels: [],
						series: ['Online','Colhido']
				};
				
				//var totalProduzido = calcTotalProduzido(result);
				var mediaRendimento = calcMediaRendimento(result);
				
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
								safrasInRange.push(result.rows[i].id); 
							}
							
							onlineDatabase.query('agrizapp_sync/culturas', {keys: safrasInRage}).then(function (result) {
								var culturasInRage = [];
								for (var i = 0; i < result.rows.length; i++) {
									if (cultura.nome == result.rows[i].value.nome) {
										culturasInRange.push(result.rows[i].id);
									}
								}
								
								onlineDatabase.query('agrizapp_sync/report_harvest', {startkey: sdate, endkey: edate}).then(function (result) {
									var acumuladoOnline = 0;
									var total = 0;
									for (var i = 0; i < result.rows.length; i++) {
										$scope.id = result.rows[i].key;
										if (culturasInRange.find(checkId) !== undefined) {
											acumuladoOnline = acumuladoOnline + calcMediaRendimento(result.rows[i].value);
											total = total + 1;
										}
									}
									
									var porcentagemOline = ((acumuladoOnline / total) * 100);
									
									$scope.graph.data.push([mediaRendimento]);
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
				
			}, function(error) {
				$scope.plantio = [];
			});
		});
	};
	
	function calcTotalProduzido(colheita) {
		var total = 0;
		for (var i = 0; i < colheita.length; i++) {
			total = total + (parseInt(colheita[i].colhido) * parseInt(colheita[i].produtividade));
		}
		//$scope.totalProduzido = total;
		return total;
	}
	
	function calcMediaRendimento(colheita) {
		var totalColheita = 0;
		var mediaRendimento = 0;
		for (var i = 0; i < colheita.length; i++) {
			totalColheita = totalColheita + parseInt(colheita[i].colhido);
		}
		if (totalColheita > 0) {
			mediaRendimento = calcTotalProduzido(colheita) / totalColheita;
		}
		//$scope.mediaRendimento = mediaRendimento.toPrecision(2);
		return mediaRendimento.toPrecision(2);
	}
	
	function checkId(id) {
		return id == $scope.id;
	}
})

.controller('HarvestAreaCtrl', function($scope, AreasService) {
	$scope.canDragSideMenus = function () { return true; };
	$scope.$on('$ionicView.beforeEnter', function(){
		AreasService.all().then(function(result) {
			$scope.areas = result;
		}, function(error) {
			$scope.areas = {};
		});
	});
})

.controller('HarvestSafraCtrl', function($scope, $stateParams, AreasService, SafraService) {
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

.controller('HarvestCulturaCtrl', function($scope, $stateParams, AreasService, CulturaService) {
	$scope.canDragSideMenus = function () { return true; };
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

.controller('HarvestIncCtrl', function($scope, $stateParams, $state, AreasService, HarvestService, CulturaService, $cordovaDevice, $ionicPopup) {
	$scope.canDragSideMenus = function () { return true; };
	$scope.colheita = {};
	$scope.safraId = $stateParams.safraId;
	$scope.culturaId = $stateParams.culturaId;
	$scope.isUpdate = false;
	$scope.harvestId = $stateParams.harvestId;
	$scope.$on('$ionicView.beforeEnter', function(){
		AreasService.get($stateParams.areaId).then(function(result) {
			$scope.area = result;
			if ($stateParams.harvestId != 9999) {
				HarvestService.get($stateParams.harvestId).then(function(result) {
					$scope.colheita = result;
					var date = $scope.colheita.date;
					$scope.colheita.date = new Date(date);
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
			HarvestService.all($stateParams.culturaId).then(function(result) {
				var existe = false;
				for(var key in result) {
					var harvest = result[key];
					if (harvest.date == $scope.colheita.date.toJSON()) {
						existe = true; 
						break;
					} 
				}
				if (!existe) {
					$scope.uuid = $cordovaDevice.getUUID();
					var colheita = {
							culturaId: $scope.culturaId,
							date: $scope.colheita.date,
							colhido: $scope.colheita.colhido,
							acumulado: 0,
							produtividade: $scope.colheita.produtividade,
							owner: $scope.uuid,
							type: 'colheita'
					};
					if ($scope.isUpdate) {
						colheita._id = $scope.colheita._id;
						colheita._rev = $scope.colheita._rev;
						HarvestService.update(colheita).then(function() {
							$state.go('app.harvest', {areaId: $scope.area._id, safraId: $scope.safraId, culturaId: $scope.culturaId});
						});
					} else {
						HarvestService.save(colheita).then(function() {
							$state.go('app.harvest', {areaId: $scope.area._id, safraId: $scope.safraId, culturaId: $scope.culturaId});
						}, function(error) {
							alert("Falha ao salvar Colheita: " + JSON.stringify(error));				
						});
					}
				} else {
					alert("Data já cadastrada!");
				}
			});
		}
	};
	
	$scope.showConfirm = function(colheita) {
		var confirmPopup = $ionicPopup.confirm({
			title: 'Aviso!',
			template: 'Confirma exclusão?'
		});
		confirmPopup.then(function(res) {
			if(res) {
				HarvestService.remove(colheita._id, colheita._rev).then(function() {
					$state.go('app.harvest', {areaId: $scope.area._id, safraId: $scope.safraId, culturaId: $scope.culturaId});
				}, function(error) {
					alert("Falha ao remover Colheita: " + JSON.stringify(error));
				});
			}
		});
   };
	
	$scope.remove = function(colheita) {
		HarvestService.remove(colheita._id, colheita._rev).then(function() {
			$state.go('app.harvest', {areaId: $scope.area._id, safraId: $scope.safraId, culturaId: $scope.culturaId});
		}, function(error) {
			alert("Falha ao remover Colheita: " + JSON.stringify(error));
		});
	};
})

.controller('HarvestCtrl', function($scope, $rootScope, $stateParams, AreasService, CulturaService, SafraService, HarvestService, PlantingService) {
	$scope.canDragSideMenus = function () { return true; };
	$scope.safraId = $stateParams.safraId;
	$scope.culturaId = $stateParams.culturaId;
	$scope.totalProduzido = 0;
	$scope.mediaRendimento = 0;
	$scope.$on('$ionicView.beforeEnter', function(){
		AreasService.get($stateParams.areaId).then(function(result) {
			$scope.area = result;
			SafraService.get($stateParams.safraId).then(function(result) {
				$scope.safra = result.projecaoSafra;
			});
			
			CulturaService.get($stateParams.culturaId).then(function(result) {
				$scope.title = result.nome + ' - ' + $scope.area.nome + ' ' + $scope.area.areaCultivavel + ' ' + $scope.area.medida;
			}, function(error) {
				$scope.title = '';
			});
			
			
			PlantingService.all($stateParams.culturaId).then(function(result) {
				var totalPlantado = 0;
				for(var key in result) {
					totalPlantado = totalPlantado + parseInt(result[key].plantado);
				}
				$scope.totalColher = totalPlantado;
			}, function(error) {
				$scope.totalColher = 0;
			});
			
			HarvestService.all($stateParams.culturaId).then(function(result) {
				$scope.colheita = result;
				calcTotalProduzido($scope.colheita);
				calcMediaRendimento($scope.colheita);
				
				$scope.graph = {
						data: [],
						labels: [],
						series: ['Acumulado']
				};
				var data = [];
				var totalHarvest = [];
				data.push('0');
				totalHarvest.push($scope.totalColher);
				$scope.graph.labels.push(' ');
				for(var key in result) {
					var harvest = result[key];
					data.push(harvest.acumulado);
					$scope.graph.labels.push(formataData(harvest.date));
					totalHarvest.push($scope.totalColher);
				}
				$scope.graph.data.push(data);
				$scope.graph.data.push(totalHarvest);
				
			}, function(error) {
				$scope.colheita = [];
			});
			
		}, function(error) {
			$scope.area = {};
			$scope.colheita = [];
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
	
	function calcTotalProduzido(colheita) {
		var total = 0;
		for (var key in colheita) {
			total = total + (parseInt(colheita[key].colhido) * parseInt(colheita[key].produtividade));
		}
		$scope.totalProduzido = total;
	}
	
	function calcMediaRendimento(colheita) {
		var totalColheita = 0;
		var mediaRendimento = 0;
		for (var key in colheita) {
			totalColheita = totalColheita + parseInt(colheita[key].colhido);
		}
		if (totalColheita > 0) {
			mediaRendimento = $scope.totalProduzido / totalColheita;
		}
		$scope.mediaRendimento = mediaRendimento.toPrecision(2);
	}
	/*
	$rootScope.$on("couchbase:change", function(event, args) {
		for(var i = 0; i < args.results.length; i++) {
			if(args.results[i].hasOwnProperty("deleted") && args.results[i].deleted === true) {
				delete $scope.colheita[args.results[i].id];
				var data = [];
				for(var key in $scope.colheita) {
					var harvest = $scope.colheita[key];
					data.push(harvest.acumulado);
					$scope.graph.labels.push(new Date(harvest.date).toLocaleDateString());
				}
				$scope.graph.data.push(data);
			} else {
				if(args.results[i].id.indexOf("_design") === -1) {
					todoDatabase.getDocument(args.results[i].id).then(function(result) {
						if(result.type === "colheita") {
							$scope.colheita[result._id] = result;
							calcTotalProduzido($scope.colheita);
							calcMediaRendimento($scope.colheita);
							$scope.graph.data[0].push(result.acumulado)
							$scope.graph.labels.push(new Date(result.date).toLocaleDateString());
						}
					});
				}
			}
		}
	});*/
});