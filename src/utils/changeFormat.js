// Thay đổi dữ liệu birth, date từ dd/mm/yyyy thành yyyy-mm-dd
function changeFormat(val) {
    const myArr = val.split('/');

    let year = myArr[2];
    let month = myArr[1];
    let day = myArr[0];

    let formatDate = year + '-' + month + '-' + day;
    return formatDate;
}

export { changeFormat };
