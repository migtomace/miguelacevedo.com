<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Miguel Acevedo</title>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css?family=Abhaya+Libre|Libre+Baskerville|Marcellus+SC|Monoton" rel="stylesheet">
    <link rel="stylesheet" href="css/style.css" type="text/css" />
    <link rel="stylesheet" href="css/tablet.css" type="text/css" />
    <link rel="stylesheet" href="css/mobile.css" type="text/css" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.2.0/anime.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
</head>
<body>

<div id="title">Miguel Acevedo - Software Developer</div>
<!--animation goes here-->
<!--<div id="anime"></div>-->

<div class="container">

    <nav>
        <i class="fas fa-angle-up" id="up" onclick="up()"></i>
        <i title="Profile" class="fas fa-user" id="aboutButton"></i>
        <i title="Projects" class="far fa-folder-open" id="projectsButton"></i>
        <i title="Contact" class="far fa-envelope" id="contactButton"></i>
        <i class="fas fa-angle-down" id="down" onclick="down()"></i>
    </nav>



    <main>
        <div id="about">
            <img src="images/me.jpg" alt="Miguel Acevedo">
            <section>
            I am a local Seattle Software Developer.
            <br> I design websites in HTML5 and CSS3, then develop them with JavaScript and PHP.
            <br> I also develop Android Applications in JAVA.
            <br><br> Check out my <span id="hoverResume">Technical Resume</span> to view my relevant experience.
            </section>
        </div>

        <div id="projects">
            <a title="www.katherinevanbebber.com" href="http://www.katherinevanbebber.com"><img src="images/kvb.jpeg" alt="katherinevanbebber.com"></a>
            <section>Katherine Van Bebber is a local Seattle Cover Artist. She performs at weddings and other local events.
                <br>I have had the pleasure of developing her website.
                <br><br>Check out my <span id="hoverGit">GitHub</span> to see what android applications I have been working on.
            </section>
        </div>

        <div id="contact">

            <?php include "php/contact.php" ?>

            <p>Connect with me on <span id="hoverIn">LinkedIn</span></p>

        </div>

    </main>

    <aside>
        <a title="LinkedIn" href="https://www.linkedin.com/in/miguel-acevedo-525931163/"><i class="fab fa-linkedin-in" id="in"></i></a>
        <!--white space between icons-->
        <a title="Technical Resume" href="https://docs.google.com/document/d/1mZrP8_526iDkWOIgZSQG-kiNrafUiYWzVHws01zo33A/edit?usp=sharing"><i class="far fa-file-alt" id="doc"></i></a>
        <!--white space between icons-->
        <a title="Github" href="https://github.com/migtomace"><i class="fab fa-github" id="github"></i></a>
    </aside>


</div>

<footer>
    <p><small>&copy; 2018 <a href="">Miguel Acevedo</a> - All Rights Reserved</small></p>
</footer>


<script src="js/main.js"></script>
<script src="js/mobile.js"></script>
</body>
</html>