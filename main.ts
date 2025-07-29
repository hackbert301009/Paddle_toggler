namespace SpriteKind {
    export const LeftPaddles = SpriteKind.create()
    export const RightPaddles = SpriteKind.create()
}

function create_ball() {
    
    ball = sprites.create(img`
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
        2 a a a a a a a a a a a a a a 2
        2 a 2 2 2 2 2 2 2 2 2 2 2 2 a 2
        2 a 2 5 5 5 5 5 5 5 5 5 5 2 a 2
        2 a 2 5 2 2 2 2 2 2 2 2 5 2 a 2
        2 a 2 5 2 8 8 8 8 8 8 2 5 2 a 2
        2 a 2 5 2 8 7 7 7 7 8 2 5 2 a 2
        2 a 2 5 2 8 7 7 7 7 8 2 5 2 a 2
        2 a 2 5 2 8 8 8 8 8 8 2 5 2 a 2
        2 a 2 5 2 2 2 2 2 2 2 2 5 2 a 2
        2 a 2 5 5 5 5 5 5 5 5 5 5 2 a 2
        2 a 2 2 2 2 2 2 2 2 2 2 2 2 a 2
        2 a a a a a a a a a a a a a a 2
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
    `, SpriteKind.Player)
    ball.setBounceOnWall(true)
    ball.setVelocity(100, 100)
    ball.y = Math.randomRange(0, 120)
}

function create_left_paddle() {
    
    left_paddle = sprites.create(img`
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
    `, SpriteKind.LeftPaddles)
    controller.moveSprite(left_paddle, 0, 150)
    left_paddle.setStayInScreen(true)
    left_paddle.left = 0
}

function create_right_paddle() {
    
    right_paddle = sprites.create(img`
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    `, SpriteKind.RightPaddles)
    controller.player2.moveSprite(right_paddle, 0, 150)
    right_paddle.setStayInScreen(true)
    right_paddle.right = 160
}

sprites.onOverlap(SpriteKind.Player, SpriteKind.LeftPaddles, function on_overlap(ball: Sprite, left_paddle: Sprite) {
    ball.vx = ball.vx * -1
    info.changeScoreBy(1)
    
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.RightPaddles, function on_overlap2(ball: Sprite, right_paddle: Sprite) {
    right_paddle.vx = right_paddle.vx - 1
    info.player2.changeScoreBy(1)
    
})
let ball : Sprite = null
let left_paddle : Sprite = null
let right_paddle : Sprite = null
create_ball()
create_left_paddle()
create_right_paddle()
