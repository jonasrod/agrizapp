var todoDatabase = null;
var onlineDatabase = null;
var URL_SERVIDOR = 'http://agrizap.tobe.com.br/gateway/agrizapp';
//var URL_SERVIDOR = 'http://192.168.1.32:4984/agrizapp';

/*
 * Função para reordenar um array de objetos utilizando uma propriedade especifica do objeto
 * @param propName
 */
function compare(propName) {
    return function(a,b) {
        if (a[propName] < b[propName])
            return -1;
        if (a[propName] > b[propName])
            return 1;
        return 0;
    };
}

angular.module('AgrizApp', ['ionic', 'ngMessages', 'ngCordova', 'ngCouchbaseLite', 'ionic.utils', 
                            'agrizapp.services', 'agrizapp.controllers', 'agrizapp.area.controllers', 
                            'agrizapp.planting.controllers', 'agrizapp.harvest.controllers', 
                            'agrizapp.selling.controllers','agrizapp.routes', 'chart.js'])

.run(function($ionicPlatform, $couchbase) {
	  $ionicPlatform.ready(function() {
		  if(window.cordova && window.cordova.plugins.Keyboard) {
			  cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
	      }
	      if(window.StatusBar) {
	    	  StatusBar.styleDefault();
	      }
	      
		  if (!window.cblite) {
			  console.log("Couchbase não esta instalado!");
	      } else {
	    	  
	    	  onlineDatabase = new PouchDB(URL_SERVIDOR);
	    	  
	    	  onlineDatabase.info().then(function (info) {
	    		  console.log(info);
	    	  });
	    		
	    	  cblite.getURL(function(err, url) {
	                if(err) {
	                    console.log("Houve um erro ao recuperar a URL do banco de dados");
	                    return;
	                }
	                
	                todoDatabase = new $couchbase(url, "agrizapp");
	                
	                todoDatabase.getDatabase().then(function(result) {
	                	todoDatabase.listen();
	                	syncDataBase();
	                }, function(error) {
	                	if (error.status == '404') {//banco de dados não existe, então cria
	                		todoDatabase.createDatabase().then(function(result) {
	                			var agrizappViews = {
	                                    areaList: {
	                                        map: function(doc, meta) {
	                                            if(doc.type == "area" && doc._deleted !== true) {
	                                                emit(doc._id, {_id: doc._id, nome: doc.nome, areaCultivavel: doc.areaCultivavel, medida: doc.medida, rev: doc._rev})
	                                            }
	                                        }.toString()
	                                    },
	                                    safras: {
	                                        map: function(doc, meta) {
	                                            if(doc.type == "safra" && doc._deleted !== true) {
	                                                emit(doc.areaId, doc)
	                                            }
	                                        }.toString()
	                                    },
	                                    culturas: {
	                                        map: function(doc, meta) {
	                                            if(doc.type == "cultura" && doc._deleted !== true ) {
	                                                emit(doc.safraId, doc)
	                                            }
	                                        }.toString()
	                                    },
	                                    plantio: {
	                                        map: function(doc, meta) {
	                                            if(doc.type == "plantio" && doc._deleted !== true) {
	                                                emit(doc.culturaId, doc)
	                                            }
	                                        }.toString()
	                                    },
	                                    colheita: {
	                                        map: function(doc, meta) {
	                                            if(doc.type == "colheita" && doc._deleted !== true) {
	                                                emit(doc.culturaId, doc)
	                                            }
	                                        }.toString()
	                                    },
	                                    vendas: {
	                                        map: function(doc, meta) {
	                                            if(doc.type == "venda" && doc._deleted !== true) {
	                                                emit(doc.culturaId, doc)
	                                            }
	                                        }.toString()
	                                    },
	                                    reportPlanting: {
	                                    	map: function(doc, meta) {
	                                            if(doc.type == "plantio" && doc._deleted !== true) {
	                                            	var date = new Date(doc.date);
	                                                emit([date.getFullYear(),date.getDate(),date.getMonth()+1], {plantado: doc.plantado, culturaId: doc.culturaId})
	                                            }
	                                        }.toString()
	                                    },
	                                    reportHarvest: {
	                                    	map: function(doc, meta) {
	                                            if(doc.type == "colheita" && doc._deleted !== true) {
	                                            	var date = new Date(doc.date);
	                                                emit([date.getFullYear(),date.getDate(),date.getMonth()+1], {colhido: doc.colhido, produtividade: doc.produtividade, culturaId: doc.culturaId})
	                                            }
	                                        }.toString()
	                                    },
	                                    reportSelling: {
	                                    	map: function(doc, meta) {
	                                            if(doc.type == "venda" && doc._deleted !== true) {
	                                            	var date = new Date(doc.date);
	                                                emit([date.getFullYear(),date.getDate(),date.getMonth()+1], {volume: doc.volume, preco: doc.preco, culturaId: doc.culturaId})
	                                            }
	                                        }.toString()
	                                    }
	                                };
	    	                    todoDatabase.createDesignDocument("_design/agrizapp", agrizappViews);
	    	                    todoDatabase.listen();
	    	                    syncDataBase();
	    	                }, function(error) {
	    	                	console.log("Houve um erro ao criar o banco de dados -> " + JSON.stringify(error));
	    	                });
	                	}
	                });
	    	  });
	      }
	  });
});

function syncDataBase() {
	todoDatabase.replicate("agrizapp", URL_SERVIDOR, true).then(function(result) {
		console.log("Base sincronizada! local -> online");
        todoDatabase.replicate(URL_SERVIDOR, "agrizapp", true).then(function(result) {
            console.log("Base sincronizada! online -> local");
        }, function(error) {
        	console.log("Falha ao sincronizar online -> local!" + JSON.stringify(error));
        });
    }, function(error) {
    	console.log("Falha ao sincronizar local -> online" + JSON.stringify(error));
    });
}
