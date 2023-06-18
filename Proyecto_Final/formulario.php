<?php



    function test_input($data) {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }


    if ($_POST) {

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


        if (isset($_POST['Enviar'])) {

        

        //Errors vars
        $nombreErr= "";
        $primerApellidoErr="";
        $segundoApellidoErr= "";
        $emailErr= "";
        $loginErr= "";
        $passwordErr= "";
        $generalErr="";
        

        $nombre= $_POST['nombre'];
        $primerApellido= $_POST['primerApellido'];
        $segundoApellido= $_POST['segundoApellido'];
        $email= $_POST['email'];
        $login= $_POST['login'];
        $password= $_POST['password'];
        $respuesta="";
        $usuariosRegistrados=[];



        $findSql= "SELECT email FROM usuario WHERE email = '$email'";
        $result = $conn->query($findSql);

        if ($result->num_rows > 0) {
                $emailErr = "Email already registered";

        } else {
            $sql= "INSERT INTO usuario (nombre, primerapellido, segundoapellido, email, login, password )
            VALUES('$nombre', '$primerApellido', '$segundoApellido', '$email', '$login' , '$password')";
    
            if($conn->query($sql) === TRUE){
                $respuesta = "Registro completado con éxito";
            }else{
                $respuesta = "Error: " . $sql . "<br>" . $conn->error ;
            }

            $sql = "SELECT * FROM usuario";
            $result = $conn->query($sql);
    
            if ($result->num_rows > 0) {
                $usuariosRegistrados="<table>";
                $usuariosRegistrados= $usuariosRegistrados . "<tr><th>Nombre</th><th>Primer apellido</th><th>Email</th></tr>";
            
                // Obtener los datos de la consulta
                while ($fila = mysqli_fetch_assoc($result)) {

                    //$user = array('nombre' => $fila['NOMBRE'], 'apellido' =>  $fila['PRIMERAPELLIDO'], 'email'=>  $fila['EMAIL']);
                    //array_push($usuariosRegistrados, $user);
                    // Acceder a los valores de la fila
                    $nombre = $fila['NOMBRE'];
                    $apellido = $fila['PRIMERAPELLIDO'];
                    $email = $fila['EMAIL'];
            
                    // print_r($fila);
                    // Agregar una nueva fila a la tabla
                    $usuariosRegistrados= $usuariosRegistrados . "<tr><td>" . $nombre . "</td><td>" . $apellido .  "</td><td>" . $email . "</td></tr>";
                }
                //$usuariosRegistrados= json_encode($usuariosRegistrados);
            
                // Finaliza la construcción de la tabla
                $usuariosRegistrados= $usuariosRegistrados . "</table>";
            
                // Liberar la memoria del resultado
                mysqli_free_result($result);
            } 
                
        }

      } 

      include "formulario.html";
      $conn-> close();
    }



    

?>



