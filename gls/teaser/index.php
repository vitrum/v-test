<?php
if ($_POST['myEmail']) {
	$db = mysql_connect("localhost", "root", "123456") or die("fail");

	mysql_select_db('emailtest');


    if($_POST['myEmail']!='' && preg_match("/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/",$_POST['myEmail'])==true){


    	$myemail=mysql_real_escape_string($_POST['myEmail']);
		$sql = "select entity_id from customer_email_entity where customer_email='$myemail'";
		$result = mysql_query($sql);
		if (mysql_num_rows($result)!= 0) {
			$errormassage="已经存在email";
		}
		else {

			$sql2 = "insert into customer_email_entity (customer_email,created_at) values('$myemail',NOW()) ";
			$result2 = mysql_query($sql2);
			for($i=1;$i<4;$i++)
			{


				if($_POST["friendEmail$i"]!='' && preg_match("/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/",$_POST["friendEmail$i"])==true)
				{
					$friendEmail=mysql_real_escape_string($_POST["friendEmail$i"]);
					$sql3="select entity_id from customer_email_entity where customer_email='$friendEmail'";
					$result3=mysql_query($sql3);
					if(mysql_num_rows==0)
					{
						$sql4="insert into customer_email_entity (customer_email,created_at) values ('$friendEmail',NOW())";
						$result4=mysql_query($sql4);
					}
				}

			}

		$errormassage="申请成功";

		}
    }
    else
    {
		$errormassage="请输入正确email格式";

    }
	mysql_close($db);

}
?>
<!DOCTYPE html>
<html>
<head>
	<meta charset='utf-8'>
	<title>这个秋天，和 Neiman Marcus Group 有个约会</title>
	<meta name="description" content="这个秋天，和 Neiman Marcus Group 有个约会" />

<script type="text/javascript">
//<![CDATA[
    var BLANK_URL = 'http://media2.glamour-sales.com.cn/js/blank.html';
    var BLANK_IMG = 'http://media2.glamour-sales.com.cn/js/spacer.gif';
    var SKIN_URL = 'http://media2.glamour-sales.com.cn/skin/frontend/glamour/default/';
    
    var _gaq = _gaq || [];
    
//]]>
</script>

<link rel="stylesheet" type="text/css" href="http://media2.glamour-sales.com.cn/media/fileversioner/css/2321aa7ee160c4f8edc71d96635a59ce1.0.css" media="all" />
<link rel="stylesheet" type="text/css" href="http://media2.glamour-sales.com.cn/media/fileversioner/css/4ce1b44a89e8bf4c28d3b09f59e8a8441.0.css" media="screen" />
<link rel="stylesheet" type="text/css" href="inc/jquery.fancybox.css" media="screen" />


