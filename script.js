let spaceshipName = prompt("Qual o nome da nave?");

let invertdSpaceshipName = "";

for (let i = spaceshipName.length - 1; i >= 0; i--) {
    if (spaceshipName[i] == "e") {
        break;
    }
    invertdSpaceshipName += spaceshipName[i];
}

alert('Nome original: ' + spaceshipName + '\nNome invertido: ' + invertdSpaceshipName);