controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    rocky.setPosition(Math.randomRange(0, 160), Math.randomRange(0, 120))
    randomSprite.setPosition(Math.randomRange(0, 160), Math.randomRange(0, 120))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
    game.over(true)
    info.stopCountdown()
})
let rocky: Sprite = null
let randomSprite: Sprite = null
scene.setBackgroundColor(13)
randomSprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . f 9 f . . . . . . 
. . . . . . . . f . . . . . . . 
. . . . f . . 1 1 1 . . f . . . 
. . . f 9 1 f f f f f 1 9 f . . 
. . . . 1 f f f f f f f 1 . . . 
. f . . f f 1 5 f 5 1 f f . . f 
. 9 f f f f 9 5 f 5 9 f f f f 9 
. f . . f f f f f f f f f . . f 
. . . . f f 9 9 9 9 9 f f . . . 
. . . . 1 f f f f f f f 1 . . . 
. . . f 9 1 f f f f f 1 9 f . . 
. . . . f . . . f . . . f . . . 
. . . . . . . . f . . . . . . . 
. . . . . . . f 9 f . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
randomSprite.setPosition(82, 44)
rocky = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . f . . . . . . . . 
. . . . . . f e f . . . . . . . 
. . . . . f e e e f . . . . . . 
. . . . f e e e e e f . . . . . 
. . . f e 1 f e f 1 e f . . . . 
. . f e e e e e e e e e f . . . 
. f e e e e f f f e e e e f . . 
. f e e e e e e e e e e e f . . 
. f f f f f f f f f f f f f . . 
`, SpriteKind.Player)
game.splash("This is my rocky game")
info.startCountdown(10)
