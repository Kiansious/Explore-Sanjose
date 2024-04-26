<?php
include("connection.php")
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" type="text/css" href="index.css">
    <script>
        function showpass() {
            var passwordInput = document.getElementById("pass");
            if (passwordInput.type === "password") {
                passwordInput.type = "text";
            } else {
                passwordInput.type = "password";
            }
        }
    </script>
</head>
<body>
    <div id="form">
        <center>
        <h1>Login Form</h1>
</center> 
        <form name="form" action="login.php" method="POST">
            <label>username:</label>
            <input type="text" id="user" name="user"><br><br>
            <label>password:</label>
            <input type="password" id="pass" name="pass"><br>
            <div class="cbox">
                <div class="cboxcon">
                <input type="checkbox" onclick="showpass()">
                <label>Show Password</label>
            </div>
            </div>
            <center>
            <input type="submit" id="btn" value="Login" name="submit"/>

</center>
    </form>
    </div>
</body>
</html>