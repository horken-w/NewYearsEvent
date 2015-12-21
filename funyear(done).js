var funyear=function(btn){
	this.close=$('<div class="close"><a href="#"><img src="images/close.png" alt="關閉視窗" width="25" height="25" border="0"/></a></div>');
	this.profiles={'nickName': '','email':'','fb_photo':'','messageId':''};

	this.dialog=function(e){
		switch(e.id){
			case 'img2':
				this.lottery();
				break;
			case 'img1':
				this.rules();
				break;
			case 'go':
				this.newevents();
				break;
			default :
				alert('data error');
				break;
		}
	};
};
funyear.prototype={
	lottery: function(e){
		this.dropbox();
		$('<img/>', {
			src:'images/pop_prize_top_05.gif',
			alt: '參加抽好禮',
			width: '692',
			height: '53'
		}).appendTo($('.fb_pop2').addClass('position p_top'));
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
		$div.clone().addClass('center').append('<p/>').append('<p/>').appendTo('.pop_content');
		$('<img/>', {
			src:'images/prize2_32.jpg',
			alt: '可獲得超商禮券100元',
			width: '504',
			height: '179'
		}).appendTo('p:first');
		$('<img/>', {
			src:'images/prize3.jpg',
			alt: '喔熊防風純棉外套',
			width: '504',
			height: '179'
		}).appendTo('p:last');
		this.closebox();
		this.runIn();
	},
	rules: function(){
		this.dropbox();
		$('<img/>', {
			src:'images/pop_message_top_05.gif',
			alt: '等你來留言',
			width: '692',
			height: '53'
		}).appendTo($('.fb_pop2').addClass('position p_top'));
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
		$('<ol/>').appendTo('.pop_content');
		for(var i=0; i<rulelist.rules.length; i++){
			$('<li/>').text(rulelist.rules[i]).appendTo($('ol'))
		};
		this.closebox();
		this.runIn();
	},
	dropbox: function(){
		$div.clone().addClass('dropbg').appendTo('body');
		$('.dropbg').fadeIn(700);
		$div.clone().addClass('fb_pop2').appendTo('body');
		this.close.appendTo('.fb_pop2');
	},
	msgbox: function(){
		$div.clone().addClass('dropbg').appendTo('body');
		$('.dropbg').fadeIn(700);
		$div.clone().addClass('fb_pop1').appendTo('body');
		this.close.appendTo('.fb_pop1');
		$('.fb_pop1').addClass('position');
	},
	closebox: function(){
		var $this=this;
		$('.close').on('click', function(){
			$this.removebox();
		})
	},
	removebox: function(){
		$('.dropbg, .fb_pop2, .fb_pop1').fadeOut(500);
		$('.fb_pop2, .fb_pop1').animate({top: -9999}, 300);
		$('.dropbg, .fb_pop2, .fb_pop1').remove();
	},
	runIn: function(){
		$('.position').stop().animate({top: 80}, 1000);
	},
	newevents: function(){
		this.msgbox();
		$('<span/>').addClass('font02').text('留言中大獎！').appendTo('.fb_pop1');
		$div.clone().addClass('pop_content').appendTo('.fb_pop1');
		$div.clone().addClass('table').appendTo('.pop_content');
		$div.clone().addClass('td column1 board').append($('<img/>', {
			src:'images/Step1.gif',
			alt: '2016年曆活動',
			width: '50',
			height: '50'
		})).appendTo('.table:eq(0)');
		$div.clone().addClass('td column3 board').html('<span>輸入你最想參加的<span class="font01">2016年曆活動</span>名稱</span><span class="font01 red"/>').appendTo('.table:eq(0)');
		$('<input/>').attr({'type': 'text',
							'name': 'eventsname',
							'maxlength': 30,
							'minlength': 2}).appendTo('.td:eq(1)');
		$('<span/>').html('★ 先到<a href="http://www.eventaiwan.tw/cal/list" target="_blank">臺灣觀光年曆網站 </a>看看明年有哪些活動吧！').appendTo('.td:eq(1)');

		$div.clone().addClass('table').appendTo('.pop_content');
		$div.clone().addClass('td column1 board').append($('<img/>', {
			src:'images/Step2.gif',
			alt: '2016年曆活動',
			width: '50',
			height: '50'
		})).appendTo('.table:eq(1)');
		$div.clone().addClass('td column3 board').html('<span>於下方留言你選擇這個活動的原因</span><span class="font01 red"/>').appendTo('.table:eq(1)');
		$('<textarea/>').attr({
			'name': 'eventsreaon',
			'cols': 66,
			'rows': 5,
			'maxlength': 300,
			'minlength': 10}).appendTo('.td:eq(3)');

		$div.clone().addClass('table').appendTo('.pop_content');
		$div.clone().addClass('td column1 board').append($('<img/>', {
			src:'images/Step3.gif',
			alt: '2016年曆活動',
			width: '50',
			height: '50'
		})).appendTo('.table:eq(2)');
		$div.clone().addClass('td column3 board').html('別忘了勾選 \"<input name="publish" type="checkbox"/><span class="red">Facebook個人塗鴉牆公開發佈此活動訊息</span> \"才算完成喔！').appendTo('.table:eq(2)');
		$div.clone().addClass('table').appendTo('.pop_content');
		$div.clone().addClass('td column1 board').append($('<img/>', {
			src:'images/Step4.gif',
			alt: '2016年曆活動',
			width: '50',
			height: '50'
		})).appendTo('.table:eq(3)');
		$div.clone().addClass('td column3 board')
			.html('誠心默念<br><span class="font02 red">我要中大獎! 我要中大獎!我要中大獎!</span>')
			.append($('<img/>', {
				src:'images/prize.jpg',
				style: 'float:right;'
			})).appendTo('.table:eq(3)');
		this.closebox();
		$('<span/>').addClass('but').append($('<a/>').attr({'href': '#', 'id': 'submit'}).text('送出留言')).appendTo('.pop_content');
		$('#submit').on('click', this, this.validedate);
	},
	validedate:function(e){
		var checktitle=false, checkmsg=false;
		if($('input[name=eventsname]').val().length ===0) {
			$('.td:eq(1) > .font01').text('活動名稱不能為空白');
		}else{
			$('.td:eq(1) > .font01').text('');
			e.data.profiles.activity=$('input[name=eventsname]').val();
			checktitle=true;
		}
		if( $('textarea[name=eventsreaon]').val().length === 0){
			$('.td:eq(3) > .font01').text('活動內容不能為空白');
		}else {
			$('.td:eq(3) > .font01').text('');
			e.data.profiles.message=$('textarea[name=eventsreaon]').val();
			checkmsg=true;
		}
		if(checktitle && checkmsg) {
			if($('input[type=checkbox]').prop('checked')){
				var arg={
					"message": '2016年，我要參加臺灣觀光年曆中的'+e.data.profiles.activity+ '： ' +e.data.profiles.message,
					"link":"http://lion.techmore.com.tw/tour103/funyear/",
					"title":"跨出家門Fun個假，年曆旅遊New一下！:::臺灣觀光年曆:::"
				};
				FB.api(
					'/me/feed',
					'POST',
					arg,
					function(response) {
						e.data.profiles.messageId=response.id;
					}
				);
			}
			e.data.removebox();
			e.data.mailbox();
		}
	},
	mailbox: function(published){
		this.msgbox();
		$div.clone().addClass('pop_content center').appendTo('.fb_pop1');
		$('<p/>').html('<span class="font03">要填寫正確的信箱，<br />不然獎品會找不到你喔！</span>').appendTo('.pop_content');
		$('<input/>').attr({'type': 'email',
			'value': this.profiles.email,
			'name': 'myemail',
			'placeholder': '請輸入你的Email信箱'}).appendTo('.pop_content');
		$('<p/>').append($('<span/>').addClass('but').append($('<a/>').attr({'href': '#', 'id': 'sent'}).text('確認'))).appendTo('.pop_content');
		this.closebox();
		$('#sent').on('click', this, function(e){
			e.data.profiles.email=$('input[name=myemail]').val();
			e.data.sumitdata(e.data.profiles);
			e.data.removebox();
			e.data.endbox();
		});
	},
	sumitdata: function(profiles){
		$.ajax({
			url: root+'/funYear/FunYearAction.do?method=saveMessage',
			method: 'post',
			dataType:'json',
			data: profiles
		});
	},
	endbox: function(){
		var $this=this;
		this.msgbox();
		$div.clone().addClass('pop_content center').appendTo('.fb_pop1');
		$('<p/>').html('<span class="font03">恭喜你已完成本活動！</span>').appendTo('.pop_content');
		$('<span/>').html('迎接2016的到來，別忘了安排旅程，<br />跨出家門參加臺灣觀光年曆的活動喔！').appendTo('.pop_content');
		$('<p/>').append($('<span/>').addClass('but').append($('<a/>').attr({'href': '#', 'id': 'close'}).text('關閉'))).appendTo('.pop_content');
		this.closebox();
		$('#close').on('click', function(e){
			e.preventDefault();
			$this.removebox();
		});
	}
};
$(function(){
	$('#main').hide().load('poster.jsp').show('100');
	var events=new funyear();
	$('.menu4').on('click', function(e){
		e.preventDefault();
		events.dialog(this);
		$('html, body').animate({ 'scrollTop': 0 }, 1000);
		$('.menu2').removeClass('menu2_on');
	});
	$('.menu5').on('click', function(e){
		e.preventDefault();
		events.dialog(this);
		$('html, body').animate({ 'scrollTop': 0 }, 1000);
		$('.menu2').removeClass('menu2_on');
	});
	$('.menu3_on').on('click', function(e){
		e.preventDefault();
		$('#main').hide().load('poster.jsp').fadeIn('800');
		$('html, body').animate({ 'scrollTop': $("#navbar").offset().top }, 1000);
		$('.menu2').removeClass('menu2_on');
	});
	$('.menu2').on('click', function(e){
		e.preventDefault();
		$(this).addClass('menu2_on');
		$('#main').hide().load('calender.jsp').fadeIn('800');
		$('html, body').animate({ 'scrollTop': $("#navbar").offset().top }, 1000);
	});
	$('.go > a >img').on('click', function(e){
		e.preventDefault();
		var $this=this;
		$('.menu2').removeClass('menu2_on');
		var accessToken;
		$.getScript('//connect.facebook.net/zh_TW/sdk.js', function(){
			FB.init({appId: '205031023166547', status: true, cookie: true, xfbml: true, version: 'v2.5', channelURL: 'http://localhost:8080/funyear/index.jsp#', oauth: true});
			FB.getLoginStatus(function (response){
				if (response.status === 'connected') {
					var uid = response.authResponse.userID;
					accessToken = response.authResponse.accessToken;
					events.profiles.fb_photo="https://graph.facebook.com/" + uid + "/picture?type=normal";
					FB.api('/me?fields=email,name', function(response) {
						events.profiles.nickName=response.name;
						if(response.email === 'undefined' ) events.profiles.email="";
						else events.profiles.email=response.email;
					})
					events.dialog($this);
				} else {
					FB.login(function (response) {
						if (response.authResponse) {
							var uid = response.authResponse.userID;
							accessToken = response.authResponse.accessToken;
							events.profiles.fb_photo="https://graph.facebook.com/" + uid + "/picture?type=normal";
							events.profiles.nickName=response.name;
							FB.api('/me?fields=email', function(response) {
								if(response.email === 'undefined' ) events.profiles.email="";
								else events.profiles.email=response.email;
							})
							events.dialog($this);
						} else {
							alert('登入失敗!');
						}
					}, {
						scope: 'publish_actions, email, user_posts'
					});
				}
			})
		});
	});
	if($(this).scrollTop()>553) $('.var').addClass('fixednav');
	$(this).on('scroll', function(){
	if($(this).scrollTop()>553) $('.var').addClass('fixednav');
		else $('.var').removeClass('fixednav');
	})
});