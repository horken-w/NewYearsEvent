/**
 * Created by evolve on 12/17/2015.
 */
var managing=delay=false;
var min_column= 4, col_width=210, sticker_gap=30;
var flow_index=recordCount=columnHeights=lengths=listIndex= 0, num=1;
var postList=function(){
    var wrap=document.getElementById('wrap');
    var sticker=wrap.children;
    var tiles=function(profiles, indexs){
        if(managing) {
            return;
        }
        var bg=Math.floor(Math.random()*5), index=flow_index+indexs;
        $div.clone().addClass(colour[bg]+' pending').append($div.clone().addClass('fb_photo')).append($div.clone().addClass('sticky_text')).appendTo(wrap);
        $('<img/>', {
            src: profiles.fb_photo,
            width: 50,
            height: 50,
            alt: profiles.nickName
        }).appendTo('.fb_photo:eq('+index+')');
        $('.fb_photo:eq('+index+')').after($div.clone().addClass('fb_mane').text(profiles.nickName));
        $('.fb_mane:eq('+index+')').after($('<hr />'));
        $('.fb_mane:eq('+index+')').after($div.clone().addClass('space'));
        $div.clone().addClass('font01').text('2016年，我要參加臺灣觀光年曆中的 '+profiles.activity).appendTo('.sticky_text:eq('+index+')');
        $('<span/>').addClass('textbreak').text(profiles.message).appendTo('.sticky_text:eq('+index+')');
        managing=true;
    };
    var getColumnCount = function() {
        return Math.max(min_column, Math.floor((wrap.offsetWidth + sticker_gap) / (col_width + sticker_gap)));
    };
    var appendtiles=function(flows){
        var col_height=columnHeights;
        for(var i=0; i<flows.length;i++){
            $(flows[i]).css({
                left: i*(col_width+sticker_gap)+'px',
                top: col_height+'px'
            }).removeClass('pending').addClass('ready');
            columnHeights=col_height + sticker_gap + flows[i].offsetHeight;
            lengths++;
        }
        wrap.style.height = columnHeights + 'px';
        managetiles();
    };
    var managetiles=function(){
        var tileArr=[];

        if(sticker.length > lengths){
            for(var i=0; i<min_column; i++){
                tileArr.push(sticker[flow_index]);
                flow_index++;
            }
            delayTime(tileArr);
        }
    };
    var delayTime=function(tileArr){
        var loopTime;
        clearTimeout(loopTime);
        loopTime=setTimeout(function() {
            appendtiles(tileArr);
        },50);
        delay=false;
    };
    var viewPort=function(posts){
        for(var i=0; i<posts.length; i++){
            if(posts[i] !== undefined)  {
                tiles(posts[i], i);
                managing=false;
            }
        }
        columnCount = getColumnCount();
        managetiles();
    };
    var scrollScreen=function(){
        var viewportTop=(document.body.scrollTop || document.documentElement.scrollTop)-wrap.offsetTop;
        var viewportBtn=(window.innerHeight || document.documentElement.clientHeight)+viewportTop;
        if(delay) {
            return;
        }
        if(viewportBtn > columnHeights){
            delay=true;
            $.getJSON(root+'/funYear/FunYearAction.do?method=getMessageList&currentPage='+num+'&recordCount='+recordCount, function(data){
                viewPort(data.list);
                recordCount=data.recordCount;
                num++;
            });
        }
    };
    $.getJSON(root+'/funYear/FunYearAction.do?method=getMessageList&currentPage='+num, function(data){
        viewPort(data.list);
        recordCount=data.recordCount;
        $(window).on('scroll', scrollScreen);
        num++;
        delay=false;
    });

};
$(function(){
    postList();
});