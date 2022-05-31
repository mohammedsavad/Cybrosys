$().ready(function(){
    $("#name_warning").hide()
    $("#email_warning").hide()
    $("#date_warning").hide()
    $("#address_warning").hide()
    $("#gender_warning").hide()
    $('#password_warning').hide()
    $('#cpassword_warning').hide();
})
states = [false,false,false,false]

$(document).on('submit','#myform',function (e) {
    e.preventDefault();
    flag = true
    states.forEach(state => {
        if (!state){
            flag = false
        }
    });
    if (flag){
        $(location).attr('href',"https://www.cybrosys.com")
    }
    else{
        alert("Enter valid detail")
    }
});

$('#eye').click(function(){
    const icon = $(this).attr('class') === 'fa fa-light fa-eye' ? 'fa fa-light fa-eye-slash' : 'fa fa-light fa-eye';
    $(this).attr('class', icon);
    const state = $('#password').attr('type') === 'password' ? 'text' : 'password';
    $('#password').attr('type', state);
    $('#cpassword').attr('type', state);

});


$('#name').change(function (e) { 
    e.preventDefault();
    if ($("#name").val().length < 3){
        $("#name_warning").show();
        states[0] = false
    }else{
        $("#name_warning").hide()
        states[0] = true
    }
});

$('#email').change(function (e) { 
    e.preventDefault();
    const email_format = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/
    if($("#email").val() == ''){
        $('#email_warning').show();
    }else if(!email_format.test($('#email').val())){
        $('#email_warning').show();
        states[1] = false
    }else{
        $("#email_warning").hide()
        states[1] = true
    }
});

$('#date').blur(function (e) { 
    e.preventDefault();
    dob = new Date($(this).val());
    var today = new Date()
    var age = Math.floor((today - dob)/(356.25 * 24 * 60 * 60 * 1000));
    $('#age').val(age);
});

$('#password').change(function (e) { 
    e.preventDefault();
    var pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&*]).{8,20}$/;
    pwd = $(this).val()
    if( pwd !== '' && pattern.test(pwd)){
        $('#password_warning').hide();
        states[2] = true
    }else{
        $('#password_warning').show();
        states[2] = false
    }
});

$('#cpassword').change(function (e) { 
    e.preventDefault();
    if($(this).val() !== $('#password').val()){
        $('#cpassword_warning').show();
        states[3] = false
    }else{
        $('#cpassword_warning').hide();
        states[3] = true
    }
});