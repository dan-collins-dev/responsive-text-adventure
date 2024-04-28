// import { moveEvent } from "./events.js";
import { currentRoom, rooms, setNewRoom } from "./roomData.js";

export const createMoveActionCmps = (room) => {
    const actionsContainer = document.getElementById("actions-container")
    const exits = Object.entries(room.actions.move);
    console.log(exits)

    exits.forEach((e, idx, arr) => {
        if (arr[idx][1] !== null) {

            const actionCmp = document.createElement("button");
            actionCmp.textContent = arr[idx][1].text;
            actionCmp.value = arr[idx][1].rId;
            
            actionCmp.addEventListener("click", () => {
                moveRooms(actionCmp.value)
            })

            actionsContainer.append(actionCmp)
        }
    })
};

export const createInteractionCmps = (room) => {
    const actionsContainer = document.getElementById("actions-container")
    const interactions = Object.entries(room.actions.interact);
}

export const removeAllActions = () => {
    const actionsContainer = document.getElementById("actions-container");
    const children = actionsContainer.childNodes
    for (let c of children) {
        c.remove()
    }
}

export const updateAreaCmp = (room) => {
    const areaCmp = document.getElementById("area-cmp")
    areaCmp.textContent = room.name
}

export const updateDescCmp = (room) => {
    const descCmp = document.getElementById("desc-cmp");
    descCmp.textContent = room.desc
}

export const moveRooms = (value) => {
    setNewRoom(value)
    removeAllActions()
    createMoveActionCmps(currentRoom)
    updateAreaCmp(currentRoom)
    updateDescCmp(currentRoom)
}
