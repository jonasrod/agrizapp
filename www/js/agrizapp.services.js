angular.module('agrizapp.services', [])

.factory('QuotesConfig', function() {
        var factors = {
          'Soja (Chicago)' : [
            {
              factorGroup : 'Soja (Chicago)',
              factor: 'SU15.CBT',
              name: 'Soja (Chicago) Set 15',
              shortname: 'SU15',
              month:'Set/15'
            },
            {
              factorGroup : 'Soja (Chicago)',
              factor: 'SX15.CBT',
              name: 'Soja (Chicago) Nov 15',
              shortname: 'SX15',
              month:'Nov/15'
            },
            {
              factorGroup : 'Soja (Chicago)',
              factor: 'SF16.CBT',
              name: 'Soja (Chicago) Jan 16',
              shortname: 'SF16',
              month:'Jan/16'
            },
            {
              factorGroup : 'Soja (Chicago)',
              factor: 'SH16.CBT',
              name: 'Soja (Chicago) Mar 16',
              shortname: 'SH16',
              month:'Mar/16'
            },
            {
              factorGroup : 'Soja (Chicago)',
              factor: 'SK16.CBT',
              name: 'Soja (Chicago) Mai 16',
              shortname: 'SK16',
              month:'Mai/16'
            },
            {
              factorGroup : 'Soja (Chicago)',
              factor: 'SN16.CBT',
              name: 'Soja (Chicago) Jul 16',
              shortname: 'SQ16',
              month:'Jul/16'
            },{
              factorGroup : 'Soja (Chicago)',
              factor: 'SQ16.CBT',
              name: 'Soja (Chicago) Ago 16',
              shortname: 'SQ16',
              month:'Ago/16'
            },
            {
              factorGroup : 'Soja (Chicago)',
              factor: 'SU16.CBT',
              name: 'Soja (Chicago) Set 16',
              shortname: 'SU16',
              month:'Set/16'
            },
            {
              factorGroup : 'Soja (Chicago)',
              factor: 'SX16.CBT',
              name: 'Soja (Chicago) Nov 16',
              shortname: 'SX16',
              month:'Nov/16'
            },
            {
              factorGroup : 'Soja (Chicago)',
              factor: 'SF17.CBT',
              name: 'Soja (Chicago) Jan 17',
              shortname: 'SF17',
              month:'Jan/17'
            },
            {
              factorGroup : 'Soja (Chicago)',
              factor: 'SH17.CBT',
              name: 'Soja (Chicago) Mar 17',
              shortname: 'SH17',
              month:'Mar/17'
            },
            {
              factorGroup : 'Soja (Chicago)',
              factor: 'SK17.CBT',
              name: 'Soja (Chicago) Mai 17',
              shortname: 'SK17',
              month:'Mai/17'
            },
            {
              factorGroup : 'Soja (Chicago)',
              factor: 'SN17.CBT',
              name: 'Soja (Chicago) Jul 17',
              shortname: 'SQ17',
              month:'Jul/17'
            },{
              factorGroup : 'Soja (Chicago)',
              factor: 'SQ17.CBT',
              name: 'Soja (Chicago) Ago 17',
              shortname: 'SQ17',
              month:'Ago/17'
            },
            {
              factorGroup : 'Soja (Chicago)',
              factor: 'SU17.CBT',
              name: 'Soja (Chicago) Set 17',
              shortname: 'SU17',
              month:'Set/17'
            },
            {
              factorGroup : 'Soja (Chicago)',
              factor: 'SX17.CBT',
              name: 'Soja (Chicago) Nov 17',
              shortname: 'SX17',
              month:'Nov/17'
            }
           ],
           'Farelo de Soja (Chicago)' : [
             {
               factorGroup : 'Farelo de Soja (Chicago)',
               factor: 'SMV15.CBT',
               name: 'Farelo de Soja (Chicago) Out 15',
               shortname: 'SMV15',
               month:'Out/15'
             },
             {
               factorGroup : 'Farelo de Soja (Chicago)',
               factor: 'SMZ15.CBT',
               name: 'Farelo de Soja (Chicago) Dez 15',
               shortname: 'SMZ15',
               month:'Dez/15'
             },
             {
               factorGroup : 'Farelo de Soja (Chicago)',
               factor: 'SMF16.CBT',
               name: 'Farelo de Soja (Chicago) Jan 16',
               shortname: 'SMF16',
               month:'Jan/16'
             },
             {
               factorGroup : 'Farelo de Soja (Chicago)',
               factor: 'SMH16.CBT',
               name: 'Farelo de Soja (Chicago) Mar 16',
               shortname: 'SMH16',
               month:'Mar/16'
             },
             {
               factorGroup : 'Farelo de Soja (Chicago)',
               factor: 'SMK16.CBT',
               name: 'Farelo de Soja (Chicago) Mai 16',
               shortname: 'SMK16',
               month:'Mai/16'
             },
             {
               factorGroup : 'Farelo de Soja (Chicago)',
               factor: 'SMN16.CBT',
               name: 'Farelo de Soja (Chicago) Jul 16',
               shortname: 'SMQ16',
               month:'Jul/16'
             },{
               factorGroup : 'Farelo de Soja (Chicago)',
               factor: 'SMQ16.CBT',
               name: 'Farelo de Soja (Chicago) Ago 16',
               shortname: 'SMQ16',
               month:'Ago/16'
             },
             {
               factorGroup : 'Farelo de Soja (Chicago)',
               factor: 'SMU16.CBT',
               name: 'Farelo de Soja (Chicago) Set 16',
               shortname: 'SMU16',
               month:'Set/16'
             },
             {
               factorGroup : 'Farelo de Soja (Chicago)',
               factor: 'SMV16.CBT',
               name: 'Farelo de Soja (Chicago) Out 16',
               shortname: 'SMV16',
               month:'Out/16'
             },
             {
               factorGroup : 'Farelo de Soja (Chicago)',
               factor: 'SMZ16.CBT',
               name: 'Farelo de Soja (Chicago) Dez 16',
               shortname: 'SMZ16',
               month:'Dez/16'
             }
            ],
            'Óleo de Soja (Chicago)' : [
              {
                factorGroup : 'Óleo de Soja (Chicago)',
                factor: 'BOV15.CBT',
                name: 'Óleo de Soja (Chicago) Out 15',
                shortname: 'BOV15',
                month:'Out/15'
              },
              {
                factorGroup : 'Óleo de Soja (Chicago)',
                factor: 'BOZ15.CBT',
                name: 'Óleo de Soja (Chicago) Dez 15',
                shortname: 'BOZ15',
                month:'Dez/15'
              },
              {
                factorGroup : 'Óleo de Soja (Chicago)',
                factor: 'BOF16.CBT',
                name: 'Óleo de Soja (Chicago) Jan 16',
                shortname: 'BOF16',
                month:'Jan/16'
              },
              {
                factorGroup : 'Óleo de Soja (Chicago)',
                factor: 'BOH16.CBT',
                name: 'Óleo de Soja (Chicago) Mar 16',
                shortname: 'BOH16',
                month:'Mar/16'
              },
              {
                factorGroup : 'Óleo de Soja (Chicago)',
                factor: 'BOK16.CBT',
                name: 'Óleo de Soja (Chicago) Mai 16',
                shortname: 'BOK16',
                month:'Mai/16'
              },
              {
                factorGroup : 'Óleo de Soja (Chicago)',
                factor: 'BON16.CBT',
                name: 'Óleo de Soja (Chicago) Jul 16',
                shortname: 'BOQ16',
                month:'Jul/16'
              },{
                factorGroup : 'Óleo de Soja (Chicago)',
                factor: 'BOQ16.CBT',
                name: 'Óleo de Soja (Chicago) Ago 16',
                shortname: 'BOQ16',
                month:'Ago/16'
              },
              {
                factorGroup : 'Óleo de Soja (Chicago)',
                factor: 'BOU16.CBT',
                name: 'Óleo de Soja (Chicago) Set 16',
                shortname: 'BOU16',
                month:'Set/16'
              },
              {
                factorGroup : 'Óleo de Soja (Chicago)',
                factor: 'BOV16.CBT',
                name: 'Óleo de Soja (Chicago) Out 16',
                shortname: 'BOV16',
                month:'Out/16'
              },
              {
                factorGroup : 'Óleo de Soja (Chicago)',
                factor: 'BOZ16.CBT',
                name: 'Óleo de Soja (Chicago) Dez 16',
                shortname: 'BOZ16',
                month:'Dez/16'
              }
            ],
            'Milho (Chicago)': [
              {
                factorGroup : 'Milho (Chicago)',
                factor: 'CU15.CBT',
                name: 'Milho (Chicago) Set 15',
                shortname: 'CU15',
                month:'Set/15'
              },
              {
                factorGroup : 'Milho (Chicago)',
                factor: 'CZ15.CBT',
                name: 'Milho (Chicago) Dez 15',
                shortname: 'CZ15',
                month:'Dez/15'
              },
              {
                factorGroup : 'Milho (Chicago)',
                factor: 'CH16.CBT',
                name: 'Milho (Chicago) Mar 16',
                shortname: 'CH16',
                month:'Mar/16'
              },
              {
                factorGroup : 'Milho (Chicago)',
                factor: 'CK16.CBT',
                name: 'Milho (Chicago) Mai 16',
                shortname: 'CK16',
                month:'Mai/16'
              },
              {
                factorGroup : 'Milho (Chicago)',
                factor: 'CN16.CBT',
                name: 'Milho (Chicago) Jul 16',
                shortname: 'CN16',
                month:'Jul/16'
              },
              {
                factorGroup : 'Milho (Chicago)',
                factor: 'CU16.CBT',
                name: 'Milho (Chicago) Set 16',
                shortname: 'CU16',
                month:'Set/16'
              },
              {
                factorGroup : 'Milho (Chicago)',
                factor: 'CZ16.CBT',
                name: 'Milho (Chicago) Dez 16',
                shortname: 'CZ16',
                month:'Dez/16'
              },
              {
                factorGroup : 'Milho (Chicago)',
                factor: 'CH17.CBT',
                name: 'Milho (Chicago) Mar 17',
                shortname: 'CH17',
                month:'Mar/17'
              },
              {
                factorGroup : 'Milho (Chicago)',
                factor: 'CK17.CBT',
                name: 'Milho (Chicago) Mai 17',
                shortname: 'CK17',
                month:'Mai/17'
              },
              {
                factorGroup : 'Milho (Chicago)',
                factor: 'CN17.CBT',
                name: 'Milho (Chicago) Jul 17',
                shortname: 'CN17',
                month:'Jul/17'
              },
              {
                factorGroup : 'Milho (Chicago)',
                factor: 'CU17.CBT',
                name: 'Milho (Chicago) Set 17',
                shortname: 'CU17',
                month:'Set/17'
              },
              {
                factorGroup : 'Milho (Chicago)',
                factor: 'CZ17.CBT',
                name: 'Milho (Chicago) Dez 17',
                shortname: 'CZ17',
                month:'Dez/17'
              }
            ],
            'Trigo (Chicago)': [
              {
                factorGroup : 'Trigo (Chicago)',
                factor: 'WU15.CBT',
                name: 'Trigo (Chicago) Set 15',
                shortname: 'WU15',
                month:'Set/15'
              },
              {
                factorGroup : 'Trigo (Chicago)',
                factor: 'WZ15.CBT',
                name: 'Trigo (Chicago) Dez 15',
                shortname: 'WZ15',
                month:'Dez/15'
              },
              {
                factorGroup : 'Trigo (Chicago)',
                factor: 'WH16.CBT',
                name: 'Trigo (Chicago) Mar 16',
                shortname: 'WH16',
                month:'Mar/16'
              },
              {
                factorGroup : 'Trigo (Chicago)',
                factor: 'WK16.CBT',
                name: 'Trigo (Chicago) Mai 16',
                shortname: 'WK16',
                month:'Mai/16'
              },
              {
                factorGroup : 'Trigo (Chicago)',
                factor: 'WN16.CBT',
                name: 'Trigo (Chicago) Jul 16',
                shortname: 'WN16',
                month:'Jul/16'
              },
              {
                factorGroup : 'Trigo (Chicago)',
                factor: 'WU16.CBT',
                name: 'Trigo (Chicago) Set 16',
                shortname: 'WU16',
                month:'Set/16'
              },
              {
                factorGroup : 'Trigo (Chicago)',
                factor: 'WZ16.CBT',
                name: 'Trigo (Chicago) Dez 16',
                shortname: 'WZ16',
                month:'Dez/16'
              },
              {
                factorGroup : 'Trigo (Chicago)',
                factor: 'WH17.CBT',
                name: 'Trigo (Chicago) Mar 17',
                shortname: 'WH17',
                month:'Mar/17'
              },
              {
                factorGroup : 'Trigo (Chicago)',
                factor: 'WK17.CBT',
                name: 'Trigo (Chicago) Mai 17',
                shortname: 'WK17',
                month:'Mai/17'
              },
              {
                factorGroup : 'Trigo (Chicago)',
                factor: 'WN17.CBT',
                name: 'Trigo (Chicago) Jul 17',
                shortname: 'WN17',
                month:'Jul/17'
              },
              {
                factorGroup : 'Trigo (Chicago)',
                factor: 'WU17.CBT',
                name: 'Trigo (Chicago) Set 17',
                shortname: 'WU17',
                month:'Set/17'
              },
              {
                factorGroup : 'Trigo (Chicago)',
                factor: 'WZ17.CBT',
                name: 'Trigo (Chicago) Dez 17',
                shortname: 'WZ17',
                month:'Dez/17'
              }
            ],
            'Açúcar (Nova York)': [
              {
                factorGroup : 'Açúcar (Nova York)',
                factor: 'SBV15.NYB',
                name: 'Açúcar NY Out 15',
                shortname: 'SBZ15',
                month:'Out/15'
              },
              {
                factorGroup : 'Açúcar (Nova York)',
                factor: 'SBH16.NYB',
                name: 'Açúcar NY Mar 16',
                shortname: 'SBH16',
                month:'Mar/16'
              },
              {
                factorGroup : 'Açúcar (Nova York)',
                factor: 'SBK16.NYB',
                name: 'Açúcar NY Mai 16',
                shortname: 'SBK16',
                month:'Mai/16'
              },
              {
                factorGroup : 'Açúcar (Nova York)',
                factor: 'SBN16.NYB',
                name: 'Açúcar NY Jul 16',
                shortname: 'SBN16',
                month:'Jul/16'
              },
              {
                factorGroup : 'Açúcar (Nova York)',
                factor: 'SBV16.NYB',
                name: 'Açúcar NY Out 16',
                shortname: 'SBV16',
                month:'Out/16'
              },
              {
                factorGroup : 'Açúcar (Nova York)',
                factor: 'SBH17.NYB',
                name: 'Açúcar NY Mar 17',
                shortname: 'SBH17',
                month:'Mar/17'
              },
              {
                factorGroup : 'Açúcar (Nova York)',
                factor: 'SBK17.NYB',
                name: 'Açúcar NY Mai 17',
                shortname: 'SBK17',
                month:'Mai/17'
              },
              {
                factorGroup : 'Açúcar (Nova York)',
                factor: 'SBN17.NYB',
                name: 'Açúcar NY Jul 17',
                shortname: 'SBN17',
                month:'Jul/17'
              },
              {
                factorGroup : 'Açúcar (Nova York)',
                factor: 'SBV17.NYB',
                name: 'Açúcar NY Out 17',
                shortname: 'SBV17',
                month:'Out/17'
              }
            ],
            'Algodão (Nova York)' : [
              {
                factorGroup : 'Algodão (Nova York)',
                factor: 'CTZ15.NYB',
                name: 'Algodão NY Dez 15',
                shortname: 'CTZ15',
                month:'Dez/15'
              },
              {
                factorGroup : 'Algodão (Nova York)',
                factor: 'CTH16.NYB',
                name: 'Algodão NY Mar 16',
                shortname: 'CTH16',
                month:'Mar/16'
              },
              {
                factorGroup : 'Algodão (Nova York)',
                factor: 'CTK16.NYB',
                name: 'Algodão NY Mai 16',
                shortname: 'CTK16',
                month:'Mai/16'
              },
              {
                factorGroup : 'Algodão (Nova York)',
                factor: 'CTN16.NYB',
                name: 'Algodão NY Jul 16',
                shortname: 'CTN16',
                month:'Jul/16'
              },
              {
                factorGroup : 'Algodão (Nova York)',
                factor: 'CTZ16.NYB',
                name: 'Algodão NY Dez 16',
                shortname: 'CTZ16',
                month:'Dez/16'
              }
             ],
             'Café (Nova York)': [
               {
                 factorGroup : 'Café (Nova York)',
                 factor: 'KCU15.NYB',
                 name: 'Café NY Set 15',
                 shortname: 'KCU15',
                 month:'Set/15'
               },
               {
                 factorGroup : 'Café (Nova York)',
                 factor: 'KCZ15.NYB',
                 name: 'Café NY Dez 15',
                 shortname: 'KCZ15',
                 month:'Dez/15'
               },
               {
                 factorGroup : 'Café (Nova York)',
                 factor: 'KCH16.NYB',
                 name: 'Café NY Mar 16',
                 shortname: 'KCH16',
                 month:'Mar/16'
               },
               {
                 factorGroup : 'Café (Nova York)',
                 factor: 'KCK16.NYB',
                 name: 'Café NY Mai 16',
                 shortname: 'KCK16',
                 month:'Mai/16'
               },
               {
                 factorGroup : 'Café (Nova York)',
                 factor: 'KCN16.NYB',
                 name: 'Café NY Jul 16',
                 shortname: 'KCN16',
                 month:'Jul/16'
               },
               {
                 factorGroup : 'Café (Nova York)',
                 factor: 'KCU16.NYB',
                 name: 'Café NY Set 16',
                 shortname: 'KCU16',
                 month:'Set/16'
               },
               {
                 factorGroup : 'Café (Nova York)',
                 factor: 'KCZ16.NYB',
                 name: 'Café NY Dez 16',
                 shortname: 'KCZ16',
                 month:'Dez/16'
               },
               {
                 factorGroup : 'Café (Nova York)',
                 factor: 'KCH17.NYB',
                 name: 'Café NY Mar 17',
                 shortname: 'KCH17',
                 month:'Mar/17'
               },
               {
                 factorGroup : 'Café (Nova York)',
                 factor: 'KCK17.NYB',
                 name: 'Café NY Mai 17',
                 shortname: 'KCK17',
                 month:'Mai/17'
               },
               {
                 factorGroup : 'Café (Nova York)',
                 factor: 'KCN17.NYB',
                 name: 'Café NY Jul 17',
                 shortname: 'KCN17',
                 month:'Jul/17'
               },
               {
                 factorGroup : 'Café (Nova York)',
                 factor: 'KCU17.NYB',
                 name: 'Café NY Set 17',
                 shortname: 'KCU17',
                 month:'Set/17'
               },
               {
                 factorGroup : 'Café (Nova York)',
                 factor: 'KCZ17.NYB',
                 name: 'Café NY Dez 17',
                 shortname: 'KCZ17',
                 month:'Dez/17'
               }
             ],
            "Moeda Spot": [
              {
                factorGroup : 'Moedas',
                factor: 'BRL=X',
                name: 'Dólar Americano x Real',
                shortname: 'USD/BRL'
              },
              {
                factorGroup : 'Moedas',
                factor: 'BRLEUR=X',
                name: 'Real x Euro',
                shortname: 'BRL/EUR'
              },
              {
                factorGroup : 'Moedas',
                factor: 'EURUSD=X',
                name: 'Euro x Dólar Americano',
                shortname: 'EUR/USD'
              },
              {
                factorGroup : 'Moedas',
                factor: 'AUDUSD=X',
                name: 'Dólar Australiano x Dólar Americano',
                shortname: 'AUD/USD'
              },
              {
                factorGroup : 'Moedas',
                factor: 'GBPUSD=X',
                name: 'Libra x Dólar Americano',
                shortname: 'GBP/USD'
              },
              {
                factorGroup : 'Moedas',
                factor: 'JPY=X',
                name: 'Dólar Americano x Yen',
                shortname: 'USD/JPY'
              },
              {
                factorGroup : 'Moedas',
                factor: 'EURJPY=X',
                name: 'Euro x Yene',
                shortname: 'EUR/JPY'
              },
              {
                factorGroup : 'Moedas',
                factor: 'EURGBP=X',
                name: 'Euro x Libra',
                shortname: 'EUR/GBP'
              }
            ]
          };

         return {
           allFactorGroups: function() {
             //gets all keys from the factorGroups dictionary
             var keys = [], i = 0; for (keys[i++] in factors) {}
             return keys;
           },
           allFactorsFromFactorGroup: function(factorGroup) {
             if (factorGroup in factors) {
               return factors[factorGroup];
             }
             return null;
           },
           getFactor: function(factor) {
             for (factorGroup in factors) {
               for (var i = 0; i < factors[factorGroup].length; i++) {
                 if (factors[factorGroup][i].factor == factor) {
                   return factors[factorGroup][i];
                 }
               }
             }
             return null;
           }
         };
      })
