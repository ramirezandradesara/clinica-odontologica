$(document).ready(function(){
    $("#update_paciente_form").submit(function(evt) {
        evt.preventDefault();
        try {
            let pacienteId = $("#paciente_id").val();

        let formData = {
            id: $("#paciente_id").val(),
            nombre: $("#nombre").val(),
            apellido:  $("#apellido").val(),
            fechaIngreso: $("#fechaIngreso").val(),
            dni: $("#dni").val(),
            //domicilio: $("#domicilio").val(),
        }

            $.ajax({
                url: '/pacientes',
                type: 'PUT',
                contentType : "application/json",
                data: JSON.stringify(formData),
                dataType : 'json',
                async: false,
                cache: false,
                success: function (response) {
                    let paciente = response;

                    let successAlert = '<div class="alert alert-success alert-dismissible">' +
                                            '<button type="button" class="close" data-dismiss="alert">&times;</button>' +
                                            '<strong> Paciente actualizado </strong></div>'


                    $("#tr_" + pacienteId + " td.td_first_name").text(paciente.nombre.toUpperCase());
                    $("#tr_" + pacienteId + " td.td_last_name").text(paciente.apellido.toUpperCase());
                    $("#tr_" + pacienteId + " td.td_matricula").text(paciente.matricula);
                     $("#tr_" + pacienteId + " td.td_domicilio").text(paciente.domicilio);

                    $("#response").empty();
                    $("#response").append(successAlert);
                    $("#response").css({"display": "block"});
                     location.reload();
                },

                error: function (response) {
                    let errorAlert = '<div class="alert alert-danger alert-dismissible">' +
                                        '<button type="button" class="close" data-dismiss="alert">&times;</button>' +
                                        '<strong> Error </strong></div>';

                    $("#response").empty();
                    $("#response").append(errorAlert);
                    $("#response").css({"display": "block"});

                }
            });
        } catch(error){
            console.log(error);
            alert(error);
        }
    });

    $(document).on("click", "table button.btn_id", function(){
        let id_of_button = (event.srcElement.id);
        let pacienteId = id_of_button.split("_")[2];

        $.ajax({
            url: '/pacientes/' + pacienteId,
            type: 'GET',
            success: function(response) {
                let paciente = response;
                $("#paciente_id").val(paciente.id);
                $("#nombre").val(paciente.nombre);
                $("#apellido").val(paciente.apellido);
                $("#fechaIngreso").val(paciente.fechaIngreso),
                $("#dni").val(paciente.dni),
                //$("#domicilio").val(paciente.domicilio),

                $("#div_paciente_updating").css({"display": "block"});
            },
            error: function(error){
                console.log(error);
                alert("Error -> " + error);
            }
        });
    });
});

/*
window.addEventListener('load', function () {


    //Buscamos y obtenemos el formulario donde estan
    //los datos que el usuario pudo haber modificado del odontolohgo
    const formulario = document.querySelector('#update_paciente_form');

    formulario.addEventListener('submit', function (event) {
        let peliculaId = document.querySelector('#paciente_id').value;

        //creamos un JSON que tendrá los datos del odontologo
        //a diferencia de un odontologo nuevo en este caso enviamos el id
        //para poder identificarlo y modificarlo para no cargarlo como nuevo
        const formData = {
            id: document.querySelector('#paciente_id').value,
            nombre: document.querySelector('#nombre').value,
                        apellido: document.querySelector('#apellido').value,
                        dni: document.querySelector('#dni').value,
                        fechaIngreso: document.querySelector('#fechaIngreso').value,
                        domicilio: document.querySelector('#domicilio').value,
                         email: document.querySelector('#email').value,

        };

        //invocamos utilizando la función fetch la API odontologos con el método PUT que modificará
        //al odontologo que enviaremos en formato JSON
        const url = '/pacientes';
        const settings = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        }
          fetch(url,settings)
          .then(response => response.json())

    })
 })

    //Es la funcion que se invoca cuando se hace click sobre el id de un odontologo del listado
    //se encarga de llenar el formulario con los datos del odontologo
    //que se desea modificar
    function findBy(id) {
          const url = '/pacientes'+"/"+id;
          const settings = {
              method: 'GET'
          }
          fetch(url,settings)
          .then(response => response.json())
          .then(data => {
              let paciente = data;
              document.querySelector('#paciente_id').value = paciente.id;
              document.querySelector('#nombre').value = "";
                     document.querySelector('#apellido').value = "";
                      document.querySelector('#dni').value = "";
                        document.querySelector('#fechaIngreso').value = "";
                              document.querySelector('#domicilio').value = "";
                               document.querySelector('#email').value = "";
              //el formulario por default esta oculto y al editar se habilita
              document.querySelector('#div_paciente_updating').style.display = "block";
          }).catch(error => {
              alert("Error: " + error);
          })
      } */