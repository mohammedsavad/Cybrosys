$(function(){
    $.validator.addMethod("Nam",function(value){
        return /^[a-zA-Z]*$/.test(value) 
        });
        $.validator.addMethod("num",function(value){
            return /^[0-9]*$/.test(value) 
            });
    $.validator.addMethod("ym",function(value){
        
        const d=new Date()
        let mon=d.getMonth()
        let year=d.getFullYear()
        alert("hi")
        if($("#year").val()==year){
            if($("#month").val()==mon){
                return true;
            }
            else{
                    return false;
            }
        }
        else if($("#year").val()<year){
            return false;
        }
        else{
                return true;
            }
            
        
        
    });

    $("#cards").validate({
        rules:{
            cname:{
                required:true,
                minlength:3,
                Nam:true
            },
            cardNumber:{
                required:true,
                minlength:16,
                num:true

            },
            year:{
                required:true,
                minlength:4,
                ym:true
            },
            month:{

            }


        },
        messages:{
            cname:{
            required:"enter name",
            minlength:"atleast 3 letters",
            Nam:"only include letters"
            
          },
          cardNumber:{
           required:"enter card number" ,
           minlength:"it must be 16 numbers",
           num:"only include numbers"
           
          },
         year:{
            required:"year",
            minlength:"4 digits",
            ym:"provide correct year"

         } 
        }
    });

    
});