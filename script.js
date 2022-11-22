const numbers = [] //Array

function generateNumber() {
    const number = Math.floor(Math.random() * 75) + 1; //Generates random numbers between 1-75 and puts it in a button

    if (numbers.includes(number)) {
        return generateNumber();
    } else {
        numbers.push(number);
        return number
    }

}

function init() {

    //Generate 25 buttons
    for (let i = 0; i < 25; i++) {
        const button = document.createElement("button"); //= <button></button> (skapar knapp)

        //Check if number 12 and create different button
        if (i == 12) {
            button.innerText = "🦆"
            button.classList.add("hit");
        } else {
            button.innerText = generateNumber();

            //Gör knappen clickable
            button.innertext = button.addEventListener("click", function () {
                //If already chechek, remove the hit class
                if (button.classList == "hit") {
                    button.classList.remove("hit");
                } else {
                    button.classList.add("hit");
                }
            });
        }

        document.querySelector(".boxtwo").appendChild(button) //lägger knappen i html (div elementet boxtwo)
    }
}

init();