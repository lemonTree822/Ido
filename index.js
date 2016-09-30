(function(){
	new WOW().init();
	$("#a1").get(0).play();
	console.log($("#a1").get(0));
	$(".banner #ban1 img:nth-child(1)").css({animation:"box1_img1 4s 1s linear",animationFillMode:"forwards"})  
	$(".banner #ban1 img:nth-child(2)").css({animation:"box1_img2 2s 3s linear",animationFillMode:"forwards"})  
	$(".banner #ban1 img:nth-child(3)").css({animation:"box1_img3 4s 1s linear",animationFillMode:"forwards"})  
	
	
	$('.div').bind('mousewheel', function(event, delta, deltaX, deltaY) {
		var img7=$(".banner #ban1 img:nth-child(7)").css("opacity");
		var show=$(this).offset().top;
		console.log(show+","+parseInt($('#show2').css("top"))+","+delta)
		if (delta=="1"&& img7 == "1"&& $('#show1').offset().top==100) {
			none1();
			console.log(1)
		}else if (delta=="-1" &&img7 == "0"&& $('#show1').offset().top==100) {
			show1();
			console.log(2)
		}else if(delta=="-1" &&img7 == "1"&& $('#show1').offset().top==100){			//沉醉显示
			$(".banner #show1").css({top:"0%",animation:"show1 3s 0s linear",animationFillMode:"forwards"});
			$(".banner #show2").css({top:"100%",animation:"show2 3s 0s linear",animationFillMode:"forwards"});
			$(".banner #show2 img:nth-child(1)").css({left:"20%",opacity:"0",animation:"show2_ll 2s -2s linear",animationFillMode:"forwards"});
			$(".banner #show2 img:nth-child(2)").css({left:"50%",opacity:"0",animation:"show2_ll 2s -2s linear",animationFillMode:"forwards"});
			console.log(3)
			
		}else if(show==100 && parseInt($('#show1').css("top")) == -603 &&delta=="1"){   //沉醉向上滚动
			show2();
			console.log(4)
			$(".banner #show2 img:nth-child(1)").css({left:"36%",animation:"show2_l 2s 0s linear",animationFillMode:"forwards"});
			$(".banner #show2 img:nth-child(2)").css({left:"36%",animation:"show2_r 2s 0s linear",animationFillMode:"forwards"});
			
			
		}else if(show==100 && parseInt($('#show1').css("top")) == -603 &&delta=="-1"){//沉醉向下滚动  承诺显示
			console.log(5);
			$(".banner #show2").css({top:"0%",animation:"show1 3s 0s linear",animationFillMode:"forwards"});
			$(".banner #show3").css({top:"100%",animation:"show2 3s 0s linear",animationFillMode:"forwards"});
			$(".banner #show1").css({display:"none"});
			$(".banner #show2 img:nth-child(1)").css({left:"36%",animation:"show2_l 2s 0s linear",animationFillMode:"forwards"});
			$(".banner #show2 img:nth-child(2)").css({left:"36%",animation:"show2_r 2s 0s linear",animationFillMode:"forwards"});
			$(".banner #show3 img:nth-child(1)").css({left:"20%",opacity:"0",animation:"show2_ll 2s -2s linear",animationFillMode:"forwards"});
			$(".banner #show3 img:nth-child(2)").css({left:"50%",opacity:"0",animation:"show2_ll 2s -2s linear",animationFillMode:"forwards"});
		}else if(show==100 && parseInt($('#show2').css("top")) == -603 &&delta=="1"){// 承诺向上滚动
			console.log(6);
			$(".banner #show1").css({display:"block"});
			$(".banner #show2 img:nth-child(1)").css({left:"20%",opacity:"0",animation:"show2_ll 2s -2s linear",animationFillMode:"forwards"});
			$(".banner #show2 img:nth-child(2)").css({left:"50%",opacity:"0",animation:"show2_ll 2s -2s linear",animationFillMode:"forwards"});
			$(".banner #show2").css({top:"-100%",animation:"show11 3s 0s linear",animationFillMode:"forwards"});
			$(".banner #show3").css({top:"100%",animation:"show22 3s 0s linear",animationFillMode:"forwards"});
			$(".banner #show3 img:nth-child(1)").css({left:"36%",animation:"show2_l 2s 0s linear",animationFillMode:"forwards"});
			$(".banner #show3 img:nth-child(2)").css({left:"36%",animation:"show2_r 2s 0s linear",animationFillMode:"forwards"});
		}else if(show==100 && parseInt($('#show2').css("top")) == -603 &&delta=="-1"){//承诺向下滚动
			console.log(7);
			$(".banner #show1").css({display:"none"});
			$(".banner #show2").css({display:"none"});
			$(".banner #show3").css({display:"block"});
			$(".banner #show3 img:nth-child(1)").css({left:"36%",animation:"show2_l 2s 0s linear",animationFillMode:"forwards"});
			$(".banner #show3 img:nth-child(2)").css({left:"36%",animation:"show2_r 2s 0s linear",animationFillMode:"forwards"});
			$(".banner #show3").css({top:"0%",animation:"show1 3s 0s linear",animationFillMode:"forwards"});
			$(".banner #show4").css({top:"100%",animation:"show2 3s 0s linear",animationFillMode:"forwards"});
		}else if(show==100 && parseInt($('#show3').css("top")) == -603 &&delta=="1"){//守护向上滚动
			console.log(7);
			$(".banner #show3 img:nth-child(1)").css({left:"20%",opacity:"0",animation:"show2_ll 2s -2s linear",animationFillMode:"forwards"});
			$(".banner #show3 img:nth-child(2)").css({left:"50%",opacity:"0",animation:"show2_ll 2s -2s linear",animationFillMode:"forwards"});
			$(".banner #show4 img:nth-child(1)").css({left:"36%",animation:"show2_l 2s 0s linear",animationFillMode:"forwards"});
			$(".banner #show4 img:nth-child(2)").css({left:"36%",animation:"show2_r 2s 0s linear",animationFillMode:"forwards"});
			$(".banner #show2").css({display:"block"});
			$(".banner #show3").css({top:"-100%",animation:"show11 3s 0s linear",animationFillMode:"forwards"});
			$(".banner #show4").css({top:"0%",animation:"show22 3s 0s linear",animationFillMode:"forwards"});
		}
	});
	
function show1(){
	var top=$(".banner #ban1 img:nth-child(3)").offset().top;
		if(top>=341.5){
	    	$(".banner #ban1 img:nth-child(1)").css({top:"0%",animation:"box1_img1_1 2s 1s linear",animationFillMode:"forwards"});
			$(".banner #ban1 img:nth-child(2)").css({top:"30%",animation:"box1_img2_2 2s 1s linear",animationFillMode:"forwards"});  
	   	 	$(".banner #ban1 img:nth-child(3)").css({opacity:"1",top:"40%",animation:"box1_img3_3 4s 2s linear",animationFillMode:"forwards"});
			$(".banner #ban1 img:nth-child(4)").css({opacity:"0",animation:"box1_img4 4s 5s linear",animationFillMode:"forwards"});
			$(".banner #ban1 img:nth-child(5)").css({opacity:"0",animation:"box1_img4 4s 5s linear",animationFillMode:"forwards"});
			$(".banner #ban1 img:nth-child(6)").css({opacity:"0",animation:"box1_img4 4s 5s linear",animationFillMode:"forwards"});
			$(".banner #ban1 img:nth-child(7)").css({opacity:"0",top:"80%",animation:"box1_img7 3s 5s linear",animationFillMode:"forwards"});
		}
}
function none1(){
	var show1_img=$(".banner #ban1 img:nth-child(3)").css("opacity");
		if(show1_img=="0"){
	    	$(".banner #ban1 img:nth-child(1)").css({top:"-100%",animation:"box1_img1 4s 2s linear",animationFillMode:"forwards"});  
			$(".banner #ban1 img:nth-child(2)").css({top:"-10%",animation:"box1_img2 2s 3s linear",animationFillMode:"forwards"}); 
			$(".banner #ban1 img:nth-child(3)").css({opacity:"0",top:"15%",animation:"box1_img3 4s 1s linear",animationFillMode:"forwards"});
			$(".banner #ban1 img:nth-child(4)").css({opacity:"1",animation:"box1_img44 3s 0s linear",animationFillMode:"forwards"});
			$(".banner #ban1 img:nth-child(5)").css({opacity:"1",animation:"box1_img44 3s 0s linear",animationFillMode:"forwards"});
			$(".banner #ban1 img:nth-child(6)").css({opacity:"1",animation:"box1_img44 3s 0s linear",animationFillMode:"forwards"});
			$(".banner #ban1 img:nth-child(7)").css({opacity:"1",top:"70%",animation:"box1_img77 3s 0s linear",animationFillMode:"forwards"});
		}
}
	
function show2(){
	$(".banner #show1").css({top:"-100%",animation:"show11 3s 0s linear",animationFillMode:"forwards"});
	$(".banner #show2").css({top:"0%",animation:"show22 3s 0s linear",animationFillMode:"forwards"});
	$(".banner #ban1 img:nth-child(1)").css({top:"0%",animation:"box1_img1_1 2s -2s linear",animationFillMode:"forwards"});
	$(".banner #ban1 img:nth-child(2)").css({top:"30%",animation:"box1_img2_2 2s -2s linear",animationFillMode:"forwards"});     	 	$(".banner #ban1 img:nth-child(3)").css({opacity:"1",top:"40%",animation:"box1_img3_3 4s 2s linear",animationFillMode:"forwards"});
	$(".banner #ban1 img:nth-child(3)").css({opacity:"1",top:"40%",animation:"box1_img3_3 4s -4s linear",animationFillMode:"forwards"});
	$(".banner #ban1 img:nth-child(4)").css({opacity:"0",animation:"box1_img4 4s 2s linear",animationFillMode:"forwards"});
	$(".banner #ban1 img:nth-child(5)").css({opacity:"0",animation:"box1_img4 4s 2s linear",animationFillMode:"forwards"});
	$(".banner #ban1 img:nth-child(6)").css({opacity:"0",animation:"box1_img4 4s 2s linear",animationFillMode:"forwards"});
	$(".banner #ban1 img:nth-child(7)").css({opacity:"0",top:"80%",animation:"box1_img7 3s 2s linear",animationFillMode:"forwards"});
}

//var oA=$("source").get(0);
//oA.onloadstart = function(){
//	console.log("1212"); //表示此时可以进行播放了
//	oA.play();
//}
//	
})()
