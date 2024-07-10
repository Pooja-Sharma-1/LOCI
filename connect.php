<?php
    $name = $_POST['name'];
    $number = $_POST['number'];
    $email = $_POST['email'];
    $password = $_POST['password'];

    //DB connection
    $conn = new mysqli('localhost','root','','test');
    if($conn->connect_error){
        // die('Connection Failed: ', $conn->connect_error);
    }else{
        $stmt = $conn->prepare("insert into register(name,number,email,password)
        values(?,?,?,?)");
        $stmt->bind_param("siss",$name,$number,$email,$password);
        $stmt->execute();
        $stmt->close(); 
        $conn->close(); 
        header("Location: LOGIN.html");
    }

?>