//倒计时
var endDate = new Date(2016,0,10,15,46,00)			//截止时间设置，月要用截至时间减去1，然后填入此处；
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


//用户数据表
	function autoScroll(obj){  
		$(obj).find("tr").animate({  
			marginTop : "-39px"  
		},500,function(){  
			$(this).css({marginTop : "0px"}).find("tr:first").appendTo(this);  
		})  
	}  
	
	$(function(){  
		alert("hello");
		setInterval(autoScroll("#user"),1000);		  
	}) 
