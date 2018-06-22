<?php
// define variables and set to empty values
$subject = $_POST['first'] . " " . $_POST['last'];
$body = $_POST['body'] . "\r\n" . "Phone: " . $_POST['phone'];
$headers = "From: " . $_POST['email'];
mail('migtomace@gmail.com', $subject, wordwrap($body,70), $headers);

?>
<form action="index.php" method="POST">
    <div class="row">
        <input type="text" name="first" placeholder="First Name" required>
        <input type="text" name="last" placeholder="Last Name" required>
    </div>

    <div class="row">
        <input type="email" name='email' placeholder="Email Address" required>
        <input type="email" placeholder="Confirm Email" required>
    </div>

    <div class="row">
        <input type="phone" name="phone" placeholder="Phone" required>
    </div>

    <div class="row">
        <textarea cols="" rows="" name="body" placeholder="Comments..." required>
        </textarea>
    </div>

    <div class="row">
        <input type="reset" value="Clear">
        <input type="submit" value="Submit">
    </div>

</form>