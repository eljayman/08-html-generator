const fs = require(fs);

const divContainer = document.createElement("div");
divContainer.setAttribute("class", "card");
const cardHeader = document.createElement("header");
cardHeader.setAttribute("id", "card-header");
const nameContainer = document.createElement("h2");
nameContainer.setAttribute("id", "name-block");
const titleContainer = document.createElement("h3");
titleContainer.setAttribute("id", "title-block");
const cardMain = document.createElement("div");
cardMain.setAttribute("class", "card-main");
const cardField = document.createElement("div");
cardField.setAttribute("class", "card-field");
