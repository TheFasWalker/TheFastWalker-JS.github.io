
$('document').ready(function(){
    loadGoods();
});


//загрузка товаров на страницу
function loadGoods() {
    $.getJSON('goods.json', function (data){
        //console.log(data);
	    var out = '';
	    for (var key in data){
		    out+='<p>'+data[key]['title']+'</p>';
		    out+='<p>'+data[key]['cost']+'</p>';	
		    out+='<img src="'+data[key].image+'">';
	    }
	    $('#goods').html(out);
    })
}
