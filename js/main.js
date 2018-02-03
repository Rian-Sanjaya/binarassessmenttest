var login = function() {
	var request = new XMLHttpRequest();

	request.open('POST', 'https://private-anon-8f122477b6-testbinar.apiary-mock.com/auth/login');

	request.setRequestHeader('Content-Type', 'application/json');

	request.onreadystatechange = function () {
	  if (this.readyState === 4) {
	    console.log('Status:', this.status);
	    console.log('Headers:', this.getAllResponseHeaders());
	    console.log('Body:', this.responseText);
	  }
	};

	var body = {
	  'email': 'bot@example.com',
	  'password': 'bot'
	};

	request.send(JSON.stringify(body));
}

var getProducts = function() {
	var request = new XMLHttpRequest();

	request.open('GET', 'https://private-anon-8f122477b6-testbinar.apiary-mock.com/v1/products');

	request.setRequestHeader('Authorization', 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE1MTU1ODA2Njh9.ezqLNjvL6z18Kw5n1j_ak-fFEB5oBCSncGUUXF3zYAs');

	//error handling for connection to the server
	request.onerror = function(err) {
		console.log(err);
	};

	request.onreadystatechange = function () {
	  if (this.readyState === 4) {
	    console.log('Status:', this.status);
	    console.log('Headers:', this.getAllResponseHeaders());
	    console.log('Body:', this.responseText);
	    var body = JSON.parse(this.responseText);
	    var results = body.result;
	    // console.log(body);
	    results.forEach(function(result) {
	    	// console.log(result.name + ' - ' + result.price + ' - ' + result.imageurl);
	    	var html;
	    	html = "" +
	    		"<div id='" + result.id + "' class='product'>" +
	    			"<div class='mod'>" +
		    			"<a class='mod-item' href='#' onclick=\"editProduct(" + result.id + ", '" + result.name + "', " + result.price + ", '" + result.imageurl + "')\"><i class='fas fa-edit fa-lg'></i></a>" +
		    			"<a class='mod-item' href='#' data-toggle='modal' data-target='#myModal'><i class='fas fa-trash-alt fa-lg'></i></a>" +
	    			"</div>" +
	    			"<a href='#' onclick=\"showProduct(" + result.id + ", '" + result.name + "', " + result.price + ", '" + result.imageurl + "')\">" +
		    			"<img src='" + result.imageurl + "'>" +
		    			"<div class='p-text'>" +
			    			"<div>" + result.name + "</div>" +
			    			"<div>$ "  + result.price + "</div>" +
			    		"</div>" +
	    			"</a>"
	    		"</div>";
	    	$("#products").append(html);
	    });
	  }
	};

	request.send();	
}

var showProduct = function(id, name, price, imageurl) {
	var url = "show.html?id=" + id + "&name=" + name + "&price=" + price + "&imageurl=" + imageurl

	window.open(url , "_self");
}

var editProduct = function(id, name, price, imageurl) {
	var url = "edit.html?id=" + id + "&name=" + name + "&price=" + price + "&imageurl=" + imageurl

	window.open(url , "_self");
}

$(document).ready(function() {
	getProducts();
});