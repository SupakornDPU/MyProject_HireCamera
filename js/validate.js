// ! Validate ตัวเลข
function checkValidate() {
    
    // ! Check Username
    var regText = /^[-\w\.\$@\*\!]{1,30}$/;
    let textUsername;
    if (!regText.test(document.getElementById("typeUsername").value)) {
        textUsername = "กรุณากรอก ชื่อผู้ใช้งาน.";
    } else {
        textUsername = "";
    }
    document.getElementById("textUsername").innerHTML = textUsername;

    // ! Check Password
    var regPassword = /^[-\w\.\$@\*\!]{1,30}$/;
    let textPassword;

    if (!regPassword.test(document.getElementById("typePassword").value)) {
        textPassword = "กรุณากรอก รหัสผ่าน.";
    } else {
        textPassword = "";
    }
    document.getElementById("textPassword").innerHTML = textPassword;

    // ! ConfirmPassword
    let textConfirmPassword;

    if (document.getElementById("typeConfirmPassword").value != document.getElementById("typePassword").value) {
        textConfirmPassword = "กรุณากรอก รหัสผ่านให้ตรงกัน.";
    } else {
        textConfirmPassword = "";
    }
    document.getElementById("textConfirmPassword").innerHTML = textConfirmPassword;

    // ! Check Firstname
    var reg = /^\S*[^0-9]$/;
    let textFirstname;
    if (!reg.test(document.getElementById("typeFirstname").value)) {
        textFirstname = "กรุณากรอก ชื่อจริง.";
    } else {
        textFirstname = "";
    }
    document.getElementById("textFirstname").innerHTML = textFirstname;

    // ! Check Lastname
    var reg = /^\S*[^0-9]$/;
    let textLastname;
    if (!reg.test(document.getElementById("typeLastName").value)) {
        textLastname = "กรุณากรอก นามสกุล.";
    } else {
        textLastname = "";
    }
    document.getElementById("textLastname").innerHTML = textLastname;

    // ! Check Email
    var reg = /^\S*[^0-9]$/;
    let textEmail;
    if (!reg.test(document.getElementById("typeEmail").value)) {
        textEmail = "กรุณากรอก อีเมล.";
    } else {
        textEmail = "";
    }
    document.getElementById("textEmail").innerHTML = textEmail;

    // ! Check PhoneNumber
    var reg = /^\d{3}\d{3}\d{4}$/;
    let textPhone;
    if (!reg.test(document.getElementById("typeTel").value)) {
        textPhone = "กรุณากรอก เบอร์โทรศัพท์.";
    } else {
        textPhone = "";
    }
    document.getElementById("textMobilePhone").innerHTML = textPhone;

    // ! Check Address
    var reg = /./;
    let textAddress;
    if (!reg.test(document.getElementById("typeAddress").value)) {
        textAddress = "กรุณากรอก ที่อยู่.";
    } else {
        textAddress = "";
    }
    document.getElementById("textAddress").innerHTML = textAddress;
}

