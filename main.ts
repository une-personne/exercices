input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        # . # . #
        . # . # .
        # . # . #
        . # . # .
        # . # . #
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Skull)
})
basic.forever(function () {
	
})
