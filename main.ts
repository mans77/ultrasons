let distance = 0
basic.forever(function () {
    distance = sonar.ping(
    DigitalPin.P0,
    DigitalPin.P1,
    PingUnit.Centimeters
    )
    if (distance == 2) {
        basic.showIcon(IconNames.TShirt)
    } else {
        basic.showIcon(IconNames.Butterfly)
    }
})
