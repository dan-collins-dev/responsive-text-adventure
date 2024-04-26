import { createActionCmp, updateAreaCmp, updateDescCmp } from "./modules/components.js"
import { rooms } from "./modules/roomData.js"
const actionsContainer = document.getElementById("actions-container")

let currentRoom = rooms[0]

actionsContainer.append(createActionCmp(currentRoom))
updateAreaCmp(currentRoom)
updateDescCmp(currentRoom)
kaboom({
    width: 256,
    height: 256,
    font: "sans-serif",
    canvas: document.querySelector("#map-cmp"),
    background: [ 0, 0, 0, ],
    scale: 1
})

loadSprite("test", "./assets/sprites/test.png")

const btn = document.getElementById("test")

const mapComponent = document.getElementById("map-cmp");

// debug.inspect = true

const room1 = add([
    pos(width() / 2, height() / 2),
    rect(8, 8),
    anchor("center"),
    color(0, 255, 0),
    // outline(1),
    "shift"
])

const room2 = add([
    pos(width() / 2 + 16, height() / 2),
    rect(8, 8),
    anchor("center"),
])

const room3 = add([
    pos(width() / 2 + 32, height() / 2),
    rect(8, 8),
    anchor("center"),
])

const room4 = add([
    pos(width() / 2 + 48, height() / 2),
    rect(8, 8),
    anchor("center"),
])

const moveCameraLeft = () => {
    const dx = camPos().x - 16 + 8;
    const dy = camPos().y
    camPos(dx, dy)
}

add([
    sprite("test"),
    pos(0, 0),
    area(),
    z(1)
])

const moveCameraRight = () => {
    const dx = camPos().x + 16;
    const dy = camPos().y
    camPos(dx, dy)
}

btn.addEventListener("click", moveCameraRight)