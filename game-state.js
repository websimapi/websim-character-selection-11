// Global game state variables
window.peer = null;
window.peerId = null;
window.connections = [];
window.isHost = false;
window.gameMode = null; // 'scan' or 'realtime'
window.mySlotIndex = 0;
window.playerSlots = [
    { occupied: true, color: 'blue', characterIndex: 0, playerId: 'host', gender: 'male' }, // Player 1 (host)
    { occupied: false, color: 'green', characterIndex: 1, playerId: null, gender: 'male' }, // Player 2
    { occupied: false, color: 'yellow', characterIndex: 2, playerId: null, gender: 'male' }, // Player 3
    { occupied: false, color: 'red', characterIndex: 3, playerId: null, gender: 'male' },  // Player 4
    { occupied: false, color: 'lightblue', characterIndex: 0, playerId: null, gender: 'male' }, // Player 5
    { occupied: false, color: 'lightgreen', characterIndex: 1, playerId: null, gender: 'male' }, // Player 6
    { occupied: false, color: 'darkyellow', characterIndex: 2, playerId: null, gender: 'male' }, // Player 7
    { occupied: false, color: 'pink', characterIndex: 3, playerId: null, gender: 'male' }  // Player 8
];
window.suppressUIAnimationOnce = false;