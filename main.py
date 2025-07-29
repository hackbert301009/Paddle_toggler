@namespace
class SpriteKind:
    LeftPaddles = SpriteKind.create()
    RightPaddles = SpriteKind.create()
def create_ball():
    global ball
    ball = sprites.create(img("""
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
    """), SpriteKind.player)
    ball.set_bounce_on_wall(True)
    ball.set_velocity(100, 100)
    ball.y = Math.random_range(0, 120)
def create_left_paddle():
    global left_paddle
    left_paddle = sprites.create(img("""
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
    """), SpriteKind.LeftPaddles)
    controller.move_sprite(left_paddle,0,150)
    left_paddle.set_stay_in_screen(True)
    left_paddle.left = 0
def create_right_paddle():
    global right_paddle
    right_paddle = sprites.create(img("""
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
    """), SpriteKind.RightPaddles)
    controller.player2.move_sprite(right_paddle,0,150)
    right_paddle.set_stay_in_screen(True)
    right_paddle.right = 160
def on_overlap(ball, left_paddle):
    ball.vx = ball.vx * -1
    info.change_score_by(1)
    pass
sprites.on_overlap(SpriteKind.player, SpriteKind.LeftPaddles, on_overlap)
def on_overlap2(ball, right_paddle):
    right_paddle.vx = right_paddle.vx  -1
    info.player2.change_score_by(1)
    pass
sprites.on_overlap(SpriteKind.player, SpriteKind.RightPaddles, on_overlap2)

ball: Sprite = None
left_paddle: Sprite = None
right_paddle: Sprite = None
create_ball()
create_left_paddle()
create_right_paddle()





