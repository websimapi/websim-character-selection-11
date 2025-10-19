// This file is responsible for creating the DOM element for a single character slot.
import { characters } from './characters.js';

/**
 * Creates and returns a character slot DOM element.
 * @param {object} slotData - The data for the slot from playerSlots.
 * @param {number} index - The index of the slot.
 * @returns {HTMLElement} The created character slot element.
 */
export function createCharacterSlotElement(slotData, index) {
    const character = characters[slotData.characterIndex];
    if (!character) {
        console.error(`Invalid character index ${slotData.characterIndex} for slot ${index}`);
        return document.createElement('div'); // Return empty div to avoid crashing
    }

    const slot = document.createElement('div');
    slot.className = 'character-slot';
    slot.dataset.player = index + 1;
    slot.dataset.color = slotData.color;
    slot.dataset.characterIndex = slotData.characterIndex;

    let characterImgSrc = character.img;
    if (character.genders) {
        characterImgSrc = character.genders[slotData.gender]?.img || character.genders.male.img;
        slot.dataset.archerGender = slotData.gender;
    }

    slot.innerHTML = `
        <div class="character-frame">
            <div class="select-character-text">Select A Character</div>
            <div class="character-image-wrapper">
                <img src="${characterImgSrc}" alt="${character.name}" class="character-image" data-base-hue="${character.baseHue}">
            </div>
            <div class="character-stats">
                <div class="gender-toggle-container" style="visibility: ${character.genders ? 'visible' : 'hidden'};">
                    <button class="gender-toggle ${slotData.gender === 'male' ? 'active' : ''}" data-gender="male">M</button>
                    <button class="gender-toggle ${slotData.gender === 'female' ? 'active' : ''}" data-gender="female">F</button>
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