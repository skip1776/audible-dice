let dice = 0
input.onGesture(Gesture.Shake, function () {
    dice = randint(1, 6)
    if (dice == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        music.playTone(262, music.beat(BeatFraction.Whole))
    } else if (dice == 2) {
        basic.showLeds(`
            . . . . #
            . . . . .
            . . . . .
            . . . . .
            # . . . .
            `)
        for (let index = 0; index < 1; index++) {
            music.playTone(349, music.beat(BeatFraction.Whole))
            music.rest(music.beat(BeatFraction.Whole))
        }
        music.playTone(262, music.beat(BeatFraction.Whole))
    } else if (dice == 3) {
        basic.showLeds(`
            . . . . #
            . . . . .
            . . # . .
            . . . . .
            # . . . .
            `)
        for (let index = 0; index < 2; index++) {
            music.playTone(349, music.beat(BeatFraction.Whole))
            music.rest(music.beat(BeatFraction.Whole))
        }
        music.playTone(262, music.beat(BeatFraction.Whole))
    } else if (dice == 4) {
        basic.showLeds(`
            # . . . #
            . . . . .
            . . . . .
            . . . . .
            # . . . #
            `)
        for (let index = 0; index < 3; index++) {
            music.playTone(349, music.beat(BeatFraction.Whole))
            music.rest(music.beat(BeatFraction.Whole))
        }
        music.playTone(262, music.beat(BeatFraction.Whole))
    } else if (dice == 5) {
        basic.showLeds(`
            # . . . #
            . . . . .
            . . # . .
            . . . . .
            # . . . #
            `)
        for (let index = 0; index < 4; index++) {
            music.playTone(349, music.beat(BeatFraction.Whole))
            music.rest(music.beat(BeatFraction.Whole))
        }
        music.playTone(262, music.beat(BeatFraction.Whole))
    } else {
        basic.showLeds(`
            # . . . #
            . . . . .
            # . . . #
            . . . . .
            # . . . #
            `)
        for (let index = 0; index < 5; index++) {
            music.playTone(349, music.beat(BeatFraction.Whole))
            music.rest(music.beat(BeatFraction.Whole))
        }
        music.playTone(262, music.beat(BeatFraction.Whole))
    }
})
basic.forever(function () {
	
})