.factory('AreasService', function($q, SafraService) {
	/*
	 * Gera lista de valores para o combo de PH.
	 * @return array
	 */
	function makePhList() {
		var phList = {
				availableOptions: [{
					valor: (0.0).toPrecision(2),
					desc: '0,0'
				}]
		};
		var i = 0.0;
		var precision = 1;
		while (i.toPrecision(precision) < 14.0) {
			i = i + 0.1;
			phList.availableOptions.push({valor: i.toPrecision(precision).toString(), desc: i.toPrecision(precision).toString().replace('.', ',')});
			if (i.toPrecision(precision) == 0.9) {
				precision = 2;
			} else if (i.toPrecision(precision) == 9.9) {
				precision = 3;
			}
		}
		return phList;
	}
	/*
	 * Gera lista de valores para o combo de projeção de safras
	 * @return array
	 */
	function makeProjecaoSafra() {
		var d = new Date();
		var projecaoSafras = [];
		var currentYear = d.getFullYear();
		var firstYear = currentYear - 5;
		var year = firstYear;
		var valueOption = firstYear.toString().substring(2) + '/' + (firstYear + 1).toString().substring(2);
		
		projecaoSafras.push({valor: valueOption, desc: valueOption});
		
		for (var i = 0; i < 10 ; i++) {
			year = year + 1;
			valueOption = year.toString().substring(2) + '/' + (year + 1).toString().substring(2);
			
			projecaoSafras.push({valor: valueOption, desc: valueOption});
		}
		return projecaoSafras;
	}
	/*
	 * Gera lista de culturas para conversão 
	 */
	function makeCulturaList() {
		var culturas = [{nome: 'Algodão', unidade: '@/hectare'},
		                {nome: 'Aveia', unidade: 'scs/ha'},
		                {nome: 'Café Arábica', unidade: 'scs/ha'},
		                {nome: 'Café Robusta', unidade: 'scs/ha'},
		                {nome: 'Cana de Açúcar', unidade: 'ton/hectare'},
		                {nome: 'Cevada', unidade: 'scs/ha'},
		                {nome: 'Crotalária', unidade: ''},
		                {nome: 'Milheto', unidade: 'scs/ha'},
		                {nome: 'Milho', unidade: 'scs/ha'},
		                {nome: 'Soja', unidade: 'scs/ha'},
		                {nome: 'Sorgo', unidade: 'scs/ha'},
		                {nome: 'Trigo', unidade: 'scs/ha'},
		                {nome: 'Triticale', unidade: 'scs/ha'}
		                ];
		return culturas;
	}
	
	/*
	 * Grava area no banco
	 * @paran area
	 * @return promise
	 */
	function insert(a) {
		var q = $q.defer();
		var area = {
			nome: a.nome,
			localizacao: a.localizacao,
			areaCultivavel: a.areaCultivavel,
			medida: a.medida,
			tipoArea: a.tipoArea,
			altitude: a.altitude,
			medidaAltitude: a.medidaAltitude,
			phMedio: a.phMedio,
			owner: a.owner,
			lat: a.lat,
			lon: a.lon,
			type: 'area'
		};
		todoDatabase.createDocument(area).then(function(result) {
            console.log("Área inserida com sucesso!");
            for (var i = 0; i < a.safras.length; i++) {
            	var safra = {
            			areaId: result.id,
            			projecaoSafra: a.safras[i].projecaoSafra,
            			total: a.safras[i].total,
            			owner: a.owner,
            			type: 'safra'
            	}
            	SafraService.save(safra, a.safras[i].culturas);
            }
            q.resolve();
        }, function(error) {
        	console.log("ERROR INSERTING DOCUMENT -> " + JSON.stringify(error));
        	q.reject(error);
        });
		return q.promise;
	}
	
	function update(area) {
		var q = $q.defer();
		var areaId = area._id;
		todoDatabase.updateDocument(area._id, area._rev, area).then(function(result) {
			console.log("Area atualizado com sucesso!");
			todoDatabase.queryView("_design/agrizapp", "safras").then(function(result) {
	            for(var i = 0; i < result.rows.length; i++) {
	            	if (areaId == result.rows[i].value.areaId) {
	            		SafraService.remove(result.rows[i].value._id, result.rows[i].value._rev);
	            	}
	            }
	            for (var i = 0; i < area.safras.length; i++) {
	            	var safra = {
	            			areaId: areaId,
	            			projecaoSafra: area.safras[i].projecaoSafra,
	            			total: area.safras[i].total,
	            			owner: area.owner,
	            			type: 'safra'
	            	}
	            	SafraService.save(safra, area.safras[i].culturas);
	            }
	            q.resolve();
	        }, function(error) {
	        	q.reject(error);
	        });
			q.resolve(result);
		}, function(error) {
			console.log("ERROR UPDATING DOCUMENT -> " + JSON.stringify(error));
			q.reject(error);
		});
		return q.promise;
	}
	
	/*
	 * Lista as áreas cadastradas.
	 * @return array
	 */
	function getAreas() {
		var q = $q.defer();
		todoDatabase.queryView("_design/agrizapp", "areaList").then(function(result) {
			var areas = {};
			for(var i = 0; i < result.rows.length; i++) {
				areas[result.rows[i].id] = result.rows[i].value;
			}
			q.resolve(areas);
		}, function(error) {
			console.log("ERROR QUERYING VIEW -> " + JSON.stringify(error));
			q.reject(error);
		});
		return q.promise;
	}
	
	/*
	 * Recupera uma área.
	 * @param areaId
	 * @return area
	 */
	function getArea(areaId) {
		var q = $q.defer();
		todoDatabase.getDocument(areaId).then(function(result) {
			q.resolve(result);
		}, function(error) {
			console.log("ERROR GETTING DOCUMENT -> " + JSON.stringify(error));
			q.reject(error);
		});
		return q.promise;
	}
	
	/*
	 * Remove uma area
	 * @param area
	 * @return boolean
	 */
	function deleteArea(area) {
		var q = $q.defer();
		var areaId = area._id;
		todoDatabase.deleteDocument(area._id, area.rev).then(function(result) {
			todoDatabase.queryView("_design/agrizapp", "safras").then(function(result) {
	            for(var i = 0; i < result.rows.length; i++) {
	            	if (areaId == result.rows[i].value.areaId) {
	            		SafraService.remove(result.rows[i].value._id, result.rows[i].value._rev);
	            	}
	            }
	            q.resolve();
	        }, function(error) {
	        	q.reject(error);
	        });
		}, function(error) {
			console.log("ERROR DELETING DOCUMENT -> " + JSON.stringify(error));
			q.reject(error);
		});
		return q.promise;
	}
	
	return {
		phList: makePhList,
		projecaoSafras: makeProjecaoSafra,
		culturas: makeCulturaList,
		all: getAreas,
		add: insert,
		remove: deleteArea,
		get: getArea,
		update: update
	};
})

