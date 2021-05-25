let i; 
let y;

for (i = 0; i < 5; i++) {
    for (y = 0; y < 5; y++) {
        if ((i == 0 || i == 4) || (y == 0 || y == 4)) {
            led.plotBrightness(i, y, 50);
        }
    }
}

let pozicion;
let level = 1;

function incraselevel(myint) 
{
    if (myint != 3) {
        myint++;
    }
    else {
        myint = 0;
    }
    return myint;
}
function decraselevel(myint)
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
    serial.writeString("Vyber si uroven (1 - 3): ");
    while (1) {
        serial.writeValue("x", level);

        input.onButtonPressed(Button.A, function () {
            level = decraselevel(level);
        })
        input.onButtonPressed(Button.B, function () {
            level = incraselevel(level);
        })
        input.onButtonPressed(Button.AB, function () {
            break;
        })

    }

    
})
