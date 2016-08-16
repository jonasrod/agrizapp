angular.module('agrizapp.selling.controllers', [])

.controller('SellingReportCtrl', function($scope, AreasService, CulturaService, SellingService) {
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
	
	function checkId(id) {
		return id == $scope.id;
	}
	
	$scope.pesquisar = function(form) {
		CulturaService.get($scope.filter.produto).then(function(result) {
			var cultura = result;
			var sdate = [$scope.filter.startDate.getFullYear(),$scope.filter.startDate.getDate(),$scope.filter.startDate.getMonth() + 1];
			var edate = [$scope.filter.endDate.getFullYear(),$scope.filter.endDate.getDate(),$scope.filter.endDate.getMonth() + 1];
			SellingService.report(result._id, sdate, edate).then(function(result) {
				$scope.graph = {
						data: [],
						labels: [],
						series: ['Online','Média Vendas']
				};
				
				var volumeTotalVendido = 0;
				var volumeTotal = 0;
				for (var i = 0; i < result.length; i++) {
					volumeTotalVendido = volumeTotalVendido + (parseInt(result[i].volume) * parseInt(result[i].preco));
					volumeTotal = volumeTotal + parseInt(result[i].volume);
				}
				
				var porcentagem = ((volumeTotalVendido / volumeTotal) * 100);
				
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
								
								onlineDatabase.query('agrizapp_sync/report_selling', {startkey: sdate, endkey: edate}).then(function (result) {
									var acumuladoOnline = 0;
									var volumeTotalVendidoOnline = volumeTotal = 0;
									for (var i = 0; i < result.rows.length; i++) {
										$scope.id = result.rows[i].key;
										if (culturasInRange.find(checkId) !== undefined) {
											volumeTotalVendidoOnline = volumeTotalVendidoOnline + (parseInt(result[i].volume) * parseInt(result[i].preco));
											volumeTotalOnline = volumeTotalOnline + parseInt(result[i].volume);
										}
									}
									
									var porcentagemOline = ((volumeTotalVendidoOnline / volumeTotalOnline) * 100);;
									
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
})

.controller('SellingSafraCtrl', function($scope, $stateParams, SafraService) {
	$scope.canDragSideMenus = function () { return true; };
	$scope.$on('$ionicView.beforeEnter', function(){
		SafraService.all().then(function(result) {
			$scope.safras = result;
		}, function(error) {
			$scope.safras = {};
		});
	});
})

.controller('SellingCulturaCtrl', function($scope, $stateParams, CulturaService) {
	$scope.canDragSideMenus = function () { return true; };
	$scope.safraId = $stateParams.safraId;
	CulturaService.culturas($stateParams.safraId).then(function(result) {
		$scope.culturas = result;
	}, function(error) {
		$scope.culturas = {};
	});
})

.controller('SellingCtrl', function($scope, $rootScope, $stateParams, SellingService, CulturaService, HarvestService) {
	$scope.canDragSideMenus = function () { return true; };
	$scope.safraId = $stateParams.safraId;
	$scope.culturaId = $stateParams.culturaId;
	$scope.volumeTotal = 0;
	$scope.receitas = 0;
	$scope.mediaPrecos = 0;
	$scope.saldoDisponivel = 0;
	$scope.$on('$ionicView.beforeEnter', function(){
		SellingService.all($stateParams.culturaId).then(function(result) {
			$scope.vendas = result;
			
			HarvestService.all($stateParams.culturaId).then(function(result) {
				calcSaldoDisponivel($scope.vendas, result)
			});
			
			$scope.graph = {
					data: [],
					labels: [],
					series: ['Acumulado']
			};
			var data = [];
			data.push('0');
			$scope.graph.labels.push(' ');
			for(var key in result) {
				var selling = result[key];
				data.push(selling.acumulado);
				$scope.graph.labels.push(formataData(selling.date));
			}
			$scope.graph.data.push(data);
			
			calcReceitas($scope.vendas);
			calcMediaPrecos($scope.vendas);
		}, function() {
			$scope.vendas = {};
		});
	});
	
	CulturaService.get($stateParams.culturaId).then(function(result) {
		$scope.cultura = result;
	}, function(error) {
		$scope.cultura = {};
	});
	
	/**
	 * Formata data para dd/mm/yy
	 * @returns
	 */
	function formataData(date) {
		var objDate = new Date(date);
		return objDate.getDate() + "/" + (objDate.getMonth() + 1) + "/" + objDate.getFullYear().toString().substring(2);
	}
	
	function calcReceitas(vendas) {
		var total = 0;
		for (var key in vendas) {
			total = total + (parseInt(vendas[key].volume) * parseInt(vendas[key].preco));
		}
		$scope.receitas = total;
	}
	
	function calcMediaPrecos(vendas) {
		var totalVenda = 0;
		var mediaPrecos = 0;
		for (var key in vendas) {
			totalVenda = totalVenda + parseInt(vendas[key].volume);
		}
		if (totalVenda > 0) {
			mediaPrecos = $scope.receitas / totalVenda;
		}
		$scope.mediaPrecos = mediaPrecos.toPrecision(2);
	}
	
	function calcSaldoDisponivel(vendas, colheita) {
		var totalColhido = 0;
		var totalVenda = 0;
		for (var key in vendas) {
			totalVenda = totalVenda + parseInt(vendas[key].volume);
		}
		for (var key in colheita) {
			totalColhido = totalColhido + (parseInt(colheita[key].colhido) * parseInt(colheita[key].produtividade));
		}
		$scope.volumeTotal = totalColhido;
		$scope.saldoDisponivel = totalColhido - totalVenda;
	}
	
	/*
	$rootScope.$on("couchbase:change", function(event, args) {
		for(var i = 0; i < args.results.length; i++) {
			if(args.results[i].hasOwnProperty("deleted") && args.results[i].deleted === true) {
				delete $scope.vendas[args.results[i].id];
				var data = [];
				for(var key in $scope.vendas) {
					var selling = $scope.vendas[key];
					data.push(selling.acumulado);
					$scope.graph.labels.push(new Date(selling.date).toLocaleDateString());
				}
				$scope.graph.data.push(data);
			} else {
				if(args.results[i].id.indexOf("_design") === -1) {
					todoDatabase.getDocument(args.results[i].id).then(function(result) {
						if(result.type === "venda") {
							$scope.vendas[result._id] = result;
							$scope.graph.data[0].push(result.acumulado)
							$scope.graph.labels.push(new Date(result.date).toLocaleDateString());
						}
					});
				}
			}
		}
	});*/
})

.controller('SellingIncCtrl', function($scope, $stateParams, $state, SellingService, CulturaService, $cordovaDevice) {
	$scope.canDragSideMenus = function () { return true; };
	$scope.venda = {};
	$scope.safraId = $stateParams.safraId;
	$scope.culturaId = $stateParams.culturaId;
	$scope.volumeTotal = 0;
	$scope.receitas = 0;
	$scope.mediaPrecos = 0;
	$scope.saldoDisponivel = 0;
	
	$scope.$on('$ionicView.beforeEnter', function(){
		if ($stateParams.vendaId != 9999) {
			SellingService.get($stateParams.vendaId).then(function(result) {
				$scope.venda = result;
				var date = $scope.venda.date;
				$scope.venda.date = new Date(date);
				$scope.isUpdate = true;
			});
		}
		
		CulturaService.get($stateParams.culturaId).then(function(result) {
			$scope.cultura = result;
		}, function(error) {
			$scope.cultura = {};
		});
	});
	
	$scope.save = function(form) {
		if(form.$valid) {
			SellingService.all($stateParams.culturaId).then(function(result) {
				var existe = false;
				for(var key in result) {
					var selling = result[key];
					if (selling.date == $scope.venda.date.toJSON()) {
						existe = true; 
						break;
					} 
				}
				$scope.uuid = $cordovaDevice.getUUID();
				var venda = {
						culturaId: $scope.culturaId,
						date: $scope.venda.date,
						volume: $scope.venda.volume,
						acumulado: 0,
						preco: $scope.venda.preco,
						owner: $scope.uuid,
						type: 'venda'
				};
				if ($scope.isUpdate) {
					venda._id = $scope.venda._id;
					venda._rev = $scope.venda._rev;
					SellingService.update(venda).then(function() {
						$state.go('app.selling', {safraId: $scope.safraId, culturaId: $scope.culturaId});
					});
				} else {
					SellingService.save(venda).then(function() {
						$state.go('app.selling', {safraId: $scope.safraId, culturaId: $scope.culturaId});
					}, function(error) {
						alert("Falha ao salvar Venda: " + JSON.stringify(error));
					});
				}
			});
		}
	};
	
	$scope.showConfirm = function(venda) {
		var confirmPopup = $ionicPopup.confirm({
			title: 'Aviso!',
			template: 'Confirma exclusão?'
		});
		confirmPopup.then(function(res) {
			if(res) {
				SellingService.remove(venda._id, venda._rev).then(function() {
					$state.go('app.selling', {safraId: $scope.safraId, culturaId: $scope.culturaId});
				}, function(error) {
					alert("Falha ao remover Venda: " + JSON.stringify(error));
				});
			}
		});
   };
	
	$scope.remove = function(venda) {
		SellingService.remove(venda._id, venda._rev).then(function() {
			$state.go('app.selling', {safraId: $scope.safraId, culturaId: $scope.culturaId});
		}, function(error) {
			alert("Falha ao remover Venda: " + JSON.stringify(error));
		});
	};
});