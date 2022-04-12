basic.forever(function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . # # # .
        . . # . .
        . . . . .
        `)
    basic.pause(25)
    basic.showIcon(IconNames.Heart)
    basic.pause(450)
})
