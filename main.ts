hummingbird.startHummingbird()
basic.forever(function () {
    hummingbird.setTriLED(
    TwoPort.One,
    0,
    255,
    0
    )
})
basic.forever(function () {
    let stop = 0
    if (!(input.buttonIsPressed(Button.A)) || stop == 1) {
        hummingbird.setPositionServo(FourPort.One, 90)
        basic.pause(500)
        hummingbird.setPositionServo(FourPort.One, 0)
        basic.pause(500)
    }
})
basic.forever(function () {
    let stop2: number;
if (input.buttonIsPressed(Button.A)) {
        stop2 = 1
    }
})
basic.forever(function () {
    basic.showString("Grinch")
})
basic.forever(function () {
    basic.pause(100)
    music.play(music.stringPlayable("G G G A E F G C ", 120), music.PlaybackMode.UntilDone)
    basic.pause(2000)
})
basic.forever(function () {
    hummingbird.setLED(ThreePort.Two, 250)
    hummingbird.setLED(ThreePort.Three, 250)
    hummingbird.setLED(ThreePort.One, 250)
})
basic.forever(function () {
    hummingbird.setTriLED(
    TwoPort.Two,
    255,
    0,
    0
    )
})
