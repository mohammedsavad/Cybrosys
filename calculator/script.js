number_temp=''
user_input_list=[]
isError = false

$.fn.submit_for_result = function(){
    user_input_list.push(number_temp)
    for (let index = 0; index < user_input_list.length; index++) {
        count=0
        new_num=''
        user_input_splited = user_input_list[index].split('.')
        for (let i = 0; i < user_input_splited.length; i++) {
            if(count==1){
                new_num +='.' + user_input_splited[i]
            }else{
                new_num += user_input_splited[i]
            }
            count+=1
        }
        user_input_list[index] = new_num
    }
    if(!isError){
        try{
            answer = eval(user_input_list.join(''))
            $('#answer').val(answer);
        }
        catch(err){
            $('#answer').val("Syntax ERORR");
        }
        isError = false
    }
    user_input_list.pop()
}
$('#b-sum').click(function (e) { 
    $.fn.submit_for_result()
});
$('#input').keyup(function (e) { 
    key = e.key
    if(key.match(/[-+/*%]/)){
        user_input_list.push(number_temp)
        user_input_list.push(key)
        number_temp=""
    }
    else if( key.match(/[0-9]/)){
        number_temp+=key
    }else if(key=='.'){
        number_temp+=key
    }else if(key=='Backspace'){
        $('#input').val("")
        $('#answer').val("")
        user_input_list=[]
        number_temp=''
    }else if (key == 'Enter'){
        $.fn.submit_for_result()
    }
    $('#input').val+=key
    
});
$('#b-c').click(function(e){
    $('#input').val("")
    $('#answer').val("")
    user_input_list=[]
    number_temp=''

});
$('#b-b').click(function(e){
    $('#input').val($('#input').val().slice(0,-1))
    number_temp = number_temp.slice(0,-1)
});

$('.btn-outline-dark').click(function(e){
    $('#input').val($('#input').val()+e.currentTarget.innerText)
    number_temp+=e.currentTarget.innerText
})

$('.btn-outline-success').click(function(e){
    $('#input').val($('#input').val()+e.currentTarget.innerText)
    user_input_list.push(number_temp)
    user_input_list.push(e.currentTarget.innerText)
    number_temp=''

})
