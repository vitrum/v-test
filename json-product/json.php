<?php 
$interval = 60 * 1; // 
header ("Cache-Control: max-age=$interval"); 

$brand = array();
 $brand[]="diesel";
 $brand[]="pangea";
 $brand[]="BCBG";
 $brand[]="phyto";
 $brand[]="lagostina";
 
 $type = array();
 $type[]="S";
 $type[]="M";
 $type[]="L";
 $type[]="X";
 $type[]="XL";

 $imgurl = array();
 $imgurl[]="http://media2.glamour-sales.com.cn/media/image/dieselwoman/m/size/x/kr/1/kf/1/YTo0OntzOjI6Il93IjtOO3M6MjoiX2giO047czo0OiJmaWxlIjtzOjMyOiIvZGllc2Vsd29tYW4vbS9ESTAtMTA2LTAwMDk2LmpwZyI7czo1OiJfYXR0ciI7czoxMToic21hbGxfaW1hZ2UiO30=/DI0-106-00096.jpg";
 $imgurl[]="http://media2.glamour-sales.com.cn/media/image/Pangea/m/size/x/kr/1/kf/1/YTo0OntzOjI6Il93IjtOO3M6MjoiX2giO047czo0OiJmaWxlIjtzOjI3OiIvUGFuZ2VhL20vUEcwLTUyOC0wMDAxNC5qcGciO3M6NToiX2F0dHIiO3M6MTE6InNtYWxsX2ltYWdlIjt9/PG0-528-00014.jpg";
 $imgurl[]="http://media2.glamour-sales.com.cn/media/image/bcbg/m/size/x/kr/1/kf/1/YTo0OntzOjI6Il93IjtOO3M6MjoiX2giO047czo0OiJmaWxlIjtzOjI1OiIvYmNiZy9tL0JDMC03MDEtMDAwMjIuanBnIjtzOjU6Il9hdHRyIjtzOjExOiJzbWFsbF9pbWFnZSI7fQ==/BC0-701-00022.jpg";
 $imgurl[]="http://media2.glamour-sales.com.cn/media/image/phyto/m/size/x/kr/1/kf/1/YTo0OntzOjI6Il93IjtOO3M6MjoiX2giO047czo0OiJmaWxlIjtzOjI2OiIvcGh5dG8vbS9QVDAtNTA5LTAwMDExLmpwZyI7czo1OiJfYXR0ciI7czoxMToic21hbGxfaW1hZ2UiO30=/PT0-509-00011.jpg";
 $imgurl[]="http://media2.glamour-sales.com.cn/media/image/lagostina/m/size/x/kr/1/kf/1/YTo0OntzOjI6Il93IjtOO3M6MjoiX2giO047czo0OiJmaWxlIjtzOjMwOiIvbGFnb3N0aW5hL20vTEcwLTkwMS0wMDAwNC5qcGciO3M6NToiX2F0dHIiO3M6MTE6InNtYWxsX2ltYWdlIjt9/LG0-901-00004.jpg";


 $myarr=array();

 for($i=0;$i<60;$i++)
 {
    $price = rand(1,3999);
    $discount = rand(1,10);
    $count = rand(0,4);
    $thisbrand = $brand[$count];
	$thistype = $type[$count];
	$thisimgurl = $imgurl[$count];
	
    $product = array("price"=>$price, "discount"=>$discount,"brand" =>$thisbrand,"type" =>$thistype,

     "html" =>"<div class='hover' ><a href='product-st0.html?glscode=ST0-102-00003'>&nbsp;</a></div>" .
"<dl class='infobox'>" .
"<dt><a href='product-st0.html?glscode=ST0-102-00003'><img src='$thisimgurl'></a></dt>" .
"<dd class='name'>$thisbrand.$i.$thistype</dd>" .
"<dd class='glsprice'><p>RMB:<span class='glsprice_nomber'>$price</span></p></dd>" .
"<dd class='marketprice'><p>折扣:<span class='mp_nomber'>$discount</span></p></dd>" .
"<dd class='link'><a href='product-st0.html?glscode=ST0-102-00003'>即时抢购</a></dd>" .
"<dd class='fav'><span class='fav_ryli'>瑞丽推荐</span></dd></dl>"
    );


    $myarr['products'][] = $product;
 }


echo json_encode($myarr);

?>

