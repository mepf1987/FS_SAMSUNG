<?php

    if($_POST){
        $nombre= $_POST['nombre'];
        $apellido= $_POST['apellido'];
        $email= $_POST['email'];
        //DB connection info
        $servername="localhost";
        $username="root";
        $password="";
        $dbname="cursosql";
        
        //Create connection
        $conn=new mysqli($servername,$username,$password,$dbname);
        if($conn->connect_error){
            die("Connection failed: " . $conn->connect_error);
        }
        $sql= "INSERT INTO usuario (nombre, apellido, email)
        VALUES('$nombre', '$apellido', '$email')";
        if($conn->query($sql) === TRUE){
            $respuesta = "New record create successfully";
        }else{
            $respuesta = "Error: " . $sql . "<br>" . $conn->error ;
        }
        $conn-> close();
    }

    $respuesta = urlencode($respuesta);
    header("Location: formulario.html?respuesta=$respuesta");

?>



