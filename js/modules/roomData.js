export const rooms = [];
let room0 = {
    id: 0,
    name: "Your House",
    desc: "Your home is modest, but satisfies the needs of a farmer and his son.",
    searched: false,
    actions: {
        move: {
            north: null,
            east: {
                rId: 1,
                text: "Go Outside",
            },
            south: null,
            west: null
        },
        interact: {
            search: {
                text: "Nothing of interested to be found here."
            },
            special: {},
        },
    },
    entities: {
        visible: {},
        hidden: {},
    },
};

let room1 = {
    id: 1,
    name: "A Worn Path outside your house.",
    desc: "You find yourself on a worn, dirt path on the outskirts of your village, The Village. The Village used to have a different name, but it was lost ages ago due to inconvenience. The founder of The Village was long-winded, so too was the name he gave it. The townsfolk grew weary of saying the name and eventually stopped saying it. It was for the best.",
    searched: false,
    actions: {
        move: {
            north: null,
            east: {
                rId: 2,
                text: "Go East",
            },
            south: null,
            west: {
                rId: 0,
                text: "Go West",
            },
        },
        interact: {
            search: {},
            special: {},
        },
    },
    entities: {
        visible: {},
        hidden: {},
    },
};

let room2 = {
    id: 2,
    name: "A Worn Path leading towards the village.",
    desc: "You find yourself on a worn, dirt path on the outskirts of your village, The Village. The Village used to have a different name, but it was lost ages ago due to inconvenience. The founder of The Village was long-winded, so too was the name he gave it. The townsfolk grew weary of saying the name and eventually stopped saying it. It was for the best.",
    searched: false,
    actions: {
        move: {
            north: null,
            east: null,
            south: null,
            west: {
                rId: 1,
                text: "Go West",
            },
        },
        interact: {
            search: {},
            special: {},
        },
    },
    entities: {
        visible: {},
        hidden: {},
    },
};

rooms.push(room0);
rooms.push(room1);
rooms.push(room2)

export let currentRoom = rooms[0]

export const setNewRoom = (roomId) => {
    currentRoom = rooms[roomId]
    console.log(currentRoom)
}

export const searchRoom = () => {
    currentRoom.searchRoom = true;
}