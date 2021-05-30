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