input.onButtonPressed(Button.A, function () {
    if (0 < Input && Input < 5) {
        Counter += -1
    }
})
input.onButtonPressed(Button.AB, function () {
    if (Input == 1) {
        dig1 = Counter
    }
    if (Input == 2) {
        dig2 = Counter
    }
    if (Input == 3) {
        dig32 = Counter
    }
    if (Input == 4) {
        dig42 = Counter
    }
    if (Input == 5) {
        Input = 6
        radio.sendString(PIN)
        basic.clearScreen()
    }
})
radio.onReceivedString(function (receivedString) {
    if (Input == 6) {
        for (let index = 0; index < 2; index++) {
            basic.showString(receivedString)
        }
    }
    Input = 7
})
input.onButtonPressed(Button.B, function () {
    if (0 < Input && Input < 5) {
        Counter += 1
    }
})
let PIN = ""
let Counter = 0
let Input = 0
let dig42 = 0
let dig32 = 0
let dig2 = 0
let dig1 = 0
radio.setGroup(1)
dig1 = -1
dig2 = -1
dig32 = -1
dig42 = -1
basic.showString("Input")
Input = 1
// Input Digit 1
while (dig1 == -1) {
    basic.showNumber(Counter)
    // Ensures numeber stays between 0 and 9
    if (Counter > 9) {
        Counter = 0
    }
    if (Counter < 0) {
        Counter = 9
    }
}
// Flashes number onscreen to confirm selection
for (let index = 0; index < 2; index++) {
    basic.clearScreen()
    basic.pause(250)
    basic.showNumber(dig1)
}
basic.clearScreen()
// Resets Counter, updates stage of input
Input = 2
Counter = 0
// Input Digit 2
while (dig2 == -1) {
    basic.showNumber(Counter)
    if (Counter > 9) {
        Counter = 0
    }
    if (Counter < 0) {
        Counter = 9
    }
}
// Flashes number onscreen to confirm selection
for (let index = 0; index < 2; index++) {
    basic.clearScreen()
    basic.pause(250)
    basic.showNumber(dig2)
}
Input = 3
Counter = 0
// Input Digit 3
while (dig32 == -1) {
    basic.showNumber(Counter)
    if (Counter > 9) {
        Counter = 0
    }
    if (Counter < 0) {
        Counter = 9
    }
}
// Flashes number onscreen to confirm selection
for (let index = 0; index < 2; index++) {
    basic.clearScreen()
    basic.pause(250)
    basic.showNumber(dig32)
}
Input = 4
Counter = 0
// Input Digit 4
while (dig42 == -1) {
    basic.showNumber(Counter)
    if (Counter > 9) {
        Counter = 0
    }
    if (Counter < 0) {
        Counter = 9
    }
}
// Flashes number onscreen to confirm selection
for (let index = 0; index < 2; index++) {
    basic.clearScreen()
    basic.pause(250)
    basic.showNumber(dig42)
}
PIN = "" + dig1 + ("" + dig2) + ("" + dig32) + ("" + dig42)
Input = 5
basic.clearScreen()
while (Input == 5) {
    basic.showString("Code:")
    basic.showString(PIN)
}
basic.forever(function () {
    if (Input == 7) {
        dig1 = 0
        dig2 = 0
        dig32 = 0
        dig42 = 0
    }
})
