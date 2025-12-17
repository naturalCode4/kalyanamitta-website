const data = {
    title: "What I Can Help With: Through EFT, Energy Healing, and Spiritual Counseling",
    sections: {
        allThree: [
            "Cultivating happiness, peace, self-esteem, stability, and spiritual balance",
            "Deepening love (especially self-love), compassion, and authenticity",
            "Releasing stuck emotions: fear, stress, limiting beliefs, anger, grief, and trauma",
            "Building emotional intelligence, resilience, and regulation",
            "Deepening love (especially self-love), compassion, and authenticity",
            "Being a space of deep friendship, understanding, and holistic support for you, and helping you become that space for yourself and others",
            "Releasing stuck emotions: fear, stress, limiting beliefs, anger, grief, and trauma",
        ],
        eftAndEnergyHealing: [
            "Addressing physical pain and psychosomatically-rooted ailments and diseases",
            "Improving sleep quality and addressing insomnia",
        ],
        eftAndSpiritualCounseling: [
            "Building emotional intelligence, resilience, and regulation",
            "Strengthening romantic relationships and interpersonal dynamics",
            "Psychedelic preparation and integration",
            "Connecting with nature",
        ],
        energyHealingAndSpiritualCounseling: [
            "Freedom from addictions, cravings, and unwanted patterns",
        ],
        eft: [
            "Enhancing performance in athletics, work, intimacy, and daily life",
        ],
        energyHealing: [
        ],
    },
};

// Function to calculate dynamic positions for labels
const calculatePosition = (section, index, totalItems) => {
    const angle = (index / totalItems) * 360; // Spread labels in a circular pattern
    const radius = 80; // Distance from the center of the section
    const x = Math.cos((angle * Math.PI) / 180) * radius;
    const y = Math.sin((angle * Math.PI) / 180) * radius;
    return { x, y };
};

// Export both as a single object
export default { data, calculatePosition };