	$(document).ready(function(){
		var price1 = $('#price');
		var tcBtn = $('#tcBtn');
		var dlstate = $('#dlstate');
		var h3_a = $('#main h3.h3');
		var ss = $('#main .ss');
		var name = $('#name');
		var username = cookie.get('u');
		var password = cookie.get('p');

		if( !username && !password ){
			dlstate.html('当前用户未登录');
			tcBtn.text('登录');	
			tcBtn.click(function(event) {
				location.href = 'login.html';
			});	
		} else{
			dlstate.html('当前登录帐号：');
			$('#name').html(username);
			tcBtn.text('退出登录');			
		};

		
		tcBtn.click(function(event) {

			username = cookie.get('u');
			password = cookie.get('p');

			if( !username && !password ){
				location.href = 'login.html';
				return;
			}
			// console.log(username + ',' + password);

			//询问框
			layer.confirm('确定要退出帐号么吗？', {

			  btn: ['确定退出','我再看看'] //按钮

				}, function(){//确定回调
					
					sessionStorage.clear();
					ss.html('');
					price1.text( '$' + 0.00);
					h3_a.text('My Shopping Bag (0)');
					dlstate.html('当前用户未登录');
					tcBtn.text('登录');
					name.html('');
					cookie.del('u');
					cookie.del('p');
					cookie.del('price');
					cookie.del('id');
					layer.msg('成功退出！');
					// console.log(username + ',' + password);
				}, function(){
					//没有确定回调
					// console.log(username + ',' + password);	
				});
			
			$(document).keydown(function(event) {

				if( event.keyCode == 13 ){

					layer.closeAll();
					sessionStorage.clear();
					ss.html('');
					price1.text( '$' + 0.00);
					h3_a.text('My Shopping Bag (0)');
					dlstate.html('当前用户未登录');
					tcBtn.text('登录');
					name.html('');
					cookie.del('u');
					cookie.del('p');
					cookie.del('price');
					cookie.del('id');
					layer.msg('成功退出！');
				}	
			});		
			

		});
		

		$('.empty').click(function(event) {
			
			if( sessionStorage.valueOf().length == 0 ){
				layer.msg('购物车里没有任何东西！');
			} else {
				price1.text( '$' + 0.00);
				cookie.del('price');
				cookie.del('id');
				sessionStorage.clear();
				ss.html('');
				h3_a.text('My Shopping Bag (0)');
				layer.msg('购物车已经被清空！');
			}
			
		});


	});


