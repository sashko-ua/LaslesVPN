'use strict';

import { tns } from "tiny-slider/src/tiny-slider";

const slider = tns({
    container: '.customers__slider',
    items: 3,
    slideBy: 1,
    controlsText: [
        '<img src="../img/arrow-back-fill.svg" alt="arrow-back">',
        '<img src="../img/arrow-next-fill.svg" alt="arrow-next">'
    ],
    navAsThumbnails: true,
    autoplay: true,
    autoplayButtonOutput: false
});