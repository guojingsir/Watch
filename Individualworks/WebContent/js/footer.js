$(document).ready(function(){
	$.ajax({
		url: 'json/bottom.text',
		type: 'GET',
		dataType: 'text'
	})
	.done(function(data,status,xhr) {
		$('#footer').html(data);
		// console.log(data);
	})
	.fail(function(xhr,errorStatus,errorText) {
		console.log('请求失败:' + errorStatus + ',' + errorText);
	});
	

});