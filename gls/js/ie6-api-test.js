/* ===================================================
 * ie6-api-test.js v0.0.1
 * http://
 * ===================================================
 * Copyright 2012 Glamour Sales China, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */
 
!function( $ ) {

var JSON;
var apitxt;
if (!JSON) {
    JSON = {};
}
var apiListUrl = 'api-tools-list.json';
var eventtimes = null;
var sip_apiname = {};


//submit api
	function postApi(box,kay,post) {
		var restIdtemp = "www",
			ApiRoot = "http://" + restIdtemp + ".glamour-sales.com.cn/mobile/",
			postdate = post,
			paramString = "",
			url = ApiRoot + kay ;
		if ( kay == "") {	return false;	}

		var request = jQuery.ajax({
		  type: "POST",
		  url: url,
		  data: postdate
		});
		request.done(function(msg) {

			jQuery('#debugbox').text( '' ).hide();
			JSON = eval('(' + msg + ')');
			apitxt = msg;
			
			if (kay != ''){
				
				switch (kay) 
				   { 
				   case 'home/index': 
					 
					 var tempjson = JSON['categoryList'],
						html = "";
						jQuery.each(tempjson,function(){
							//alert(this.category + "," + this.imgUrl + "," + this.discount);
							html= html + '<li class="brandlink"><div class="hover" style="display: none;"><a href="#">&nbsp;</a></div><dl class="infobox"> <dt><a href="#" class="category" data-ref="'+ this.categoryId +'"><img width="300" alt="'+ this.category +'" src="'+ this.imgUrl +'"></a></dt><dd class=""><a href="#" class="category" data-ref="'+ this.categoryId +'"><span class="date">'+ this.endTime +'</span><span class="name">'+ this.category +'</span><span class="glsprice">'+ this.discount +'</span></a></dd></dl></li>'
						});
						jQuery('.homebrandbox .brand').html(html);
					 
					 break 
				   case 'product/list': 
					 
					 var tempjson = JSON['productList'],
						html = "";
						jQuery.each(tempjson,function(){
							//alert(this.productId + "," + this.name + "," + this.APPPrice );  .imgUrl 
							/*
<li class="XXL"><div style="display: none;" class="hover"><a title="Patyka精选保湿套装" href="http://www.glamour-sales.com.cn/1375-patyka-event/pk0-508-00002.html">&nbsp;</a></div><dl class="infobox"><dt><a title="Patyka精选保湿套装" target="_blank" href="http://www.glamour-sales.com.cn/1375-patyka-event/pk0-508-00002.html"><img width="300" height="400" src="http://media2.glamour-sales.com.cn/media/catalog/product/patyka/m/PK0-508-00002.jpg" alt="Patyka精选保湿套装"></a></dt><dd class="name">Patyka精选保湿套装</dd><dd class="glsprice "><p>RMB <span class="glsprice_nomber">690</span></p></dd><dd class="marketprice"><p>市场价 RMB <span class="mp_nomber">1380</span></p></dd><dd class="link"><a class="list_btnBuy" title="Patyka精选保湿套装" target="_blank" href="http://www.glamour-sales.com.cn/1375-patyka-event/pk0-508-00002.html">即时抢购</a></dd><dd class="fav fav2"><span class="fav_ryli">瑞丽推荐</span></dd></dl></li>
* */
							html= html + '<li class="XXL"><div style="display: none;" class="hover"><a title="Patyka精选保湿套装" href="#">&nbsp;</a></div><dl class="infobox"><dt><a title="Patyka精选保湿套装" href="#"  class="goproduct" data-ref="'+ this.productId +'><img width="300" height="400" src="http://media2.glamour-sales.com.cn/media/catalog/product/patyka/m/PK0-508-00002.jpg" alt="Patyka精选保湿套装"></a></dt><dd class="name">Patyka精选保湿套装</dd><dd class="glsprice "><p>RMB <span class="glsprice_nomber">690</span></p></dd><dd class="marketprice"><p>市场价 RMB <span class="mp_nomber">1380</span></p></dd><dd class="link"><a class="list_btnBuy" title="Patyka精选保湿套装" href="#">即时抢购</a></dd><dd class="fav fav2"><span class="fav_ryli">瑞丽推荐</span></dd></dl></li>'
						});
						jQuery('.productlist .list').html(html);
					 break 
				   case 'sortDiscountDesc': 
					 info = $(info).sort(sortDiscountDesc);
					 break 
				   default: 
					 info = $(info).sort(sortPrice);
				} 
				
				
			}

		});
		if(eventtimes){
				clearTimeout(eventtimes);
		}
	}

//login
//testToken=20120315&timeStamp=123456&type=0&pageSize=6&pageIndex=1
	jQuery(".loginsubmit").click( function () { 
		var username = jQuery( '#username' ).val()
			, password = jQuery( '#password' ).val()
			, eventtimes = null;
		//password = jQuery.md5(password);
		
		postApi('eventbox','home/index','testToken=20120315&timeStamp=123456&type=0&pageSize=20&pageIndex=1');
		jQuery('#debugbox').text( username + "," + password  );
		eventtimes = setTimeout(function(){
			jQuery('#loginPart').hide();
			jQuery('#eventListPart').show();
		},10);
	});
	
//products list
//mobile/product/list postdate:testToken=20120315&timeStamp=123456&networkType=wifi&pageSize=6&pageIndex=1&categoryId=26&filter=family=95|price=300
jQuery(".homebrandbox .category").click( function () { 
		var eventtimes = null
			, $this = $(this)
			, event = $this.attr('data-ref');
		
		//password = jQuery.md5(password);
		
		postApi('productlistbox','home/index','testToken=20120315&timeStamp=123456&networkType=wifi&pageSize=6&pageIndex=1&categoryId='+event);
		jQuery('#debugbox').text( 'category:' + event );
		
		eventtimes = setTimeout(function(){
			jQuery('#eventListPart').hide();
			jQuery('#productListPart').show();
		},10);
	});  
    $(function () {


    "use strict"
  })

}( window.jQuery );
