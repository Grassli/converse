$(function(){
	// banner轮播
		var $img=$('.bannerImg'),
			$imgList=$('.bannerImg li'),
			 $titleList=$('.imgTitle li'),
        	 timer,
        	 index=0,
        	 j=$imgList.index();
        	 //图片变化函数
			function imgRun(num){
				$imgList.css('opacity','0');
				$imgList.eq(num).css({ opacity:'1',transition: 'opacity 2s ease 0s'});
			}			
			//图片标题变化函数
			function titleRun(n){
				$titleList.css({ color: '#999', 'border-top': '1px solid #fff'});
				$titleList.eq(n).css({ color: '#333', 'border-top': '1px solid #333'});
			}
			
		//鼠标移入图片标题
			$titleList.on({
				mouseover: function(){
								index=$(this).index();
								titleRun(index);
								clearInterval(timer)
								imgRun(index);
							},
				mouseout: function(){
								autoRun();
								$(this).css({color: '#999','border-top': '1px solid #fff',cursor: 'pointer'});	
							}
			});

		//自动播放	
			function autoRun(){
				clearInterval(timer);	
				j=index-1;
				console.log(j);
				timer=setInterval(function(){	
					j++;
					imgRun(j);
					if(j==4) j=-1;
					titleRun(j);
				},2000)
			}
			autoRun();
		//鼠标点击下一个
			$('.next').click(function(){	
							index++;
							imgRun(index);
							if(index==4) index=-1;
							titleRun(index)
			});
		//鼠标点击上一个
			$('.pre').click(function(){
							index--;
							imgRun(index);
							if(index==-1) j=4;
							titleRun(index);
			});
		// 鼠标移入图片上
			$('.banner').on({
				mouseover: function(){ clearInterval(timer); },
				mouseout: function(){ autoRun(); }

			})


//单品热卖选项卡
	indexTab();
	function indexTab(){
	var $hotTitle=$('.hotTopBox'),
		$hotBox=$('.hotBox'),
		$sanjiao=$('.hotLineBox'),
		//标题编号
		hotIndex,
		//每个框的宽度（用于计算小三角移动的距离）
		w=$hotTitle.width();
		$hotTitle.on({
			mouseover: function(){
				hotIndex=$(this).index();
				//标题变动
				$hotTitle.css('opacity','1');
				$(this).css('opacity','.5');
				//内容变动
				$hotBox.css({opacity: '0', transition: 'opacity 1s ease 0s'});
				$hotBox.eq(hotIndex).css({ opacity:'1',transition: 'opacity 1s ease 0s'});
				//小三角的位置
				$sanjiao.css({
					left: 120+hotIndex*(w+10),
					transition: 'left 1s ease 0s'
				})
			}
		})
	}


})