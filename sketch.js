var x

function setup () {
  createCanvas(1040, 400)
  background(51)
  x = -2 * PI
}

function draw () {
  x += 0.01
  stroke(255)
  strokeWeight(3)
  line(0, height / 2, width, height / 2)
  line(width / 2, 0, width / 2, height)
  strokeWeight(3)
    // draw ticks
  for (var i = -2 * PI; i < 2 * PI; i += PI / 3) {
    var xTick = map(i, -2 * PI, 2 * PI, 0, width)
    line(xTick, height / 2 - 10, xTick, height / 2 + 10)
  }

  noStroke()
  fill(255, 0, 0, 255)
  ellipse(map(x, -2 * PI, 2 * PI, 0, width), map(sin(x), -1, 1, height, 0), 4, 4)

  fill(0, 255, 0, 255)
  ellipse(map(x, -2 * PI, 2 * PI, 0, width), map(cos(x), -1, 1, height, 0), 4, 4)
}
