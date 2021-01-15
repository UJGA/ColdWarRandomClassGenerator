//Hauer 77

function hauer77() {
    var numAttachments = [0, 1, 2, 3, 5, 6, 7];
    var totalCount = 5;
    var ran = Math.floor(Math.random() * 5) + 0;
    var attArr = [];
    for (var i = 0; i <= ran; i++) {
        var rand = numAttachments[Math.floor(Math.random() * totalCount)];
        attArr.push(rand);
        numAttachments.splice(rand, 1);
        totalCount--;
    }


    //Optics

    var optics = [
        {
            name: 'Millstop Reflex',
            image: '/attachments/optics/millstopreflex.png'
        },
        {
            name: 'Quickdot LED',
            image: '/attachments/optics/quickdotled.png'
        },
        {
            name: 'Microflex LED',
            image: '/attachments/optics/microflexLED.png'
        },
    ];


    var optic = false;
    // //document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt1").innerHTML = "";

    if (attArr.includes(0)) {
        optic = true;
    }

    if (optic != false) {
       
        var ranOptic = Math.floor(Math.random() * optics.length) + 0;

        var opticPick = optics[ranOptic];

        // //document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt1").innerHTML = '<b>' + "Optic -  " + '</b>' + opticPick.name + '<br>' + '<img  style="width:200px;"  alt="' + opticPick.name +'" src="' + opticPick.image + '">';
    }

     if(optic != true){
        document.getElementById("secondaryAtt1").innerHTML = '<b>' + "Optic -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }

    //Muzzle

    var muzzles = [
        {
            name: 'Duckbill Choke', 
            image: '/attachments/muzzles/duckbillchoke.png'
        },
        {
            name: 'Flash Cone 12 Ga',
            image: '/attachments/muzzles/flashcone12ga.png'
        },
        {
            name: 'Sound Suppressor',
            image: '/attachments/muzzles/soundsuppressor.png'
        },
        {
            name: 'Infantry V-Choke',
            image: '/attachments/muzzles/infantryvchoke.png'
        },
        {
            name: 'SOCOM Blast Mitigator',
            image: '/attachments/muzzles/socomblastmitigator.png'
        },
        {
            name: 'Agency Choke',
            image: '/attachments/muzzles/agencychoke.png'
        },
    ];


    var muzzle = false;
    // //document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt2").innerHTML = "";

    if (attArr.includes(1)) {
        muzzle = true;
    }

    if (muzzle != false) {

        var ranMuzzle = Math.floor(Math.random() * muzzles.length) + 0;

        var muzzlePick = muzzles[ranMuzzle];

        //document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt2").innerHTML = '<b>' + "Muzzle -  " + '</b>' + muzzlePick.name + '<br>' + '<img  style="width:200px;"  alt="' + muzzlePick.name +'" src="' + muzzlePick.image + '">';
    }

     if(muzzle != true) {
        document.getElementById("secondaryAtt2").innerHTML = '<b>' + "Muzzle -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }


    //Barrels

    var barrels = [
        {
            name: '22 Extended', 
            image: '/attachments/barrels/22extended.png'
        },
        {
            name: '20.4 Cavalry Lancer', 
            image: '/attachments/barrels/204cavalrylancer.png'
        },
        {
            name: '21.6 Reinforced Heavy', 
            image: '/attachments/barrels/216reinforcedheavy.png'
        },
        {
            name: '24.1 Ranger', 
            image: '/attachments/barrels/241ranger.png'
        },
        {
            name: '19.3 Hammered Forged', 
            image: '/attachments/barrels/193hammeredforged.png'
        },
        {
            name: '25.2 Task Force', 
            image: '/attachments/barrels/252taskforce.png'
        },
    ];


    var barrel = false;
    // //document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt3").innerHTML = "";

    if (attArr.includes(2)) {
        barrel = true;

    }

    if (barrel != false) {

        var ranBarrel = Math.floor(Math.random() * barrels.length) + 0;

        var barrelPick = barrels[ranBarrel];
        // //document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt3").innerHTML = '<b>' + "Barrel -  " + '</b>' + barrelPick.name + '<br>' + '<img  style="width:200px;" alt="'+ barrelPick.name + '"  src="' + barrelPick.image + '">';
    }

     if (barrel != true){
        document.getElementById("secondaryAtt3").innerHTML = '<b>' + "Barrel -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }


    //Body

    var bodys = [
        {
            name: 'Steady Aim Laser',
            image: '/attachments/bodys/steadyaimlaser.png'
        },
        {
            name: 'Mounted Flashlight',
            image: '/attachments/bodys/mountedflashlight.png'
        },
        {
            name: 'SOF Target Designator',
            image: '/attachments/bodys/softargetdesignator.png'
        },
        {
            name: 'SWAT 5mw Laser Sight',
            image: '/attachments/bodys/swat5mwlasersight.png'
        },
        {
            name: 'Tiger Team Spotlight',
            image: '/attachments/bodys/tigerteamspotlight.png'
        },
        {
            name: 'Ember Sighting Point',
            image: '/attachments/bodys/embersightingpoint.png'
        },
    ];


    var body = false;
    // //document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt4").innerHTML = "";

    if (attArr.includes(3)) {
        body = true;
        
    }

    if (body != false) {
        var ranBody = Math.floor(Math.random() * bodys.length) + 0;
        
        

        var bodyPick = bodys[ranBody];

        // //document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt4").innerHTML = '<b>' + "Body -  " + '</b>' + bodyPick.name + '<br>' + '<img  style="width:200px;" alt="'+ bodyPick.name + '" src="' + bodyPick.image + '">';
    }


     if (body != true) {
        document.getElementById("secondaryAtt4").innerHTML = '<b>' + "Body -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }

    //Magazine

    var magazines = [
        {
            name: '6 Rnd Tube',
            image: '/attachments/magazines/6rndtube.png'
        },
        {
            name: 'STANAG 8 Rnd Tube',
            image: '/attachments/magazines/stanag8rndtube.png'
        },
    ];


    var magazine = false;
    // //document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt6").innerHTML = "";

    if (attArr.includes(5)) {
        magazine = true;

    }

    if (magazine != false) {
        var ranMagazine = Math.floor(Math.random() * magazines.length) + 0;


        var magazinePick = magazines[ranMagazine];

        //document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt6").innerHTML = '<b>' + "Magazine -  " + '</b>' + magazinePick.name + '<br>' + '<img  style="width:200px;" alt="'+magazinePick.name + '"  src="' + magazinePick.image + '">';
    }

     if (magazine != true){
        document.getElementById("secondaryAtt6").innerHTML = '<b>' + "Magazine -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }





    //Handle

    var handles = [
        {
            name: 'Speed Tape',
            image: '/attachments/handles/speedtape.png'
        },
        {
            name: 'Dropshot Wrap',
            image: '/attachments/handles/dropshotwrap.png'
        },
        {
            name: 'Field Tape',
            image: '/attachments/handles/fieldtape.png'
        },
        {
            name: 'SARS Jungle Grip',
            image: '/attachments/handles/sarsjunglegrip.png'
        },
        {
            name: 'Serpent Wrap',
            image: '/attachments/handles/serpentwrap.png'
        },
        {
            name: 'Airborne Elastic Wrap',
            image: '/attachments/handles/airbornelasticwrap.png'
        },
    ];


    var handle = false;
    //document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt7").innerHTML = "";

    if (attArr.includes(6)) {
        handle = true;

    }

    if (handle != false) {
        var ranHandle = Math.floor(Math.random() * handles.length) + 0;
        

        var handlePick = handles[ranHandle];

        //document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt7").innerHTML = '<b>' + "Handle -  " + '</b>' + handlePick.name + '<br>' + '<img  style="width:200px;" alt="'+ handlePick.name +'" src="' + handlePick.image + '">';
    }

     if (handle != true){
        document.getElementById("secondaryAtt7").innerHTML = '<b>' + "Handle -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }


    //Stock

    var stocks = [
        {
            name: 'Tactical Stock',
            image: '/attachments/stocks/tacticalstock.png'
        },
        {
            name: 'Shotgun Stock', 
            image: '/attachments/stocks/shotgunstock.png'
        },
        {
            name: 'Duster Stock',
            image: '/attachments/stocks/dusterstock.png'
        },
        {
            name: 'No Stock',
            image: '/attachments/stocks/nostock.png'
        },
        {
            name: 'SAS Combat Stock',
            image: '/attachments/stocks/sascombatstock.png'
        },
        {
            name: 'Marathon Stock',
            image: '/attachments/stocks/marathonstock.png'
        },
    ];


    var stock = false;
    //document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt8").innerHTML = "";

    if (attArr.includes(7)) {
        stock = true;

    }

    if (stock != false) {
        var ranStock = Math.floor(Math.random() * stocks.length) + 0;
        

        var stockPick = stocks[ranStock];

        //document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt8").innerHTML = '<b>' + "Stock -  " + '</b>' + stockPick.name + '<br>' + '<img  style="width:200px;" alt="'+stockPick.name + '" src="' + stockPick.image + '">';
    }

    if (stock != true){
        document.getElementById("secondaryAtt8").innerHTML = '<b>' + "Stock -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }

}



//Gallo SA12
function gallosa12() {
    var numAttachments = [0, 1, 2, 3, 5, 6, 7];
    var totalCount = 5;
    var ran = Math.floor(Math.random() * 5) + 0;
    var attArr = [];
    for (var i = 0; i <= ran; i++) {
        var rand = numAttachments[Math.floor(Math.random() * totalCount)];
        attArr.push(rand);
        numAttachments.splice(rand, 1);
        totalCount--;
    }


    //Optics

    var optics = [
        {
            name: 'Millstop Reflex',
            image: '/attachments/optics/millstopreflex.png'
        },
        {
            name: 'Quickdot LED',
            image: '/attachments/optics/quickdotled.png'
        },
        {
            name: 'Microflex LED',
            image: '/attachments/optics/microflexLED.png'
        },
    ];


    var optic = false;
    // //document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt1").innerHTML = "";

    if (attArr.includes(0)) {
        optic = true;
    }

    if (optic != false) {
       
        var ranOptic = Math.floor(Math.random() * optics.length) + 0;

        var opticPick = optics[ranOptic];

        // //document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt1").innerHTML = '<b>' + "Optic -  " + '</b>' + opticPick.name + '<br>' + '<img  style="width:200px;"  alt="' + opticPick.name +'" src="' + opticPick.image + '">';
    }

     if(optic != true){
        document.getElementById("secondaryAtt1").innerHTML = '<b>' + "Optic -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }

    //Muzzle

    var muzzles = [
        {
            name: 'Duckbill Choke', 
            image: '/attachments/muzzles/duckbillchoke.png'
        },
        {
            name: 'Flash Cone 12 Ga',
            image: '/attachments/muzzles/flashcone12ga.png'
        },
        {
            name: 'Sound Suppressor',
            image: '/attachments/muzzles/soundsuppressor.png'
        },
        {
            name: 'Infantry V-Choke',
            image: '/attachments/muzzles/infantryvchoke.png'
        },
        {
            name: 'SOCOM Blast Mitigator',
            image: '/attachments/muzzles/socomblastmitigator.png'
        },
        {
            name: 'Agency Choke',
            image: '/attachments/muzzles/agencychoke.png'
        },
    ];


    var muzzle = false;
    // //document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt2").innerHTML = "";

    if (attArr.includes(1)) {
        muzzle = true;
    }

    if (muzzle != false) {

        var ranMuzzle = Math.floor(Math.random() * muzzles.length) + 0;

        var muzzlePick = muzzles[ranMuzzle];

        //document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt2").innerHTML = '<b>' + "Muzzle -  " + '</b>' + muzzlePick.name + '<br>' + '<img  style="width:200px;"  alt="' + muzzlePick.name +'" src="' + muzzlePick.image + '">';
    }

     if(muzzle != true) {
        document.getElementById("secondaryAtt2").innerHTML = '<b>' + "Muzzle -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }


    //Barrels

    var barrels = [
        {
            name: '22.7 Extended', 
            image: '/attachments/barrels/227extended.png'
        },
        {
            name: '23.5 Cavlary Lancer', 
            image: '/attachments/barrels/235cavalrylancer.png'
        },
        {
            name: '21.4 Reinforced Heavy', 
            image: '/attachments/barrels/214reinforcedheavy.png'
        },
        {
            name: '24.6 Ranger', 
            image: '/attachments/barrels/246ranger.png'
        },
        {
            name: '20.3 Hammered Forged', 
            image: '/attachments/barrels/203hammeredforged.png'
        },
        {
            name: '24.8 Task Force', 
            image: '/attachments/barrels/248taskforce.png'
        },
    ];


    var barrel = false;
    // //document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt3").innerHTML = "";

    if (attArr.includes(2)) {
        barrel = true;

    }

    if (barrel != false) {

        var ranBarrel = Math.floor(Math.random() * barrels.length) + 0;

        var barrelPick = barrels[ranBarrel];
        // //document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt3").innerHTML = '<b>' + "Barrel -  " + '</b>' + barrelPick.name + '<br>' + '<img  style="width:200px;" alt="'+ barrelPick.name + '"  src="' + barrelPick.image + '">';
    }

     if (barrel != true){
        document.getElementById("secondaryAtt3").innerHTML = '<b>' + "Barrel -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }


    //Body

    var bodys = [
        {
            name: 'Steady Aim Laser',
            image: '/attachments/bodys/steadyaimlaser.png'
        },
        {
            name: 'Mounted Flashlight',
            image: '/attachments/bodys/mountedflashlight.png'
        },
        {
            name: 'SOF Target Designator',
            image: '/attachments/bodys/softargetdesignator.png'
        },
        {
            name: 'SWAT 5mw Laser Sight',
            image: '/attachments/bodys/swat5mwlasersight.png'
        },
        {
            name: 'Tiger Team Spotlight',
            image: '/attachments/bodys/tigerteamspotlight.png'
        },
        {
            name: 'Ember Sighting Point',
            image: '/attachments/bodys/embersightingpoint.png'
        },
    ];


    var body = false;
    // //document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt4").innerHTML = "";

    if (attArr.includes(3)) {
        body = true;
        
    }

    if (body != false) {
        var ranBody = Math.floor(Math.random() * bodys.length) + 0;
        
        

        var bodyPick = bodys[ranBody];

        // //document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt4").innerHTML = '<b>' + "Body -  " + '</b>' + bodyPick.name + '<br>' + '<img  style="width:200px;" alt="'+ bodyPick.name + '" src="' + bodyPick.image + '">';
    }


     if (body != true) {
        document.getElementById("secondaryAtt4").innerHTML = '<b>' + "Body -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }

    //Magazine

    var magazines = [
        {
            name: '9 Rnd Tube', 
            image: '/attachments/magazines/6rndtube.png'
        },
        {
            name: 'STANAG 12 Rnd Tube', 
            image: '/attachments/magazines/stanag8rndtube.png'
        },
    ];


    var magazine = false;
    // //document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt6").innerHTML = "";

    if (attArr.includes(5)) {
        magazine = true;

    }

    if (magazine != false) {
        var ranMagazine = Math.floor(Math.random() * magazines.length) + 0;


        var magazinePick = magazines[ranMagazine];

        //document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt6").innerHTML = '<b>' + "Magazine -  " + '</b>' + magazinePick.name + '<br>' + '<img  style="width:200px;" alt="'+magazinePick.name + '"  src="' + magazinePick.image + '">';
    }

     if (magazine != true){
        document.getElementById("secondaryAtt6").innerHTML = '<b>' + "Magazine -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }





    //Handle

    var handles = [
        {
            name: 'Speed Tape',
            image: '/attachments/handles/speedtape.png'
        },
        {
            name: 'Dropshot Wrap',
            image: '/attachments/handles/dropshotwrap.png'
        },
        {
            name: 'Field Tape',
            image: '/attachments/handles/fieldtape.png'
        },
        {
            name: 'SARS Jungle Grip',
            image: '/attachments/handles/sarsjunglegrip.png'
        },
        {
            name: 'Serpent Wrap',
            image: '/attachments/handles/serpentwrap.png'
        },
        {
            name: 'Airborne Elastic Wrap',
            image: '/attachments/handles/airbornelasticwrap.png'
        },
    ];


    var handle = false;
    //document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt7").innerHTML = "";

    if (attArr.includes(6)) {
        handle = true;

    }

    if (handle != false) {
        var ranHandle = Math.floor(Math.random() * handles.length) + 0;
        

        var handlePick = handles[ranHandle];

        //document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt7").innerHTML = '<b>' + "Handle -  " + '</b>' + handlePick.name + '<br>' + '<img  style="width:200px;" alt="'+ handlePick.name +'" src="' + handlePick.image + '">';
    }

     if (handle != true){
        document.getElementById("secondaryAtt7").innerHTML = '<b>' + "Handle -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }


    //Stock

    var stocks = [
        {
            name: 'Tactical Stock',
            image: '/attachments/stocks/tacticalstock.png'
        },
        {
            name: 'Wire Stock',
            image: '/attachments/stocks/wirestock.png'
        },
        {
            name: 'Duster Stock',
            image: '/attachments/stocks/dusterstock.png'
        },
        {
            name: 'No Stock',
            image: '/attachments/stocks/nostock.png'
        },
        {
            name: 'SAS Combat Stock',
            image: '/attachments/stocks/sascombatstock.png'
        },
        {
            name: 'Marathon Stock',
            image: '/attachments/stocks/marathonstock.png'
        },
    ];


    var stock = false;
    //document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt8").innerHTML = "";

    if (attArr.includes(7)) {
        stock = true;

    }

    if (stock != false) {
        var ranStock = Math.floor(Math.random() * stocks.length) + 0;
        

        var stockPick = stocks[ranStock];

        //document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt8").innerHTML = '<b>' + "Stock -  " + '</b>' + stockPick.name + '<br>' + '<img  style="width:200px;" alt="'+stockPick.name + '" src="' + stockPick.image + '">';
    }

    if (stock != true){
        document.getElementById("secondaryAtt8").innerHTML = '<b>' + "Stock -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }

}



//Streetsweeper
// function streetsweeper() {
//     var numAttachments = [0, 1, 2, 3, 5, 6, 7];
//     var totalCount = 5;
//     var ran = Math.floor(Math.random() * 5) + 0;
//     var attArr = [];
//     for (var i = 0; i <= ran; i++) {
//         var rand = numAttachments[Math.floor(Math.random() * totalCount)];
//         attArr.push(rand);
//         numAttachments.splice(rand, 1);
//         totalCount--;
//     }


//     //Optics

//     var optics = [
//         {
//             name: 'Millstop Reflex',
//             image: '/attachments/optics/millstopreflex.png'
//         },
//         {
//             name: 'Quickdot LED',
//             image: '/attachments/optics/quickdotled.png'
//         },
//         {
//             name: 'Microflex LED',
//             image: '/attachments/optics/microflexLED.png'
//         },
//     ];


//     var optic = false;
//     // //document.getElementById("secondaryAttH2").innerHTML = "";
//     document.getElementById("secondaryAtt1").innerHTML = "";

//     if (attArr.includes(0)) {
//         optic = true;
//     }

//     if (optic != false) {
       
//         var ranOptic = Math.floor(Math.random() * optics.length) + 0;

//         var opticPick = optics[ranOptic];

//         // //document.getElementById("secondaryAttH2").innerHTML = "";
//         document.getElementById("secondaryAtt1").innerHTML = '<b>' + "Optic -  " + '</b>' + opticPick.name + '<br>' + '<img  style="width:200px;"  alt="' + opticPick.name +'" src="' + opticPick.image + '">';
//     }

//      if(optic != true){
//         document.getElementById("secondaryAtt1").innerHTML = '<b>' + "Optic -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
//     }

//     //Muzzle

//     var muzzles = [
//         {
//             name: 'Duckbill Choke', 
//             image: '/attachments/muzzles/duckbillchoke.png'
//         },
//         {
//             name: 'Flash Cone 12 Ga',
//             image: '/attachments/muzzles/flashcone12ga.png'
//         },
//         {
//             name: 'Sound Suppressor',
//             image: '/attachments/muzzles/soundsuppressor.png'
//         },
//         {
//             name: 'Infantry V-Choke',
//             image: '/attachments/muzzles/infantryvchoke.png'
//         },
//         {
//             name: 'SOCOM Blast Mitigator',
//             image: '/attachments/muzzles/socomblastmitigator.png'
//         },
//         {
//             name: 'Agency Choke',
//             image: '/attachments/muzzles/agencychoke.png'
//         },
//     ];


//     var muzzle = false;
//     // //document.getElementById("secondaryAttH2").innerHTML = "";
//     document.getElementById("secondaryAtt2").innerHTML = "";

//     if (attArr.includes(1)) {
//         muzzle = true;
//     }

//     if (muzzle != false) {

//         var ranMuzzle = Math.floor(Math.random() * muzzles.length) + 0;

//         var muzzlePick = muzzles[ranMuzzle];

//         //document.getElementById("secondaryAttH2").innerHTML = "";
//         document.getElementById("secondaryAtt2").innerHTML = '<b>' + "Muzzle -  " + '</b>' + muzzlePick.name + '<br>' + '<img  style="width:200px;"  alt="' + muzzlePick.name +'" src="' + muzzlePick.image + '">';
//     }

//      if(muzzle != true) {
//         document.getElementById("secondaryAtt2").innerHTML = '<b>' + "Muzzle -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
//     }


//     //Barrels

//     var barrels = [
//         {
//             name: 'test1',
//             image: '/attachments/barrels/test.png'
//         },
//         {
//             name: 'test2',
//             image: '/attachments/barrels/test.png'
//         },
//         {
//             name: 'test3',
//             image: '/attachments/barrels/test.png'
//         },
//         {
//             name: 'test4',
//             image: '/attachments/barrels/test.png'
//         },
//         {
//             name: 'test5',
//             image: '/attachments/barrels/test.png'
//         },
//         {
//             name: 'test6',
//             image: '/attachments/barrels/test.png'
//         },
//         {
//             name: 'test7',
//             image: '/attachments/barrels/test.png'
//         }
//     ];


//     var barrel = false;
//     // //document.getElementById("secondaryAttH2").innerHTML = "";
//     document.getElementById("secondaryAtt3").innerHTML = "";

//     if (attArr.includes(2)) {
//         barrel = true;

//     }

//     if (barrel != false) {

//         var ranBarrel = Math.floor(Math.random() * barrels.length) + 0;

//         var barrelPick = barrels[ranBarrel];
//         // //document.getElementById("secondaryAttH2").innerHTML = "";
//         document.getElementById("secondaryAtt3").innerHTML = '<b>' + "Barrel -  " + '</b>' + barrelPick.name + '<br>' + '<img  style="width:200px;" alt="'+ barrelPick.name + '"  src="' + barrelPick.image + '">';
//     }

//      if (barrel != true){
//         document.getElementById("secondaryAtt3").innerHTML = '<b>' + "Barrel -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
//     }


//     //Body

//     var bodys = [
//         {
//             name: 'Steady Aim Laser',
//             image: '/attachments/bodys/steadyaimlaser.png'
//         },
//         {
//             name: 'Mounted Flashlight',
//             image: '/attachments/bodys/mountedflashlight.png'
//         },
//         {
//             name: 'SOF Target Designator',
//             image: '/attachments/bodys/softargetdesignator.png'
//         },
//         {
//             name: 'SWAT 5mw Laser Sight',
//             image: '/attachments/bodys/swat5mwlasersight.png'
//         },
//         {
//             name: 'Tiger Team Spotlight',
//             image: '/attachments/bodys/tigerteamspotlight.png'
//         },
//         {
//             name: 'Ember Sighting Point',
//             image: '/attachments/bodys/embersightingpoint.png'
//         },
//     ];


//     var body = false;
//     // //document.getElementById("secondaryAttH2").innerHTML = "";
//     document.getElementById("secondaryAtt4").innerHTML = "";

//     if (attArr.includes(3)) {
//         body = true;
        
//     }

//     if (body != false) {
//         var ranBody = Math.floor(Math.random() * bodys.length) + 0;
        
        

//         var bodyPick = bodys[ranBody];

//         // //document.getElementById("secondaryAttH2").innerHTML = "";
//         document.getElementById("secondaryAtt4").innerHTML = '<b>' + "Body -  " + '</b>' + bodyPick.name + '<br>' + '<img  style="width:200px;" alt="'+ bodyPick.name + '" src="' + bodyPick.image + '">';
//     }


//      if (body != true) {
//         document.getElementById("secondaryAtt4").innerHTML = '<b>' + "Body -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
//     }

//     //Magazine

//     var magazines = [
//         {
//             name: '6 Rnd Tube',
//             image: '/attachments/magazines/6rndtube.png'
//         },
//         {
//             name: 'STANAG 8 Rnd Tube',
//             image: '/attachments/magazines/stanag8rndtube.png'
//         },
//     ];


//     var magazine = false;
//     // //document.getElementById("secondaryAttH2").innerHTML = "";
//     document.getElementById("secondaryAtt6").innerHTML = "";

//     if (attArr.includes(5)) {
//         magazine = true;

//     }

//     if (magazine != false) {
//         var ranMagazine = Math.floor(Math.random() * magazines.length) + 0;


//         var magazinePick = magazines[ranMagazine];

//         //document.getElementById("secondaryAttH2").innerHTML = "";
//         document.getElementById("secondaryAtt6").innerHTML = '<b>' + "Magazine -  " + '</b>' + magazinePick.name + '<br>' + '<img  style="width:200px;" alt="'+magazinePick.name + '"  src="' + magazinePick.image + '">';
//     }

//      if (magazine != true){
//         document.getElementById("secondaryAtt6").innerHTML = '<b>' + "Magazine -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
//     }





//     //Handle

//     var handles = [
//         {
//             name: 'Speed Tape',
//             image: '/attachments/handles/speedtape.png'
//         },
//         {
//             name: 'Dropshot Wrap',
//             image: '/attachments/handles/dropshotwrap.png'
//         },
//         {
//             name: 'Field Tape',
//             image: '/attachments/handles/fieldtape.png'
//         },
//         {
//             name: 'SARS Jungle Grip',
//             image: '/attachments/handles/sarsjunglegrip.png'
//         },
//         {
//             name: 'Serpent Wrap',
//             image: '/attachments/handles/serpentwrap.png'
//         },
//         {
//             name: 'Airborne Elastic Wrap',
//             image: '/attachments/handles/airbornelasticwrap.png'
//         },
//     ];


//     var handle = false;
//     //document.getElementById("secondaryAttH2").innerHTML = "";
//     document.getElementById("secondaryAtt7").innerHTML = "";

//     if (attArr.includes(6)) {
//         handle = true;

//     }

//     if (handle != false) {
//         var ranHandle = Math.floor(Math.random() * handles.length) + 0;
        

//         var handlePick = handles[ranHandle];

//         //document.getElementById("secondaryAttH2").innerHTML = "";
//         document.getElementById("secondaryAtt7").innerHTML = '<b>' + "Handle -  " + '</b>' + handlePick.name + '<br>' + '<img  style="width:200px;" alt="'+ handlePick.name +'" src="' + handlePick.image + '">';
//     }

//      if (handle != true){
//         document.getElementById("secondaryAtt7").innerHTML = '<b>' + "Handle -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
//     }


//     //Stock

//     var stocks = [
//         {
//             name: 'Tactical Stock',
//             image: '/attachments/stocks/tacticalstock.png'
//         },
//         {
//             name: 'Shotgun Stock',
//             image: '/attachments/stocks/shotgunstock.png'
//         },
//         {
//             name: 'Duster Stock',
//             image: '/attachments/stocks/dusterstock.png'
//         },
//         {
//             name: 'No Stock',
//             image: '/attachments/stocks/nostock.png'
//         },
//         {
//             name: 'SAS Combat Stock',
//             image: '/attachments/stocks/sascombatstock.png'
//         },
//         {
//             name: 'Marathon Stock',
//             image: '/attachments/stocks/marathonstock.png'
//         },
//     ];


//     var stock = false;
//     //document.getElementById("secondaryAttH2").innerHTML = "";
//     document.getElementById("secondaryAtt8").innerHTML = "";

//     if (attArr.includes(7)) {
//         stock = true;

//     }

//     if (stock != false) {
//         var ranStock = Math.floor(Math.random() * stocks.length) + 0;
        

//         var stockPick = stocks[ranStock];

//         //document.getElementById("secondaryAttH2").innerHTML = "";
//         document.getElementById("secondaryAtt8").innerHTML = '<b>' + "Stock -  " + '</b>' + stockPick.name + '<br>' + '<img  style="width:200px;" alt="'+stockPick.name + '" src="' + stockPick.image + '">';
//     }

//     if (stock != true){
//         document.getElementById("secondaryAtt8").innerHTML = '<b>' + "Stock -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
//     }

// }


//1911
function p1911() {
    var numAttachments = [0, 1, 2, 3, 5, 6, 7];
    var totalCount = 5;
    var ran = Math.floor(Math.random() * 5) + 0;
    var attArr = [];
    for (var i = 0; i <= ran; i++) {
        var rand = numAttachments[Math.floor(Math.random() * totalCount)];
        attArr.push(rand);
        numAttachments.splice(rand, 1);
        totalCount--;
    }


    //Optics

    var optics = [

        {
            name: 'Quickdot LED',
            image: '/attachments/optics/quickdotled.png'
        },
        {
            name: 'Otero Mini Reflex', 
            image: '/attachments/optics/axialarms3x.png'
        },
        {
            name: 'Microflex LED',
            image: '/attachments/optics/microflexLED.png'
        },
    ];


    var optic = false;
    // //document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt1").innerHTML = "";

    if (attArr.includes(0)) {
        optic = true;
    }

    if (optic != false) {
       
        var ranOptic = Math.floor(Math.random() * optics.length) + 0;

        var opticPick = optics[ranOptic];

        // //document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt1").innerHTML = '<b>' + "Optic -  " + '</b>' + opticPick.name + '<br>' + '<img  style="width:200px;"  alt="' + opticPick.name +'" src="' + opticPick.image + '">';
    }

     if(optic != true){
        document.getElementById("secondaryAtt1").innerHTML = '<b>' + "Optic -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }

    //Muzzle

    var muzzles = [
        {
            name: 'Muzzle Brake .45 APC', 
            image: '/attachments/muzzles/muzzlebrake45apc.png'
        },
        {
            name: 'Flashguard .45 APC', 
            image: '/attachments/muzzles/flashguard45apc.png'
        },
        {
            name: 'Sound Suppressor',
            image: '/attachments/muzzles/soundsuppressor.png'
        },
        {
            name: 'Infantry Compensator',
            image: '/attachments/muzzles/infantrycompensator.png'
        },
        {
            name: 'SOCOM Eliminator',
            image: '/attachments/muzzles/socomeliminator.png'
        },
    ];


    var muzzle = false;
    // //document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt2").innerHTML = "";

    if (attArr.includes(1)) {
        muzzle = true;
    }

    if (muzzle != false) {

        var ranMuzzle = Math.floor(Math.random() * muzzles.length) + 0;

        var muzzlePick = muzzles[ranMuzzle];

        //document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt2").innerHTML = '<b>' + "Muzzle -  " + '</b>' + muzzlePick.name + '<br>' + '<img  style="width:200px;"  alt="' + muzzlePick.name +'" src="' + muzzlePick.image + '">';
    }

     if(muzzle != true) {
        document.getElementById("secondaryAtt2").innerHTML = '<b>' + "Muzzle -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }


    //Barrels

    var barrels = [
        {
            name: '6.83 Extended',
            image: '/attachments/barrels/683extended.png'
        },
        {
            name: '5.42 Cavalry Lancer',
            image: '/attachments/barrels/542cavalrylancer.png'
        },
        {
            name: '6.45 Reinforced Heavy',
            image: '/attachments/barrels/645reinforcedheavy.png'
        },
        {
            name: '7.12 Chrome Lined',
            image: '/attachments/barrels/712chromelined.png'
        },
        {
            name: '5.63 Takedown',
            image: '/attachments/barrels/563takedown.png'
        },
        {
            name: '6.53 Task Force',
            image: '/attachments/barrels/653taskforce.png'
        },
    ];


    var barrel = false;
    // //document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt3").innerHTML = "";

    if (attArr.includes(2)) {
        barrel = true;

    }

    if (barrel != false) {

        var ranBarrel = Math.floor(Math.random() * barrels.length) + 0;

        var barrelPick = barrels[ranBarrel];
        // //document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt3").innerHTML = '<b>' + "Barrel -  " + '</b>' + barrelPick.name + '<br>' + '<img  style="width:200px;" alt="'+ barrelPick.name + '"  src="' + barrelPick.image + '">';
    }

     if (barrel != true){
        document.getElementById("secondaryAtt3").innerHTML = '<b>' + "Barrel -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }


    //Body

    var bodys = [
        {
            name: 'Steady Aim Laser',
            image: '/attachments/bodys/steadyaimlaser.png'
        },
        {
            name: 'Mounted Flashlight',
            image: '/attachments/bodys/mountedflashlight.png'
        },
        {
            name: 'SOF Target Designator',
            image: '/attachments/bodys/softargetdesignator.png'
        },
        {
            name: 'SWAT 5mw Laser Sight',
            image: '/attachments/bodys/swat5mwlasersight.png'
        },
        {
            name: 'Tiger Team Spotlight',
            image: '/attachments/bodys/tigerteamspotlight.png'
        },
        {
            name: 'Emvber Sighting Point',
            image: '/attachments/bodys/embersightingpoint.png'
        },
    ];


    var body = false;
    // //document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt4").innerHTML = "";

    if (attArr.includes(3)) {
        body = true;
        
    }

    if (body != false) {
        var ranBody = Math.floor(Math.random() * bodys.length) + 0;
        
        

        var bodyPick = bodys[ranBody];

        // //document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt4").innerHTML = '<b>' + "Body -  " + '</b>' + bodyPick.name + '<br>' + '<img  style="width:200px;" alt="'+ bodyPick.name + '" src="' + bodyPick.image + '">';
    }


     if (body != true) {
        document.getElementById("secondaryAtt4").innerHTML = '<b>' + "Body -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }


    //Magazine

    var magazines = [
        {
            name: '12 RND', 
            image: '/attachments/magazines/12rnd.png'
        },
        {
            name: 'Fast Mag',
            image: '/attachments/magazines/fastmag.png'
        },
        {
            name: '12 Rnd Speed Mag',
            image: '/attachments/magazines/12rndspeedmag.png'
        },
        {
            name: 'STANAG 14 Rnd',
            image: '/attachments/magazines/stanag14rnd.png'
        },
        {
            name: 'Vandal Speed Loader',
            image: '/attachments/magazines/vandalspeedloader.png'
        },
        {
            name: 'Salvo 14 Rnd Fast Mag',
            image: '/attachments/magazines/salvo14rndfastmag.png'
        },
    ];


    var magazine = false;
    // //document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt6").innerHTML = "";

    if (attArr.includes(5)) {
        magazine = true;

    }

    if (magazine != false) {
        var ranMagazine = Math.floor(Math.random() * magazines.length) + 0;


        var magazinePick = magazines[ranMagazine];

        //document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt6").innerHTML = '<b>' + "Magazine -  " + '</b>' + magazinePick.name + '<br>' + '<img  style="width:200px;" alt="'+magazinePick.name + '"  src="' + magazinePick.image + '">';
    }

     if (magazine != true){
        document.getElementById("secondaryAtt6").innerHTML = '<b>' + "Magazine -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }





    //Handle

    var handles = [
        {
            name: 'Speed Tape',
            image: '/attachments/handles/speedtape.png'
        },
        {
            name: 'Dropshot Wrap',
            image: '/attachments/handles/dropshotwrap.png'
        },
        {
            name: 'Field Tape',
            image: '/attachments/handles/fieldtape.png'
        },
        {
            name: 'SARS Jungle Grip',
            image: '/attachments/handles/sarsjunglegrip.png'
        },
        {
            name: 'Serpent Wrap',
            image: '/attachments/handles/serpentwrap.png'
        },
        {
            name: 'Airborne Elastic Wrap',
            image: '/attachments/handles/airbornelasticwrap.png'
        },
    ];


    var handle = false;
    //document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt7").innerHTML = "";

    if (attArr.includes(6)) {
        handle = true;

    }

    if (handle != false) {
        var ranHandle = Math.floor(Math.random() * handles.length) + 0;
        

        var handlePick = handles[ranHandle];

        //document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt7").innerHTML = '<b>' + "Handle -  " + '</b>' + handlePick.name + '<br>' + '<img  style="width:200px;" alt="'+ handlePick.name +'" src="' + handlePick.image + '">';
    }

     if (handle != true){
        document.getElementById("secondaryAtt7").innerHTML = '<b>' + "Handle -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }


    //Stock

    var stocks = [
        {
            name: 'Dual Wield',
            image: '/attachments/stocks/dualwield.png'
        },
    ];


    var stock = false;
    //document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt8").innerHTML = "";

    if (attArr.includes(7)) {
        stock = true;

    }

    if (stock != false) {
        var ranStock = Math.floor(Math.random() * stocks.length) + 0;
        

        var stockPick = stocks[ranStock];

        //document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt8").innerHTML = '<b>' + "Stock -  " + '</b>' + stockPick.name + '<br>' + '<img  style="width:200px;" alt="'+stockPick.name + '" src="' + stockPick.image + '">';
    }

    if (stock != true){
        document.getElementById("secondaryAtt8").innerHTML = '<b>' + "Stock -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }

}



//Magnum

function magnum() {
    var numAttachments = [0, 1, 2, 3, 5, 6, 7];
    var totalCount = 5;
    var ran = Math.floor(Math.random() * 5) + 0;
    var attArr = [];
    for (var i = 0; i <= ran; i++) {
        var rand = numAttachments[Math.floor(Math.random() * totalCount)];
        attArr.push(rand);
        numAttachments.splice(rand, 1);
        totalCount--;
    }


    //Optics

    var optics = [

        {
            name: 'Quickdot LED',
            image: '/attachments/optics/quickdotled.png'
        },
        {
            name: 'Otero Mini Reflex',
            image: '/attachments/optics/axialarms3x.png'
        },
        {
            name: 'Microflex LED',
            image: '/attachments/optics/microflexLED.png'
        },
    ];


    var optic = false;
    // //document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt1").innerHTML = "";

    if (attArr.includes(0)) {
        optic = true;
    }

    if (optic != false) {
       
        var ranOptic = Math.floor(Math.random() * optics.length) + 0;

        var opticPick = optics[ranOptic];

        // //document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt1").innerHTML = '<b>' + "Optic -  " + '</b>' + opticPick.name + '<br>' + '<img  style="width:200px;"  alt="' + opticPick.name +'" src="' + opticPick.image + '">';
    }

     if(optic != true){
        document.getElementById("secondaryAtt1").innerHTML = '<b>' + "Optic -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }

    //Muzzle

    var muzzles = [
        {
            name: 'Muzzle Brake .45 APC',
            image: '/attachments/muzzles/muzzlebrake45apc.png'
        },
        {
            name: 'Flashguard .45 APC',
            image: '/attachments/muzzles/flashguard45apc.png'
        },
        {
            name: 'Sound Suppressor',
            image: '/attachments/muzzles/soundsuppressor.png'
        },
        {
            name: 'Infantry Compensator',
            image: '/attachments/muzzles/infantrycompensator.png'
        },
        {
            name: 'SOCOM Eliminator',
            image: '/attachments/muzzles/socomeliminator.png'
        },
    ];


    var muzzle = false;
    // //document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt2").innerHTML = "";

    if (attArr.includes(1)) {
        muzzle = true;
    }

    if (muzzle != false) {

        var ranMuzzle = Math.floor(Math.random() * muzzles.length) + 0;

        var muzzlePick = muzzles[ranMuzzle];

        //document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt2").innerHTML = '<b>' + "Muzzle -  " + '</b>' + muzzlePick.name + '<br>' + '<img  style="width:200px;"  alt="' + muzzlePick.name +'" src="' + muzzlePick.image + '">';
    }

     if(muzzle != true) {
        document.getElementById("secondaryAtt2").innerHTML = '<b>' + "Muzzle -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }


    //Barrels

    var barrels = [
        {
            name: '7.2 Extended',
            image: '/attachments/barrels/72extended.png'
        },
        {
            name: '5.9 Cavalry Lancer',
            image: '/attachments/barrels/59cavalrylancer.png'
        },
        {
            name: '6.4 Reinforced Heavy',
            image: '/attachments/barrels/64reinfocedheavy.png'
        },
        {
            name: '7.5 Chrome Lined',
            image: '/attachments/barrels/75chromelined.png'
        },
        {
            name: '4.7 Takedown',
            image: '/attachments/barrels/47takedown.png'
        },
        {
            name: '7.2 Task Force',
            image: '/attachments/barrels/72taskforce.png'
        },
    ];


    var barrel = false;
    // //document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt3").innerHTML = "";

    if (attArr.includes(2)) {
        barrel = true;

    }

    if (barrel != false) {

        var ranBarrel = Math.floor(Math.random() * barrels.length) + 0;

        var barrelPick = barrels[ranBarrel];
        // //document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt3").innerHTML = '<b>' + "Barrel -  " + '</b>' + barrelPick.name + '<br>' + '<img  style="width:200px;" alt="'+ barrelPick.name + '"  src="' + barrelPick.image + '">';
    }

     if (barrel != true){
        document.getElementById("secondaryAtt3").innerHTML = '<b>' + "Barrel -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }


    //Body

    var bodys = [
        {
            name: 'Steady Aim Laser',
            image: '/attachments/bodys/steadyaimlaser.png'
        },
        {
            name: 'Mounted Flashlight',
            image: '/attachments/bodys/mountedflashlight.png'
        },
        {
            name: 'SOF Target Designator',
            image: '/attachments/bodys/softargetdesignator.png'
        },
        {
            name: 'SWAT 5mw Laser Sight',
            image: '/attachments/bodys/swat5mwlasersight.png'
        },
        {
            name: 'Tiger Team Spotlight',
            image: '/attachments/bodys/tigerteamspotlight.png'
        },
        {
            name: 'Ember Sighting Point',
            image: '/attachments/bodys/embersightingpoint.png'
        },
    ];


    var body = false;
    // //document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt4").innerHTML = "";

    if (attArr.includes(3)) {
        body = true;
        
    }

    if (body != false) {
        var ranBody = Math.floor(Math.random() * bodys.length) + 0;
        
        

        var bodyPick = bodys[ranBody];

        // //document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt4").innerHTML = '<b>' + "Body -  " + '</b>' + bodyPick.name + '<br>' + '<img  style="width:200px;" alt="'+ bodyPick.name + '" src="' + bodyPick.image + '">';
    }


     if (body != true) {
        document.getElementById("secondaryAtt4").innerHTML = '<b>' + "Body -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }


    //Magazine

    var magazines = [
        {
            name: '9 RND', 
            image: '/attachments/magazines/9rnd.png'
        },
        {
            name: 'Fast Mag',
            image: '/attachments/magazines/fastmag.png'
        },
        {
            name: '9 Rnd Speed Mag', 
            image: '/attachments/magazines/9rndspeedmag.png'
        },
        {
            name: 'STANAG 12 Rnd', 
            image: '/attachments/magazines/stanag12rnd.png'
        },
        {
            name: 'Vandal Speed Loader',
            image: '/attachments/magazines/vandalspeedloader.png'
        },
        {
            name: 'Salvo 12 Rnd Fast Mag', 
            image: '/attachments/magazines/salvo12rndfastmag.png'
        },
    ];


    var magazine = false;
    // //document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt6").innerHTML = "";

    if (attArr.includes(5)) {
        magazine = true;

    }

    if (magazine != false) {
        var ranMagazine = Math.floor(Math.random() * magazines.length) + 0;


        var magazinePick = magazines[ranMagazine];

        //document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt6").innerHTML = '<b>' + "Magazine -  " + '</b>' + magazinePick.name + '<br>' + '<img  style="width:200px;" alt="'+magazinePick.name + '"  src="' + magazinePick.image + '">';
    }

     if (magazine != true){
        document.getElementById("secondaryAtt6").innerHTML = '<b>' + "Magazine -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }





    //Handle

    var handles = [
        {
            name: 'Speed Tape',
            image: '/attachments/handles/speedtape.png'
        },
        {
            name: 'Dropshot Wrap',
            image: '/attachments/handles/dropshotwrap.png'
        },
        {
            name: 'Field Tape',
            image: '/attachments/handles/fieldtape.png'
        },
        {
            name: 'SARS Jungle Grip',
            image: '/attachments/handles/sarsjunglegrip.png'
        },
        {
            name: 'Serpent Wrap',
            image: '/attachments/handles/serpentwrap.png'
        },
        {
            name: 'Airborne Elastic Wrap',
            image: '/attachments/handles/airbornelasticwrap.png'
        },
    ];


    var handle = false;
    //document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt7").innerHTML = "";

    if (attArr.includes(6)) {
        handle = true;

    }

    if (handle != false) {
        var ranHandle = Math.floor(Math.random() * handles.length) + 0;
        

        var handlePick = handles[ranHandle];

        //document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt7").innerHTML = '<b>' + "Handle -  " + '</b>' + handlePick.name + '<br>' + '<img  style="width:200px;" alt="'+ handlePick.name +'" src="' + handlePick.image + '">';
    }

     if (handle != true){
        document.getElementById("secondaryAtt7").innerHTML = '<b>' + "Handle -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }


    //Stock

    var stocks = [
        {
            name: 'Dual Wield',
            image: '/attachments/stocks/dualwield.png'
        },
    ];


    var stock = false;
    //document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt8").innerHTML = "";

    if (attArr.includes(7)) {
        stock = true;

    }

    if (stock != false) {
        var ranStock = Math.floor(Math.random() * stocks.length) + 0;
        

        var stockPick = stocks[ranStock];

        //document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt8").innerHTML = '<b>' + "Stock -  " + '</b>' + stockPick.name + '<br>' + '<img  style="width:200px;" alt="'+stockPick.name + '" src="' + stockPick.image + '">';
    }

    if (stock != true){
        document.getElementById("secondaryAtt8").innerHTML = '<b>' + "Stock -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }

}



//Diamatti
function diamatti() {
    var numAttachments = [0, 1, 2, 3, 5, 6, 7];
    var totalCount = 5;
    var ran = Math.floor(Math.random() * 5) + 0;
    var attArr = [];
    for (var i = 0; i <= ran; i++) {
        var rand = numAttachments[Math.floor(Math.random() * totalCount)];
        attArr.push(rand);
        numAttachments.splice(rand, 1);
        totalCount--;
    }


    //Optics

    var optics = [

        {
            name: 'Quickdot LED',
            image: '/attachments/optics/quickdotled.png'
        },
        {
            name: 'Otero Mini Reflex',
            image: '/attachments/optics/axialarms3x.png'
        },
        {
            name: 'Microflex LED',
            image: '/attachments/optics/microflexLED.png'
        },
    ];


    var optic = false;
    // //document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt1").innerHTML = "";

    if (attArr.includes(0)) {
        optic = true;
    }

    if (optic != false) {
       
        var ranOptic = Math.floor(Math.random() * optics.length) + 0;

        var opticPick = optics[ranOptic];

        // //document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt1").innerHTML = '<b>' + "Optic -  " + '</b>' + opticPick.name + '<br>' + '<img  style="width:200px;"  alt="' + opticPick.name +'" src="' + opticPick.image + '">';
    }

     if(optic != true){
        document.getElementById("secondaryAtt1").innerHTML = '<b>' + "Optic -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }

    //Muzzle

    var muzzles = [
        {
            name: 'Muzzle Brake 9', 
            image: '/attachments/muzzles/muzzlebrake9.png'
        },
        {
            name: 'Flashguard 9', 
            image: '/attachments/muzzles/flashguard9.png'
        },
        {
            name: 'Sound Suppressor',
            image: '/attachments/muzzles/soundsuppressor.png'
        },
        {
            name: 'Infantry Compensator',
            image: '/attachments/muzzles/infantrycompensator.png'
        },
        {
            name: 'SOCOM Eliminator',
            image: '/attachments/muzzles/socomeliminator.png'
        },
    ];


    var muzzle = false;
    // //document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt2").innerHTML = "";

    if (attArr.includes(1)) {
        muzzle = true;
    }

    if (muzzle != false) {

        var ranMuzzle = Math.floor(Math.random() * muzzles.length) + 0;

        var muzzlePick = muzzles[ranMuzzle];

        //document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt2").innerHTML = '<b>' + "Muzzle -  " + '</b>' + muzzlePick.name + '<br>' + '<img  style="width:200px;"  alt="' + muzzlePick.name +'" src="' + muzzlePick.image + '">';
    }

     if(muzzle != true) {
        document.getElementById("secondaryAtt2").innerHTML = '<b>' + "Muzzle -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }


    //Barrels

    var barrels = [
        {
            name: '7.8 Extended', 
            image: '/attachments/barrels/78extended.png'
        },
        {
            name: '6.5 Cavalry Lancer', 
            image: '/attachments/barrels/65cavalrylancer.png'
        },
        {
            name: '7.2 Reinforced Heavy', 
            image: '/attachments/barrels/72reinforcedheavy.png'
        },
        {
            name: '7.8 Chrome Lined', 
            image: '/attachments/barrels/78chromelined.png'
        },
        {
            name: '6.5 Takedown', 
            image: '/attachments/barrels/65takedown.png'
        },
        {
            name: '7.2 Task Force', 
            image: '/attachments/barrels/72taskforce.png'
        },
    ];


    var barrel = false;
    // //document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt3").innerHTML = "";

    if (attArr.includes(2)) {
        barrel = true;

    }

    if (barrel != false) {

        var ranBarrel = Math.floor(Math.random() * barrels.length) + 0;

        var barrelPick = barrels[ranBarrel];
        // //document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt3").innerHTML = '<b>' + "Barrel -  " + '</b>' + barrelPick.name + '<br>' + '<img  style="width:200px;" alt="'+ barrelPick.name + '"  src="' + barrelPick.image + '">';
    }

     if (barrel != true){
        document.getElementById("secondaryAtt3").innerHTML = '<b>' + "Barrel -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }


    //Body

    var bodys = [
        {
            name: 'Steady Aim Laser',
            image: '/attachments/bodys/steadyaimlaser.png'
        },
        {
            name: 'Mounted Flashlight',
            image: '/attachments/bodys/mountedflashlight.png'
        },
        {
            name: 'SOF Target Designator',
            image: '/attachments/bodys/softargetdesignator.png'
        },
        {
            name: 'SWAT 5mw Laser Sight',
            image: '/attachments/bodys/swat5mwlasersight.png'
        },
        {
            name: 'Tiger Team Spotlight',
            image: '/attachments/bodys/tigerteamspotlight.png'
        },
        {
            name: 'Ember Sighting Point',
            image: '/attachments/bodys/embersightingpoint.png'
        },
    ];


    var body = false;
    // //document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt4").innerHTML = "";

    if (attArr.includes(3)) {
        body = true;
        
    }

    if (body != false) {
        var ranBody = Math.floor(Math.random() * bodys.length) + 0;
        
        

        var bodyPick = bodys[ranBody];

        // //document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt4").innerHTML = '<b>' + "Body -  " + '</b>' + bodyPick.name + '<br>' + '<img  style="width:200px;" alt="'+ bodyPick.name + '" src="' + bodyPick.image + '">';
    }


     if (body != true) {
        document.getElementById("secondaryAtt4").innerHTML = '<b>' + "Body -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }


    //Magazine

    var magazines = [
        {
            name: '24 RND',
            image: '/attachments/magazines/24rnd.png'
        },
        {
            name: 'Fast Mag',
            image: '/attachments/magazines/fastmag.png'
        },
        {
            name: '24 Rnd Speed Mag',
            image: '/attachments/magazines/24rndspeedmag.png'
        },
        {
            name: 'STANAG 130 Rnd',
            image: '/attachments/magazines/stanag30rnd.png'
        },
        {
            name: 'Vandal Speed Loader',
            image: '/attachments/magazines/vandalspeedloader.png'
        },
        {
            name: 'Salvo 30 Rnd Fast Mag',
            image: '/attachments/magazines/salvo30rndfastmag.png'
        },
    ];


    var magazine = false;
    // //document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt6").innerHTML = "";

    if (attArr.includes(5)) {
        magazine = true;

    }

    if (magazine != false) {
        var ranMagazine = Math.floor(Math.random() * magazines.length) + 0;


        var magazinePick = magazines[ranMagazine];

        //document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt6").innerHTML = '<b>' + "Magazine -  " + '</b>' + magazinePick.name + '<br>' + '<img  style="width:200px;" alt="'+magazinePick.name + '"  src="' + magazinePick.image + '">';
    }

     if (magazine != true){
        document.getElementById("secondaryAtt6").innerHTML = '<b>' + "Magazine -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }





    //Handle

    var handles = [
        {
            name: 'Speed Tape',
            image: '/attachments/handles/speedtape.png'
        },
        {
            name: 'Dropshot Wrap',
            image: '/attachments/handles/dropshotwrap.png'
        },
        {
            name: 'Field Tape',
            image: '/attachments/handles/fieldtape.png'
        },
        {
            name: 'SARS Jungle Grip',
            image: '/attachments/handles/sarsjunglegrip.png'
        },
        {
            name: 'Serpent Wrap',
            image: '/attachments/handles/serpentwrap.png'
        },
        {
            name: 'Airborne Elastic Wrap',
            image: '/attachments/handles/airbornelasticwrap.png'
        },
    ];


    var handle = false;
    //document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt7").innerHTML = "";

    if (attArr.includes(6)) {
        handle = true;

    }

    if (handle != false) {
        var ranHandle = Math.floor(Math.random() * handles.length) + 0;
        

        var handlePick = handles[ranHandle];

        //document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt7").innerHTML = '<b>' + "Handle -  " + '</b>' + handlePick.name + '<br>' + '<img  style="width:200px;" alt="'+ handlePick.name +'" src="' + handlePick.image + '">';
    }

     if (handle != true){
        document.getElementById("secondaryAtt7").innerHTML = '<b>' + "Handle -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }


    //Stock

    var stocks = [
        {
            name: 'Dual Wield',
            image: '/attachments/stocks/dualwield.png'
        },
    ];


    var stock = false;
    //document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt8").innerHTML = "";

    if (attArr.includes(7)) {
        stock = true;

    }

    if (stock != false) {
        var ranStock = Math.floor(Math.random() * stocks.length) + 0;
        

        var stockPick = stocks[ranStock];

        //document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt8").innerHTML = '<b>' + "Stock -  " + '</b>' + stockPick.name + '<br>' + '<img  style="width:200px;" alt="'+stockPick.name + '" src="' + stockPick.image + '">';
    }

    if (stock != true){
        document.getElementById("secondaryAtt8").innerHTML = '<b>' + "Stock -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }

}
