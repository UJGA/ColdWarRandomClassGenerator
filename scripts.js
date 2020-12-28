//Random Item Function - Ran when user clicks generate class button.
function random_item() {
  // Removing all content
  Object.values(Elements).forEach(removeContentFromElement);

  var element = document.getElementById("classContent");
  element.classList.add("classContent");

  // Random Primary Logic
  const primaryItem = getRandomItem(primaryGuns);
  addContentToElement(Elements.Primary, primaryItem);
  //Random Secondary Logic
  const secondaryItem = getRandomItem(secondaryGuns);
  addContentToElement(Elements.Secondary, secondaryItem);
  // Random Perk 1 Logic
  const perk1 = getRandomItem(perkCategory1);
  addContentToElement(Elements.Perk1, perk1);
  // Random Perk 2 Logic
  const perk2 = getRandomItem(perkCategory2);
  addContentToElement(Elements.Perk2, perk2);
  // Random Perk 3 Logic
  const perk3 = getRandomItem(perkCategory3);
  addContentToElement(Elements.Perk3, perk3);
  //Random Lethal Logic
  const lethal = getRandomItem(lethalItems);
  addContentToElement(Elements.Lethal, lethal);
  // Random Tactical Logic
  const tactical = getRandomItem(tacticalItems);
  addContentToElement(Elements.Tactical, tactical);
  //Random Field Upgrade Logic
  const fieldUpgrade = getRandomItem(fieldUpgrades);
  addContentToElement(Elements.FieldUpgrade, fieldUpgrade);
  //Random Wildcard Logic
  const wildCard = getRandomItem(wildcards);
  addContentToElement(Elements.Wildcard, wildCard);

  //Call to Weapon Functions

  //Primaries
  switch (primaryItem.name) {
    // Assult Rifles
    case "test1":
      test1();
      break;
    case "XM4":
      xm4();
      break;
    case "AK-47":
      ak47();
      break;
    case "Krig 6":
      krig6();
      break;
    case "QBZ-83":
      qbz83();
      break;
    case "FFAR 1":
      ffar1();
      break;
    case "Groza":
      groza();
      break;

    // Submachine Guns
    case "MP5":
      mp5();
      break;
    case "Milano 821":
      milano821();
      break;
    case "AK-74u":
      ak74u();
      break;
    case "KSP 45":
      ksp45();
      break;
    case "Bullfrog":
      bullfrog();
      break;
    case "MAC-10":
      mac10();
      break;

    //Tacitcal Rifles
    case "Type 63":
      type63();
      break;
    case "M16":
      m16();
      break;
    case "AUG":
      aug();
      break;
    case "DMR 14":
      dmr14();
      break;

    //Light Machine Guns
    case "Stoner 63":
      stoner63();
      break;
    case "RPD":
      rpd();
      break;
    case "M60":
      m60();
      break;

    //Sniper Rifles
    case "Pelington 703":
      pelington703();
      break;
    case "LW3 - Tundra":
      lw3tundra();
      break;
    case "M82":
      m82();
      break;
  }

  //Secondaries
  switch (secondaryItem.name) {
    case "test12":
      test12();
      break;

    //Shotguns
    case "Hauer 77":
      hauer77();
      break;
    case "Gallo SA12":
      gallosa12();
      break;
    case "Streetsweeper":
      streetsweeper();
      break;

    //Pistols
    case "1911":
      p1911();
      break;
    case "Magnum":
      magnum();
      break;
    case "Diamatti":
      diamatti();
      break;

    //Launchers
    case "Cigma 2":
      cigma2();
      break;
    case "RPG-7":
      rpg7();
      break;

    //Mele
    case "Knife":
      knife();
      break;
    case "Sledgehammer":
      sledgehammer();
      break;
    case "Wakizashi":
      wakizashi();
      break;
    case "M79":
      m79();
      break;
  }
}
