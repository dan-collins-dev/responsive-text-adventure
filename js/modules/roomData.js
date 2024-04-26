export const rooms = []
const room = {
    id: 0,
    name: "Your House",
    desc: "Test Description",
    actions: {
        move: {
            north: null,
            east: 1
        }
    },
    exits: {
        north: null,
        east: 1,
        south: null,
        west: null,
    }
};

rooms.push(room)
