import { assets } from "../img";
export const tourCategories = [
    {
        id: 1,
        img: assets.category_trekking,
        name: "category.trekking",
        submenu: [
            { id: 1, name: "category.trekking.rainbowMountain" },
            { id: 2, name: "category.trekking.palcoyo" },
            { id: 3, name: "category.trekking.humantay" },
            { id: 4, name: "category.trekking.salkantay" },
            { id: 5, name: "category.trekking.huchuyQosqo" },
            { id: 6, name: "category.trekking.incaTrail" },
        ],
    },
    {
        id: 2,
        img: assets.category_adventure,
        name: "category.adventure",
        submenu: [
            { id: 1, name: "category.adventure.atv" },
            { id: 2, name: "category.adventure.biking" },
            { id: 3, name: "category.adventure.canopy" },
            { id: 4, name: "category.adventure.rafting" },
            { id: 5, name: "category.adventure.atvHiking" },
            { id: 6, name: "category.adventure.canopyTrekking" },
            { id: 7, name: "category.adventure.bikingRafting" },
        ],
    },
    {
        id: 3,
        img: assets.category_nature,
        name: "category.nature",
        submenu: [
            { id: 1, name: "category.nature.rainbowMountain" },
            { id: 2, name: "category.nature.palcoyo" },
            { id: 3, name: "category.nature.humantay" },
            { id: 4, name: "category.nature.incaBridge" },
        ],
    },
    {
        id: 4,
        img: assets.category_culture,
        name: "category.culture",
        submenu: [
            { id: 1, name: "category.culture.sacredValley" },
            { id: 2, name: "category.culture.southValley" },
            { id: 3, name: "category.culture.cityTour" },
            { id: 4, name: "category.culture.machupicchu" },
            { id: 5, name: "category.culture.shortIncaTrail" },
        ],
    },
    {
        id: 5,
        img: assets.category_extreme,
        name: "category.extreme",
        submenu: [
            { id: 1, name: "category.extreme.atvMaras" },
            { id: 2, name: "category.extreme.mountainBiking" },
            { id: 3, name: "category.extreme.rafting" },
            { id: 4, name: "category.extreme.canopy" },
            { id: 5, name: "category.extreme.skyLodge" },
            { id: 6, name: "category.extreme.incaBridge" },
            { id: 7, name: "category.extreme.viaFerrata" },
        ],
    },
];
