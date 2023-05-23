<?php
// Start the session
session_start();

// Check if the user is logged in
if (!isset($_SESSION["username"])) {
  // The user is not logged in, so display the login form
?>
  <form class="login" action="login.php" method="post">
    <label for="username">Korisnicko ime:</label>
    <input type="text" id="username" name="username" /><br /><br />
    <label for="password">Sifra:</label>
    <input type="password" id="password" name="password" /><br /><br />
    <input type="submit" value="Log in" />
    <input type="submit" value="Log out" />
  </form>
  <p class="error"><?php echo isset($error) ? $error : ''; ?></p>
<?php
} else {
  // The user is logged in, so display the homepage
?>
  <h1>Welcome, <?php echo $_SESSION["username"]; ?>!</h1>
  <p><a href="logout.php">Log out</a></p>
<?
