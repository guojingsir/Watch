window.onload = function() {

		function $(_id) {
			return document.getElementById(_id);
		}

		
		$('username').focus();
		$('username').onchange = function(){
			var usernameVal = $('username').value;
			var r = /^[a-zA-Z0-9_]{1,}$/;
			if ( usernameVal == '') {
				layer.msg('用户名不能为空');
				$('username').focus();
				return;

			} else {
				if( !r.test(usernameVal) ){
					layer.msg('用户名格式不正确！');
					$('username').focus();
					return;
				}
			}
		
		}
		$('userpwd').onchange = function(){
			var userpwdVal = $('userpwd').value;
			var r = /^.{5,15}$/;
			if ( userpwdVal == '') {
				layer.msg('密码不能为空');
				$('userpwd').focus();
				return;

			} else {
				if( !r.test(userpwdVal) ){
					layer.msg('密码最少五位数！');
					$('userpwd').focus();
					return;
				}
			}
		
		}
		$('userpwd2').onchange = function(){
			if ( $('userpwd2').value != $('userpwd').value ) {
				layer.msg('两次密码输入不一致！');
				$('userpwd2').focus();
				return;
			}
		
		}
		$('mobile').onchange = function(){
			var r = /^1[345678]\d{9}$/;
			var mobileVal = $('mobile').value;

			if ( mobileVal == '') {
				layer.msg('手机号码不能为空');
				$('mobile').focus();
				return;

			} else {
				if( !r.test(mobileVal) ){
					layer.msg('手机号码格式不正确！');
					$('mobile').focus();
					return;
				}
			}
		
		}

		/*
			用户提交操作
		*/
		var upBtn = document.getElementById('upBtn');

		upBtn.onclick = function(){

			if( $('username').value == '' ){
				layer.msg('您还未输入用户名！');
				return;
			} else if( $('userpwd').value == '' ){
				layer.msg('您还未输入密码！');
				return;
			} else if( $('userpwd2').value == '' ){
				layer.msg('请再次输入密码！');
				return;
			} else if ($('mobile').value == '' ){
				layer.msg('请输入手机号！');
				return;
			}
			cookie.add("username",$('username').value,1000);
			cookie.add("password",$('userpwd').value,1000);
			layer.msg('注册成功');

			setTimeout(function(){
				location.href = 'login.html';
			},1000);
			
		}

			
		

};