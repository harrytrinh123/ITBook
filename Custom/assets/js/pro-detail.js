$('#btn-cart').hover(function () {
    var modalId = $(this).data('target');
    $(modalId).modal('show');
});

$(document).ready(() => {
     
    
})

var i = 3;
$('#add_to_cart').click(function(){
    
    var image = $('#carouselExampleCaptions > div > div:nth-child(2) > img').attr('src');
    var tenSach = $('.book_detail_tit').text();
    var gia = $('.book_detail_pri').text();
    var sl = $('.num-product').val();
    console.log(sl);
    var tongTien = parseFloat(gia.replace('.', '')) * parseFloat(sl);
    var row = 
    `<tr>
        <th>${++i}</th>
        <th scope="row">
            <img class="img-detail" src="${image}" alt="">
        </th>
        <th scope="row">
            ${tenSach}
            <div class="xoaMuaSau">
            <a href="#">Xóa</a>
            <a href="#">Để dành mua sau</a>
            </div>
        </th>
        <td>${gia}</td>
        <td>
            <input class="num-product" type="number" value="${sl}">
        </td>
        <td>${tongTien.toString()}</td>
    </tr>`
    
    var table = $('.table tbody');
    table.append(row);
    $('#num-cart').text(i);
}); 