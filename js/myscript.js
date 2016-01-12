//倒计时
var endDate = new Date(2016,0,11,13,2,00)			//截止时间设置，月要用截至时间减去1，然后填入此处；
	function daoJiShi(){
		var now = new Date();
		var oft = Math.round((endDate-now)/1000);
		var ofd = parseInt(oft/3600/24);
		var ofh = parseInt((oft%(3600*24))/3600);
		var ofm = parseInt((oft%3600)/60);
		var ofs = oft%60;
		oft = checkTime(oft);
		ofd = checkTime(ofd);
		ofh = checkTime(ofh);
		ofm = checkTime(ofm);
		ofs = checkTime(ofs);
		
		document.getElementById('day').innerHTML = ofd;
		document.getElementById('hour').innerHTML = ofh;
		document.getElementById('minute').innerHTML = ofm;
		document.getElementById('second').innerHTML = ofs;
		ofs = parseInt(ofs);
		
		if (ofs==0){
			document.getElementById('timerblock').innerHTML = '恭喜手机号码为180****6105的用户成为今天的幸运用户！';
			$("#timerblock").css({
				"color":"#fff45c",
				"font-size":30
				
			});            //改变倒计时后的效果
			$("#timerblock").addClass("jumbotron opacity");
			return;
		}
		
		t = setTimeout(function(){
			daoJiShi();
		},500);
		
		function checkTime(i){
			if(i<10){
				i="0"+i;
			}
			return i;
		}
	}


//用户数据表动画
	function autoScroll(obj){  
			$(obj).find("ul").animate({  
				marginTop : "-39px"  
			},500,function(){  
				$(this).css({marginTop : "0px"}).find("li:first").appendTo(this);  
			})  
		}  
		$(function(){  
			setInterval('autoScroll(".maquee")',1000);
			  
		}) 
		

//从服务器提取用户数据
			$(function(){
				getStock();
			});
			function getStock(){
				$.ajax({
					type:"get",
					url:"getStock.php",
					dataType:"json",
					success:function(data){
						console.log(data);
						var html = "";
						$(data).each(function(){
							html += "<li>";
							html += "<div>"+this.code+"</div>";
							html += "<div>"+this.name+"</div>";
							html += "<div>"+this.tell+"</div>";
							html += "<div>"+this.time+"</div>";
							html += "</li>";
						});
						$(".body").html(html);
					}
				});
			}