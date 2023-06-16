<?php



    function test_input($data) {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }


    if ($_SERVER['REQUEST_METHOD'] === 'POST') {

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

                
        }
       

        include "formulario.html";

      } elseif (isset($_POST['Consultar'])) {
        
       
      }

      $conn-> close();
    }

   /* if($_GET){

    
       
        $sql = "SELECT * FROM usuario";
        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
            echo "<table><tr><th>Nombre</th><th>Primer apellido</th><th>Segundo apellido</th><th>Email</th><th>Login</th><th>Password</th></tr>";
            // output data of each row
            while($row = $result->fetch_assoc()) {
                echo "<tr><td>" . $row["nombre"]. "</td><td>" . $row["primerapellido"]. "</td><td>" . $row["segundoapellido"]. "</td><td>" . $row["email"]. "</td><td>" . $row["login"]. "</td><td>" . $row["password"]. "</td></tr>";
            }
            echo "</table>";
        } else {
            echo "0 results";
        }

        $conn-> close();


    }*/

    

?>



