/*function deleteBy(id)
{
          //con fetch invocamos a la API de odontologos con el método DELETE
          //pasandole el id en la URL
          const url = '/odontologos/'+ id;
          const settings = {
              method: 'DELETE'
          }
          fetch(url,settings)
          .then(response => response.json())

          //borrar la fila del odontologo eliminado
          let row_id = "#tr_" + id;
          document.querySelector(row_id).remove();

} */

$(document).ready(function(){
    let odontologoId = 0;

    $(document).on("click", "#div_odontologo_table table button.btn_delete", function() {
        let btn_id = (event.srcElement.id);
        odontologoId = btn_id.split("_")[2];

        $("div.modal-body")
            .text("Queres eliminar el odontologo con id = " + odontologoId + " ?");
        $("#model-delete-btn").css({"display": "inline"});
    });

    $(document).on("click", "#model-delete-btn", function() {
        $.ajax({
            url: '/odontologos/' + odontologoId,
            type: 'DELETE',
            success: function(response) {
                $("div.modal-body")
                    .text("Eliminade correctamente !");

                $("#model-delete-btn").css({"display": "none"});
                $("button.btn.btn-secondary").text("Close");

                // delete the pelicula row on html page
                let row_id = "tr_" + odontologoId;
                $("#" + row_id).remove();
                $("#div_odontologo_updating").css({"display": "none"});
            },
            error: function(error){
                console.log(error);
                $("#div_odontologo_updating").css({"display": "none"});
                alert("Error -> " + error);
            }
        });
    });
});

