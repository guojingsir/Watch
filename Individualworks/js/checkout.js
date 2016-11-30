$(document).ready(function(){

		var html = '';				
		//传入ID返回商品信息
		var id = cookie.get('id');
		var price = cookie.get('price');
		console.log(price);
		var jsonTeam = sessionStorage.valueOf();

		// console.log(jsonTeam);
		// $.each(jsonTeam, function(index, val) {
		// 	$('#shuju').html(val);
		// 	console.log(val);
		// });
		
		var number = sessionStorage.valueOf().length;
		$('#main h3.h3').text('My Shopping Bag (' + number + ')');			
		// console.log(number);
		
		if( number != 0){
			$('#submit').val('$' + price )
			$('#submit').click(function(event) {
				layer.load(3);

				setTimeout(function(){
					layer.closeAll();
					$('#price').text( '$' + 0.00);
					cookie.del('price');
					sessionStorage.clear();
					$('#main .ss').html('');
					$('#main h3.h3').text('My Shopping Bag (0)');
					$('#submit').fadeOut('slow');
					layer.msg('购物车已提交！');
				},1500);
			});
		} else if(number == 0) {
			$('#submit').hide();
		}
		

		$.each(jsonTeam, function(index, val) {

			// console.log(val);
			var obj = eval("(" + val + ")");
			// console.log(obj);

			html += '<ul class="cart-header" id="' + obj.id + '">';
			html += '	<div class="close"></div>';
			html += '		<li class="ring-in">';
			html += '			<a href="single.html">';
			html += '				<img src="' + obj.imgSrc + '" class="img-responsive" alt="">';
			html += '			</a>';
			html += '		</li>';
			html += '		<li><span class="name">'+ obj.watchName + '</span></li>';
			html += '		<li><span class="cost">$ ' + obj.price + '</span></li>';
			html += '		<li>';
			html += '			<div class="number">';
			html += '				<a href="#">-</a>';
			html += '					<input type="text" size="4" value="1">';
			html += '				<a href="#">+</a>';
			html += '			</div>';
			html += '		</li>';
			html += '		<li><span>Free</span>';
			html += '		<p>Delivered in 2-3 business days</p></li>';
			html += '	<div class="clearfix"></div>';
			html += '</ul>';
			
			$('#main .ss').html(html);
		});
		
		
		
		$('#main').on('click', '.close', function(event) {	

			
			var number = $(this).parents('ul.cart-header').attr('id');
			var money = $(this).parents('ul.cart-header').find('span.cost').text();
			var shoppprice = parseInt(money.substr(1));
			// console.log(shoppprice);
			
			shoppprice = price - shoppprice;

			$('#price').text( '$' + shoppprice);
			cookie.add("price",shoppprice);

			del(number);
			
			$('#' + number).fadeOut('slow', function(c){

				$('#' + number).remove();
			});
			
			number = sessionStorage.valueOf().length;

			if( number == 0){
				cookie.del('price');
				$('#submit').fadeOut('slow');
			}

			$('#main h3.h3').text('My Shopping Bag (' + number + ')');
			
		});

		
		
		//传入ID删除商品信息
		function del(id) {
			sessionStorage.removeItem(id);
			layer.msg('商品成功删除！');
		}

		//传入ID返回商品信息
		function queryProductById(id) {

			var obj = null; //创建空对象
			
			// 遍历存储的数据
			for (var i = 0;i < sessionStorage.length;i ++) {

				var key = sessionStorage.key(i);	//键	
				
				// 如果找到匹配的名称
				if (key == id) {

					var val = sessionStorage.getItem(key); //值
					try {
						obj = JSON.parse(val); //转换为json对象
					} catch (e) {
						return null;
					}
					return obj;					
				}
			}
			return obj;
		}				  

	});


	