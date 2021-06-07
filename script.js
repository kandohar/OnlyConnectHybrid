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

    // random between 0 and data.length, then remove the selected item
    var remainingQuestions = data.length;

    if (remainingQuestions == maxQuestions) {// first question : example
        var question = data.splice(0, 1)[0];

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
    }
    else if (remainingQuestions == 0) {// end of quiz, no question
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
    {// EXAMPLE
        "hint1": "Fer à cheval",
        "hint2": "Trèfle à 4 feuilles",
        "hint3": "Patte de lapin",
        "hint4": "777",
        "answer": "Chance"
    },

    {
        "hint1": "Dionysos",
        "hint2": "Myriads",
        "hint3": "Dyliss",
        "hint4": "Hybrid",
        "answer": "Équipes-projets Inria Rennes"
    },
    {
        "hint1": "Cidre",
        "hint2": "Camembert",
        "hint3": "Calvados",
        "hint4": "Teurgoule",
        "answer": "Spécialités normandes"
    },
    {
        "hint1": "Alexandrie",
        "hint2": "Rhodes",
        "hint3": "Olympie",
        "hint4": "Khéops",
        "answer": "Lieux des merveilles du monde antique"
    },
    {
        "hint1": "Indonésie",
        "hint2": "Mexique",
        "hint3": "Soudan",
        "hint4": "Egypte",
        "answer": "Pays avec des pyramides"
    },
    {
        "hint1": "Jospin",
        "hint2": "Astier",
        "hint3": "Richie",
        "hint4": "Messi",
        "answer": "Lionel ___"
    },
    {
        "hint1": "Api",
        "hint2": "amour",
        "hint3": "Adam",
        "hint4": "de terre",
        "answer": "Pomme"
    },
    {
        "hint1": "Zagreus",
        "hint2": "Persée",
        "hint3": "Thésée",
        "hint4": "Héraclès",
        "answer": "Fils de dieux grec"
    },
    {
        "hint1": "flexe",
        "hint2": "férence",
        "hint3": "cision",
        "hint4": "spect",
        "answer": "Circon_"
    },
    {
        "hint1": "Kaufman",
        "hint2": "Risoli",
        "hint3": "De Villiers",
        "hint4": "Katerine",
        "answer": "Philippe ___"
    },
    {
        "hint1": "François",
        "hint2": "Philippe",
        "hint3": "Henri",
        "hint4": "Louis",
        "answer": "Prénoms royaux"
    },
    {
        "hint1": "Bienveance",
        "hint2": "Transparence",
        "hint3": "Solidarité",
        "hint4": "Autonomie",
        "answer": "Valeurs de l'équipe Hybrid (parmis 7)"
    },
    {
        "hint1": "en Hispanie",
        "hint2": "chez les Bretons",
        "hint3": "en Corse",
        "hint4": "chez les Pictes",
        "answer": "Astérix _"
    },
    {
        "hint1": "-",
        "hint2": "Les couloirs du temps",
        "hint3": "La Révolution",
        "hint4": "en Amérique",
        "answer": "Films Les Visiteurs"
    },
    {
        "hint1": "le huitième passager",
        "hint2": "le retour",
        "hint3": "3",
        "hint4": "la résurrection",
        "answer": "Films Alien"
    },
    {
        "hint1": "Apocalypse",
        "hint2": "Extinction",
        "hint3": "Afterlife",
        "hint4": "Retribution",
        "answer": "Films Resident Evil"
    },
    {
        "hint1": "Fedora",
        "hint2": "Mint",
        "hint3": "Elementary",
        "hint4": "Debian",
        "answer": "Distribution Linux"
    },
    {
        "hint1": "Hartnell",
        "hint2": "Smith",
        "hint3": "Baker",
        "hint4": "Tennant",
        "answer": "Docteur Who"
    },
    {
        "hint1": "Indonésie",
        "hint2": "Etats-Unis",
        "hint3": "Inde",
        "hint4": "Chine",
        "answer": "Pays les plus peuplés"
    },
    {
        "hint1": "Un marteau et une plume",
        "hint2": "6 drapeaux des USA",
        "hint3": "Deux balles de Golf",
        "hint4": "Empruntes de pas",
        "answer": "Objets sur la Lune"
    },
    {
        "hint1": "Braeburn",
        "hint2": "Jubilé",
        "hint3": "Tentation",
        "hint4": "Reinette",
        "answer": "Variétés de pomme"
    },

    /*
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
        "answer": "Valeurs de l'équipe Hybrid (parmis 7)"
    },
    {
        "hint1": "Amérique",
        "hint2": "Tibet",
        "hint3": "Congo",
        "hint4": "Lune",
        "answer": "Les aventures de Tintin"
    },
    {
        "hint1": "Resurrection",
        "hint2": "Revolutions",
        "hint3": "Reloaded",
        "hint4": "-",
        "answer": "Matrix"
    },
    {
        "hint1": "The Last of Us Part II",
        "hint2": "The Legend of Zelda: Breath of the Wild",
        "hint3": "God of War",
        "hint4": "Sekiro: Shadows Die Twice",
        "answer": "The Game Awards winners - GOTY"
    },
    {
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
    {
        "hint1": "Le radeau de la Méduse",
        "hint2": "La Vénus de Milo",
        "hint3": "La Liberté guidant le peuple",
        "hint4": "Les taureaux ailés",
        "answer": "Oeuvres au Louvre"
    },
    {
        "hint1": "Abel",
        "hint2": "Fredo",
        "hint3": "N'Jobu",
        "hint4": "Mufasa",
        "answer": "Fratricide"
    },
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
    {
        "hint1": "Alessandro",
        "hint2": "Isaac",
        "hint3": "André-Marie",
        "hint4": "Charles-Augustin",
        "answer": "Prénoms de gens qui ont donnés leur noms à des unités"
    },
    {
        "hint1": "OCaml",
        "hint2": "Pharo",
        "hint3": "TousAntiCovid",
        "hint4": "SOFA",
        "answer": "Logiciels développés par Inria"
    },
    {
        "hint1": "Oignon",
        "hint2": "Atmosphère",
        "hint3": "Bébé",
        "hint4": "Peau",
        "answer": "Couches"
    },
    {
        "hint1": "Patate",
        "hint2": "Brique",
        "hint3": "Oseille",
        "hint4": "Blé",
        "answer": "Argent"
    },
    {
        "hint1": "Bom Bahia",
        "hint2": "Constantinople",
        "hint3": "Petrograd",
        "hint4": "Nouvelle Amsterdam",
        "answer": "Anciens noms de villes"
    }
    */
];

var maxQuestions = data.length;

remaining.innerHTML = data.length + " questions";