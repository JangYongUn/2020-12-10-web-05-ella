function onGet(r){
    var html, i;
    for(var i in r){
        html  = '<img src="'+r[i].src+'" alt="'+r[i].title+'">';
        html += '<div class="wrap">';
        html += '<div class="title">'+r[i].title+'</div>';
        html += '<div class="fa fa-heart" aria-hidden="true">♡</div>';
        html += '</div>';
        html += '<div class="summary">'+r[i].title+'/div>';
        html += '<div class="price">$189.00</div>';
        html += '<div class="fa fa-star">☆☆☆☆☆</div>';

    }
}



$.get('../json/product.json', onGet);








function genStar(v) {
	for(var i=1, html=''; i<6; i++) {
		if(Math.ceil(v) >= i) html += '<i class="star fa fa-star"></i>';
	}
	return html;
}

function onGet(r) {
	var i, html;
	for(i in r) {
		html  = '<li class="prd">';
		html += '	<div class="img-wrap">';
		html += '		<img src="'+r[i].src+'" style="width: 100%;">';
		html += '	</div>';
		html += '	<div class="info-wrapper">';
		html += '		<h3 class="title">';
		html += '			<span>'+r[i].title+'</span>';
		html += '			<i class="far fa-heart"></i>';
		html += '		</h3>';
		html += '		<p class="summary">'+r[i].summary+'</p>';
		html += '		<div class="price">'+r[i].salePrice+'</div>';
		html += '		<div class="star-wrap"></div>';
		html += '	</div>';
		html += '</li>';
		console.log( genStar(r[i].star) );
		$(html).appendTo(".wrapper > .prd-wrapper").find(".star-wrap").html(genStar(r[i].star));
	}
}

$.get('../json/products.json', onGet);