.factory('SafraService', function($q, CulturaService) {
	
	/*
	 * Grava uma safra
	 * @param safra
	 * @param areaId
	 * @return promise
	 */
	function save(safra, culturas) {
		var q = $q.defer();
		todoDatabase.createDocument(safra).then(function(result) {
            console.log("Safra inserida com sucesso!");
            for (var i = 0; i < culturas.length; i++) {            	
            	var cultura = {
                		safraId: result.id,
            			nome: culturas[i].nome,
            			area: culturas[i].area,
            			conversao: culturas[i].conversao,
            			rendimento: culturas[i].rendimento,
            			owner: safra.owner,
            			type: 'cultura'
            	};
            	CulturaService.save(cultura);
            }
            q.resolve();
        }, function(error) {
        	console.log("ERROR INSERTING DOCUMENT -> " + JSON.stringify(error));
        	q.reject(error);
        });
		return q.promise;
	}
	/*
	 * Remove uma safra
	 * @param id
	 * @param rev
	 * @return boolean
	 */
	function remove(id, rev) {
		var q = $q.defer();
		var safraId = id;
		todoDatabase.deleteDocument(id, rev).then(function(result) {
			todoDatabase.queryView("_design/agrizapp", "culturas").then(function(result) {
	            for(var i = 0; i < result.rows.length; i++) {
	            	if (safraId == result.rows[i].value.safraId) {
	            		CulturaService.remove(result.rows[i].value._id, result.rows[i].value._rev);
	            	}
	            }
	            q.resolve();
	        }, function(error) {
	        	q.reject(error);
	        });
		}, function(error) {
			console.log("ERROR DELETING DOCUMENT -> " + JSON.stringify(error));
			q.reject(error);
		});
		return q.promise;
	}
	
	/*
	 * Lista as safras de uma área cadastradas.
	 * @param areaId
	 * @return array
	 */
	function getSafras(areaId) {
		var q = $q.defer();
		todoDatabase.queryView("_design/agrizapp", "safras", {"start_key": areaId}).then(function(result) {
			var safras = {};
			for(var i = 0; i < result.rows.length; i++) {
				if (areaId == result.rows[i].key) {
					safras[result.rows[i].id] = result.rows[i].value;
				}
			}
			q.resolve(safras);
		}, function(error) {
			console.log("ERROR QUERYING VIEW -> " + JSON.stringify(error));
			q.reject(error);
		});
		return q.promise;
	}
	
	/*
	 * Lista as safras de uma área cadastradas.
	 * @param areaId
	 * @return array
	 */
	function getAllSafras() {
		var q = $q.defer();
		todoDatabase.queryView("_design/agrizapp", "safras").then(function(result) {
			var safras = {};
			for(var i = 0; i < result.rows.length; i++) {
				safras[result.rows[i].id] = result.rows[i].value;
			}
			q.resolve(safras);
		}, function(error) {
			console.log("ERROR QUERYING VIEW -> " + JSON.stringify(error));
			q.reject(error);
		});
		return q.promise;
	}
	
	/*
	 * Recupera uma safra.
	 * @param safraId
	 * @return safra
	 */
	function getSafra(safraId) {
		var q = $q.defer();
		todoDatabase.getDocument(safraId).then(function(result) {
			q.resolve(result);
		}, function(error) {
			console.log("ERROR GETTING DOCUMENT -> " + JSON.stringify(error));
			q.reject(error);
		});
		return q.promise;
	}
	
	return {
		save: save,
		remove: remove,
		safras: getSafras,
		get: getSafra,
		all: getAllSafras
	};
})

