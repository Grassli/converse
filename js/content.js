$(function(){
//分享到下拉
	$('.share').click(function(){
		$('.tabCon').slideToggle()
	})
//放大镜
	var $smallImg=$('.smallImg'),
		$bigImg=$('.bigImg');

		$smallImg.on({
					mouseover: function(){ $bigImg.show();},
					mouseout: function(){  $bigImg.hide();},
					mousemove: function(e){
							//鼠标相对于小图的位置
							 var  oleft=e.pageX-$smallImg.offset().left,
			   					  otop=e.pageY-$smallImg.offset().top,
			   				//获取小图的宽高
			   				 	  owidth=$('.smallImg img').width(),
			   					  oheight=$('.smallImg img').height(),
			   					  gw=$('.glass').width(),
								  gh=$('.glass').height();
			   				// 镜子的位置
			   					
			   				// $('.glass').css({left: oleft-gw/2, top: otop-gh/2})
			   			//大图移动的距离
								$bigImg.scrollLeft(oleft*4-owidth/2)
						 			   .scrollTop(otop*4-oheight/2); 

							 }

					});
		var $productList=$('.productListCon li');

		$productList.on({
			mouseover:function(){
							$productList.css('border','1px solid #fff');
							$(this).css('border','1px solid #b7b7b7');
						},
			click:function(){
				//当前的序号
				xh=$(this).index();
				//换对应的小图
				$('img',$smallImg).attr('src','images/product'+xh+'.png')
				//换对应的大图
				$('img',$bigImg).attr('src','images/big'+xh+'.png')
			}
		})
//选择衣服尺码
			choseSize();
		function choseSize(){
			select=$('#sizeSelect')[0].onchange=function(){
				//取出被选中的值
				var value=this.options[this.selectedIndex].value;
				//重新写入被选中的值
					$('.textRight>span').html(value)
			}
		}
//输入商品数量
	Count()
function Count(){	
		//点击加
		$('.add').click(function(){
			$('#count').val(add());
		});
		// 点击减
		$('.reduce').click(function(){
			$('#count').val(reduce());
		})
		//数量加
		function add(){
			var value = parseInt($('#count').val()); 	
			return ++value;
		}
		//数量减
		function reduce(){
			// 如果数量为零返回false
			var value = parseInt($('#count').val());
			if(value==0){
				return 0;
			}else{	
				return --value;
			}
		}
	}
//无缝滚动
	likeRun();
function likeRun(){	
	var	 $likeWrapper=$('.like .likeMain .likeWrapper'),
		 $likeCon=$('.likeCon',$likeWrapper),
		 $firstImg=$likeCon.first().clone(),
		 //单个宽度
		 w=$firstImg.width(),
		 i=0;
		 //把第一个ul加到容器后面
	$likeWrapper.append($firstImg).width($('ul',$likeWrapper).length*$firstImg.width());
	//点击下一个	
	$('.likeNext').click(function(){
		i++;	
		move()
	});
	//点击上一个
	$('.likepre').click(function(){
		i--;
		move();
	})
	//运动
	function move(){
		//如果是最后一张
		if(i==$('ul',$likeWrapper).length){
			i=1;
			$likeWrapper.css('left','0');
		}
		//如果是第一张
		if(i==-1){
			i=$('ul',$likeWrapper).length-2;
			$likeWrapper.css('left',($('ul',$likeWrapper).length-1)*-w)
		}
		$likeWrapper.stop().animate({ left: i*-w},1000);
	}
}
//参照表弹出层
	//显示弹出层
	$('.sizeTable').click(function(){
		$('.popup').fadeIn().height($(document).height());
		$('.popupCon').fadeIn(1000);
	})
	//关闭弹出层
	$('.close').click(function(){
		$('.popupCon').fadeOut(800,function(){$('.popup').fadeOut()});
	});
	$('.popbt').click(function(){
		$('.popupCon').fadeOut(800,function(){$('.popup').fadeOut()});
	});

})