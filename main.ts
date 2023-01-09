let answers = [
"It is certain",
"It is decidedly so",
"Without a doubt",
"Yes, definitely",
"You may rely on it",
"As I see it, yes",
"Most likely",
"Outlook good",
"Yes",
"Signs point to yes",
"Reply hazy try again",
"Ask again later",
"Better not tell you now",
"Cannot predict now",
"Concentrate and ask again",
"Don't count on itMy reply is no",
"My sources say no",
"Outlook not so good",
"Very doubtful"
]
basic.forever(function () {
    basic.showNumber(8)
    if (input.isGesture(Gesture.Shake)) {
        basic.clearScreen()
        basic.pause(1000)
        basic.showString("" + (answers[randint(0, answers.length)]))
    }
})
