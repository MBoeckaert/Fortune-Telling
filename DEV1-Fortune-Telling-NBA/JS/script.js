//create a global $form variable, to make it accessible everywhere
const $form = document.querySelector(`.form-general`);
{
    const teams = [
        //west beach teams
        { name: "LA Lakers", type: "evening", style: "beach", min: 0, max: 20 },
        { name: "LA Clippers", type: "evening", style: "beach", min: 21, max: 40 },
        { name: "Phoenix Suns", type: "evening", style: "beach", min: 41, max: 60 },
        { name: "Sacramento Kings", type: "evening", style: "beach", min: 61, max: 80 },
        { name: "Golden State Warriors", type: "evening", style: "beach", min: 81, max: 99 },
        //west nature teams
        { name: "Denver Nuggets", type: "evening", style: "nature", min: 0, max: 20 },
        { name: "Oklahoma City Thunder", type: "evening", style: "nature", min: 21, max: 40 },
        { name: "Utah Jazz", type: "evening", style: "nature", min: 41, max: 60 },
        { name: "Portland Trail Blazers", type: "evening", style: "nature", min: 61, max: 80 },
        { name: "Minnesota Timberwolves", type: "evening", style: "nature", min: 81, max: 99 },
        //wesst city teams
        { name: "Houston Rockets", type: "evening", style: "city", min: 0, max: 20 },
        { name: "Dallas Mavericks", type: "evening", style: "city", min: 21, max: 40 },
        { name: "Memphis Grizzlies", type: "evening", style: "city", min: 41, max: 60 },
        { name: "San Antonio Spurs", type: "evening", style: "city", min: 61, max: 80 },
        { name: "New Orleans Pelicans", type: "evening", style: "city", min: 81, max: 99 },
        //east beach teams
        { name: "Miami Heat", type: "morning", style: "beach", min: 0, max: 20 },
        { name: "Orlando Magic", type: "morning", style: "beach", min: 21, max: 40 },
        { name: "Washington Wizards", type: "morning", style: "beach", min: 41, max: 60 },
        { name: "Charlotte Hornets", type: "morning", style: "beach", min: 61, max: 80 },
        { name: "Atlanta Hawks", type: "morning", style: "beach", min: 81, max: 99 },
        //east nature teams
        { name: "Milwaukee Bucks", type: "morning", style: "nature", min: 0, max: 20 },
        { name: "Indiana Pacers", type: "morning", style: "nature", min: 21, max: 40 },
        { name: "Chicago Bulls", type: "morning", style: "nature", min: 41, max: 60 },
        { name: "Detroit Pistons", type: "morning", style: "nature", min: 61, max: 80 },
        { name: "Cleveland Cavaliers", type: "morning", style: "nature", min: 81, max: 99 },
        //east city teams
        { name: "Toronto Raptors", type: "morning", style: "city", min: 0, max: 20 },
        { name: "Boston Celtics", type: "morning", style: "city", min: 21, max: 40 },
        { name: "Philadelphia 76ers", type: "morning", style: "city", min: 41, max: 60 },
        { name: "Brooklyn Nets", type: "morning", style: "city", min: 61, max: 80 },
        { name: "New York Knicks", type: "morning", style: "city", min: 81, max: 99 },
    ];

    //print message
    const printMessage = message => document.querySelector(`.announcement__message`).textContent = message;

    //get number & name input on image
    const nameOnJersey = () => {
        const input = document.querySelector(`input`);
        const logName = document.querySelector(`.jersey__name`);
        input.addEventListener(`input`, updateValueOne);

        function updateValueOne(e) {
            logName.textContent = e.target.value;
        }
    };
    const numberOnJersey = () => {
        const input = document.querySelector(`input:nth-child(2)`);
        const logNumber = document.querySelector(`.jersey__number`);
        input.addEventListener(`input`, updateValueOne);

        function updateValueOne(e) {
            logNumber.textContent = e.target.value;
        }
    };

    //when click on submit button gather info from inputs
    const handleSubmitApplication = e => {
        e.preventDefault();

        //select training, lifestyle and number from form
        //training
        const $training = $form.querySelector(`.form__training`);
        const getTrainingInput = $training.options[$training.selectedIndex].textContent;
        //lifestyle
        const $lifestyle = $form.querySelector(`.form__lifestyle`);
        const getLifestyleInput = $lifestyle.options[$lifestyle.selectedIndex].textContent;
        //number
        const $number = $form.querySelector(`.form__number`).value;
        //check the outcome of your input, which team have you selected
        const getTeam = teams.filter(team => team.type === getTrainingInput && team.style === getLifestyleInput && team.min <= $number && team.max >= $number);
        const team = getTeam[0].name;

        //get name from form and put on draftboard
        const $getName = $form.querySelector(`.form__name`).value.trim();
        const firstPick = document.querySelector(`.draftorder__player`).textContent = $getName;
        printMessage(`With the first pick, the ${team} have selected: ${firstPick}!`);

        //add name to the players array
        const players = [`A. Edwards`, `J. Wiseman`, `L. Ball`, `P. Williams`, `I. Okoro`, `K. Hayes`, `O. Toppin`, `D. Avdija`, `J. Smith`];
        players.unshift(firstPick);

        //get the players and put them on screen 
        const elements = [].slice.call(document.querySelectorAll('.draftorder__player'));
        elements.forEach(function (div, i) {
            if (players.length >= i) 
                div.textContent = players[i];
        });

        //on click submit set opacity to 0 after couple of sec
        document.querySelector(`.announcement`).style.opacity = "0";

        //Scroll to another div in html
        document.querySelector(`.article`).scrollIntoView({
            behavior: "smooth"
        });
    }

    const init = () => {
        nameOnJersey();
        numberOnJersey();
        $form.addEventListener(`submit`, handleSubmitApplication);

    };

    init();
}