.factory('CulturaService', function($q, PlantingService, HarvestService, SellingService) {
	
	/*
	 * Grava uma cultura
	 * @param cultura
	 * @return promise
	 */
	function save(cultura) {
		var q = $q.defer();
		todoDatabase.createDocument(cultura).then(function(result) {
            console.log("Cultura inserida com sucesso!");
            q.resolve();
        }, function(error) {
        	console.log("ERROR INSERTING DOCUMENT -> " + JSON.stringify(error));
        	q.reject(error);
        });
		return q.promise;
	}
	/*
	 * Remove uma cultura
	 * @param id
	 * @param rev
	 * @return boolean
	 */
	function remove(id, rev) {
		var q = $q.defer();
		todoDatabase.deleteDocument(id, rev).then(function(result) {
			todoDatabase.queryView("_design/agrizapp", "plantio").then(function(result) {
	            for(var i = 0; i < result.rows.length; i++) {
	            	if (id == result.rows[i].value.culturaId) {
	            		PlantingService.remove(result.rows[i].value._id, result.rows[i].value._rev);
	            	}
	            }
	        });
			todoDatabase.queryView("_design/agrizapp", "colheita").then(function(result) {
	            for(var i = 0; i < result.rows.length; i++) {
	            	if (id == result.rows[i].value.culturaId) {
	            		HarvestService.remove(result.rows[i].value._id, result.rows[i].value._rev);
	            	}
	            }
	        });
			todoDatabase.queryView("_design/agrizapp", "vendas").then(function(result) {
	            for(var i = 0; i < result.rows.length; i++) {
	            	if (id == result.rows[i].value.culturaId) {
	            		SellingService.remove(result.rows[i].value._id, result.rows[i].value._rev);
	            	}
	            }
	        });
			q.resolve(result);
		}, function(error) {
			console.log("ERROR DELETING DOCUMENT -> " + JSON.stringify(error));
			q.reject(error);
		});
		return q.promise;
	}
	
	/*
	 * Lista as culturas de uma safra cadastradas.
	 * @param safraId
	 * @return array
	 */
	function getCulturas(safraId) {
		var q = $q.defer();
		todoDatabase.queryView("_design/agrizapp", "culturas", {"start_key": safraId}).then(function(result) {
			var culturas = {};
			for(var i = 0; i < result.rows.length; i++) {
				if (safraId == result.rows[i].key) {
					culturas[result.rows[i].id] = result.rows[i].value;
				}
			}
			q.resolve(culturas);
		}, function(error) {
			console.log("ERROR QUERYING VIEW -> " + JSON.stringify(error));
			q.reject(error);
		});
		return q.promise;
	}
	
	/*
	 * Recupera uma cultura.
	 * @param culturaId
	 * @return cultura
	 */
	function getCultura(culturaId) {
		var q = $q.defer();
		todoDatabase.getDocument(culturaId).then(function(result) {
			q.resolve(result);
		}, function(error) {
			console.log("ERROR GETTING DOCUMENT -> " + JSON.stringify(error));
			q.reject(error);
		});
		return q.promise;
	}
	
	/*
	 * Recupera todas as culturas
	 * @return promise
	 */
	function getCulturasList() {
		var q = $q.defer();
		todoDatabase.queryView("_design/agrizapp", "culturas").then(function(result) {
			var culturas = {};
			for(var i = 0; i < result.rows.length; i++) {
				culturas[result.rows[i].id] = result.rows[i].value;
			}
			q.resolve(culturas);
		}, function(error) {
			console.log("ERROR QUERYING VIEW -> " + JSON.stringify(error));
			q.reject(error);
		});
		return q.promise;
	}
	
	return {
		save: save,
		remove: remove,
		culturas: getCulturas,
		get: getCultura,
		all: getCulturasList
	};
})

