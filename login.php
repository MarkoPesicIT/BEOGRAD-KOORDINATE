<?php
// Check if the form was submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Get the username and password from the form
  $username = $_POST["korisnik"];
  $password = $_POST["sifra"];

  // Connect to the database
  $db = new SQLite3('database.db');

  // Query the database to see if the username and password match
  $stmt = $db->prepare('SELECT * FROM users WHERE korisnik = :korisnik AND sifra = :sifra');
  $stmt->bindValue(':korisnik', $username, SQLITE3_TEXT);
  $stmt->bindValue(':sifra', $password, SQLITE3_TEXT);
  $result = $stmt->execute();

  // Check if there was a match
  if ($result->fetchArray(SQLITE3_ASSOC)) {
    // The username and password match, so start a session and redirect to the homepage
    session_start();
    $_SESSION["korisnik"] = $username;
    header("Location: index.php");
    exit();
  } else {
    // The username and password do not match, so show an error message
    $error = "Invalid username or password";
  }

  // Close the database connection
  $db->close();
}
?>
