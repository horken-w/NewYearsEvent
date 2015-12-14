var $div=$('<div />'), $a=$('<a/>');
var funyear=function(btn){
	this.dialog=function(e){
		switch(e){
			case 'item3':
				this.lottery();
				break;
			case 'item4':
				this.rules();
				break;
			case 'item2':
				this.msgwall();
				break;
			case 'item1':
				this.newevents();
				break;
			default :
				alert('data error');
				break;
		}
	};
}
funyear.prototype={
	lottery: function(e){
		this.dropbox();
		$('<img/>', {
			src:'images/pop_prize_top_05.gif',
			alt: '參加抽好禮',
			width: '692',
			height: '53'
		}).appendTo($('.fb_pop2').addClass('position'));
		$div.clone().addClass('pop_content').appendTo('.fb_pop2');
		$div.clone().addClass('center').append($('<span/>').addClass('font03').text('2016/01/20前公佈得獎名單')).appendTo('.pop_content');
		$div.clone().addClass('pop_title').text('迎新大獎').appendTo('.pop_content');
		$div.clone().addClass('center').append($('<img/>', {
			src:'images/prize1.jpg',
			alt: '可獲得WiFi四軸空拍飛行機一臺(市價$5,000)',
			width: '500',
			height: '179'
		})).appendTo('.pop_content');
		$div.clone().addClass('pop_title').text('迎新紅包').appendTo('.pop_content');
		$div.clone().addClass('center').append($('<img/>', {
			src:'images/prize2_32.jpg',
			alt: '可獲得超商禮券100元',
			width: '504',
			height: '179'
		})).appendTo('.pop_content');
		this.closebox();
		this.runIn();
	},
	newevents: function(){
		console.log(2);
	},
	msgwall: function(){
		console.log(2);
	},
	rules: function(){
		this.dropbox();
		$('<img/>', {
			src:'images/pop_message_top_05.gif',
			alt: '等你來留言',
			width: '692',
			height: '53'
		}).appendTo($('.fb_pop2').addClass('position'));
		$div.clone().addClass('pop_content').appendTo('.fb_pop2');
		$div.clone().addClass('pop_title').text('從十五開始倒數到十六').appendTo('.pop_content').after($('<span />').text('本活動從即日起 至 2016/01/10 止'));
		$div.clone().addClass('pop_title').text('123 到臺灣，觀光年曆最好玩!!').appendTo('.pop_content');
		$div.clone().addClass('center').append($('<img/>', {
			src:'images/step_16.jpg',
			alt: '1.選「留言中大獎」，填選活動及原因。2.勾選同時發布到Facebook公開發佈至個人塗鴉牆。3.填寫E-mail，參加抽獎',
			width: '708',
			height: '194'
		})).appendTo('.pop_content');
		$div.clone().addClass('pop_title').text('旅遊心希望 跨年中大獎').appendTo('.pop_content');
		$div.clone().addClass('center').append($('<img/>', {
			src:'images/prize_32.jpg',
			alt: '可WiFi四軸空拍飛行機/百元超商禮券',
			width: '715',
			height: '179'
		})).appendTo('.pop_content');
		$div.clone().addClass('pop_title').text('留言要注意').appendTo('.pop_content');
		this.closebox();
		this.runIn();
	},
	dropbox: function(){
		var close=$('<div class="close"><a href="#"><img src="images/close.png" alt="關閉視窗" width="25" height="25" border="0"/></a></div>');
		$div.clone().addClass('dropbg').appendTo('body');
		$('.dropbg').fadeIn(700);
		$div.clone().addClass('fb_pop2').appendTo('body');
		close.appendTo('.fb_pop2');
	},
	closebox: function(){
		$('.dropbg').on('click', function(){
			$('.dropbg').fadeOut(500).remove();
		})
	},
	runIn: function(){
		$('.position').stop().animate({top: 80}, 1000);
	}
}

$(function(){
	var accessToken;
	$.getScript('//connect.facebook.net/zh_TW/sdk.js', function(){
		FB.init({appId: '1676383345952645', status: true, cookie: true, xfbml: true, version: 'v2.5', channelURL: 'http://fbi.techmore.com.tw:8080/index.html', oauth: true});
		FB.getLoginStatus(function (response){
			console.log(response);
			if (response.status === 'connected') {  
				var uid = response.authResponse.userID;
				accessToken = response.authResponse.accessToken;
			} else {
				FB.login(function (response) {
					if (response.authResponse) {
						var uid = response.authResponse.userID;
						accessToken = response.authResponse.accessToken;
					} else {
						alert('登入失敗!');
					}
				}, {
					scope: 'publish_actions'
				});
			}
		})
	})
	var events=new funyear();
	$('.menulg').on('click', function(e){
		e.preventDefault();
		events.dialog(e.target.innerText);
	});
	$('.submite').click(function(e){
		e.preventDefault();
		if(confirm('是否發布訊息?')){
			FB.api(
			  '/me/feed',
			  'POST',
			  {"message":"Hello world~","link":"http://fbi.techmore.com.tw:8080/index.html","title":"繞著臺灣跑‧環島大富翁:::台灣觀光年曆:::"},
			  function(response) {
			      console.log(response);
			  }
			);
		}
		/*FB UI*/
		// $.getScript('//connect.facebook.net/en_US/sdk.js', function(){
		// 	FB.init({appId: '1676383345952645', status: true, cookie: false, xfbml: true, version: 'v2.5'});
		// 	FB.ui({
		// 	    method: 'share',
		// 	    title: 'Title Test',
		// 	    description: 'Test Description Goes here. Tahir Sada ',
		// 	    href: 'http://fbi.techmore.com.tw:8080/index.html',
		// 	    description: 'balalalala dalalalala'
		// 	    },
		// 	    function(response) {
		// 			if (response && response.post_id) {
		// 			alert('Post was published.');
		// 			} else {
		// 			  alert('Post was not published.');
		// 			  console.log(response);
		// 			}
		// 		}
		// 	);
		// });
	});
});
if($(this).scrollTop()>350) $('nav').addClass('menusm');
$(this).on('scroll', function(){
if($(this).scrollTop()>350) $('nav').addClass('menusm');
	else $('nav').removeClass('menusm');
})