var data = [
    new Order(32823, new Date(), "Code dạo ký sự", "200.000 VND", true),
    new Order(32823, new Date(), "Code dạo ký sự", "200.000 VND", true),
    new Order(32823, new Date(), "Code dạo ký sự", "200.000 VND", true),
    new Order(32823, new Date(), "Code dạo ký sự", "200.000 VND", true),
    new Order(32823, new Date(), "Code dạo ký sự", "200.000 VND", true),
]

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
    for(var item of data) {
        addRow(item.id, item.date, item.content, item.total, item.status);
    }
    
    $('#name')[0].innerHTML = account.uname;
});

function Order(id, date, content, total, status) {
    this.id = id;
    this.date = date;
    this.content = content;
    this.total = total;
    this.status = status;
} 

function addRow(id, date, content, total, status) {
    var row = "<tr>";
    row += `<td><a href="../Custom/order-detail.html">${id}</a></td>`;
    row += `<td>${date.getDate()}/${date.getMonth()}/${date.getFullYear()}</td>`;
    row += `<td>${content}</td>`;
    row += `<td>${total}</td>`;
    var title;
    
    if(status) {
        title = "Giao hàng thành công";
    } else {
        title = "Giao hàng thất bại"
    }

    row += `<td>${title}</td>`;
    row += "</tr>";

    $("#order-table").append(row);
}