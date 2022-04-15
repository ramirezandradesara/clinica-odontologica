window.addEventListener('load', function () {
    (function(){

      //con fetch invocamos a la API de odontologos con el método GET
      //nos devolverá un JSON con una colección de odontologos
      const url = '/turnos';
      const settings = {
        method: 'GET'
      }

      fetch(url,settings)
      .then(response => response.json())
      .then(data => {
      //recorremos la colección de odontologos del JSON
         for(turno of data){
            //por cada odontologo armaremos una fila de la tabla
            //cada fila tendrá un id que luego nos permitirá borrar la fila si eliminamos el odontologo
            var table = document.getElementById("turnoTable");
            var turnoRow =table.insertRow();
            let tr_id = 'tr_' + turno.id;
            turnoRow.id = tr_id;


            //armamos cada columna de la fila
            //como primer columna pondremos el boton modificar
            //luego los datos del odontologo
            //como ultima columna el boton eliminar
            turnoRow.innerHTML = '<td>' + updateButton + '</td>' +
                    '<td class=\"td_fecha\">' + turno.date + '</td>' +
                    // '<td class=\"td_hora\">' + turno.hora + '</td>' +
                    '<td class=\"td_paciente_id\">' + turno.paciente.id + '</td>' +
                    '<td class=\"td_odontologo_id\">' +turno.odontologo.id + '</td>' +
                    '<td>' + deleteButton + '</td>';
        };
    })
    })

    (function(){
      let pathname = window.location.pathname;
      if (pathname == "/turnos.html") {
          document.querySelector(".nav .nav-item a:last").addClass("active");
      }
    })


    })