"use strict";
Hooks.once('init', () => {
    CONFIG.Dice.randomUniform = () => crypto.getRandomValues(new Uint32Array(1))[0] / 0x100000000;
});
//# sourceMappingURL=crypto-rng.js.map