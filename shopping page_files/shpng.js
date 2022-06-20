
let my_cart={}
$(document).ready(function () {
    $(".address").hide();
    $("#lastpay").hide();
    $("#end").hide();
    $("#carts").hide();
    $("#payment").hide();
    $('.alert').hide();
    
    $("#name_warning").hide()
    $('#phone_warning').hide();
    $('#add_warning').hide();

/*
    $("#submit").click(function(){
    $("#cartraw").append("<tr><td><img src='phone.jpeg'  width='104' height='142'></td><td><h2>Samsung</h2><p><b>₹ 30000 </b></p><button type='submit' id='remove'><b>remove</b></button><button type='submit' id='check'><b>process checkout</b></button><button id='ver'>verthe</button></button></td></tr>")
    });
    $("#submit1").click(function(){
    $("#cartraw").append("<tr><td><img src='bag.jpeg'  width='104' height='142'></td><td><h2>Bag</h2><p><b>₹ 1000 </b></p><button type='submit' id='remove' ><b>remove</b></button><button type='submit'id='check1'><b>process checkout</b></button></td></tr>")
   });
   $("#submit2").click(function(){
    $("#cartraw").append("<tr><td><img src='dress.jpg'  width='104' height='142'></td><td><h2>Bridal gown</h2><p><b>₹ 10000 </b></p><button type='submit' id='remove' ><b>remove</b></button><button type='submit'id='check2'><b>process checkout</b></button></td></tr>")
   });
   $("#submit3").click(function(){
    $("#cartraw").append("<tr><td><img src='dinnerset.jpg'  width='104' height='142'></td><td><h2>Dinner set</h2><p><b>₹ 7000 </b></p><button type='submit' id='remove' ><b>remove</b></button><button type='submit'id='check3'><b>process checkout</b></button></td></tr>")
   });       
                                        
*/
});
$("#submit").click(function(){
    my_cart['samsung']=[ 30000,1,'phone.jpeg',30000]

})
$("#submit1").click(function(){
    my_cart['Bag']=[  1000,1,'bag.jpeg',1000]

})
$("#submit2").click(function(){
    my_cart['Bridal_gown']=[ 10000,1,'dress.jpg',10000]

})
$("#submit3").click(function(){
    my_cart['Dinner_set']=[7000,1,'dinnerset.jpg',7000]

})

$('.cart').click(function (e) { 
    e.preventDefault();
    $('.alert').text("Item added to cart");
    $('.alert').show();
});



let count=0
let total = 0
    function shpng(){
        total=0
        for(i in my_cart){
            total += my_cart[i][3]
            $('#check').html('')
            $('#check').html('₹' +total + '  process checkout');
            $("#cartraw").append(`<tr><td><img src='${my_cart[i][2]}'  width='104' height='142'></td><td><h2>${i}</h2><p><b>${my_cart[i][0]*my_cart[i][1]} </b></p><button onclick="remove_item('${i}')" id='remove-${count}'><b>remove</b></button><button class="cnt" onclick="add_count('${i}')"> +</button> <input type='text' class="upds" value='${my_cart[i][1]}' id='txt${i}'readonly><button class="cnd" onclick="rmv_count('${i}')"> -</button></td></tr>`);
            count+=1
        } }

    $("#cart").click(function(){
        $("#cartraw").html('');
        shpng()
    
    });

    function add_count(id){
        my_cart[id][1]+=1
        my_cart[id][3]=my_cart[id][0]* my_cart[id][1]
        $("#cartraw").html('');
        shpng()

    }
    function rmv_count(id){
        my_cart[id][1]-=1
        my_cart[id][3]=my_cart[id][0]* my_cart[id][1]
        $("#cartraw").html('');
        shpng()
    }

    $("#add").click(function(){
        $(".address").hide();
        $("#lastpay").hide();
        $("#end").hide();
        $("#carts").hide();
        $("#payment").hide();
        $("#homes").show();
    });
    $('#clear').click(function (e) { 
        e.preventDefault();
        my_cart={}
        $("#cartraw").html('');
    });

    function remove_item(id){
        delete my_cart[id]
        $("#cartraw").html('');
        shpng()
    }

                 
    $("#home").click(function(){
        $(".address").hide();
        $("#lastpay").hide();
        $("#end").hide();
        $("#carts").hide();
        $("#payment").hide();
        $("#homes").show();
    });
    $("#cart").click(function(){
        $(".address").hide();
        $("#lastpay").hide();
        $("#end").hide();
        $("#carts").show();
        $("#payment").hide();
        $("#homes").hide();
    });
    let temp = ''
    function prch(id){
        temp = id
        $("#address").show();
        $("#lastpay").hide();
        $("#end").hide();
        $("#carts").hide();
        $("#payment").hide();
        $("#homes").hide();   
    }
    
    $("#check").click(function(){
        $("#address").show();
        $("#lastpay").hide();
        $("#end").hide();
        $("#carts").hide();
        $("#payment").hide();
        $("#homes").hide();   
    });
    states = [false,false,false]
    $("#next").click(function(){
        flag = true
        states.forEach(element => {
            if(!element){
                flag = false
            }
        });
        flag=true
        if (flag){
            $("#address").hide();
            $("#lastpay").hide();
            $("#end").hide();
            $("#carts").hide();
            $("#payment").show();
            $("#homes").hide(); 
        } else{
            alert("Enter valid details")
        }
    });
    $("#cr").on("click",function(){
        $("#pays").click(function(){
        $("#address").hide();
        $("#lastpay").show();
        $("#end").hide();
        $("#carts").hide();
        $("#payment").hide();
        $("#homes").hide();  
    }); 
    });
        $("#cash").on("click",function(){
        $("#pays").click(function(){
        $("#address").hide();
        $("#lastpay").hide();
        $("#end").hide();
        $("#carts").hide();
        $("#payment").hide();
        $("#homes").hide();
        $("#end").show(); 
        });
    });
    
