
    var item={};


$(document).ready(function () {
    $('#eeeee').hide();
    $('#cust').hide();
    $('.clist').hide();
    $('#invoice').hide();
    $('.billing').hide();
    $('#prdct_warning_number').hide();
    $('#prdct_warning_alph').hide();
    $('#cust_warning_name').hide();
    $('#cust_warning_number').hide();



   
$('#submit').click(function (e) { 
    e.preventDefault();
    var name=$("input[name='product']").val();
    var price=$("input[name='perprice']").val();
    item[name]=price;
    
    
    $('#values').append("<tr data-name='"+name+"' data-price='"+price+"'><td>"+name+"</td><td>"+price+"</td></tr>");
    $('#reset').bind("click", function() {
    $("input[type=text], textarea").val("");
    });

    $('#select_product').append('<option  id="'+name+'"value="'+name+'"> '+ name+'</option>');
    });

$('#sub').click(function (e) { 
    e.preventDefault();
    var cust=$("input[name='cname'").val();
    var phn=$("input[name='phone'").val();
    $("#cvalues").append("<tr data-name='"+cust+"' data-number='"+phn+"'><td>"+cust+"</td><td>"+phn+"</td></tr>");
    $('#cust').hide();
    $('.clist').show();
$('#select_customer').append('<option  id="'+cust+'"value=""> '+ cust+'</option>');


});
count=1
$('#add').click(function (e) { 
    e.preventDefault();
    var sltcut=$("#select_customer").val();
    var sltprd=$("#select_product").val();
    var qty=$("#qty").val();
    var sbtl=item[sltprd]*($('#qty').val());
   count=+1;
   

    $('#Bvalues').append("<tr data-name='"+sltcut+"' data-name='"+sltprd+"'><<td>"+sltprd+"</td><td>"+item[sltprd]+"</td><td>"+qty+"</td><td>"+sbtl+"</td><td><button class='remove' type='button'>remove</button></td></tr>");

    $('#Bvalues').html();
    $('.billing').show();
   
});
$('#nnn').click(function (e) { 
    e.preventDefault();
    $('#eeeee').show();
    $('#cust').hide();
    $('.clist').hide();
    $('#invoice').hide();
    $('.billing').hide();


});
$('#vvv').click(function (e) { 
    e.preventDefault();
    $('#cust').show();
    $('#eeeee').hide();
    $('.clist').hide();
    $('#invoice').hide();
    $('.billing').hide();

});
$('#sss').click(function (e) { 
    e.preventDefault();
    $('#invoice').show();
    $('#cust').hide();
    $('#eeeee').hide();
    $('.clist').hide();
    $('.billing').hide();
});
$('#close').click(function (e) { 
    e.preventDefault();
    $('#eeeee').hide();
});
$('#cross').click(function (e) { 
    e.preventDefault();
    $('#cust').hide();
});
$('#x').click(function (e) { 
    e.preventDefault();
    $('#invoice').hide();
    $('.billing').hide();
});
$('#c').click(function (e) { 
    e.preventDefault();
    $('#invoice').hide();
    $('.clist').hide();
});

$('body').on('click','.remove',function() {
    $(this).parents('tr').remove();
});

$('#bill').click(function (e) { 
    e.preventDefault();
    var cust=$("input[name='cname'").val();
    $("#name_cust").text(cust);
    var id=new Date().toLocaleString();
    $("#date").text(id);
});
$('#product').keyup(function (e) { 
    var name= $(this).val();
    if(name.match(/[0-9]/)){
        $('#prdct_warning_number').show();
    
        }
    else {
        $('#prdct_warning_number').hide();

    }
});
$('#perprice').keyup(function (e) { 
    var name= $(this).val();
    if(name.match(/[a-z]/)){
        $('#prdct_warning_alph').show();
    
        }
    else if(name.match(/[A-Z]/)){
        $('#prdct_warning_alph').show();

    }
    else{
        $('#prdct_warning_alph').hide();

    }
});
$('#cname').keyup(function (e) { 
    var name= $(this).val();
    if(name.match(/[0-9]/)){
        $('#cust_warning_name').show();
    
        }
    else {
        $('#cust_warning_name').hide();

    }
});
$('#phone').keyup(function (e) { 
    var name= $(this).val();
    if(name.match(/[a-z]/)){
        $('#cust_warning_number').show();
    
        }
    else if(name.match(/[A-Z]/)){
        $('#cust_warning_number').show();

    }
    else{
        $('#cust_warning_number').hide();

    }
});
$("#another").click(function(){
    alert("hi")
    $("#Bvalues").html('');
  });
});
