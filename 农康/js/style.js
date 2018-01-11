/*$(function(){*/
	function tab(){
			$('.out .in ul li:first-child').addClass('current');
			$('.out .in ul li').each(function(){
				if($(this).hasClass('current')){
					var num=$(this).index();
					var tit=$(this).find('span').html();
					$(this).parent().parent().parent().parent().next().find('.con').eq(num).show().siblings().hide();
					$(this).parent().parent().parent().parent().next().find('.con').eq(num).find('h2').html(tit);
				}
			})
			$('.out .in ul li').mouseover(function(){
				$(this).addClass('current').siblings().removeClass('current');
			})
			$('.out .in ul li').click(function(){
				var index=$(this).index();
				var tit=$(this).find('span').html();
				$(this).addClass('current').siblings().removeClass('current');
				$(this).parent().parent().parent().parent().next().find('.con').eq(index).show().siblings().hide();
				$(this).parent().parent().parent().parent().next().find('.con').eq(index).find('h2').html(tit);
			})
		}
	
	function addIn(ulIn,num){
	$.ajax({
		type:"get",
		url:"../json/textJson.json",
		async:true,
		success:function(data){
			/*console.log(num)*/
			var $obj=data;
			var $obj1 = data.F1;
			var $obj2 = data.F2;
			var $obj3 = data.F3;
			var $obj4 = data.F4;
			var $obj5 = data.F5;
			var $obj6 = data.F6;
			var $obj7 = data.F7;
			var $obj8 = data.F8;
			var obj=new Array();
			obj=[$obj1,$obj2,$obj3,$obj4,$obj5,$obj6,$obj7,$obj8];
			var usUl=$(ulIn);
			for(var i =0;i<obj[num].length;i++){
				/*console.log(obj[num])*/
				var li = document.createElement("li");
				li.innerHTML = "<span>"+obj[num][i].title+"</span>";
				usUl.append(li);
			}			
			tab();
		}
	})
	
};

addIn('#us-ul',0);
addIn('#center-ul',1);
addIn('#service-ul',2);
addIn('#culture-ul',3);
addIn('#duty-ul',4);
addIn('#resoure-ul',5);
addIn('#relation-ul',6);
addIn('#contact-ul',7);

		
/*})*/
