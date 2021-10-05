//Consultas GET

function verFincas(){
    $.ajax({
       url: "https://gfb87b1ac288bfc-db202109232116.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/farm/farm",
        type: "GET",
        dataType: "json",
        success: function(respuesta){
            console.log(respuesta);
            $("#resultadoFincas").empty();
            RespuestaFincas(respuesta.items);
        }
    });
}
function RespuestaFincas(items){
    let myTable = "<table>";
    if(items.length>0){
        myTable += "<th>id</th>";
        myTable += "<th>address</th>";
        myTable += "<th>exension</th>";
        myTable += "<th>categoty_id</th>";
        myTable += "<th>name</th>";
    }else{
        myTable += "<th>No hay datos disponibles en la tabla</th>";
    }
    for(i=0;i<items.length; i++){
        myTable += "<tr>";
        myTable += "<td>"+items[i].id+"</td>";
        myTable += "<td>"+items[i].address+"</td>";
        myTable += "<td>"+items[i].exension+"</td>";
        myTable += "<td>"+items[i].category_id+"</td>";
        myTable += "<td>"+items[i].name+"</td>";
        myTable += "<td><button onclick='editarF("+items[i].id+")'>Editar</button></td>"
        myTable += "<td><button onclick='BorrarFinca("+items[i].id+")'>Eliminar</button></td>";
        myTable += "</tr>";
    }
    myTable += "</table>";
    $("#resultadoFincas").append(myTable);
}

function verClientes(){
    $.ajax({
       url: "https://gfb87b1ac288bfc-db202109232116.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client",
        type: "GET",
        dataType: "json",
        success: function(respuesta){
            console.log(respuesta);
            $("#resultadoClientes").empty();
            RespuestaClientes(respuesta.items);
        }
    });
}
function RespuestaClientes(items){
    let myTable = "<table>";

    if(items.length>0){
        myTable += "<th>id</th>";
        myTable += "<th>name</th>";
        myTable += "<th>email</th>";
        myTable += "<th>age</th>";
    }else{
        myTable += "<th>No hay datos disponibles en la tabla</th>";
    }
    
    for(i=0;i<items.length; i++){
        myTable += "<tr>";
        myTable += "<td>"+items[i].id+"</td>";
        myTable += "<td>"+items[i].name+"</td>";
        myTable += "<td>"+items[i].email+"</td>";
        myTable += "<td>"+items[i].age+"</td>";
        myTable += "<td><button onclick='editarC("+items[i].id+")'>Editar</button></td>"
        myTable += "</tr>";
    }
    
    myTable += "</table>";
    $("#resultadoClientes").append(myTable);
}


function verMensajes(){
    $.ajax({
       url: "https://gfb87b1ac288bfc-db202109232116.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message",
        type: "GET",
        dataType: "json",
        success: function(respuesta){
            console.log(respuesta);
            $("#resultadoMensajes").empty();
            RespuestaMensajes(respuesta.items);
        }
    });
}
function RespuestaMensajes(items){
    let myTable = "<table>";
    if(items.length>0){
        myTable += "<th>id</th>";
        myTable += "<th>messagetext</th>";
    }else{
        myTable += "<th>No hay datos disponibles en la tabla</th>";
    }

    for(i=0;i<items.length; i++){

        console.log("estos son son los items",items[i]) 
        
        myTable += "<tr>";
        myTable += "<td>"+items[i].id+"</td>";
        myTable += "<td>"+items[i].messagetext+"</td>";
        myTable += "<td><button onclick='editarM("+items[i].id+")'>Editar</button></td>"
        myTable += "<td><button onclick='BorrarMensaje("+items[i].id+")'>Eliminar</button></td>"
        myTable += "</tr>";
        
    }
    
    myTable += "</table>";
    $("#resultadoMensajes").append(myTable);
}


//Metodos POST

function crearFinca(){
    
    let myData= {
        id: $("#id").val(),
        address: $("#address").val(),
        exension: $("#exension").val(),
        category_id: $("#category_id").val(),
        name:$("#name").val()
    };
    let dataToSend = JSON.stringify(myData);
    $.ajax({
		url: "https://gfb87b1ac288bfc-db202109232116.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/farm/farm",
        type:"POST",
        data: myData,
        dataType:"json",
        complete:function(respuesta){

           $("#id").val("");
            $("#address").val("");
            $("#exension").val("");
            $("#category_id").val("");
            $("#name").val("");
            
            console.log("Guardado!");

        }
    });
}

