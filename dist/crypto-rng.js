"use strict";
let i = 0;
const randomValues = crypto.getRandomValues(new Uint32Array(1000));
Hooks.once('init', () => {
    CONFIG.Dice.randomUniform = () => {
        if (i >= randomValues.length) {
            crypto.getRandomValues(randomValues);
            i = 0;
        }
        return randomValues[i++] / 0x100000000;
    };
});
//# sourceMappingURL=crypto-rng.js.map