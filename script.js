'use strict'
$('document').ready(function(){
    loadGoods();
});


//загрузка товаров на страницу
function loadGoods() {
    $.getJSON('goods.json', function (data){
        //console.log(data);
	    var out = '';
	    for (var key on data){
		    out+='<p>'+data[key]['title']+'</p>';
		    out+='<p>'+data[key]['cost']+'</p>';		    
	    }
	    $('#goods').html(out);
    })
}
