			function toggle(e,container){
					switch(e.target.value){
						case "all":
						if(e.target.checked==true){
							[].forEach.call(container.children,function(d){d.checked=true})
						}
						break;
						default:
						var len=container.children.length;
						if(e.target.checked==true){
						if([].slice.call(container.children,0,len-1).every(function(d){return d.checked==true})){
							container.children[len-1].checked=true;
							}
						}else{
							if(container.children[len-1].checked==true){
								container.children[len-1].checked=false;
							}
						}
						break;
					}				
			}

			function getData(r,p){
					var value1=[].map.call(r,function(d){return d.value});
					var value2=[].map.call(p,function(d){return d.value});
					var list=[];
					for(var i=0,len=sourceData.length;i<len;i++){
						if((value1.includes(sourceData[i]["region"])) && (value2.includes(sourceData[i]["product"])) && (!list.includes(sourceData[i]))){
							list.push(sourceData[i]);
						}
					}			
					return list;				
			}


			function display(numR,numP,result){
						var fTable="";
						var toadd="",lTable="</table>";
						if( numR==1 && 	numP>1){
							fTable="<table border='1'><tr><th>地区</th><th>商品</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>9</th><th>10</th><th>11</th><th>12</th></tr>"
							result.forEach(function(d,i){
								if(i==0){
								toadd=toadd+"<tr><td rowspan="+numP+">"+d["region"]+"</td><td>"+d["product"]+"</td>"+d["sale"].map(function(data){return "<td>"+data+"</td>"}).join("")+"</tr>"									
								}else{
								toadd=toadd+"<tr><td>"+d["product"]+"</td>"+d["sale"].map(function(data){return "<td>"+data+"</td>"}).join("")+"</tr>"	
								}	
						})
						}
						else{
							fTable="<table border='1'><tr><th>商品</th><th>地区</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>9</th><th>10</th><th>11</th><th>12</th></tr>"							
									var curName,curNum=0,rowNum;
								result.forEach(function(d,i){
									curNum=(curName==d["product"])?i:0;
									curName=d["product"];
								if(curNum==0){
									rowNum=result.filter(function(data){return data["product"]==d["product"]}).length;
								toadd=toadd+"<tr><td rowspan="+rowNum+">"+d["product"]+"</td><td>"+d["region"]+"</td>"+d["sale"].map(function(data){return "<td>"+data+"</td>"}).join("")+"</tr>"									
								}else{
								toadd=toadd+"<tr><td>"+d["region"]+"</td>"+d["sale"].map(function(data){return "<td>"+data+"</td>"}).join("")+"</tr>";	
								}
								})
						}

						$("#table-wrapper").innerHTML=fTable+toadd+lTable;
					}
						