.factory('PlantingService', function($q) {
	/*
	 * Relatorio de plantio.
	 * @param culturaId
	 * @return array
	 */
	function getReportPlanting(culturaId, startDate, endDate) {
		var q = $q.defer();
		
		todoDatabase.queryView("_design/agrizapp", "reportPlanting", {"start_key": startDate, "end_key": endDate}).then(function(result) {
			var plantio = [];
			for(var i = 0; i < result.rows.length; i++) {
				if (culturaId == result.rows[i].value.culturaId) {
					plantio.push(result.rows[i].value);
				}
			}
			q.resolve(plantio);
		}, function(error) {
			console.log("ERROR QUERYING VIEW -> " + JSON.stringify(error));
			q.reject(error);
		});
		return q.promise;
	}
	
	/*
	 * Lista os plantios cadastrados por cultura.
	 * @param culturaId
	 * @return array
	 */
	function getPlantioList(culturaId) {
		var q = $q.defer();
		todoDatabase.queryView("_design/agrizapp", "plantio", {"start_key": culturaId}).then(function(result) {
			var plantio = {};
			var plantioSort = [];
			
			for(var i = 0; i < result.rows.length; i++) {
				if (culturaId == result.rows[i].key) {
					//plantio[result.rows[i].id] = result.rows[i].value;
					plantioSort.push(result.rows[i].value);
				}
			}
			
			plantioSort.sort(compare('date'));
			var acumulado = 0;
			for(var i = 0; i < plantioSort.length; i++) {
				acumulado = acumulado + parseInt(plantioSort[i].plantado);
				plantioSort[i].acumulado = acumulado;
				plantio[plantioSort[i]._id] = plantioSort[i];
			}
			
			q.resolve(plantio);
		}, function(error) {
			console.log("ERROR QUERYING VIEW -> " + JSON.stringify(error));
			q.reject(error);
		});
		return q.promise;
	}
	
	/*
	 * Recupera um plantio.
	 * @param culturaId
	 * @return plantio
	 */
	function getPlantio(culturaId) {
		var q = $q.defer();
		todoDatabase.getDocument(culturaId).then(function(result) {
			q.resolve(result);
		}, function(error) {
			console.log("ERROR GETTING DOCUMENT -> " + JSON.stringify(error));
			q.reject(error);
		});
		return q.promise;
	}
	
	/*
	 * Atuliza o documento de uma área incluindo informações de plantio
	 */
	function save(planting) {
		var q = $q.defer();
		todoDatabase.createDocument(planting).then(function(result) {
            console.log("Plantio inserida com sucesso!");
            q.resolve();
        }, function(error) {
        	console.log("ERROR INSERTING DOCUMENT -> " + JSON.stringify(error));
        	q.reject(error);
        });
		return q.promise;
	}
	
	function update(planting) {
		var q = $q.defer();
		todoDatabase.updateDocument(planting._id, planting._rev, planting).then(function(result) {
			console.log("Plantio atualizado com sucesso!");
			q.resolve(result);
		}, function(error) {
			console.log("ERROR UPDATING DOCUMENT -> " + JSON.stringify(error));
			q.reject(error);
		});
		return q.promise;
	}
	
	/*
	 * Remove um plantio
	 * @param id
	 * @param rev
	 * @return boolean
	 */
	function remove(id, rev) {
		var q = $q.defer();
		todoDatabase.deleteDocument(id, rev).then(function(result) {
			q.resolve(result);
		}, function(error) {
			console.log("ERROR DELETING DOCUMENT -> " + JSON.stringify(error));
			q.reject(error);
		});
		return q.promise;
	}
	
	return {
		save: save,
		update: update,
		remove: remove,
		all: getPlantioList,
		get: getPlantio,
		report: getReportPlanting
	};
})

