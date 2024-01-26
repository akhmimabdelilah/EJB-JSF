$(document).ready(function () {
    
    $("#employe").change(function () {
            $.ajax ({
            url: 'MachineByEmployeController',
            data: {m:  $(this).val()},//this = élément sélectionné
            type: 'POST',
            success: function (data) {
                var ligne="";
                for (var i = 0; i < data.length; i++) {
                    ligne+='<tr>'
                            +'<td>'+data[i].id+'</td>'
                            +'<td>'+data[i].reference+'</td>'
                            +'<td>'+data[i].prix+'</td>'
                            +'<td>'+data[i].dateAchat+'</td>'
                            +'<td>'+data[i].employe.libelle+'</td>'
                            +'<td><a class="bndelete" href="MachineController?op=delete&id='+data[i].id+'">Supprimer</a></td>'
                            +'<td><a class="bnupdate" href="">Modifier</a></td>'
                        +'</tr>';
                }
                $("#body").html(ligne);
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log(textStatus);
            }
        });
    });


});

