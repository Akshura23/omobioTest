<?php
$serverName = "localhost";
$user = "root";
$pass = "";
$databaseName = "exam";

$conn = mysqli_connect($serverName,$user,$pass,$databaseName);

//Check Connection
if(!$conn)
	die("Connection Failed : ".mysqli_connect_error());

     header("Access-Control-Allow-Origin: *");
$username = $_POST['userName'];
$password = $_POST['password'];

$query = "SELECT * from user where username='$username' and password='$password'";
$result = mysqli_query($conn, $query);
if(mysqli_num_rows($result)==1){
	session_start();
	$_SESSION['auth'] = 'true';
    //header(('location: http://localhost:3000/userlist'));
    {echo 'ok';}
}
else{
	{echo ' Invalid username and password';}
}

?>