.factory('HarvestService', function($q) {
	/*
	 * Relatorio de colheita.
	 * @param culturaId
	 * @return array
	 */
	function getReportHarvest(culturaId, startDate, endDate) {
		var q = $q.defer();
		todoDatabase.queryView("_design/agrizapp", "reportHarvest", {"start_key": startDate, "end_key": endDate}).then(function(result) {
			var harvest = [];
			for(var i = 0; i < result.rows.length; i++) {
				if (culturaId == result.rows[i].value.culturaId) {
					harvest.push(result.rows[i].value);
				}
			}
			q.resolve(harvest);
		}, function(error) {
			console.log("ERROR QUERYING VIEW -> " + JSON.stringify(error));
			q.reject(error);
		});
		return q.promise;
	}
	
	/*
	 * Lista as colheitas cadastradas por cultura.
	 * @param culturaId
	 * @return array
	 */
	function getHarvestList(culturaId) {
		var q = $q.defer();
		todoDatabase.queryView("_design/agrizapp", "colheita", {"start_key": culturaId}).then(function(result) {
			var harvest = {};
			var harvestSort = [];
			for(var i = 0; i < result.rows.length; i++) {
				if (culturaId == result.rows[i].key) {
					harvestSort.push(result.rows[i].value);
				}
			}
			
			harvestSort.sort(compare('date'));
			var acumulado = 0;
			for(var i = 0; i < harvestSort.length; i++) {
				acumulado = acumulado + parseInt(harvestSort[i].colhido);
				harvestSort[i].acumulado = acumulado;
				harvest[harvestSort[i]._id] = harvestSort[i];
			}
			
			q.resolve(harvest);
		}, function(error) {
			console.log("ERROR QUERYING VIEW -> " + JSON.stringify(error));
			q.reject(error);
		});
		return q.promise;
	}
	
	/*
	 * Recupera uma colheita.
	 * @param culturaId
	 * @return plantio
	 */
	function getHarvest(culturaId) {
		var q = $q.defer();
		todoDatabase.getDocument(culturaId).then(function(result) {
			q.resolve(result);
		}, function(error) {
			console.log("ERROR GETTING DOCUMENT -> " + JSON.stringify(error));
			q.reject(error);
		});
		return q.promise;
	}
	
	/*
	 * Atuliza o documento de uma área incluindo informações de colheita
	 */
	function save(harvest) {
		var q = $q.defer();
		todoDatabase.createDocument(harvest).then(function(result) {
            console.log("Colheita inserida com sucesso!");
            q.resolve();
        }, function(error) {
        	console.log("ERROR INSERTING DOCUMENT -> " + JSON.stringify(error));
        	q.reject(error);
        });
		return q.promise;
	}
	
	function update(harvest) {
		var q = $q.defer();
		todoDatabase.updateDocument(harvest._id, harvest._rev, harvest).then(function(result) {
			console.log("Colheita atualizada com sucesso!");
			q.resolve(result);
		}, function(error) {
			console.log("ERROR UPDATING DOCUMENT -> " + JSON.stringify(error));
			q.reject(error);
		});
		return q.promise;
	}
	
	/*
	 * Remove uma colheita
	 * @param id
	 * @param rev
	 * @return boolean
	 */
	function remove(id, rev) {
		var q = $q.defer();
		todoDatabase.deleteDocument(id, rev).then(function(result) {
			q.resolve(result);
		}, function(error) {
			console.log("ERROR DELETING DOCUMENT -> " + JSON.stringify(error));
			q.reject(error);
		});
		return q.promise;
	}
	
	return {
		save: save,
		update: update,
		remove: remove,
		all: getHarvestList,
		get: getHarvest,
		report: getReportHarvest
	};
})