<style>
body {background:url(http://media2.glamour-sales.com.cn/media/cmsimages/nm20120423/bg3.png) center top no-repeat; margin:0 }
p {padding:0; margin:0}
.nm-main {height:1042px; position:relative; width:960px; margin:auto;overflow:hidden}
#video-container{ width:580px; height:324px; float:left; overflow:hidden}
#video-nav { margin:202px auto 0; padding; width:566px; position:relative; height:320px; background:url(http://media2.glamour-sales.com.cn/media/cmsimages/nm20120423/videobg.jpg) center top no-repeat; }

#video-nav a { margin:4px 0 0 12px ; width:247px; height:139px; display:block; float:left; text-indent:-999em; background:url(http://media2.glamour-sales.com.cn/media/cmsimages/nm20120423/button.jpg) 0 -139px no-repeat}
*html #video-nav a { margin-left:6px;}
#video-nav #video1:hover{background-position:0 0;}
#video-nav #video2 {background-position: -247px -139px; margin-left:50px; }
#video-nav #video2:hover{background-position: -247px 0}

.popflvplayer {background:#111;  padding:10px; margin:10px}	
.teaserbox { width:1000px; margin:0 auto; position:relative;}
.snsnav { position:absolute; right:-2px; width:120px; height:26px; z-index:999;}
.snsnav a { display:block; float:left; width:60px; height:36px; text-indent:-999em;}
.snsnav .kaixin { padding-left:0px;}
.snsnav .weibo { width:58px}
.nmteaserform { width:620px; height:auto; margin:0 auto; background:#232323; position:relative; padding:8px 0 0 0; }
.nmteaserform .formbox { position:relative;}
.formline { background:url(http://media2.glamour-sales.com.cn/media/cmsimages/nm20120423/nm-formline-bg.gif) 0 0 no-repeat #232323; height:34px; line-height:34px; display:block; padding:4px 0 0 8px; }
.formline input {
    background: none repeat scroll 0 0 #FFF;
    border: medium none;
    color: #666;
    cursor: text;
    display: block;
    height: 17px;
    line-height: 18px;
    font-size:14px;
    margin: 0;
    padding: 0 0 3px;
    vertical-align: middle;
    width:500px;
    }
.submitbox { width:90px; height:30px; background:#ca403e; position:absolute; right:8px; top:8px; }
a.submit {  background:url(http://media2.glamour-sales.com.cn/media/cmsimages/nm20120423/nm-teaser-form-bg.gif) -523px -8px no-repeat; width:90px; height:30px; display:block; float:left;text-indent:-999em; }

.addmorebox { width:90px; height:30px; position:absolute; }
a.addmore { background:url(http://media2.glamour-sales.com.cn/media/cmsimages/nm20120423/nm-teaser-form-bg.gif) 0 -48px no-repeat; width:90px; height:30px; display:block; float:left;text-indent:-999em;}



.fancynav { position:absolute; right:100px; bottom:0px; width:200px; height:30px;}
a.fancybox {  display:block; width:200px; height:30px; text-indent:-999em;}
.nmrulebox { font-size:14px; line-height:18px;}
.nmrulebox h3 { font-size: 16px; line-height:22px; padding-bottom:8px; }
.nmrulebox h4 { line-height:20px}

.nm-custom-video .fancybox-skin { background:#000; box-shadow: none;}
.fancybox-wrap p { padding:6px}
.hide { display:none;}
</style>

<script type="text/javascript" src="inc/jquery-1.7.2.min.js"></script>
<script type="text/javascript" src="inc/jquery.mousewheel-3.0.6.pack.js"></script>
<script type="text/javascript" src="inc/jquery.fancybox.pack.js"></script>
</head>
<body class="page-empty  cms-page-view cms-teaser2-html">

<div class="teaserbox">
	<div class="snsnav">
		<a href="####" title="开心网" class="kaixin">kaixin</a>
		<a href="####" title="新浪微博" class="weibo">weibo</a>
	</div>
	<div class="nm-main">
<!--
		<div id="video-container1" style="display:none">

						<div class="popflvplayer">
							<a
								 href="http://www.glamour-sales.com.cn/catalog/category/video/id/2320/?keepThis=true&TB_iframe=true&height=418&width=700"
								 data-ref="http://media2.glamour-sales.com.cn/media/catalog/category/01_NeimanMarcus_SUBTITLE_V4_H264.f4v"
								 style="display:block;width:580px;height:324px"
								 id="gls_flash_video1" >
							</a>

						</div>
					
		</div>	
		<div id="video-container2" style="display:none">
			
						<div class="popflvplayer">
							<a
								href="http://www.glamour-sales.com.cn/catalog/category/video/id/2320/?keepThis=true&TB_iframe=true&height=418&width=700"
								 data-ref="http://admin.glamour-sales.com.cn/media/catalog/category/02_BergdorfGoodman_SUBTITLE_V4_H264.f4v"
								 style="display:block;width:580px;height:324px"
								 id="gls_flash_video2"  class="fancyboxnmvideo">
							</a>

						</div>

		</div>
-->
		<div id="video-nav">
			<a class="fancyboxnmvideo" id="video1" href="http://www.glamour-sales.com.cn/nm-teaser/video1.html">PLAY</a>
			<a class="fancyboxnmvideo" id="video2" href="http://www.glamour-sales.com.cn/nm-teaser/video2.html">PLAY</a>
		</div>
		<div class="nmteaserform">
			<form  name="fm" action="" method="post">
			<div class="formbox">
				<p id="line1" class="formline"><input name="myEmail" type=”text“ id="email_1" title="Email" value="" class="required-entry  validate-email" type="text" size="64"  maxlength="64" placeholder="请输入e-mail地址" /></p>
				<p id="line1" class="formline hide"><input name="friendEmail1" type=”text“ id="email_2" title="Email" value="" class="required-entry  validate-email" type="text" size="64"  maxlength="64" placeholder="请输入e-mail地址" /></p>
				<p id="line3" class="formline hide"><input name="friendEmail2" type=”text“ id="email_3" title="Email" value="" class="required-entry  validate-email" type="text" size="64"  maxlength="64" placeholder="请输入e-mail地址"/></p>
				<p id="line4" class="formline hide"><input name="friendEmail3" type=”text“ id="email_4" title="Email" value="" class="required-entry  validate-email" type="text" size="64"  maxlength="64" placeholder="请输入e-mail地址" /></p>
				<p id="line5" class="formline hide"><input name="friendEmail4" type=”text“ id="email_5" title="Email" value="" class="required-entry  validate-email" type="text" size="64"  maxlength="64" placeholder="请输入e-mail地址" /></p>
			</div>
			</form >
			<div class="submitbox"><a href="#" class="submit">submit</a></div>
			<div class="addmorebox"><a href="#" class="addmore">addmore</a></div>
		</div>
		<div class="fancynav"><a class="fancybox" href="#inline1" title="活动条款">活动条款</a></div>
	</div>
</div>
	<div id="inline1" style="width:620px;display: none;" class="nmrulebox">
		<h3>Neiman Marcus Group 中国网站提供价值 5000 元人民币的免费购物奢享体验</h3>
		<h4>有效期：2012 年 5 月 18 日至 2012 年 11 月 1 日</h4>
		<p>官方规则：</p>

		<p>无需购物即可参加，并有机会赢得大奖。法律禁止的情况除外。</p>
		<p>报名资格：本次抽奖面向中华人民共和国（中国）年满18周岁并通过网络途径报名的合法居民。仅在中国境内上网的参加者有资格报名参与本次抽奖。
		<br />但下列人员不得参与本次抽奖：
		<br />（a）Neiman Marcus Group（“主办方”）及其附属公司或子公司的员工，
		<br />（b）直接涉及本次抽奖的任何机构的员工，
		<br />（c）上述（a）或（b）项中涉及的人员的直属家庭成员以及与其同室居住的人员。<br />
		<p>报名方式：本次抽奖有两种报名方式。<br />
		2012年5月18日上午8点[北京时间]到2012年11月1日上午8点之前[北京时间]（“抽奖时间”）：
		<br />（1）登陆Neiman Marcus中国网站，完整如实地填写电子报名表并以电子邮件方式签发。
		<br />（2）按照第（1）项的规定签发邮件后，您将收到一封感谢表格，可在其中提供最多五位朋友的电子邮件地址。如果您提供的这些电子邮件地址准确且不在主办方的“退出”名单内，这五位朋友均会收到一封邮件。另外，如这五位朋友中有任何一人在本次抽奖时间内点击邮件中的链接，如实完整地填写必填项目并以邮件方式注册，您将额外获得一次本抽奖的参与资格。每人最多可获得六次抽奖资格。对于任何原因造成的报名错过、延误、不完整、被盗、字迹不清或被误导，主办方均不承担责任。任何使用自动程序或自动化技术提交的报名申请将被删除。

		<p>随机抽奖：将有 1 位中奖者获得奖品。大奖将于 2012 年 11 月 1 日从收到的所有合格报名者中抽取。中奖者将于 2012 年 11 月 1日当天或之后几天通过报名时提供的邮件地址接收到获奖通知。评奖决定为最终决定。
		<p>奖品及中奖几率：奖品为 Neiman Marcus Group中国 网站提供的价值 5000 元人民币的免费购物狂欢体验。Neiman Marcus Group中国网站免费购物狂欢体验的零售价约为 5000元人民币。奖品不得转让，不予兑换现金，且概不退换。主办方对所授予任何奖品的外观、安全性或性能不做任何承诺或保证。中奖几率取决于收到的有效报名数量。</p>
		<p>申领奖品：正当申领的所有奖品均将获得授予。<br />
		主办方客服部门将联系中奖者并协助获取奖品。奖品须以一份订单获取。不接受多个订单和退货。
		<br />中奖者在收到书面中奖通知后十（10）日内，需承担一切相关税款，并签署资格保证、合规和免责宣誓书以及税务部门要求的所有其他相关表格，否则，奖品将被收回，并另外抽取一名中奖者。<br />
		本规则中提及的 5000 元人民币的礼品卡金额是税前的。根据中国（PRC）相关税法规定，中奖者必须缴纳个人所得税。主办方将扣留相关税额，并向相关税务机关缴纳该笔税款。中奖者一经接受奖品，即表示准许主办方永久将由其提供的或属于其的姓名、照片和/或肖像、地址、声音以及声明用于任何和所有现在已知的或之后因一切商业目的而开发的媒体，无需另外提供补偿，法律禁止的情况除外。
		<br />如果根据邮件地址确定的中奖者身份存在争议，报名时提交该邮件地址的核准账户持有人须公开其有说服力的报名申请。“核准账户持有人”是指获得英特网访问供应商、在线服务供应商或其他负责分派邮件地址的组织（如企业、教育机构、机构等）分派的与所提交邮件地址域名相关的一个邮件地址的自然人。
		<br />本抽奖中奖者的姓名将被用于Neiman Marucs Group中国网站。主办方位于[中国（PRC）上海市卢湾区建国中路１０号八号桥创意园区７３０１室]。</p>

		<p>隐私：主办方将依照其隐私政策搜集参赛者的个人信息。请点击<a href="http://www.neimanmarcus.com/assistance/assistance.jsp?itemId=cat33940739" title="隐私政策"  target="_blank">http://www.neimanmarcus.com/assistance/assistance.jsp?itemId=cat33940739</a>阅读主办方的隐私政策。一经参与本次抽奖，即表明您同意主办方搜集和使用您的个人信息，并承认已经阅读并接受主办方的隐私政策。</p>
		<p>责任限制：一经报名，参与者即免除主办方、其母公司、子公司以及附属公司、各附属机构、董事、高管、员工和代理人因本次抽奖、接受或使用任何所获奖品引起的或与之有关的任何和所有责任或任何伤害、损失或毁坏，使其免受损害。</p>
		<p>其他条款：对于操作或传送方面的任何失误、疏忽、中断、删除、过失、延迟，通信线路故障、盗窃或破坏，或非法参加或更改报名，主办方不承担任何责任。对于电话网络或电话线路、计算机在线系统、服务器的任何问题或技术故障，或供应商、计算机设备、软件，因技术问题、人为失误或英特网或任何网络的信号拥挤导致或上述各种原因共同导致主办方未能收到的任何邮件或报名（包括与参与本次抽奖或下载本次抽奖的任何资料相关的，或由此给参与者或其他任何人的电脑造成的任何伤害或损失），主办方亦不承担责任。如果因电脑病毒、故障、贿赂、非法入侵、诈骗、技术故障导致本次抽奖无法按原定计划进行，或因其他任何超出主办方控制范围的原因对本次抽奖的管理、安全、公平、公正或正常实施造成破坏或影响，主办方有权自行取消任何有贿赂行为个人的报名资格，和/或取消、终止、变更或暂停本次抽奖。</p>
		<p>取消抽奖的权利: 主办方有权自行取消、终止、变更或暂停本次抽奖。</p>
		<p>法律选择：与本官方规则的订立、效力、解释和可执行性相关的一切纠纷和问题，或本次抽奖涉及的参与者和主办方的权利和义务，均受中国实体法的管辖和解释（但不考虑法律冲突）。</p>

		
	</div>
<script type="text/javascript" src="http://media2.glamour-sales.com.cn/skin/frontend/glamour/default/js/flowplayer-3.2.6.min.js"></script>

<script type="text/javascript">
//<![CDATA[

jQuery(document).ready(function(){
	
	emailPattern 	 	= /^\s*[\w-]+(\.[\w-]+)*@([\w-]+\.)+[A-Za-z]{2,7}\s*$/;
/*
	flowplayer("gls_flash_video1", {src:"http://media2.glamour-sales.com.cn/skin/frontend/glamour/default/images/product/flowplayer-3.2.7.swf", wmode: 'transparent'});
	flowplayer("gls_flash_video2", {src:"http://media2.glamour-sales.com.cn/skin/frontend/glamour/default/images/product/flowplayer-3.2.7.swf", wmode: 'transparent'});
	jQuery('#TB_closeWindowButton').click(function(e){
		$f("*").each(function() {
			this.stop();
		});
	});
*/
	jQuery("a.addmore").click(function(e){
		e.preventDefault();
		var inputNb = jQuery(".formline").size()
		,	activeNb = jQuery("p.formline:visible").size()
		,	submitOffset = jQuery(".submitbox").offset()
		,	newSubmitOffset = submitOffset.top + 38 ;

		jQuery(".formline").eq(activeNb).slideDown(150);
		jQuery(".submitbox").offset({top: newSubmitOffset});
		if ( inputNb <= activeNb +1){
			jQuery("div.addmorebox").addClass("hide");
		} 
		_gaq.push(['_trackEvent','Teaser_Mail_Add','Click']); 
		return false;
	});

	jQuery("a.submit").click(function(e){
		e.preventDefault();
		_gaq.push(['_trackEvent','Teaser_Submit_Button','Click']);
		var email1 =  jQuery.trim( jQuery("#email_1").val())
		, email2 =  jQuery.trim( jQuery("#email_2").val())
		, email3 =  jQuery.trim( jQuery("#email_3").val())
		, email4 =  jQuery.trim( jQuery("#email_4").val())
		, email5 =  jQuery.trim( jQuery("#email_5").val())
		, activeNb = jQuery("p.formline:visible").size();
		if (email1 =="") { alert("请输入您的邮件地址"); return ;}
		if( !emailPattern.test( email1 ) ){ alert("邮件地址格式不正确");return ;}
		if ( activeNb > 1 && email2 !=""){
			//if (email2 =="") { alert("请输入您的邮件地址"); return ;}
			if( !emailPattern.test( email2 ) ){ alert("邮件地址格式不正确");return ;}
		}
		if ( activeNb > 2 && email3 !=""){
			//if (email3 =="") { alert("请输入您的邮件地址"); return ;}
			if( !emailPattern.test( email3 ) ){ alert("邮件地址格式不正确");return ;}
		}
		if ( activeNb > 3 && email4 !=""){
			//if (email4 =="") { alert("请输入您的邮件地址"); return ;}
			if( !emailPattern.test( email4 ) ){ alert("邮件地址格式不正确");return ;}
		}
		if ( activeNb > 4 && email5 !=""){
			//if (email5 =="") { alert("请输入您的邮件地址"); return ;}
			if( !emailPattern.test( email5 ) ){ alert("邮件地址格式不正确");return ;}
		}
		//alert("submit!");
		jQuery("form").submit();
		_gaq.push(['_trackEvent','Teaser_Submit_Form','Click']); 
		return false;
	});
	var shareURL = 'http://www.glamour-sales.com.cn/teaser2.html';
	shareURL = window.location.href;
	jQuery('.snsnav .weibo').click(function(e) {
		e.preventDefault();
		window.open('http://service.weibo.com/share/share.php?url=' + encodeURIComponent(shareURL) + '&title='  + encodeURIComponent('美国Neiman Marcus Group中国网站约你在今年秋天见面！留下你的邮箱，获取全球最热品牌及其当季新品，品牌背后的故事等最新时尚资讯，还有机会获得价值人民币5000元的购物券。详情点击') + '&pic=' + encodeURIComponent('http://media2.glamour-sales.com.cn/media/cmsimages/nm20120423/nm-teaser-bg2.jpg') /*+ '&ralateUid=1722407475'*/);
		_gaq.push(['_trackEvent','Teaser_Sns_Weibo','Click']); 
	});
	jQuery('.snsnav .kaixin').click(function(e) {
		e.preventDefault();
		window.open('http://www.kaixin001.com/repaste/share.php?rtitle='+encodeURIComponent('美国Neiman Marcus Group中国网站约你在今年秋天见面！留下你的邮箱，获取全球最热品牌及其当季新品，品牌背后的故事等最新时尚资讯，还有机会获得价值人民币5000元的购物券。详情点击' + shareURL )+'&amp;rurl='+encodeURIComponent(shareURL)+'&amp;rcontent=&lt;%=description%&gt;','_blank','scrollbars=no,width=600,height=450,left=75,top=20,status=no,resizable=yes'); 
		_gaq.push(['_trackEvent','Teaser_Sns_Kaixin','Click']); 
	});
	
	jQuery('.fancybox').fancybox({
		wrapCSS    : 'nm-custom',
		padding: 14,
		openEffect  : 'none',
		closeEffect	: 'none',
		helpers : {
			title : {
				type : 'hide'
			}
		}
	});

	jQuery('.fancyboxnmvideo').fancybox({
		'wrapCSS'    : 'nm-custom-video',
		'width' : 640,
		'height' : 360,
		'padding': 14,
		'scrolling' : 'no',
		'overlayShow' : false,
			'autoScale' : false,
			'transitionIn' : 'none',
			'transitionOut' : 'none',
		'type'	: 'iframe' //tweek the other, do not change this;
	});
	
/*
	jQuery("a.submit").click(function(){
		var subError = "1";
		jQuery(".formbox input").each(function (index, domEle) { 
			var $this = jQuery(this)
			,	tempMail = jQuery.trim( $this.val());
			if ( index == "0" ) {
				if (tempMail =="") { alert("请输入您的邮件地址"); return ;}
				if( !emailPattern.test( tempMail ) ){ alert("邮件地址格式不正确");return ;}

			} else if ( index != "0" && tempMail != "" ){
				if( !emailPattern.test( tempMail ) ){ alert("邮件地址格式不正确");return ;}
			}
			alert("submit!");
			jQuery("form").submit( function () {
				return false;
			});
		});
		return false;
	});
	*/

	var alertMsg = "<?php  echo $errormassage; ?>";
	if ( alertMsg !="") { alert(alertMsg); }
});

//]]>
</script>   
<script type="text/javascript">

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-31683452-1']);
  _gaq.push(['_setDomainName', 'neiman.com.cn']);
  _gaq.push(['_setAllowLinker', true]);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

</script>
				
</body>
</html>
