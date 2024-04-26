export const createActionCmp = (room) => {
    console.log(room.exits)
    
    const actionCmp = document.createElement("button");
    actionCmp.textContent = "I am an action that is automagically created";

    actionCmp.addEventListener("click", () => {
        
    })
    return actionCmp;
};

export const updateAreaCmp = (room) => {
    const areaCmp = document.getElementById("area-cmp")
    areaCmp.textContent = room.name
}

export const updateDescCmp = (room) => {
    const descCmp = document.getElementById("desc-cmp");
    descCmp.textContent = room.desc
}