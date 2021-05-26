let i = 0;
let y = 0;
let j = 0;
let pozicion = 0;
let level = 1;
let tah = 0;
function incraselevel(myint = 0)
{
    if (myint != 3) {
        myint++;
    }
    else {
        myint = 1;
    }
    return myint;
}
function decraselevel(myint = 0)
{
    if (myint != 0) {
        myint--;
    }
    else {
        myint = 3;
    }
    return myint;
}

function vyhodnotenie(myarr = [][0, 0, 0])
{
    let row = 0;
    let i = 0, y = 0;
    let column = 0;
    let diagonal = 0;
    for (j = 1; j < 3; j++) {
        for (i = 0; i < 3; i++) {
            for (y = 0; y < 3; y++) {
                if (myarr[i][y] == j) {
                    row++;
                    if (row == 3) {
                        return 1;
                    } 
                }
            }
        }
    }
}

//*********************PROGRAM**************************//
basic.forever(function () {
    basic.showString("Vyber si obtiaznost (1-3): ")
    while (1) {
        basic.showNumber(level)
        input.onButtonPressed(Button.A, function () {
            level = decraselevel(level);
        })
        input.onButtonPressed(Button.B, function () {
            level = incraselevel(level);
        })
        input.onButtonPressed(Button.AB, function () {
            i = 1;
        })
    if (i == 1) {
            break;
        }
    }
    basic.clearScreen()
    for (i = 0; i < 5; i++) {
        for (y = 0; y < 5; y++) {
            if ((i == 0 || i == 4) || (y == 0 || y == 4)) {
                led.plotBrightness(i, y, 5);
            }
        }
    }
    let myarr = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
    let vyhra = 0;
    pause(10000);
    let pocet_tahov = 0;
    while (1) {
        // tah hraca
        if (tah == 0) {
            ++pocet_tahov;
            
            tah = 1;
        }
        //tah bota 
        else {
            pocet_tahov++;
            if (level == 1) {

            }
            else if (level == 2) {

            }
            else {

            }
            tah = 0;
        }
        // vyhodnotenie
        vyhra = vyhodnotenie(myarr);
        if (vyhra == 1) {
            break;
        }
        if (pocet_tahov == 9) {
            basic.showString("Draw!");
            break;
        }    
    }
})
