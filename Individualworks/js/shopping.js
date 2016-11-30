$(document).ready(function(){	
	var username = cookie.get('u');
	var password = cookie.get('p');


	var Pricess = $('#price');

	var shoppprice = cookie.get('price');

		if ( !shoppprice ) {
			shoppprice = 0.00;
			Pricess.text( '$' + parseInt(shoppprice));
		} else{			
			Pricess.text( '$' + parseInt(shoppprice));
			
		}
	
	var lis = $('#product').find('h4').find('i');
	var masks = $('.mask');
	var liss = $('.contact').find('h4').find('i');

	function Product(id,imgSrc,watchName,price){

		this.id = id;
		this.imgSrc = imgSrc;
		this.watchName = watchName;
		this.price = price;
	}	

	liss.click(function(event) {	


		username = cookie.get('u');
		password = cookie.get('p');

		if( !username && !password ){
			layer.msg('由于您当前未登陆,请登录后再购买！');
			
			setTimeout(function(){
				location.href = 'login.html';
			},2000);
			
		} else {
			var price = $(this).parents('.item_add').next().find('span').text();	
			// 获得当前价格对应的图片手表路径
			var imgSrc = $(this).parents('.simplecart_shelfItem').find('.mask img').attr('src');
			// console.log(imgSrc);
			//获得当前的手表的类型名称
			var watchName = $(this).parents('.simplecart_shelfItem').find('.h3').text();
			var id = $(this).parents('.simplecart_shelfItem').find('.h3').attr('id');
			// console.log(id);

			for (var i = 0; i <= sessionStorage.length; i++) {
				var key = sessionStorage.key(i);
				if( id == key ){
					layer.msg('该商品已经加入进购物车！');
					return;
				}
			};

			shoppprice = parseInt(shoppprice) + parseInt(price);
			cookie.add("price",shoppprice);

			Pricess.text( '$' + shoppprice);
			layer.msg('商品成功添加进购物车！');		

			

			add();

			// 新建一个商品类
			

			//增加商品
			function add(){

				var pro = new Product(id,imgSrc,watchName,price);

				// 对象转换为字符串
				var proStr = JSON.stringify(pro);

				//存储到本地
				sessionStorage.setItem(id,proStr);

				cookie.add("id",id);
				
			}		

		}	
		
	});


	lis.click(function(event) {	


		username = cookie.get('u');
		password = cookie.get('p');

		if( !username && !password ){
			layer.msg('由于您当前未登陆,请登录后再购买！');
			setTimeout(function(){
				location.href = 'login.html';
			},2000);
			
		} else {
			var price = $(this).parents('.item_add').next().find('span').text();	
			// 获得当前价格对应的图片手表路径
			var imgSrc = $(this).parents('.simplecart_shelfItem').find('.mask img').attr('src');
			// console.log(imgSrc);
			//获得当前的手表的类型名称
			var watchName = $(this).parents('.simplecart_shelfItem').find('.h3').text();
			var id = $(this).parents('.simplecart_shelfItem').find('.h3').attr('id');
			// console.log(id);
			for (var i = 0; i <= sessionStorage.length; i++) {
				var key = sessionStorage.key(i);
				if( id == key ){
					layer.msg('该商品已经加入进购物车！');
					return;
				}
			};

			shoppprice = parseInt(shoppprice) + parseInt(price);
			cookie.add("price",shoppprice);

			Pricess.text( '$' + shoppprice);
			layer.msg('商品成功添加进购物车！');


			

			

			add();

			// 新建一个商品类
			

			//增加商品
			function add(){

				var pro = new Product(id,imgSrc,watchName,price);

				// 对象转换为字符串
				var proStr = JSON.stringify(pro);

				//存储到本地
				sessionStorage.setItem(id,proStr);

				cookie.add("id",id);
				
			}		

		}	
		
	});


	//查看单一产品的详细信息

	masks.click(function(event) {
		
		var prices = $(this).parents('.simplecart_shelfItem').find('span.item_price').find('span').text();
		// 获得当前价格对应的图片手表路径
		var imgSrc = $(this).parents('.simplecart_shelfItem').find('.mask img').attr('src');
		// console.log(imgSrc);
		//获得当前的手表的类型名称
		var watchName = $(this).parents('.simplecart_shelfItem').find('.h3').text();
		var id = $(this).parents('.simplecart_shelfItem').find('.h3').attr('id');
		// console.log(id);
		var pro = new Product(id,imgSrc,watchName,prices);
		var proStr = JSON.stringify(pro);		
		cookie.add('product',proStr);



	});
	if( !cookie.get('product') ){
		return
	} else{
		$('h5.watch').text('$' + JSON.parse(cookie.get('product')).price);	
	}
	
		
	$('#addTo').click(function(event) {
		if( !username && !password ){

			layer.msg('由于您当前未登陆,请登录后再购买！');

			setTimeout(function(){
				location.href = 'login.html';
			},2000);

		}else {
			var prices = JSON.parse(cookie.get('product')).price;
			
			for (var i = 0; i < sessionStorage.length; i++) {
				var key = sessionStorage.key(i);
				if( JSON.parse(cookie.get('product')).id == key ){
					layer.msg('改商品已经加入进购物车！');
					return;
				}
			};
			// console.log(queryProductByName(product));

			var obj = JSON.parse(cookie.get('product'));
			// 对象转换为字符串
			var objStr = JSON.stringify(obj);

				//存储到本地
			sessionStorage.setItem(obj.id,objStr);

			shoppprice = parseInt(shoppprice) + parseInt(prices);
			cookie.add("price",shoppprice);
			Pricess.text( '$' + shoppprice);
			layer.msg('商品成功添加进购物车！');
		}
			
	});
});