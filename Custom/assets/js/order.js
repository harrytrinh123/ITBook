$(document).ready(() => {
    addRow(32823, new Date(), "Code dạo ký sự", "200.000 VND", true);
});

function addRow(id, date, content, total, status) {
    var row = "<tr>";
    row += `<td><a href="#">${id}</a></td>`;
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