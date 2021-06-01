var account = [
    {
        uname: "hongdat",
        pwd: "12345678"
    },
];

function checkUserName(uname) {
    var regex = /^\w+$/;
    return Boolean(uname.match(regex));
}

function checkPassword(pwd) {
    var regex = /^\S{8,}$/;
    return Boolean(pwd.match(regex));
}

function checkPhone(phone) {
    var regex = /^^[0][3|5|7|8|9]\d{8}$/;
    return Boolean(phone.match(regex));
}

function checkEmail(email) {
    var regex = /^\w+(.\w+)*@\w+(\.\w+)+$/;
    return Boolean(email.match(regex));
}

$('#login-btn').click(() => {
    $('#form')[0].reportValidity();
    if(account.some((item, index) => {
        return $('#uname').val() === item.uname && $('#pwd').val() === item.pwd;
    })) {
        $('#form')[0].submit();
    } else {
        $('.notify-box').show();
    }
});

$('.accep-btn').click(() => {
    $('.notify-box').hide();
});

$('#regist-btn').click(() => {
    
    var uname = $('#uname')[0];
    var pwd = $('#pwd')[0];
    var phone = $('#phone')[0];
    var email = $('#email')[0];
    var form = $('#form')[0];

    uname.setCustomValidity("");
    pwd.setCustomValidity("");
    phone.setCustomValidity("");
    email.setCustomValidity("");

    if(!uname.checkValidity()) {
        uname.setCustomValidity("Không chứa kí tự đặc biệt");
    }

    if(!pwd.checkValidity()) {
        pwd.setCustomValidity("Từ 8 kí tự trở lên");
    }

    if(!phone.checkValidity()) {
        phone.setCustomValidity("Số diện thoại không phù hợp");
    }

    form.reportValidity();
    if(uname.checkValidity() && pwd.checkValidity() && phone.checkValidity() && email.checkValidity() && $('#accept')[0].checkValidity()) {
        form.submit();
    }
});


// ============== index.html ==========
var list_product = [
    {
        name : "Code dạo ký sự",
        price : "200.000",
        img : "images/code-dao-ki-su.jpg"
    },
    {
        name : "The clean code",
        price : "169.000",
        img : "images/clean-code.jpg"
    },
    {
        name : "Gián điệp mạng",
        price : "150.000",
        img : "images/gian-diep-mang.jpg"
    },
    {
        name : "Liệu IT đã hết thời?",
        price : "150.000",
        img : "images/lieu-it-da-het-thoi.jpg"
    },
    {
        name : "Lược sử hacker.",
        price : "150.000",
        img : "images/sach-hay-ve-it-cong-nghe-hacker-luoc-su.jpg"
    },
    {
        name : "The design of everyday things",
        price : "150.000",
        img : "images/the-design-of-everyday-things.jpg"
    },
    {
        name : "Nghệ thuật ẩn mình.",
        price : "150.000",
        img : "images/nghe_thuat_an_minh.jpg"
    },
    {
        name : "How technology works?",
        price : "150.000",
        img : "images/how-technology-works.jpg"
    }
];

$(document).ready(() => {
    $('.btn-cart').get().forEach((item, index) => {
        item.dataset.index = index;
    });
})


$('#btn-cart').hover(function () {
    var modalId = $(this).data('target');
    $(modalId).modal('show');

});

$('.btn-cart').click((e) => {
    var index = e.currentTarget.dataset.index;
    var table = $('.modal-body .table tbody');
    var length = table.children().length;
    var row = `
        <tr>
            <th>${++length}</th>
            <th scope="row">
            <img class="img-detail" src=${list_product[index].img} alt="">
            </th>
            <th scope="row">
            ${list_product[index].name}
            <div class="xoaMuaSau">
                <a href="#">Xóa</a>
                <a href="#">Để dành mua sau</a>
            </div>
            </th>
            <td>${list_product[index].price}</td>
            <td>
            <input class="num-product" type="number" value="1">
            </td>
            <td>${list_product[index].price}</td>
        </tr>
    `;

    table.append(row);
    $('#num-cart').text(length);
});