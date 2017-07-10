$(function(){
	num=0;
	var t=setInterval(move,2000);
	function move(){
		num++;
		if(num==$(".lunbo1").length){
			num=0;
		}
		if(num<0){
			num=$(".lunbo1").length-1;
		}		
		$(".lunbo1").css("display","none").eq(num).css("display","block");
	}	
	$(".toright").hover(function(){
		clearInterval(t);
	},function(){
		t=setInterval(move,2000)
	})
	$(".toleft").hover(function(){
		clearInterval(t);
	},function(){
		t=setInterval(move,2000)
	})
	$(".lunbo1").hover(function(){
		clearInterval(t);
	},function(){
		t=setInterval(move,2000)
	})			
	$(".toright").click(function(){
		move()
	})
	$(".toleft").click(function(){
		num-=2;
		move();
	})	

})