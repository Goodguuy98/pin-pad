def on_button_pressed_a():
    global Counter
    if 0 < Input and Input < 5:
        Counter += -1
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    global dig1, dig2, dig32, dig42, Input
    if Input == 1:
        dig1 = Counter
    if Input == 2:
        dig2 = Counter
    if Input == 3:
        dig32 = Counter
    if Input == 4:
        dig42 = Counter
    if Input == 5:
        Input = 6
        radio.send_string(PIN)
        basic.clear_screen()
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_received_string(receivedString):
    global stringRecieved
    stringRecieved = True
radio.on_received_string(on_received_string)

def on_button_pressed_b():
    global Counter
    if 0 < Input and Input < 5:
        Counter += 1
input.on_button_pressed(Button.B, on_button_pressed_b)

PIN = ""
Counter = 0
Input = 0
dig42 = 0
dig32 = 0
dig2 = 0
dig1 = 0
stringRecieved = False
stringRecieved = False
radio.set_group(1)
dig1 = -1
dig2 = -1
dig32 = -1
dig42 = -1
basic.show_string("Input")
Input = 1
# Input Digit 1
while dig1 == -1:
    basic.show_number(Counter)
    # Ensures numeber stays between 0 and 9
    if Counter > 9:
        Counter = 0
    if Counter < 0:
        Counter = 9
# Flashes number onscreen to confirm selection
for index in range(2):
    basic.clear_screen()
    basic.pause(250)
    basic.show_number(dig1)
basic.clear_screen()
# Resets Counter, updates stage of input
Input = 2
Counter = 0
# Input Digit 2
while dig2 == -1:
    basic.show_number(Counter)
    if Counter > 9:
        Counter = 0
    if Counter < 0:
        Counter = 9
# Flashes number onscreen to confirm selection
for index2 in range(2):
    basic.clear_screen()
    basic.pause(250)
    basic.show_number(dig2)
Input = 3
Counter = 0
# Input Digit 3
while dig32 == -1:
    basic.show_number(Counter)
    if Counter > 9:
        Counter = 0
    if Counter < 0:
        Counter = 9
# Flashes number onscreen to confirm selection
for index3 in range(2):
    basic.clear_screen()
    basic.pause(250)
    basic.show_number(dig32)
Input = 4
Counter = 0
# Input Digit 4
while dig42 == -1:
    basic.show_number(Counter)
    if Counter > 9:
        Counter = 0
    if Counter < 0:
        Counter = 9
# Flashes number onscreen to confirm selection
for index4 in range(2):
    basic.clear_screen()
    basic.pause(250)
    basic.show_number(dig42)
PIN = "" + str(dig1) + ("" + str(dig2)) + ("" + str(dig32)) + ("" + str(dig42))
Input = 5
basic.clear_screen()
while Input == 5:
    basic.show_string("Code:")
    basic.show_string(PIN)