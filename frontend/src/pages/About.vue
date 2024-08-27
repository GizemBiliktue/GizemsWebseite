<template>
    <div class="about">
        <h1>About me</h1>
        <hr/>
        <div class="introduction">
            <div class="text-section">
                <h3>About me ^^</h3>
                <p>Ich bin Gizem, eine aktuelle Studentin an der Hochschule für Wirtschaft und Technik. Gerade bin ich Praktikantin an dem YouCan! Unternehmen. </p>
                <hr/>
                <p>Ich zeichne, male und gesalte seit ich denken kann. Gleichzeitig habe ich großes Interesse an Technologie und daran etwas zu entwerfen oder zu kreieren.</p>
                <p> Mit der Tätigkeit als Frontend-Developer ist mir beides möglich. </p>
                <hr/>
                <p> Alles was ich bis jetzt so programmiert oder gestaltet habe, findet ihr unter meinen Projekten und in meinem Gituhb :)</p>
            </div>
            <img src="/gizem.png" alt="aboutbild" class="about-bild"/>
        </div>
        <div class="randomfacts">
            <h3>Random Facts</h3>
            <p>Ich esse gerne Süßes</p>
            <p>Habe drei Jahre Klavier gespielt (Habe es mittlerweile bestimmt verlernt)</p>
            <p>Sprachen lernen macht süchtig</p>
            <p>Bin ein Bookjunkie und habe allein in 2024 15 Bücher gelesen - noch!!</p>
        </div>
    </div>
</template>

<style>

.introduction {
    background-color: white;
    padding: 100px;
    overflow: hidden;
    display: flex;
    align-items: flex-start;
}

.introduction p {
    display: contents;
    color: rgb(131, 123, 108);
    font-size: 1.5em;
}

.about-bild {
    flex-basis: 25%;
    max-width: 20%;
    float: right;

}

.text-section {
    flex: 1;
    margin-right: 300px;
    margin-left: 12em;
    text-align: left;
}

.text-section h3{
    font-size: 2.5em;
    color: rgb(131, 123, 108);
    flex-basis: 70%;
}

.randomfacts {
    background-color: rgb(56, 141, 150);
    width: 60em;
    margin-left: 30px;
    margin-top: 20px;
    border-radius: 30px;
    padding: 10px;
    box-shadow: 3px 3px 10px rgb(44, 44, 44);

}

.randomfacts h3{
    color: white;
    font-size: 3em;
}

.randomfacts p{
    color: white;
    font-size: 1.5em;
}
</style>