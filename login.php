<?php
// Connect to the database
$pdo = new PDO('mysql:host=localhost;dbname=mydatabase', 'username', 'password');

// Retrieve the submitted username and password
$username = $_POST['username'];
$password = $_POST['password'];

// Query the database for a matching user
$stmt = $pdo->prepare('SELECT * FROM users WHERE username = :username AND password = :password');
$stmt->execute(['username' => $username, 'password' => $password]);
$user = $stmt->fetch();

// If a user was found, set the session variable and redirect to a protected page
if ($user) {
    session_start();
    $_SESSION['user_id'] = $user['id'];
    header('Location: protected.php');
    exit;
} else {
    // Display an error message if the login was unsuccessful
    echo 'Invalid username or password.';
}
?>