function registrarCliente(){
    
    let myData= {
        id: $("#idCliente").val(),
        name: $("#nameCliente").val(),
        email: $("#emailCliente").val(),
        age: $("#ageCliente").val()
    };
    let dataToSend = JSON.stringify(myData);
    //console.log(dataToSend);
    $.ajax({
		url: "https://gfb87b1ac288bfc-db202109232116.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client",
        type:"POST",
        data: myData,
        dataType:"json",
        complete:function(respuesta){

           $("#idCliente").val("");
            $("#nameCliente").val("");
            $("#emailCliente").val("");
            $("#ageCliente").val("");
            
            console.log("Guardado!");

        }
    });
}

function registrarMensaje(){
    
    let myData= {
        id: $("#idMensaje").val(),
        messagetext: $("#mesagge").val()
    };
    let dataToSend = JSON.stringify(myData);
    
    $.ajax({
		url: "https://gfb87b1ac288bfc-db202109232116.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message",
        type:"POST",
        data: myData,
        dataType:"json",
        complete:function(respuesta){

           $("#idMensaje").val("");
            $("#mesagge").val("");
            
            console.log("Guardado!");

        }
    });
}


// Metodos PUT
function editarF(idm){
    $("#idFin").empty();
    $("#idFin").val(idm);    
}
function editarFinca(){
    let myData= {
        id: $("#idFin").val(),
        address: $("#addressFin").val(),
        exension: $("#exensionFin").val(),
        category_id: $("#category_idFin").val(),
        name: $("#nameFin").val()
    };

    let dataToSend = JSON.stringify(myData);
    
    $.ajax({
		url: "https://gfb87b1ac288bfc-db202109232116.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/farm/farm",
        type:"PUT",
        data: dataToSend,
        contentType: 'application/json',
        success:function(respuesta){
            verFincas();
            console.log("Editado");
        }
    });
}



function editarC(idm){
    $("#idCli").empty();
    $("#idCli").val(idm);    
}
function editarCliente(){
    let myData= {
        id: $("#idCli").val(),
        name: $("#nameCli").val(),
        email: $("#emailCli").val(),
        age: $("#ageCli").val()
    };

    let dataToSend = JSON.stringify(myData);

    
    $.ajax({
		url: "https://gfb87b1ac288bfc-db202109232116.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client",
        type:"PUT",
        data: dataToSend,
        contentType: 'application/json',
        success:function(respuesta){
            verClientes();
            console.log("Editado");
        }
    });
}



function editarM(idm){
    $("#idEdit").empty();
    $("#idEdit").val(idm);    
}
function editarMensaje(){
    let myData= {
        id: $("#idEdit").val(),
        messagetext: $("#mesaggeedit").val()
    };

    let dataToSend = JSON.stringify(myData);

    $.ajax({
		url: "https://gfb87b1ac288bfc-db202109232116.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message",
        type:"PUT",
        data: dataToSend,
        contentType: 'application/json',
        success:function(respuesta){
            verMensajes();
            console.log(myData)
            console.log("Editado");
        }
    });
}


// Metodo DELETE

function BorrarFinca(idm){
    let myData={
        id:idm
    }
    
    let dataToSend = JSON.stringify(myData);
    $.ajax({
		url: "https://gfb87b1ac288bfc-db202109232116.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/farm/farm",
        type:"DELETE",
        data: dataToSend,
        contentType:"application/json",
        dataType:"json",
        success:function(respuesta){            
            console.log(respuesta);
            verFincas();
        }
    });   
}

function BorrarMensaje(idm){
    let myData={
        id:idm
    }
    
    let dataToSend = JSON.stringify(myData);
    $.ajax({
		url: "https://gfb87b1ac288bfc-db202109232116.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message",
        type:"DELETE",
        data: dataToSend,
        contentType:"application/json",
        dataType:"json",
        success:function(respuesta){            
            console.log(respuesta);
            verMensajes();
        }
    });   
}