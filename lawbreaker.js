//Random Item Function - Ran when user clicks generate class button.
function lawbreaker() {
    // console.log("button pressed");

    // Reset all Elements (Used for if user spamms generate button)

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




    // Reset Perk 1
    document.getElementById("perk1H3").innerHTML = "";
    document.getElementById("perk1").innerHTML = "";

    // Reset Perk 2
    document.getElementById("perk2H3").innerHTML = "";
    document.getElementById("perk2").innerHTML = "";

    // Reset Perk 3
    document.getElementById("perk3H3").innerHTML = "";
    document.getElementById("perk3").innerHTML = "";

    var element = document.getElementById("classContent");
    element.classList.add("classContent");



    // Random Primary Logic

    var randomPrimary = primarysArrayLB[Math.floor(Math.random() * primarysArrayLB.length)];

    //Used for Testing
    // console.log("The Primary name is -----------------------------------------" + randomPrimary.name);
    // console.log("The Primary image is -----------------------------------------" + randomPrimary.image);

    document.getElementById("primary").innerHTML = randomPrimary.name + '<br>' + '<img style="width:200px;"  src="' + randomPrimary.image + ' " alt="' + randomPrimary.name + '">';
    document.getElementById("primaryH3").innerHTML = "Primary";

    //Random Secondary Logic
    var randomSecondary = secondarysArrayLB[Math.floor(Math.random() * secondarysArrayLB.length)];

    //Used for Testing
    // console.log("The Secondary name is -----------------------------------------" + randomSecondary.name);
    // console.log("The Secondary image is -----------------------------------------" + randomSecondary.image);

    document.getElementById("secondary").innerHTML = randomSecondary.name + '<br>' + '<img  style="width:200px;"  src="' + randomSecondary.image + ' " alt="' + randomSecondary.name + '">';
    document.getElementById("secondaryH3").innerHTML = "Secondary";

    // Random Perk 1 Logic
    var randomPerk1 = perk1ArrayLB[Math.floor(Math.random() * perk1ArrayLB.length)];
    document.getElementById("perk1").innerHTML = randomPerk1.name + '<br>' + '<img style="width:200px;" src="' + randomPerk1.image + ' " alt="' + randomPerk1.name + '">';
    document.getElementById("perk1H3").innerHTML = "Perk 1";

    // Random Perk 2 Logic
    var randomPerk2 = perk2ArrayLB[Math.floor(Math.random() * perk2ArrayLB.length)];
    document.getElementById("perk2").innerHTML = randomPerk2.name + '<br>' + '<img style="width:200px;" src="' + randomPerk2.image + ' " alt="' + randomPerk2.name + '">';
    document.getElementById("perk2H3").innerHTML = "Perk 2";

    // Random Perk 3 Logic

    var randomPerk3 = perk3ArrayLB[Math.floor(Math.random() * perk3ArrayLB.length)];
    document.getElementById("perk3H3").innerHTML = "Perk 3";
    document.getElementById("perk3").innerHTML = randomPerk3.name + '<br>' + '<img style="width:200px;" src="' + randomPerk3.image + ' " alt="' + randomPerk3.name + '">';


    // END Perk Greed Functions

    //Call to Weapon Functions

    switch (randomPrimary.name) {
        // Assult Rifles
        case "XM4":
            xm4LB();
            break;
        case "AK-47":
            ak47LB();
            break;
        case "Krig 6":
            krig6LB();
            break;
        case "QBZ-83":
            qbz83LB();
            break;
        case "FFAR 1":
            ffar1LB();
            break;
        case "Groza":
            grozaLB();
            break;

            // Submachine Guns
        case "MP5":
            mp5LB();
            break;
        case "Milano 821":
            milano821LB();
            break;
        case "AK-74u":
            ak74uLB();
            break;
        case "KSP 45":
            ksp45LB();
            break;
        case "Bullfrog":
            bullfrogLB();
            break;
        case "MAC-10":
            mac10LB();
            break;

            //Tacitcal Rifles
        case "Type 63":
            type63LB();
            break;
        case "M16":
            m16LB();
            break;
        case "AUG":
            augLB();
            break;
        case "DMR 14":
            dmr14LB();
            break;

            //Light Machine Guns
        case "Stoner 63":
            stoner63LB();
            break;
        case "RPD":
            rpdLB();
            break;
        case "M60":
            m60LB();
            break;

            //Sniper Rifles
        case "Pelington 703":
            pelington703LB();
            break;
        case "LW3 - Tundra":
            lw3tundraLB();
            break;
        case "M82":
            m82LB();
            break;

            //Shotguns
        case "Hauer 77":
            hauer77LBP();
            break;
        case "Gallo SA12":
            gallosa12LBP();
            break;
        case "Streetsweeper":
            streetsweeperLBP();
            break;
            A
            //Pistols
        case "1911":
            p1911LBP();
            break;
        case "Magnum":
            magnumLBP();
            break;
        case "Diamatti":
            diamattiLBP();
            break;

            //Launchers
        case "Cigma 2":
            cigma2LBP();
            break;
        case "RPG-7":
            rpg7LBP();
            break;

            //Mele
        case "Knife":
            knifeLBP();
            break;
        case "Sledgehammer":
            sledgehammerLBP();
            break;
        case "Wakizashi":
            wakizashiLBP();
            break;
        case "M79":
            m79LBP();
            break;
    }

    switch (randomSecondary.name) {
        //Shotguns
        case "Hauer 77":
            hauer77LB();
            break;
        case "Gallo SA12":
            gallosa12LB();
            break;
        case "Streetsweeper":
            streetsweeperLB();
            break;

            //Pistols
        case "1911":
            p1911LB();
            break;
        case "Magnum":
            magnumLB();
            break;
        case "Diamatti":
            diamattiLB();
            break;

            //Launchers
        case "Cigma 2":
            cigma2LB();
            break;
        case "RPG-7":
            rpg7LB();
            break;

            //Mele
        case "Knife":
            knifeLB();
            break;
        case "Sledgehammer":
            sledgehammerLB();
            break;
        case "Wakizashi":
            wakizashiLB();
            break;
        case "M79":
            m79LB();
            break;

        case "XM4":
            xm4LBS();
            break;
        case "AK-47":
            ak47LBS();
            break;
        case "Krig 6":
            krig6LBS();
            break;
        case "QBZ-83":
            qbz83LBS();
            break;
        case "FFAR 1":
            ffar1LBS();
            break;
        case "Groza":
            grozaLBS();
            break;

            // Submachine Guns
        case "MP5":
            mp5LBS();
            break;
        case "Milano 821":
            milano821LBS();
            break;
        case "AK-74u":
            ak74uLBS();
            break;
        case "KSP 45":
            ksp45LBS();
            break;
        case "Bullfrog":
            bullfrogLBS();
            break;
        case "MAC-10":
            mac10LBS();
            break;

            //Tacitcal Rifles
        case "Type 63":
            type63LBS();
            break;
        case "M16":
            m16LBS();
            break;
        case "AUG":
            augLBS();
            break;
        case "DMR 14":
            dmr14LBS();
            break;

            //Light Machine Guns
        case "Stoner 63":
            stoner63LBS();
            break;
        case "RPD":
            rpdLBS();
            break;
        case "M60":
            m60LBS();
            break;

            //Sniper Rifles
        case "Pelington 703":
            pelington703LBS();
            break;
        case "LW3 - Tundra":
            lw3tundraLBS();
            break;
        case "M82":
            m82LBS();
            break;

    }




    if ((randomPrimary.name === randomSecondary.name) || (randomPerk1.name === randomPerk2.name) || (randomPerk1.name === randomPerk3.name)) {
        lawbreaker();
    }

};