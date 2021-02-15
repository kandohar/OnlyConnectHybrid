// events
function StartChronoClicked() {
    milliseconds = 0;

    hint = 1;
    hint1.style.visibility = "visible";

    secondPassedInterval = setInterval(SecondPassed, interval);

    points.innerHTML = "5 points";

    startChronoButton.disabled = true;
    stopChronoButton.disabled = false;
    nextHintButton.disabled = false;
}

function StopChronoClicked() {
    clearInterval(secondPassedInterval);

    stopChronoButton.disabled = true;
    showAnswerButton.disabled = false;
}

function SecondPassed() {
    milliseconds += interval;

    var maxTime = timePerQuestionInput.value * 1000;

    var percent = (milliseconds / maxTime) * 100;

    progress.style.width = percent + "%";

    if (percent >= 100) {
        StopChronoClicked();
    }
}

function NextHintClicked() {
    if (hint == 1) {
        hint2.style.visibility = "visible";
        points.innerHTML = "3 points";
        hint++;
    } else if (hint == 2) {
        hint3.style.visibility = "visible";
        points.innerHTML = "2 points";
        hint++;
    } else if (hint == 3) {
        hint4.style.visibility = "visible";
        points.innerHTML = "1 point";
        hint++;
        nextHintButton.disabled = true;
    }
}

function ShowAnswerClicked() {
    clearInterval(secondPassedInterval);

    hint1.style.visibility = "visible";
    hint2.style.visibility = "visible";
    hint3.style.visibility = "visible";
    hint4.style.visibility = "visible";

    answer.style.visibility = "visible";

    nextHintButton.disabled = true;
    showAnswerButton.disabled = true;
    nextQuestionButton.disabled = false;
}

function NextQuestionClicked() {

    // random between 0 and data.lenght, then remove the selected item
    var remainingQuestions = data.length;

    if (remainingQuestions == 0) {
        hint1.style.visibility = "hidden";
        hint2.style.visibility = "hidden";
        hint3.style.visibility = "hidden";
        hint4.style.visibility = "hidden";
        answer.style.visibility = "visible";

        answer.innerHTML = "FIN";

        progress.style.width = "0%";

        startChronoButton.disabled = true;
        nextHintButton.disabled = true;
        stopChronoButton.disabled = true;
        showAnswerButton.disabled = true;
        nextQuestionButton.disabled = true;

        body.style.backgroundColor = "#ffa929";
    } else {

        var randomQuestionIndex = Math.floor(Math.random() * remainingQuestions);
        var question = data.splice(randomQuestionIndex, 1)[0];

        hint1.style.visibility = "hidden";
        hint2.style.visibility = "hidden";
        hint3.style.visibility = "hidden";
        hint4.style.visibility = "hidden";
        answer.style.visibility = "hidden";

        hint1.innerHTML = question.hint1;
        hint2.innerHTML = question.hint2;
        hint3.innerHTML = question.hint3;
        hint4.innerHTML = question.hint4;

        answer.innerHTML = question.answer;

        progress.style.width = "0%";

        points.innerHTML = "";

        nextQuestionButton.disabled = true;
        startChronoButton.disabled = false;

        if (firstTeam) {
            body.style.backgroundColor = "#174d4d";
        } else {
            body.style.backgroundColor = "#552525";
        }

        firstTeam = !firstTeam;
    }

    remaining.innerHTML = remainingQuestions + " questions";
}


// DOM variables
var body = document.getElementById("body");

var team1Score = document.getElementById("team1");
var team2Score = document.getElementById("team2");

var remaining = document.getElementById("remaining");

var hint1 = document.getElementById("hint1");
var hint2 = document.getElementById("hint2");
var hint3 = document.getElementById("hint3");
var hint4 = document.getElementById("hint4");

var progress = document.getElementById("bar");

var answer = document.getElementById("answer");

var points = document.getElementById("points");

var startChronoButton = document.getElementById("StartChrono");
startChronoButton.onclick = function () { StartChronoClicked() };
startChronoButton.disabled = true;

