$(document).ready(function () {
    $('#vvote').hide();
    $('#adddt').hide();
    $('#result').hide();
    $('#vdt').hide();
    $('#ad').hide();
    

});
  let candidates = {}  ;
$("form").submit(function(e) {
    e.preventDefault();

    var name=$("input[name='name']").val();
    var id=$("input[name='id']").val();
  
    candidates[$('#name').val()] = 0
     
     $(".data-table #first").append("<tr data-name='"+name+"' data-id='"+id+"'><td>"+name+"</td><td>"+id+"</td><td><button class='btn btn-danger btn-lg btn-delete mr-3' type='button'>Delete</button><button class='btn btn-info btn-lg btn-edit' type='button'>Edit</button></tr>");
     $("#adddt #cand").append("<tr data-name='"+name+"' data-id='"+id+"'><td>"+name+"</td><td>"+id+"</td><td id='votng'><button class='btn btn-danger btn-lg btn-vote '  type='button'>vote</button></tr>");
     //$("#vdt").append("<tr data-name='"+name+"' data-id='"+id+"'><td>"+name+"</td><td>"+id+"</td><td id='count'></tr>");

     $("input[name='']").val("");
     $('#vvote').show();
     $('#ad').show();
  });

  $('body').on('click','.btn-delete',function() {
    $(this).parents('tr').remove();
  });

  $('body').on('click','.btn-edit',function() {
    var name=$(this).parents('tr').attr('data-name');
    var id=$(this).parents('tr').attr('data-id');

    $(this).parents('tr').find('td:eq(0)').html("<input name='edit_text' value='"+name+"'>");
    $(this).parents('tr').find('td:eq(1)').html("<input name='edit_id' value='"+id+"'>");

    $(this).parents('tr').find('td:eq(2)').prepend("<button type='button' class='btn btn-info btn-lg btn-update mr-3'>Update</button>");
    $(this).hide()

  });

  $('body').on('click','.btn-update',function() {
    var name=$(this).parents('tr').find("input[name='edit_text']").val();
    var id=$(this).parents('tr').find("input[name='edit_id']").val();

    $(this).parents('tr').find('td:eq(0)').text(name);
    $(this).parents('tr').find('td:eq(1)').text(id);

    $(this).parents('tr').attr('data-name',name);
    $(this).parents('tr').attr('data-id',id);

    $(this).parents('tr').find('.btn-edit').show();
    $(this).parents('tr').find('.btn-update').remove();


  });
  $('body').on('click','#vvote',function() {
    var name=$(this).parents('tr').find("input[name='edit_text']").val();
    var id=$(this).parents('tr').find("input[name='edit_id']").val();
    
    $('#votng').show();
    $('#votng').css('visibility','visible');
    $('.container').hide();
    $('#adddt').show();
    $('#result').show();

  });
  $('body').on('click','#result',function() {
    for (let key in candidates) { 
        $('#retab').html($('#retab').html()+` <tr><td>${key}</td><td>${candidates[key]}</td></tr>`)
    }
    $('.container').hide();
    $('#adddt').hide();
    $('#result').hide();
    $('#vdt').show();
  });
   
$('body').on('click','#votng',function() {
    var name=$(this).parents('tr').data('name')
    console.log(name)
    candidates[name]+=1;
    console.log(candidates[name])
});

