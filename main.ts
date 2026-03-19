input.onButtonPressed(Button.A, function () {
    mode = (mode + 1) % NUM_MODES
    step = 0
    strip.clear()
    strip.show()
})
function comet() {
    strip.clear()
    head = step % NUM_LEDS
    for (let t = 0; t <= NUM_LEDS - 1; t++) {
        pos = (head - t + NUM_LEDS) % NUM_LEDS
        fade = Math.round(255 * (NUM_LEDS - t) / NUM_LEDS)
        strip.setPixelColor(pos, neopixel.rgb(0, fade, fade))
    }
    strip.show()
    step += 1
    basic.pause(60)
}
function rainbowSpin() {
    for (let i = 0; i <= NUM_LEDS - 1; i++) {
        hue = (i * 360 / NUM_LEDS + step * 8) % 360
        strip.setPixelColor(i, neopixel.hsl(hue, 99, 50))
    }
    strip.show()
    step += 1
    basic.pause(40)
}
function lavaPulse() {
    brightness = Math.abs(step % 40 - 20) * 6
    strip.clear()
    for (let j = 0; j <= NUM_LEDS - 1; j++) {
        if (j % 2 == 0) {
            strip.setPixelColor(j, neopixel.rgb(brightness, brightness / 6, 0))
        } else {
            strip.setPixelColor(j, neopixel.rgb(brightness / 2, brightness / 12, 0))
        }
    }
    strip.show()
    step += 1
    basic.pause(30)
}
function sparkle() {
    strip.clear()
    numSparks = 3
    for (let index = 0; index < numSparks; index++) {
        pos2 = Math.randomRange(0, NUM_LEDS - 1)
        r = Math.randomRange(0, 255)
        g = Math.randomRange(0, 255)
        b = Math.randomRange(0, 255)
        strip.setPixelColor(pos2, neopixel.rgb(r, g, b))
    }
    strip.show()
    step += 1
    basic.pause(80)
}
input.onButtonPressed(Button.B, function () {
    mode = (mode + NUM_MODES - 1) % NUM_MODES
    step = 0
    strip.clear()
    strip.show()
})
let b = 0
let g = 0
let r = 0
let pos2 = 0
let numSparks = 0
let brightness = 0
let hue = 0
let fade = 0
let pos = 0
let head = 0
let step = 0
let mode = 0
let NUM_MODES = 0
let strip: neopixel.Strip = null
let NUM_LEDS = 0
NUM_LEDS = 20
strip = neopixel.create(DigitalPin.P0, NUM_LEDS, NeoPixelMode.RGB)
NUM_MODES = 10
strip.setBrightness(80)
basic.forever(function () {
    if (mode == 0) {
        rainbowSpin()
    } else if (mode == 1) {
        lavaPulse()
    } else if (mode == 2) {
        comet()
    } else if (mode == 3) {
        sparkle()
    }
})