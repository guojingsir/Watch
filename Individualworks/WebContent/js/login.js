$(document).ready(function(){


		var username = cookie.get('username');
		var password = cookie.get('password');

		$('#username').change(function(event) {
			if( $('#username').val() != username && !username ){
				layer.msg('用户名不存在,请注册...');
				// $('#username').focus();
				setTimeout(function(){
					location.href = 'enroll.html';
				},2000);

				return;
				
			} else if($('#username').val() != username && username){
				layer.msg('用户名输入不正确！');
				$('#username').focus();
				return;
			}
		});

		$('#userpwd').change(function(event) {
			if( $('#userpwd').val() != password ){
				layer.msg('密码输入不正确');
				$('#userpwd').focus();
				return;
			}
		});
		
		$(document).keydown(function(event) {
			
			if( event.keyCode == 13 ){
				if( $('#username').val() != username && !username ){
				layer.msg('用户名不存在,请注册...');
				// $('#username').focus();
				setTimeout(function(){
					location.href = 'enroll.html';
				},2000);
				return;
				
			} else if( $('#username').val() == '' ){
				layer.msg('您还未输入用户名！');
				return;
			} else if( $('#username').val() != username){
				layer.msg('用户名输入不正确');
				return;
			} else if( $('#userpwd').val() == '' ){
				layer.msg('您还未输入密码！');
				return;
			} else if($('#userpwd').val() != password){
				layer.msg('密码不正确！');
				return;
			}	
			cookie.add("u",$('#username').val());
			cookie.add("p",$('#userpwd').val());								

			layer.msg('登录成功');

			setTimeout(function(){
				location.href = 'index.html';
			},1000);

		}

		});

		$('#denglu').click(function(event) {
			
			if( $('#username').val() == '' ){
				layer.msg('您还未输入用户名！');
				return;
			} else if( $('#username').val() != username){
				layer.msg('用户名输入不正确');
				return;
			} else if( $('#userpwd').val() == '' ){
				layer.msg('您还未输入密码！');
				return;
			} else if($('#userpwd').val() != password){
				layer.msg('密码不正确！');
				return;
			}
			cookie.add("u",$('#username').val());
			cookie.add("p",$('#userpwd').val());
			
			layer.msg('登录成功');

			setTimeout(function(){
				location.href = 'index.html';
			},1000);

		});


	});
