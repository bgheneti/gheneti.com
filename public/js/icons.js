$(document).on('mouseenter','.navtitle',function(){
		$('.navtitle').css('background-color','white');
		$('.navtitle h1').css('color','black');
});

$(document).on('mouseleave','.navtitle',function(){
		$('.navtitle').css('background-color','#151515');
		$('.navtitle h1').css('color','white');
});

$(document).on('mouseenter','.main img',function(){
		if ($(this).attr('src')=='navicons/iconmonstr-cloud-17-icon.png'){
		$(this).attr('src','navicons/cloud.gif');
		}
		else if ($(this).attr('src')==('navicons/mailbefore.gif') || $(this).attr('src')==('navicons/mailclose.gif')){
		$(this).attr('src','navicons/mail.gif');
		}
		else if ( $(this).attr('src')=='navicons/blankknife.png' || $(this).attr('src')=='navicons/blankknife.gif'){
		$(this).attr('src','navicons/knife.gif');
		}
});

$(document).on('mouseleave','.main img',function(){
		if ($(this).attr('src')=='navicons/cloud.gif'){
		$(this).attr('src','navicons/iconmonstr-cloud-17-icon.png');
		}
		else if ($(this).attr('src')=='navicons/mail.gif'){
		$(this).attr('src','navicons/mailclose.gif');
		}
		else if ($(this).attr('src')=='navicons/knife.gif'){
		$(this).attr('src','navicons/blankknife.gif');
		}
});

