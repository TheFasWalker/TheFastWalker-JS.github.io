'use strict'
$('document').ready(function(){
    loadGoods();
});


//загрузка товаров на страницу
function loadGoods() {
    $.getJSON('goods.json', function (data){
        console.log(data);
    })
}