.factory('SellingService', function($q) {
	/*
	 * Relatorio de vendas.
	 * @param culturaId
	 * @return array
	 */
	function getReportSelling(culturaId, startDate, endDate) {
		var q = $q.defer();
		
		todoDatabase.queryView("_design/agrizapp", "reportSelling", {"start_key": startDate, "end_key": endDate}).then(function(result) {
			var selling = [];
			for(var i = 0; i < result.rows.length; i++) {
				if (culturaId == result.rows[i].value.culturaId) {
					selling.push(result.rows[i].value);
				}
			}
			q.resolve(selling);
		}, function(error) {
			console.log("ERROR QUERYING VIEW -> " + JSON.stringify(error));
			q.reject(error);
		});
		return q.promise;
	}
	
	/*
	 * Seliona vendas por cultura.
	 * @param culturaId
	 * @return promise 
	 */
	function getVendas(culturaId) {
		var q = $q.defer();
		todoDatabase.queryView("_design/agrizapp", "vendas", {"start_key": culturaId}).then(function(result) {
			var vendas = {};
			var sellingSort = [];
			for(var i = 0; i < result.rows.length; i++) {
				if (culturaId == result.rows[i].key) {
					sellingSort.push(result.rows[i].value);
				}
			}
			
			sellingSort.sort(compare('date'));
			var acumulado = 0;
			for(var i = 0; i < sellingSort.length; i++) {
				acumulado = acumulado + parseInt(sellingSort[i].volume);
				sellingSort[i].acumulado = acumulado;
				vendas[sellingSort[i]._id] = sellingSort[i];
			}
			q.resolve(vendas);
		}, function(error) {
			console.log("ERROR QUERYING VIEW -> " + JSON.stringify(error));
			q.reject(error);
		});
		return q.promise;
	}
	
	/*
	 * Recupera uma venda.
	 * @param vendaId
	 * @return venda
	 */
	function getVenda(vendaId) {
		var q = $q.defer();
		todoDatabase.getDocument(vendaId).then(function(result) {
			q.resolve(result);
		}, function(error) {
			console.log("ERROR GETTING DOCUMENT -> " + JSON.stringify(error));
			q.reject(error);
		});
		return q.promise;
	}
	
	/*
	 * Grava venda no banco
	 * @paran venda
	 * @return boolean
	 */
	function insert(venda) {
		var q = $q.defer();
		todoDatabase.createDocument(venda).then(function(result) {
            console.log("Venda inserida com sucesso!");
            q.resolve();
        }, function(error) {
        	console.log("ERROR INSERTING DOCUMENT -> " + JSON.stringify(error));
        	q.reject(error);
        });
		return q.promise;
	}
	
	/*
	 * Remove uma venda
	 * @param venda
	 * @return boolean
	 */
	function deleteVenda(id, rev) {
		var ok;
		todoDatabase.deleteDocument(id, rev).then(function(result) {
			ok = result.ok;
		}, function(error) {
			console.log("ERROR DELETING DOCUMENT -> " + JSON.stringify(error));
		});
		return ok;
	}
	
	/*
	 * Remove uma venda
	 * @param venda
	 * @return boolean
	 */
	function update(venda) {
		var ok;
		todoDatabase.updateDocument(venda._id, venda._rev, venda).then(function(result) {
			ok = result.ok;
		}, function(error) {
			console.log("ERROR UPDATING DOCUMENT -> " + JSON.stringify(error));
		});
		return ok;
	}
	
	return {
		save: insert,
		remove: deleteVenda,
		update: update,
		all: getVendas,
		get: getVenda,
		report: getReportSelling
	};
})

