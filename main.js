$(document).ready(function(){
    $('#tarefas').on('submit', function(evento){
    evento.preventDefault();

const novaTarefa = $('<li style="display: none"></li>');
novaTarefa.text($('#tarefa').val());

    $('ul').append(novaTarefa);
        novaTarefa.fadeIn();

    $('#tarefa').val('');
        novaTarefa.appendTo($('ul')).on('click', function() {
            $(this).toggleClass('grifarTexto');
        });
    });
});