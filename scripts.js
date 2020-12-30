//Random Item Function - Ran when user clicks generate class button.
function random_item() {
    // console.log("button pressed");

    // Reset all Elements (Used for if user spamms generate button)

    //Remove Updates
    document.getElementById("myTitle").innerHTML = "";
    // document.getElementById("goAgain").innerHTML = '<button id="mybtn" class="btn btn-primary" onclick="random_item();">Generate Again</button><br><br>';

    // Reset Primary
    document.getElementById("primaryH3").innerHTML = ""
    document.getElementById("primary").innerHTML = "";

    // Reset Primary Attachment 1
    document.getElementById("primaryAtt1H3").innerHTML = "";
    document.getElementById("primaryAtt1").innerHTML = "";

    // Reset Primary Attachment 2
    document.getElementById("primaryAtt2H3").innerHTML = "";
    document.getElementById("primaryAtt2").innerHTML = "";

    // Reset Primary Attachment 3
    document.getElementById("primaryAtt3H3").innerHTML = "";
    document.getElementById("primaryAtt3").innerHTML = "";

    // Reset Primary Attachment 4
    document.getElementById("primaryAtt4H3").innerHTML = "";
    document.getElementById("primaryAtt4").innerHTML = "";

    // Reset Primary Attachment 5
    document.getElementById("primaryAtt5H3").innerHTML = "";
    document.getElementById("primaryAtt5").innerHTML = "";

    // Reset Primary Attachment 6
    document.getElementById("primaryAtt6H3").innerHTML = "";
    document.getElementById("primaryAtt6").innerHTML = "";

    // Reset Primary Attachment 7
    document.getElementById("primaryAtt7H3").innerHTML = "";
    document.getElementById("primaryAtt7").innerHTML = "";

    // Reset Primary Attachment 8
    document.getElementById("primaryAtt8H3").innerHTML = "";
    document.getElementById("primaryAtt8").innerHTML = "";


    // Reset Secondary
    document.getElementById("secondaryH3").innerHTML = "";
    document.getElementById("secondary").innerHTML = "";

    // Reset secondary Attachment 1
    document.getElementById("secondaryAtt1H3").innerHTML = "";
    document.getElementById("secondaryAtt1").innerHTML = "";

    // Reset secondary Attachment 2
    document.getElementById("secondaryAtt2H3").innerHTML = "";
    document.getElementById("secondaryAtt2").innerHTML = "";

    // Reset secondary Attachment 3
    document.getElementById("secondaryAtt3H3").innerHTML = "";
    document.getElementById("secondaryAtt3").innerHTML = "";

    // Reset secondary Attachment 4
    document.getElementById("secondaryAtt4H3").innerHTML = "";
    document.getElementById("secondaryAtt4").innerHTML = "";

    // Reset secondary Attachment 5
    document.getElementById("secondaryAtt5H3").innerHTML = "";
    document.getElementById("secondaryAtt5").innerHTML = "";

    // Reset secondary Attachment 6
    document.getElementById("secondaryAtt6H3").innerHTML = "";
    document.getElementById("secondaryAtt6").innerHTML = "";

    // Reset ssecondaryAttachment 7
    document.getElementById("secondaryAtt7H3").innerHTML = "";
    document.getElementById("secondaryAtt7").innerHTML = "";

    // Reset secondary Attachment 8
    document.getElementById("secondaryAtt8H3").innerHTML = "";
    document.getElementById("secondaryAtt8").innerHTML = "";


    // Reset Tactical
    document.getElementById("tacticalH3").innerHTML = "";
    document.getElementById("tactical").innerHTML = "";

    // Reset Lethal
    document.getElementById("lethalH3").innerHTML = "";
    document.getElementById("lethal").innerHTML = "";

    // Reset Field Upgrade
    document.getElementById("fieldUpgradeH3").innerHTML = "";
    document.getElementById("fieldUpgrade").innerHTML = "";

    // Reset Perk 1
    document.getElementById("perk1H3").innerHTML = "";
    document.getElementById("perk1").innerHTML = "";

    // Reset Perk 2
    document.getElementById("perk2H3").innerHTML = "";
    document.getElementById("perk2").innerHTML = "";

    // Reset Perk 3
    document.getElementById("perk3H3").innerHTML = "";
    document.getElementById("perk3").innerHTML = "";


     // Reset Perk 1 PG
     document.getElementById("perk1PGH3").innerHTML = "";
     document.getElementById("perk1PG").innerHTML = "";
 
     // Reset Perk 2 PG
     document.getElementById("perkPG2H3").innerHTML = "";
     document.getElementById("perk2PG").innerHTML = "";
 
     // Reset Perk 3 PG
     document.getElementById("perk3PGH3").innerHTML = "";
     document.getElementById("perk3PG").innerHTML = "";
 
     var element = document.getElementById("classContent");
     element.classList.add("classContent");

    // Reset Wildcard
    document.getElementById("wildcardH3").innerHTML = "";
    document.getElementById("wildcard").innerHTML = "";

    var element = document.getElementById("classContent");
    element.classList.add("classContent");



    // Random Primary Logic

    var randomPrimary = primarysArray[Math.floor(Math.random() * primarysArray.length)];

    //Used for Testing
    // console.log("The Primary name is -----------------------------------------" + randomPrimary.name);
    // console.log("The Primary image is -----------------------------------------" + randomPrimary.image);

    document.getElementById("primary").innerHTML = randomPrimary.name + '<br>' + '<img style="width:200px;"  src="' + randomPrimary.image + ' " alt="' + randomPrimary.name + '">';
    document.getElementById("primaryH3").innerHTML = "Primary";

    //Random Secondary Logic
    var randomSecondary = secondarysArray[Math.floor(Math.random() * secondarysArray.length)];

    //Used for Testing
    // console.log("The Secondary name is -----------------------------------------" + randomSecondary.name);
    // console.log("The Secondary image is -----------------------------------------" + randomSecondary.image);

    document.getElementById("secondary").innerHTML = randomSecondary.name + '<br>' + '<img  style="width:200px;"  src="' + randomSecondary.image + ' " alt="' + randomSecondary.name + '">';
    document.getElementById("secondaryH3").innerHTML = "Secondary";

    // Random Perk 1 Logic
    var randomPerk1 = perk1Array[Math.floor(Math.random() * perk1Array.length)];
    document.getElementById("perk1").innerHTML = randomPerk1.name + '<br>' + '<img style="width:200px;" src="' + randomPerk1.image + ' " alt="' + randomPerk1.name + '">';
    document.getElementById("perk1H3").innerHTML = "Perk 1";

    // Random Perk 2 Logic
    var randomPerk2 = perk2Array[Math.floor(Math.random() * perk2Array.length)];
    document.getElementById("perk2").innerHTML = randomPerk2.name + '<br>' + '<img style="width:200px;" src="' + randomPerk2.image + ' " alt="' + randomPerk2.name + '">';
    document.getElementById("perk2H3").innerHTML = "Perk 2";

    // Random Perk 3 Logic

    var randomPerk3 = perk3Array[Math.floor(Math.random() * perk3Array.length)];
    document.getElementById("perk3H3").innerHTML = "Perk 3";
    document.getElementById("perk3").innerHTML = randomPerk3.name + '<br>' + '<img style="width:200px;" src="' + randomPerk3.image + ' " alt="' + randomPerk3.name + '">';

    //Random Lethal Logic
    var randomLethal = lethalsArray[Math.floor(Math.random() * lethalsArray.length)];
    document.getElementById("lethal").innerHTML = randomLethal.name + '<br>' + '<img style="width:200px;" src="' + randomLethal.image + ' " alt="' + randomLethal.name + '">';
    document.getElementById("lethalH3").innerHTML = "Lethal";

    // Random Tactical Logic
    var randomTactical = tacticalsArray[Math.floor(Math.random() * tacticalsArray.length)];
    document.getElementById("tactical").innerHTML = randomTactical.name + '<br>' + '<img style="width:200px;" src="' + randomTactical.image + ' " alt="' + randomTactical.name + '">';
    document.getElementById("tacticalH3").innerHTML = "Tactical";

    //Random Field Upgrade Logic
    var randomUpgrade = fieldUpgradesArray[Math.floor(Math.random() * fieldUpgradesArray.length)];
    document.getElementById("fieldUpgrade").innerHTML = randomUpgrade.name + '<br>' + '<img style="width:200px;" src="' + randomUpgrade.image + ' " alt="' + randomUpgrade.name + '">';
    document.getElementById("fieldUpgradeH3").innerHTML = "Field Upgrade";

    //Random Wildcard Logic
    var randomWildcard = wildcardsArray[Math.floor(Math.random() * wildcardsArray.length)];
    document.getElementById("wildcard").innerHTML = randomWildcard.name + '<br>' + '<img style="width:200px;" src="' + randomWildcard.image + ' " alt="' + randomWildcard.name + '">';
    document.getElementById("wildcardH3").innerHTML = "Wildcard";


    //Perk Greed Functions
    function perk1PG() {
        var randomPerk1PG = perk1Array[Math.floor(Math.random() * perk1Array.length)];
        document.getElementById("perk1PG").innerHTML = randomPerk1PG.name + '<br>' + '<img style="width:200px;" src="' + randomPerk1PG.image + ' " alt="' + randomPerk1PG.name + '">';
        if (randomPerk1.name === randomPerk1PG.name) {
            perk1PG();
        }
    }

    function perk2PG() {
        var randomPerk2PG = perk2Array[Math.floor(Math.random() * perk2Array.length)];
        document.getElementById("perk2PG").innerHTML = randomPerk2PG.name + '<br>' + '<img style="width:200px;" src="' + randomPerk2PG.image + ' " alt="' + randomPerk2PG.name + '">';
        if (randomPerk2.name === randomPerk2PG.name) {
            perk2PG();
        }
    }

    function perk3PG() {
        var randomPerk3PG = perk3Array[Math.floor(Math.random() * perk3Array.length)];
        document.getElementById("perk3PG").innerHTML = randomPerk3PG.name + '<br>' + '<img style="width:200px;" src="' + randomPerk3PG.image + ' " alt="' + randomPerk3PG.name + '">';
        if (randomPerk3.name === randomPerk3PG.name) {
            perk3PG();
        }
    }

    if (randomWildcard.name === "Perk Greed") {
        perk1PG();
        perk2PG();
        perk3PG();
    }
    // END Perk Greed Functions

    //Law Breaker Function
    if (randomWildcard.name =="Law Breaker")
    {
        lawbreaker();
    }

    //Call to Weapon Functions
    //Primaries
    switch (randomPrimary.name) {
        // Assult Rifles
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
    switch (randomSecondary.name) {
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

    //If Gunfighter is equipped
    if (randomWildcard.name === "Gunfighter") {
        switch (randomPrimary.name) {
            // Assult Rifles
            case "XM4":
                xm4w();
                break;
            case "AK-47":
                ak47w();
                break;
            case "Krig 6":
                krig6w();
                break;
            case "QBZ-83":
                qbz83w();
                break;
            case "FFAR 1":
                ffar1w();
                break;
            case "Groza":
                grozaw();
                break;

                // Submachine Guns
            case "MP5":
                mp5w();
                break;
            case "Milano 821":
                milano821w();
                break;
            case "AK-74u":
                ak74uw();
                break;
            case "KSP 45":
                ksp45w();
                break;
            case "Bullfrog":
                bullfrogw();
                break;
            case "MAC-10":
                mac10w();
                break;

                //Tacitcal Rifles
            case "Type 63":
                type63w();
                break;
            case "M16":
                m16w();
                break;
            case "AUG":
                augw();
                break;
            case "DMR 14":
                dmr14w();
                break;

                //Light Machine Guns
            case "Stoner 63":
                stoner63w();
                break;
            case "RPD":
                rpdw();
                break;
            case "M60":
                m60w();
                break;

                //Sniper Rifles
            case "Pelington 703":
                pelington703w();
                break;
            case "LW3 - Tundra":
                lw3tundraw();
                break;
            case "M82":
                m82w();
                break;
        }
    }







};