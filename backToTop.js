(function(){
	this.scrollBtn=function(){
		this.btn=null;

		var defaults={
			className: '',
			el_tag: '',
			el_id: '',
			text: 'back to top',
			durinTime: 550
		}
		if(arguments[0] && typeof arguments[0] === 'object'){
			this.options=extendDefaults(defaults, arguments[0]);
		}
		appendToEl.call(this);
		$('.backtop').on('click', this, function(e){
			e.preventDefault();
			if(e.data.options.el_tag !== ''){
				$(e.data.options.el_tag).stop().animate({scrollTop: 0}, e.data.options.durinTime);
			}else if(e.data.options.el_id !== ''){
				$(e.data.options.el_id).stop().animate({scrollTop: 0}, e.data.options.durinTime);
			};
			
		})
		$(window).on('scroll', function(){
			if($(this).scrollTop() > 20){
				$('.backtop').addClass('show');
			}else $('.backtop').removeClass('show');
		})
	}
	function appendToEl(){
		docFrag=document.createDocumentFragment();
		this.btn=document.createElement('a');
		this.btn.className='backtop ' + this.options.className;
		this.btn.href='#';
		this.btn.innerHTML=this.options.text;
		docFrag.appendChild(this.btn);
		if(this.options.el_tag !== ''){
			document.getElementsByTagName(this.options.el_tag)[0].appendChild(docFrag);
		}else if(this.options.el_id !== ''){
			document.getElementById(this.options.el_id).appendChild(docFrag);
		};
	}
	function extendDefaults(source, properties){
		var property;
		for(property in properties){
			if(properties.hasOwnProperty(property)){
				source[property] = properties[property];
			}
		}
		return source;
	}
})(window, document);

// var wraper = document.getElementById('top').id;

var topbtn = new scrollBtn({
    el_tag: 'body', //放在標籤上 ex body
    el_id: '', //放在id上 ex top   
    text: '回到最上層', //顯示文字
    className: 'btn_position' //外掛class
});

