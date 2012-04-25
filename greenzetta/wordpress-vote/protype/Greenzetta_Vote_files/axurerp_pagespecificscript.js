
var PageName = 'Greenzetta Vote';
var PageId = '30ce964cbd6547ae931e1aa08936040f'
var PageUrl = 'Greenzetta_Vote.html'
document.title = 'Greenzetta Vote';
var PageNotes = 
{
"pageName":"Greenzetta Vote",
"showNotesNames":"False"}
var $OnLoadVariable = '';

var $CSUM;

var hasQuery = false;
var query = window.location.hash.substring(1);
if (query.length > 0) hasQuery = true;
var vars = query.split("&");
for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (pair[0].length > 0) eval("$" + pair[0] + " = decodeURIComponent(pair[1]);");
} 

if (hasQuery && $CSUM != 1) {
alert('Prototype Warning: The variable values were too long to pass to this page.\nIf you are using IE, using Firefox will support more data.');
}

function GetQuerystring() {
    return '#OnLoadVariable=' + encodeURIComponent($OnLoadVariable) + '&CSUM=1';
}

function PopulateVariables(value) {
    var d = new Date();
  value = value.replace(/\[\[OnLoadVariable\]\]/g, $OnLoadVariable);
  value = value.replace(/\[\[PageName\]\]/g, PageName);
  value = value.replace(/\[\[GenDay\]\]/g, '24');
  value = value.replace(/\[\[GenMonth\]\]/g, '4');
  value = value.replace(/\[\[GenMonthName\]\]/g, '四月');
  value = value.replace(/\[\[GenDayOfWeek\]\]/g, '星期二');
  value = value.replace(/\[\[GenYear\]\]/g, '2012');
  value = value.replace(/\[\[Day\]\]/g, d.getDate());
  value = value.replace(/\[\[Month\]\]/g, d.getMonth() + 1);
  value = value.replace(/\[\[MonthName\]\]/g, GetMonthString(d.getMonth()));
  value = value.replace(/\[\[DayOfWeek\]\]/g, GetDayString(d.getDay()));
  value = value.replace(/\[\[Year\]\]/g, d.getFullYear());
  return value;
}

function OnLoad(e) {

}

var u3 = document.getElementById('u3');
gv_vAlignTable['u3'] = 'center';
var u16 = document.getElementById('u16');

var u12 = document.getElementById('u12');
gv_vAlignTable['u12'] = 'center';
var u15 = document.getElementById('u15');

u15.style.cursor = 'pointer';
if (bIE) u15.attachEvent("onclick", Clicku15);
else u15.addEventListener("click", Clicku15, true);
function Clicku15(e)
{
windowEvent = e;


if (true) {

	self.location.href="finish_vote_1.html" + GetQuerystring();

}

}
gv_vAlignTable['u15'] = 'top';
var u4 = document.getElementById('u4');

var u0 = document.getElementById('u0');

var u8 = document.getElementById('u8');
gv_vAlignTable['u8'] = 'center';
var u10 = document.getElementById('u10');

var u17 = document.getElementById('u17');
gv_vAlignTable['u17'] = 'top';
var u5 = document.getElementById('u5');

var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'center';
var u9 = document.getElementById('u9');

u9.style.cursor = 'pointer';
if (bIE) u9.attachEvent("onclick", Clicku9);
else u9.addEventListener("click", Clicku9, true);
function Clicku9(e)
{
windowEvent = e;


if (true) {

	self.location.href="finish_vote_1.html" + GetQuerystring();

}

}
gv_vAlignTable['u9'] = 'top';
var u14 = document.getElementById('u14');
gv_vAlignTable['u14'] = 'center';
var u6 = document.getElementById('u6');
gv_vAlignTable['u6'] = 'center';
var u2 = document.getElementById('u2');

var u11 = document.getElementById('u11');

var u13 = document.getElementById('u13');

u13.style.cursor = 'pointer';
if (bIE) u13.attachEvent("onclick", Clicku13);
else u13.addEventListener("click", Clicku13, true);
function Clicku13(e)
{
windowEvent = e;


if (true) {

	self.location.href="finish_vote_2.html" + GetQuerystring();

}

}

var u7 = document.getElementById('u7');

u7.style.cursor = 'pointer';
if (bIE) u7.attachEvent("onclick", Clicku7);
else u7.addEventListener("click", Clicku7, true);
function Clicku7(e)
{
windowEvent = e;


if (true) {

	self.location.href="finish_vote_2.html" + GetQuerystring();

}

}

if (window.OnLoad) OnLoad();
