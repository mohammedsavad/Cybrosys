let DB = []
try{
     DB = JSON.parse(localStorage.note)
}catch{
    DB = []
}
task_DB = DB
$(document).ready(function () {
    $('.add-task-div').hide();
    url = new URLSearchParams($(location).attr('search'))
    edit_button = url.get('edit');
    delete_button = url.get('delete')
    if (delete_button != null) {
        task_DB.splice(edit_button,1)
        localStorage.note = JSON.stringify(task_DB)

    }else if (edit_button != null){
        $('#add-task').show();
        $('#title').val(task_DB[edit_button].title);
        $('#note').val(task_DB[edit_button].note);
    }
   $.fn.load_data()
});

$.fn.load_data = function(){
    $('.notes').html('')
    for (let index = 0; index < task_DB.length; index++) {
        $('.notes').html(
            $('.notes').html()+`<div class="card" style="width: 18rem;">
            <div class="card-body">
                    <h5 class="card-title"><span class="btn btn-outline-secondary">${index}</span>${task_DB[index].title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${task_DB[index].date}</h6>
                <p class="card-text">${task_DB[index].note}</p>
                <a href='?edit=${index}' class="btn btn-success edit">Edit</a>
                <a href='?delete=${index}' class="btn btn-danger">Delete</a>
            </div>
        </div>`);
    }
}


$('#add-task').submit(function (e) { 
    e.preventDefault();
    url = new URLSearchParams($(location).attr('search'))
    edit_button = url.get('edit')
    if (edit_button==null){
        let date = new Date()
        temp_task = {
            'title' : $('#title').val(),
            'note' : $('#note').val(),
            'date' : date.toLocaleDateString()
        };
        task_DB.push(temp_task)
        localStorage.note = JSON.stringify(task_DB)
    }else{
        task_DB[edit_button].note = $('#note').val()
        task_DB[edit_button].title = $('#title').val()
        localStorage.note = JSON.stringify(task_DB)
    }
    $('#add-task').hide();
    $.fn.load_data()
});

$('.open-button').click(function (e) { 
    e.preventDefault();
    $('#add-task').show();
});
$('.cancel').click(function (e) { 
    e.preventDefault();
    $('#add-task').hide();
});

$('#filter').submit(function (e) { 
    e.preventDefault();
    key = $('#key_srch').val()
    if ($.isNumeric(key)){
        data = task_DB[key]
        $('.notes').html('')
        $('.notes').html(
            $('.notes').html()+`<div class="card" style="width: 18rem;">
            <div class="card-body">
                    <h5 class="card-title"><span class="btn btn-outline-secondary">${key}</span>${task_DB[key].title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${task_DB[key].date}</h6>
                <p class="card-text">${task_DB[key].note}</p>
                <a href='?edit=${key}' class="btn btn-success edit">Edit</a>
                <a href='?delete=${key}' class="btn btn-danger">Delete</a>
            </div>
        </div>`);

    }else{
        temp_db = []
        for (let index = 0; index < task_DB.length; index++) {
            if (task_DB[index]['title'].includes(key)){
                temp_db.push(task_DB[index])
            }
        }
        $('.notes').html('')
        for (let index = 0; index < temp_db.length; index++) {
            $('.notes').html(
                $('.notes').html()+`<div class="card" style="width: 18rem;">
                <div class="card-body">
                        <h5 class="card-title"><span class="btn btn-outline-secondary">${index}</span>${temp_db[index].title}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${temp_db[index].date}</h6>
                    <p class="card-text">${temp_db[index].note}</p>
                    <a href='?edit=${index}' class="btn btn-success edit">Edit</a>
                    <a href='?delete=${index}' class="btn btn-danger">Delete</a>
                </div>
            </div>`);
        }
    }
});

$('#submit').click(function (e) { 
    e.preventDefault();
    from = $('#from').val();
    from = from.split('-').reverse().join('/')
    to = $('#to').val();
    to = to.split('-').reverse().join('/')
    temp_db = []
    for (let index = 0; index < task_DB.length; index++) {
        if (task_DB[index]['date'] >= from && task_DB[index]['date'] <= to){
            temp_db.push(task_DB[index])
        }
    }
    
    $('.notes').html('')
        for (let index = 0; index < temp_db.length; index++) {
            $('.notes').html(
                $('.notes').html()+`<div class="card" style="width: 18rem;">
                <div class="card-body">
                        <h5 class="card-title"><span class="btn btn-outline-secondary">${index}</span>${temp_db[index].title}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${temp_db[index].date}</h6>
                    <p class="card-text">${temp_db[index].note}</p>
                    <a href='?edit=${index}' class="btn btn-success edit">Edit</a>
                    <a href='?delete=${index}' class="btn btn-danger">Delete</a>
                </div>
            </div>`);
        }
});