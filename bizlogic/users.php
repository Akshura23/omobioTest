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
$query = "SELECT * from user";
$result = mysqli_query($conn, $query);

echo '[';
for($i=0; $i<mysqli_num_rows($result); $i++){
	echo ($i>0?',':'').json_encode(mysqli_fetch_object($result));
}
echo ']';
?>