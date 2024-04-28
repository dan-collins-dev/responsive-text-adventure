// import { moveEvent } from "./events.js";
import { currentRoom, rooms, searchRoom, setNewRoom } from "./roomData.js";

export const createMoveActionCmps = (room) => {
    const actionsContainer = document.getElementById("actions-container")
    const exits = Object.entries(room.actions.move);

    exits.forEach((e, idx, arr) => {
        if (arr[idx][1] !== null) {

            const actionCmp = document.createElement("button");
            actionCmp.classList.add("btn")
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

    const searchBtn = document.createElement("button");
    searchBtn.classList.add("btn");
    searchBtn.textContent = "Search the Area";
    searchBtn.addEventListener("click", searchRoom);
    actionsContainer.append(searchBtn)
}

export const removeAllActions = () => {
    const actionsContainer = document.getElementById("actions-container");

    while (actionsContainer.firstChild) {
        actionsContainer.removeChild(actionsContainer.lastChild)
    }
}

export const updateAreaCmp = (room) => {
    const h1 = document.querySelector("h1")
    console.log(h1)
    h1.textContent = room.name
}

export const updateDescCmp = (room) => {
    const descCmp = document.getElementById("desc-cmp");
    const pDesc = document.getElementById("primary-desc")
    const sDesc = document.getElementById("search-desc")
    
    pDesc.textContent = room.desc

    if (room.searched === true) sDesc.textContent = room.searched
}

export const moveRooms = (value) => {
    setNewRoom(value)
    removeAllActions()
    createMoveActionCmps(currentRoom)
    createInteractionCmps(currentRoom)
    updateAreaCmp(currentRoom)
    updateDescCmp(currentRoom)
}