var stopChronoButton = document.getElementById("StopChrono");
stopChronoButton.onclick = function () { StopChronoClicked() };
stopChronoButton.disabled = true;

var nextHintButton = document.getElementById("NextHint");
nextHintButton.onclick = function () { NextHintClicked() };
nextHintButton.disabled = true;

var showAnswerButton = document.getElementById("ShowAnswer");
showAnswerButton.onclick = function () { ShowAnswerClicked() };
showAnswerButton.disabled = true;

var nextQuestionButton = document.getElementById("NextQuestion");
nextQuestionButton.onclick = function () { NextQuestionClicked() };

var timePerQuestionInput = document.getElementById("timePerQuestion");

// Global variables
var hint = 0;

var milliseconds = 0;

const interval = (1 / 60) * 1000;

var firstTeam = true;

// data
var data = [
    /*{
        "hint1": "Fer à cheval",
        "hint2": "Patte de lapin",
        "hint3": "Trèfle",
        "hint4": "777",
        "answer": "Chance"
    },*/
    {
        "hint1": "Cidre",
        "hint2": "Celtique",
        "hint3": "Diverse",
        "hint4": "Hybrid",
        "answer": "Équipes-projets Inria Rennes"
    },
    {
        "hint1": "Bienveance",
        "hint2": "Transparence",
        "hint3": "Solidarité",
        "hint4": "Autonomie",
        "answer": "Valeurs de l'équipe Hybride (parmis 7)"
    },
    /*{
        "hint1": "Karadoc",
        "hint2": "Perceval",
        "hint3": "Guenièvre",
        "hint4": "Arthur",
        "answer": "Kammelott/Légende du roi Arthur"
    },*/
    {
        "hint1": "Amérique",
        "hint2": "Tibet",
        "hint3": "Congo",
        "hint4": "Lune",
        "answer": "Les aventures de Tintin"
    },
    /*{// A REVOIR
        "hint1": "Resurrection",
        "hint2": "Revolutions",
        "hint3": "Reloaded",
        "hint4": "-",
        "answer": "Matrix"
    },*/
    /*{// A REVOIR
        "hint1": "The Last of Us Part II",
        "hint2": "The Legend of Zelda: Breath of the Wild",
        "hint3": "God of War",
        "hint4": "Sekiro: Shadows Die Twice",
        "answer": "The Game Awards winners - GOTY"
    },*/
    /*{// A REVOIR
        "hint1": "Fish",
        "hint2": "Wisp",
        "hint3": "Bulky",
        "hint4": "Radio",
        "answer": "Official Inktober 2020 prompt list"
    },*/
    /*{
        "hint1": "Vue",
        "hint2": "Toucher",
        "hint3": "Goût",
        "hint4": "Odorat",
        "answer": "Sens"
    },*/
    {// A REVOIR
        "hint1": "Parasite",
        "hint2": "Green Book : Sur les routes du sud",
        "hint3": "La Forme de l'eau",
        "hint4": "Moonlight",
        "answer": "Meilleurs films aux Oscars"
    },
    {
        "hint1": "Api",
        "hint2": "amour",
        "hint3": "Adam",
        "hint4": "de terre",
        "answer": "Pomme"
    },
    /*{// A REVOIR
        "hint1": "Europe",
        "hint2": "Io",
        "hint3": "Ganymède",
        "hint4": "Callisto",
        "answer": "Lunes de Jupiter"
    },*/
    /*{// A REVOIR
        "hint1": "79",
        "hint2": "83",
        "hint3": "89",
        "hint4": "97",
        "answer": "Derniers nombres premiers avant 100"
    },*/
    {
        "hint1": "Tokyo",
        "hint2": "Rio de Janeiro",
        "hint3": "Londres",
        "hint4": "Pékin",
        "answer": "Villes olympiques"
    },
    {
        "hint1": "Paris",
        "hint2": "Las Vegas",
        "hint3": "Macao",
        "hint4": "Hangzhou",
        "answer": "Tour Eiffel et reproductions"
    },
    {
        "hint1": "Révélation",
        "hint2": "Hésitation",
        "hint3": "Tentation",
        "hint4": "Fascination",
        "answer": "Twilight"
    },
    {
        "hint1": "Kurt Cobain",
        "hint2": "Jim Morrison",
        "hint3": "Jimi Hendrix",
        "hint4": "Amy Winehouse",
        "answer": "Club des 27"
    },
    /*{// A REVOIR
        "hint1": "Rouge et Bleu",
        "hint2": "Or et Argent",
        "hint3": "Rubis et Saphir",
        "hint4": "Diamant et Perle",
        "answer": "Pokémon"
    },*/
    {
        "hint1": "vais",
        "hint2": "regard",
        "hint3": "lieu",
        "hint4": "frère",
        "answer": "Beau___"
    },
    {
        "hint1": "Henry",
        "hint2": "Roland",
        "hint3": "Gaugry",
        "hint4": "Ardisson",
        "answer": "Thierry ___"
    },
    {
        "hint1": "Hallyday",
        "hint2": "Bowie",
        "hint3": "Lynch",
        "hint4": "Guetta",
        "answer": "David ___"
    },
    {
        "hint1": "Pie",
        "hint2": "Sniper",
        "hint3": "Psycho",
        "hint4": "History X",
        "answer": "American ___"
    },
    {
        "hint1": "Johnny English",
        "hint2": "Mission G",
        "hint3": "OSS 117",
        "hint4": "Austin Powers",
        "answer": "Parodie de film d'espionnage"
    },
    {
        "hint1": "Tony",
        "hint2": "Diego",
        "hint3": "Hobbes",
        "hint4": "Shere Khan",
        "answer": "Tigre"
    },
    /*{// A REVOIR
        "hint1": "Le radeau de la Méduse",
        "hint2": "La Vénus de Milo",
        "hint3": "La Liberté guidant le peuple",
        "hint4": "Les taureaux ailés",
        "answer": "Oeuvres au Louvre"
    },*/
    {
        "hint1": "Abel",
        "hint2": "Fredo",
        "hint3": "N'Jobu",
        "hint4": "Mufasa",
        "answer": "Fratricide"
    },
    /*{// A REVOIR
        "hint1": "Paris",
        "hint2": "Istanbul",
        "hint3": "Londres",
        "hint4": "Venise",
        "answer": "Lieux dans Assasin's Creed"
    },*/
    {
        "hint1": "Bordeaux",
        "hint2": "Grenoble",
        "hint3": "Lille",
        "hint4": "Rennes",
        "answer": "Centres Inria"
    },
    {
        "hint1": "Missillac",
        "hint2": "La Gacilly",
        "hint3": "Carnac",
        "hint4": "Discord",
        "answer": "Séminaires au vert"
    },
    /*{// A REVOIR
        "hint1": "Alessandro",
        "hint2": "Isaac",
        "hint3": "André-Marie",
        "hint4": "Charles-Augustin",
        "answer": "Prénoms de gens qui ont donnés leur noms à des unités"
    },*/
    {
        "hint1": "OCaml",
        "hint2": "Pharo",
        "hint3": "TousAntiCovid",
        "hint4": "SOFA",
        "answer": "Logiciels développés par Inria"
    },
    /*{// A REVOIR
        "hint1": "Prophase",
        "hint2": "Métaphase",
        "hint3": "Anaphase",
        "hint4": "Télophase ",
        "answer": "Mitose"
    },*/
    /*{// A REVOIR
        "hint1": "Adénine",
        "hint2": "Cytosine",
        "hint3": "Guanine",
        "hint4": "Thymine ",
        "answer": "Bases nucléiques de l'ADN"
    },*/
    {
        "hint1": "Oignon",
        "hint2": "Bébé",
        "hint3": "Atmosphère",
        "hint4": "Peau",
        "answer": "Couches"
    }
];

remaining.innerHTML = data.length + " questions";

// question exemple sur la culture des patates