$('#name').keyup(function (e) { 
    if ($(this).val().length < 3){
        $("#name_warning").show();
        states[0] = false
    }else{
        $("#name_warning").hide()
        states[0] = true
    }
});

$('#number').keyup(function (e) { 
    if ($(this).val().length !=10){
        $("#phone_warning").show();
        states[1] = false
    }else{
        if (isNaN($(this).val())){
            $("#phone_warning").show();
            states[1] = false
        }else{
            $("#phone_warning").hide()
            states[1] = true
        }
    }
});

$('#ad').blur(function (e) { 
    if($(this).val() == ''){
        $("#add_warning").show();
            states[2] = false
    }else{
        $('#add_warning').hide();
        states[2] = true
    }
});
pyment_states=[false,false,false,false,false]
$("#confirm").click(function(){
    sflag = true
    pyment_states.forEach(element => {
        if(!element){
            sflag=false
        }
    });
    if (sflag){
    $("#address").hide();
    $("#lastpay").hide();
    $("#end").hide();
    $("#carts").hide();
    $("#payment").hide();
    $("#homes").hide();
    $("#end").show();
    }else{
        alert("enter valid data")
    }

});

 $('#card_name_warning').hide();
 $('#card_number_warning').hide();
 $('#month_warning').hide();
 $('#year_warning_01').hide();
 $('#year_warning_02').hide();
$('#cvv_warning').hide();

$('#cname').keyup(function (e) { 
    if ($(this).val().length < 3){
        $("#card_name_warning").show();
        pyment_states[0] = false
    }else{
        $("#card_name_warning").hide()
        pyment_states[0] = true
    }
});

$('#card').keyup(function (e) { 
    if ($(this).val().length != 16){
        $("#card_number_warning").show();
        pyment_states[1] = false
    }else{
        if (isNaN($(this).val())){
            $("#card_number_warning").show();
            pyment_states[1] = false
        }else{
            $("#card_number_warning").hide()
            pyment_states[1] = true
        }

    }
});
$('#month').keyup(function (e) { 
    if ($(this).val() < 1 || $(this).val() > 12){
        $("#month_warning").show();
        pyment_states[2] = false
    }else{
        if (isNaN($(this).val())){
            $("#month_warning").show();
            pyment_states[2] = false
        }else{
            $("#month_warning").hide()
            pyment_states[2] = true
        }

    }
});
$('#year').keyup(function (e) { 
    const now = new Date()
    let year = now.getFullYear() 
    let month = now.getMonth()
    if ($(this).val() == year){
        if($('#month').val() < month){
            $('#year_warning_02').show();
            pyment_states[3] = false
        }else{
            $('#year_warning_02').hide();
            pyment_states[3] = true
        }
    }else if($(this).val() < year){
        $('#year_warning_02').show();
        pyment_states[3] = false   
    }else{
        $('#year_warning_02').hide();
        pyment_states[3] = true
    }
});

$('#cvv').keyup(function (e) { 
    if ($(this).val().length != 3){
        $("#cvv_warning").show();
        pyment_states[4] = false
    }else{
        if (isNaN($(this).val())){
            $("#cvv_warning").show();
            pyment_states[4] = false
        }else{
            $("#cvv_warning").hide()
            pyment_states[4] = true
        }

    }
});
