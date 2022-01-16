$(document).ready(function(){

	var urlValue = window.location.search.split("=")
	$('strong.cate').text(urlValue[1]);


	//옵션선택부분 다 숨겨두고
	$('div.option_detail form').hide();
	$('form select').hide();
	

	if (window.location.href.indexOf('km') != -1) { //조건맞는 페이지서만 스크립트 작동
		console.log('기프트')
		$('form#sangpum').show();


		if($('strong.cate').text() == 'giftcard') {
			$('form select#sangpum01, div.prod_ea').show();
		}
		if($('strong.cate').text() == 'happymoney') {
			$('form select#sangpum02, div.prod_ea').show();
		}
		if($('strong.cate').text() == 'bookcard') {
			$('form select#sangpum03, div.prod_ea').show();
		}
		if($('strong.cate').text() == 'nexoncard') {
			$('form select#sangpum04, div.prod_ea').show();
		}
		if($('strong.cate').text() == 'oncash') {
			$('form select#sangpum05, div.prod_ea').show();
		}



		if($('strong.cate').text() == 'googlegift') {
			$('form select#google01').show();
		}



		if($('strong.cate').text() == 'maplestory') {
			$('form select#proxy01').show();
		}
		if($('strong.cate').text() == 'fighter') {
			$('form select#proxy02').show();
		}
		if($('strong.cate').text() == 'legend') {
			$('form select#proxy03').show();
		}
		if($('strong.cate').text() == 'windnara') {
			$('form select#proxy04').show();
		}
		if($('strong.cate').text() == 'nexoncash') {
			$('form select#proxy05').show();
		}
		if($('strong.cate').text() == 'lostark') {
			$('form select#proxy06').show();
		}
	}
	




	if (window.location.href.indexOf('km2') != -1) { 
		console.log('구글')

		$('form#google').show();

		if($('strong.cate').text() == 'googlegift') {
			$('form select#google01').show();
		}
	}
	




	if (window.location.href.indexOf('km3') != -1) { 
		console.log('프록시')
		$('form#proxy').show();
						
		if($('strong.cate').text() == 'maplestory') {
			$('form select#proxy01').show();
		}
		if($('strong.cate').text() == 'fighter') {
			$('form select#proxy02').show();
		}
		if($('strong.cate').text() == 'legend') {
			$('form select#proxy03').show();
		}
		if($('strong.cate').text() == 'windnara') {
			$('form select#proxy04').show();
		}
		if($('strong.cate').text() == 'nexoncash') {
			$('form select#proxy05').show();
		}
		if($('strong.cate').text() == 'lostark') {
			$('form select#proxy06').show();
		}
	}
	





	//1000단위 콤마찍기
	var name, value, selecIndex, All, EA;
	$('div.option_detail form select').each(function(){
		selecIndex = 0 ;
		$(this).on('change', function(){
			selecIndex = $(this).find('option:selected').index();
			name = $(this).attr('name');
			value = $(this).val();
			console.log(name+'='+value+'/'+selecIndex);
			$('.price_txt').text(addComma(value)+' 원');
			if (selecIndex == 0)
			{
				$('.price_txt').text('※ 옵션을 선택해주세요')
			}
			EA = 1;
			$('.ea').val(EA);
			All = Number(EA*value)
		});	
		$('.prod_ea input').text('장')
		
		
	})
	$('.down').click(function(){
		EA = $('.ea').val()
		EA--;
		if(selecIndex == 0) {
			//alert('옵션을 선택해주세요');
			$('div.option_detail form select').css({border:'1px solid red'})
			return false;
		}
		if(EA <= 0){
			alert('최소 수량은 1개입니다.')
			EA = 1;
		}
		$('.ea').val(EA);
		All = Number(EA*value)
		$('.price_txt').text(addComma(All)+' 원')
	});
	$('.up').click(function(){
		if(selecIndex == 0) {
			//alert('옵션을 선택해주세요');
			$('div.option_detail form select').css({border:'1px solid red'})
			return false;
		}
		EA = Number($('.ea').val())
		EA++;
		$('.ea').val(EA);
		All = Number(EA*value)
		$('.price_txt').text(addComma(All)+' 원')
	});
	

	
	$('#option_submit').click(function(){
		if(selecIndex == 0) {
			alert('옵션을 선택해주세요');
			$('div.option_detail form select').css({border:'1px solid red'})
			return false;
		}
		else {
			window.location.href = "result.html?mid=order&"+name+"="+value+"&count"+"="+EA+"&gory"+"="+urlValue[1]+"&total"+"="+All+"&act=dispBoardWrite";
		}
	})



	
	function addComma(num){
		var len, point, str; 
		   
		num = num + ""; 
		point = num.length % 3 ;
		len = num.length; 
	   
		str = num.substring(0, point); 
		while (point < len) { 
			if (str != "") str += ","; 
			str += num.substring(point, point + 3); 
			point += 3; 
		} 
		 
		return str;
	 
	}
})