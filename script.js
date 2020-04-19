var cart = {}; //массив корзины
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
		    out+='<p>Стоимость'+data[key]['price']+'</p>';	
		    out+='<img src="'+data[key].image+'">';
		    out+='<button class="toCard" data-art="'key'">Купить</button>'; // возможна ошибка из за  key!!!! 
		    out+='</div>';
	    }
	    $('#goods').html(out);
	    $('button.toCard').on('click',addToCard);
    });
}
//добавление в корзину
function addToCard() {
	var articul = $(this).attr('data-art');
	if (cart[articul]!=undefined) {
		cart[articul]++;
	} 
	else
		{cart[articul] = 1;
		};
	
}