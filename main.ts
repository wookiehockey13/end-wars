controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite3 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 8 . . . . . . . . . . 
        . . . . . 8 8 a a . . . . . . . 
        . . . . 8 8 8 a a a . . . . . . 
        . . . . . 8 8 a a 8 8 . . . . . 
        . . . . . a 8 a 8 8 a a . . . . 
        . . . . . 8 8 a 8 8 8 8 . . . . 
        . . . . . . a 8 a a a . . . . . 
        . . . . . . . 8 a . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Food)
    mySprite3.follow(mySprite)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite2.setImage(img`
        . . . . f f f f . . . . . 
        . . f f f f f f f f . . . 
        . f f f f f f c f f f . . 
        f f f f f f c c f f f c . 
        f f f c f f f f f f f c . 
        c c c f f f e e f f c c . 
        f f f f f e e f f c c f . 
        f f f b a e e a b f f f . 
        . f 4 1 a 4 4 a 1 4 f . . 
        . f e 4 4 4 4 4 4 e f . . 
        . f f f e e e e f f f . . 
        f e f b 7 7 7 7 b f e f . 
        e 4 f 7 7 7 7 7 7 f 4 e . 
        e e f 6 6 6 6 6 6 f e e . 
        . . . f f f f f f . . . . 
        . . . f f . . f f . . . . 
        `)
    pause(200)
    mySprite2.setPosition(randint(0, 157), randint(0, 119))
    mySprite2.setImage(img`
        . . . . . . a 8 . . . . . . . . 
        . . . . . . a 8 a . . . . . . . 
        . . a a . . a 8 a . . 8 a . . . 
        . . a 8 8 . a 8 a a 8 8 a . . . 
        . . . 8 8 8 8 8 8 8 8 a . . . . 
        a a a a 8 8 8 8 8 8 8 . . . . . 
        8 8 8 8 8 8 8 8 8 8 a a a a a a 
        . 8 a a a 8 8 8 8 8 8 8 8 8 8 a 
        . . . . . a 8 a 8 8 a a 8 8 8 a 
        . . . . a 8 8 8 8 8 8 8 8 . . . 
        . . . a 8 8 a 8 a a a a . . . . 
        . . a 8 8 . a 8 a . a a a . . . 
        . . a 8 a . a 8 a . . a a . . . 
        . . . . . . a 8 a a . . . . . . 
        . . . . . . a 8 a a . . . . . . 
        . . . . . . a a . . . . . . . . 
        `)
    pause(200)
    mySprite2.setImage(img`
        . . . . f f f f . . . . . 
        . . f f f f f f f f . . . 
        . f f f f f f c f f f . . 
        f f f f f f c c f f f c . 
        f f f c f f f f f f f c . 
        c c c f f f e e f f c c . 
        f f f f f e e f f c c f . 
        f f f b a e e a b f f f . 
        . f 4 1 a 4 4 a 1 4 f . . 
        . f e 4 4 4 4 4 4 e f . . 
        . f f f e e e e f f f . . 
        f e f b 7 7 7 7 b f e f . 
        e 4 f 7 7 7 7 7 7 f 4 e . 
        e e f 6 6 6 6 6 6 f e e . 
        . . . f f f f f f . . . . 
        . . . f f . . f f . . . . 
        `)
    pause(100)
    mySprite2.setImage(img`
        . . . . f f f f . . . . . 
        . . f f f f f f f f . . . 
        . f f f f f f c f f f . . 
        f f f f f f c c f f f c . 
        f f f c f f f f f f f c . 
        c c c f f f e e f f c c . 
        f f f f f e e f f c c f . 
        f f f b f e e f b f f f . 
        . f 4 1 f 4 4 f 1 4 f . . 
        . f e 4 4 4 4 4 4 e f . . 
        . f f f e e e e f f f . . 
        f e f b 7 7 7 7 b f e f . 
        e 4 f 7 7 7 7 7 7 f 4 e . 
        e e f 6 6 6 6 6 6 f e e . 
        . . . f f f f f f . . . . 
        . . . f f . . f f . . . . 
        `)
})
info.onScore(30, function () {
    game.gameOver(true)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Food, function (sprite, otherSprite) {
    sprites.destroyAllSpritesOfKind(SpriteKind.Food)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    projectile.setImage(img`
        . . . . . . 3 3 . . . . . . . . 
        . . . . . . 3 1 3 . . . . . . . 
        . . 3 3 . . 3 1 3 . . 3 3 . . . 
        . . 3 1 3 . 3 1 3 2 3 1 3 . . . 
        . . . 3 1 3 3 1 3 2 1 3 . . . . 
        3 3 3 3 2 1 3 1 1 1 3 . . . . . 
        3 1 1 1 1 1 1 1 1 2 3 3 3 3 3 3 
        . 3 3 3 2 3 1 1 1 1 1 1 1 1 1 3 
        . . . . . 2 1 1 1 3 3 2 3 3 3 . 
        . . . . 3 1 3 1 3 1 2 . . . . . 
        . . . 3 1 3 2 1 3 3 1 3 . . . . 
        . . 3 1 3 . 2 1 3 . 3 1 3 . . . 
        . . 3 3 . . 3 1 3 . . 3 3 . . . 
        . . . . . . 3 1 3 . . . . . . . 
        . . . . . . 3 1 3 . . . . . . . 
        . . . . . . 3 3 . . . . . . . . 
        `)
    info.changeLifeBy(-1)
    pause(200)
    sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
})
controller.combos.attachCombo("up down", function () {
    info.setLife(10)
    mySprite = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f11111111f.......
        ......fd11111111df......
        ......fd11111111df......
        ......fddd1111dddf......
        ......fbdbfddfbdbf......
        ......fcdcf11fcdcf......
        .....ffff111111bf.......
        ....fc111cdb1bdfff......
        ....f1b1bcbfbfc111cf....
        ....fbfbfbffff1b1b1f....
        .........fffffffbfbf....
        ..........fffff.........
        ...........fff..........
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Enemy)
    mySprite.setBounceOnWall(true)
    mySprite.vx = 40
    mySprite.vy = 60
    scene.setBackgroundImage(img`
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffcffffffffffcffffffffffffffffffffffffffffcffffffffffcffffffffffffffffffffffffffffcffffffffffcffffffffffffffffffffffffffffcffffffffffcffffffffffffffffffffff
        ffffffffffffffffcbcffffffffffffffffffffcffffffffffffffffcbcffffffffffffffffffffcffffffffffffffffcbcffffffffffffffffffffcffffffffffffffffcbcffffffffffffffffffffc
        fffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffff
        fffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcffffffffffff
        fff3fffffffffffffffffffffbbbfffffffffffffff3fffffffffffffffffffffbbbfffffffffffffff3fffffffffffffffffffffbbbfffffffffffffff3fffffffffffffffffffffbbbffffffffffff
        ffb3bffffffffffffffffffffcbcffffffffffffffb3bffffffffffffffffffffcbcffffffffffffffb3bffffffffffffffffffffcbcffffffffffffffb3bffffffffffffffffffffcbcffffffffffff
        f33333ffffffffffffccfffffffffffffffffffff33333ffffffffffffccfffffffffffffffffffff33333ffffffffffffccfffffffffffffffffffff33333ffffffffffffccffffffffffffffffffff
        ff3b3fffffffffffffccffffffffffffffffffffff3b3fffffffffffffccffffffffffffffffffffff3b3fffffffffffffccffffffffffffffffffffff3b3fffffffffffffccffffffffffffffffffff
        ffbfbfffffffffffffffffffffffffffffcfffffffbfbfffffffffffffffffffffffffffffcfffffffbfbfffffffffffffffffffffffffffffcfffffffbfbfffffffffffffffffffffffffffffcfffff
        fffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcffffffffffffffffffffffffffffffffffffffbcffff
        fffffffffffcffffffffffffffffffffffcffffffffffffffffcffffffffffffffffffffffcffffffffffffffffcffffffffffffffffffffffcffffffffffffffffcffffffffffffffffffffffffffff
        ffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffff
        fffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fcfffffffffffffffffffffffffcfffffffffffffcfffffffffffffffffffffffffcfffffffffffffcfffffffffffffffffffffffffcfffffffffffffcfffffffffffffffffffffffffcffffffffffff
        fffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffccfffffcffffffffffffffffffffffffffffffffccfffffcffffffffffffffffffffffffffffffffccfffffcffffffffffffffffffffffffffffffffccfffffcffffffffffffffffffffffffff
        ffffffccfffffffffffffcccccccccccffffffffffffffccfffffffffffffcccccccccccffffffffffffffccfffffffffffffcccccccccccffffffffffffffccfffffffffffffccccccccffcffffffff
        ffffffffffffffffccccccccccccccccccccffffffffffffffffffffccccccccccccccccccccffffffffffffffffffffccccccccccccccccccccffffffffffffffffffffcccccccccccccfffffffffff
        fffffffffffffccccccccccccccccccccccccccffffffffffffffccccccccccccccccccccccccccffffffffffffffccccccccccccccccccccccccccffffffffffffffccccccccccccccccffcffffffff
        ccfffffffffcccccccccccccccccccccccccccccccfffffffffcccccccccccccccccccccccccccccccfffffffffcccccccccccccccccccccccccccccccfffffffffccccccccccccccccccffffffffffc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffffffffffc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffffc
        bbbbbbbbbbbbccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccfffffffffffb
        bbbbbbbbbbbbbbbbbccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccbfffffffffffb
        bbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3f3ffffffffffb
        bbbbbbbbb3333333bbbbbbbbb33cbbbbbbbbbbbbbbbbbbbbb3333333bbbbbbbbb33cbbbbbbbbbbbbbbbbbbbbb3333333bbbbbbbbb33cbbbbbbbbbbbbbbbbbbbbb3333333bbbbbbbbb33fbffffffffffb
        bbbbbbb33cccccbb33bbbbbbbccbbccbbbbbbbbbbbbbbbb33cccccbb33bbbbbbbccbbccbbbbbbbbbbbbbbbb33cccccbb33bbbbbbbccbbccbbbbbbbbbbbbbbbb33cccccbb33bbbbbbbccfbffffffffffb
        bbbbbbbcccbbbbbcccbbbbbbbbccccbbbbbbbbbbbbbbbbbcccbbbbbcccbbbbbbbbccccbbbbbbbbbbbbbbbbbcccbbbbbcccbbbbbbbbccccbbbbbbbbbbbbbbbbbcccbbbbbcccbbbbbbbbcfcffffffffffb
        3bbbbbbbcccccccccbbbbbbbbbbbbbbb333333333bbbbbbbcccccccccbbbbbbbbbbbbbbb333333333bbbbbbbcccccccccbbbbbbbbbbbbbbb333333333bbbbbbbcccccccccbbbbbbbbbfbbffffffffff3
        333bbbbbbbcccccbbbbbbbbbbbbbbb333ccbbbbb333bbbbbbbcccccbbbbbbbbbbbbbbb333ccbbbbb333bbbbbbbcccccbbbbbbbbbbbbbbb333ccbbbbb333bbbbbbbcccccbbbbbbbbbbbfbbffffffffffb
        cc3bbbbbbbbbbbbbbbbbbbbbbbbbbb3cccbbbccccc3bbbbbbbbbbbbbbbbbbbbbbbbbbb3cccbbbccccc3bbbbbbbbbbbbbbbbbbbbbbbbbbb3cccbbbccccc3bbbbbbbbbbbbbbbbbbbbbbbfbbffffffffffc
        cccbbbbbbbbbbbb333bbbbbb3bbbbbcccbbbbbcccccbbbbbbbbbbbb333bbbbbb3bbbbbcccbbbbbcccccbbbbbbbbbbbb333bbbbbb3bbbbbcccbbbbbcccccbbbbbbbbbbbb333bbbbbb3bfbbfcffffffffc
        cccbbbbbbbbbbbb333bbbbbbbbbbbbcccccccccccccbbbbbbbbbbbb333bbbbbbbbbbbbcccccccccccccbbbbbbbbbbbb333bbbbbbbbbbbbcccccccccccccbbbbbbbbbbbb333bbbbbbbbfbbfcffffffffc
        cbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccbbbbbbbbbbbbbbbbbbbbbbbbbfbbfbffffffffc
        bbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbbbbbbbbbbfbbfffffffffbf
        bbb333333bbb33ddddddddddddddddd33bbbbbbbbbb333333bbb33ddddddddddddddddd33bbbbbbbbbb333333bbb33ddddddddddddddddd33bbbbbbbbbb333333bbb33ddddddddddddfddfffffffffbf
        bbb33333ddddddddddddddddddddddddddddd3bbbbb33333ddddddddddddddddddddddddddddd3bbbbb33333ddddddddddddddddddddddddddddd3bbbbb33333ddddddddddddddddddfddfffffffffbf
        dddddddddddddddddddddddddddddddd33333ddddddddddddddddddddddddddddddddddd33333ddddddddddddddddddddddddddddddddddd33333dddddddddddddddddddddddddddddfdffffffffffdf
        dddddddddddddd3333333333ddddddd33dddd33ddddddddddddddd3333333333ddddddd33dddd33ddddddddddddddd3333333333ddddddd33dddd33ddddddddddddddd3333333333ddfdfffffffffffd
        dddddddddddd333ddddddddd33dddddbbbbbbbbddddddddddddd333ddddddddd33dddddbbbbbbbbddddddddddddd333ddddddddd33dddddbbbbbbbbddddddddddddd333ddddddddd33fdffdffffffffd
        ddddddddddd333d3bbbbbbbbd33dddddbbbbbbddddddddddddd333d3bbbbbbbbd33dddddbbbbbbddddddddddddd333d3bbbbbbbbd33dddddbbbbbbddddddddddddd333d3bbbbbbbbd3fdfffffffffffd
        ddddddddddd33bbbbbbbbbbbb33dddddddddddddddddddddddd33bbbbbbbbbbbb33dddddddddddddddddddddddd33bbbbbbbbbbbb33dddddddddddddddddddddddd33bbbbbbbbbbbb3fdfffffffffffd
        ddddddddddddbbbbbbbbbbbbbbddddddddddddddddddddddddddbbbbbbbbbbbbbbddddddddddddddddddddddddddbbbbbbbbbbbbbbddddddddddddddddddddddddddbbbbbbbbbbbbbbfdfffffffffdfd
        ddddddddddddd3bbbbbbbbbb3dddddddddddddddddddddddddddd3bbbbbbbbbb3dddddddddddddddddddddddddddd3bbbbbbbbbb3dddddddddddddddddddddddddddd3bbbbbbbbbb3dfdffffffffffdd
        d333333ddddddddd333333ddddddddddddddddddd333333ddddddddd333333ddddddddddddddddddd333333ddddddddd333333ddddddddddddddddddd333333ddddddddd333333ddddfdffffffffffdd
        333333333dddddddddddddddddddddddddddddd3333333333dddddddddddddddddddddddddddddd3333333333dddddddddddddddddddddddddddddd3333333333dddddddddddddddddffffffffffffd3
        33333333dddddddddddddddddddddddddddddddd33333333dddddddddddddddddddddddddddddddd33333333dddddddddddddddddddddddddddddddd33333333ddddddddddddddddddfffffffffffddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffffffffddd
        dddddddddddddddddddddddddd3333333333333ddddddddddddddddddddddddddd3333333333333ddddddddddddddddddddddddddd3333333333333dddddddddddddddddddddddddddf3fffffffff33d
        33ddddddddddddddddddddd333dddddddddddd3333ddddddddddddddddddddd333dddddddddddd3333ddddddddddddddddddddd333dddddddddddd3333ddddddddddddddddddddd333fffffffffffd33
        d333ddddddddddddddddd333ddddddddddddddddd333ddddddddddddddddd333ddddddddddddddddd333ddddddddddddddddd333ddddddddddddddddd333ddddddddddddddddd333ddfffffffffffddd
        ddd33ddddddddddddddd33dddd3bbbbbbbbbbb3dddd33ddddddddddddddd33dddd3bbbbbbbbbbb3dddd33ddddddddddddddd33dddd3bbbbbbbbbbb3dddd33ddddddddddddddd33ddddfbffffffffbb3d
        b3dd3ddddddddddddddd3dd3bbbbbbbbbbbbbbbbb3dd3ddddddddddddddd3dd3bbbbbbbbbbbbbbbbb3dd3ddddddddddddddd3dd3bbbbbbbbbbbbbbbbb3dd3ddddddddddddddd3dd3bbfbffffffffbbbb
        bb333ddddddddddddddd33bbbbbbbbbbbbbbbbbbbb333ddddddddddddddd33bbbbbbbbbbbbbbbbbbbb333ddddddddddddddd33bbbbbbbbbbbbbbbbbbbb333ddddddddddddddd33bbbfbbffffffffbbbb
        bbb3dddddddddddddddd3bbbbbbbbbbbbbbbbbbbbbb3dddddddddddddddd3bbbbbbbbbbbbbbbbbbbbbb3dddddddddddddddd3bbbbbbbbbbbbbbbbbbbbbb3dddddddddddddddd3bbbbfbbffffffffbbbb
        b3ddddddddddddddddddd3bbbbbbbbbbbbbbbbbbb3ddddddddddddddddddd3bbbbbbbbbbbbbbbbbbb3ddddddddddddddddddd3bbbbbbbbbbbbbbbbbbb3ddddddddddddddddddd3bbbfbbffffffffbbbb
        dddddddddddddddddddddddd3bbbbbbbbbbbbb33dddddddddddddddddddddddd3bbbbbbbbbbbbb33dddddddddddddddddddddddd3bbbbbbbbbbbbb33dddddddddddddddddddddddd3fbbfffffffbbb33
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfddfffffffddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfdddfffdfffddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfdddfffffffddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddffdffffddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddffdfdffddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddffdddfdddddd
        dddddddddd3333333333333ddddddddddddddddddddddddddd3333333333333ddddddddddddddddddddddddddd3333333333333ddddddddddddddddddddddddddd3333333333333dddddffdddddddddd
        dddddd333333333333333333333ddddddddddddddddddd333333333333333333333ddddddddddddddddddd333333333333333333333ddddddddddddddddddd333333333333333333333dffdddddddddd
        dddd3333333333333333ddd3333333dddddddddddddd3333333333333333ddd3333333dddddddddddddd3333333333333333ddd3333333dddddddddddddd3333333333333333ddd33333ffdddddddddd
        dd3333333333333333333dddddd333333ddddddddd3333333333333333333dddddd333333ddddddddd3333333333333333333dddddd333333ddddddddd3333333333333333333dddddd3ff333ddddddd
        3333333333333333333333ddddddddddddddd3333333333333333333333333ddddddddddddddd3333333333333333333333333ddddddddddddddd3333333333333333333333333ddddddffddddddd333
        33333333333333333333333333dddddddd33333333333333333333333333333333dddddddd33333333333333333333333333333333dddddddd33333333333333333333333333333333ddfddddd333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333f33333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333f33333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333f33333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        `)
    mySprite2 = sprites.create(img`
        . . . . f f f f . . . . . 
        . . f f f f f f f f . . . 
        . f f f f f f c f f f . . 
        f f f f f f c c f f f c . 
        f f f c f f f f f f f c . 
        c c c f f f e e f f c c . 
        f f f f f e e f f c c f . 
        f f f b f e e f b f f f . 
        . f 4 1 f 4 4 f 1 4 f . . 
        . f e 4 4 4 4 4 4 e f . . 
        . f f f e e e e f f f . . 
        f e f b 7 7 7 7 b f e f . 
        e 4 f 7 7 7 7 7 7 f 4 e . 
        e e f 6 6 6 6 6 6 f e e . 
        . . . f f f f f f . . . . 
        . . . f f . . f f . . . . 
        `, SpriteKind.Player)
    mySprite.setPosition(46, 41)
    controller.moveSprite(mySprite2)
    mySprite2.setStayInScreen(true)
    music.play(music.createSong(hex`00780004080200`), music.PlaybackMode.UntilDone)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    mySprite.setImage(img`
        ........................
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .....fffc1111111f.......
        ...fc111cd1111111f......
        ...f1b1b1b1111dddf......
        ...fbfbffcf11fcddf......
        ......fcf111111bbf......
        .......ccbdb1b1fcf......
        .......fffbfbfdff.......
        ........ffffffff........
        ........fffffffffff.....
        .........fffffc111cf....
        .........fffff1b1b1f....
        ..........ffffbfbfbf....
        ...........ffff.........
        ........................
        ........................
        ........................
        `)
    mySprite.setImage(img`
        ........................
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f11111111f.......
        ......fd11111111df......
        ....7.fd11111111df......
        ...7..fd11111111df......
        ...7..fd11111111df......
        ...7..fddd1111dddff.....
        ...77.fbdbfddfbdbfcf....
        ...777fcdcf11fcdcfbf....
        ....77fffbdb1bdffcf.....
        ....fcb1bcffffff........
        ....f1c1c1ffffff........
        ....fdfdfdfffff.........
        .....f.f.f..............
        ........................
        ........................
        ........................
        `)
    mySprite.setImage(img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f11111111f.......
        ......fd11111111df......
        ......fd11111111df......
        ......fddd1111dddf......
        ......fbdbfddfbdbf......
        ......fcdcf11fcdcf......
        .......fb111111bf.......
        ......fffcdb1bdffff.....
        ....fc111cbfbfc111cf....
        ....f1b1b1ffff1b1b1f....
        ....fbfbffffffbfbfbf....
        .........ffffff.........
        ...........fff..........
        ........................
        ........................
        ........................
        ........................
        `)
    info.changeLifeBy(-1)
})
let projectile: Sprite = null
let mySprite2: Sprite = null
let mySprite: Sprite = null
let mySprite3: Sprite = null
scene.setBackgroundImage(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffafffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffaaaaaaafaffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffaaafffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffaaffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffaffffffffffffffffffffffffffffffafffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffaafffffffffffffffffffffffffffffffafffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffafffffffffffffffffffffffffffffffffafffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffafffffffffffffffffffffffffffffffffffaffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffcffffffffffcffffffffffffffffafffffffffffcffffffffffcfffffffffffffaffffffffffffffcffffffffffcffffffffffffffffffffffffffffcffffffffffcffffffffffffffffffffff
    ffffffffffffffffcbcffffffffffffffafffffcffffffffffffffffcbcffffffffffffafffffffcffffffffffffffffcbcffffffffffffffffffffcffffffffffffffffcbcffffffffffffffffffffc
    fffffffffffffffffcffffffffffffffaffffffffffffffffffffffffcffffffffffffffaffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffafffffffffffffffffffffffffffffffffffffffafffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffafffffffffffffffffffffffffffffffffffffffafffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffff
    fffffffffffffffffffffffffffffffaffffffffffffffffffffffffffffffffffffffffafffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffcffffffffffffffffffaffffffffffffffffffffcfffffffffffffffffffafffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffff
    fffffffffffffffffffffffffcbcffaffffffffffffffffffffffffffffffffffcbcffffaffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcffffffffffff
    fff3fffffffffffffffffffffbbbffaffffffffffff3fffffffffffffffffffffbbbffffaffffffffff3fffffffffffffffffffffbbbfffffffffffffff3fffffffffffffffffffffbbbffffffffffff
    ffb3bffffffffffffffffffffcbcffafffffffffffb3bffffffffffffffffffffcbcffffafffffffffb3bffffffffffffffffffffcbcffffffffffffffb3bffffffffffffffffffffcbcffffffffffff
    f33333ffffffffffffccfffffffffafffffffffff33333ffffffffffffccffffffffffffaffffffff33333ffffffffffffccfffffffffffffffffffff33333ffffffffffffccffffffffffffffffffff
    ff3b3fffffffffffffccfffffffffaffffffffffff3b3fffffffffffffccffffffffffffafffffffff3b3fffffffffffffccffffffffffffffffffffff3b3fffffffffffffccffffffffffffffffffff
    ffbfbffffffffffffffffffffffffaffffcfffffffbfbfffffffffffffffffffffffffffafcfffffffbfbfffffffffffffffffffffffffffffcfffffffbfbfffffffffffffffffffffffffffffcfffff
    fffffffffffffffffffffffffffffafffcbcffffffffffffffffffffffffffffffffffffacbcfffffffffffffffffffffffffffffffffffffcbcffffffffffffffffffffffffffffffffffffffbcffff
    fffffffffffcffffffffffffffffffafffcffffffffffffffffcfffffffffffffffffffffacffffffffffffffffcffffffffffffffffffffffcffffffffffffffffcffffffffffffffffffffffffffff
    ffffffffffcbcffffffffffffffffffaffffffffffffffffffcbcffffffffffffffffffffafffffffffffffffaabcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffff
    fffffffffffcffffffffffffffffffffaffffffffffffffffffcfffffffffffffffffffffafffffffffffffaaffaaaaffffffffffffffffffffffffffffffffffffcffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffafffffffffffffffffffffffffffffffffffffffafffffffffffaaffffffffaafffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fcfffffffffffffffffffffffffcffffffaafffffcfffffffffffffffffffffffffcffffffaffffffcfaaffffffffffffafffffffffcfffffffffffffcfffffffffffffffffffffffffcffffffffffff
    fffffffffffffffffcffffffffffffffffffaafffffffffffffffffffcffffffffffffffffaffffffaaffffffffffffffcaafffffffffffffffffffffffffffffffffffffcffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffcfffaaffffffffffffffffffffffffffffffffffafffffafffffffffffffffffffafffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffff
    ffffffffffffffffffffffffffffffffffffffffafffffffffffffffffffffffffffffffffaffffaffffffffffffffffffffafffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffaafffffffffffffffffffffffffffffffafffafffffffffffffffffffffafffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffccfffffcfffffffffffffffffffffffffffffaafccfffffcfffffffffffffffffffffaffafffffffccfffffcfffffffaffffffffffffffffffffffffccfffffcffffffffffffffffffffffffff
    ffffffccfffffffffffffcccccccccccfffffffffffffaacfffffffffffffcccccccccccfffafaffffffffccfffffffffffffaccccccccccffffffffffffffccfffffffffffffccccccccffcffffffff
    ffffffffffffffffccccccccccccccccccccfffffffffffaffffffffcccccccccccccccccccafaffffffffffffffffffccccccacccccccccccccffffffffffffffffffffcccccccccccccfffffffffff
    fffffffffffffccccccccccccccccccccccccccfffffffffaffffccccccccccccccccccccccacacffffffffffffffcccccccccaccccccccccccccccffffffffffffffccccccccccccccccffcffffffff
    ccfffffffffcccccccccccccccccccccccccccccccfffffffafcccccccccccccccccccccccccaaccccfffffffffcccccccccccacccccccccccccccccccfffffffffccccccccccccccccccffffffffffc
    cccccccccccccccccccccccccccccccccccccccccccccccccaccccccccccccccccccccccccccaaccccccccccccccccccccccccaccccccccccccccccccccccccccccccccccccccccccccccffffffffffc
    cccccccccccccccccccccccccccccccccccccccccccccccccaccccccccccccccccccccccccccaaccccccccccccccccccccccccacccccccccccccccccccccccccccccccccccccccccccccfffffffffffc
    bbbbbbbbbbbbccccccccccccccccccccbbbbbbbbbbbbbbbbbabbccccccccccccccccccccbbbbaabbbbbbbbbbbbbbccccccccccacccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccfffffffffffb
    bbbbbbbbbbbbbbbbbccccccccccbbbbbbbbbbbbbbbbbbbbbbabbbbbbbccccccccccbbbbbbbbbaabbbbbbbbbbbbbbbbbbbcccccaccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccbfffffffffffb
    bbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbbbbbbbbbbbabbbbbbbbbbbbbbbb3333bbbbbbbabbbbbbbbbbbbbbbbbbbbbbbaabbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3f3ffffffffffb
    bbbbbbbbb3333333bbbbbbbbb33cbbbbbbbbbbbbbbbbbbbbba333333bbbbbbbbb33cbbabbbbbbabbbbbbbbbbb3333333bbbaabbbb33cbbbbbbbbbbbbbbbbbbbbb3333333bbbbbbbbb33fbffffffffffb
    bbbbbbb33cccccbb33bbbbbbbccbbccbbbbbbbbbbbbbbbb33accccbb33bbbbbbbccbbccabbbbbabbbbbbbbb33cccccbbaaabbbbbbccbbccbbbbbbbbbbbbbbbb33cccccbb33bbbbbbbccfbffffffffffb
    bbbbbbbcccbbbbbcccbbbbbbbbccccbbbbbbbbbbbbbbbbbccabbbbbcccbbbbbbbbccccbbabbbbabbbbbbbbbcccbbbbaaccbbbbbbbbccccbbbbbbbbbbbbbbbbbcccbbbbbcccbbbbbbbbcfcffffffffffb
    3bbbbbbbcccccccccbbbbbbbbbbbbbbb333333333bbbbbbbaccccccccbbbbbbbbbbbbbbb3a333a333bbbbbbbccccaacccbbbbbbbbbbbbbbb333333333bbbbbbbcccccccccbbbbbbbbbfbbffffffffff3
    333bbbbbbbcccccbbbbbbbbbbbbbbb333ccbbbbb333bbbbabbcccccbbbbbbbbbbbbbbb333cabbbbb333bbbbbbaaacccbbbbbbbbbbbbbbb333ccbbbbb333bbbbbbbcccccbbbbbbbbbbbfbbffffffffffb
    cc3bbbbbbbbbbbbbbbbbbbbbbbbbbb3cccbbbccccc3bbbabbbbbbbbbbbbbbbbbbbbbbb3cccbaaccccc3bbbbaabbbbbbbbbbbbbbbbbbbbb3cccbbbccccc3bbbbbbbbbbbbbbbbbbbbbbbfbbffffffffffc
    cccbbbbbbbbbbbb333bbbbbb3bbbbbcccbbbbbcccccbaabbbbbbbbb333bbbbbb3bbbbbcccbbbbacccccbaaabbbbbbbb333bbbbbb3bbbbbcccbbbbbcccccbbbbbbbbbbbb333bbbbbb3bfbbfcffffffffc
    cccbbbbbbbbbbbb333bbbbbbbbbbbbccccccccccccaabbbbbbbbbbb333bbbbbbbbbbbbccccccccaaccaabbbbbbbbbbb333bbbbbbbbbbbbcccccccccccccbbbbbbbbbbbb333bbbbbbbbfbbfcffffffffc
    cbbbbbbbbbbbbbbbbbbbbaaabbbbbbbbccccccaaaabbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccaabbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccbbbbbbbbbbbbbbbbbbbbbbbbbfbbfbffffffffc
    bbbb3333bbbbbbbbbbbbbbbbaaaaaaaaaaaaaabbbbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbbbbbbbbbbfbbfffffffffbf
    bbb333333bbb33ddddddddddddddddd33bbbbbbbbbb333333bbb33ddddddddddddddddd33bbbbbbbbbb333333bbb33ddddddddddddddddd33bbbbbbbbbb333333bbb33ddddddddddddfddfffffffffbf
    bbb33333ddddddddddddddddddddddddddddd3bbbbb33333ddddddddddddddddddddddddddddd3bbbbb33333ddddddddddddddddddddddddddddd3bbbbb33333ddddddddddddddddddfddfffffffffbf
    dddddddddddddddddddddddddddddddd33333ddddddddddddddddddddddddddddddddddd33333ddddddddddddddddddddddddddddddddddd33333dddddddddddddddddddddddddddddfdffffffffffdf
    dddddddddddddd3333333333ddddddd33dddd3addddddddddddddd3333333333ddddddd33dddd33ddddddddddddddd3333333333ddddddd33dddd33ddddddddddddddd3333333333ddfdfffffffffffd
    dddddddddddd333ddddddddd33dddddbbbbbbabaaddddddddddd333ddddddddd33dddddbbbbbbbbddddddddddddd333ddddddddd33dddddbbbbbbbbddddddddddddd333ddddddddd33fdffdffffffffd
    ddddddddddd333d3bbbbbbbbd33dddddbbbaabdddaadddddddd333d3bbbbbbbbd33dddddbbbbbbddddddddddddd333d3bbbbbbbbd33dddddbbbbbbddddddddddddd333d3bbbbbbbbd3fdfffffffffffd
    ddddddddddd33bbbbbbbbbbbb33dddddddadddddddadddddddd33bbbbbbbbbbbb33dddddddddddddddddddddddd33bbbbbbbbbbbb33dddddddddddddddddddddddd33bbbbbbbbbbbb3fdfffffffffffd
    ddddddddddddbbbbbbbbbbbbbbdddddddadadddddddaddddddddbbbbbbbbbbbbbbddddddddddddddddddddddddddbbbbbbbbbbbbbbddddddddddddddddddddddddddbbbbbbbbbbbbbbfdfffffffffdfd
    ddddddddddddd3bbbbbbbbbb3dddddddaaadadddddddadddddddd3bbbbbbbbbb3dddddddddddddddddddddddddddd3bbbbbbbbbb3dddddddddddddddddddddddddddd3bbbbbbbbbb3dfdffffffffffdd
    d333333ddddddddd333333dddddddddaaddddaddd333a33ddddddddd333333ddddddddddddddddddd333333ddddddddd333333ddddddddddddddddddd333333ddddddddd333333ddddfdffffffffffdd
    333333333dddddddddddddddddddddaaddddddaa33333a333dddddddddddddddddddddddddddddd3333333333dddddddddddddddddddddddddddddd3333333333dddddddddddddddddffffffffffffd3
    33333333dddddddddddddddddddddaaddddddddda3333a33dddddddddddddddddddddddddddddddd33333333dddddddddddddddddddddddddddddddd33333333ddddddddddddddddddfffffffffffddd
    dddddddddddddddddddddddddddddaaddddddddddaddddadddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffffffffddd
    dddddddddddddddddddddddddd333a333333333dddadddaddddddddddddddddddd3333333333333ddddddddddddddddddddddddddd3333333333333dddddddddddddddddddddddddddf3fffffffff33d
    33ddddddddddddddddddddd333dddadddddddd3333addddaddddddddddddddd333dddddddddddd3333ddddddddddddddddddddd333dddddddddddd3333aaddddddddddddddddddd333fffffffffffd33
    d333ddddddddddddddddd333dddddaddddddddddd3a3dddadddddddddddad333ddddddddddddddddd333ddddddddddddddddd333ddddddddddddddddd3a3adddddddddddddddd333ddfffffffffffddd
    ddd33ddddddddddddddd33dddd3bbabbbbbbbb3dddda3ddaddddddddddadaadddd3bbbbbbbbbbb3dddd33ddddddddddddddd33dddd3bbbbbbbbbbb3ddad3addddddddddddddd33ddddfbffffffffbb3d
    b3dd3ddddddddddddddd3dd3bbbbbabbbbbbbbbbb3da3ddadddddddddadd3da3bbbbbbbbbbbbbbbbb3dd3ddddddddddddddd3dd3bbbbbbbbbbbbbbbba3ddaddddddddddddddd3dd3bbfbffffffffbbbb
    bb333ddddddddddddddd33bbbbbbbaabbbbbbbbbbb33addadddddddddadd33baabbbbbbbbbbbbbbbbb333adddddddddddddd33bbbbbbbbbbbbbbbbbbab33addddddddddddddd33bbbfbbffffffffbbbb
    bbb3dddddddddddddddd3bbbbbbbbaabbbbbbbbbbbb3addaddddddddaddaaaabbabbbbbbbbbbbbbbbbb3dadddddddddddddd3bbbbbbbbbbbbbbbbbbbabb3addddddddddddddd3bbbbfbbffffffffbbbb
    b3ddddddddddddddddddd3bbbbbbbbabbbbbbbbbb3ddaddaddddddddaaadd3baaabbbbbbbbbbbbbbb3dddaddddddddddddddd3bbbbbbbbbbbbbbbbbba3ddadddddddddddddddd3bbbfbbffffffffbbbb
    dddddddddddddddddddddddd3bbbbbaabbbbbb33ddddaddadddddddadddddddd3aabbbbbbbbbbb33dddddadddddddddddddddddd3bbbbbbbbbbbbb33adddaddddddddddddddddddd3fbbfffffffbbb33
    ddddddddddddddddddddddddddddddaaddddddddddddaddaddddddaadddddddddadadddddddddddddddddadddddddddddddddddddddddddddddddddaddddaddddddddddddddddddddfddfffffffddddd
    dddddddddddddddddddddddddddddddaddddddddddddaddaddddddaadddddddddaddaddddddddddddddddadddddaaadddddddddddddddddddddddddaddddadddddddddddddddddddfdddfffdfffddddd
    ddddddddddddddddddddddddddddddddaaddddddddddadaddddddaadddddddddddaddadddddddddddddddaddddaddadddddddddddddddddddddddddaddddadddddddddddddddddddfdddfffffffddddd
    ddddddddddddddddddddddddddddddddddaaddddddddaadddddddaadddddddddddaddaddddddddddddddddaddaddddaddddddddddddddddddddddddaddddadddddddddddddddddddddddffdffffddddd
    ddddddddddddddddddddddddddddddddddddaaaaaaaaaddddddddaadddddddddddadddadddddddddddddddaddaddddaddddddddddddddddddddddddaddddadddddddddddddddddddddddffdfdffddddd
    ddddddddddddddddddddddddddddddddddddddddddddaddddddddaadddddddddddaddddaddddddddddddddadadddddaddddddddddddddddddddddddaddddadddddddddddddddddddddddffdddfdddddd
    dddddddddd3333333333333dddddddddddddddddddddaddddd333aa33333333dddadddddadddddddddddddadad3333a33333333ddddddddddddddddaddddaddddd3333333333333dddddffdddddddddd
    dddddd333333333333333333333dddddddddddddddddad3333333aa333333333333addddaddddddddddddda3a33333a333333333333ddddddddddddaddddad333333333333333333333dffdddddddddd
    dddd3333333333333333ddd3333333dddddddddddddda33333333a3a3333ddd3333a33dddadddddddddd33a3a33333a33333ddd3333333dddddddddadddda333333333333333ddd33333ffdddddddddd
    dd3333333333333333333dddddd333333ddddddddd33a33333333a3a33333dddddda33333adddddddd3333a3a333333a33333dddddd333333ddddddadd3a33333333333333333dddddd3ff333ddddddd
    3333333333333333333333ddddddddddddddd3333333a33333333a3aa33333dddddaddddddadd333333333a3a333333a333333ddddddddddddddd33a333a333333333333333333ddddddffddddddd333
    33333333333333333333333333dddddddd3333333333a333333333a33333333333dadddddda33333333333a3a333333a3333333a33dddddddd333333a33a3333333333333333333333ddfddddd333333
    33333333333333333333333333333333333333333333a3333333333a33333333333a3333333a3333333333a3a333333a33333aaa3333333333333333a3a3333333333333333333333333f33333333333
    33333333333333333333333333333333333333333333a3333333333a33333333333a33333333a333333333a3a333333a3333a33a3333333333333333aa33333333333333333333333333f33333333333
    3333333333333333333333333333333333333333333a333333333333a3333333333a33333333a333333333a3a333333a333a3333a3333333333333aa3a33333333333333333333333333f33333333333
    3333333333333333333333333333333333333333333a3333333333333a333333333a333333333a33333333a3a333333a33a33333a333333333333a3333a3333333333333333333333333333333333333
    333333333333333333333333333333333333333333a33333333333333aa3333333a3333333333a333333333aa333333a33a333333a33333333333333333a333333333333333333333333333333333333
    33333333333333333333333333333333333333333a33333333333333333aaa33aa33333333333a333333333aa333333a3a3333333a333333333333333333aa3333333333333333333333333333333333
    33333333333333333333333333333333333333333a33333333333333333333aa33333333333333a33333333aa333333a3a3333333a33333333333333333333aa33333333333333333333333333333333
    3333333333333333333333333333333333333333a3333333333333333333333333333333333333a333333333a333333a3a3333333a3333333333333333333333aa333333333333333333333333333333
    333333333333333333333333333333333333333a333333333333333333333333333333333333333a33333333a3333333a33333333a333333333333333333333333aa3333333333333333333333333333
    33333333333333333333333333333333333333a3333333333333333333333333333333333333333a3333333333333333a33333333a33333333333333333333333333aa33333333333333333333333333
    3333333333333333333333333333333333333a33333333333333333333333333333333333333333a3333333333333333a33333333a3333333333333333333333333333aaaa3333333333333333333333
    333333333333333333333333333333333333a333333333333333333333333333333333333333333a3333333333333333a33333333a33333333333333333333333333333333aaaa333333333333333333
    33333333333333333333333333333333333a33333333333333333333333333333333333333333333a333333333333333a33333333a333333333333333333333333333333333333aa3333333333333333
    3333333333333333333333333333333333a333333333333333333333333333333333333333333333a333333333333333a33333333a33333333333333333333333333333333333333aa33333333333333
    33333333333333333333333333333333aa3333333333333333333333333333333333333333333333a333333333333333333333333a3333333333333333333333333333333333333333aaa33333a33333
    3333333333333333333333333333333a33333333333333333333333a3333333333333a3333333333a333333333333333333a33333a3333333333333333333333333333333333333333333aaa3a333333
    333333333333333333333333333333a333333333333333333333333a3333333333333a33333333333a333333333333333aaaa3333a3333333333333333333333333333333333333333333333a3333333
    3333333333333333333333333333aa3333333333333333333333333a33333333333333a3333333333a333333333333333a33a3333a333333a3333333333333333333333333333333a333333a33333333
    333333333333333333333333333a333333333333333333333333333a333333333333333a333333333a33333333333333a333a3333a33333aa3333333aaaa333333333aaa333333333a3333a333333333
    33333333333333333333333333a3333333333333333333333333333a3333333333333333a33333333a3333333333333a3333a3333a33333a3333333a3333a3333333a333aa3333333a3333a333333333
    333333333333333333333333aa33333333333333333333333333333a3333333333333333a3333a333a3333333333333a33333a333a3333a3333333a333333a33333a333333a333333a333a3333333333
    33333333333333333333333a3333333333333333333333333333333a33333333333333333a33a3333aa3333a333333a333333a333a3333a3333333a333333a33333a3333333a33333a33aa3333333333
    3333333333333333333333a33333333333333333333333333333333a333333333333333333aa33333333333a333333a3333333a33a333a3333333a33333333a3333a3333333a333333a3aa3333333333
    33333333333333333333aa333333333333333333333333333333333a333333333333333333a3a33333333333a33333a33333333a3a333a333333aa33333333a3333a3333333a333333aaaa3333333333
    3333333333333333333333333333333333333333333333333333333a33333333333333333a33333333333333a33333a33333333a3a333a333333aa33333333a333aa3333333a333333a33a3333333333
    3333333333333333333333333333333333333333333333333333333a3333333333333333a3333333333333333a333a3333333333aa33a33333333a33333333a3333aa333333a333333a333a333333333
    3333333333333333333333333333333333333333333333333333333a33333aaaa333333a333333333333333333aa3a3333333333a333a33333333a33333333a3333aaaa333a33333333a333a33333333
    33333333333333333333333333333333333333333333333333333333aaaaa333aa3333a33333333333333333333aaa3333333333aa3a3333333333a3333333a33333333aaa333333333a3333a3333333
    333333333333333333333333333333333333333333333333333333a3a333333aa3333a33333333333333333333333333333333333a3a3333333333aa33333a333333333333333333333a33333a333333
    333333333333333333333333333333333333333333333333333333aaaaaaaaa333333a333333333333333333333333333333333333aa333333333333a333a3333333333333333333333a333333a33333
    33333333333333333333333333333333333333333333333333333333333333333333a33333333333333333333333333333333333333a3333333333333aaa33333333333333333333333a3333333a3333
    3333333333333333333333333333333333333333333333333333333333333333333a3333333333333333333333333333333333333333333333333333333333333333333333333333333a33333333a333
    `)
music.play(music.createSong(hex`0078000408020401001c000f05001202c102c20100040500280000006400280003140006020004180030003400012434003800012238003c0001203c004000012703001c0001dc00690000045e0100040000000000000000000005640001040003420000000400012a04000800012708000c00012a0c001000012410001400012a14001800012718001c0001241c002000012920002400012724002800012c2c003000012907001c00020a006400f401640000040000000000000000000000000000000003060030003400012709010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c80036000800090001040c000d0001031000110001041400150001031800190001031c001d0001052400250001052800290001042c002d000103`), music.PlaybackMode.UntilDone)
scene.setBackgroundImage(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffcffffffffffcffffffffffffffffffffffffffffcffffffffffcffffffffffffffffffffffffffffcffffffffffcffffffffffffffffffffffffffffcffffffffffcffffffffffffffffffffff
    ffffffffffffffffcbcffffffffffffffffffffcffffffffffffffffcbcffffffffffffffffffffcffffffffffffffffcbcffffffffffffffffffffcffffffffffffffffcbcffffffffffffffffffffc
    fffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffcffffffffffffffaaaffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffff
    fffffffffffffffffffffffffaacffaafffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcffffffffffff
    fff3fffffffffffffffffffaabbbfffafffffffffff3fffffffffffffffffffffbbbfffffffffffffff3fffffffffffffffffffffbbbfffffffffffffff3fffffffffffffffffffffbbbffffffffffff
    ffb3bfffffffffffffffffaffcbcfffaffffffffffb3bfffaffffffffffffffffcbcffffffffffffffb3bffffffffffffffffffffcbcffffffffffffffb3bffffffffffffffffffffcbcffffffffffff
    f33333ffffffffffffccfaffffffffaffffffffff33333ffafffffffffccfffffffffffffffffffff33333ffffffffffffccfffffffffffffffffffff33333ffffffffffffccffffffffffffffffffff
    ff3b3fffffffffffffccafffffffffafffffffffff3b3fffafffffffffccffffffffffffffffffffff3b3fffffffffffffccffffffffffffffffffffff3b3fffffffffffffccffffffffffffffffffff
    ffbfbffffffffffffffafffffffffaffffcfffffffbfbffffaffffffffffffffffffffffffcfffffffbfbfffffffffffffffffffffffffffffcfffffffbfbfffffffffffffffffffffffffffffcfffff
    fffffffffffffffffffafffffffaaffffcbcfffffffffffffafffffffffffffffffffffffcbcffffffffffffaffffffffffffffffffffffffcbcffffffffffffffffffffffffffffffffffffffbcffff
    fffffffffffcfffffffafffffaafffffffcfffffffffffffffacffffffffffffffffffffffcfffffffffffffaffcffffffffffffffffffffffcffffffffffffffffcffffffffffffffffffffffffffff
    ffffffffffcbcffffffaffffafffffffffffffffffffffffffabcfffffffffffffffffffffffffffffffffffafcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffff
    fffffffffffcfffffffaaaaaffffffffffffffffffffffffffacffffffffaaaaffffffffffffffffffffffffaffcfffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffffffffff
    fffffffffffffffffaafafffffffffffffffffffffffffffffaffffffffaffffafffffffffffffffffffffffafffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fcfffffffffffffffffffafffffcfffffffffffffcffffffffafffffffaffffffafcfffffffffffffcffffffaffffffffffffffffffcfffffffffffffcfffffffffffffffffffffffffcffffffffffff
    fffffffffffffffffcfffaffffffffffffffffffffffffffffafffffaafffffffaffffffffffffffffffffffaffffffffcfffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffff
    ffffffffffffffffffffffafffffffffffcfffffffffffffffaffffafffffffffaffffffffcffffffffffffffaffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffff
    fffffffffffffffffffffffafffffffffffffffffffffffffffaffafffffffffffaffffffffffffffffffffffaffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffaffffffffffffffffffffffffffafaffffffffffffaffffffffffffffffffffffaffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffccfffffcfffffffffffaffffffffffffffffffffccfffafafffffffffffffaffffffffffffaaaaaaaaaafffcffffffffffffffffffffffffffffffffccfffffcffffffffffffffffffffffffff
    ffffffccfffffffffffffcccccacccccffffffffffffffccfffaaffffffffccccccaccccffffffaaffffffccfafffffffffffcccccccccccffffffffffffffccfffffffffffffccccccccffcffffffff
    ffffffffffffffffcccccccccccaacccccccfffffffffffffffaafffccccccccccccacccccccffafffffffffffafffffccccccccccccccccccccffffffffffffffffffffcccccccccccccfffffffffff
    fffffffffffffccccccccccccccccaaccccccccffffffffffffffcccccccccccccccaccccccccacfffffffffffaffccccccccccccccccccccccccccffffffffffffffccccccccccccccccffcffffffff
    ccfffffffffccccccccccccccccccccaccccccccccfffffffffcccccccccccccccccaccccccccaccccffffffffacccccccccccccccccccccccccccccccfffffffffccccccccccccccccccffffffffffc
    ccccccccccccccccccccccccccccccccaaccccccccccccccccccccccccccccccccccacccccccccaccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffffffffffc
    ccccccccccccccccccccccccccccccccccacccccccccccccccccccccccccccccccccaccccccccccaccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffffc
    bbbbbbbbbbbbccccccccccccccccccccbbbabbbbbbbbbbbbbbbbcccccccccccccccccaccbbbbbbbbabbbbbbbbbbbccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccfffffffffffb
    bbbbbbbbbbbbbbbbbccccccccccbbbbbbbbbabbbbbbbbbbbbbbbbbbbbccccccccccbbabbbbbbbbbbbaabbbbbbbbbbbbbbccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccbfffffffffffb
    bbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbabbbbbbbbbbbbbbbbbbbbbbbbbbbb3333abbbbbbbbbbbbaaaabbbbbbbbbbbbbbbbbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3f3ffffffffffb
    bbbbbbbbb3333333bbbbbbbbb33cbbbbbbbbbbbbbbbbbbbbb3333333bbbbbbbbb33cbbabbbbbbbbbbbbbbbbaaaaa3333bbbbbbbbb33cbbbbbbbbbbbbbbbbbbbbb3333333bbbbbbbbb33fbffffffffffb
    bbbbbbb33cccccbb33bbbbbbbccbbccbbbbbbbbbbbbbbbb33cccccbb33bbbbbbbccbbccbbbbbbbbbbbbbbbb33cccaaaaaabbbbbbbccbbccbbbbbbbbbbbbbbbb33cccccbb33bbbbbbbccfbffffffffffb
    bbbbbbbcccbbbbbcccbbbbbbbbccccbbbbbbbbbbbbbbbbbcccbbbbbcccbbbbbbbbccccbbbbbbbbbbbbbbbbbcccbbbbbcccbbbbbbbbccccbbbbbbbbbbbbbbbbbcccbbbbbcccbbbbbbbbcfcffffffffffb
    3bbbbbbbcccccccccbbbbbbbbbbbbbbb333333333bbbbbbbcccaaccccbbbbbbbbbbbbbbb333333333bbbbbbbcccccccccbbbbbbbbbbbbbbb333333333bbbbbbbcccccccccbbbbbbbbbfbbffffffffff3
    333bbbbbbbcccccbbbbbbbbbbbbbbb333ccbbbbb333bbbbbbbacaccbbbbbbbbbbbbbbb333ccbbbbb333bbbbbbbcccccbbbbbbbbbbbbbbb333ccbbbbb333bbbbbbbcccccbbbbbbbbbbbfbbffffffffffb
    cc3bbbbbbbbbbbbbbbbbbbbbbbbbbb3cccbbbccccc3bbbbbbabbabbbbbbbbbbbbbbbbb3cccbbbccccc3bbbbbbbbbbbbbbbbbbbbbbbbbbb3cccbbbccccc3bbbbbbbbbbbbbbbbbbbbbbbfbbffffffffffc
    cccbbbbbbbbbbbb333bbbbbb3abbbbcccbbbbbcccccbbbbbabbbabb333bbbbbb3bbbbbcccbbbbbcccccbbbbbbbbbbbb333bbbbbb3bbbbbcccbbbbbcccccbbbbbbbbbbbb333bbbbbb3bfbbfcffffffffc
    cccbbbbbbbbbbbb333bbbbbbbbabbbcccccccccccccbbbbbabbbbab333bbbbbbbbbbbbcacccccccccccbbbbbbbbbbbb333bbbbbbbbbbbbcccccccccccccbbbbbbbbbbbb333bbbbbbbbfbbfcffffffffc
    cbbbbbbbbbbbbbbbbbbbbbbbbbbabbbbcccccccccbbbbbbabbbbbabbbbbbbbbbbbbbbbbacccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccbbbbbbbbbbbbbbbbbbbbbbbbbfbbfbffffffffc
    bbbb3333bbbbbbbbbbbbbbbbbbbabbbbbbbbbbbbbbbb333abbbbbabbbbbbbbbbbbbbbbabbbbbbbbbbbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbbbbbbbbbbfbbfffffffffbf
    bbb333333bbb33ddddddddddddddadd33bbbbbbbbbb333a33bbb3adddddddddddddddda33bbbbbbbbbb333333bbb33ddddddddddddddddd33bbbbbbbbbb333333bbb33ddddddddddddfddfffffffffbf
    bbb33333dddddddddddddddddddddaddddddd3bbbbb333a3ddddddaddddddddddddddaddddddd3bbbbb33333ddddddddddddddddddddddddddddd3bbbbb33333ddddddddddddddddddfddfffffffffbf
    dddddddddddddddddddddddddddddadd33333dddddddddadddddddaddddddddddddddadd33333ddddddddddddddaddddddddddddddddddda33333dddddddddddddddddddddddddddddfdffffffffffdf
    dddddddddddddd3333333333dddddda33dddd33ddddddadddddddd3a33333333dddddad33dddd33dddddddddddaadd3333333333daddddaa3dddd33ddddddddddddddd3333333333ddfdfffffffffffd
    dddddddddddd333ddddddddd33dddddabbbbbbbdddddaddddddd333adddddddd33ddaddbbbbbbbbddddddddaaadda33ddddddddd3addddabbbbbbbbddddddddddddd333ddddddddd33fdffdffffffffd
    ddddddddddd333d3bbbbbbbbd33dddddabbbbbddddddadddddd333dabbbbbbbbd33dadddbbbbbbddddddddadaaa33ad3bbbbbbbbda3ddaddbbbbbbddddddddddddd333d3bbbbbbbbd3fdfffffffffffd
    ddddddddddd33bbbbbbbbbbbb33ddddddadddddddddaddddddd33bbabbbbbbbbb33daddddddddddddddddadaddda3abbbbbbbbbbba3dadddddddddddddddddddddd33bbbbbbbbbbbb3fdfffffffffffd
    ddddddddddddbbbbbbbbbbbbbbdddddddaddddddddadddddddddbbbbabbbbbbbbbdadddddddddddddddddaaddddababbbbbbbbbbbaddadddddddddddddddddaaadddbbbbbbbbbbbbbbfdfffffffffdfd
    ddddddddddddd3bbbbbbbbbb3dddddddddadddddddadddddddddd3bbabbbbbbb3ddaddddddddddddddddadadddddaabbbbbbbbbb3addaddddddddddddddaaaddddddd3bbbbbbbbbb3dfdffffffffffdd
    d333333ddddddddd333333dddddddddddddaddddda33333ddddddddda33333ddddadddddddddddddd333a3addddddadd333333dddadaddddddddddddaaa3333ddddddddd333333ddddfdffffffffffdd
    333333333ddddddddddddddddddddddddddaddd3a33333333dddddddadddddddddadddddddddddd33333aa333ddddaadddddddddadadddddddddaaaa333333333dddddddddddddddddffffffffffffd3
    33333333ddddddddddddddddddddddddddddaddda3333333dddddddddaddddddddaddddddddddddd3333aa33dddddaadddddddddadadddddddaadddd33333333ddddddddddddddddddfffffffffffddd
    dddddddddddddddddddddddddddddddddddddadadddddddddddddddddadddddddaddddddddddddddddddaddddddddaadddddddddaadddddddaddddddddddddddddddddddddddddddddfffffffffffddd
    dddddddddddddddddddddddddd333333333333aadddddddddddddddddaddddddda3333333333333dddddadddddddadadddddddddaa333333a333333dddddddddddddddddddddddddddf3fffffffff33d
    33ddddddddddddddddddddd333dddddddddddd3333ddddddddddddddddadddd3a3dddddddddddd3333ddadddddddaddaddddddd3aadddddadddddd3333ddddddddddddddddddddd333fffffffffffd33
    d333ddddddddddddddddd333ddddddddddddddddd333ddddddddddddddadd333adddddddddddddddd333adddddddaddaddddd333aaddddadddddddddd333dddddddddddddaddd333ddfffffffffffddd
    ddd33ddddddddddddddd33dddd3bbbbbbbbbbb3dddd33dddddddddddddad33dadd3bbbbbbbbbbb3dddd3adddddddaddadddd33daad3bbbabbbbbbb3dddd33ddddddddddddddd33ddddfbffffffffbb3d
    b3dd3ddddddddddddddd3dd3bbbbbbbbbbbbbbbbb3dd3dddddddddddddda3da3bbbbbbbbbbbbbbbbb3ddaddddddadddadddd3ddabbbbbbabbbbbbbbbb3dd3ddddddddddddddd3dd3bbfbffffffffbbbb
    bb333ddddddddddddddd33bbbbbbbbbbbbbbbbbbbb333dddddddddddddddaabbbbbbbbbbbbbbbbbbbb333addddadddddaddd33babbbbbbbabbbbbbbbbb333ddddddddddddddd33bbbfbbffffffffbbbb
    bbb3dddddddddddddddd3bbbbbbbbbbbbbbbbbbbbbb3dddddddddddddddd3bbbbbbbbbbbbbbbbbbbbbb3ddaddaddddddaddd3bbbbbbbbbbabbbbbbbbbbb3dddddddddddddddd3bbbbfbbffffffffbbbb
    b3ddddddddddddddddddd3bbbbbbbbbbbbbbbbbbb3ddddddddddddddddddd3bbbbbbbbbbbbbbbbbbb3dddddaadddddddadddd3bbbbbbbbbbabbbbbbbb3ddddddddddddddddddd3bbbfbbffffffffbbbb
    dddddddddddddddddddddddd3bbbbbbbbbbbbb33dddddddddddddddddddddddd3bbbbbbbbbbbbb33dddddddddddddddddadddddd3bbbbbbbbabbbb33dddddddddddddddddddddddd3fbbfffffffbbb33
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddadddddddddddddddadddddddddddddddddddddddddddddddfddfffffffddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddadddddddddddddddaddddddddddddddddddddddddddddddfdddfffdfffddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddaddddddddddddddddadddddddddddddddddddddddddddddfdddfffffffddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddaaddddddddddddddddaddddddddddddddddddddddddddddddddffdffffddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddadddddddddddddddddddddddddddddddffdfdffddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddadddddddddddddddddddddddddddddddffdddfdddddd
    dddddddddd3333333333333ddddddddddddddddddddddddddd3333333333333ddddddddddddddddddddddddddd3333333333333dddddddddddddaddddddddddddd3333333333333dddddffdddddddddd
    dddddd333333333333333333333ddddddddddddddddddd333333333333333333333ddddddddddddddddddd333333333333333333333dddddddddaddddddddd333333333333333333333dffdddddddddd
    dddd3333333333333333ddd3333333dddddddddddddd3333333333333333ddd3333333dddddddddddddd3333333333333333ddd3333333dddddadddddddd3333333333333333ddd33333ffdddddddddd
    dd3333333333333333333dddddd333333ddddddddd3333333333333333333dddddd333333ddddddddd3333333333333333333ddddaa333333aaddddddd3333333.33333.33333dddddd3ff333ddddddd
    3333333333333333333333ddddddddddddddd3333333333333333333333333ddddddddddddddd3333333333333333333333333dddddaaaaaadddd3333333333...333...333333ddddddffddddddd333
    33333333333333333333333333dddddddd33333333333333333333333333333333dddddddd33333333333333333333333333333333dddddddd3333333333333..........3.3333333ddfddddd333333
    333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333.................33333f33333333333
    333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333...................333f33333333333
    333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333.........a..aa..........3333333333
    33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333..........aaaaa..........3333333333
    33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333.........aaa..a..........3333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333.........aa.a..a............33333333
    333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333a.........a..a...a...........33333333
    333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333.............a...a............3333333
    33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333..............a...a.............333333
    33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333...............a...a.............33333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333................a....a............33333
    333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333.................a....a............33333
    333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333.................a.................33333
    33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333..................a.................33333
    33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333..................a.................33333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333.3...................................33333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333.....................................33333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333.....................................33333
    333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333.3...........................aa.......33333
    333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333...3.........a.......a.......a........33333
    333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333...3.........aa......a......a........333333
    333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333.3.3..........a......a.....a.........333333
    33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333.3.3........aa.....a....a.........3333333
    33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333..3..3.3.....aa....a...a.........33333333
    333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333...3......aa...aa.a.........333333333
    33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333.........aa...aa.........3333333333
    33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333..........aaaaaa.........3333333333
    33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333............a.a.........33333333333
    33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333.3.333.......aa........333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333..............3333333333333
    333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333..........333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    `)
game.onUpdateInterval(2000, function () {
    sprites.destroy(projectile)
})
game.onUpdateInterval(200, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . 3 1 1 3 . . . . . . 
        . . . . . 2 1 1 1 1 2 . . . . . 
        . . . . . 2 1 1 1 1 2 . . . . . 
        . . . . . . 3 1 1 3 . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 0, 0)
    projectile.follow(mySprite2)
})
