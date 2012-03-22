<script>
var json   =   new   Array();    
json   [0]   =   new   Array("2011秋冬「Decades 复古系列」- Look 10","####","http://cdn.next.co.uk/COMMON/Items/Default/Default/Publications/X49/shotview/3350/827-108-X49s.jpg","1980");      
json   [1]   =   new   Array("2011秋冬「Decades 复古系列」- Look 11","####","http://cdn.next.co.uk/COMMON/Items/Default/Default/Publications/X49/shotview/3350/827-108-X49s.jpg","7680"); 
json   [2]   =   new   Array("2011秋冬「Decades 复古系列」- Look 12","####","http://cdn.next.co.uk/COMMON/Items/Default/Default/Publications/X49/shotview/3350/827-108-X49s.jpg","880"); 
json   [3]   =   new   Array("2011秋冬「Decades 复古系列」- Look 13","####","http://cdn.next.co.uk/COMMON/Items/Default/Default/Publications/X49/shotview/3350/827-108-X49s.jpg","980"); 
jQuery(document).ready(function() {
	var retCnt = json.length;
	jQuery("#list li.XXL").each(function(i){
		var inHtml = '<li><dl class="infobox"><dt><a  href="'+ json[i][1] +'"><img src="'+ json[i][2] +'" width="300" height="495" /><'+'/a><'+'/dt>'+'<'+'/dl><'+'/li>';
		if (retCnt >0 && i < retCnt){
			jQuery(this).after(inHtml);
		}
	});
});	
</script>
