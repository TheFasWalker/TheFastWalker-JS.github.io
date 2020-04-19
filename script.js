
$('document').ready(function(){
    loadGoods();
});


//загрузка товаров на страницу
function loadGoods() {
    $.getJSON('goods.json', function (data){
        //console.log(data);
	    var out = '';
	    for (var key in data){
		    out+='<div class="single-goods">';
		    out+='<p>название'+data[key]['title']+'</p>';
		    out+='<p>Стоимость'+data[key]['cost']+'</p>';	
		    out+='<img src="'+data[key].image+'">';
		    out+='<button>Купить</button>';
		    out+='</div>';
	    }
	    $('#goods').html(out);
    })
}
