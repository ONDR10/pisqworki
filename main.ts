let i = 0
let y = 0
let pozicion = 0
let level = 1
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
                led.plotBrightness(i, y, 10);
            }
        }
    }
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
        if (1) {

        }
        if (pocet_tahov == 9) {
            basic.showString("Draw!");
            break;
        }    
    }
})
