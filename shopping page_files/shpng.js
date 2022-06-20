
let my_cart={}
$(document).ready(function () {
    $("#address").hide();
    $("#lastpay").hide();
    $("#end").hide();
    $("#carts").hide();
    $("#payment").hide();

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
    my_cart['Dinner_set']=[  7000,1,'dinnerset.jpg',7000]

})



count=0
    function shpng(){
        for(i in my_cart){
            $("#cartraw").append(`<tr><td><img src='${my_cart[i][2]}'  width='104' height='142'></td><td><h2>${i}</h2><p><b>${my_cart[i][0]*my_cart[i][1]} </b></p><button onclick="remove_item('${i}')" id='remove-${count}'><b>remove</b></button><input type='text' value='${my_cart[i][1]}' id='txt${i}'readonly><button class="cnt" onclick="add_count('${i}')"> +</button> <button class="cnd" onclick="rmv_count('${i}')"> -</button></td></tr>`);
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
        $("#address").hide();
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
        $("#address").hide();
        $("#lastpay").hide();
        $("#end").hide();
        $("#carts").hide();
        $("#payment").hide();
        $("#homes").show();
    });
    $("#cart").click(function(){
        $("#address").hide();
        $("#lastpay").hide();
        $("#end").hide();
        $("#carts").show();
        $("#payment").hide();
        $("#homes").hide();
    });
    let temp = ''
    $('#check').click(function (e) { 
        e.preventDefault();
        $("#address").show();
        $("#lastpay").hide();
        $("#end").hide();
        $("#carts").hide();
        $("#payment").hide();
        $("#homes").hide();  
    });

    $("#next").click(function(){
    if($("#name").val()!=""&&
       $("#number").val()!=""&&
       $("#ad").val()!=""){

        $("#address").hide();
        $("#lastpay").hide();
        $("#end").hide();
        $("#carts").hide();
        $("#payment").show();
        $("#homes").hide(); } else{
            alert("please fill the form");
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
   /* $("#confirm").click(function(){
        $("#address").hide();
        $("#lastpay").hide();
        $("#end").hide();
        $("#carts").hide();
        $("#payment").hide();
        $("#homes").hide();
        $("#end").show();
          

    });*/
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


    



