<?php
    $con = mysqli_connect('localhost','root','','test');
    $email = $_POST["email"];
    $password = $_POST["password"];
    
    $sql = "SELECT * FROM register WHERE email = '$email' and password = '$password'";
    
    $result = mysqli_query($con,$sql);
    
    if(mysqli_num_rows($result)>0){
        $rows = mysqli_fetch_assoc($result);
        header("Location: index.html");
    }else{
        header("Location: invalid.cred.html");
    }
    
?>