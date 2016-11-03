$(function(){

// 导航下拉
		var index;
		
	$('.navContent li').on({
		mouseover: function(){
						index=$(this).index();
                    	$('.menu').eq(index).stop()
                    						.slideDown(300)
                    						.css({opacity: '1',transition: 'opacity 1s ease 0s'});
                    	showPop();
                    	$('a',$(this)).css('text-decoration','underline');
					},
		mouseout: function(){
						$('.menu').eq(index).stop()
											.slideUp(30);
						hidePop();
						$('a',$(this)).css('text-decoration','none');
					}
	});

//显示弹出层
	function showPop(){
		$('.headpop').fadeIn(300).height($(document).height());
	}
//隐藏弹出层
	function hidePop(){
		$('.headpop').fadeOut(300);
	}
//登录、注册下拉
	// 点击登录
	$('.login').click(function(){

		$('.loginDisplay').slideDown(500,function(){
			$('.loginContent').fadeIn();
			$('.regesiterContent').fadeOut(0);
			$('.sj',$('.loginToal')).show();
			})
	})
	// 点击注册
	$('.regesiter').click(function(){
		$('.loginDisplay').slideDown(500,function(){
			$('.regesiterContent').fadeIn();
			$('.loginContent').fadeOut(0);
			$('.sj',$('.loginToal')).show();
		})
	})
	// 点击用户图标
	$('.loginToal').click(function(){
		$('.searchDisplay').slideUp(500,function(){
			$('.loginDisplay').slideToggle(500,function(){
				$('.loginContent').fadeIn();
				})
		})
		$('.sj',$('.search')).hide(0);
		$('.sj',$('.loginToal')).toggle();
	})
	// 点击搜索
	$('.search').click(function(){
		$('.loginDisplay').slideUp(500,function(){
			$('.searchDisplay').slideToggle(500);
		})
		$('.sj',$('.loginToal')).hide(0);
		$('.sj',$(this)).toggle(300);
	})

	$('.close').click(function(){
		$('.searchDisplay').slideUp(500);
		$('.sj',$('.search')).hide(0);
	});
















})