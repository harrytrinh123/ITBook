var account = {
    uname : "Nguyen Hong Dat",
    pwd : "12345",
    address : "TP. HCM",
    email: "abcd@gmail.com",
    sex: true,
    phone : "0965875412",
    birthday: ""
}


$(document).ready(() => {
    loadDate();
    loadInfo(account);

    $('#name')[0].innerHTML = account.uname;
});

$('#month').on('change', () => {
    var value = $('#month').val();
    loadDay(value);
});

$('#check-change').click(() => {
    if($('#check-change')[0].checked) {
        $('.password-change').show();
    } else {
        $('.password-change').hide();
    }
})


function loadDate() {
    var date = new Date();
    var year = date.getFullYear();

    for(var i = year; i >= year-100; i--) {
        $('#year').append(new Option(i, i));
    }

    for(var i = 1; i <= 31; i++) {
        $('#day').append(new Option(i, i));
    }
}

function loadDay(value) {
    $('#day option').remove()
    $('#day').append(new Option("Ngày", 0));

    var n = 30;

    switch(Number(value)) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            n = 31;
            break;
        case 2:
            n = 29;
            break;
    }

    for(var i = 1; i <= n; i++) {
        $('#day').append(new Option(i, i));
    }
}

function loadInfo(acc) {
    var uname = $('#uname')[0];
    var phone = $('#phone')[0];
    var email = $('#email')[0];
    var sex = $('input[name="sex"]');

    uname.value = acc.uname;
    phone.value = acc.phone;
    address.value = acc.address;
    email.value = acc.email;

    if(!acc.sex) {
        sex[1].checked = true;
    }
}


$('#update').click(() => {
    
    var uname = $('#uname')[0];
    var pwd = $('#pwd')[0];
    var new_pwd = $('#new-pwd')[0];
    var re_pwd = $('#re-pwd')[0];
    var phone = $('#phone')[0];
    var email = $('#email')[0];
    var check = $('#check-change')[0];
    var form = $('#form')[0];

    uname.setCustomValidity("");
    phone.setCustomValidity("");
    email.setCustomValidity("");
    new_pwd.setCustomValidity("");
    re_pwd.setCustomValidity("");

    if(!uname.checkValidity()) {
        uname.setCustomValidity("Không chứa kí tự đặc biệt");
    }

    if(!new_pwd.checkValidity()) {
        new_pwd.setCustomValidity("Từ 8 kí tự trở lên");
    }

    if(!re_pwd.checkValidity()) {
        re_pwd.setCustomValidity("Từ 8 kí tự trở lên");
    }

    if(!phone.checkValidity()) {
        phone.setCustomValidity("Số diện thoại không phù hợp");
    }

    form.reportValidity();
    if(uname.checkValidity() 
        && phone.checkValidity() 
        && email.checkValidity() ) {
            if(check.checked) {
                if(pwd.value === account.pwd) {
                    if(new_pwd.value === re_pwd.value) {
                        form.reportValidity();
                        form.submit();
                    }
                    else {
                        alert('Nhập lại mật khẩu mới');
                    }
                }
                else {
                    alert('Mật khẩu không đúng');
                }
            } else {
                form.submit();
            }
    }
});