function ktTen() {
    var hoten= $("#ten").val();
    var pattern= /^([a-zA-z][a-zA-z0-9]{4,})$/;
    if(pattern.test(hoten))
        $("#tenError").text("");
    else
        $("#tenError").text("Vui lòng nhập ít nhất 5 ký tự");
}

function ktMk() {
    var mk= $("#mk").val();
    var pattern= /^([A-Z]{1,}[a-z]{1,}[0-9]{1,})$/;
    if(pattern.test(mk))
        $("#mkError").text("");
    else
        $("#mkError").text("Vui lòng bao gồm ký tự hoa, thường, số");
}

function ktSdt() {
    var sdt= $("#sdt").val();
    var pattern= /^((03|07|08|09)[0-9]{8})$/;
    if(pattern.test(sdt))
        $("#sdtError").text("");
    else
        $("#sdtError").text("Vui lòng nhập số hợp lệ");
}

function ktEmail() {
    var email= $("#email").val();
    var pattern= /^([a-zA-Z]{1,}[0-9]{0,1}@gmail\.com)$/;
    if(pattern.test(email))
        $("#emailError").text("");
    else
        $("#emailError").text("Vui lòng bao gồm ký tự hoa, thường, số");
}