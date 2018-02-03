$(document).ready(function() {
	loadProduct();
});

var loadProduct = function() {
	var p = window.location.href.slice( window.location.href.indexOf( '?' ) + 1 );
	var p_id = p.split("&")[0].split("=")[1];
	var p_name = p.split("&")[1].split("=")[1].replace(/\%20/g, " ");
	var p_price = p.split("&")[2].split("=")[1];
	var p_imageurl = p.split("&")[3].split("=")[1];

	$("#product-name").text(p_name);
	$("#product-price").text("$ " + p_price);
	$("#product-image").attr("src", p_imageurl);
}