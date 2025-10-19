// Dynamic character slot generation
function generateCharacterSlots() {
    const grid = document.querySelector('.characters-grid');
    if (!grid) return;

    const slotConfigs = [
        { player: 1, color: 'blue', characterIndex: 0 },
        { player: 2, color: 'green', characterIndex: 1 },
        { player: 3, color: 'yellow', characterIndex: 2 },
        { player: 4, color: 'red', characterIndex: 3 },
        { player: 5, color: 'lightblue', characterIndex: 0 },
        { player: 6, color: 'lightgreen', characterIndex: 1 },
        { player: 7, color: 'darkyellow', characterIndex: 2 },
        { player: 8, color: 'pink', characterIndex: 3 }
    ];

    grid.innerHTML = ''; // Clear existing slots

    slotConfigs.forEach(config => {
        const slot = createCharacterSlot(config);
        grid.appendChild(slot);
    });
}

function createCharacterSlot({ player, color, characterIndex }) {
    const character = characters[characterIndex];
    const characterImg = character.genders ? character.genders.male.img : character.img;

    const slot = document.createElement('div');
    slot.className = 'character-slot';
    slot.dataset.player = player;
    slot.dataset.color = color;
    slot.dataset.characterIndex = characterIndex;

    slot.innerHTML = `
        <div class="character-frame">
            <div class="select-character-text">Select A Character</div>
            <div class="character-image-wrapper">
                <img src="${characterImg}" alt="${character.name}" class="character-image" data-base-hue="${character.baseHue}">
            </div>
            <div class="character-stats">
                <div class="gender-toggle-container" style="visibility: hidden;">
                    <button class="gender-toggle active" data-gender="male">M</button>
                    <button class="gender-toggle" data-gender="female">F</button>
                </div>
                <div class="character-name-container">
                    <button class="arrow left-arrow">◀</button>
                    <span class="stat-label"><span class="character-name-text">${character.name}</span></span>
                    <button class="arrow right-arrow">▶</button>
                </div>
                <div class="stat-line strength">Strength: ${character.stats.strength}</div>
                <div class="stat-line speed">Speed: ${character.stats.speed}</div>
                <div class="stat-line magic">Magic: ${character.stats.magic}</div>
                <div class="stat-line armour">Armour: ${character.stats.armour}</div>
            </div>
        </div>
    `;

    return slot;
}