			var list=[];
			
			function genCheckBox(container){
				container.onchange=function(e){
					toggle(e,container);
					var checkedR=[].filter.call($$("#region-radio-wrapper input[type='checkbox']"),function(d){return d.checked==true});
					var checkedP=[].filter.call($$("#product-radio-wrapper input[type='checkbox']"),function(d){return d.checked==true});
					var result=getData(checkedR,checkedP);	
					display(checkedR.length,checkedP.length,result);
					
				}
			}	
			genCheckBox($("#region-radio-wrapper"));
			genCheckBox($("#product-radio-wrapper"));