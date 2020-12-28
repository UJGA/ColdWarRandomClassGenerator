const getRandomItem = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

const getRandomNumber = (max, min = 0) => {
  return Math.floor(Math.random() * max) + min;
};

const Elements = {
  // Primary Weapon
  Primary: "primary",
  PrimaryAtt1: "primaryAtt1",
  PrimaryAtt2: "primaryAtt2",
  PrimaryAtt3: "primaryAtt3",
  PrimaryAtt4: "primaryAtt4",
  PrimaryAtt5: "primaryAtt5",
  PrimaryAtt6: "primaryAtt6",
  PrimaryAtt7: "primaryAtt7",
  PrimaryAtt8: "primaryAtt8",
  // Secondary Weapon
  Secondary: "secondary",
  SecondaryAtt1: "secondaryAtt1",
  SecondaryAtt2: "secondaryAtt2",
  SecondaryAtt3: "secondaryAtt3",
  SecondaryAtt4: "secondaryAtt4",
  SecondaryAtt5: "secondaryAtt5",
  SecondaryAtt6: "secondaryAtt6",
  SecondaryAtt7: "secondaryAtt7",
  SecondaryAtt8: "secondaryAtt8",
  // Extras
  Tactical: "tactical",
  Lethal: "lethal",
  FieldUpgrade: "fieldUpgrade",
  // Perks,
  Perk1: "perk1",
  Perk2: "perk2",
  Perk3: "perk3",
  // Wildcard
  Wildcard: "wildcard",
};

const PrimaryAttachments = {
  Optics: "optics",
  Muzzle: "muzzle",
  Barrel: "barrel",
  Body: "body",
  Underbarrel: "underbarrel",
  Magazine: "magazine",
  Handle: "handle",
  Stock: "stock",
};

function addContentToElement(elementId, itemObject) {
  const title = document.querySelector(`#${elementId} h3`);
  const image = document.querySelector(`#${elementId} div`);

  const imageElement = document.createElement("img");
  imageElement.src = itemObject.image;
  imageElement.width = 200;
  imageElement.alt = itemObject.name;

  image.appendChild(imageElement);
  title.innerHTML = itemObject.name;
}

function removeContentFromElement(elementId) {
  const title = document.querySelector(`#${elementId} h3`);
  const image = document.querySelector(`#${elementId} div`);

  title.innerHTML = "";
  image.innerHTML = "";
}