.factory('LocationService', function($q) {
	
	var Rm = 3961; // mean radius of the earth (miles) at 39 degrees from the equator
	var Rk = 6373; // mean radius of the earth (km) at 39 degrees from the equator
		
	/* main function */
	function findDistance(location1, location2) {
		var t1, n1, t2, n2, lat1, lon1, lat2, lon2, dlat, dlon, a, c, dm, dk, mi, km;
		
		// get values for lat1, lon1, lat2, and lon2
		t1 = location1.lat;
		n1 = location1.lon;
		t2 = location2.lat;
		n2 = location2.lon;
		
		// convert coordinates to radians
		lat1 = deg2rad(t1);
		lon1 = deg2rad(n1);
		lat2 = deg2rad(t2);
		lon2 = deg2rad(n2);
		
		// find the differences between the coordinates
		dlat = lat2 - lat1;
		dlon = lon2 - lon1;
		
		// here's the heavy lifting
		a  = Math.pow(Math.sin(dlat/2),2) + Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin(dlon/2),2);
		c  = 2 * Math.atan2(Math.sqrt(a),Math.sqrt(1-a)); // great circle distance in radians
		dm = c * Rm; // great circle distance in miles
		dk = c * Rk; // great circle distance in km
		
		// round the results down to the nearest 1/1000
		mi = round(dm);
		km = round(dk);
		
		// display the result
		var distance = {
				mi : mi,
				km : km
		}
		return distance;
	}
	
	
	// convert degrees to radians
	function deg2rad(deg) {
		rad = deg * Math.PI/180; // radians = degrees * pi/180
		return rad;
	}
	
	
	// round to the nearest 1/1000
	function round(x) {
		return Math.round( x * 1000) / 1000;
	}
	
	return {
		calculateDistance: findDistance 
	};
})

.factory('Chats', function() {
         // Might use a resource here that returns a JSON array

         // Some fake testing data
         var chats = [{
                      id: 0,
                      name: 'Público: Mundo/Soja',
                      lastText: 'Como está o soja hoje em Paranaguá?',
                      face: 'http://sumagroulx.com/wp-content/uploads/2015/02/Soybean-024-Soybean-field-with-2-hands-holding-soybeans.jpg'
                      //face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
                      }, {
                      id: 1,
                      name: 'Privado: João Maria (Empresa A)',
                      lastText: 'Olá! Tudo certo com o nosso combinado do Farelo?',
                      face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
                      }];

         return {
         all: function() {
         return chats;
         },
         remove: function(chat) {
         chats.splice(chats.indexOf(chat), 1);
         },
         get: function(chatId) {
         for (var i = 0; i < chats.length; i++) {
         if (chats[i].id === parseInt(chatId)) {
         return chats[i];
         }
         }
         return null;
         }
         };
         });
