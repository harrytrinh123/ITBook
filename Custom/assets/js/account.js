$(document).ready(() => {
    loadDate();
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


