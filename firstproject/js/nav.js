var obj = null;
var As = document.getElementById('topnav').getElementByTagName('a');
obj = AS[0];
for (i = 1; i < As.length; i++) {
	if (window.location.href.indexOf(As[i].href) >= 0) {
		obj = As[i];
	}
}
obj.id = 'topnav_current'