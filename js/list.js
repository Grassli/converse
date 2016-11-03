$(function(){
// 侧边栏的筛选    	

	$('.listChoice').click(function(){
		var index=$(this).index();
			imgsrc=$('.listImg img',$(this)).attr('src')
			//判断是否为加号
		if(change(imgsrc)=='plus.png'){
			//把加号换为减号
			$('.listImg img',$(this)).attr('src','images/minus.png');
			//把它的兄弟元素隐藏
			$('dd',$(this).siblings()).slideUp(function(){
				$('.listImg img',$(this).siblings()).attr('src','images/plus.png');
			});
			//显示当前的行
			$('dd',$(this)).slideDown();
		}else{
			$('.listImg img',$(this)).attr('src','images/plus.png');
			$('dd',$(this)).slideUp()
		}

	//点击下拉列表里的选项
		$('dd',$(this)).click(function(e){
			$('.listChoice dt').eq(index).clone().appendTo($('.sx'));
			$(this).clone().appendTo($('.sx'));
			$('.listChoice').eq(index).hide(500);
			$('.reset').fadeIn();
		})

	//点击筛选栏里的选项
		$('dd',$('.sx')).click(function(){
			var i=$(this).index()+1;

		//删除当前选项
			$(this).prev().remove();
			$(this).remove();
		//显示选项栏里对应的选项
			$('.listChoice').eq(i/2-1).show(500);
			isd=$('.sx').is($('dd'));
			// alert(isd);
			if(!isd) $('.reset').fadeOut(0);
		})
	// 点击重新筛选 移除筛选中的所有选项
		$('.reset').click(function(){
				$('.sx').empty();
				$(this).fadeOut(0);
				$('.listChoice').fadeIn();
		});
	})
	//获取图片名函数
		function change(url){
				return url.substr(url.lastIndexOf('/')+1);
			}

















})