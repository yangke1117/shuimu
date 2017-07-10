$(function(){
	$('.content-img').hover(function(){
		$(this).children('.cont-hover').fadeIn("slow")
	},function(){
		$(this).children('.cont-hover').css("display","none")
	})
	$('.cont-img img').hover(function(){
		$(this).animate({opacity:0.6},1000)
	},function(){
		$(this).animate({opacity:1},1000)
	})
	$('#img img').hover(function(){
		$(this).animate({opacity:0.7,width:433,height:217},1000)
	},function(){
		$(this).animate({opacity:1,width:393,height:197},1000)
	})
	$('#img1 img').hover(function(){
		$(this).animate({opacity:0.7,width:433,height:217},1000)
	},function(){
		$(this).animate({opacity:1,width:393,height:197},1000)
	})

	// $(".index-design-span").hover(function(){
	// 	var index = $(this).index('.index-design-span');
	// 	$(".index-design-li ul").css("display","none").eq(index).css("display","block");
	// 	$(".index-design-li ul").eq(index).children().css('borderColor','#90c31f')
	// 	$('.index-design-sj').css('borderRightColor','#90c31f');
	// },function(){
	// 	var index = $(this).index('.index-design-span');
	// 	$(".index-design-li ul").eq(index).children().css('borderColor','#3b697c')
	// 	$('.index-design-sj').css('borderRightColor','#3b697c');
	// })
	// $('.index-design-li li').hover(function(){
	// 	$(this).parent().children().css('borderColor','#90c31f')
	// 	$('.index-design-sj').css('borderRightColor','#90c31f');
	// },function(){
	// 	$(this).parent().children().css('borderColor','#3b697c')
	// 	$('.index-design-sj').css('borderRightColor','#3b697c');
	// })
	



$('.index-ul1 li').hover(function(){
	var index = $(this).index();
	$('.index-ul2>li').css('display','none').eq(index).css('display','block').children().children().css('borderColor','#90c31f');
	$(this).children().css('borderColor','#90c31f')
	$('.sanjiaoxing').css({'borderRightColor':'#90c31f','top':(7+(index)*75)+'px'})
	$('.sanjiaoxing1').css('top',(7+(index)*75)+'px')
	$(this).css('borderColor','#90c31f');
	if(parseInt($(".sanjiaoxing").css('top'))===82){
		$(".sanjiaoxing").css('display','none');
	}else if(parseInt($(".sanjiaoxing").css('top'))===157){
		$(".sanjiaoxing").css('display','none');
	}else{
		$(".sanjiaoxing").css('display','block');
	}
	
	

},function(){
	$('.index-ul2>li').children().children().css('borderColor','#3b697c');
	$('.sanjiaoxing').css('borderRightColor','#3b697c');
	
	$(this).css('borderColor','#3b697c');
	$(this).children().css('borderColor','#3b697c');

});

$('.index-ul2>li').hover(function(){
	var index = $(this).index()-2;
	$('.index-ul1 li').eq(index).css('borderColor','#90c31f');
	$('.index-ul1 li').eq(index).children().css('borderColor','#90c31f')
	$(this).children().children().css('borderColor','#90c31f');
	$('.sanjiaoxing').css('borderRightColor','#90c31f');
},function(){
	var index = $(this).index()-2;
	$('.index-ul1 li').eq(index).css('borderColor','#3b697c');
	$('.index-ul1 li').eq(index).children().css('borderColor','#3b697c')
	$(this).children().children().css('borderColor','#3b697c');
	$('.sanjiaoxing').css('borderRightColor','#3b697c');
})
})
