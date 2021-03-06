//XM4

function xm4() {
    var numAttachments = [0, 1, 2, 3, 4, 5, 6, 7];
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
            name: 'millstop reflex', 
            image: '/attachments/optics/millstopreflex.png'
        },
        {
            name: 'Visiontexh 2x', 
            image: '/attachments/optics/visiontech2x.png'
        },
        {
            name: 'Kobra Red Dot', 
            image: '/attachments/optics/kobrareddot.png'
        },
        {
            name: 'Axial Arms 3x', 
            image: '/attachments/optics/axialarms3x.png'
        },
        {
            name: 'Sillix Holoscout', 
            image: '/attachments/optics/sillixholosxout.png'
        },
        {
            name: 'Microflex LED', 
            image: '/attachments/optics/microflexled.png'
        },
        {
            name: 'Hawksmoor', 
            image: '/attachments/optics/hawksmoor.png'
        },
        {
            name: 'Royal & Kross 4x', 
            image: '/attachments/optics/royalandkross4x.png'
        },
        {
            name: 'SUSAT Multizoom', 
            image: '/attachments/optics/susatmultizoom.png'
        },
        {
            name: 'Diamondback Reflex', 
            image: '/attachments/optics/diamondbackreflex.png'
        },
        {
            name: 'AN/PVS-4 Thermal', 
            image: '/attachments/optics/anpvs4thermal.png'
        }
    ];


    var optic = false;
    // //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt1").innerHTML = "";

    if (attArr.includes(0)) {
        optic = true;
    }

    if (optic != false) {
       
        var ranOptic = Math.floor(Math.random() * optics.length) + 0;

        var opticPick = optics[ranOptic];

        // //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt1").innerHTML = '<b>' + "Optic -  " + '</b>' + opticPick.name + '<br>' + '<img  style="width:200px;"  alt="' + opticPick.name +'" src="' + opticPick.image + '">';
    }

     if(optic != true){
        document.getElementById("primaryAtt1").innerHTML = '<b>' + "Optic -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }

    //Muzzle

    var muzzles = [
        {
            name: 'Muzzle Brake 5.56', 
            image: '/attachments/muzzles/muzzlebrake556.png'
        },
        {
            name: 'Flashguard 5.56', 
            image: '/attachments/muzzles/flashguard556.png'
        },
        {
            name: 'Suppressor', 
            image: '/attachments/muzzles/suppressor.png'
        },
        {
            name: 'Infantry Compensator', 
            image: '/attachments/muzzles/infantrycompensator.png'
        },
        {
            name: 'SOCOM Eliminator', 
            image: '/attachments/muzzles/socomeliminator.png'
        },
        {
            name: 'Agency Suppressor',
            image: '/attachments/muzzles/agencysuppressor.png'
        },
    ];


    var muzzle = false;
    // //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt2").innerHTML = "";

    if (attArr.includes(1)) {
        muzzle = true;
    }

    if (muzzle != false) {

        var ranMuzzle = Math.floor(Math.random() * muzzles.length) + 0;

        var muzzlePick = muzzles[ranMuzzle];

        //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt2").innerHTML = '<b>' + "Muzzle -  " + '</b>' + muzzlePick.name + '<br>' + '<img  style="width:200px;"  alt="' + muzzlePick.name +'" src="' + muzzlePick.image + '">';
    }

     if(muzzle != true) {
        document.getElementById("primaryAtt2").innerHTML = '<b>' + "Muzzle -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }


    //Barrels

    var barrels = [
        {
            name: '11.8 Ranger', 
            image: '/attachments/barrels/118ranger.png'
        },
        {
            name: '12.5 Cavalry Lancer', 
            image: '/attachments/barrels/125cavalrylancer.png'
        },
        {
            name: '13.5 Rinforced Heavy', 
            image: '/attachments/barrels/135reinforcedheavy.png'
        },
        {
            name: '13.7 Extended', 
            image: '/attachments/barrels/137extended.png'
        },
        {
            name: '13.7 Takedown', 
            image: '/attachments/barrels/137takedown.png'
        },
        {
            name: '13.5 Task Force', 
            image: '/attachments/barrels/135taskforce.png'
        },
    ];


    var barrel = false;
    // //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt3").innerHTML = "";

    if (attArr.includes(2)) {
        barrel = true;

    }

    if (barrel != false) {

        var ranBarrel = Math.floor(Math.random() * barrels.length) + 0;

        var barrelPick = barrels[ranBarrel];
        // //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt3").innerHTML = '<b>' + "Barrel -  " + '</b>' + barrelPick.name + '<br>' + '<img  style="width:200px;" alt="'+ barrelPick.name + '"  src="' + barrelPick.image + '">';
    }

     if (barrel != true){
        document.getElementById("primaryAtt3").innerHTML = '<b>' + "Barrel -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
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
    // //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt4").innerHTML = "";

    if (attArr.includes(3)) {
        body = true;
        
    }

    if (body != false) {
        var ranBody = Math.floor(Math.random() * bodys.length) + 0;
        
        

        var bodyPick = bodys[ranBody];

        // //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt4").innerHTML = '<b>' + "Body -  " + '</b>' + bodyPick.name + '<br>' + '<img  style="width:200px;" alt="'+ bodyPick.name + '" src="' + bodyPick.image + '">';
    }


     if (body != true) {
        document.getElementById("primaryAtt4").innerHTML = '<b>' + "Body -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }

    //Underbarrel

    var underbarrels = [
        {
            name: 'Foregrip',
            image: '/attachments/underbarrel/foregrip.png'
        },
        {
            name: 'Infiltrator Grip',
            image: '/attachments/underbarrel/infiltratorgrip.png'
        },
        {
            name: 'Patrol Grip', 
            image: '/attachments/underbarrel/patrolgrip.png'
        },
        {
            name: 'Bruiser Grip', 
            image: '/attachments/underbarrel/bruisergrip.png'
        },
        {
            name: 'Field Agent Grip', 
            image: '/attachments/underbarrel/fieldagentgrip.png'
        },
        {
            name: 'SFOD Speedgrip', 
            image: '/attachments/underbarrel/sfodspeedgrip.png'
        },
    ];


    var underbarrel = false;
    // //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt5").innerHTML = "";

    if (attArr.includes(4)) {
        underbarrel = true;

    }

    if (underbarrel != false) {
        var ranUnderbarrel = Math.floor(Math.random() * underbarrels.length) + 0;

        var underbarrelPick = underbarrels[ranUnderbarrel];
 
        // //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt5").innerHTML = '<b>' + "Underbarrel -  " + '</b>' + underbarrelPick.name + '<br>' + '<img  style="width:200px;" alt="'+ underbarrelPick.name +'"  src="' + underbarrelPick.image + '">';
    }


     if (underbarrel != true){
        document.getElementById("primaryAtt5").innerHTML = '<b>' + "Underbarrel -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }


    //Magazine

    var magazines = [
        {
            name: '40 Rnd', 
            image: '/attachments/magazines/40rnd.png'
        },
        {
            name: 'Jungle-Style Mag', 
            image: '/attachments/magazines/junglestylemag.png'
        },
        {
            name: '40 Rnd Speed Mag', 
            image: '/attachments/magazines/40rndspeedmag.png'
        },
        {
            name: 'STANAG 50 Rnd',  
            image: '/attachments/magazines/stanag50rnd.png'
        },
        {
            name: 'SAS Mag Clamp',  
            image: '/attachments/magazines/sasmagclamp.png'
        },
        {
            name: 'Salvo 50 Rnd Fast Mag',  
            image: '/attachments/magazines/salvo50rndfastmag.png'
        },
    ];


    var magazine = false;
    // //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt6").innerHTML = "";

    if (attArr.includes(5)) {
        magazine = true;

    }

    if (magazine != false) {
        var ranMagazine = Math.floor(Math.random() * magazines.length) + 0;


        var magazinePick = magazines[ranMagazine];

        //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt6").innerHTML = '<b>' + "Magazine -  " + '</b>' + magazinePick.name + '<br>' + '<img  style="width:200px;" alt="'+magazinePick.name + '"  src="' + magazinePick.image + '">';
    }

     if (magazine != true){
        document.getElementById("primaryAtt6").innerHTML = '<b>' + "Magazine -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
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
            image: '/attachments/handles/airborneelasticwrap.png'
        },
    ];


    var handle = false;
    //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt7").innerHTML = "";

    if (attArr.includes(6)) {
        handle = true;

    }

    if (handle != false) {
        var ranHandle = Math.floor(Math.random() * handles.length) + 0;
        

        var handlePick = handles[ranHandle];

        //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt7").innerHTML = '<b>' + "Handle -  " + '</b>' + handlePick.name + '<br>' + '<img  style="width:200px;" alt="'+ handlePick.name +'" src="' + handlePick.image + '">';
    }

     if (handle != true){
        document.getElementById("primaryAtt7").innerHTML = '<b>' + "Handle -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
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
            name: 'Buffer Tube',  
            image: '/attachments/stocks/buffertube.png'
        },
        {
            name: 'SAS Combat Stock',  
            image: '/attachments/stocks/sascombatstock.png'
        },
        {
            name: 'Raider Pad',  
            image: '/attachments/stocks/raiderpad.png'
        },
    ];


    var stock = false;
    //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt8").innerHTML = "";

    if (attArr.includes(7)) {
        stock = true;

    }

    if (stock != false) {
        var ranStock = Math.floor(Math.random() * stocks.length) + 0;
        

        var stockPick = stocks[ranStock];

        //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt8").innerHTML = '<b>' + "Stock -  " + '</b>' + stockPick.name + '<br>' + '<img  style="width:200px;" alt="'+stockPick.name + '" src="' + stockPick.image + '">';
    }

    if (stock != true){
        document.getElementById("primaryAtt8").innerHTML = '<b>' + "Stock -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }

}




//AK-47

function ak47() {
    var numAttachments = [0, 1, 2, 3, 4, 5, 6, 7];
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
            name: 'millstop reflex', //DONT NEED
            image: '/attachments/optics/millstopreflex.png'
        },
        {
            name: 'Visiontexh 2x', //DONT NEED
            image: '/attachments/optics/visiontech2x.png'
        },
        {
            name: 'Kobra Red Dot', //DONT NEED
            image: '/attachments/optics/kobrareddot.png'
        },
        {
            name: 'Quickdot LED',
            image: '/attachments/optics/quickdotled.png'
        },
        {
            name: 'Sillix Holoscout', //DONT NEED
            image: '/attachments/optics/sillixholosxout.png'
        },
        {
            name: 'Microflex LED', //DONT NEED
            image: '/attachments/optics/microflexled.png'
        },
        {
            name: 'Hawksmoor', //DONT NEED
            image: '/attachments/optics/hawksmoor.png'
        },
        {
            name: 'Royal & Kross 4x', //DONT NEED
            image: '/attachments/optics/royalandkross4x.png'
        },
        {
            name: 'SUSAT Multizoom', //DONT NEED
            image: '/attachments/optics/susatmultizoom.png'
        },
        {
            name: 'Diamondback Reflex', //DONT NEED
            image: '/attachments/optics/diamondbackreflex.png'
        },
        {
            name: 'Noch Sova Thermal', 
            image: '/attachments/optics/nochsovathermal.png'
        }
    ];


    var optic = false;
    // //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt1").innerHTML = "";

    if (attArr.includes(0)) {
        optic = true;
    }

    if (optic != false) {
       
        var ranOptic = Math.floor(Math.random() * optics.length) + 0;

        var opticPick = optics[ranOptic];

        // //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt1").innerHTML = '<b>' + "Optic -  " + '</b>' + opticPick.name + '<br>' + '<img  style="width:200px;"  alt="' + opticPick.name +'" src="' + opticPick.image + '">';
    }

     if(optic != true){
        document.getElementById("primaryAtt1").innerHTML = '<b>' + "Optic -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }

    //Muzzle

    var muzzles = [
        {
            name: 'Muzzle Brake 7.62', 
            image: '/attachments/muzzles/muzzlebrake762.png'
        },
        {
            name: 'Flashguard 7.62', 
            image: '/attachments/muzzles/flashguard762.png'
        },
        {
            name: 'Suppressor', //DONT NEED
            image: '/attachments/muzzles/suppressor.png'
        },
        {
            name: 'Spetsnaz Compensator', 
            image: '/attachments/muzzles/spetsnazcompensator.png'
        },
        {
            name: 'KGB Eliminator', 
            image: '/attachments/muzzles/kgbeliminator.png'
        },
        {
            name: 'GRU Suppressor', //DONT NEED
            image: '/attachments/muzzles/grusuppressor.png'
        },
    ];


    var muzzle = false;
    // //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt2").innerHTML = "";

    if (attArr.includes(1)) {
        muzzle = true;
    }

    if (muzzle != false) {

        var ranMuzzle = Math.floor(Math.random() * muzzles.length) + 0;

        var muzzlePick = muzzles[ranMuzzle];

        //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt2").innerHTML = '<b>' + "Muzzle -  " + '</b>' + muzzlePick.name + '<br>' + '<img  style="width:200px;"  alt="' + muzzlePick.name +'" src="' + muzzlePick.image + '">';
    }

     if(muzzle != true) {
        document.getElementById("primaryAtt2").innerHTML = '<b>' + "Muzzle -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }


    //Barrels

    var barrels = [
        {
            name: '15.5 Ultralight',
            image: '/attachments/barrels/155ultralight.png'
        },
        {
            name: '16.5 Cavalry Lancer', 
            image: '/attachments/barrels/165cavalrylancer.png'
        },
        {
            name: '18.2 VDV Reinforced',
            image: '/attachments/barrels/182vdvreinforced.png'
        },
        {
            name: '20 Liberator',
            image: '/attachments/barrels/20liberator.png'
        },
        {
            name: '18.2 Takedown',
            image: '/attachments/barrels/182takedown.png'
        },
        {
            name: '20 Spetsnaz RPK Barrel',
            image: '/attachments/barrels/20spetsnazrpkbarrel.png'
        },
    ];


    var barrel = false;
    // //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt3").innerHTML = "";

    if (attArr.includes(2)) {
        barrel = true;

    }

    if (barrel != false) {

        var ranBarrel = Math.floor(Math.random() * barrels.length) + 0;

        var barrelPick = barrels[ranBarrel];
        // //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt3").innerHTML = '<b>' + "Barrel -  " + '</b>' + barrelPick.name + '<br>' + '<img  style="width:200px;" alt="'+ barrelPick.name + '"  src="' + barrelPick.image + '">';
    }

     if (barrel != true){
        document.getElementById("primaryAtt3").innerHTML = '<b>' + "Barrel -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }


    //Body

    var bodys = [
        {
            name: 'Steady Aim Laser', //DONT NEED
            image: '/attachments/bodys/steadyaimlaser.png'
        },
        {
            name: 'Mounted Flashlight', //DONT NEED
            image: '/attachments/bodys/mountedflashlight.png'
        },
        {
            name: 'KGB Target Designator', 
            image: '/attachments/bodys/kgbtargetdesignator.png'
        },
        {
            name: 'GRU 5mw Laser Sight',  
            image: '/attachments/bodys/gru5mwlasersight.png'
        },
        {
            name: 'Tiger Team Spotlight', //DONT NEED
            image: '/attachments/bodys/tigerteamspotlight.png'
        },
        {
            name: 'Ember Sighting Point', //DONT NEED
            image: '/attachments/bodys/embersightingpoint.png'
        },
    ];


    var body = false;
    // //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt4").innerHTML = "";

    if (attArr.includes(3)) {
        body = true;
        
    }

    if (body != false) {
        var ranBody = Math.floor(Math.random() * bodys.length) + 0;
        
        

        var bodyPick = bodys[ranBody];

        // //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt4").innerHTML = '<b>' + "Body -  " + '</b>' + bodyPick.name + '<br>' + '<img  style="width:200px;" alt="'+ bodyPick.name + '" src="' + bodyPick.image + '">';
    }


     if (body != true) {
        document.getElementById("primaryAtt4").innerHTML = '<b>' + "Body -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }

    //Underbarrel

    var underbarrels = [
        {
            name: 'Foregrip', //DONT NEED
            image: '/attachments/underbarrel/foregrip.png'
        },
        {
            name: 'Infiltrator Grip', //DONT NEED
            image: '/attachments/underbarrel/infiltratorgrip.png'
        },
        {
            name: 'Patrol Grip',  //DONT NEED
            image: '/attachments/underbarrel/patrolgrip.png'
        },
        {
            name: 'Bruiser Grip',  //DONT NEED
            image: '/attachments/underbarrel/bruisergrip.png'
        },
        {
            name: 'Spetsnaz Grip',  
            image: '/attachments/underbarrel/spetsnazgrip.png'
        },
        {
            name: 'Spetsnaz Speedgrip', 
            image: '/attachments/underbarrel/spetsnazspeedgrip.png'
        },
    ];


    var underbarrel = false;
    // //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt5").innerHTML = "";

    if (attArr.includes(4)) {
        underbarrel = true;

    }

    if (underbarrel != false) {
        var ranUnderbarrel = Math.floor(Math.random() * underbarrels.length) + 0;

        var underbarrelPick = underbarrels[ranUnderbarrel];
 
        // //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt5").innerHTML = '<b>' + "Underbarrel -  " + '</b>' + underbarrelPick.name + '<br>' + '<img  style="width:200px;" alt="'+ underbarrelPick.name +'"  src="' + underbarrelPick.image + '">';
    }


     if (underbarrel != true){
        document.getElementById("primaryAtt5").innerHTML = '<b>' + "Underbarrel -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }


    //Magazine

    var magazines = [
        {
            name: '40 Rnd', //DONT NEED
            image: '/attachments/magazines/40rnd.png'
        },
        {
            name: 'Taped Mags',
            image: '/attachments/magazines/tapedmags.png'
        },
        {
            name: '40 Rnd Speed Mag', //DONT NEED
            image: '/attachments/magazines/40rndspeedmag.png'
        },
        {
            name: 'Bakelite 50 Rnd', 
            image: '/attachments/magazines/bakelite50rnd.png'
        },
        {
            name: 'GRU Mag Clamp',
            image: '/attachments/magazines/grumagclamp.png'
        },
        {
            name: 'VDV 50 Rnd Fast Mag',
            image: '/attachments/magazines/vdv50rndfastmag.png'
        },
    ];


    var magazine = false;
    // //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt6").innerHTML = "";

    if (attArr.includes(5)) {
        magazine = true;

    }

    if (magazine != false) {
        var ranMagazine = Math.floor(Math.random() * magazines.length) + 0;


        var magazinePick = magazines[ranMagazine];

        //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt6").innerHTML = '<b>' + "Magazine -  " + '</b>' + magazinePick.name + '<br>' + '<img  style="width:200px;" alt="'+magazinePick.name + '"  src="' + magazinePick.image + '">';
    }

     if (magazine != true){
        document.getElementById("primaryAtt6").innerHTML = '<b>' + "Magazine -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }





    //Handle

    var handles = [
        {
            name: 'Speed Tape',  //DONT NEED
            image: '/attachments/handles/speedtape.png'
        },
        {
            name: 'Dropshot Wrap', //DONT NEED
            image: '/attachments/handles/dropshotwrap.png'
        },
        {
            name: 'Field Tape', //DONT NEED
            image: '/attachments/handles/fieldtape.png'
        },
        {
            name: 'Spetsnaz Field Grip',  //DONT NEED
            image: '/attachments/handles/spetsnazfieldgrip.png'
        },
        {
            name: 'Serpent Wrap',//DONT NEED
            image: '/attachments/handles/serpentwrap.png'
        },
        {
            name: 'GRU Elastic Wrap', 
            image: '/attachments/handles/gruelasticwrap.png'
        },
    ];


    var handle = false;
    //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt7").innerHTML = "";

    if (attArr.includes(6)) {
        handle = true;

    }

    if (handle != false) {
        var ranHandle = Math.floor(Math.random() * handles.length) + 0;
        

        var handlePick = handles[ranHandle];

        //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt7").innerHTML = '<b>' + "Handle -  " + '</b>' + handlePick.name + '<br>' + '<img  style="width:200px;" alt="'+ handlePick.name +'" src="' + handlePick.image + '">';
    }

     if (handle != true){
        document.getElementById("primaryAtt7").innerHTML = '<b>' + "Handle -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }


    //Stock

    var stocks = [
        {
            name: 'Tactical Stock', //DONT NEED
            image: '/attachments/stocks/tacticalstock.png'
        },
        {
            name: 'Wire Stock',  //DONT NEED
            image: '/attachments/stocks/wirestock.png'
        },
        {
            name: 'Duster Stock', //DONT NEED
            image: '/attachments/stocks/dusterstock.png'
        },
        {
            name: 'No Stock', 
            image: '/attachments/stocks/nostock.png'
        },
        {
            name: 'Spetsnaz PKM Stock', 
            image: '/attachments/stocks/spetsnazpkmstock.png'
        },
        {
            name: 'KGB Skeletal Stock', 
            image: '/attachments/stocks/kgbskeletalstock.png'
        },
    ];


    var stock = false;
    //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt8").innerHTML = "";

    if (attArr.includes(7)) {
        stock = true;

    }

    if (stock != false) {
        var ranStock = Math.floor(Math.random() * stocks.length) + 0;
        

        var stockPick = stocks[ranStock];

        //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt8").innerHTML = '<b>' + "Stock -  " + '</b>' + stockPick.name + '<br>' + '<img  style="width:200px;" alt="'+stockPick.name + '" src="' + stockPick.image + '">';
    }

    if (stock != true){
        document.getElementById("primaryAtt8").innerHTML = '<b>' + "Stock -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }

}


//Krig 6
function krig6() {
    var numAttachments = [0, 1, 2, 3, 4, 5, 6, 7];
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
            name: 'millstop reflex', //DONT NEED
            image: '/attachments/optics/millstopreflex.png'
        },
        {
            name: 'Visiontexh 2x', //DONT NEED
            image: '/attachments/optics/visiontech2x.png'
        },
        {
            name: 'Kobra Red Dot', //DONT NEED
            image: '/attachments/optics/kobrareddot.png'
        },
        {
            name: 'Quickdot LED',//DONT NEED
            image: '/attachments/optics/quickdotled.png'
        },
        {
            name: 'Axial Arms 3x', //DONT NEED
            image: '/attachments/optics/axialarms3x.png'
        },
        {
            name: 'Sillix Holoscout', //DONT NEED
            image: '/attachments/optics/sillixholosxout.png'
        },
        {
            name: 'Microflex LED', //DONT NEED
            image: '/attachments/optics/microflexled.png'
        },
        {
            name: 'Hawksmoor', //DONT NEED
            image: '/attachments/optics/hawksmoor.png'
        },
        {
            name: 'Royal & Kross 4x', //DONT NEED
            image: '/attachments/optics/royalandkross4x.png'
        },
        {
            name: 'SUSAT Multizoom', //DONT NEED
            image: '/attachments/optics/susatmultizoom.png'
        },
        {
            name: 'Diamondback Reflex', //DONT NEED
            image: '/attachments/optics/diamondbackreflex.png'
        },
        {
            name: 'AN/PVS-4 Thermal', //DONT NEED
            image: '/attachments/optics/anpvs4thermal.png'
        }
    ];


    var optic = false;
    // //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt1").innerHTML = "";

    if (attArr.includes(0)) {
        optic = true;
    }

    if (optic != false) {
       
        var ranOptic = Math.floor(Math.random() * optics.length) + 0;

        var opticPick = optics[ranOptic];

        // //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt1").innerHTML = '<b>' + "Optic -  " + '</b>' + opticPick.name + '<br>' + '<img  style="width:200px;"  alt="' + opticPick.name +'" src="' + opticPick.image + '">';
    }

     if(optic != true){
        document.getElementById("primaryAtt1").innerHTML = '<b>' + "Optic -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }

    //Muzzle

    var muzzles = [
        {
            name: 'Muzzle Brake 5.56', //DONT NEED
            image: '/attachments/muzzles/muzzlebrake556.png'
        },
        {
            name: 'Flashguard 5.56', //DONT NEED
            image: '/attachments/muzzles/flashguard556.png'
        },
        {
            name: 'Suppressor', //DONT NEED
            image: '/attachments/muzzles/suppressor.png'
        },
        {
            name: 'Infantry Compensator', //DONT NEED
            image: '/attachments/muzzles/infantrycompensator.png'
        },
        {
            name: 'SOCOM Eliminator', //DONT NEED
            image: '/attachments/muzzles/socomeliminator.png'
        },
        {
            name: 'Agency Suppressor',//DONT NEED
            image: '/attachments/muzzles/agencysuppressor.png'
        },
    ];


    var muzzle = false;
    // //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt2").innerHTML = "";

    if (attArr.includes(1)) {
        muzzle = true;
    }

    if (muzzle != false) {

        var ranMuzzle = Math.floor(Math.random() * muzzles.length) + 0;

        var muzzlePick = muzzles[ranMuzzle];

        //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt2").innerHTML = '<b>' + "Muzzle -  " + '</b>' + muzzlePick.name + '<br>' + '<img  style="width:200px;"  alt="' + muzzlePick.name +'" src="' + muzzlePick.image + '">';
    }

     if(muzzle != true) {
        document.getElementById("primaryAtt2").innerHTML = '<b>' + "Muzzle -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }


    //Barrels

    var barrels = [
        {
            name: '16.5 Ultralight',
            image: '/attachments/barrels/165ultralight.png'
        },
        {
            name: '17.7 Cavalry Lancer',
            image: '/attachments/barrels/177cavalrylancer.png'
        },
        {
            name: '15.5 Contour',
            image: '/attachments/barrels/155contour.png'
        },
        {
            name: '18.7 Ranger',
            image: '/attachments/barrels/197ranger.png'
        },
        {
            name: '19.7 Takedown',
            image: '/attachments/barrels/197takedown.png'
        },
        {
            name: '15 CMV Mil-Spec',
            image: '/attachments/barrels/15cmvmilspec.png'
        },
    ];


    var barrel = false;
    // //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt3").innerHTML = "";

    if (attArr.includes(2)) {
        barrel = true;

    }

    if (barrel != false) {

        var ranBarrel = Math.floor(Math.random() * barrels.length) + 0;

        var barrelPick = barrels[ranBarrel];
        // //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt3").innerHTML = '<b>' + "Barrel -  " + '</b>' + barrelPick.name + '<br>' + '<img  style="width:200px;" alt="'+ barrelPick.name + '"  src="' + barrelPick.image + '">';
    }

     if (barrel != true){
        document.getElementById("primaryAtt3").innerHTML = '<b>' + "Barrel -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }


    //Body

    var bodys = [
        {
            name: 'Steady Aim Laser', //DONT NEED
            image: '/attachments/bodys/steadyaimlaser.png'
        },
        {
            name: 'Mounted Flashlight', //DONT NEED
            image: '/attachments/bodys/mountedflashlight.png'
        },
        {
            name: 'SOF Target Designator', //DONT NEED
            image: '/attachments/bodys/softargetdesignator.png'
        },
        {
            name: 'SWAT 5mw Laser Sight', //DONT NEED
            image: '/attachments/bodys/swat5mwlasersight.png'
        },
        {
            name: 'Tiger Team Spotlight', //DONT NEED
            image: '/attachments/bodys/tigerteamspotlight.png'
        },
        {
            name: 'Ember Sighting Point', //DONT NEED
            image: '/attachments/bodys/embersightingpoint.png'
        },
    ];


    var body = false;
    // //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt4").innerHTML = "";

    if (attArr.includes(3)) {
        body = true;
        
    }

    if (body != false) {
        var ranBody = Math.floor(Math.random() * bodys.length) + 0;
        
        

        var bodyPick = bodys[ranBody];

        // //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt4").innerHTML = '<b>' + "Body -  " + '</b>' + bodyPick.name + '<br>' + '<img  style="width:200px;" alt="'+ bodyPick.name + '" src="' + bodyPick.image + '">';
    }


     if (body != true) {
        document.getElementById("primaryAtt4").innerHTML = '<b>' + "Body -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }

    //Underbarrel

    var underbarrels = [
        {
            name: 'Foregrip', //DONT NEED
            image: '/attachments/underbarrel/foregrip.png'
        },
        {
            name: 'Infiltrator Grip', //DONT NEED
            image: '/attachments/underbarrel/infiltratorgrip.png'
        },
        {
            name: 'Patrol Grip',  //DONT NEED
            image: '/attachments/underbarrel/patrolgrip.png'
        },
        {
            name: 'Bruiser Grip',  //DONT NEED
            image: '/attachments/underbarrel/bruisergrip.png'
        },
        {
            name: 'Field Agent Grip',  //DONT NEED
            image: '/attachments/underbarrel/fieldagentgrip.png'
        },
        {
            name: 'SFOD Speedgrip',  //DONT NEED
            image: '/attachments/underbarrel/sfodspeedgrip.png'
        },
    ];


    var underbarrel = false;
    // //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt5").innerHTML = "";

    if (attArr.includes(4)) {
        underbarrel = true;

    }

    if (underbarrel != false) {
        var ranUnderbarrel = Math.floor(Math.random() * underbarrels.length) + 0;

        var underbarrelPick = underbarrels[ranUnderbarrel];
 
        // //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt5").innerHTML = '<b>' + "Underbarrel -  " + '</b>' + underbarrelPick.name + '<br>' + '<img  style="width:200px;" alt="'+ underbarrelPick.name +'"  src="' + underbarrelPick.image + '">';
    }


     if (underbarrel != true){
        document.getElementById("primaryAtt5").innerHTML = '<b>' + "Underbarrel -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }


    //Magazine

    var magazines = [
        {
            name: '40 Rnd', //DONT NEED
            image: '/attachments/magazines/40rnd.png'
        },
        {
            name: 'Jungle-Style Mag', //DONT NEED
            image: '/attachments/magazines/junglestylemag.png'
        },
        {
            name: '40 Rnd Speed Mag', //DONT NEED
            image: '/attachments/magazines/40rndspeedmag.png'
        },
        {
            name: 'STANAG 50 Rnd',  //DONT NEED
            image: '/attachments/magazines/stanag50rnd.png'
        },
        {
            name: 'SAS Mag Clamp',  //DONT NEED
            image: '/attachments/magazines/sasmagclamp.png'
        },
        {
            name: 'Salvo 50 Rnd Fast Mag',  //DONT NEED
            image: '/attachments/magazines/salvo50rndfastmag.png'
        },

    ];


    var magazine = false;
    // //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt6").innerHTML = "";

    if (attArr.includes(5)) {
        magazine = true;

    }

    if (magazine != false) {
        var ranMagazine = Math.floor(Math.random() * magazines.length) + 0;


        var magazinePick = magazines[ranMagazine];

        //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt6").innerHTML = '<b>' + "Magazine -  " + '</b>' + magazinePick.name + '<br>' + '<img  style="width:200px;" alt="'+magazinePick.name + '"  src="' + magazinePick.image + '">';
    }

     if (magazine != true){
        document.getElementById("primaryAtt6").innerHTML = '<b>' + "Magazine -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }





    //Handle

    var handles = [
        {
            name: 'Speed Tape',  //DONT NEED
            image: '/attachments/handles/speedtape.png'
        },
        {
            name: 'Dropshot Wrap', //DONT NEED
            image: '/attachments/handles/dropshotwrap.png'
        },
        {
            name: 'Field Tape', //DONT NEED
            image: '/attachments/handles/fieldtape.png'
        },
        {
            name: 'SARS Jungle Grip', //DONT NEED
            image: '/attachments/handles/sarsjunglegrip.png'
        },
        {
            name: 'Serpent Wrap',//DONT NEED
            image: '/attachments/handles/serpentwrap.png'
        },
        {
            name: 'Airborne Elastic Wrap', //DONT NEED
            image: '/attachments/handles/airborneelasticwrap.png'
        },
    ];


    var handle = false;
    //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt7").innerHTML = "";

    if (attArr.includes(6)) {
        handle = true;

    }

    if (handle != false) {
        var ranHandle = Math.floor(Math.random() * handles.length) + 0;
        

        var handlePick = handles[ranHandle];

        //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt7").innerHTML = '<b>' + "Handle -  " + '</b>' + handlePick.name + '<br>' + '<img  style="width:200px;" alt="'+ handlePick.name +'" src="' + handlePick.image + '">';
    }

     if (handle != true){
        document.getElementById("primaryAtt7").innerHTML = '<b>' + "Handle -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }


    //Stock

    var stocks = [
        {
            name: 'Tactical Stock', //DONT NEED
            image: '/attachments/stocks/tacticalstock.png'
        },
        {
            name: 'Wire Stock',  //DONT NEED
            image: '/attachments/stocks/wirestock.png'
        },
        {
            name: 'Duster Stock', //DONT NEED
            image: '/attachments/stocks/dusterstock.png'
        },
        {
            name: 'No Stock', //DONT NEED
            image: '/attachments/stocks/nostock.png'
        },
        {
            name: 'SAS Combat Stock',  //DONT NEED
            image: '/attachments/stocks/sascombatstock.png'
        },
        {
            name: 'Raider Stock', 
            image: '/attachments/stocks/raiderstock.png'
        },

    ];


    var stock = false;
    //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt8").innerHTML = "";

    if (attArr.includes(7)) {
        stock = true;

    }

    if (stock != false) {
        var ranStock = Math.floor(Math.random() * stocks.length) + 0;
        

        var stockPick = stocks[ranStock];

        //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt8").innerHTML = '<b>' + "Stock -  " + '</b>' + stockPick.name + '<br>' + '<img  style="width:200px;" alt="'+stockPick.name + '" src="' + stockPick.image + '">';
    }

    if (stock != true){
        document.getElementById("primaryAtt8").innerHTML = '<b>' + "Stock -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }

}


//QBZ-83
function qbz83() {
    var numAttachments = [0, 1, 2, 3, 4, 5, 6, 7];
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
            name: 'millstop reflex', //DONT NEED
            image: '/attachments/optics/millstopreflex.png'
        },
        {
            name: 'Visiontexh 2x', //DONT NEED
            image: '/attachments/optics/visiontech2x.png'
        },
        {
            name: 'Kobra Red Dot', //DONT NEED
            image: '/attachments/optics/kobrareddot.png'
        },
        {
            name: 'Quickdot LED',//DONT NEED
            image: '/attachments/optics/quickdotled.png'
        },
        {
            name: 'Axial Arms 3x', //DONT NEED
            image: '/attachments/optics/axialarms3x.png'
        },
        {
            name: 'Sillix Holoscout', //DONT NEED
            image: '/attachments/optics/sillixholosxout.png'
        },
        {
            name: 'Microflex LED', //DONT NEED
            image: '/attachments/optics/microflexled.png'
        },
        {
            name: 'Hawksmoor', //DONT NEED
            image: '/attachments/optics/hawksmoor.png'
        },
        {
            name: 'Royal & Kross 4x', //DONT NEED
            image: '/attachments/optics/royalandkross4x.png'
        },
        {
            name: 'SUSAT Multizoom', //DONT NEED
            image: '/attachments/optics/susatmultizoom.png'
        },
        {
            name: 'Diamondback Reflex', //DONT NEED
            image: '/attachments/optics/diamondbackreflex.png'
        },
        {
            name: 'AN/PVS-4 Thermal', //DONT NEED
            image: '/attachments/optics/anpvs4thermal.png'
        }
    ];


    var optic = false;
    // //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt1").innerHTML = "";

    if (attArr.includes(0)) {
        optic = true;
    }

    if (optic != false) {
       
        var ranOptic = Math.floor(Math.random() * optics.length) + 0;

        var opticPick = optics[ranOptic];

        // //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt1").innerHTML = '<b>' + "Optic -  " + '</b>' + opticPick.name + '<br>' + '<img  style="width:200px;"  alt="' + opticPick.name +'" src="' + opticPick.image + '">';
    }

     if(optic != true){
        document.getElementById("primaryAtt1").innerHTML = '<b>' + "Optic -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }

    //Muzzle

    var muzzles = [
        {
            name: 'Muzzle Brake 5.56', //DONT NEED
            image: '/attachments/muzzles/muzzlebrake556.png'
        },
        {
            name: 'Flashguard 5.56', //DONT NEED
            image: '/attachments/muzzles/flashguard556.png'
        },
        {
            name: 'Suppressor', //DONT NEED
            image: '/attachments/muzzles/suppressor.png'
        },
        {
            name: 'Infantry Compensator', //DONT NEED
            image: '/attachments/muzzles/infantrycompensator.png'
        },
        {
            name: 'SOCOM Eliminator', //DONT NEED
            image: '/attachments/muzzles/socomeliminator.png'
        },
        {
            name: 'Agency Suppressor',//DONT NEED //DONT NEED
            image: '/attachments/muzzles/agencysuppressor.png'
        },
    ];


    var muzzle = false;
    // //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt2").innerHTML = "";

    if (attArr.includes(1)) {
        muzzle = true;
    }

    if (muzzle != false) {

        var ranMuzzle = Math.floor(Math.random() * muzzles.length) + 0;

        var muzzlePick = muzzles[ranMuzzle];

        //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt2").innerHTML = '<b>' + "Muzzle -  " + '</b>' + muzzlePick.name + '<br>' + '<img  style="width:200px;"  alt="' + muzzlePick.name +'" src="' + muzzlePick.image + '">';
    }

     if(muzzle != true) {
        document.getElementById("primaryAtt2").innerHTML = '<b>' + "Muzzle -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }


    //Barrels

    var barrels = [
        {
            name: '13.7 Ulgralight',  
            image: '/attachments/barrels/137ultralight.png'
        },
        {
            name: '13.7 Cavalry Lancer', 
            image: '/attachments/barrels/137cavalrylancer.png'
        },
        {
            name: '15.5 Reinforced Heavy', 
            image: '/attachments/barrels/155reinforcedheavy.png'
        },
        {
            name: '15.6 Ranger', 
            image: '/attachments/barrels/165ranger.png'
        },
        {
            name: '15.5 Takedown', 
            image: '/attachments/barrels/155takedown.png'
        },
        {
            name: '15.5 Task Force', 
            image: '/attachments/barrels/155taskforce.png'
        },
    ];


    var barrel = false;
    // //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt3").innerHTML = "";

    if (attArr.includes(2)) {
        barrel = true;

    }

    if (barrel != false) {

        var ranBarrel = Math.floor(Math.random() * barrels.length) + 0;

        var barrelPick = barrels[ranBarrel];
        // //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt3").innerHTML = '<b>' + "Barrel -  " + '</b>' + barrelPick.name + '<br>' + '<img  style="width:200px;" alt="'+ barrelPick.name + '"  src="' + barrelPick.image + '">';
    }

     if (barrel != true){
        document.getElementById("primaryAtt3").innerHTML = '<b>' + "Barrel -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }


    //Body

    var bodys = [
        {
            name: 'Steady Aim Laser', //DONT NEED
            image: '/attachments/bodys/steadyaimlaser.png'
        },
        {
            name: 'Mounted Flashlight', //DONT NEED
            image: '/attachments/bodys/mountedflashlight.png'
        },
        {
            name: 'SOF Target Designator', //DONT NEED
            image: '/attachments/bodys/softargetdesignator.png'
        },
        {
            name: 'SWAT 5mw Laser Sight', //DONT NEED
            image: '/attachments/bodys/swat5mwlasersight.png'
        },
        {
            name: 'Tiger Team Spotlight', //DONT NEED
            image: '/attachments/bodys/tigerteamspotlight.png'
        },
        {
            name: 'Ember Sighting Point', //DONT NEED
            image: '/attachments/bodys/embersightingpoint.png'
        },
    ];


    var body = false;
    // //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt4").innerHTML = "";

    if (attArr.includes(3)) {
        body = true;
        
    }

    if (body != false) {
        var ranBody = Math.floor(Math.random() * bodys.length) + 0;
        
        

        var bodyPick = bodys[ranBody];

        // //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt4").innerHTML = '<b>' + "Body -  " + '</b>' + bodyPick.name + '<br>' + '<img  style="width:200px;" alt="'+ bodyPick.name + '" src="' + bodyPick.image + '">';
    }


     if (body != true) {
        document.getElementById("primaryAtt4").innerHTML = '<b>' + "Body -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }

    //Underbarrel

    var underbarrels = [
        {
            name: 'Foregrip', //DONT NEED
            image: '/attachments/underbarrel/foregrip.png'
        },
        {
            name: 'Infiltrator Grip', //DONT NEED
            image: '/attachments/underbarrel/infiltratorgrip.png'
        },
        {
            name: 'Patrol Grip',  //DONT NEED
            image: '/attachments/underbarrel/patrolgrip.png'
        },
        {
            name: 'Bruiser Grip',  //DONT NEED
            image: '/attachments/underbarrel/bruisergrip.png'
        },
        {
            name: 'Field Agent Grip',  //DONT NEED
            image: '/attachments/underbarrel/fieldagentgrip.png'
        },
        {
            name: 'SFOD Speedgrip',  //DONT NEED
            image: '/attachments/underbarrel/sfodspeedgrip.png'
        },
    ];


    var underbarrel = false;
    // //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt5").innerHTML = "";

    if (attArr.includes(4)) {
        underbarrel = true;

    }

    if (underbarrel != false) {
        var ranUnderbarrel = Math.floor(Math.random() * underbarrels.length) + 0;

        var underbarrelPick = underbarrels[ranUnderbarrel];
 
        // //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt5").innerHTML = '<b>' + "Underbarrel -  " + '</b>' + underbarrelPick.name + '<br>' + '<img  style="width:200px;" alt="'+ underbarrelPick.name +'"  src="' + underbarrelPick.image + '">';
    }


     if (underbarrel != true){
        document.getElementById("primaryAtt5").innerHTML = '<b>' + "Underbarrel -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }


    //Magazine

    var magazines = [
        {
            name: '40 Rnd', //DONT NEED
            image: '/attachments/magazines/40rnd.png'
        },
        {
            name: 'Jungle-Style Mag', //DONT NEED
            image: '/attachments/magazines/junglestylemag.png'
        },
        {
            name: '40 Rnd Speed Mag', //DONT NEED
            image: '/attachments/magazines/40rndspeedmag.png'
        },
        {
            name: 'STANAG 50 Rnd',  //DONT NEED
            image: '/attachments/magazines/stanag50rnd.png'
        },
        {
            name: 'SAS Mag Clamp',  //DONT NEED
            image: '/attachments/magazines/sasmagclamp.png'
        },
        {
            name: 'Salvo 50 Rnd Fast Mag',  //DONT NEED
            image: '/attachments/magazines/salvo50rndfastmag.png'
        },
    ];


    var magazine = false;
    // //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt6").innerHTML = "";

    if (attArr.includes(5)) {
        magazine = true;

    }

    if (magazine != false) {
        var ranMagazine = Math.floor(Math.random() * magazines.length) + 0;


        var magazinePick = magazines[ranMagazine];

        //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt6").innerHTML = '<b>' + "Magazine -  " + '</b>' + magazinePick.name + '<br>' + '<img  style="width:200px;" alt="'+magazinePick.name + '"  src="' + magazinePick.image + '">';
    }

     if (magazine != true){
        document.getElementById("primaryAtt6").innerHTML = '<b>' + "Magazine -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }





    //Handle

    var handles = [
        {
            name: 'Speed Tape',  //DONT NEED
            image: '/attachments/handles/speedtape.png'
        },
        {
            name: 'Dropshot Wrap', //DONT NEED
            image: '/attachments/handles/dropshotwrap.png'
        },
        {
            name: 'Field Tape', //DONT NEED
            image: '/attachments/handles/fieldtape.png'
        },
        {
            name: 'SARS Jungle Grip', //DONT NEED
            image: '/attachments/handles/sarsjunglegrip.png'
        },
        {
            name: 'Serpent Wrap',//DONT NEED
            image: '/attachments/handles/serpentwrap.png'
        },
        {
            name: 'Airborne Elastic Wrap', //DONT NEED
            image: '/attachments/handles/airborneelasticwrap.png'
        },
    ];


    var handle = false;
    //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt7").innerHTML = "";

    if (attArr.includes(6)) {
        handle = true;

    }

    if (handle != false) {
        var ranHandle = Math.floor(Math.random() * handles.length) + 0;
        

        var handlePick = handles[ranHandle];

        //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt7").innerHTML = '<b>' + "Handle -  " + '</b>' + handlePick.name + '<br>' + '<img  style="width:200px;" alt="'+ handlePick.name +'" src="' + handlePick.image + '">';
    }

     if (handle != true){
        document.getElementById("primaryAtt7").innerHTML = '<b>' + "Handle -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }


    //Stock

    var stocks = [
        {
            name: 'Tactical Stock', //DONT NEED
            image: '/attachments/stocks/tacticalstock.png'
        },
        {
            name: 'Marathon Stock',  //DONT NEED
            image: '/attachments/stocks/marathonstock.png'
        },
        {
            name: 'Duster Pad',  //DONT NEED
            image: '/attachments/stocks/dusterpad.png'
        },
        {
            name: 'CQB Pad',  //DONT NEED
            image: '/attachments/stocks/cqbpad.png'
        },
        {
            name: 'SAS Combat Stock',  //DONT NEED
            image: '/attachments/stocks/sascombatstock.png'
        },
        {
            name: 'Raider Stock',  //DONT NEED
            image: '/attachments/stocks/raiderstock.png'
        },
    ];


    var stock = false;
    //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt8").innerHTML = "";

    if (attArr.includes(7)) {
        stock = true;

    }

    if (stock != false) {
        var ranStock = Math.floor(Math.random() * stocks.length) + 0;
        

        var stockPick = stocks[ranStock];

        //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt8").innerHTML = '<b>' + "Stock -  " + '</b>' + stockPick.name + '<br>' + '<img  style="width:200px;" alt="'+stockPick.name + '" src="' + stockPick.image + '">';
    }

    if (stock != true){
        document.getElementById("primaryAtt8").innerHTML = '<b>' + "Stock -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }

}


//FFAR 1
function ffar1() {
    var numAttachments = [0, 1, 2, 3, 4, 5, 6, 7];
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
            name: 'millstop reflex', //DONT NEED
            image: '/attachments/optics/millstopreflex.png'
        },
        {
            name: 'Visiontexh 2x', //DONT NEED
            image: '/attachments/optics/visiontech2x.png'
        },
        {
            name: 'Kobra Red Dot', //DONT NEED
            image: '/attachments/optics/kobrareddot.png'
        },
        {
            name: 'Quickdot LED',//DONT NEED
            image: '/attachments/optics/quickdotled.png'
        },
        {
            name: 'Axial Arms 3x', //DONT NEED
            image: '/attachments/optics/axialarms3x.png'
        },
        {
            name: 'Sillix Holoscout', //DONT NEED
            image: '/attachments/optics/sillixholosxout.png'
        },
        {
            name: 'Microflex LED', //DONT NEED
            image: '/attachments/optics/microflexled.png'
        },
        {
            name: 'Hawksmoor', //DONT NEED
            image: '/attachments/optics/hawksmoor.png'
        },
        {
            name: 'Royal & Kross 4x', //DONT NEED
            image: '/attachments/optics/royalandkross4x.png'
        },
        {
            name: 'SUSAT Multizoom', //DONT NEED
            image: '/attachments/optics/susatmultizoom.png'
        },
        {
            name: 'Diamondback Reflex', //DONT NEED
            image: '/attachments/optics/diamondbackreflex.png'
        },
        {
            name: 'AN/PVS-4 Thermal', //DONT NEED
            image: '/attachments/optics/anpvs4thermal.png'
        }
    ];


    var optic = false;
    // //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt1").innerHTML = "";

    if (attArr.includes(0)) {
        optic = true;
    }

    if (optic != false) {
       
        var ranOptic = Math.floor(Math.random() * optics.length) + 0;

        var opticPick = optics[ranOptic];

        // //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt1").innerHTML = '<b>' + "Optic -  " + '</b>' + opticPick.name + '<br>' + '<img  style="width:200px;"  alt="' + opticPick.name +'" src="' + opticPick.image + '">';
    }

     if(optic != true){
        document.getElementById("primaryAtt1").innerHTML = '<b>' + "Optic -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }

    //Muzzle

    var muzzles = [
        {
            name: 'Muzzle Brake 5.56', //DONT NEED
            image: '/attachments/muzzles/muzzlebrake556.png'
        },
        {
            name: 'Flashguard 5.56', //DONT NEED
            image: '/attachments/muzzles/flashguard556.png'
        },
        {
            name: 'Suppressor', //DONT NEED
            image: '/attachments/muzzles/suppressor.png'
        },
        {
            name: 'Infantry Compensator', //DONT NEED
            image: '/attachments/muzzles/infantrycompensator.png'
        },
        {
            name: 'SOCOM Eliminator', //DONT NEED
            image: '/attachments/muzzles/socomeliminator.png'
        },
        {
            name: 'Agency Suppressor',//DONT NEED //DONT NEED
            image: '/attachments/muzzles/agencysuppressor.png'
        },
    ];


    var muzzle = false;
    // //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt2").innerHTML = "";

    if (attArr.includes(1)) {
        muzzle = true;
    }

    if (muzzle != false) {

        var ranMuzzle = Math.floor(Math.random() * muzzles.length) + 0;

        var muzzlePick = muzzles[ranMuzzle];

        //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt2").innerHTML = '<b>' + "Muzzle -  " + '</b>' + muzzlePick.name + '<br>' + '<img  style="width:200px;"  alt="' + muzzlePick.name +'" src="' + muzzlePick.image + '">';
    }

     if(muzzle != true) {
        document.getElementById("primaryAtt2").innerHTML = '<b>' + "Muzzle -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }


    //Barrels

    var barrels = [
        {
            name: '17.9 Ulgralight',
            image: '/attachments/barrels/179ultralight.png'
        },
        {
            name: '18.7 Cavalry Lancer',
            image: '/attachments/barrels/187cavalrylancer.png'
        },
        {
            name: '19.5 Reinforced Heavy',
            image: '/attachments/barrels/195reinforcedheavy.png'
        },
        {
            name: '21.2 Ranger',
            image: '/attachments/barrels/212ranger.png'
        },
        {
            name: '20.3 Takedown',
            image: '/attachments/barrels/203takedown.png'
        },
        {
            name: '19.5 Task Force',
            image: '/attachments/barrels/195taskforce.png'
        },
    ];


    var barrel = false;
    // //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt3").innerHTML = "";

    if (attArr.includes(2)) {
        barrel = true;

    }

    if (barrel != false) {

        var ranBarrel = Math.floor(Math.random() * barrels.length) + 0;

        var barrelPick = barrels[ranBarrel];
        // //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt3").innerHTML = '<b>' + "Barrel -  " + '</b>' + barrelPick.name + '<br>' + '<img  style="width:200px;" alt="'+ barrelPick.name + '"  src="' + barrelPick.image + '">';
    }

     if (barrel != true){
        document.getElementById("primaryAtt3").innerHTML = '<b>' + "Barrel -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }


    //Body

    var bodys = [
        {
            name: 'Steady Aim Laser', //DONT NEED
            image: '/attachments/bodys/steadyaimlaser.png'
        },
        {
            name: 'Mounted Flashlight', //DONT NEED
            image: '/attachments/bodys/mountedflashlight.png'
        },
        {
            name: 'SOF Target Designator', //DONT NEED
            image: '/attachments/bodys/softargetdesignator.png'
        },
        {
            name: 'SWAT 5mw Laser Sight', //DONT NEED
            image: '/attachments/bodys/swat5mwlasersight.png'
        },
        {
            name: 'Tiger Team Spotlight', //DONT NEED
            image: '/attachments/bodys/tigerteamspotlight.png'
        },
        {
            name: 'Ember Sighting Point', //DONT NEED
            image: '/attachments/bodys/embersightingpoint.png'
        },
    ];


    var body = false;
    // //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt4").innerHTML = "";

    if (attArr.includes(3)) {
        body = true;
        
    }

    if (body != false) {
        var ranBody = Math.floor(Math.random() * bodys.length) + 0;
        
        

        var bodyPick = bodys[ranBody];

        // //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt4").innerHTML = '<b>' + "Body -  " + '</b>' + bodyPick.name + '<br>' + '<img  style="width:200px;" alt="'+ bodyPick.name + '" src="' + bodyPick.image + '">';
    }


     if (body != true) {
        document.getElementById("primaryAtt4").innerHTML = '<b>' + "Body -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }

    //Underbarrel

    var underbarrels = [
        {
            name: 'Foregrip', //DONT NEED
            image: '/attachments/underbarrel/foregrip.png'
        },
        {
            name: 'Infiltrator Grip', //DONT NEED
            image: '/attachments/underbarrel/infiltratorgrip.png'
        },
        {
            name: 'Patrol Grip',  //DONT NEED
            image: '/attachments/underbarrel/patrolgrip.png'
        },
        {
            name: 'Bruiser Grip',  //DONT NEED
            image: '/attachments/underbarrel/bruisergrip.png'
        },
        {
            name: 'Field Agent Grip',  //DONT NEED
            image: '/attachments/underbarrel/fieldagentgrip.png'
        },
        {
            name: 'SFOD Speedgrip',  //DONT NEED
            image: '/attachments/underbarrel/sfodspeedgrip.png'
        },
    ];


    var underbarrel = false;
    // //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt5").innerHTML = "";

    if (attArr.includes(4)) {
        underbarrel = true;

    }

    if (underbarrel != false) {
        var ranUnderbarrel = Math.floor(Math.random() * underbarrels.length) + 0;

        var underbarrelPick = underbarrels[ranUnderbarrel];
 
        // //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt5").innerHTML = '<b>' + "Underbarrel -  " + '</b>' + underbarrelPick.name + '<br>' + '<img  style="width:200px;" alt="'+ underbarrelPick.name +'"  src="' + underbarrelPick.image + '">';
    }


     if (underbarrel != true){
        document.getElementById("primaryAtt5").innerHTML = '<b>' + "Underbarrel -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }


    //Magazine

    var magazines = [
        {
            name: '34 RND', 
            image: '/attachments/magazines/34rnd.png'
        },
        {
            name: 'Jungle-Style Mag', //DONT NEED
            image: '/attachments/magazines/junglestylemag.png'
        },
        {
            name: '34 Rnd Speed Mag', 
            image: '/attachments/magazines/34rndspeedmag.png'
        },
        {
            name: 'STANAG 44 Rnd', 
            image: '/attachments/magazines/stanag44rnd.png'
        },
        {
            name: 'SAS Mag Clamp',  //DONT NEED
            image: '/attachments/magazines/sasmagclamp.png'
        },
        {
            name: 'Salvo 44 Rnd Fast Mag', 
            image: '/attachments/magazines/salvo44rndfastmag.png'
        },
    ];


    var magazine = false;
    // //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt6").innerHTML = "";

    if (attArr.includes(5)) {
        magazine = true;

    }

    if (magazine != false) {
        var ranMagazine = Math.floor(Math.random() * magazines.length) + 0;


        var magazinePick = magazines[ranMagazine];

        //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt6").innerHTML = '<b>' + "Magazine -  " + '</b>' + magazinePick.name + '<br>' + '<img  style="width:200px;" alt="'+magazinePick.name + '"  src="' + magazinePick.image + '">';
    }

     if (magazine != true){
        document.getElementById("primaryAtt6").innerHTML = '<b>' + "Magazine -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }





    //Handle

    var handles = [
        {
            name: 'Speed Tape',  //DONT NEED
            image: '/attachments/handles/speedtape.png'
        },
        {
            name: 'Dropshot Wrap', //DONT NEED
            image: '/attachments/handles/dropshotwrap.png'
        },
        {
            name: 'Field Tape', //DONT NEED
            image: '/attachments/handles/fieldtape.png'
        },
        {
            name: 'SARS Jungle Grip', //DONT NEED
            image: '/attachments/handles/sarsjunglegrip.png'
        },
        {
            name: 'Serpent Wrap',//DONT NEED
            image: '/attachments/handles/serpentwrap.png'
        },
        {
            name: 'Airborne Elastic Wrap', //DONT NEED
            image: '/attachments/handles/airborneelasticwrap.png'
        },
    ];


    var handle = false;
    //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt7").innerHTML = "";

    if (attArr.includes(6)) {
        handle = true;

    }

    if (handle != false) {
        var ranHandle = Math.floor(Math.random() * handles.length) + 0;
        

        var handlePick = handles[ranHandle];

        //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt7").innerHTML = '<b>' + "Handle -  " + '</b>' + handlePick.name + '<br>' + '<img  style="width:200px;" alt="'+ handlePick.name +'" src="' + handlePick.image + '">';
    }

     if (handle != true){
        document.getElementById("primaryAtt7").innerHTML = '<b>' + "Handle -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }


    //Stock

    var stocks = [
        {
            name: 'Tactical Stock', //DONT NEED
            image: '/attachments/stocks/tacticalstock.png'
        },
        {
            name: 'Marathon Stock', 
            image: '/attachments/stocks/marathonstock.png'
        },
        {
            name: 'Duster Pad', 
            image: '/attachments/stocks/dusterpad.png'
        },
        {
            name: 'CQB Pad', 
            image: '/attachments/stocks/cqbpad.png'
        },
        {
            name: 'SAS Combat Stock',  //DONT NEED
            image: '/attachments/stocks/sascombatstock.png'
        },
        {
            name: 'Raider Stock',  //DONT NEED
            image: '/attachments/stocks/raiderstock.png'
        },
    ];


    var stock = false;
    //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt8").innerHTML = "";

    if (attArr.includes(7)) {
        stock = true;

    }

    if (stock != false) {
        var ranStock = Math.floor(Math.random() * stocks.length) + 0;
        

        var stockPick = stocks[ranStock];

        //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt8").innerHTML = '<b>' + "Stock -  " + '</b>' + stockPick.name + '<br>' + '<img  style="width:200px;" alt="'+stockPick.name + '" src="' + stockPick.image + '">';
    }

    if (stock != true){
        document.getElementById("primaryAtt8").innerHTML = '<b>' + "Stock -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }

}



//Groza
function groza() {
    var numAttachments = [0, 1, 2, 3, 4, 5, 6, 7];
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
            name: 'millstop reflex', //DONT NEED
            image: '/attachments/optics/millstopreflex.png'
        },
        {
            name: 'Visiontexh 2x', //DONT NEED
            image: '/attachments/optics/visiontech2x.png'
        },
        {
            name: 'Kobra Red Dot', //DONT NEED
            image: '/attachments/optics/kobrareddot.png'
        },
        {
            name: 'Quickdot LED',//DONT NEED
            image: '/attachments/optics/quickdotled.png'
        },
        {
            name: 'Axial Arms 3x', //DONT NEED
            image: '/attachments/optics/axialarms3x.png'
        },
        {
            name: 'Sillix Holoscout', //DONT NEED
            image: '/attachments/optics/sillixholosxout.png'
        },
        {
            name: 'Microflex LED', //DONT NEED
            image: '/attachments/optics/microflexled.png'
        },
        {
            name: 'Hawksmoor', //DONT NEED
            image: '/attachments/optics/hawksmoor.png'
        },
        {
            name: 'Royal & Kross 4x', //DONT NEED
            image: '/attachments/optics/royalandkross4x.png'
        },
        {
            name: 'SUSAT Multizoom', //DONT NEED
            image: '/attachments/optics/susatmultizoom.png'
        },
        {
            name: 'Diamondback Reflex', //DONT NEED
            image: '/attachments/optics/diamondbackreflex.png'
        },
        {
            name: 'Noch Sova Thermal', //DONT NEED
            image: '/attachments/optics/nochsovathermal.png'
        }
    ];


    var optic = false;
    // //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt1").innerHTML = "";

    if (attArr.includes(0)) {
        optic = true;
    }

    if (optic != false) {
       
        var ranOptic = Math.floor(Math.random() * optics.length) + 0;

        var opticPick = optics[ranOptic];

        // //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt1").innerHTML = '<b>' + "Optic -  " + '</b>' + opticPick.name + '<br>' + '<img  style="width:200px;"  alt="' + opticPick.name +'" src="' + opticPick.image + '">';
    }

     if(optic != true){
        document.getElementById("primaryAtt1").innerHTML = '<b>' + "Optic -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }

    //Muzzle

    var muzzles = [
        {
            name: 'Muzzle Brake 7.62',  //NEED
            image: '/attachments/muzzles/muzzlebrake762.png'
        },
        {
            name: 'Flashguard 7.62', //DONT NEED
            image: '/attachments/muzzles/flashguard762.png'
        },
        {
            name: 'Suppressor', //DONT NEED
            image: '/attachments/muzzles/suppressor.png'
        },
        {
            name: 'Spetsnaz Compensator', //DONT NEED
            image: '/attachments/muzzles/spetsnazcompensator.png'
        },
        {
            name: 'KGB Eliminator', //DONT NEED
            image: '/attachments/muzzles/kgbeliminator.png'
        },
        {
            name: 'GRU Suppressor', //DONT NEED
            image: '/attachments/muzzles/grusuppressor.png'
        },
    ];


    var muzzle = false;
    // //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt2").innerHTML = "";

    if (attArr.includes(1)) {
        muzzle = true;
    }

    if (muzzle != false) {

        var ranMuzzle = Math.floor(Math.random() * muzzles.length) + 0;

        var muzzlePick = muzzles[ranMuzzle];

        //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt2").innerHTML = '<b>' + "Muzzle -  " + '</b>' + muzzlePick.name + '<br>' + '<img  style="width:200px;"  alt="' + muzzlePick.name +'" src="' + muzzlePick.image + '">';
    }

     if(muzzle != true) {
        document.getElementById("primaryAtt2").innerHTML = '<b>' + "Muzzle -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }


    //Barrels

    var barrels = [
        {
            name: '15.3 Ultralight', //NEED
            image: '/attachments/barrels/153ultralight.png'
        },
        {
            name: '16.2 Cavalry Lancer', //NEED
            image: '/attachments/barrels/162cavalrylancer.png'
        },
        {
            name: '16.7 VDV Reinforced', //NEED
            image: '/attachments/barrels/167vdvreinforced.png'
        },
        {
            name: '16.2 GRU Composite', //NEED
            image: '/attachments/barrels/162grucomposite.png'
        },
        {
            name: '15.7 Contour M2', //NEED
            image: '/attachments/barrels/157contourm2.png'
        },
        {
            name: '16.5 CMV Mil-Spec', //NEED
            image: '/attachments/barrels/165cmvmilspec.png'
        },
    ];


    var barrel = false;
    // //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt3").innerHTML = "";

    if (attArr.includes(2)) {
        barrel = true;

    }

    if (barrel != false) {

        var ranBarrel = Math.floor(Math.random() * barrels.length) + 0;

        var barrelPick = barrels[ranBarrel];
        // //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt3").innerHTML = '<b>' + "Barrel -  " + '</b>' + barrelPick.name + '<br>' + '<img  style="width:200px;" alt="'+ barrelPick.name + '"  src="' + barrelPick.image + '">';
    }

     if (barrel != true){
        document.getElementById("primaryAtt3").innerHTML = '<b>' + "Barrel -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }


    //Body

    var bodys = [
        {
            name: 'Steady Aim Laser', //DONT NEED
            image: '/attachments/bodys/steadyaimlaser.png'
        },
        {
            name: 'Mounted Flashlight', //DONT NEED
            image: '/attachments/bodys/mountedflashlight.png'
        },
        {
            name: 'KGB Target Designator', //DONT NEED
            image: '/attachments/bodys/kgbtargetdesignator.png'
        },
        {
            name: 'GRU 5mw Laser Sight',  //DONT NEED
            image: '/attachments/bodys/gru5mwlasersight.png'
        },
        {
            name: 'Tiger Team Spotlight', //DONT NEED
            image: '/attachments/bodys/tigerteamspotlight.png'
        },
        {
            name: 'Ember Sighting Point', //DONT NEED
            image: '/attachments/bodys/embersightingpoint.png'
        },
    ];


    var body = false;
    // //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt4").innerHTML = "";

    if (attArr.includes(3)) {
        body = true;
        
    }

    if (body != false) {
        var ranBody = Math.floor(Math.random() * bodys.length) + 0;
        
        

        var bodyPick = bodys[ranBody];

        // //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt4").innerHTML = '<b>' + "Body -  " + '</b>' + bodyPick.name + '<br>' + '<img  style="width:200px;" alt="'+ bodyPick.name + '" src="' + bodyPick.image + '">';
    }


     if (body != true) {
        document.getElementById("primaryAtt4").innerHTML = '<b>' + "Body -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }

    //Underbarrel

    var underbarrels = [
        {
            name: 'Foregrip', //DONT NEED
            image: '/attachments/underbarrel/foregrip.png'
        },
        {
            name: 'Infiltrator Grip', //DONT NEED
            image: '/attachments/underbarrel/infiltratorgrip.png'
        },
        {
            name: 'Patrol Grip',  //DONT NEED
            image: '/attachments/underbarrel/patrolgrip.png'
        },
        {
            name: 'Bruiser Grip',  //DONT NEED
            image: '/attachments/underbarrel/bruisergrip.png'
        },
        {
            name: 'Spetsnaz Grip',  //DONT NEED
            image: '/attachments/underbarrel/spetsnazgrip.png'
        },
        {
            name: 'Spetsnaz Speedgrip', //DONT NEED
            image: '/attachments/underbarrel/spetsnazspeedgrip.png'
        },
    ];


    var underbarrel = false;
    // //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt5").innerHTML = "";

    if (attArr.includes(4)) {
        underbarrel = true;

    }

    if (underbarrel != false) {
        var ranUnderbarrel = Math.floor(Math.random() * underbarrels.length) + 0;

        var underbarrelPick = underbarrels[ranUnderbarrel];
 
        // //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt5").innerHTML = '<b>' + "Underbarrel -  " + '</b>' + underbarrelPick.name + '<br>' + '<img  style="width:200px;" alt="'+ underbarrelPick.name +'"  src="' + underbarrelPick.image + '">';
    }


     if (underbarrel != true){
        document.getElementById("primaryAtt5").innerHTML = '<b>' + "Underbarrel -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }


    //Magazine

    var magazines = [
        {
            name: '40 Rnd', //DONT NEED
            image: '/attachments/magazines/40rnd.png'
        },
        {
            name: 'Taped Mags', //DONT NEED
            image: '/attachments/magazines/tapedmags.png'
        },
        {
            name: '40 Rnd Speed Mag', //DONT NEED
            image: '/attachments/magazines/40rndspeedmag.png'
        },
        {
            name: 'Spetsnaz 50 Rnd Drum',  //NEED
            image: '/attachments/magazines/spetsnaz5ornddrum.png'
        },
        {
            name: 'GRU Mag Clamp', //DONT NEED
            image: '/attachments/magazines/grumagclamp.png'
        },
        {
            name: 'VDV 50 Rnd Fast Mag', //DONT NEED
            image: '/attachments/magazines/vdv50rndfastmag.png'
        },
    ];


    var magazine = false;
    // //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt6").innerHTML = "";

    if (attArr.includes(5)) {
        magazine = true;

    }

    if (magazine != false) {
        var ranMagazine = Math.floor(Math.random() * magazines.length) + 0;


        var magazinePick = magazines[ranMagazine];

        //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt6").innerHTML = '<b>' + "Magazine -  " + '</b>' + magazinePick.name + '<br>' + '<img  style="width:200px;" alt="'+magazinePick.name + '"  src="' + magazinePick.image + '">';
    }

     if (magazine != true){
        document.getElementById("primaryAtt6").innerHTML = '<b>' + "Magazine -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }





    //Handle

    var handles = [
        {
            name: 'Speed Tape',  //DONT NEED
            image: '/attachments/handles/speedtape.png'
        },
        {
            name: 'Dropshot Wrap', //DONT NEED
            image: '/attachments/handles/dropshotwrap.png'
        },
        {
            name: 'Field Tape', //DONT NEED
            image: '/attachments/handles/fieldtape.png'
        },
        {
            name: 'Spetsnaz Field Grip',  //NEED
            image: '/attachments/handles/spetsnazfieldgrip.png'
        },
        {
            name: 'Serpent Wrap',//DONT NEED
            image: '/attachments/handles/serpentwrap.png'
        },
        {
            name: 'GRU Elastic Wrap', //DONT NEED
            image: '/attachments/handles/gruelasticwrap.png'
        },
    ];


    var handle = false;
    //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt7").innerHTML = "";

    if (attArr.includes(6)) {
        handle = true;

    }

    if (handle != false) {
        var ranHandle = Math.floor(Math.random() * handles.length) + 0;
        

        var handlePick = handles[ranHandle];

        //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt7").innerHTML = '<b>' + "Handle -  " + '</b>' + handlePick.name + '<br>' + '<img  style="width:200px;" alt="'+ handlePick.name +'" src="' + handlePick.image + '">';
    }

     if (handle != true){
        document.getElementById("primaryAtt7").innerHTML = '<b>' + "Handle -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }


    //Stock

    var stocks = [
        {
            name: 'Tactical Stock', //DONT NEED
            image: '/attachments/stocks/tacticalstock.png'
        },
        {
            name: 'Marathon Stock',  //DONT NEED
            image: '/attachments/stocks/marathonstock.png'
        },
        {
            name: 'Duster Pad',  //DONT NEED
            image: '/attachments/stocks/dusterpad.png'
        },
        {
            name: 'CQB Pad',  //DONT NEED
            image: '/attachments/stocks/cqbpad.png'
        },
        {
            name: 'Spetsnaz PKM Stock', //DONT NEED
            image: '/attachments/stocks/spetsnazpkmstock.png'
        },
        {
            name: 'KGB Pad',  //NEED
            image: '/attachments/stocks/kgbpad.png'
        },
    ];


    var stock = false;
    //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt8").innerHTML = "";

    if (attArr.includes(7)) {
        stock = true;

    }

    if (stock != false) {
        var ranStock = Math.floor(Math.random() * stocks.length) + 0;
        

        var stockPick = stocks[ranStock];

        //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt8").innerHTML = '<b>' + "Stock -  " + '</b>' + stockPick.name + '<br>' + '<img  style="width:200px;" alt="'+stockPick.name + '" src="' + stockPick.image + '">';
    }

    if (stock != true){
        document.getElementById("primaryAtt8").innerHTML = '<b>' + "Stock -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }

}



//Mp5
function mp5() {
    var numAttachments = [0, 1, 2, 3, 4, 5, 6, 7];
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
            name: 'Quickdot LED',//DONT NEED
            image: '/attachments/optics/quickdotled.png'
        },
        {
            name: 'millstop reflex', //DONT NEED
            image: '/attachments/optics/millstopreflex.png'
        },
        {
            name: 'Kobra Red Dot', //DONT NEED
            image: '/attachments/optics/kobrareddot.png'
        },
        {
            name: 'Visiontech 2x', //DONT NEED
            image: '/attachments/optics/visiontech2x.png'
        },
        {
            name: 'Microflex LED', //DONT NEED
            image: '/attachments/optics/microflexled.png'
        },
        {
            name: 'Hawksmoor', //DONT NEED
            image: '/attachments/optics/hawksmoor.png'
        },
        {
            name: 'SnapPoint',
            image: '/attachments/optics/snappoint.png'
        },
        {
            name: 'Diamondback Reflex', //DONT NEED
            image: '/attachments/optics/diamondbackreflex.png'
        },
        {
            name: 'Sillix Holoscout', //DONT NEED
            image: '/attachments/optics/sillixholosxout.png'
        },
        {
            name: 'Fastpoint Reflex',
            image: '/attachments/optics/fastpointreflex.png'
        },
        {
            name: 'Axial Arms 3x', //DONT NEED
            image: '/attachments/optics/axialarms3x.png'
        },
        {
            name: 'SUSAT Multizoom', //DONT NEED
            image: '/attachments/optics/susatmultizoom.png'
        },
    ];


    var optic = false;
    // //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt1").innerHTML = "";

    if (attArr.includes(0)) {
        optic = true;
    }

    if (optic != false) {
       
        var ranOptic = Math.floor(Math.random() * optics.length) + 0;

        var opticPick = optics[ranOptic];

        // //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt1").innerHTML = '<b>' + "Optic -  " + '</b>' + opticPick.name + '<br>' + '<img  style="width:200px;"  alt="' + opticPick.name +'" src="' + opticPick.image + '">';
    }

     if(optic != true){
        document.getElementById("primaryAtt1").innerHTML = '<b>' + "Optic -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
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
            name: 'Sound Suppressor', //DONT NEED
            image: '/attachments/muzzles/soundsuppressor.png'
        },
        {
            name: 'Infantry Compensator', //DONT NEED
            image: '/attachments/muzzles/infantrycompensator.png'
        },
        {
            name: 'SOCOM Eliminator', //DONT NEED
            image: '/attachments/muzzles/socomeliminator.png'
        },
        {
            name: 'Agency Suppressor',//DONT NEED
            image: '/attachments/muzzles/agencysuppressor.png'
        },
    ];


    var muzzle = false;
    // //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt2").innerHTML = "";

    if (attArr.includes(1)) {
        muzzle = true;
    }

    if (muzzle != false) {

        var ranMuzzle = Math.floor(Math.random() * muzzles.length) + 0;

        var muzzlePick = muzzles[ranMuzzle];

        //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt2").innerHTML = '<b>' + "Muzzle -  " + '</b>' + muzzlePick.name + '<br>' + '<img  style="width:200px;"  alt="' + muzzlePick.name +'" src="' + muzzlePick.image + '">';
    }

     if(muzzle != true) {
        document.getElementById("primaryAtt2").innerHTML = '<b>' + "Muzzle -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }


    //Barrels

    var barrels = [
        {
            name: '9.5 Extended', 
            image: '/attachments/barrels/95extended.png'
        },
        {
            name: '10.1 Cavalry Lancer', 
            image: '/attachments/barrels/101cavalrylancer.png'
        },
        {
            name: '9.5 Reinforced Heavy', 
            image: '/attachments/barrels/95reinforcedheavy.png'
        },
        {
            name: '9.5 Ranger', 
            image: '/attachments/barrels/95ranger.png'
        },
        {
            name: '9.1 Rifled', 
            image: '/attachments/barrels/91rifled.png'
        },
        {
            name: '9.5 Task Force', 
            image: '/attachments/barrels/95taskforce.png'
        },
    ];


    var barrel = false;
    // //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt3").innerHTML = "";

    if (attArr.includes(2)) {
        barrel = true;

    }

    if (barrel != false) {

        var ranBarrel = Math.floor(Math.random() * barrels.length) + 0;

        var barrelPick = barrels[ranBarrel];
        // //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt3").innerHTML = '<b>' + "Barrel -  " + '</b>' + barrelPick.name + '<br>' + '<img  style="width:200px;" alt="'+ barrelPick.name + '"  src="' + barrelPick.image + '">';
    }

     if (barrel != true){
        document.getElementById("primaryAtt3").innerHTML = '<b>' + "Barrel -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }


    //Body

    var bodys = [
        {
            name: 'Steady Aim Laser', //DONT NEED
            image: '/attachments/bodys/steadyaimlaser.png'
        },
        {
            name: 'Mounted Flashlight', //DONT NEED
            image: '/attachments/bodys/mountedflashlight.png'
        },
        {
            name: 'SOF Target Designator', //DONT NEED
            image: '/attachments/bodys/softargetdesignator.png'
        },
        {
            name: 'SWAT 5mw Laser Sight', //DONT NEED
            image: '/attachments/bodys/swat5mwlasersight.png'
        },
        {
            name: 'Tiger Team Spotlight', //DONT NEED
            image: '/attachments/bodys/tigerteamspotlight.png'
        },
        {
            name: 'Ember Sighting Point', //DONT NEED
            image: '/attachments/bodys/embersightingpoint.png'
        },
    ];


    var body = false;
    // //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt4").innerHTML = "";

    if (attArr.includes(3)) {
        body = true;
        
    }

    if (body != false) {
        var ranBody = Math.floor(Math.random() * bodys.length) + 0;
        
        

        var bodyPick = bodys[ranBody];

        // //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt4").innerHTML = '<b>' + "Body -  " + '</b>' + bodyPick.name + '<br>' + '<img  style="width:200px;" alt="'+ bodyPick.name + '" src="' + bodyPick.image + '">';
    }


     if (body != true) {
        document.getElementById("primaryAtt4").innerHTML = '<b>' + "Body -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }

    //Underbarrel

    var underbarrels = [
        {
            name: 'Foregrip', //DONT NEED
            image: '/attachments/underbarrel/foregrip.png'
        },
        {
            name: 'Red Cell Foregrip', 
            image: '/attachments/underbarrel/redcellforegrip.png'
        },
        {
            name: 'Patrol Grip',  //DONT NEED
            image: '/attachments/underbarrel/patrolgrip.png'
        },
        {
            name: 'Bruiser Grip',  //DONT NEED
            image: '/attachments/underbarrel/bruisergrip.png'
        },
        {
            name: 'Field Agent Grip',  //DONT NEED
            image: '/attachments/underbarrel/fieldagentgrip.png'
        },
        {
            name: 'SFOD Speedgrip',  //DONT NEED
            image: '/attachments/underbarrel/sfodspeedgrip.png'
        },
    ];


    var underbarrel = false;
    // //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt5").innerHTML = "";

    if (attArr.includes(4)) {
        underbarrel = true;

    }

    if (underbarrel != false) {
        var ranUnderbarrel = Math.floor(Math.random() * underbarrels.length) + 0;

        var underbarrelPick = underbarrels[ranUnderbarrel];
 
        // //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt5").innerHTML = '<b>' + "Underbarrel -  " + '</b>' + underbarrelPick.name + '<br>' + '<img  style="width:200px;" alt="'+ underbarrelPick.name +'"  src="' + underbarrelPick.image + '">';
    }


     if (underbarrel != true){
        document.getElementById("primaryAtt5").innerHTML = '<b>' + "Underbarrel -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }


    //Magazine

    var magazines = [
        {
            name: '40 RND Drum', 
            image: '/attachments/magazines/40rnddrum.png'
        },
        {
            name: 'Jungle-Style Mag', //DONT NEED
            image: '/attachments/magazines/junglestylemag.png'
        },
        {
            name: '40 Rnd Speed Mag', //DONT NEED
            image: '/attachments/magazines/40rndspeedmag.png'
        },
        {
            name: 'STANAG 50 Rnd Drum', 
            image: '/attachments/magazines/stanag50rnddrum.png'
        },
        {
            name: 'SAS Mag Clamp',  //DONT NEED
            image: '/attachments/magazines/sasmagclamp.png'
        },
        {
            name: 'Salvo 50 Rnd Fast Mag',  //DONT NEED
            image: '/attachments/magazines/salvo50rndfastmag.png'
        },
    ];


    var magazine = false;
    // //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt6").innerHTML = "";

    if (attArr.includes(5)) {
        magazine = true;

    }

    if (magazine != false) {
        var ranMagazine = Math.floor(Math.random() * magazines.length) + 0;


        var magazinePick = magazines[ranMagazine];

        //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt6").innerHTML = '<b>' + "Magazine -  " + '</b>' + magazinePick.name + '<br>' + '<img  style="width:200px;" alt="'+magazinePick.name + '"  src="' + magazinePick.image + '">';
    }

     if (magazine != true){
        document.getElementById("primaryAtt6").innerHTML = '<b>' + "Magazine -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }





    //Handle

    var handles = [
        {
            name: 'Speed Tape',  //DONT NEED
            image: '/attachments/handles/speedtape.png'
        },
        {
            name: 'Dropshot Wrap', //DONT NEED
            image: '/attachments/handles/dropshotwrap.png'
        },
        {
            name: 'Field Tape', //DONT NEED
            image: '/attachments/handles/fieldtape.png'
        },
        {
            name: 'SARS Jungle Grip', //DONT NEED
            image: '/attachments/handles/sarsjunglegrip.png'
        },
        {
            name: 'Serpent Wrap',//DONT NEED
            image: '/attachments/handles/serpentwrap.png'
        },
        {
            name: 'Airborne Elastic Wrap', //DONT NEED
            image: '/attachments/handles/airborneelasticwrap.png'
        },
    ];


    var handle = false;
    //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt7").innerHTML = "";

    if (attArr.includes(6)) {
        handle = true;

    }

    if (handle != false) {
        var ranHandle = Math.floor(Math.random() * handles.length) + 0;
        

        var handlePick = handles[ranHandle];

        //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt7").innerHTML = '<b>' + "Handle -  " + '</b>' + handlePick.name + '<br>' + '<img  style="width:200px;" alt="'+ handlePick.name +'" src="' + handlePick.image + '">';
    }

     if (handle != true){
        document.getElementById("primaryAtt7").innerHTML = '<b>' + "Handle -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }


    //Stock

    var stocks = [
        {
            name: 'Tactical Stock', //DONT NEED
            image: '/attachments/stocks/tacticalstock.png'
        },
        {
            name: 'Collapsed Stock',
            image: '/attachments/stocks/collapsedstock.png'
        },
        {
            name: 'Duster Stock', //DONT NEED
            image: '/attachments/stocks/dusterstock.png'
        },
        {
            name: 'No Stock', //DONT NEED
            image: '/attachments/stocks/nostock.png'
        },
        {
            name: 'SAS Combat Stock',  //DONT NEED
            image: '/attachments/stocks/sascombatstock.png'
        },
        {
            name: 'Raider Stock',  //DONT NEED
            image: '/attachments/stocks/raiderstock.png'
        },
    ];


    var stock = false;
    //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt8").innerHTML = "";

    if (attArr.includes(7)) {
        stock = true;

    }

    if (stock != false) {
        var ranStock = Math.floor(Math.random() * stocks.length) + 0;
        

        var stockPick = stocks[ranStock];

        //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt8").innerHTML = '<b>' + "Stock -  " + '</b>' + stockPick.name + '<br>' + '<img  style="width:200px;" alt="'+stockPick.name + '" src="' + stockPick.image + '">';
    }

    if (stock != true){
        document.getElementById("primaryAtt8").innerHTML = '<b>' + "Stock -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }

}



//Milano 821
function milano821() {
    var numAttachments = [0, 1, 2, 3, 4, 5, 6, 7];
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
            name: 'Quickdot LED',//DONT NEED
            image: '/attachments/optics/quickdotled.png'
        },
        {
            name: 'millstop reflex', //DONT NEED
            image: '/attachments/optics/millstopreflex.png'
        },
        {
            name: 'Kobra Red Dot', //DONT NEED
            image: '/attachments/optics/kobrareddot.png'
        },
        {
            name: 'Visiontexh 2x', //DONT NEED
            image: '/attachments/optics/visiontech2x.png'
        },
        {
            name: 'Microflex LED', //DONT NEED
            image: '/attachments/optics/microflexled.png'
        },
        {
            name: 'Hawksmoor', //DONT NEED
            image: '/attachments/optics/hawksmoor.png'
        },
        {
            name: 'SnapPoint', //DONT NEED
            image: '/attachments/optics/snappoint.png'
        },
        {
            name: 'Diamondback Reflex', //DONT NEED
            image: '/attachments/optics/diamondbackreflex.png'
        },
        {
            name: 'Sillix Holoscout', //DONT NEED
            image: '/attachments/optics/sillixholosxout.png'
        },
        {
            name: 'Fastpoint Reflex', //DONT NEED
            image: '/attachments/optics/fastpointreflex.png'
        },
        {
            name: 'Axial Arms 3x', //DONT NEED
            image: '/attachments/optics/axialarms3x.png'
        },
        {
            name: 'SUSAT Multizoom', //DONT NEED
            image: '/attachments/optics/susatmultizoom.png'
        },
    ];


    var optic = false;
    // //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt1").innerHTML = "";

    if (attArr.includes(0)) {
        optic = true;
    }

    if (optic != false) {
       
        var ranOptic = Math.floor(Math.random() * optics.length) + 0;

        var opticPick = optics[ranOptic];

        // //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt1").innerHTML = '<b>' + "Optic -  " + '</b>' + opticPick.name + '<br>' + '<img  style="width:200px;"  alt="' + opticPick.name +'" src="' + opticPick.image + '">';
    }

     if(optic != true){
        document.getElementById("primaryAtt1").innerHTML = '<b>' + "Optic -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }

    //Muzzle

    var muzzles = [
        {
            name: 'Muzzle Brake 9',  //DONT NEED
            image: '/attachments/muzzles/muzzlebrake9.png'
        },
        {
            name: 'Flashguard 9',  //DONT NEED
            image: '/attachments/muzzles/flashguard9.png'
        },
        {
            name: 'Sound Suppressor', //DONT NEED
            image: '/attachments/muzzles/soundsuppressor.png'
        },
        {
            name: 'Infantry Compensator', //DONT NEED
            image: '/attachments/muzzles/infantrycompensator.png'
        },
        {
            name: 'SOCOM Eliminator', //DONT NEED
            image: '/attachments/muzzles/socomeliminator.png'
        },
        {
            name: 'Agency Suppressor',//DONT NEED
            image: '/attachments/muzzles/agencysuppressor.png'
        },
    ];


    var muzzle = false;
    // //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt2").innerHTML = "";

    if (attArr.includes(1)) {
        muzzle = true;
    }

    if (muzzle != false) {

        var ranMuzzle = Math.floor(Math.random() * muzzles.length) + 0;

        var muzzlePick = muzzles[ranMuzzle];

        //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt2").innerHTML = '<b>' + "Muzzle -  " + '</b>' + muzzlePick.name + '<br>' + '<img  style="width:200px;"  alt="' + muzzlePick.name +'" src="' + muzzlePick.image + '">';
    }

     if(muzzle != true) {
        document.getElementById("primaryAtt2").innerHTML = '<b>' + "Muzzle -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }


    //Barrels

    var barrels = [
        {
            name: '8.9 Extended',
            image: '/attachments/barrels/89extended.png'
        },
        {
            name: '9.5 Cavalry Lancer',
            image: '/attachments/barrels/95cavalrylancer.png'
        },
        {
            name: '10.1 Reinforced Heavy',
            image: '/attachments/barrels/101reinforcedheavy.png'
        },
        {
            name: '9.5 Rifled',
            image: '/attachments/barrels/95rifled.png'
        },
        {
            name: '10.6 Task Force',
            image: '/attachments/barrels/106taskforce.png'
        },
    ];


    var barrel = false;
    // //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt3").innerHTML = "";

    if (attArr.includes(2)) {
        barrel = true;

    }

    if (barrel != false) {

        var ranBarrel = Math.floor(Math.random() * barrels.length) + 0;

        var barrelPick = barrels[ranBarrel];
        // //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt3").innerHTML = '<b>' + "Barrel -  " + '</b>' + barrelPick.name + '<br>' + '<img  style="width:200px;" alt="'+ barrelPick.name + '"  src="' + barrelPick.image + '">';
    }

     if (barrel != true){
        document.getElementById("primaryAtt3").innerHTML = '<b>' + "Barrel -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }


    //Body

    var bodys = [
        {
            name: 'Steady Aim Laser', //DONT NEED
            image: '/attachments/bodys/steadyaimlaser.png'
        },
        {
            name: 'Mounted Flashlight', //DONT NEED
            image: '/attachments/bodys/mountedflashlight.png'
        },
        {
            name: 'SOF Target Designator', //DONT NEED
            image: '/attachments/bodys/softargetdesignator.png'
        },
        {
            name: 'SWAT 5mw Laser Sight', //DONT NEED
            image: '/attachments/bodys/swat5mwlasersight.png'
        },
        {
            name: 'Tiger Team Spotlight', //DONT NEED
            image: '/attachments/bodys/tigerteamspotlight.png'
        },
        {
            name: 'Ember Sighting Point', //DONT NEED
            image: '/attachments/bodys/embersightingpoint.png'
        },
    ];


    var body = false;
    // //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt4").innerHTML = "";

    if (attArr.includes(3)) {
        body = true;
        
    }

    if (body != false) {
        var ranBody = Math.floor(Math.random() * bodys.length) + 0;
        
        

        var bodyPick = bodys[ranBody];

        // //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt4").innerHTML = '<b>' + "Body -  " + '</b>' + bodyPick.name + '<br>' + '<img  style="width:200px;" alt="'+ bodyPick.name + '" src="' + bodyPick.image + '">';
    }


     if (body != true) {
        document.getElementById("primaryAtt4").innerHTML = '<b>' + "Body -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }

    //Underbarrel

    var underbarrels = [
        {
            name: 'Foregrip', //DONT NEED
            image: '/attachments/underbarrel/foregrip.png'
        },
        {
            name: 'Red Cell Foregrip',  //DONT NEED
            image: '/attachments/underbarrel/redcellforegrip.png'
        },
        {
            name: 'Patrol Grip',  //DONT NEED
            image: '/attachments/underbarrel/patrolgrip.png'
        },
        {
            name: 'Bruiser Grip',  //DONT NEED
            image: '/attachments/underbarrel/bruisergrip.png'
        },
        {
            name: 'Field Agent Grip',  //DONT NEED
            image: '/attachments/underbarrel/fieldagentgrip.png'
        },
        {
            name: 'SFOD Speedgrip',  //DONT NEED
            image: '/attachments/underbarrel/sfodspeedgrip.png'
        },
    ];


    var underbarrel = false;
    // //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt5").innerHTML = "";

    if (attArr.includes(4)) {
        underbarrel = true;

    }

    if (underbarrel != false) {
        var ranUnderbarrel = Math.floor(Math.random() * underbarrels.length) + 0;

        var underbarrelPick = underbarrels[ranUnderbarrel];
 
        // //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt5").innerHTML = '<b>' + "Underbarrel -  " + '</b>' + underbarrelPick.name + '<br>' + '<img  style="width:200px;" alt="'+ underbarrelPick.name +'"  src="' + underbarrelPick.image + '">';
    }


     if (underbarrel != true){
        document.getElementById("primaryAtt5").innerHTML = '<b>' + "Underbarrel -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }


    //Magazine

    var magazines = [
        {
            name: '45 Rnd Drum', //DONT NEED 
            image: '/attachments/magazines/45rnddrum.png'
        },
        {
            name: 'Fast Mag',  //DONT NEED
            image: '/attachments/magazines/fastmag.png'
        },
        {
            name: '45 Rnd Speed Mag',
            image: '/attachments/magazines/45rndspeedmag.png'
        },
        {
            name: 'STANAG 50 Rnd Drum',  //DONT NEED
            image: '/attachments/magazines/stanag50rnddrum.png'
        },
        {
            name: 'Vandal Speed Loader', 
            image: '/attachments/magazines/vandalspeedloader.png'
        },
        {
            name: 'Salvo 55 Rnd Fast Mag',
            image: '/attachments/magazines/salvo55rndfastmag.png'
        },
    ];


    var magazine = false;
    // //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt6").innerHTML = "";

    if (attArr.includes(5)) {
        magazine = true;

    }

    if (magazine != false) {
        var ranMagazine = Math.floor(Math.random() * magazines.length) + 0;


        var magazinePick = magazines[ranMagazine];

        //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt6").innerHTML = '<b>' + "Magazine -  " + '</b>' + magazinePick.name + '<br>' + '<img  style="width:200px;" alt="'+magazinePick.name + '"  src="' + magazinePick.image + '">';
    }

     if (magazine != true){
        document.getElementById("primaryAtt6").innerHTML = '<b>' + "Magazine -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }





    //Handle

    var handles = [
        {
            name: 'Speed Tape',  //DONT NEED
            image: '/attachments/handles/speedtape.png'
        },
        {
            name: 'Dropshot Wrap', //DONT NEED
            image: '/attachments/handles/dropshotwrap.png'
        },
        {
            name: 'Field Tape', //DONT NEED
            image: '/attachments/handles/fieldtape.png'
        },
        {
            name: 'SARS Jungle Grip', //DONT NEED
            image: '/attachments/handles/sarsjunglegrip.png'
        },
        {
            name: 'Serpent Wrap',//DONT NEED
            image: '/attachments/handles/serpentwrap.png'
        },
        {
            name: 'Airborne Elastic Wrap', //DONT NEED
            image: '/attachments/handles/airborneelasticwrap.png'
        },
    ];


    var handle = false;
    //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt7").innerHTML = "";

    if (attArr.includes(6)) {
        handle = true;

    }

    if (handle != false) {
        var ranHandle = Math.floor(Math.random() * handles.length) + 0;
        

        var handlePick = handles[ranHandle];

        //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt7").innerHTML = '<b>' + "Handle -  " + '</b>' + handlePick.name + '<br>' + '<img  style="width:200px;" alt="'+ handlePick.name +'" src="' + handlePick.image + '">';
    }

     if (handle != true){
        document.getElementById("primaryAtt7").innerHTML = '<b>' + "Handle -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }


    //Stock

    var stocks = [
        {
            name: 'Tactical Stock', //DONT NEED
            image: '/attachments/stocks/tacticalstock.png'
        },
        {
            name: 'Wire Stock',  //DONT NEED
            image: '/attachments/stocks/wirestock.png'
        },
        {
            name: 'Duster Stock', //DONT NEED
            image: '/attachments/stocks/dusterstock.png'
        },
        {
            name: 'Marathon Stock',  //DONT NEED
            image: '/attachments/stocks/marathonstock.png'
        },
        {
            name: 'SAS Combat Stock',  //DONT NEED
            image: '/attachments/stocks/sascombatstock.png'
        },
        {
            name: 'Raider Stock',  //DONT NEED
            image: '/attachments/stocks/raiderstock.png'
        },
    ];


    var stock = false;
    //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt8").innerHTML = "";

    if (attArr.includes(7)) {
        stock = true;

    }

    if (stock != false) {
        var ranStock = Math.floor(Math.random() * stocks.length) + 0;
        

        var stockPick = stocks[ranStock];

        //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt8").innerHTML = '<b>' + "Stock -  " + '</b>' + stockPick.name + '<br>' + '<img  style="width:200px;" alt="'+stockPick.name + '" src="' + stockPick.image + '">';
    }

    if (stock != true){
        document.getElementById("primaryAtt8").innerHTML = '<b>' + "Stock -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }

}



//ak74u
function ak74u() {
    var numAttachments = [0, 1, 2, 3, 4, 5, 6, 7];
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
            name: 'Quickdot LED',//DONT NEED
            image: '/attachments/optics/quickdotled.png'
        },
        {
            name: 'millstop reflex', //DONT NEED
            image: '/attachments/optics/millstopreflex.png'
        },
        {
            name: 'Kobra Red Dot', //DONT NEED
            image: '/attachments/optics/kobrareddot.png'
        },
        {
            name: 'Visiontexh 2x', //DONT NEED
            image: '/attachments/optics/visiontech2x.png'
        },
        {
            name: 'Microflex LED', //DONT NEED
            image: '/attachments/optics/microflexled.png'
        },
        {
            name: 'Hawksmoor', //DONT NEED
            image: '/attachments/optics/hawksmoor.png'
        },
        {
            name: 'SnapPoint', //DONT NEED
            image: '/attachments/optics/snappoint.png'
        },
        {
            name: 'Diamondback Reflex', //DONT NEED
            image: '/attachments/optics/diamondbackreflex.png'
        },
        {
            name: 'Sillix Holoscout', //DONT NEED
            image: '/attachments/optics/sillixholosxout.png'
        },
        {
            name: 'Fastpoint Reflex', //DONT NEED
            image: '/attachments/optics/fastpointreflex.png'
        },
        {
            name: 'Axial Arms 3x', //DONT NEED
            image: '/attachments/optics/axialarms3x.png'
        },
        {
            name: 'SUSAT Multizoom', //DONT NEED
            image: '/attachments/optics/susatmultizoom.png'
        },
    ];


    var optic = false;
    // //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt1").innerHTML = "";

    if (attArr.includes(0)) {
        optic = true;
    }

    if (optic != false) {
       
        var ranOptic = Math.floor(Math.random() * optics.length) + 0;

        var opticPick = optics[ranOptic];

        // //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt1").innerHTML = '<b>' + "Optic -  " + '</b>' + opticPick.name + '<br>' + '<img  style="width:200px;"  alt="' + opticPick.name +'" src="' + opticPick.image + '">';
    }

     if(optic != true){
        document.getElementById("primaryAtt1").innerHTML = '<b>' + "Optic -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }

    //Muzzle

    var muzzles = [
        {
            name: 'Muzzle Brake 5.56', //DONT NEED
            image: '/attachments/muzzles/muzzlebrake556.png'
        },
        {
            name: 'Flashguard 5.56', //DONT NEED
            image: '/attachments/muzzles/flashguard556.png'
        },
        {
            name: 'Sound Suppressor', //DONT NEED
            image: '/attachments/muzzles/soundsuppressor.png'
        },
        {
            name: 'Spetsnaz Compensator', //DONT NEED
            image: '/attachments/muzzles/spetsnazcompensator.png'
        },
        {
            name: 'KGB Eliminator', //DONT NEED
            image: '/attachments/muzzles/kgbeliminator.png'
        },
        {
            name: 'GRU Suppressor', //DONT NEED
            image: '/attachments/muzzles/grusuppressor.png'
        },
    ];


    var muzzle = false;
    // //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt2").innerHTML = "";

    if (attArr.includes(1)) {
        muzzle = true;
    }

    if (muzzle != false) {

        var ranMuzzle = Math.floor(Math.random() * muzzles.length) + 0;

        var muzzlePick = muzzles[ranMuzzle];

        //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt2").innerHTML = '<b>' + "Muzzle -  " + '</b>' + muzzlePick.name + '<br>' + '<img  style="width:200px;"  alt="' + muzzlePick.name +'" src="' + muzzlePick.image + '">';
    }

     if(muzzle != true) {
        document.getElementById("primaryAtt2").innerHTML = '<b>' + "Muzzle -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }


    //Barrels

    var barrels = [
        {
            name: '9.3 Extended',
            image: '/attachments/barrels/93extended.png'
        },
        {
            name: '8.4 Cavalry Lancer',
            image: '/attachments/barrels/84cavalrylancer.png'
        },
        {
            name: '9.3 VDV Reinforced',
            image: '/attachments/barrels/93vdvreinforced.png'
        },
        {
            name: '10.3 Liberator',
            image: '/attachments/barrels/103liberator.png'
        },
        {
            name: '8.4 Rifled',
            image: '/attachments/barrels/84rifled.png'
        },
        {
            name: '10.3 Task Force',
            image: '/attachments/barrels/103taskforce.png'
        },
    ];


    var barrel = false;
    // //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt3").innerHTML = "";

    if (attArr.includes(2)) {
        barrel = true;

    }

    if (barrel != false) {

        var ranBarrel = Math.floor(Math.random() * barrels.length) + 0;

        var barrelPick = barrels[ranBarrel];
        // //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt3").innerHTML = '<b>' + "Barrel -  " + '</b>' + barrelPick.name + '<br>' + '<img  style="width:200px;" alt="'+ barrelPick.name + '"  src="' + barrelPick.image + '">';
    }

     if (barrel != true){
        document.getElementById("primaryAtt3").innerHTML = '<b>' + "Barrel -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }


    //Body

    var bodys = [
        {
            name: 'Steady Aim Laser', //DONT NEED
            image: '/attachments/bodys/steadyaimlaser.png'
        },
        {
            name: 'Mounted Flashlight', //DONT NEED
            image: '/attachments/bodys/mountedflashlight.png'
        },
        {
            name: 'KGB Target Designator', //DONT NEED
            image: '/attachments/bodys/kgbtargetdesignator.png'
        },
        {
            name: 'GRU 5mw Laser Sight',  //DONT NEED
            image: '/attachments/bodys/gru5mwlasersight.png'
        },
        {
            name: 'Tiger Team Spotlight', //DONT NEED
            image: '/attachments/bodys/tigerteamspotlight.png'
        },
        {
            name: 'Ember Sighting Point', //DONT NEED
            image: '/attachments/bodys/embersightingpoint.png'
        },
    ];


    var body = false;
    // //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt4").innerHTML = "";

    if (attArr.includes(3)) {
        body = true;
        
    }

    if (body != false) {
        var ranBody = Math.floor(Math.random() * bodys.length) + 0;
        
        

        var bodyPick = bodys[ranBody];

        // //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt4").innerHTML = '<b>' + "Body -  " + '</b>' + bodyPick.name + '<br>' + '<img  style="width:200px;" alt="'+ bodyPick.name + '" src="' + bodyPick.image + '">';
    }


     if (body != true) {
        document.getElementById("primaryAtt4").innerHTML = '<b>' + "Body -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }

    //Underbarrel

    var underbarrels = [
        {
            name: 'Foregrip', //DONT NEED
            image: '/attachments/underbarrel/foregrip.png'
        },
        {
            name: 'Red Cell Foregrip',  //DONT NEED
            image: '/attachments/underbarrel/redcellforegrip.png'
        },
        {
            name: 'Patrol Grip',  //DONT NEED
            image: '/attachments/underbarrel/patrolgrip.png'
        },
        {
            name: 'Bruiser Grip',  //DONT NEED
            image: '/attachments/underbarrel/bruisergrip.png'
        },
        {
            name: 'Spetsnaz Grip',  //DONT NEED
            image: '/attachments/underbarrel/spetsnazgrip.png'
        },
        {
            name: 'Spetsnaz Speedgrip', //DONT NEED
            image: '/attachments/underbarrel/spetsnazspeedgrip.png'
        },
    ];


    var underbarrel = false;
    // //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt5").innerHTML = "";

    if (attArr.includes(4)) {
        underbarrel = true;

    }

    if (underbarrel != false) {
        var ranUnderbarrel = Math.floor(Math.random() * underbarrels.length) + 0;

        var underbarrelPick = underbarrels[ranUnderbarrel];
 
        // //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt5").innerHTML = '<b>' + "Underbarrel -  " + '</b>' + underbarrelPick.name + '<br>' + '<img  style="width:200px;" alt="'+ underbarrelPick.name +'"  src="' + underbarrelPick.image + '">';
    }


     if (underbarrel != true){
        document.getElementById("primaryAtt5").innerHTML = '<b>' + "Underbarrel -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }


    //Magazine

    var magazines = [
        {
            name: '40 RND Drum',  //DONT NEED
            image: '/attachments/magazines/40rnddrum.png'
        },
        {
            name: 'Taped Mags', //DONT NEED
            image: '/attachments/magazines/tapedmags.png'
        },
        {
            name: '40 Rnd Speed Mag', //DONT NEED
            image: '/attachments/magazines/40rndspeedmag.png'
        },
        {
            name: 'Spetsnaz 50 Rnd Drum',  //DONT NEED
            image: '/attachments/magazines/spetsnaz50rnddrum.png'
        },
        {
            name: 'GRU Mag Clamp', //DONT NEED
            image: '/attachments/magazines/grumagclamp.png'
        },
        {
            name: 'VDV 50 Rnd Fast Mag', //DONT NEED
            image: '/attachments/magazines/vdv50rndfastmag.png'
        },
    ];


    var magazine = false;
    // //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt6").innerHTML = "";

    if (attArr.includes(5)) {
        magazine = true;

    }

    if (magazine != false) {
        var ranMagazine = Math.floor(Math.random() * magazines.length) + 0;


        var magazinePick = magazines[ranMagazine];

        //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt6").innerHTML = '<b>' + "Magazine -  " + '</b>' + magazinePick.name + '<br>' + '<img  style="width:200px;" alt="'+magazinePick.name + '"  src="' + magazinePick.image + '">';
    }

     if (magazine != true){
        document.getElementById("primaryAtt6").innerHTML = '<b>' + "Magazine -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }





    //Handle

    var handles = [
        {
            name: 'Speed Tape',  //DONT NEED
            image: '/attachments/handles/speedtape.png'
        },
        {
            name: 'Dropshot Wrap', //DONT NEED
            image: '/attachments/handles/dropshotwrap.png'
        },
        {
            name: 'Field Tape', //DONT NEED
            image: '/attachments/handles/fieldtape.png'
        },
        {
            name: 'Spetsnaz Field Grip',  //DONT NEED
            image: '/attachments/handles/spetsnazfieldgrip.png'
        },
        {
            name: 'Serpent Wrap',//DONT NEED
            image: '/attachments/handles/serpentwrap.png'
        },
        {
            name: 'GRU Elastic Wrap', //DONT NEED
            image: '/attachments/handles/gruelasticwrap.png'
        },
    ];


    var handle = false;
    //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt7").innerHTML = "";

    if (attArr.includes(6)) {
        handle = true;

    }

    if (handle != false) {
        var ranHandle = Math.floor(Math.random() * handles.length) + 0;
        

        var handlePick = handles[ranHandle];

        //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt7").innerHTML = '<b>' + "Handle -  " + '</b>' + handlePick.name + '<br>' + '<img  style="width:200px;" alt="'+ handlePick.name +'" src="' + handlePick.image + '">';
    }

     if (handle != true){
        document.getElementById("primaryAtt7").innerHTML = '<b>' + "Handle -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }


    //Stock

    var stocks = [
        {
            name: 'Tactical Stock', //DONT NEED
            image: '/attachments/stocks/tacticalstock.png'
        },
        {
            name: 'Wire Stock',  //DONT NEED
            image: '/attachments/stocks/wirestock.png'
        },
        {
            name: 'Duster Stock', //DONT NEED
            image: '/attachments/stocks/dusterstock.png'
        },
        {
            name: 'No Stock', //DONT NEED
            image: '/attachments/stocks/nostock.png'
        },
        {
            name: 'Spetsnaz PKM Stock', //DONT NEED
            image: '/attachments/stocks/spetsnazpkmstock.png'
        },
        {
            name: 'KGB Skeletal Stock', //DONT NEED
            image: '/attachments/stocks/kgbskeletalstock.png'
        },
    ];


    var stock = false;
    //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt8").innerHTML = "";

    if (attArr.includes(7)) {
        stock = true;

    }

    if (stock != false) {
        var ranStock = Math.floor(Math.random() * stocks.length) + 0;
        

        var stockPick = stocks[ranStock];

        //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt8").innerHTML = '<b>' + "Stock -  " + '</b>' + stockPick.name + '<br>' + '<img  style="width:200px;" alt="'+stockPick.name + '" src="' + stockPick.image + '">';
    }

    if (stock != true){
        document.getElementById("primaryAtt8").innerHTML = '<b>' + "Stock -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }

}



//ksp45

function ksp45() {
    var numAttachments = [0, 1, 2, 3, 4, 5, 6, 7];
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
            name: 'Quickdot LED',//DONT NEED
            image: '/attachments/optics/quickdotled.png'
        },
        {
            name: 'millstop reflex', //DONT NEED
            image: '/attachments/optics/millstopreflex.png'
        },
        {
            name: 'Kobra Red Dot', //DONT NEED
            image: '/attachments/optics/kobrareddot.png'
        },
        {
            name: 'Visiontexh 2x', //DONT NEED
            image: '/attachments/optics/visiontech2x.png'
        },
        {
            name: 'Microflex LED', //DONT NEED
            image: '/attachments/optics/microflexled.png'
        },
        {
            name: 'Hawksmoor', //DONT NEED
            image: '/attachments/optics/hawksmoor.png'
        },
        {
            name: 'SnapPoint', //DONT NEED
            image: '/attachments/optics/snappoint.png'
        },
        {
            name: 'Diamondback Reflex', //DONT NEED
            image: '/attachments/optics/diamondbackreflex.png'
        },
        {
            name: 'Sillix Holoscout', //DONT NEED
            image: '/attachments/optics/sillixholosxout.png'
        },
        {
            name: 'Fastpoint Reflex', //DONT NEED
            image: '/attachments/optics/fastpointreflex.png'
        },
        {
            name: 'Axial Arms 3x', //DONT NEED
            image: '/attachments/optics/axialarms3x.png'
        },
        {
            name: 'SUSAT Multizoom', //DONT NEED
            image: '/attachments/optics/susatmultizoom.png'
        },
    ];


    var optic = false;
    // //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt1").innerHTML = "";

    if (attArr.includes(0)) {
        optic = true;
    }

    if (optic != false) {
       
        var ranOptic = Math.floor(Math.random() * optics.length) + 0;

        var opticPick = optics[ranOptic];

        // //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt1").innerHTML = '<b>' + "Optic -  " + '</b>' + opticPick.name + '<br>' + '<img  style="width:200px;"  alt="' + opticPick.name +'" src="' + opticPick.image + '">';
    }

     if(optic != true){
        document.getElementById("primaryAtt1").innerHTML = '<b>' + "Optic -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
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
            name: 'Sound Suppressor', //DONT NEED
            image: '/attachments/muzzles/soundsuppressor.png'
        },
        {
            name: 'Infantry Compensator', //DONT NEED
            image: '/attachments/muzzles/infantrycompensator.png'
        },
        {
            name: 'SOCOM Eliminator', //DONT NEED
            image: '/attachments/muzzles/socomeliminator.png'
        },
        {
            name: 'Agency Suppressor',//DONT NEED //DONT NEED
            image: '/attachments/muzzles/agencysuppressor.png'
        },
    ];


    var muzzle = false;
    // //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt2").innerHTML = "";

    if (attArr.includes(1)) {
        muzzle = true;
    }

    if (muzzle != false) {

        var ranMuzzle = Math.floor(Math.random() * muzzles.length) + 0;

        var muzzlePick = muzzles[ranMuzzle];

        //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt2").innerHTML = '<b>' + "Muzzle -  " + '</b>' + muzzlePick.name + '<br>' + '<img  style="width:200px;"  alt="' + muzzlePick.name +'" src="' + muzzlePick.image + '">';
    }

     if(muzzle != true) {
        document.getElementById("primaryAtt2").innerHTML = '<b>' + "Muzzle -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }


    //Barrels

    var barrels = [
        {
            name: '8.9 Extended',
            image: '/attachments/barrels/89extended.png'
        },
        {
            name: '9.6 Cavalry Lancer',
            image: '/attachments/barrels/96cavalrylancer.png'
        },
        {
            name: '10.5 Reinforced Heavy',
            image: '/attachments/barrels/105reinforcedheavy.png'
        },
        {
            name: '9.5 Ranger',
            image: '/attachments/barrels/95ranger.png'
        },
        {
            name: '10.2 Rifled',
            image: '/attachments/barrels/102rifled.png'
        },
        {
            name: '10.5 Task Force',
            image: '/attachments/barrels/105taskforce.png'
        },
    ];


    var barrel = false;
    // //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt3").innerHTML = "";

    if (attArr.includes(2)) {
        barrel = true;

    }

    if (barrel != false) {

        var ranBarrel = Math.floor(Math.random() * barrels.length) + 0;

        var barrelPick = barrels[ranBarrel];
        // //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt3").innerHTML = '<b>' + "Barrel -  " + '</b>' + barrelPick.name + '<br>' + '<img  style="width:200px;" alt="'+ barrelPick.name + '"  src="' + barrelPick.image + '">';
    }

     if (barrel != true){
        document.getElementById("primaryAtt3").innerHTML = '<b>' + "Barrel -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }


    //Body

    var bodys = [
        {
            name: 'Steady Aim Laser', //DONT NEED
            image: '/attachments/bodys/steadyaimlaser.png'
        },
        {
            name: 'Mounted Flashlight', //DONT NEED
            image: '/attachments/bodys/mountedflashlight.png'
        },
        {
            name: 'SOF Target Designator', //DONT NEED
            image: '/attachments/bodys/softargetdesignator.png'
        },
        {
            name: 'SWAT 5mw Laser Sight', //DONT NEED
            image: '/attachments/bodys/swat5mwlasersight.png'
        },
        {
            name: 'Tiger Team Spotlight', //DONT NEED
            image: '/attachments/bodys/tigerteamspotlight.png'
        },
        {
            name: 'Ember Sighting Point', //DONT NEED
            image: '/attachments/bodys/embersightingpoint.png'
        },
    ];


    var body = false;
    // //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt4").innerHTML = "";

    if (attArr.includes(3)) {
        body = true;
        
    }

    if (body != false) {
        var ranBody = Math.floor(Math.random() * bodys.length) + 0;
        
        

        var bodyPick = bodys[ranBody];

        // //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt4").innerHTML = '<b>' + "Body -  " + '</b>' + bodyPick.name + '<br>' + '<img  style="width:200px;" alt="'+ bodyPick.name + '" src="' + bodyPick.image + '">';
    }


     if (body != true) {
        document.getElementById("primaryAtt4").innerHTML = '<b>' + "Body -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }

    //Underbarrel

    var underbarrels = [
        {
            name: 'Front Grip', 
            image: '/attachments/underbarrel/frontgrip.png'
        },
        {
            name: 'Red Cell Foregrip',  //DONT NEED
            image: '/attachments/underbarrel/redcellforegrip.png'
        },
        {
            name: 'Patrol Grip',  //DONT NEED
            image: '/attachments/underbarrel/patrolgrip.png'
        },
        {
            name: 'Bruiser Grip',  //DONT NEED
            image: '/attachments/underbarrel/bruisergrip.png'
        },
        {
            name: 'Field Agent Grip',  //DONT NEED
            image: '/attachments/underbarrel/fieldagentgrip.png'
        },
        {
            name: 'SFOD Speedgrip',  //DONT NEED
            image: '/attachments/underbarrel/sfodspeedgrip.png'
        },
    ];


    var underbarrel = false;
    // //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt5").innerHTML = "";

    if (attArr.includes(4)) {
        underbarrel = true;

    }

    if (underbarrel != false) {
        var ranUnderbarrel = Math.floor(Math.random() * underbarrels.length) + 0;

        var underbarrelPick = underbarrels[ranUnderbarrel];
 
        // //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt5").innerHTML = '<b>' + "Underbarrel -  " + '</b>' + underbarrelPick.name + '<br>' + '<img  style="width:200px;" alt="'+ underbarrelPick.name +'"  src="' + underbarrelPick.image + '">';
    }


     if (underbarrel != true){
        document.getElementById("primaryAtt5").innerHTML = '<b>' + "Underbarrel -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }


    //Magazine

    var magazines = [
        {
            name: '42 RND', 
            image: '/attachments/magazines/42rnd.png'
        },
        {
            name: 'Fast Mag',  //DONT NEED
            image: '/attachments/magazines/fastmag.png'
        },
        {
            name: '42 Rnd Speed Mag', 
            image: '/attachments/magazines/42rndspeedmag.png'
        },
        {
            name: 'STANAG 48 Rnd',  
            image: '/attachments/magazines/stanag48rnd.png'
        },
        {
            name: 'Vandal Speed Loader',  //DONT NEED  
            image: '/attachments/magazines/vandalspeedloader.png'
        },
        {
            name: 'Salvo 48 Rnd Fast Mag',  
            image: '/attachments/magazines/salvo48rndfastmag.png'
        },
    ];


    var magazine = false;
    // //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt6").innerHTML = "";

    if (attArr.includes(5)) {
        magazine = true;

    }

    if (magazine != false) {
        var ranMagazine = Math.floor(Math.random() * magazines.length) + 0;


        var magazinePick = magazines[ranMagazine];

        //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt6").innerHTML = '<b>' + "Magazine -  " + '</b>' + magazinePick.name + '<br>' + '<img  style="width:200px;" alt="'+magazinePick.name + '"  src="' + magazinePick.image + '">';
    }

     if (magazine != true){
        document.getElementById("primaryAtt6").innerHTML = '<b>' + "Magazine -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }





    //Handle

    var handles = [
        {
            name: 'Speed Tape',  //DONT NEED
            image: '/attachments/handles/speedtape.png'
        },
        {
            name: 'Dropshot Wrap', //DONT NEED
            image: '/attachments/handles/dropshotwrap.png'
        },
        {
            name: 'Field Tape', //DONT NEED
            image: '/attachments/handles/fieldtape.png'
        },
        {
            name: 'SARS Jungle Grip', //DONT NEED
            image: '/attachments/handles/sarsjunglegrip.png'
        },
        {
            name: 'Serpent Wrap',//DONT NEED
            image: '/attachments/handles/serpentwrap.png'
        },
        {
            name: 'Airborne Elastic Wrap', //DONT NEED
            image: '/attachments/handles/airborneelasticwrap.png'
        },
    ];


    var handle = false;
    //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt7").innerHTML = "";

    if (attArr.includes(6)) {
        handle = true;

    }

    if (handle != false) {
        var ranHandle = Math.floor(Math.random() * handles.length) + 0;
        

        var handlePick = handles[ranHandle];

        //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt7").innerHTML = '<b>' + "Handle -  " + '</b>' + handlePick.name + '<br>' + '<img  style="width:200px;" alt="'+ handlePick.name +'" src="' + handlePick.image + '">';
    }

     if (handle != true){
        document.getElementById("primaryAtt7").innerHTML = '<b>' + "Handle -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }


    //Stock

    var stocks = [
        {
            name: 'Tactical Stock', //DONT NEED
            image: '/attachments/stocks/tacticalstock.png'
        },
        {
            name: 'Wire Stock',  //DONT NEED
            image: '/attachments/stocks/wirestock.png'
        },
        {
            name: 'Duster Stock', //DONT NEED
            image: '/attachments/stocks/dusterstock.png'
        },
        {
            name: 'No Stock', //DONT NEED
            image: '/attachments/stocks/nostock.png'
        },
        {
            name: 'SAS Combat Stock',  //DONT NEED
            image: '/attachments/stocks/sascombatstock.png'
        },
        {
            name: 'Raider Stock',  //DONT NEED
            image: '/attachments/stocks/raiderstock.png'
        },
    ];


    var stock = false;
    //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt8").innerHTML = "";

    if (attArr.includes(7)) {
        stock = true;

    }

    if (stock != false) {
        var ranStock = Math.floor(Math.random() * stocks.length) + 0;
        

        var stockPick = stocks[ranStock];

        //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt8").innerHTML = '<b>' + "Stock -  " + '</b>' + stockPick.name + '<br>' + '<img  style="width:200px;" alt="'+stockPick.name + '" src="' + stockPick.image + '">';
    }

    if (stock != true){
        document.getElementById("primaryAtt8").innerHTML = '<b>' + "Stock -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }

}

//Bullfrog
function bullfrog() {
    var numAttachments = [0, 1, 2, 3, 4, 5, 6, 7];
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
            name: 'Quickdot LED',//DONT NEED
            image: '/attachments/optics/quickdotled.png'
        },
        {
            name: 'millstop reflex', //DONT NEED
            image: '/attachments/optics/millstopreflex.png'
        },
        {
            name: 'Kobra Red Dot', //DONT NEED
            image: '/attachments/optics/kobrareddot.png'
        },
        {
            name: 'Visiontexh 2x', //DONT NEED
            image: '/attachments/optics/visiontech2x.png'
        },
        {
            name: 'Microflex LED', //DONT NEED
            image: '/attachments/optics/microflexled.png'
        },
        {
            name: 'Hawksmoor', //DONT NEED
            image: '/attachments/optics/hawksmoor.png'
        },
        {
            name: 'SnapPoint', //DONT NEED
            image: '/attachments/optics/snappoint.png'
        },
        {
            name: 'Diamondback Reflex', //DONT NEED
            image: '/attachments/optics/diamondbackreflex.png'
        },
        {
            name: 'Sillix Holoscout', //DONT NEED
            image: '/attachments/optics/sillixholosxout.png'
        },
        {
            name: 'Fastpoint Reflex', //DONT NEED
            image: '/attachments/optics/fastpointreflex.png'
        },
        {
            name: 'Axial Arms 3x', //DONT NEED
            image: '/attachments/optics/axialarms3x.png'
        },
        {
            name: 'SUSAT Multizoom', //DONT NEED
            image: '/attachments/optics/susatmultizoom.png'
        },
    ];


    var optic = false;
    // //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt1").innerHTML = "";

    if (attArr.includes(0)) {
        optic = true;
    }

    if (optic != false) {
       
        var ranOptic = Math.floor(Math.random() * optics.length) + 0;

        var opticPick = optics[ranOptic];

        // //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt1").innerHTML = '<b>' + "Optic -  " + '</b>' + opticPick.name + '<br>' + '<img  style="width:200px;"  alt="' + opticPick.name +'" src="' + opticPick.image + '">';
    }

     if(optic != true){
        document.getElementById("primaryAtt1").innerHTML = '<b>' + "Optic -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }

    //Muzzle

    var muzzles = [
        {
            name: 'Muzzle Brake 9',  //DONT NEED
            image: '/attachments/muzzles/muzzlebrake9.png'
        },
        {
            name: 'Flashguard 9',  //DONT NEED
            image: '/attachments/muzzles/flashguard9.png'
        },
        {
            name: 'Sound Suppressor', //DONT NEED
            image: '/attachments/muzzles/soundsuppressor.png'
        },
        {
            name: 'Spetsnaz Compensator', //DONT NEED
            image: '/attachments/muzzles/spetsnazcompensator.png'
        },
        {
            name: 'KGB Eliminator', //DONT NEED
            image: '/attachments/muzzles/kgbeliminator.png'
        },
        {
            name: 'GRU Suppressor', //DONT NEED
            image: '/attachments/muzzles/grusuppressor.png'
        },
    ];


    var muzzle = false;
    // //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt2").innerHTML = "";

    if (attArr.includes(1)) {
        muzzle = true;
    }

    if (muzzle != false) {

        var ranMuzzle = Math.floor(Math.random() * muzzles.length) + 0;

        var muzzlePick = muzzles[ranMuzzle];

        //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt2").innerHTML = '<b>' + "Muzzle -  " + '</b>' + muzzlePick.name + '<br>' + '<img  style="width:200px;"  alt="' + muzzlePick.name +'" src="' + muzzlePick.image + '">';
    }

     if(muzzle != true) {
        document.getElementById("primaryAtt2").innerHTML = '<b>' + "Muzzle -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }


    //Barrels

    var barrels = [
        {
            name: '7.1 Extended',
            image: '/attachments/barrels/71extended.png'
        },
        {
            name: '7 Cavalry Lancer',
            image: '/attachments/barrels/7cavalrylancer.png'
        },
        {
            name: '6.7 VDV Reinforced',
            image: '/attachments/barrels/67vdvreinforced.png'
        },
        {
            name: '8.1 Liberator',
            image: '/attachments/barrels/81liberator.png'
        },
        {
            name: '7.6 Rifled',
            image: '/attachments/barrels/76rifled.png'
        },
        {
            name: '7.4 Task Force',
            image: '/attachments/barrels/74taskforce.png'
        },
    ];


    var barrel = false;
    // //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt3").innerHTML = "";

    if (attArr.includes(2)) {
        barrel = true;

    }

    if (barrel != false) {

        var ranBarrel = Math.floor(Math.random() * barrels.length) + 0;

        var barrelPick = barrels[ranBarrel];
        // //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt3").innerHTML = '<b>' + "Barrel -  " + '</b>' + barrelPick.name + '<br>' + '<img  style="width:200px;" alt="'+ barrelPick.name + '"  src="' + barrelPick.image + '">';
    }

     if (barrel != true){
        document.getElementById("primaryAtt3").innerHTML = '<b>' + "Barrel -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }


    //Body

    var bodys = [
        {
            name: 'Steady Aim Laser', //DONT NEED
            image: '/attachments/bodys/steadyaimlaser.png'
        },
        {
            name: 'Mounted Flashlight', //DONT NEED
            image: '/attachments/bodys/mountedflashlight.png'
        },
        {
            name: 'KGB Target Designator', //DONT NEED
            image: '/attachments/bodys/kgbtargetdesignator.png'
        },
        {
            name: 'GRU 5mw Laser Sight',  //DONT NEED
            image: '/attachments/bodys/gru5mwlasersight.png'
        },
        {
            name: 'Tiger Team Spotlight', //DONT NEED
            image: '/attachments/bodys/tigerteamspotlight.png'
        },
        {
            name: 'Ember Sighting Point', //DONT NEED
            image: '/attachments/bodys/embersightingpoint.png'
        },
    ];


    var body = false;
    // //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt4").innerHTML = "";

    if (attArr.includes(3)) {
        body = true;
        
    }

    if (body != false) {
        var ranBody = Math.floor(Math.random() * bodys.length) + 0;
        
        

        var bodyPick = bodys[ranBody];

        // //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt4").innerHTML = '<b>' + "Body -  " + '</b>' + bodyPick.name + '<br>' + '<img  style="width:200px;" alt="'+ bodyPick.name + '" src="' + bodyPick.image + '">';
    }


     if (body != true) {
        document.getElementById("primaryAtt4").innerHTML = '<b>' + "Body -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }

    //Underbarrel

    var underbarrels = [
        {
            name: 'Foregrip', //DONT NEED
            image: '/attachments/underbarrel/foregrip.png'
        },
        {
            name: 'Red Cell Foregrip',  //DONT NEED
            image: '/attachments/underbarrel/redcellforegrip.png'
        },
        {
            name: 'Patrol Grip',  //DONT NEED
            image: '/attachments/underbarrel/patrolgrip.png'
        },
        {
            name: 'Bruiser Grip',  //DONT NEED
            image: '/attachments/underbarrel/bruisergrip.png'
        },
        {
            name: 'Spetsnaz Grip',  //DONT NEED
            image: '/attachments/underbarrel/spetsnazgrip.png'
        },
        {
            name: 'Spetsnaz Speedgrip', //DONT NEED
            image: '/attachments/underbarrel/spetsnazspeedgrip.png'
        },
    ];


    var underbarrel = false;
    // //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt5").innerHTML = "";

    if (attArr.includes(4)) {
        underbarrel = true;

    }

    if (underbarrel != false) {
        var ranUnderbarrel = Math.floor(Math.random() * underbarrels.length) + 0;

        var underbarrelPick = underbarrels[ranUnderbarrel];
 
        // //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt5").innerHTML = '<b>' + "Underbarrel -  " + '</b>' + underbarrelPick.name + '<br>' + '<img  style="width:200px;" alt="'+ underbarrelPick.name +'"  src="' + underbarrelPick.image + '">';
    }


     if (underbarrel != true){
        document.getElementById("primaryAtt5").innerHTML = '<b>' + "Underbarrel -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }


    //Magazine

    var magazines = [
        {
            name: '65 Rnd', 
            image: '/attachments/magazines/65rnd.png'
        },
        {
            name: 'Fast Mag',  //DONT NEED
            image: '/attachments/magazines/fastmag.png'
        },
        {
            name: '65 Rnd Speed Mag', 
            image: '/attachments/magazines/65rndspeedmag.png'
        },
        {
            name: 'STANAG 85 Rnd', 
            image: '/attachments/magazines/stanag85rnd.png'
        },
        {
            name: 'Vandal Speed Loader',  //DONT NEED 
            image: '/attachments/magazines/vandalspeedloader.png'
        },
        {
            name: 'VDV 85 Rnd Fast Mag', 
            image: '/attachments/magazines/vdv85rndfastmag.png'
        },
    ];


    var magazine = false;
    // //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt6").innerHTML = "";

    if (attArr.includes(5)) {
        magazine = true;

    }

    if (magazine != false) {
        var ranMagazine = Math.floor(Math.random() * magazines.length) + 0;


        var magazinePick = magazines[ranMagazine];

        //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt6").innerHTML = '<b>' + "Magazine -  " + '</b>' + magazinePick.name + '<br>' + '<img  style="width:200px;" alt="'+magazinePick.name + '"  src="' + magazinePick.image + '">';
    }

     if (magazine != true){
        document.getElementById("primaryAtt6").innerHTML = '<b>' + "Magazine -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }





    //Handle

    var handles = [
        {
            name: 'Speed Tape',  //DONT NEED
            image: '/attachments/handles/speedtape.png'
        },
        {
            name: 'Dropshot Wrap', //DONT NEED
            image: '/attachments/handles/dropshotwrap.png'
        },
        {
            name: 'Field Tape', //DONT NEED
            image: '/attachments/handles/fieldtape.png'
        },
        {
            name: 'Spetsnaz Field Grip',  //DONT NEED
            image: '/attachments/handles/spetsnazfieldgrip.png'
        },
        {
            name: 'Serpent Wrap',//DONT NEED
            image: '/attachments/handles/serpentwrap.png'
        },
        {
            name: 'GRU Elastic Wrap', //DONT NEED
            image: '/attachments/handles/gruelasticwrap.png'
        },
    ];


    var handle = false;
    //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt7").innerHTML = "";

    if (attArr.includes(6)) {
        handle = true;

    }

    if (handle != false) {
        var ranHandle = Math.floor(Math.random() * handles.length) + 0;
        

        var handlePick = handles[ranHandle];

        //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt7").innerHTML = '<b>' + "Handle -  " + '</b>' + handlePick.name + '<br>' + '<img  style="width:200px;" alt="'+ handlePick.name +'" src="' + handlePick.image + '">';
    }

     if (handle != true){
        document.getElementById("primaryAtt7").innerHTML = '<b>' + "Handle -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }


    //Stock

    var stocks = [
        {
            name: 'Tactical Stock', //DONT NEED
            image: '/attachments/stocks/tacticalstock.png'
        },
        {
            name: 'Wire Stock',  //DONT NEED
            image: '/attachments/stocks/wirestock.png'
        },
        {
            name: 'Duster Stock', //DONT NEED
            image: '/attachments/stocks/dusterstock.png'
        },
        {
            name: 'No Stock', //DONT NEED
            image: '/attachments/stocks/nostock.png'
        },
        {
            name: 'Spetsnaz PKM Stock', //DONT NEED
            image: '/attachments/stocks/spetsnazpkmstock.png'
        },
        {
            name: 'KGB Skeletal Stock', //DONT NEED
            image: '/attachments/stocks/kgbskeletalstock.png'
        },
    ];


    var stock = false;
    //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt8").innerHTML = "";

    if (attArr.includes(7)) {
        stock = true;

    }

    if (stock != false) {
        var ranStock = Math.floor(Math.random() * stocks.length) + 0;
        

        var stockPick = stocks[ranStock];

        //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt8").innerHTML = '<b>' + "Stock -  " + '</b>' + stockPick.name + '<br>' + '<img  style="width:200px;" alt="'+stockPick.name + '" src="' + stockPick.image + '">';
    }

    if (stock != true){
        document.getElementById("primaryAtt8").innerHTML = '<b>' + "Stock -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }

}



//MAC-10
function mac10() {
    var numAttachments = [0, 1, 2, 3, 4, 5, 6, 7];
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
            name: 'Quickdot LED',//DONT NEED
            image: '/attachments/optics/quickdotled.png'
        },
        {
            name: 'millstop reflex', //DONT NEED
            image: '/attachments/optics/millstopreflex.png'
        },
        {
            name: 'Kobra Red Dot', //DONT NEED
            image: '/attachments/optics/kobrareddot.png'
        },
        {
            name: 'Visiontexh 2x', //DONT NEED
            image: '/attachments/optics/visiontech2x.png'
        },
        {
            name: 'Microflex LED', //DONT NEED
            image: '/attachments/optics/microflexled.png'
        },
        {
            name: 'Hawksmoor', //DONT NEED
            image: '/attachments/optics/hawksmoor.png'
        },
        {
            name: 'SnapPoint', //DONT NEED
            image: '/attachments/optics/snappoint.png'
        },
        {
            name: 'Diamondback Reflex', //DONT NEED
            image: '/attachments/optics/diamondbackreflex.png'
        },
        {
            name: 'Sillix Holoscout', //DONT NEED
            image: '/attachments/optics/sillixholosxout.png'
        },
        {
            name: 'Fastpoint Reflex', //DONT NEED
            image: '/attachments/optics/fastpointreflex.png'
        },
        {
            name: 'Axial Arms 3x', //DONT NEED
            image: '/attachments/optics/axialarms3x.png'
        },
        {
            name: 'SUSAT Multizoom', //DONT NEED
            image: '/attachments/optics/susatmultizoom.png'
        },
    ];


    var optic = false;
    // //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt1").innerHTML = "";

    if (attArr.includes(0)) {
        optic = true;
    }

    if (optic != false) {
       
        var ranOptic = Math.floor(Math.random() * optics.length) + 0;

        var opticPick = optics[ranOptic];

        // //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt1").innerHTML = '<b>' + "Optic -  " + '</b>' + opticPick.name + '<br>' + '<img  style="width:200px;"  alt="' + opticPick.name +'" src="' + opticPick.image + '">';
    }

     if(optic != true){
        document.getElementById("primaryAtt1").innerHTML = '<b>' + "Optic -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }

    //Muzzle

    var muzzles = [
        {
            name: 'Muzzle Brake 9',  //DONT NEED
            image: '/attachments/muzzles/muzzlebrake9.png'
        },
        {
            name: 'Flashguard 9',  //DONT NEED
            image: '/attachments/muzzles/flashguard9.png'
        },
        {
            name: 'Sound Suppressor', //DONT NEED
            image: '/attachments/muzzles/soundsuppressor.png'
        },
        {
            name: 'Infantry Compensator', //DONT NEED
            image: '/attachments/muzzles/infantrycompensator.png'
        },
        {
            name: 'SOCOM Eliminator', //DONT NEED
            image: '/attachments/muzzles/socomeliminator.png'
        },
        {
            name: 'Agency Suppressor',//DONT NEED 
            image: '/attachments/muzzles/agencysuppressor.png'
        },
    ];


    var muzzle = false;
    // //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt2").innerHTML = "";

    if (attArr.includes(1)) {
        muzzle = true;
    }

    if (muzzle != false) {

        var ranMuzzle = Math.floor(Math.random() * muzzles.length) + 0;

        var muzzlePick = muzzles[ranMuzzle];

        //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt2").innerHTML = '<b>' + "Muzzle -  " + '</b>' + muzzlePick.name + '<br>' + '<img  style="width:200px;"  alt="' + muzzlePick.name +'" src="' + muzzlePick.image + '">';
    }

     if(muzzle != true) {
        document.getElementById("primaryAtt2").innerHTML = '<b>' + "Muzzle -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }


    //Barrels

    var barrels = [
        {
            name: '5.3 Extended', 
            image: '/attachments/barrels/53extended.png'
        },
        {
            name: '6.5 Cavalry Lancer', 
            image: '/attachments/barrels/65cavalrylancer.png'
        },
        {
            name: '6.1 Reinforced Heavy', 
            image: '/attachments/barrels/61reinforcedheavy.png'
        },
        {
            name: '5.3 Ranger', 
            image: '/attachments/barrels/53ranger.png'
        },
        {
            name: '6.5 Rifled', 
            image: '/attachments/barrels/65rifled.png'
        },
        {
            name: '5.9 Task Force', 
            image: '/attachments/barrels/59taskforce.png'
        },
    ];


    var barrel = false;
    // //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt3").innerHTML = "";

    if (attArr.includes(2)) {
        barrel = true;

    }

    if (barrel != false) {

        var ranBarrel = Math.floor(Math.random() * barrels.length) + 0;

        var barrelPick = barrels[ranBarrel];
        // //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt3").innerHTML = '<b>' + "Barrel -  " + '</b>' + barrelPick.name + '<br>' + '<img  style="width:200px;" alt="'+ barrelPick.name + '"  src="' + barrelPick.image + '">';
    }

     if (barrel != true){
        document.getElementById("primaryAtt3").innerHTML = '<b>' + "Barrel -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }


    //Body

    var bodys = [
        {
            name: 'Steady Aim Laser', //DONT NEED
            image: '/attachments/bodys/steadyaimlaser.png'
        },
        {
            name: 'Mounted Flashlight', //DONT NEED
            image: '/attachments/bodys/mountedflashlight.png'
        },
        {
            name: 'SOF Target Designator', //DONT NEED
            image: '/attachments/bodys/softargetdesignator.png'
        },
        {
            name: 'SWAT 5mw Laser Sight', //DONT NEED
            image: '/attachments/bodys/swat5mwlasersight.png'
        },
        {
            name: 'Tiger Team Spotlight', //DONT NEED
            image: '/attachments/bodys/tigerteamspotlight.png'
        },
        {
            name: 'Ember Sighting Point', //DONT NEED
            image: '/attachments/bodys/embersightingpoint.png'
        },
    ];


    var body = false;
    // //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt4").innerHTML = "";

    if (attArr.includes(3)) {
        body = true;
        
    }

    if (body != false) {
        var ranBody = Math.floor(Math.random() * bodys.length) + 0;
        
        

        var bodyPick = bodys[ranBody];

        // //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt4").innerHTML = '<b>' + "Body -  " + '</b>' + bodyPick.name + '<br>' + '<img  style="width:200px;" alt="'+ bodyPick.name + '" src="' + bodyPick.image + '">';
    }


     if (body != true) {
        document.getElementById("primaryAtt4").innerHTML = '<b>' + "Body -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }

    //Underbarrel

    var underbarrels = [
        {
            name: 'Foregrip', //DONT NEED
            image: '/attachments/underbarrel/foregrip.png'
        },
        {
            name: 'Red Cell Foregrip',  //DONT NEED
            image: '/attachments/underbarrel/redcellforegrip.png'
        },
        {
            name: 'Patrol Grip',  //DONT NEED
            image: '/attachments/underbarrel/patrolgrip.png'
        },
        {
            name: 'Bruiser Grip',  //DONT NEED
            image: '/attachments/underbarrel/bruisergrip.png'
        },
        {
            name: 'Field Agent Grip',  //DONT NEED
            image: '/attachments/underbarrel/fieldagentgrip.png'
        },
        {
            name: 'SFOD Speedgrip',  //DONT NEED
            image: '/attachments/underbarrel/sfodspeedgrip.png'
        },
    ];


    var underbarrel = false;
    // //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt5").innerHTML = "";

    if (attArr.includes(4)) {
        underbarrel = true;

    }

    if (underbarrel != false) {
        var ranUnderbarrel = Math.floor(Math.random() * underbarrels.length) + 0;

        var underbarrelPick = underbarrels[ranUnderbarrel];
 
        // //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt5").innerHTML = '<b>' + "Underbarrel -  " + '</b>' + underbarrelPick.name + '<br>' + '<img  style="width:200px;" alt="'+ underbarrelPick.name +'"  src="' + underbarrelPick.image + '">';
    }


     if (underbarrel != true){
        document.getElementById("primaryAtt5").innerHTML = '<b>' + "Underbarrel -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }


    //Magazine

    var magazines = [
        {
            name: '43 Rnd Drum', 
            image: '/attachments/magazines/43rnddrum.png'
        },
        {
            name: 'Fast Mag',  //DONT NEED
            image: '/attachments/magazines/fastmag.png'
        },
        {
            name: '43 Rnd Speed Mag', 
            image: '/attachments/magazines/43rndspeedmag.png'
        },
        {
            name: 'STANAG 53 Rnd Drum', 
            image: '/attachments/magazines/stanag53rnddrum.png'
        },
        {
            name: 'Vandal Speed Loader',  //DONT NEED 
            image: '/attachments/magazines/vandalspeedloader.png'
        },
        {
            name: 'Salvo 53 Rnd Fast Mag', 
            image: '/attachments/magazines/salvo53rndfastmag.png'
        },
    ];


    var magazine = false;
    // //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt6").innerHTML = "";

    if (attArr.includes(5)) {
        magazine = true;

    }

    if (magazine != false) {
        var ranMagazine = Math.floor(Math.random() * magazines.length) + 0;


        var magazinePick = magazines[ranMagazine];

        //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt6").innerHTML = '<b>' + "Magazine -  " + '</b>' + magazinePick.name + '<br>' + '<img  style="width:200px;" alt="'+magazinePick.name + '"  src="' + magazinePick.image + '">';
    }

     if (magazine != true){
        document.getElementById("primaryAtt6").innerHTML = '<b>' + "Magazine -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }





    //Handle

    var handles = [
        {
            name: 'Speed Tape',  //DONT NEED
            image: '/attachments/handles/speedtape.png'
        },
        {
            name: 'Dropshot Wrap', //DONT NEED
            image: '/attachments/handles/dropshotwrap.png'
        },
        {
            name: 'Field Tape', //DONT NEED
            image: '/attachments/handles/fieldtape.png'
        },
        {
            name: 'SARS Jungle Grip', //DONT NEED
            image: '/attachments/handles/sarsjunglegrip.png'
        },
        {
            name: 'Serpent Wrap',//DONT NEED
            image: '/attachments/handles/serpentwrap.png'
        },
        {
            name: 'Airborne Elastic Wrap', //DONT NEED
            image: '/attachments/handles/airborneelasticwrap.png'
        },
    ];


    var handle = false;
    //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt7").innerHTML = "";

    if (attArr.includes(6)) {
        handle = true;

    }

    if (handle != false) {
        var ranHandle = Math.floor(Math.random() * handles.length) + 0;
        

        var handlePick = handles[ranHandle];

        //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt7").innerHTML = '<b>' + "Handle -  " + '</b>' + handlePick.name + '<br>' + '<img  style="width:200px;" alt="'+ handlePick.name +'" src="' + handlePick.image + '">';
    }

     if (handle != true){
        document.getElementById("primaryAtt7").innerHTML = '<b>' + "Handle -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }


    //Stock

    var stocks = [
        {
            name: 'Tactical Stock', //DONT NEED
            image: '/attachments/stocks/tacticalstock.png'
        },
        {
            name: 'Wire Stock',  //DONT NEED
            image: '/attachments/stocks/wirestock.png'
        },
        {
            name: 'Duster Stock', //DONT NEED
            image: '/attachments/stocks/dusterstock.png'
        },
        {
            name: 'No Stock', //DONT NEED
            image: '/attachments/stocks/nostock.png'
        },
        {
            name: 'SAS Combat Stock',  //DONT NEED
            image: '/attachments/stocks/sascombatstock.png'
        },
        {
            name: 'Raider Stock',  //DONT NEED
            image: '/attachments/stocks/raiderstock.png'
        },
    ];


    var stock = false;
    //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt8").innerHTML = "";

    if (attArr.includes(7)) {
        stock = true;

    }

    if (stock != false) {
        var ranStock = Math.floor(Math.random() * stocks.length) + 0;
        

        var stockPick = stocks[ranStock];

        //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt8").innerHTML = '<b>' + "Stock -  " + '</b>' + stockPick.name + '<br>' + '<img  style="width:200px;" alt="'+stockPick.name + '" src="' + stockPick.image + '">';
    }

    if (stock != true){
        document.getElementById("primaryAtt8").innerHTML = '<b>' + "Stock -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }

}



//Type 63
function type63() {
    var numAttachments = [0, 1, 2, 3, 4, 5, 6, 7];
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
            name: 'Visiontexh 2x', //DONT NEED
            image: '/attachments/optics/visiontech2x.png'
        },
        {
            name: 'Kobra Red Dot', //DONT NEED
            image: '/attachments/optics/kobrareddot.png'
        },
        {
            name: 'Axial Arms 3x', //DONT NEED
            image: '/attachments/optics/axialarms3x.png'
        },
        {
            name: 'millstop reflex', //DONT NEED
            image: '/attachments/optics/millstopreflex.png'
        },
        {
            name: 'Royal & Kross 4x', //DONT NEED
            image: '/attachments/optics/royalandkross4x.png'
        },
        {
            name: 'Quickdot LED',//DONT NEED
            image: '/attachments/optics/quickdotled.png'
        },
        {
            name: 'Hawksmoor', //DONT NEED
            image: '/attachments/optics/hawksmoor.png'
        },
        {
            name: 'Sillix Holoscout', //DONT NEED
            image: '/attachments/optics/sillixholosxout.png'
        },
        {
            name: 'SUSAT Multizoom', //DONT NEED
            image: '/attachments/optics/susatmultizoom.png'
        },
        {
            name: 'Hangman RF',  
            image: '/attachments/optics/hangmanrf.png'
        },
        {
            name: 'Vulture Custom Zoom',  
            image: '/attachments/optics/vulturecustomzoom.png'
        },

        {
            name: 'Noch Sova Thermal', //DONT NEED
            image: '/attachments/optics/nochsovathermal.png'
        },

    ];


    var optic = false;
    // //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt1").innerHTML = "";

    if (attArr.includes(0)) {
        optic = true;
    }

    if (optic != false) {
       
        var ranOptic = Math.floor(Math.random() * optics.length) + 0;

        var opticPick = optics[ranOptic];

        // //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt1").innerHTML = '<b>' + "Optic -  " + '</b>' + opticPick.name + '<br>' + '<img  style="width:200px;"  alt="' + opticPick.name +'" src="' + opticPick.image + '">';
    }

     if(optic != true){
        document.getElementById("primaryAtt1").innerHTML = '<b>' + "Optic -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }

    //Muzzle

    var muzzles = [
        {
            name: 'Muzzle Brake 7.62',  //DONT NEED
            image: '/attachments/muzzles/muzzlebrake762.png'
        },
        {
            name: 'Flashguard 7.62', //DONT NEED
            image: '/attachments/muzzles/flashguard762.png'
        },
        {
            name: 'Silencer',  
            image: '/attachments/muzzles/silencer.png'
        },
        {
            name: 'Spetsnaz Compensator', //DONT NEED
            image: '/attachments/muzzles/spetsnazcompensator.png'
        },
        {
            name: 'KGB Eliminator', //DONT NEED
            image: '/attachments/muzzles/kgbeliminator.png'
        },
        {
            name: 'GRU Silencer', 
            image: '/attachments/muzzles/grusilencer.png'
        },
    ];


    var muzzle = false;
    // //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt2").innerHTML = "";

    if (attArr.includes(1)) {
        muzzle = true;
    }

    if (muzzle != false) {

        var ranMuzzle = Math.floor(Math.random() * muzzles.length) + 0;

        var muzzlePick = muzzles[ranMuzzle];

        //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt2").innerHTML = '<b>' + "Muzzle -  " + '</b>' + muzzlePick.name + '<br>' + '<img  style="width:200px;"  alt="' + muzzlePick.name +'" src="' + muzzlePick.image + '">';
    }

     if(muzzle != true) {
        document.getElementById("primaryAtt2").innerHTML = '<b>' + "Muzzle -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }


    //Barrels

    var barrels = [
        {
            name: '16.4 Rapid Fire',
            image: '/attachments/barrels/164rapidfire.png'
        },
        {
            name: '18.3 Cavalry Lancer',
            image: '/attachments/barrels/183cavalrylancer.png'
        },
        {
            name: '18.3 Strike Team',
            image: '/attachments/barrels/183striketeam.png'
        },
        {
            name: '16.4 Titanium',
            image: '/attachments/barrels/164titanium.png'
        },
        {
            name: '21.5 Match Grade',
            image: '/attachments/barrels/215matchgrade.png'
        },
        {
            name: '21.5 Task Force',
            image: '/attachments/barrels/215taskforce.png'
        },
    ];


    var barrel = false;
    // //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt3").innerHTML = "";

    if (attArr.includes(2)) {
        barrel = true;

    }

    if (barrel != false) {

        var ranBarrel = Math.floor(Math.random() * barrels.length) + 0;

        var barrelPick = barrels[ranBarrel];
        // //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt3").innerHTML = '<b>' + "Barrel -  " + '</b>' + barrelPick.name + '<br>' + '<img  style="width:200px;" alt="'+ barrelPick.name + '"  src="' + barrelPick.image + '">';
    }

     if (barrel != true){
        document.getElementById("primaryAtt3").innerHTML = '<b>' + "Barrel -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }


    //Body

    var bodys = [
        {
            name: 'Steady Aim Laser', //DONT NEED
            image: '/attachments/bodys/steadyaimlaser.png'
        },
        {
            name: 'Mounted Flashlight', //DONT NEED
            image: '/attachments/bodys/mountedflashlight.png'
        },
        {
            name: 'KGB Target Designator', //DONT NEED
            image: '/attachments/bodys/kgbtargetdesignator.png'
        },
        {
            name: 'GRU 5mw Laser Sight',  //DONT NEED
            image: '/attachments/bodys/gru5mwlasersight.png'
        },
        {
            name: 'Tiger Team Spotlight', //DONT NEED
            image: '/attachments/bodys/tigerteamspotlight.png'
        },
        {
            name: 'Ember Sighting Point', //DONT NEED
            image: '/attachments/bodys/embersightingpoint.png'
        },
    ];


    var body = false;
    // //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt4").innerHTML = "";

    if (attArr.includes(3)) {
        body = true;
        
    }

    if (body != false) {
        var ranBody = Math.floor(Math.random() * bodys.length) + 0;
        
        

        var bodyPick = bodys[ranBody];

        // //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt4").innerHTML = '<b>' + "Body -  " + '</b>' + bodyPick.name + '<br>' + '<img  style="width:200px;" alt="'+ bodyPick.name + '" src="' + bodyPick.image + '">';
    }


     if (body != true) {
        document.getElementById("primaryAtt4").innerHTML = '<b>' + "Body -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }

    //Underbarrel

    var underbarrels = [
        {
            name: 'Front Grip', //DONT NEED
            image: '/attachments/underbarrel/frontgrip.png'
        },
        {
            name: 'Infiltrator Grip', //DONT NEED
            image: '/attachments/underbarrel/infiltratorgrip.png'
        },
        {
            name: 'Patrol Grip',  //DONT NEED
            image: '/attachments/underbarrel/patrolgrip.png'
        },
        {
            name: 'Bruiser Grip',  //DONT NEED
            image: '/attachments/underbarrel/bruisergrip.png'
        },
        {
            name: 'Spetsnaz Grip', 
            image: '/attachments/underbarrel/spetsnazgrip.png'
        },
        {
            name: 'Spetsnaz Speedgrip', //DONT NEED
            image: '/attachments/underbarrel/spetsnazspeedgrip.png'
        },
    ];


    var underbarrel = false;
    // //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt5").innerHTML = "";

    if (attArr.includes(4)) {
        underbarrel = true;

    }

    if (underbarrel != false) {
        var ranUnderbarrel = Math.floor(Math.random() * underbarrels.length) + 0;

        var underbarrelPick = underbarrels[ranUnderbarrel];
 
        // //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt5").innerHTML = '<b>' + "Underbarrel -  " + '</b>' + underbarrelPick.name + '<br>' + '<img  style="width:200px;" alt="'+ underbarrelPick.name +'"  src="' + underbarrelPick.image + '">';
    }


     if (underbarrel != true){
        document.getElementById("primaryAtt5").innerHTML = '<b>' + "Underbarrel -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }


    //Magazine

    var magazines = [
        {
            name: '30 Rnd',  //DONT NEED
            image: '/attachments/magazines/30rnd.png'
        },
        {
            name: 'Taped Mags', //DONT NEED
            image: '/attachments/magazines/tapedmags.png'
        },
        {
            name: '30 Rnd Speed Mag', //DONT NEED
            image: '/attachments/magazines/30rndspeedmag.png'
        },
        {
            name: 'Bakelite 35 Rnd',
            image: '/attachments/magazines/bakelite35rnd.png'
        },
        {
            name: 'GRU Mag Clamp', //DONT NEED
            image: '/attachments/magazines/grumagclamp.png'
        },
        {
            name: 'VDV 35 Rnd Fast Mag',
            image: '/attachments/magazines/vdv35rndfastmag.png'
        },
    ];


    var magazine = false;
    // //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt6").innerHTML = "";

    if (attArr.includes(5)) {
        magazine = true;

    }

    if (magazine != false) {
        var ranMagazine = Math.floor(Math.random() * magazines.length) + 0;


        var magazinePick = magazines[ranMagazine];

        //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt6").innerHTML = '<b>' + "Magazine -  " + '</b>' + magazinePick.name + '<br>' + '<img  style="width:200px;" alt="'+magazinePick.name + '"  src="' + magazinePick.image + '">';
    }

     if (magazine != true){
        document.getElementById("primaryAtt6").innerHTML = '<b>' + "Magazine -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }





    //Handle

    var handles = [
        {
            name: 'Speed Tape',  //DONT NEED
            image: '/attachments/handles/speedtape.png'
        },
        {
            name: 'Dropshot Wrap', //DONT NEED
            image: '/attachments/handles/dropshotwrap.png'
        },
        {
            name: 'Field Tape', //DONT NEED
            image: '/attachments/handles/fieldtape.png'
        },
        {
            name: 'Spetsnaz Field Grip',  //DONT NEED
            image: '/attachments/handles/spetsnazfieldgrip.png'
        },
        {
            name: 'Serpent Wrap',//DONT NEED
            image: '/attachments/handles/serpentwrap.png'
        },
        {
            name: 'GRU Elastic Wrap', //DONT NEED
            image: '/attachments/handles/gruelasticwrap.png'
        },
    ];


    var handle = false;
    //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt7").innerHTML = "";

    if (attArr.includes(6)) {
        handle = true;

    }

    if (handle != false) {
        var ranHandle = Math.floor(Math.random() * handles.length) + 0;
        

        var handlePick = handles[ranHandle];

        //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt7").innerHTML = '<b>' + "Handle -  " + '</b>' + handlePick.name + '<br>' + '<img  style="width:200px;" alt="'+ handlePick.name +'" src="' + handlePick.image + '">';
    }

     if (handle != true){
        document.getElementById("primaryAtt7").innerHTML = '<b>' + "Handle -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }


    //Stock

    var stocks = [
        {
            name: 'Tactical Stock', //DONT NEED
            image: '/attachments/stocks/tacticalstock.png'
        },
        {
            name: 'Wire Stock',  //DONT NEED
            image: '/attachments/stocks/wirestock.png'
        },
        {
            name: 'Duster Stock', //DONT NEED
            image: '/attachments/stocks/dusterstock.png'
        },
        {
            name: 'No Stock', //DONT NEED
            image: '/attachments/stocks/nostock.png'
        },
        {
            name: 'Spetsnaz PKM Stock', //DONT NEED
            image: '/attachments/stocks/spetsnazpkmstock.png'
        },
        {
            name: 'KGB Pad',  //DONT NEED
            image: '/attachments/stocks/kgbpad.png'
        },
    ];


    var stock = false;
    //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt8").innerHTML = "";

    if (attArr.includes(7)) {
        stock = true;

    }

    if (stock != false) {
        var ranStock = Math.floor(Math.random() * stocks.length) + 0;
        

        var stockPick = stocks[ranStock];

        //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt8").innerHTML = '<b>' + "Stock -  " + '</b>' + stockPick.name + '<br>' + '<img  style="width:200px;" alt="'+stockPick.name + '" src="' + stockPick.image + '">';
    }

    if (stock != true){
        document.getElementById("primaryAtt8").innerHTML = '<b>' + "Stock -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }

}



//M16
function m16() {
    var numAttachments = [0, 1, 2, 3, 4, 5, 6, 7];
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
            name: 'Visiontexh 2x', //DONT NEED
            image: '/attachments/optics/visiontech2x.png'
        },
        {
            name: 'Kobra Red Dot', //DONT NEED
            image: '/attachments/optics/kobrareddot.png'
        },
        {
            name: 'Axial Arms 3x', //DONT NEED
            image: '/attachments/optics/axialarms3x.png'
        },
        {
            name: 'millstop reflex', //DONT NEED
            image: '/attachments/optics/millstopreflex.png'
        },
        {
            name: 'Royal & Kross 4x', //DONT NEED
            image: '/attachments/optics/royalandkross4x.png'
        },
        {
            name: 'Quickdot LED',//DONT NEED
            image: '/attachments/optics/quickdotled.png'
        },
        {
            name: 'Hawksmoor', //DONT NEED
            image: '/attachments/optics/hawksmoor.png'
        },
        {
            name: 'Sillix Holoscout', //DONT NEED
            image: '/attachments/optics/sillixholosxout.png'
        },
        {
            name: 'SUSAT Multizoom', //DONT NEED
            image: '/attachments/optics/susatmultizoom.png'
        },
        {
            name: 'Hangman RF',  //DONT NEED
            image: '/attachments/optics/hangmanrf.png'
        },
        {
            name: 'Vulture Custom Zoom',  //DONT NEED
            image: '/attachments/optics/vulturecustomzoom.png'
        },

        {
            name: 'AN/PVS-4 Thermal',
            image: '/attachments/optics/anpvs4thermal.png'
        },

    ];


    var optic = false;
    // //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt1").innerHTML = "";

    if (attArr.includes(0)) {
        optic = true;
    }

    if (optic != false) {
       
        var ranOptic = Math.floor(Math.random() * optics.length) + 0;

        var opticPick = optics[ranOptic];

        // //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt1").innerHTML = '<b>' + "Optic -  " + '</b>' + opticPick.name + '<br>' + '<img  style="width:200px;"  alt="' + opticPick.name +'" src="' + opticPick.image + '">';
    }

     if(optic != true){
        document.getElementById("primaryAtt1").innerHTML = '<b>' + "Optic -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }

    //Muzzle

    var muzzles = [
        {
            name: 'Muzzle Brake 5.56', //DONT NEED
            image: '/attachments/muzzles/muzzlebrake556.png'
        },
        {
            name: 'Flashguard 5.56', //DONT NEED
            image: '/attachments/muzzles/flashguard556.png'
        },
        {
            name: 'Silencer',  //DONT NEED
            image: '/attachments/muzzles/silencer.png'
        },
        {
            name: 'Infantry Compensator', //DONT NEED
            image: '/attachments/muzzles/infantrycompensator.png'
        },
        {
            name: 'SOCOM Eliminator', //DONT NEED
            image: '/attachments/muzzles/socomeliminator.png'
        },
        {
            name: 'Agency Silencer', 
            image: '/attachments/muzzles/agencysilencer.png'
        },
    ];


    var muzzle = false;
    // //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt2").innerHTML = "";

    if (attArr.includes(1)) {
        muzzle = true;
    }

    if (muzzle != false) {

        var ranMuzzle = Math.floor(Math.random() * muzzles.length) + 0;

        var muzzlePick = muzzles[ranMuzzle];

        //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt2").innerHTML = '<b>' + "Muzzle -  " + '</b>' + muzzlePick.name + '<br>' + '<img  style="width:200px;"  alt="' + muzzlePick.name +'" src="' + muzzlePick.image + '">';
    }

     if(muzzle != true) {
        document.getElementById("primaryAtt2").innerHTML = '<b>' + "Muzzle -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }


    //Barrels

    var barrels = [
        {
            name: '16.3 Rapid Fire',
            image: '/attachments/barrels/163rapidfire.png'
        },
        {
            name: '15.9 Cavalry Lancer',
            image: '/attachments/barrels/159cavalrylancer.png'
        },
        {
            name: '15.9 Strike Team',
            image: '/attachments/barrels/159striketeam.png'
        },
        {
            name: '16.3 Titanium',
            image: '/attachments/barrels/163titanium.png'
        },
        {
            name: '20.5 Match Grade',
            image: '/attachments/barrels/205matchgrade.png'
        },
        {
            name: '20.5 Task Force',
            image: '/attachments/barrels/205taskforce.png'
        },
    ];


    var barrel = false;
    // //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt3").innerHTML = "";

    if (attArr.includes(2)) {
        barrel = true;

    }

    if (barrel != false) {

        var ranBarrel = Math.floor(Math.random() * barrels.length) + 0;

        var barrelPick = barrels[ranBarrel];
        // //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt3").innerHTML = '<b>' + "Barrel -  " + '</b>' + barrelPick.name + '<br>' + '<img  style="width:200px;" alt="'+ barrelPick.name + '"  src="' + barrelPick.image + '">';
    }

     if (barrel != true){
        document.getElementById("primaryAtt3").innerHTML = '<b>' + "Barrel -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }


    //Body

    var bodys = [
        {
            name: 'Steady Aim Laser', //DONT NEED
            image: '/attachments/bodys/steadyaimlaser.png'
        },
        {
            name: 'Mounted Flashlight', //DONT NEED
            image: '/attachments/bodys/mountedflashlight.png'
        },
        {
            name: 'SOF Target Designator', //DONT NEED
            image: '/attachments/bodys/softargetdesignator.png'
        },
        {
            name: 'SWAT 5mw Laser Sight', //DONT NEED
            image: '/attachments/bodys/swat5mwlasersight.png'
        },
        {
            name: 'Tiger Team Spotlight', //DONT NEED
            image: '/attachments/bodys/tigerteamspotlight.png'
        },
        {
            name: 'Ember Sighting Point', //DONT NEED
            image: '/attachments/bodys/embersightingpoint.png'
        },
    ];


    var body = false;
    // //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt4").innerHTML = "";

    if (attArr.includes(3)) {
        body = true;
        
    }

    if (body != false) {
        var ranBody = Math.floor(Math.random() * bodys.length) + 0;
        
        

        var bodyPick = bodys[ranBody];

        // //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt4").innerHTML = '<b>' + "Body -  " + '</b>' + bodyPick.name + '<br>' + '<img  style="width:200px;" alt="'+ bodyPick.name + '" src="' + bodyPick.image + '">';
    }


     if (body != true) {
        document.getElementById("primaryAtt4").innerHTML = '<b>' + "Body -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }

    //Underbarrel

    var underbarrels = [
        {
            name: 'Front Grip', //DONT NEED
            image: '/attachments/underbarrel/frontgrip.png'
        },
        {
            name: 'Infiltrator Grip', //DONT NEED
            image: '/attachments/underbarrel/infiltratorgrip.png'
        },
        {
            name: 'Patrol Grip',  //DONT NEED
            image: '/attachments/underbarrel/patrolgrip.png'
        },
        {
            name: 'Bruiser Grip',  //DONT NEED
            image: '/attachments/underbarrel/bruisergrip.png'
        },
        {
            name: 'Field Agent Grip',  //DONT NEED
            image: '/attachments/underbarrel/fieldagentgrip.png'
        },
        {
            name: 'SFOD Speedgrip',  //DONT NEED
            image: '/attachments/underbarrel/sfodspeedgrip.png'
        },
    ];


    var underbarrel = false;
    // //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt5").innerHTML = "";

    if (attArr.includes(4)) {
        underbarrel = true;

    }

    if (underbarrel != false) {
        var ranUnderbarrel = Math.floor(Math.random() * underbarrels.length) + 0;

        var underbarrelPick = underbarrels[ranUnderbarrel];
 
        // //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt5").innerHTML = '<b>' + "Underbarrel -  " + '</b>' + underbarrelPick.name + '<br>' + '<img  style="width:200px;" alt="'+ underbarrelPick.name +'"  src="' + underbarrelPick.image + '">';
    }


     if (underbarrel != true){
        document.getElementById("primaryAtt5").innerHTML = '<b>' + "Underbarrel -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }


    //Magazine

    var magazines = [
        {
            name: '45 Rnd', 
            image: '/attachments/magazines/45rnd.png'
        },
        {
            name: 'Jungle-Style Mag', //DONT NEED
            image: '/attachments/magazines/junglestylemag.png'
        },
        {
            name: '45 Rnd Speed Mag', //DONT NEED
            image: '/attachments/magazines/45rndspeedmag.png'
        },
        {
            name: 'STANAG 54 Rnd',
            image: '/attachments/magazines/stanag54rnd.png'
        },
        {
            name: 'SAS Mag Clamp',  //DONT NEED
            image: '/attachments/magazines/sasmagclamp.png'
        },
        {
            name: 'SALVO 54 RND Fast Mag',  //DONT NEED
            image: '/attachments/magazines/salvo54rndfastmag.png'
        },
    ];


    var magazine = false;
    // //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt6").innerHTML = "";

    if (attArr.includes(5)) {
        magazine = true;

    }

    if (magazine != false) {
        var ranMagazine = Math.floor(Math.random() * magazines.length) + 0;


        var magazinePick = magazines[ranMagazine];

        //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt6").innerHTML = '<b>' + "Magazine -  " + '</b>' + magazinePick.name + '<br>' + '<img  style="width:200px;" alt="'+magazinePick.name + '"  src="' + magazinePick.image + '">';
    }

     if (magazine != true){
        document.getElementById("primaryAtt6").innerHTML = '<b>' + "Magazine -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }





    //Handle

    var handles = [
        {
            name: 'Speed Tape',  //DONT NEED
            image: '/attachments/handles/speedtape.png'
        },
        {
            name: 'Dropshot Wrap', //DONT NEED
            image: '/attachments/handles/dropshotwrap.png'
        },
        {
            name: 'Field Tape', //DONT NEED
            image: '/attachments/handles/fieldtape.png'
        },
        {
            name: 'SARS Jungle Grip', //DONT NEED
            image: '/attachments/handles/sarsjunglegrip.png'
        },
        {
            name: 'Serpent Wrap',//DONT NEED
            image: '/attachments/handles/serpentwrap.png'
        },
        {
            name: 'Airborne Elastic Wrap', //DONT NEED
            image: '/attachments/handles/airborneelasticwrap.png'
        },
    ];


    var handle = false;
    //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt7").innerHTML = "";

    if (attArr.includes(6)) {
        handle = true;

    }

    if (handle != false) {
        var ranHandle = Math.floor(Math.random() * handles.length) + 0;
        

        var handlePick = handles[ranHandle];

        //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt7").innerHTML = '<b>' + "Handle -  " + '</b>' + handlePick.name + '<br>' + '<img  style="width:200px;" alt="'+ handlePick.name +'" src="' + handlePick.image + '">';
    }

     if (handle != true){
        document.getElementById("primaryAtt7").innerHTML = '<b>' + "Handle -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }


    //Stock

    var stocks = [
        {
            name: 'Tactical Stock', //DONT NEED
            image: '/attachments/stocks/tacticalstock.png'
        },
        {
            name: 'Wire Stock',  //DONT NEED
            image: '/attachments/stocks/wirestock.png'
        },
        {
            name: 'Duster Stock', //DONT NEED
            image: '/attachments/stocks/dusterstock.png'
        },
        {
            name: 'Buffer Tube', 
            image: '/attachments/stocks/buffertube.png'
        },
        {
            name: 'SAS Combat Stock',  //DONT NEED
            image: '/attachments/stocks/sascombatstock.png'
        },
        {
            name: 'Raider Pad',  //DONT NEED
            image: '/attachments/stocks/raiderpad.png'
        },
    ];


    var stock = false;
    //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt8").innerHTML = "";

    if (attArr.includes(7)) {
        stock = true;

    }

    if (stock != false) {
        var ranStock = Math.floor(Math.random() * stocks.length) + 0;
        

        var stockPick = stocks[ranStock];

        //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt8").innerHTML = '<b>' + "Stock -  " + '</b>' + stockPick.name + '<br>' + '<img  style="width:200px;" alt="'+stockPick.name + '" src="' + stockPick.image + '">';
    }

    if (stock != true){
        document.getElementById("primaryAtt8").innerHTML = '<b>' + "Stock -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }

}



//AUG
function aug() {
    var numAttachments = [0, 1, 2, 3, 4, 5, 6, 7];
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
            name: 'Visiontexh 2x', //DONT NEED
            image: '/attachments/optics/visiontech2x.png'
        },
        {
            name: 'Kobra Red Dot', //DONT NEED
            image: '/attachments/optics/kobrareddot.png'
        },
        {
            name: 'Axial Arms 3x', //DONT NEED
            image: '/attachments/optics/axialarms3x.png'
        },
        {
            name: 'millstop reflex', //DONT NEED
            image: '/attachments/optics/millstopreflex.png'
        },
        {
            name: 'Royal & Kross 4x', //DONT NEED
            image: '/attachments/optics/royalandkross4x.png'
        },
        {
            name: 'Quickdot LED',//DONT NEED
            image: '/attachments/optics/quickdotled.png'
        },
        {
            name: 'Hawksmoor', //DONT NEED
            image: '/attachments/optics/hawksmoor.png'
        },
        {
            name: 'Sillix Holoscout', //DONT NEED
            image: '/attachments/optics/sillixholosxout.png'
        },
        {
            name: 'SUSAT Multizoom', //DONT NEED
            image: '/attachments/optics/susatmultizoom.png'
        },
        {
            name: 'Hangman RF',  //DONT NEED
            image: '/attachments/optics/hangmanrf.png'
        },
        {
            name: 'Vulture Custom Zoom',  //DONT NEED
            image: '/attachments/optics/vulturecustomzoom.png'
        },

        {
            name: 'AN/PVS-4 Thermal', //DONT NEED
            image: '/attachments/optics/anpvs4thermal.png'
        },

    ];


    var optic = false;
    // //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt1").innerHTML = "";

    if (attArr.includes(0)) {
        optic = true;
    }

    if (optic != false) {
       
        var ranOptic = Math.floor(Math.random() * optics.length) + 0;

        var opticPick = optics[ranOptic];

        // //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt1").innerHTML = '<b>' + "Optic -  " + '</b>' + opticPick.name + '<br>' + '<img  style="width:200px;"  alt="' + opticPick.name +'" src="' + opticPick.image + '">';
    }

     if(optic != true){
        document.getElementById("primaryAtt1").innerHTML = '<b>' + "Optic -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }

    //Muzzle

    var muzzles = [
        {
            name: 'Muzzle Brake 5.56', //DONT NEED
            image: '/attachments/muzzles/muzzlebrake556.png'
        },
        {
            name: 'Flashguard 5.56', //DONT NEED
            image: '/attachments/muzzles/flashguard556.png'
        },
        {
            name: 'Silencer',  //DONT NEED
            image: '/attachments/muzzles/silencer.png'
        },
        {
            name: 'Infantry Compensator', //DONT NEED
            image: '/attachments/muzzles/infantrycompensator.png'
        },
        {
            name: 'SOCOM Eliminator', //DONT NEED
            image: '/attachments/muzzles/socomeliminator.png'
        },
        {
            name: 'Agency Silencer', //DONT NEED
            image: '/attachments/muzzles/agencysilencer.png'
        },
    ];


    var muzzle = false;
    // //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt2").innerHTML = "";

    if (attArr.includes(1)) {
        muzzle = true;
    }

    if (muzzle != false) {

        var ranMuzzle = Math.floor(Math.random() * muzzles.length) + 0;

        var muzzlePick = muzzles[ranMuzzle];

        //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt2").innerHTML = '<b>' + "Muzzle -  " + '</b>' + muzzlePick.name + '<br>' + '<img  style="width:200px;"  alt="' + muzzlePick.name +'" src="' + muzzlePick.image + '">';
    }

     if(muzzle != true) {
        document.getElementById("primaryAtt2").innerHTML = '<b>' + "Muzzle -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }


    //Barrels

    var barrels = [
        {
            name: '18 Rapid Fire',
            image: '/attachments/barrels/18rapidfire.png'
        },
        {
            name: '17.9 Cavalry Lancer',
            image: '/attachments/barrels/179cavalrylancer.png'
        },
        {
            name: '18.2 Strike Team',
            image: '/attachments/barrels/182striketeam.png'
        },
        {
            name: '17 Titanium',
            image: '/attachments/barrels/17titanium.png'
        },
        {
            name: '19.6 Match Grade',
            image: '/attachments/barrels/196matchgrade.png'
        },
        {
            name: '19.8 Task Force',
            image: '/attachments/barrels/198taskforce.png'
        },
    ];


    var barrel = false;
    // //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt3").innerHTML = "";

    if (attArr.includes(2)) {
        barrel = true;

    }

    if (barrel != false) {

        var ranBarrel = Math.floor(Math.random() * barrels.length) + 0;

        var barrelPick = barrels[ranBarrel];
        // //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt3").innerHTML = '<b>' + "Barrel -  " + '</b>' + barrelPick.name + '<br>' + '<img  style="width:200px;" alt="'+ barrelPick.name + '"  src="' + barrelPick.image + '">';
    }

     if (barrel != true){
        document.getElementById("primaryAtt3").innerHTML = '<b>' + "Barrel -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }


    //Body

    var bodys = [
        {
            name: 'Steady Aim Laser', //DONT NEED
            image: '/attachments/bodys/steadyaimlaser.png'
        },
        {
            name: 'Mounted Flashlight', //DONT NEED
            image: '/attachments/bodys/mountedflashlight.png'
        },
        {
            name: 'SOF Target Designator', //DONT NEED
            image: '/attachments/bodys/softargetdesignator.png'
        },
        {
            name: 'SWAT 5mw Laser Sight', //DONT NEED
            image: '/attachments/bodys/swat5mwlasersight.png'
        },
        {
            name: 'Tiger Team Spotlight', //DONT NEED
            image: '/attachments/bodys/tigerteamspotlight.png'
        },
        {
            name: 'Ember Sighting Point', //DONT NEED
            image: '/attachments/bodys/embersightingpoint.png'
        },
    ];


    var body = false;
    // //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt4").innerHTML = "";

    if (attArr.includes(3)) {
        body = true;
        
    }

    if (body != false) {
        var ranBody = Math.floor(Math.random() * bodys.length) + 0;
        
        

        var bodyPick = bodys[ranBody];

        // //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt4").innerHTML = '<b>' + "Body -  " + '</b>' + bodyPick.name + '<br>' + '<img  style="width:200px;" alt="'+ bodyPick.name + '" src="' + bodyPick.image + '">';
    }


     if (body != true) {
        document.getElementById("primaryAtt4").innerHTML = '<b>' + "Body -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }

    //Underbarrel

    var underbarrels = [
        {
            name: 'Front Grip', //DONT NEED
            image: '/attachments/underbarrel/frontgrip.png'
        },
        {
            name: 'Infiltrator Grip', //DONT NEED
            image: '/attachments/underbarrel/infiltratorgrip.png'
        },
        {
            name: 'Patrol Grip',  //DONT NEED
            image: '/attachments/underbarrel/patrolgrip.png'
        },
        {
            name: 'Bruiser Grip',  //DONT NEED
            image: '/attachments/underbarrel/bruisergrip.png'
        },
        {
            name: 'Field Agent Grip',  //DONT NEED
            image: '/attachments/underbarrel/fieldagentgrip.png'
        },
        {
            name: 'SFOD Speedgrip',  //DONT NEED
            image: '/attachments/underbarrel/sfodspeedgrip.png'
        },
    ];


    var underbarrel = false;
    // //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt5").innerHTML = "";

    if (attArr.includes(4)) {
        underbarrel = true;

    }

    if (underbarrel != false) {
        var ranUnderbarrel = Math.floor(Math.random() * underbarrels.length) + 0;

        var underbarrelPick = underbarrels[ranUnderbarrel];
 
        // //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt5").innerHTML = '<b>' + "Underbarrel -  " + '</b>' + underbarrelPick.name + '<br>' + '<img  style="width:200px;" alt="'+ underbarrelPick.name +'"  src="' + underbarrelPick.image + '">';
    }


     if (underbarrel != true){
        document.getElementById("primaryAtt5").innerHTML = '<b>' + "Underbarrel -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }


    //Magazine

    var magazines = [
        {
            name: '45 Rnd Drum', 
            image: '/attachments/magazines/45rnddrum.png'
        },
        {
            name: 'Jungle-Style Mag', 
            image: '/attachments/magazines/junglestylemag.png'
        },
        {
            name: '45 Rnd Speed Mag',
            image: '/attachments/magazines/45rndspeedmag.png'
        },
        {
            name: 'STANAG 54 Rnd Drum',
            image: '/attachments/magazines/stanag54rnddrum.png'
        },
        {
            name: 'SAS Mag Clamp',  //DONT NEED
            image: '/attachments/magazines/sasmagclamp.png'
        },
        {
            name: 'Agency Silencer', //DONT NEED
            image: '/attachments/magazines/salvo54rndfastmag.png'
        },
    ];


    var magazine = false;
    // //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt6").innerHTML = "";

    if (attArr.includes(5)) {
        magazine = true;

    }

    if (magazine != false) {
        var ranMagazine = Math.floor(Math.random() * magazines.length) + 0;


        var magazinePick = magazines[ranMagazine];

        //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt6").innerHTML = '<b>' + "Magazine -  " + '</b>' + magazinePick.name + '<br>' + '<img  style="width:200px;" alt="'+magazinePick.name + '"  src="' + magazinePick.image + '">';
    }

     if (magazine != true){
        document.getElementById("primaryAtt6").innerHTML = '<b>' + "Magazine -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }





    //Handle

    var handles = [
        {
            name: 'Speed Tape',  //DONT NEED
            image: '/attachments/handles/speedtape.png'
        },
        {
            name: 'Dropshot Wrap', //DONT NEED
            image: '/attachments/handles/dropshotwrap.png'
        },
        {
            name: 'Field Tape', //DONT NEED
            image: '/attachments/handles/fieldtape.png'
        },
        {
            name: 'SARS Jungle Grip', //DONT NEED
            image: '/attachments/handles/sarsjunglegrip.png'
        },
        {
            name: 'Serpent Wrap',//DONT NEED
            image: '/attachments/handles/serpentwrap.png'
        },
        {
            name: 'Airborne Elastic Wrap', //DONT NEED
            image: '/attachments/handles/airborneelasticwrap.png'
        },
    ];


    var handle = false;
    //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt7").innerHTML = "";

    if (attArr.includes(6)) {
        handle = true;

    }

    if (handle != false) {
        var ranHandle = Math.floor(Math.random() * handles.length) + 0;
        

        var handlePick = handles[ranHandle];

        //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt7").innerHTML = '<b>' + "Handle -  " + '</b>' + handlePick.name + '<br>' + '<img  style="width:200px;" alt="'+ handlePick.name +'" src="' + handlePick.image + '">';
    }

     if (handle != true){
        document.getElementById("primaryAtt7").innerHTML = '<b>' + "Handle -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }


    //Stock

    var stocks = [
        {
            name: 'Tactical Stock', //DONT NEED
            image: '/attachments/stocks/tacticalstock.png'
        },
        {
            name: 'Marathon Stock',  //DONT NEED
            image: '/attachments/stocks/marathonstock.png'
        },
        {
            name: 'Duster Pad',  //DONT NEED
            image: '/attachments/stocks/dusterpad.png'
        },
        {
            name: 'CQB Pad',  //DONT NEED
            image: '/attachments/stocks/cqbpad.png'
        },
        {
            name: 'SAS Combat Stock',  //DONT NEED
            image: '/attachments/stocks/sascombatstock.png'
        },
        {
            name: 'Raider Pad',  //DONT NEED
            image: '/attachments/stocks/raiderpad.png'
        },
    ];


    var stock = false;
    //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt8").innerHTML = "";

    if (attArr.includes(7)) {
        stock = true;

    }

    if (stock != false) {
        var ranStock = Math.floor(Math.random() * stocks.length) + 0;
        

        var stockPick = stocks[ranStock];

        //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt8").innerHTML = '<b>' + "Stock -  " + '</b>' + stockPick.name + '<br>' + '<img  style="width:200px;" alt="'+stockPick.name + '" src="' + stockPick.image + '">';
    }

    if (stock != true){
        document.getElementById("primaryAtt8").innerHTML = '<b>' + "Stock -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }

}



//DMR 14

function dmr14() {
    var numAttachments = [0, 1, 2, 3, 4, 5, 6, 7];
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
            name: 'Visiontexh 2x', //DONT NEED
            image: '/attachments/optics/visiontech2x.png'
        },
        {
            name: 'Kobra Red Dot', //DONT NEED
            image: '/attachments/optics/kobrareddot.png'
        },
        {
            name: 'Axial Arms 3x', //DONT NEED
            image: '/attachments/optics/axialarms3x.png'
        },
        {
            name: 'millstop reflex', //DONT NEED
            image: '/attachments/optics/millstopreflex.png'
        },
        {
            name: 'Royal & Kross 4x', //DONT NEED
            image: '/attachments/optics/royalandkross4x.png'
        },
        {
            name: 'Quickdot LED',//DONT NEED
            image: '/attachments/optics/quickdotled.png'
        },
        {
            name: 'Hawksmoor', //DONT NEED
            image: '/attachments/optics/hawksmoor.png'
        },
        {
            name: 'Sillix Holoscout', //DONT NEED
            image: '/attachments/optics/sillixholosxout.png'
        },
        {
            name: 'SUSAT Multizoom', //DONT NEED
            image: '/attachments/optics/susatmultizoom.png'
        },
        {
            name: 'Hangman RF',  //DONT NEED
            image: '/attachments/optics/hangmanrf.png'
        },
        {
            name: 'Vulture Custom Zoom',  //DONT NEED
            image: '/attachments/optics/vulturecustomzoom.png'
        },

        {
            name: 'AN/PVS-4 Thermal', //DONT NEED
            image: '/attachments/optics/anpvs4thermal.png'
        },

    ];


    var optic = false;
    // //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt1").innerHTML = "";

    if (attArr.includes(0)) {
        optic = true;
    }

    if (optic != false) {
       
        var ranOptic = Math.floor(Math.random() * optics.length) + 0;

        var opticPick = optics[ranOptic];

        // //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt1").innerHTML = '<b>' + "Optic -  " + '</b>' + opticPick.name + '<br>' + '<img  style="width:200px;"  alt="' + opticPick.name +'" src="' + opticPick.image + '">';
    }

     if(optic != true){
        document.getElementById("primaryAtt1").innerHTML = '<b>' + "Optic -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }

    //Muzzle

    var muzzles = [
        {
            name: 'Muzzle Brake 7.62',  //DONT NEED
            image: '/attachments/muzzles/muzzlebrake762.png'
        },
        {
            name: 'Flashguard 7.62', //DONT NEED
            image: '/attachments/muzzles/flashguard762.png'
        },
        {
            name: 'Silencer',  //DONT NEED
            image: '/attachments/muzzles/silencer.png'
        },
        {
            name: 'Infantry Compensator', //DONT NEED
            image: '/attachments/muzzles/infantrycompensator.png'
        },
        {
            name: 'SOCOM Eliminator', //DONT NEED
            image: '/attachments/muzzles/socomeliminator.png'
        },
        {
            name: 'Agency Silencer', //DONT NEED
            image: '/attachments/muzzles/agencysilencer.png'
        },
    ];


    var muzzle = false;
    // //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt2").innerHTML = "";

    if (attArr.includes(1)) {
        muzzle = true;
    }

    if (muzzle != false) {

        var ranMuzzle = Math.floor(Math.random() * muzzles.length) + 0;

        var muzzlePick = muzzles[ranMuzzle];

        //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt2").innerHTML = '<b>' + "Muzzle -  " + '</b>' + muzzlePick.name + '<br>' + '<img  style="width:200px;"  alt="' + muzzlePick.name +'" src="' + muzzlePick.image + '">';
    }

     if(muzzle != true) {
        document.getElementById("primaryAtt2").innerHTML = '<b>' + "Muzzle -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }


    //Barrels

    var barrels = [
        {
            name: '17 Rapid Fire',
            image: '/attachments/barrels/17rapidfire.png'
        },
        {
            name: '17.1 Cavalry Lancer',
            image: '/attachments/barrels/171cavalrylancer.png'
        },
        {
            name: '17.1 Strike Team',
            image: '/attachments/barrels/171striketeam.png'
        },
        {
            name: '16.3 Titanium',
            image: '/attachments/barrels/163titanium.png'
        },
        {
            name: '20.8 Match Grade',
            image: '/attachments/barrels/208matchgrade.png'
        },
        {
            name: '20.8 Task Force',
            image: '/attachments/barrels/208taskforce.png'
        },
    ];


    var barrel = false;
    // //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt3").innerHTML = "";

    if (attArr.includes(2)) {
        barrel = true;

    }

    if (barrel != false) {

        var ranBarrel = Math.floor(Math.random() * barrels.length) + 0;

        var barrelPick = barrels[ranBarrel];
        // //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt3").innerHTML = '<b>' + "Barrel -  " + '</b>' + barrelPick.name + '<br>' + '<img  style="width:200px;" alt="'+ barrelPick.name + '"  src="' + barrelPick.image + '">';
    }

     if (barrel != true){
        document.getElementById("primaryAtt3").innerHTML = '<b>' + "Barrel -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }


    //Body

    var bodys = [
        {
            name: 'Steady Aim Laser', //DONT NEED
            image: '/attachments/bodys/steadyaimlaser.png'
        },
        {
            name: 'Mounted Flashlight', //DONT NEED
            image: '/attachments/bodys/mountedflashlight.png'
        },
        {
            name: 'SOF Target Designator', //DONT NEED
            image: '/attachments/bodys/softargetdesignator.png'
        },
        {
            name: 'SWAT 5mw Laser Sight', //DONT NEED
            image: '/attachments/bodys/swat5mwlasersight.png'
        },
        {
            name: 'Tiger Team Spotlight', //DONT NEED
            image: '/attachments/bodys/tigerteamspotlight.png'
        },
        {
            name: 'Ember Sighting Point', //DONT NEED
            image: '/attachments/bodys/embersightingpoint.png'
        },
    ];


    var body = false;
    // //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt4").innerHTML = "";

    if (attArr.includes(3)) {
        body = true;
        
    }

    if (body != false) {
        var ranBody = Math.floor(Math.random() * bodys.length) + 0;
        
        

        var bodyPick = bodys[ranBody];

        // //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt4").innerHTML = '<b>' + "Body -  " + '</b>' + bodyPick.name + '<br>' + '<img  style="width:200px;" alt="'+ bodyPick.name + '" src="' + bodyPick.image + '">';
    }


     if (body != true) {
        document.getElementById("primaryAtt4").innerHTML = '<b>' + "Body -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }

    //Underbarrel

    var underbarrels = [
        {
            name: 'Front Grip', //DONT NEED
            image: '/attachments/underbarrel/frontgrip.png'
        },
        {
            name: 'Infiltrator Grip', //DONT NEED
            image: '/attachments/underbarrel/infiltratorgrip.png'
        },
        {
            name: 'Patrol Grip',  //DONT NEED
            image: '/attachments/underbarrel/patrolgrip.png'
        },
        {
            name: 'Bruiser Grip',  //DONT NEED
            image: '/attachments/underbarrel/bruisergrip.png'
        },
        {
            name: 'Field Agent Grip',  //DONT NEED
            image: '/attachments/underbarrel/fieldagentgrip.png'
        },
        {
            name: 'SFOD Speedgrip',  //DONT NEED
            image: '/attachments/underbarrel/sfodspeedgrip.png'
        },
    ];


    var underbarrel = false;
    // //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt5").innerHTML = "";

    if (attArr.includes(4)) {
        underbarrel = true;

    }

    if (underbarrel != false) {
        var ranUnderbarrel = Math.floor(Math.random() * underbarrels.length) + 0;

        var underbarrelPick = underbarrels[ranUnderbarrel];
 
        // //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt5").innerHTML = '<b>' + "Underbarrel -  " + '</b>' + underbarrelPick.name + '<br>' + '<img  style="width:200px;" alt="'+ underbarrelPick.name +'"  src="' + underbarrelPick.image + '">';
    }


     if (underbarrel != true){
        document.getElementById("primaryAtt5").innerHTML = '<b>' + "Underbarrel -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }


    //Magazine

    var magazines = [
        {
            name: '30 Rnd', 
            image: '/attachments/magazines/30rnd.png'
        },
        {
            name: 'Jungle-Style Mag', //DONT NEED
            image: '/attachments/magazines/junglestylemag.png'
        },
        {
            name: '30 Rnd Speed Mag',
            image: '/attachments/magazines/30rndspeedmag.png'
        },
        {
            name: 'STANAG 35 Rnd', 
            image: '/attachments/magazines/stanag35rnd.png'
        },
        {
            name: 'SAS Mag Clamp',  //DONT NEED
            image: '/attachments/magazines/sasmagclamp.png'
        },
        {
            name: 'Salvo 35 Rnd Fast Mag', 
            image: '/attachments/magazines/salvo35rndfastmag.png'
        },
    ];


    var magazine = false;
    // //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt6").innerHTML = "";

    if (attArr.includes(5)) {
        magazine = true;

    }

    if (magazine != false) {
        var ranMagazine = Math.floor(Math.random() * magazines.length) + 0;


        var magazinePick = magazines[ranMagazine];

        //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt6").innerHTML = '<b>' + "Magazine -  " + '</b>' + magazinePick.name + '<br>' + '<img  style="width:200px;" alt="'+magazinePick.name + '"  src="' + magazinePick.image + '">';
    }

     if (magazine != true){
        document.getElementById("primaryAtt6").innerHTML = '<b>' + "Magazine -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }





    //Handle

    var handles = [
        {
            name: 'Speed Tape',  //DONT NEED
            image: '/attachments/handles/speedtape.png'
        },
        {
            name: 'Dropshot Wrap', //DONT NEED
            image: '/attachments/handles/dropshotwrap.png'
        },
        {
            name: 'Field Tape', //DONT NEED
            image: '/attachments/handles/fieldtape.png'
        },
        {
            name: 'SARS Jungle Grip', //DONT NEED
            image: '/attachments/handles/sarsjunglegrip.png'
        },
        {
            name: 'Serpent Wrap',//DONT NEED
            image: '/attachments/handles/serpentwrap.png'
        },
        {
            name: 'Airborne Elastic Wrap', //DONT NEED
            image: '/attachments/handles/airborneelasticwrap.png'
        },
    ];


    var handle = false;
    //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt7").innerHTML = "";

    if (attArr.includes(6)) {
        handle = true;

    }

    if (handle != false) {
        var ranHandle = Math.floor(Math.random() * handles.length) + 0;
        

        var handlePick = handles[ranHandle];

        //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt7").innerHTML = '<b>' + "Handle -  " + '</b>' + handlePick.name + '<br>' + '<img  style="width:200px;" alt="'+ handlePick.name +'" src="' + handlePick.image + '">';
    }

     if (handle != true){
        document.getElementById("primaryAtt7").innerHTML = '<b>' + "Handle -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }


    //Stock

    var stocks = [
        {
            name: 'Tactical Stock', //DONT NEED
            image: '/attachments/stocks/tacticalstock.png'
        },
        {
            name: 'Wire Stock',  //DONT NEED
            image: '/attachments/stocks/wirestock.png'
        },
        {
            name: 'Duster Pad',  //DONT NEED
            image: '/attachments/stocks/dusterpad.png'
        },
        {
            name: 'No Stock', //DONT NEED
            image: '/attachments/stocks/nostock.png'
        },
        {
            name: 'SAS Combat Stock',  //DONT NEED
            image: '/attachments/stocks/sascombatstock.png'
        },
        {
            name: 'Raider Stock',  //DONT NEED
            image: '/attachments/stocks/raiderstock.png'
        },
    ];


    var stock = false;
    //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt8").innerHTML = "";

    if (attArr.includes(7)) {
        stock = true;

    }

    if (stock != false) {
        var ranStock = Math.floor(Math.random() * stocks.length) + 0;
        

        var stockPick = stocks[ranStock];

        //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt8").innerHTML = '<b>' + "Stock -  " + '</b>' + stockPick.name + '<br>' + '<img  style="width:200px;" alt="'+stockPick.name + '" src="' + stockPick.image + '">';
    }

    if (stock != true){
        document.getElementById("primaryAtt8").innerHTML = '<b>' + "Stock -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }

}



//Stoner 63

function stoner63() {
    var numAttachments = [0, 1, 2, 3, 4, 5, 6, 7];
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
            name: 'Kobra Red Dot', //DONT NEED
            image: '/attachments/optics/kobrareddot.png'
        },
        {
            name: 'Axial Arms 3x', //DONT NEED
            image: '/attachments/optics/axialarms3x.png'
        },
        {
            name: 'Visiontexh 2x', //DONT NEED
            image: '/attachments/optics/visiontech2x.png'
        },
        {
            name: 'millstop reflex', //DONT NEED
            image: '/attachments/optics/millstopreflex.png'
        },
        {
            name: 'Sillix Holoscout', //DONT NEED
            image: '/attachments/optics/sillixholosxout.png'
        },
        {
            name: 'Royal & Kross 4x', //DONT NEED
            image: '/attachments/optics/royalandkross4x.png'
        },

        {
            name: 'SUSAT Multizoom', //DONT NEED
            image: '/attachments/optics/susatmultizoom.png'
        },
        {
            name: 'Quickdot LED',//DONT NEED
            image: '/attachments/optics/quickdotled.png'
        },
        {
            name: 'Hawksmoor', //DONT NEED
            image: '/attachments/optics/hawksmoor.png'
        },
        {
            name: 'Hangman RF',  //DONT NEED
            image: '/attachments/optics/hangmanrf.png'
        },
        {
            name: 'Vulture Custom Zoom',  //DONT NEED
            image: '/attachments/optics/vulturecustomzoom.png'
        },

        {
            name: 'AN/PVS-4 Thermal', //DONT NEED
            image: '/attachments/optics/anpvs4thermal.png'
        },

    ];


    var optic = false;
    // //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt1").innerHTML = "";

    if (attArr.includes(0)) {
        optic = true;
    }

    if (optic != false) {
       
        var ranOptic = Math.floor(Math.random() * optics.length) + 0;

        var opticPick = optics[ranOptic];

        // //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt1").innerHTML = '<b>' + "Optic -  " + '</b>' + opticPick.name + '<br>' + '<img  style="width:200px;"  alt="' + opticPick.name +'" src="' + opticPick.image + '">';
    }

     if(optic != true){
        document.getElementById("primaryAtt1").innerHTML = '<b>' + "Optic -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }

    //Muzzle

    var muzzles = [
        {
            name: 'Muzzle Brake 5.56', //DONT NEED
            image: '/attachments/muzzles/muzzlebrake556.png'
        },
        {
            name: 'Flashguard 5.56', //DONT NEED
            image: '/attachments/muzzles/flashguard556.png'
        },
        {
            name: 'Suppressor', //DONT NEED
            image: '/attachments/muzzles/suppressor.png'
        },
        {
            name: 'Infantry Compensator', //DONT NEED
            image: '/attachments/muzzles/infantrycompensator.png'
        },
        {
            name: 'SOCOM Eliminator', //DONT NEED
            image: '/attachments/muzzles/socomeliminator.png'
        },
        {
            name: 'Agency Suppressor',//DONT NEED
            image: '/attachments/muzzles/agencysuppressor.png'
        },
    ];


    var muzzle = false;
    // //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt2").innerHTML = "";

    if (attArr.includes(1)) {
        muzzle = true;
    }

    if (muzzle != false) {

        var ranMuzzle = Math.floor(Math.random() * muzzles.length) + 0;

        var muzzlePick = muzzles[ranMuzzle];

        //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt2").innerHTML = '<b>' + "Muzzle -  " + '</b>' + muzzlePick.name + '<br>' + '<img  style="width:200px;"  alt="' + muzzlePick.name +'" src="' + muzzlePick.image + '">';
    }

     if(muzzle != true) {
        document.getElementById("primaryAtt2").innerHTML = '<b>' + "Muzzle -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }


    //Barrels

    var barrels = [
        {
            name: '16 Cut Down',
            image: '/attachments/barrels/16cutdown.png'
        },
        {
            name: '17.8 Cavalry Lancer',
            image: '/attachments/barrels/178cavalrylancer.png'
        },
        {
            name: '18.6 Division',
            image: '/attachments/barrels/186division.png'
        },
        {
            name: '16 SOR Cut Down',
            image: '/attachments/barrels/16sorcutdown.png'
        },
        {
            name: '20.7 Match Grade',
            image: '/attachments/barrels/207matchgrade.png'
        },
        {
            name: '21.8 Task Force',
            image: '/attachments/barrels/218taskforce.png'
        },
    ];


    var barrel = false;
    // //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt3").innerHTML = "";

    if (attArr.includes(2)) {
        barrel = true;

    }

    if (barrel != false) {

        var ranBarrel = Math.floor(Math.random() * barrels.length) + 0;

        var barrelPick = barrels[ranBarrel];
        // //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt3").innerHTML = '<b>' + "Barrel -  " + '</b>' + barrelPick.name + '<br>' + '<img  style="width:200px;" alt="'+ barrelPick.name + '"  src="' + barrelPick.image + '">';
    }

     if (barrel != true){
        document.getElementById("primaryAtt3").innerHTML = '<b>' + "Barrel -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }


    //Body

    var bodys = [
        {
            name: 'Steady Aim Laser', //DONT NEED
            image: '/attachments/bodys/steadyaimlaser.png'
        },
        {
            name: 'Mounted Flashlight', //DONT NEED
            image: '/attachments/bodys/mountedflashlight.png'
        },
        {
            name: 'SOF Target Designator', //DONT NEED
            image: '/attachments/bodys/softargetdesignator.png'
        },
        {
            name: 'SWAT 5mw Laser Sight', //DONT NEED
            image: '/attachments/bodys/swat5mwlasersight.png'
        },
        {
            name: 'Tiger Team Spotlight', //DONT NEED
            image: '/attachments/bodys/tigerteamspotlight.png'
        },
        {
            name: 'Ember Sighting Point', //DONT NEED
            image: '/attachments/bodys/embersightingpoint.png'
        },
    ];


    var body = false;
    // //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt4").innerHTML = "";

    if (attArr.includes(3)) {
        body = true;
        
    }

    if (body != false) {
        var ranBody = Math.floor(Math.random() * bodys.length) + 0;
        
        

        var bodyPick = bodys[ranBody];

        // //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt4").innerHTML = '<b>' + "Body -  " + '</b>' + bodyPick.name + '<br>' + '<img  style="width:200px;" alt="'+ bodyPick.name + '" src="' + bodyPick.image + '">';
    }


     if (body != true) {
        document.getElementById("primaryAtt4").innerHTML = '<b>' + "Body -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }

    //Underbarrel

    var underbarrels = [
        {
            name: 'Front Grip', //DONT NEED
            image: '/attachments/underbarrel/frontgrip.png'
        },
        {
            name: 'Infiltrator Grip', //DONT NEED
            image: '/attachments/underbarrel/infiltratorgrip.png'
        },
        {
            name: 'Patrol Grip',  //DONT NEED
            image: '/attachments/underbarrel/patrolgrip.png'
        },
        {
            name: 'Bruiser Grip',  //DONT NEED
            image: '/attachments/underbarrel/bruisergrip.png'
        },
        {
            name: 'Field Agent Grip',  //DONT NEED
            image: '/attachments/underbarrel/fieldagentgrip.png'
        },
        {
            name: 'SFOD Speedgrip',  //DONT NEED
            image: '/attachments/underbarrel/sfodspeedgrip.png'
        },
    ];


    var underbarrel = false;
    // //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt5").innerHTML = "";

    if (attArr.includes(4)) {
        underbarrel = true;

    }

    if (underbarrel != false) {
        var ranUnderbarrel = Math.floor(Math.random() * underbarrels.length) + 0;

        var underbarrelPick = underbarrels[ranUnderbarrel];
 
        // //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt5").innerHTML = '<b>' + "Underbarrel -  " + '</b>' + underbarrelPick.name + '<br>' + '<img  style="width:200px;" alt="'+ underbarrelPick.name +'"  src="' + underbarrelPick.image + '">';
    }


     if (underbarrel != true){
        document.getElementById("primaryAtt5").innerHTML = '<b>' + "Underbarrel -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }


    //Magazine

    var magazines = [
        {
            name: '100 Rnd',
            image: '/attachments/magazines/100rnd.png'
        },
        {
            name: 'Fast Mag',  //DONT NEED
            image: '/attachments/magazines/fastmag.png'
        },
        {
            name: '100 Rnd Speed Mag',
            image: '/attachments/magazines/100rndspeedmag.png'
        },
        {
            name: 'Spetsnaz 125 Rnd',
            image: '/attachments/magazines/spetsnaz125rnd.png'
        },
        {
            name: 'Vandal Speed Loader', 
            image: '/attachments/magazines/vandalspeedloader.png'
        },
        {
            name: 'Salvo 125 Rnd Fast Mag',
            image: '/attachments/magazines/salvo125rndfastmag.png'
        },
    ];


    var magazine = false;
    // //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt6").innerHTML = "";

    if (attArr.includes(5)) {
        magazine = true;

    }

    if (magazine != false) {
        var ranMagazine = Math.floor(Math.random() * magazines.length) + 0;


        var magazinePick = magazines[ranMagazine];

        //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt6").innerHTML = '<b>' + "Magazine -  " + '</b>' + magazinePick.name + '<br>' + '<img  style="width:200px;" alt="'+magazinePick.name + '"  src="' + magazinePick.image + '">';
    }

     if (magazine != true){
        document.getElementById("primaryAtt6").innerHTML = '<b>' + "Magazine -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }





    //Handle

    var handles = [
        {
            name: 'Speed Tape',  //DONT NEED
            image: '/attachments/handles/speedtape.png'
        },
        {
            name: 'Dropshot Wrap', //DONT NEED
            image: '/attachments/handles/dropshotwrap.png'
        },
        {
            name: 'Field Tape', //DONT NEED
            image: '/attachments/handles/fieldtape.png'
        },
        {
            name: 'SARS Jungle Grip', //DONT NEED
            image: '/attachments/handles/sarsjunglegrip.png'
        },
        {
            name: 'Serpent Wrap',//DONT NEED
            image: '/attachments/handles/serpentwrap.png'
        },
        {
            name: 'Airborne Elastic Wrap', //DONT NEED
            image: '/attachments/handles/airborneelasticwrap.png'
        },
    ];


    var handle = false;
    //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt7").innerHTML = "";

    if (attArr.includes(6)) {
        handle = true;

    }

    if (handle != false) {
        var ranHandle = Math.floor(Math.random() * handles.length) + 0;
        

        var handlePick = handles[ranHandle];

        //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt7").innerHTML = '<b>' + "Handle -  " + '</b>' + handlePick.name + '<br>' + '<img  style="width:200px;" alt="'+ handlePick.name +'" src="' + handlePick.image + '">';
    }

     if (handle != true){
        document.getElementById("primaryAtt7").innerHTML = '<b>' + "Handle -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }


    //Stock

    var stocks = [
        {
            name: 'Tactical Stock', //DONT NEED
            image: '/attachments/stocks/tacticalstock.png'
        },
        {
            name: 'Wire Stock',  //DONT NEED
            image: '/attachments/stocks/wirestock.png'
        },
        {
            name: 'Duster Pad',  //DONT NEED
            image: '/attachments/stocks/dusterpad.png'
        },
        {
            name: 'No Stock', //DONT NEED
            image: '/attachments/stocks/nostock.png'
        },
        {
            name: 'SAS Combat Stock',  //DONT NEED
            image: '/attachments/stocks/sascombatstock.png'
        },
        {
            name: 'Raider Stock',  //DONT NEED
            image: '/attachments/stocks/raiderstock.png'
        },
    ];


    var stock = false;
    //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt8").innerHTML = "";

    if (attArr.includes(7)) {
        stock = true;

    }

    if (stock != false) {
        var ranStock = Math.floor(Math.random() * stocks.length) + 0;
        

        var stockPick = stocks[ranStock];

        //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt8").innerHTML = '<b>' + "Stock -  " + '</b>' + stockPick.name + '<br>' + '<img  style="width:200px;" alt="'+stockPick.name + '" src="' + stockPick.image + '">';
    }

    if (stock != true){
        document.getElementById("primaryAtt8").innerHTML = '<b>' + "Stock -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }

}



//RPD
function rpd() {
    var numAttachments = [0, 1, 2, 3, 4, 5, 6, 7];
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
            name: 'Kobra Red Dot', //DONT NEED
            image: '/attachments/optics/kobrareddot.png'
        },
        {
            name: 'Axial Arms 3x', //DONT NEED
            image: '/attachments/optics/axialarms3x.png'
        },
        {
            name: 'Visiontexh 2x', //DONT NEED
            image: '/attachments/optics/visiontech2x.png'
        },
        {
            name: 'millstop reflex', //DONT NEED
            image: '/attachments/optics/millstopreflex.png'
        },
        {
            name: 'Sillix Holoscout', //DONT NEED
            image: '/attachments/optics/sillixholosxout.png'
        },
        {
            name: 'Royal & Kross 4x', //DONT NEED
            image: '/attachments/optics/royalandkross4x.png'
        },
        {
            name: 'SUSAT Multizoom', //DONT NEED
            image: '/attachments/optics/susatmultizoom.png'
        },
        {
            name: 'Quickdot LED',//DONT NEED
            image: '/attachments/optics/quickdotled.png'
        },
        {
            name: 'Hawksmoor', //DONT NEED
            image: '/attachments/optics/hawksmoor.png'
        },
        {
            name: 'Hangman RF',  //DONT NEED
            image: '/attachments/optics/hangmanrf.png'
        },
        {
            name: 'Vulture Custom Zoom',  //DONT NEED
            image: '/attachments/optics/vulturecustomzoom.png'
        },

        {
            name: 'Noch Sova Thermal', //DONT NEED
            image: '/attachments/optics/nochsovathermal.png'
        },

    ];


    var optic = false;
    // //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt1").innerHTML = "";

    if (attArr.includes(0)) {
        optic = true;
    }

    if (optic != false) {
       
        var ranOptic = Math.floor(Math.random() * optics.length) + 0;

        var opticPick = optics[ranOptic];

        // //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt1").innerHTML = '<b>' + "Optic -  " + '</b>' + opticPick.name + '<br>' + '<img  style="width:200px;"  alt="' + opticPick.name +'" src="' + opticPick.image + '">';
    }

     if(optic != true){
        document.getElementById("primaryAtt1").innerHTML = '<b>' + "Optic -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }

    //Muzzle

    var muzzles = [
        {
            name: 'Muzzle Brake 7.62',  //DONT NEED
            image: '/attachments/muzzles/muzzlebrake762.png'
        },
        {
            name: 'Flashguard 7.62', //DONT NEED
            image: '/attachments/muzzles/flashguard762.png'
        },
        {
            name: 'Suppressor', //DONT NEED
            image: '/attachments/muzzles/suppressor.png'
        },
        {
            name: 'Spetsnaz Compensator', //DONT NEED
            image: '/attachments/muzzles/spetsnazcompensator.png'
        },
        {
            name: 'KGB Eliminator', //DONT NEED
            image: '/attachments/muzzles/kgbeliminator.png'
        },
        {
            name: 'GRU Suppressor', //DONT NEED
            image: '/attachments/muzzles/grusuppressor.png'
        },
    ];


    var muzzle = false;
    // //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt2").innerHTML = "";

    if (attArr.includes(1)) {
        muzzle = true;
    }

    if (muzzle != false) {

        var ranMuzzle = Math.floor(Math.random() * muzzles.length) + 0;

        var muzzlePick = muzzles[ranMuzzle];

        //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt2").innerHTML = '<b>' + "Muzzle -  " + '</b>' + muzzlePick.name + '<br>' + '<img  style="width:200px;"  alt="' + muzzlePick.name +'" src="' + muzzlePick.image + '">';
    }

     if(muzzle != true) {
        document.getElementById("primaryAtt2").innerHTML = '<b>' + "Muzzle -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }


    //Barrels

    var barrels = [
        {
            name: '16.5 Cut Down',
            image: '/attachments/barrels/165cutdown.png'
        },
        {
            name: '16.5 Spetsnaz RPK Barrel',
            image: '/attachments/barrels/165spetsnazrpkbarrel.png'
        },
        {
            name: '16.5 Division',
            image: '/attachments/barrels/165division.png'

        },
        {
            name: '14.7 GRU Cut Down',
            image: '/attachments/barrels/147grucutdown.png'
        },
        {
            name: '20.3 Match Grade',
            image: '/attachments/barrels/203matchgrade.png'
        },
        {
            name: '20.3 Task Force',
            image: '/attachments/barrels/203taskforce.png'
        },
    ];


    var barrel = false;
    // //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt3").innerHTML = "";

    if (attArr.includes(2)) {
        barrel = true;

    }

    if (barrel != false) {

        var ranBarrel = Math.floor(Math.random() * barrels.length) + 0;

        var barrelPick = barrels[ranBarrel];
        // //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt3").innerHTML = '<b>' + "Barrel -  " + '</b>' + barrelPick.name + '<br>' + '<img  style="width:200px;" alt="'+ barrelPick.name + '"  src="' + barrelPick.image + '">';
    }

     if (barrel != true){
        document.getElementById("primaryAtt3").innerHTML = '<b>' + "Barrel -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }


    //Body

    var bodys = [
        {
            name: 'Steady Aim Laser', //DONT NEED
            image: '/attachments/bodys/steadyaimlaser.png'
        },
        {
            name: 'Mounted Flashlight', //DONT NEED
            image: '/attachments/bodys/mountedflashlight.png'
        },
        {
            name: 'KGB Target Designator', //DONT NEED
            image: '/attachments/bodys/kgbtargetdesignator.png'
        },
        {
            name: 'GRU 5mw Laser Sight',  //DONT NEED
            image: '/attachments/bodys/gru5mwlasersight.png'
        },
        {
            name: 'Tiger Team Spotlight', //DONT NEED
            image: '/attachments/bodys/tigerteamspotlight.png'
        },
        {
            name: 'Ember Sighting Point', //DONT NEED
            image: '/attachments/bodys/embersightingpoint.png'
        },
    ];


    var body = false;
    // //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt4").innerHTML = "";

    if (attArr.includes(3)) {
        body = true;
        
    }

    if (body != false) {
        var ranBody = Math.floor(Math.random() * bodys.length) + 0;
        
        

        var bodyPick = bodys[ranBody];

        // //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt4").innerHTML = '<b>' + "Body -  " + '</b>' + bodyPick.name + '<br>' + '<img  style="width:200px;" alt="'+ bodyPick.name + '" src="' + bodyPick.image + '">';
    }


     if (body != true) {
        document.getElementById("primaryAtt4").innerHTML = '<b>' + "Body -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }

    //Underbarrel

    var underbarrels = [
        {
            name: 'Foregrip', //DONT NEED
            image: '/attachments/underbarrel/foregrip.png'
        },
        {
            name: 'Infiltrator Grip', //DONT NEED
            image: '/attachments/underbarrel/infiltratorgrip.png'
        },
        {
            name: 'Patrol Grip',  //DONT NEED
            image: '/attachments/underbarrel/patrolgrip.png'
        },
        {
            name: 'Bruiser Grip',  //DONT NEED
            image: '/attachments/underbarrel/bruisergrip.png'
        },
        {
            name: 'Spetsnaz Grip',  //DONT NEED
            image: '/attachments/underbarrel/spetsnazgrip.png'
        },
        {
            name: 'Spetsnaz Speedgrip', //DONT NEED
            image: '/attachments/underbarrel/spetsnazspeedgrip.png'
        },
    ];


    var underbarrel = false;
    // //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt5").innerHTML = "";

    if (attArr.includes(4)) {
        underbarrel = true;

    }

    if (underbarrel != false) {
        var ranUnderbarrel = Math.floor(Math.random() * underbarrels.length) + 0;

        var underbarrelPick = underbarrels[ranUnderbarrel];
 
        // //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt5").innerHTML = '<b>' + "Underbarrel -  " + '</b>' + underbarrelPick.name + '<br>' + '<img  style="width:200px;" alt="'+ underbarrelPick.name +'"  src="' + underbarrelPick.image + '">';
    }


     if (underbarrel != true){
        document.getElementById("primaryAtt5").innerHTML = '<b>' + "Underbarrel -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }


    //Magazine

    var magazines = [
        {
            name: '100 Rnd', //DONT NEED
            image: '/attachments/magazines/100rnd.png'
        },
        {
            name: 'Fast Mag',  //DONT NEED
            image: '/attachments/magazines/fastmag.png'
        },
        {
            name: '100 Rnd Speed Mag', //DONT NEED
            image: '/attachments/magazines/100rndspeedmag.png'
        },
        {
            name: 'Spetsnaz 125 Rnd', //DONT NEED
            image: '/attachments/magazines/spetsnaz125rnd.png'
        },
        {
            name: 'Vandal Speed Loader',  //DONT NEED
            image: '/attachments/magazines/vandalspeedloader.png'
        },
        {
            name: 'VDV 125 Rnd Fast Mag', 
            image: '/attachments/magazines/vdv125rndfastmag.png'
        },
    ];


    var magazine = false;
    // //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt6").innerHTML = "";

    if (attArr.includes(5)) {
        magazine = true;

    }

    if (magazine != false) {
        var ranMagazine = Math.floor(Math.random() * magazines.length) + 0;


        var magazinePick = magazines[ranMagazine];

        //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt6").innerHTML = '<b>' + "Magazine -  " + '</b>' + magazinePick.name + '<br>' + '<img  style="width:200px;" alt="'+magazinePick.name + '"  src="' + magazinePick.image + '">';
    }

     if (magazine != true){
        document.getElementById("primaryAtt6").innerHTML = '<b>' + "Magazine -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }





    //Handle

    var handles = [
        {
            name: 'Speed Tape',  //DONT NEED
            image: '/attachments/handles/speedtape.png'
        },
        {
            name: 'Dropshot Wrap', //DONT NEED
            image: '/attachments/handles/dropshotwrap.png'
        },
        {
            name: 'Field Tape', //DONT NEED
            image: '/attachments/handles/fieldtape.png'
        },
        {
            name: 'Spetsnaz Field Grip',  //DONT NEED
            image: '/attachments/handles/spetsnazfieldgrip.png'
        },
        {
            name: 'Serpent Wrap',//DONT NEED
            image: '/attachments/handles/serpentwrap.png'
        },
        {
            name: 'GRU Elastic Wrap', //DONT NEED
            image: '/attachments/handles/gruelasticwrap.png'
        },
    ];


    var handle = false;
    //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt7").innerHTML = "";

    if (attArr.includes(6)) {
        handle = true;

    }

    if (handle != false) {
        var ranHandle = Math.floor(Math.random() * handles.length) + 0;
        

        var handlePick = handles[ranHandle];

        //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt7").innerHTML = '<b>' + "Handle -  " + '</b>' + handlePick.name + '<br>' + '<img  style="width:200px;" alt="'+ handlePick.name +'" src="' + handlePick.image + '">';
    }

     if (handle != true){
        document.getElementById("primaryAtt7").innerHTML = '<b>' + "Handle -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }


    //Stock

    var stocks = [
        {
            name: 'Tactical Stock', //DONT NEED
            image: '/attachments/stocks/tacticalstock.png'
        },
        {
            name: 'Wire Stock',  //DONT NEED
            image: '/attachments/stocks/wirestock.png'
        },
        {
            name: 'Duster Stock', //DONT NEED
            image: '/attachments/stocks/dusterstock.png'
        },
        {
            name: 'No Stock', //DONT NEED
            image: '/attachments/stocks/nostock.png'
        },
        {
            name: 'Spetsnaz PKM Stock', //DONT NEED
            image: '/attachments/stocks/spetsnazpkmstock.png'
        },
        {
            name: 'KGB Skeletal Stock', //DONT NEED
            image: '/attachments/stocks/kgbskeletalstock.png'
        },
    ];


    var stock = false;
    //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt8").innerHTML = "";

    if (attArr.includes(7)) {
        stock = true;

    }

    if (stock != false) {
        var ranStock = Math.floor(Math.random() * stocks.length) + 0;
        

        var stockPick = stocks[ranStock];

        //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt8").innerHTML = '<b>' + "Stock -  " + '</b>' + stockPick.name + '<br>' + '<img  style="width:200px;" alt="'+stockPick.name + '" src="' + stockPick.image + '">';
    }

    if (stock != true){
        document.getElementById("primaryAtt8").innerHTML = '<b>' + "Stock -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }

}



//M60
function m60() {
    var numAttachments = [0, 1, 2, 3, 4, 5, 6, 7];
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
            name: 'Kobra Red Dot', //DONT NEED
            image: '/attachments/optics/kobrareddot.png'
        },
        {
            name: 'Axial Arms 3x', //DONT NEED
            image: '/attachments/optics/axialarms3x.png'
        },
        {
            name: 'Visiontexh 2x', //DONT NEED
            image: '/attachments/optics/visiontech2x.png'
        },


        {
            name: 'millstop reflex', //DONT NEED
            image: '/attachments/optics/millstopreflex.png'
        },
        {
            name: 'Sillix Holoscout', //DONT NEED
            image: '/attachments/optics/sillixholosxout.png'
        },
        {
            name: 'Royal & Kross 4x', //DONT NEED
            image: '/attachments/optics/royalandkross4x.png'
        },
        {
            name: 'SUSAT Multizoom', //DONT NEED
            image: '/attachments/optics/susatmultizoom.png'
        },
        {
            name: 'Quickdot LED',//DONT NEED
            image: '/attachments/optics/quickdotled.png'
        },
        {
            name: 'Hawksmoor', //DONT NEED
            image: '/attachments/optics/hawksmoor.png'
        },


        {
            name: 'Hangman RF',  //DONT NEED
            image: '/attachments/optics/hangmanrf.png'
        },
        {
            name: 'Vulture Custom Zoom',  //DONT NEED
            image: '/attachments/optics/vulturecustomzoom.png'
        },

        {
            name: 'AN/PVS-4 Thermal', //DONT NEED
            image: '/attachments/optics/anpvs4thermal.png'
        },

    ];


    var optic = false;
    // //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt1").innerHTML = "";

    if (attArr.includes(0)) {
        optic = true;
    }

    if (optic != false) {
       
        var ranOptic = Math.floor(Math.random() * optics.length) + 0;

        var opticPick = optics[ranOptic];

        // //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt1").innerHTML = '<b>' + "Optic -  " + '</b>' + opticPick.name + '<br>' + '<img  style="width:200px;"  alt="' + opticPick.name +'" src="' + opticPick.image + '">';
    }

     if(optic != true){
        document.getElementById("primaryAtt1").innerHTML = '<b>' + "Optic -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }

    //Muzzle

    var muzzles = [
        {
            name: 'Muzzle Brake 7.62',  //DONT NEED
            image: '/attachments/muzzles/muzzlebrake762.png'
        },
        {
            name: 'Flashguard 7.62', //DONT NEED
            image: '/attachments/muzzles/flashguard762.png'
        },
        {
            name: 'Suppressor', //DONT NEED
            image: '/attachments/muzzles/suppressor.png'
        },
        {
            name: 'Infantry Compensator', //DONT NEED
            image: '/attachments/muzzles/infantrycompensator.png'
        },
        {
            name: 'SOCOM Eliminator', //DONT NEED
            image: '/attachments/muzzles/socomeliminator.png'
        },
        {
            name: 'Agency Suppressor',//DONT NEED
            image: '/attachments/muzzles/agencysuppressor.png'
        },
    ];


    var muzzle = false;
    // //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt2").innerHTML = "";

    if (attArr.includes(1)) {
        muzzle = true;
    }

    if (muzzle != false) {

        var ranMuzzle = Math.floor(Math.random() * muzzles.length) + 0;

        var muzzlePick = muzzles[ranMuzzle];

        //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt2").innerHTML = '<b>' + "Muzzle -  " + '</b>' + muzzlePick.name + '<br>' + '<img  style="width:200px;"  alt="' + muzzlePick.name +'" src="' + muzzlePick.image + '">';
    }

     if(muzzle != true) {
        document.getElementById("primaryAtt2").innerHTML = '<b>' + "Muzzle -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }


    //Barrels

    var barrels = [
        {
            name: '18 Cut Down',
            image: '/attachments/barrels/18cutdown.png'
        },
        {
            name: '18.9 Cavalry Lancer',
            image: '/attachments/barrels/189cavalrylancer.png'
        },
        {
            name: '18.9 Division',
            image: '/attachments/barrels/189division.png'
        },
        {
            name: '17.5 SOR Cut Down',
            image: '/attachments/barrels/175sorcutdown.png'
        },
        {
            name: '22.8 Match Grade',
            image: '/attachments/barrels/228matchgrade.png'
        },
        {
            name: '22.8 Task Force',
            image: '/attachments/barrels/228taskforce.png'
        },
    ];


    var barrel = false;
    // //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt3").innerHTML = "";

    if (attArr.includes(2)) {
        barrel = true;

    }

    if (barrel != false) {

        var ranBarrel = Math.floor(Math.random() * barrels.length) + 0;

        var barrelPick = barrels[ranBarrel];
        // //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt3").innerHTML = '<b>' + "Barrel -  " + '</b>' + barrelPick.name + '<br>' + '<img  style="width:200px;" alt="'+ barrelPick.name + '"  src="' + barrelPick.image + '">';
    }

     if (barrel != true){
        document.getElementById("primaryAtt3").innerHTML = '<b>' + "Barrel -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }


    //Body

    var bodys = [
        {
            name: 'Steady Aim Laser', //DONT NEED
            image: '/attachments/bodys/steadyaimlaser.png'
        },
        {
            name: 'Mounted Flashlight', //DONT NEED
            image: '/attachments/bodys/mountedflashlight.png'
        },
        {
            name: 'SOF Target Designator', //DONT NEED
            image: '/attachments/bodys/softargetdesignator.png'
        },
        {
            name: 'SWAT 5mw Laser Sight', //DONT NEED
            image: '/attachments/bodys/swat5mwlasersight.png'
        },
        {
            name: 'Tiger Team Spotlight', //DONT NEED
            image: '/attachments/bodys/tigerteamspotlight.png'
        },
        {
            name: 'Ember Sighting Point', //DONT NEED
            image: '/attachments/bodys/embersightingpoint.png'
        },
    ];


    var body = false;
    // //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt4").innerHTML = "";

    if (attArr.includes(3)) {
        body = true;
        
    }

    if (body != false) {
        var ranBody = Math.floor(Math.random() * bodys.length) + 0;
        
        

        var bodyPick = bodys[ranBody];

        // //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt4").innerHTML = '<b>' + "Body -  " + '</b>' + bodyPick.name + '<br>' + '<img  style="width:200px;" alt="'+ bodyPick.name + '" src="' + bodyPick.image + '">';
    }


     if (body != true) {
        document.getElementById("primaryAtt4").innerHTML = '<b>' + "Body -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }

    //Underbarrel

    var underbarrels = [
        {
            name: 'Foregrip', //DONT NEED
            image: '/attachments/underbarrel/foregrip.png'
        },
        {
            name: 'Infiltrator Grip', //DONT NEED
            image: '/attachments/underbarrel/infiltratorgrip.png'
        },
        {
            name: 'Patrol Grip',  //DONT NEED
            image: '/attachments/underbarrel/patrolgrip.png'
        },
        {
            name: 'Bruiser Grip',  //DONT NEED
            image: '/attachments/underbarrel/bruisergrip.png'
        },
        {
            name: 'Field Agent Grip',  //DONT NEED
            image: '/attachments/underbarrel/fieldagentgrip.png'
        },
        {
            name: 'SFOD Speedgrip',  //DONT NEED
            image: '/attachments/underbarrel/sfodspeedgrip.png'
        },
    ];


    var underbarrel = false;
    // //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt5").innerHTML = "";

    if (attArr.includes(4)) {
        underbarrel = true;

    }

    if (underbarrel != false) {
        var ranUnderbarrel = Math.floor(Math.random() * underbarrels.length) + 0;

        var underbarrelPick = underbarrels[ranUnderbarrel];
 
        // //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt5").innerHTML = '<b>' + "Underbarrel -  " + '</b>' + underbarrelPick.name + '<br>' + '<img  style="width:200px;" alt="'+ underbarrelPick.name +'"  src="' + underbarrelPick.image + '">';
    }


     if (underbarrel != true){
        document.getElementById("primaryAtt5").innerHTML = '<b>' + "Underbarrel -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }


    //Magazine

    var magazines = [
        {
            name: '100 Rnd', //DONT NEED
            image: '/attachments/magazines/100rnd.png'
        },
        {
            name: 'Fast Mag',  //DONT NEED
            image: '/attachments/magazines/fastmag.png'
        },
        {
            name: '100 Rnd Speed Mag', //DONT NEED
            image: '/attachments/magazines/100rndspeedmag.png'
        },
        {
            name: 'STANAG 125 Rnd',
            image: '/attachments/magazines/stanag125rnd.png'
        },
        {
            name: 'Vandal Speed Loader',  //DONT NEED
            image: '/attachments/magazines/vandalspeedloader.png'
        },
        {
            name: 'Salvo 125 Rnd Fast Mag', //DONT NEED
            image: '/attachments/magazines/salvo125rndfastmag.png'
        },
    ];


    var magazine = false;
    // //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt6").innerHTML = "";

    if (attArr.includes(5)) {
        magazine = true;

    }

    if (magazine != false) {
        var ranMagazine = Math.floor(Math.random() * magazines.length) + 0;


        var magazinePick = magazines[ranMagazine];

        //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt6").innerHTML = '<b>' + "Magazine -  " + '</b>' + magazinePick.name + '<br>' + '<img  style="width:200px;" alt="'+magazinePick.name + '"  src="' + magazinePick.image + '">';
    }

     if (magazine != true){
        document.getElementById("primaryAtt6").innerHTML = '<b>' + "Magazine -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }





    //Handle

    var handles = [
        {
            name: 'Speed Tape',  //DONT NEED
            image: '/attachments/handles/speedtape.png'
        },
        {
            name: 'Dropshot Wrap', //DONT NEED
            image: '/attachments/handles/dropshotwrap.png'
        },
        {
            name: 'Field Tape', //DONT NEED
            image: '/attachments/handles/fieldtape.png'
        },
        {
            name: 'SARS Jungle Grip', //DONT NEED
            image: '/attachments/handles/sarsjunglegrip.png'
        },
        {
            name: 'Serpent Wrap',//DONT NEED
            image: '/attachments/handles/serpentwrap.png'
        },
        {
            name: 'Airborne Elastic Wrap', //DONT NEED
            image: '/attachments/handles/airborneelasticwrap.png'
        },
    ];


    var handle = false;
    //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt7").innerHTML = "";

    if (attArr.includes(6)) {
        handle = true;

    }

    if (handle != false) {
        var ranHandle = Math.floor(Math.random() * handles.length) + 0;
        

        var handlePick = handles[ranHandle];

        //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt7").innerHTML = '<b>' + "Handle -  " + '</b>' + handlePick.name + '<br>' + '<img  style="width:200px;" alt="'+ handlePick.name +'" src="' + handlePick.image + '">';
    }

     if (handle != true){
        document.getElementById("primaryAtt7").innerHTML = '<b>' + "Handle -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }


    //Stock

    var stocks = [
        {
            name: 'Tactical Stock', //DONT NEED
            image: '/attachments/stocks/tacticalstock.png'
        },
        {
            name: 'Marathon Stock',  //DONT NEED
            image: '/attachments/stocks/marathonstock.png'
        },
        {
            name: 'Duster Stock', //DONT NEED
            image: '/attachments/stocks/dusterstock.png'
        },
        {
            name: 'No Stock', //DONT NEED
            image: '/attachments/stocks/nostock.png'
        },
        {
            name: 'SAS Combat Stock',  //DONT NEED
            image: '/attachments/stocks/sascombatstock.png'
        },
        {
            name: 'Raider Stock',  //DONT NEED
            image: '/attachments/stocks/raiderstock.png'
        },
    ];


    var stock = false;
    //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt8").innerHTML = "";

    if (attArr.includes(7)) {
        stock = true;

    }

    if (stock != false) {
        var ranStock = Math.floor(Math.random() * stocks.length) + 0;
        

        var stockPick = stocks[ranStock];

        //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt8").innerHTML = '<b>' + "Stock -  " + '</b>' + stockPick.name + '<br>' + '<img  style="width:200px;" alt="'+stockPick.name + '" src="' + stockPick.image + '">';
    }

    if (stock != true){
        document.getElementById("primaryAtt8").innerHTML = '<b>' + "Stock -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }

}



//Pelington 703
function pelington703() {
    var numAttachments = [0, 1, 2, 3, 4, 5, 6, 7];
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
            name: 'Visiontexh 2x', //DONT NEED
            image: '/attachments/optics/visiontech2x.png'
        },
        {
            name: 'Kobra Red Dot', //DONT NEED
            image: '/attachments/optics/kobrareddot.png'
        },
        {
            name: 'Axial Arms 3x', //DONT NEED
            image: '/attachments/optics/axialarms3x.png'
        },
        {
            name: 'Iron Sights', 
            image: '/attachments/optics/ironsights.png'
        },
        {
            name: 'Sillix Holoscout', //DONT NEED
            image: '/attachments/optics/sillixholosxout.png'
        },
        {
            name: 'Royal & Kross 4x', //DONT NEED
            image: '/attachments/optics/royalandkross4x.png'
        },
        {
            name: 'SUSAT Multizoom', //DONT NEED
            image: '/attachments/optics/susatmultizoom.png'
        },
        {
            name: 'Vulture Custom Zoom',  //DONT NEED
            image: '/attachments/optics/vulturecustomzoom.png'
        },
        {
            name: 'millstop reflex', //DONT NEED
            image: '/attachments/optics/millstopreflex.png'
        },
        {
            name: 'Hangman RF',  //DONT NEED
            image: '/attachments/optics/hangmanrf.png'
        },
        {
            name: 'Ultrazoom Custom', 
            image: '/attachments/optics/ultrazoomcustom.png'
        },
        {
            name: 'AN/PVS-4 Thermal', //DONT NEED
            image: '/attachments/optics/anpvs4thermal.png'
        },

    ];


    var optic = false;
    // //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt1").innerHTML = "";

    if (attArr.includes(0)) {
        optic = true;
    }

    if (optic != false) {
       
        var ranOptic = Math.floor(Math.random() * optics.length) + 0;

        var opticPick = optics[ranOptic];

        // //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt1").innerHTML = '<b>' + "Optic -  " + '</b>' + opticPick.name + '<br>' + '<img  style="width:200px;"  alt="' + opticPick.name +'" src="' + opticPick.image + '">';
    }

     if(optic != true){
        document.getElementById("primaryAtt1").innerHTML = '<b>' + "Optic -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }

    //Muzzle

    var muzzles = [
        {
            name: 'Stabilizer .308',
            image: '/attachments/muzzles/stabilizer308.png'
        },
        {
            name: 'Flash Hider .308',
            image: '/attachments/muzzles/flashhider308.png'
        },
        {
            name: 'Sound Moderator',
            image: '/attachments/muzzles/soundmoderator.png'
        },
        {
            name: 'Infantry Stabilizer',
            image: '/attachments/muzzles/infantrystabilizer.png'
        },
        {
            name: 'Task Force Shroud',
            image: '/attachments/muzzles/taskforceshroud.png'
        },
        {
            name: 'Wrapped Suppressor', //DONT NEED
            image: '/attachments/muzzles/wrappedsuppressor.png'
        },
    ];


    var muzzle = false;
    // //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt2").innerHTML = "";

    if (attArr.includes(1)) {
        muzzle = true;
    }

    if (muzzle != false) {

        var ranMuzzle = Math.floor(Math.random() * muzzles.length) + 0;

        var muzzlePick = muzzles[ranMuzzle];

        //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt2").innerHTML = '<b>' + "Muzzle -  " + '</b>' + muzzlePick.name + '<br>' + '<img  style="width:200px;"  alt="' + muzzlePick.name +'" src="' + muzzlePick.image + '">';
    }

     if(muzzle != true) {
        document.getElementById("primaryAtt2").innerHTML = '<b>' + "Muzzle -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }


    //Barrels

    var barrels = [
        {
            name: '25 Extended',
            image: '/attachments/barrels/25extended.png'
        },
        {
            name: '23.3 Cavalry Lancer',
            image: '/attachments/barrels/233cavalrylancer.png'
        },
        {
            name: '25 Reinforced Heavy',
            image: '/attachments/barrels/25reinforcedheavy.png'
        },
        {
            name: '27.2 Combat Recon',
            image: '/attachments/barrels/272combatrecon.png'
        },
        {
            name: '21.7 Ultralight',
            image: '/attachments/barrels/217ultralight.png'
        },
        {
            name: '26.5 Tiger Team',
            image: '/attachments/barrels/265tigerteam.png'
        },
    ];


    var barrel = false;
    // //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt3").innerHTML = "";

    if (attArr.includes(2)) {
        barrel = true;

    }

    if (barrel != false) {

        var ranBarrel = Math.floor(Math.random() * barrels.length) + 0;

        var barrelPick = barrels[ranBarrel];
        // //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt3").innerHTML = '<b>' + "Barrel -  " + '</b>' + barrelPick.name + '<br>' + '<img  style="width:200px;" alt="'+ barrelPick.name + '"  src="' + barrelPick.image + '">';
    }

     if (barrel != true){
        document.getElementById("primaryAtt3").innerHTML = '<b>' + "Barrel -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }


    //Body

    var bodys = [
        {
            name: 'Steady Aim Laser', //DONT NEED
            image: '/attachments/bodys/steadyaimlaser.png'
        },
        {
            name: 'Mounted Flashlight', //DONT NEED
            image: '/attachments/bodys/mountedflashlight.png'
        },
        {
            name: 'SOF Target Designator', //DONT NEED
            image: '/attachments/bodys/softargetdesignator.png'
        },
        {
            name: 'SWAT 5mw Laser Sight', //DONT NEED
            image: '/attachments/bodys/swat5mwlasersight.png'
        },
        {
            name: 'Tiger Team Spotlight', //DONT NEED
            image: '/attachments/bodys/tigerteamspotlight.png'
        },
        {
            name: 'Ember Sighting Point', //DONT NEED
            image: '/attachments/bodys/embersightingpoint.png'
        },
    ];


    var body = false;
    // //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt4").innerHTML = "";

    if (attArr.includes(3)) {
        body = true;
        
    }

    if (body != false) {
        var ranBody = Math.floor(Math.random() * bodys.length) + 0;
        
        

        var bodyPick = bodys[ranBody];

        // //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt4").innerHTML = '<b>' + "Body -  " + '</b>' + bodyPick.name + '<br>' + '<img  style="width:200px;" alt="'+ bodyPick.name + '" src="' + bodyPick.image + '">';
    }


     if (body != true) {
        document.getElementById("primaryAtt4").innerHTML = '<b>' + "Body -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }

    //Underbarrel

    var underbarrels = [
        {
            name: 'Front Grip', //DONT NEED
            image: '/attachments/underbarrel/frontgrip.png'
        },
        {
            name: 'Infiltrator Grip', //DONT NEED
            image: '/attachments/underbarrel/infiltratorgrip.png'
        },
        {
            name: 'Patrol Grip',  //DONT NEED
            image: '/attachments/underbarrel/patrolgrip.png'
        },
        {
            name: 'Bruiser Grip',  //DONT NEED
            image: '/attachments/underbarrel/bruisergrip.png'
        },
        {
            name: 'Bipod', 
            image: '/attachments/underbarrel/bipod.png'
        },
        {
            name: 'SFOD Speedgrip',  //DONT NEED
            image: '/attachments/underbarrel/sfodspeedgrip.png'
        },
    ];


    var underbarrel = false;
    // //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt5").innerHTML = "";

    if (attArr.includes(4)) {
        underbarrel = true;

    }

    if (underbarrel != false) {
        var ranUnderbarrel = Math.floor(Math.random() * underbarrels.length) + 0;

        var underbarrelPick = underbarrels[ranUnderbarrel];
 
        // //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt5").innerHTML = '<b>' + "Underbarrel -  " + '</b>' + underbarrelPick.name + '<br>' + '<img  style="width:200px;" alt="'+ underbarrelPick.name +'"  src="' + underbarrelPick.image + '">';
    }


     if (underbarrel != true){
        document.getElementById("primaryAtt5").innerHTML = '<b>' + "Underbarrel -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }


    //Magazine

    var magazines = [
        {
            name: '7 Rnd',
            image: '/attachments/magazines/7rnd.png'
        },
        {
            name: 'Fast Loader',
            image: '/attachments/magazines/fastloader.png'
        },
        {
            name: '7 Rnd Speed Mag',
            image: '/attachments/magazines/7rndspeedmag.png'
        },
        {
            name: 'STANAG 9 Rnd',
            image: '/attachments/magazines/stanag9rnd.png'
        },
        {
            name: 'Vandal Speed Loader',  //DONT NEED
            image: '/attachments/magazines/vandalspeedloader.png'
        },
        {
            name: 'Salvo 9 Rnd Fast Mag',
            image: '/attachments/magazines/salvo9rndfastmag.png'
        },
    ];


    var magazine = false;
    // //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt6").innerHTML = "";

    if (attArr.includes(5)) {
        magazine = true;

    }

    if (magazine != false) {
        var ranMagazine = Math.floor(Math.random() * magazines.length) + 0;


        var magazinePick = magazines[ranMagazine];

        //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt6").innerHTML = '<b>' + "Magazine -  " + '</b>' + magazinePick.name + '<br>' + '<img  style="width:200px;" alt="'+magazinePick.name + '"  src="' + magazinePick.image + '">';
    }

     if (magazine != true){
        document.getElementById("primaryAtt6").innerHTML = '<b>' + "Magazine -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }





    //Handle

    var handles = [
        {
            name: 'Speed Tape',  //DONT NEED
            image: '/attachments/handles/speedtape.png'
        },
        {
            name: 'Dropshot Wrap', //DONT NEED
            image: '/attachments/handles/dropshotwrap.png'
        },
        {
            name: 'Field Tape', //DONT NEED
            image: '/attachments/handles/fieldtape.png'
        },
        {
            name: 'SARS Jungle Grip', //DONT NEED
            image: '/attachments/handles/sarsjunglegrip.png'
        },
        {
            name: 'Serpent Wrap',//DONT NEED
            image: '/attachments/handles/serpentwrap.png'
        },
        {
            name: 'Airbone Elastic Wrap', 
            image: '/attachments/handles/airborneelasticwrap.png'
        },
    ];


    var handle = false;
    //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt7").innerHTML = "";

    if (attArr.includes(6)) {
        handle = true;

    }

    if (handle != false) {
        var ranHandle = Math.floor(Math.random() * handles.length) + 0;
        

        var handlePick = handles[ranHandle];

        //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt7").innerHTML = '<b>' + "Handle -  " + '</b>' + handlePick.name + '<br>' + '<img  style="width:200px;" alt="'+ handlePick.name +'" src="' + handlePick.image + '">';
    }

     if (handle != true){
        document.getElementById("primaryAtt7").innerHTML = '<b>' + "Handle -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }


    //Stock

    var stocks = [
        {
            name: 'Tactical Stock', //DONT NEED
            image: '/attachments/stocks/tacticalstock.png'
        },
        {
            name: 'CQB Pad',  //DONT NEED
            image: '/attachments/stocks/cqbpad.png'
        },
        {
            name: 'Duster Pad',  //DONT NEED
            image: '/attachments/stocks/dusterpad.png'
        },
        {
            name: 'Marathon Stock',  //DONT NEED
            image: '/attachments/stocks/marathonstock.png'
        },
        {
            name: 'SAS Combat Stock',  //DONT NEED
            image: '/attachments/stocks/sascombatstock.png'
        },
        {
            name: 'Raider Pad',  //DONT NEED
            image: '/attachments/stocks/raiderpad.png'
        },
    ];


    var stock = false;
    //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt8").innerHTML = "";

    if (attArr.includes(7)) {
        stock = true;

    }

    if (stock != false) {
        var ranStock = Math.floor(Math.random() * stocks.length) + 0;
        

        var stockPick = stocks[ranStock];

        //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt8").innerHTML = '<b>' + "Stock -  " + '</b>' + stockPick.name + '<br>' + '<img  style="width:200px;" alt="'+stockPick.name + '" src="' + stockPick.image + '">';
    }

    if (stock != true){
        document.getElementById("primaryAtt8").innerHTML = '<b>' + "Stock -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }

}



//LW3-Tundra
function lw3tundra() {
    var numAttachments = [0, 1, 2, 3, 4, 5, 6, 7];
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
            name: 'Visiontexh 2x', //DONT NEED
            image: '/attachments/optics/visiontech2x.png'
        },
        {
            name: 'Kobra Red Dot', //DONT NEED
            image: '/attachments/optics/kobrareddot.png'
        },
        {
            name: 'Axial Arms 3x', //DONT NEED
            image: '/attachments/optics/axialarms3x.png'
        },
        {
            name: 'Iron Sights', //DONT NEED
            image: '/attachments/optics/ironsights.png'
        },
        {
            name: 'Sillix Holoscout', //DONT NEED
            image: '/attachments/optics/sillixholosxout.png'
        },
        {
            name: 'Royal & Kross 4x', //DONT NEED
            image: '/attachments/optics/royalandkross4x.png'
        },
        {
            name: 'SUSAT Multizoom', //DONT NEED
            image: '/attachments/optics/susatmultizoom.png'
        },
        {
            name: 'Vulture Custom Zoom',  //DONT NEED
            image: '/attachments/optics/vulturecustomzoom.png'
        },
        {
            name: 'millstop reflex', //DONT NEED
            image: '/attachments/optics/millstopreflex.png'
        },
        {
            name: 'Hangman RF',  //DONT NEED
            image: '/attachments/optics/hangmanrf.png'
        },
        {
            name: 'Ultrazoom Custom', //DONT NEED
            image: '/attachments/optics/ultrazoomcustom.png'
        },
        {
            name: 'AN/PVS-4 Thermal', //DONT NEED
            image: '/attachments/optics/anpvs4thermal.png'
        },

    ];


    var optic = false;
    // //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt1").innerHTML = "";

    if (attArr.includes(0)) {
        optic = true;
    }

    if (optic != false) {
       
        var ranOptic = Math.floor(Math.random() * optics.length) + 0;

        var opticPick = optics[ranOptic];

        // //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt1").innerHTML = '<b>' + "Optic -  " + '</b>' + opticPick.name + '<br>' + '<img  style="width:200px;"  alt="' + opticPick.name +'" src="' + opticPick.image + '">';
    }

     if(optic != true){
        document.getElementById("primaryAtt1").innerHTML = '<b>' + "Optic -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }

    //Muzzle

    var muzzles = [
        {
            name: 'Stabilizer .308', //DONT NEED
            image: '/attachments/muzzles/stabilizer308.png'
        },
        {
            name: 'Flash Hider .308', //DONT NEED
            image: '/attachments/muzzles/flashhider308.png'
        },
        {
            name: 'Sound Moderator', //DONT NEED
            image: '/attachments/muzzles/soundmoderator.png'
        },
        {
            name: 'Infantry Stabilizer', //DONT NEED
            image: '/attachments/muzzles/infantrystabilizer.png'
        },
        {
            name: 'Task Force Shroud', //DONT NEED
            image: '/attachments/muzzles/taskforceshroud.png'
        },
        {
            name: 'Wrapped Suppressor', //DONT NEED
            image: '/attachments/muzzles/wrappedsuppressor.png'
        },
    ];


    var muzzle = false;
    // //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt2").innerHTML = "";

    if (attArr.includes(1)) {
        muzzle = true;
    }

    if (muzzle != false) {

        var ranMuzzle = Math.floor(Math.random() * muzzles.length) + 0;

        var muzzlePick = muzzles[ranMuzzle];

        //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt2").innerHTML = '<b>' + "Muzzle -  " + '</b>' + muzzlePick.name + '<br>' + '<img  style="width:200px;"  alt="' + muzzlePick.name +'" src="' + muzzlePick.image + '">';
    }

     if(muzzle != true) {
        document.getElementById("primaryAtt2").innerHTML = '<b>' + "Muzzle -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }


    //Barrels

    var barrels = [
        {
            name: '28.2 Extended',
            image: '/attachments/barrels/282extended.png'
        },
        {
            name: '26.5 Cavalry Lancer',
            image: '/attachments/barrels/265cavalrylancer.png'
        },
        {
            name: '25.8 Rapid Fire',
            image: '/attachments/barrels/258rapidfire.png'
        },
        {
            name: '29.1 Combat Recon',
            image: '/attachments/barrels/291combatrecon.png'
        },
        {
            name: '26.5 Hammered Forged',
            image: '/attachments/barrels/265hammeredforged.png'
        },
        {
            name: '28.2 Tiger Team',
            image: '/attachments/barrels/282tigerteam.png'
        },
    ];


    var barrel = false;
    // //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt3").innerHTML = "";

    if (attArr.includes(2)) {
        barrel = true;

    }

    if (barrel != false) {

        var ranBarrel = Math.floor(Math.random() * barrels.length) + 0;

        var barrelPick = barrels[ranBarrel];
        // //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt3").innerHTML = '<b>' + "Barrel -  " + '</b>' + barrelPick.name + '<br>' + '<img  style="width:200px;" alt="'+ barrelPick.name + '"  src="' + barrelPick.image + '">';
    }

     if (barrel != true){
        document.getElementById("primaryAtt3").innerHTML = '<b>' + "Barrel -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }


    //Body

    var bodys = [
        {
            name: 'Steady Aim Laser', //DONT NEED
            image: '/attachments/bodys/steadyaimlaser.png'
        },
        {
            name: 'Mounted Flashlight', //DONT NEED
            image: '/attachments/bodys/mountedflashlight.png'
        },
        {
            name: 'SOF Target Designator', //DONT NEED
            image: '/attachments/bodys/softargetdesignator.png'
        },
        {
            name: 'SWAT 5mw Laser Sight', //DONT NEED
            image: '/attachments/bodys/swat5mwlasersight.png'
        },
        {
            name: 'Tiger Team Spotlight', //DONT NEED
            image: '/attachments/bodys/tigerteamspotlight.png'
        },
        {
            name: 'Ember Sighting Point', //DONT NEED
            image: '/attachments/bodys/embersightingpoint.png'
        },
    ];


    var body = false;
    // //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt4").innerHTML = "";

    if (attArr.includes(3)) {
        body = true;
        
    }

    if (body != false) {
        var ranBody = Math.floor(Math.random() * bodys.length) + 0;
        
        

        var bodyPick = bodys[ranBody];

        // //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt4").innerHTML = '<b>' + "Body -  " + '</b>' + bodyPick.name + '<br>' + '<img  style="width:200px;" alt="'+ bodyPick.name + '" src="' + bodyPick.image + '">';
    }


     if (body != true) {
        document.getElementById("primaryAtt4").innerHTML = '<b>' + "Body -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }

    //Underbarrel

    var underbarrels = [
        {
            name: 'Front Grip', //DONT NEED
            image: '/attachments/underbarrel/frontgrip.png'
        },
        {
            name: 'Infiltrator Grip', //DONT NEED
            image: '/attachments/underbarrel/infiltratorgrip.png'
        },
        {
            name: 'Patrol Grip',  //DONT NEED
            image: '/attachments/underbarrel/patrolgrip.png'
        },
        {
            name: 'Bruiser Grip',  //DONT NEED
            image: '/attachments/underbarrel/bruisergrip.png'
        },
        {
            name: 'Bipod',  //DONT NEED
            image: '/attachments/underbarrel/bipod.png'
        },
        {
            name: 'SFOD Speedgrip',  //DONT NEED
            image: '/attachments/underbarrel/sfodspeedgrip.png'
        },
    ];


    var underbarrel = false;
    // //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt5").innerHTML = "";

    if (attArr.includes(4)) {
        underbarrel = true;

    }

    if (underbarrel != false) {
        var ranUnderbarrel = Math.floor(Math.random() * underbarrels.length) + 0;

        var underbarrelPick = underbarrels[ranUnderbarrel];
 
        // //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt5").innerHTML = '<b>' + "Underbarrel -  " + '</b>' + underbarrelPick.name + '<br>' + '<img  style="width:200px;" alt="'+ underbarrelPick.name +'"  src="' + underbarrelPick.image + '">';
    }


     if (underbarrel != true){
        document.getElementById("primaryAtt5").innerHTML = '<b>' + "Underbarrel -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }


    //Magazine

    var magazines = [
        {
            name: '7 Rnd',  //DONT NEED
            image: '/attachments/magazines/7rnd.png'
        },
        {
            name: 'Fast Mag',  //DONT NEED
            image: '/attachments/magazines/fastmag.png'
        },
        {
            name: '7 Rnd Speed Mag',  //DONT NEED
            image: '/attachments/magazines/7rndspeedmag.png'
        },
        {
            name: 'STANAG 9 Rnd',  //DONT NEED
            image: '/attachments/magazines/stanag9rnd.png'
        },
        {
            name: 'Vandal Speed Loader',  //DONT NEED
            image: '/attachments/magazines/vandalspeedloader.png'
        },
        {
            name: 'Salvo 9 Rnd Fast Mag',  //DONT NEED
            image: '/attachments/magazines/salvo9rndfastmag.png'
        },
    ];


    var magazine = false;
    // //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt6").innerHTML = "";

    if (attArr.includes(5)) {
        magazine = true;

    }

    if (magazine != false) {
        var ranMagazine = Math.floor(Math.random() * magazines.length) + 0;


        var magazinePick = magazines[ranMagazine];

        //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt6").innerHTML = '<b>' + "Magazine -  " + '</b>' + magazinePick.name + '<br>' + '<img  style="width:200px;" alt="'+magazinePick.name + '"  src="' + magazinePick.image + '">';
    }

     if (magazine != true){
        document.getElementById("primaryAtt6").innerHTML = '<b>' + "Magazine -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }





    //Handle

    var handles = [
        {
            name: 'Speed Tape',  //DONT NEED
            image: '/attachments/handles/speedtape.png'
        },
        {
            name: 'Dropshot Wrap', //DONT NEED
            image: '/attachments/handles/dropshotwrap.png'
        },
        {
            name: 'Field Tape', //DONT NEED
            image: '/attachments/handles/fieldtape.png'
        },
        {
            name: 'SARS Jungle Grip', //DONT NEED
            image: '/attachments/handles/sarsjunglegrip.png'
        },
        {
            name: 'Serpent Wrap',//DONT NEED
            image: '/attachments/handles/serpentwrap.png'
        },
        {
            name: 'Airbone Elastic Wrap',  //DONT NEED
            image: '/attachments/handles/airborneelasticwrap.png'
        },
    ];


    var handle = false;
    //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt7").innerHTML = "";

    if (attArr.includes(6)) {
        handle = true;

    }

    if (handle != false) {
        var ranHandle = Math.floor(Math.random() * handles.length) + 0;
        

        var handlePick = handles[ranHandle];

        //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt7").innerHTML = '<b>' + "Handle -  " + '</b>' + handlePick.name + '<br>' + '<img  style="width:200px;" alt="'+ handlePick.name +'" src="' + handlePick.image + '">';
    }

     if (handle != true){
        document.getElementById("primaryAtt7").innerHTML = '<b>' + "Handle -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }


    //Stock

    var stocks = [
        {
            name: 'Tactical Stock', //DONT NEED
            image: '/attachments/stocks/tacticalstock.png'
        },
        {
            name: 'CQB Pad',  //DONT NEED
            image: '/attachments/stocks/cqbpad.png'
        },
        {
            name: 'Duster Pad',  //DONT NEED
            image: '/attachments/stocks/dusterpad.png'
        },
        {
            name: 'Marathon Stock',  //DONT NEED
            image: '/attachments/stocks/marathonstock.png'
        },
        {
            name: 'SAS Combat Stock',  //DONT NEED
            image: '/attachments/stocks/sascombatstock.png'
        },
        {
            name: 'Raider Pad',  //DONT NEED
            image: '/attachments/stocks/raiderpad.png'
        },
    ];


    var stock = false;
    //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt8").innerHTML = "";

    if (attArr.includes(7)) {
        stock = true;

    }

    if (stock != false) {
        var ranStock = Math.floor(Math.random() * stocks.length) + 0;
        

        var stockPick = stocks[ranStock];

        //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt8").innerHTML = '<b>' + "Stock -  " + '</b>' + stockPick.name + '<br>' + '<img  style="width:200px;" alt="'+stockPick.name + '" src="' + stockPick.image + '">';
    }

    if (stock != true){
        document.getElementById("primaryAtt8").innerHTML = '<b>' + "Stock -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }

}



//M82
function m82() {
    var numAttachments = [0, 1, 2, 3, 4, 5, 6, 7];
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
            name: 'Visiontexh 2x', //DONT NEED
            image: '/attachments/optics/visiontech2x.png'
        },
        {
            name: 'Kobra Red Dot', //DONT NEED
            image: '/attachments/optics/kobrareddot.png'
        },
        {
            name: 'Axial Arms 3x', //DONT NEED
            image: '/attachments/optics/axialarms3x.png'
        },
        {
            name: 'Iron Sights', //DONT NEED
            image: '/attachments/optics/ironsights.png'
        },
        {
            name: 'Sillix Holoscout', //DONT NEED
            image: '/attachments/optics/sillixholosxout.png'
        },
        {
            name: 'Royal & Kross 4x', //DONT NEED
            image: '/attachments/optics/royalandkross4x.png'
        },
        {
            name: 'SUSAT Multizoom', //DONT NEED
            image: '/attachments/optics/susatmultizoom.png'
        },
        {
            name: 'Vulture Custom Zoom',  //DONT NEED
            image: '/attachments/optics/vulturecustomzoom.png'
        },
        {
            name: 'millstop reflex', //DONT NEED
            image: '/attachments/optics/millstopreflex.png'
        },
        {
            name: 'Hangman RF',  //DONT NEED
            image: '/attachments/optics/hangmanrf.png'
        },
        {
            name: 'Ultrazoom Custom', //DONT NEED
            image: '/attachments/optics/ultrazoomcustom.png'
        },
        {
            name: 'AN/PVS-4 Thermal', //DONT NEED
            image: '/attachments/optics/anpvs4thermal.png'
        },

    ];


    var optic = false;
    // //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt1").innerHTML = "";

    if (attArr.includes(0)) {
        optic = true;
    }

    if (optic != false) {
       
        var ranOptic = Math.floor(Math.random() * optics.length) + 0;

        var opticPick = optics[ranOptic];

        // //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt1").innerHTML = '<b>' + "Optic -  " + '</b>' + opticPick.name + '<br>' + '<img  style="width:200px;"  alt="' + opticPick.name +'" src="' + opticPick.image + '">';
    }

     if(optic != true){
        document.getElementById("primaryAtt1").innerHTML = '<b>' + "Optic -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }

    //Muzzle

    var muzzles = [
        {
            name: 'Stabilizer .50 BMG', 
            image: '/attachments/muzzles/stabilizer50bmg.png'
        },
        {
            name: 'Flash Hider .50 BMG', 
            image: '/attachments/muzzles/flashhider50bmg.png'
        },
        {
            name: 'Sound Moderator', //DONT NEED
            image: '/attachments/muzzles/soundmoderator.png'
        },
        {
            name: 'Infantry Stabilizer', //DONT NEED
            image: '/attachments/muzzles/infantrystabilizer.png'
        },
        {
            name: 'Task Force Shroud', //DONT NEED
            image: '/attachments/muzzles/taskforceshroud.png'
        },
        {
            name: 'Wrapped Suppressor', //DONT NEED
            image: '/attachments/muzzles/wrappedsuppressor.png'
        },
    ];


    var muzzle = false;
    // //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt2").innerHTML = "";

    if (attArr.includes(1)) {
        muzzle = true;
    }

    if (muzzle != false) {

        var ranMuzzle = Math.floor(Math.random() * muzzles.length) + 0;

        var muzzlePick = muzzles[ranMuzzle];

        //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt2").innerHTML = '<b>' + "Muzzle -  " + '</b>' + muzzlePick.name + '<br>' + '<img  style="width:200px;"  alt="' + muzzlePick.name +'" src="' + muzzlePick.image + '">';
    }

     if(muzzle != true) {
        document.getElementById("primaryAtt2").innerHTML = '<b>' + "Muzzle -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }


    //Barrels

    var barrels = [
        {
            name: '22.2 Extended',
            image: '/attachments/barrels/222extended.png'
        },
        {
            name: '21.8 Cavalry Lancer',
            image: '/attachments/barrels/218cavalrylancer.png'
        },
        {
            name: '20.6 Rapid Fire',
            image: '/attachments/barrels/206rapidfire.png'
        },
        {
            name: '22.6 Combat Recon',
            image: '/attachments/barrels/226combatrecon.png'
        },
        {
            name: '19.5 Ultralight',
            image: '/attachments/barrels/195ultralight.png'
        },
        {
            name: '22.6 Tiger Team',
            image: '/attachments/barrels/226tigerteam.png'
        },
    ];


    var barrel = false;
    // //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt3").innerHTML = "";

    if (attArr.includes(2)) {
        barrel = true;

    }

    if (barrel != false) {

        var ranBarrel = Math.floor(Math.random() * barrels.length) + 0;

        var barrelPick = barrels[ranBarrel];
        // //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt3").innerHTML = '<b>' + "Barrel -  " + '</b>' + barrelPick.name + '<br>' + '<img  style="width:200px;" alt="'+ barrelPick.name + '"  src="' + barrelPick.image + '">';
    }

     if (barrel != true){
        document.getElementById("primaryAtt3").innerHTML = '<b>' + "Barrel -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }


    //Body

    var bodys = [
        {
            name: 'Steady Aim Laser', //DONT NEED
            image: '/attachments/bodys/steadyaimlaser.png'
        },
        {
            name: 'Mounted Flashlight', //DONT NEED
            image: '/attachments/bodys/mountedflashlight.png'
        },
        {
            name: 'SOF Target Designator', //DONT NEED
            image: '/attachments/bodys/softargetdesignator.png'
        },
        {
            name: 'SWAT 5mw Laser Sight', //DONT NEED
            image: '/attachments/bodys/swat5mwlasersight.png'
        },
        {
            name: 'Tiger Team Spotlight', //DONT NEED
            image: '/attachments/bodys/tigerteamspotlight.png'
        },
        {
            name: 'Ember Sighting Point', 
            image: '/attachments/bodys/embersightingpoint.png'
        },
    ];


    var body = false;
    // //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt4").innerHTML = "";

    if (attArr.includes(3)) {
        body = true;
        
    }

    if (body != false) {
        var ranBody = Math.floor(Math.random() * bodys.length) + 0;
        
        

        var bodyPick = bodys[ranBody];

        // //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt4").innerHTML = '<b>' + "Body -  " + '</b>' + bodyPick.name + '<br>' + '<img  style="width:200px;" alt="'+ bodyPick.name + '" src="' + bodyPick.image + '">';
    }


     if (body != true) {
        document.getElementById("primaryAtt4").innerHTML = '<b>' + "Body -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }

    //Underbarrel

    var underbarrels = [
        {
            name: 'Front Grip', //DONT NEED
            image: '/attachments/underbarrel/frontgrip.png'
        },
        {
            name: 'Infiltrator Grip', //DONT NEED
            image: '/attachments/underbarrel/infiltratorgrip.png'
        },
        {
            name: 'Patrol Grip',  //DONT NEED
            image: '/attachments/underbarrel/patrolgrip.png'
        },
        {
            name: 'Bruiser Grip',  //DONT NEED
            image: '/attachments/underbarrel/bruisergrip.png'
        },
        {
            name: 'Bipod',  //DONT NEED
            image: '/attachments/underbarrel/bipod.png'
        },
        {
            name: 'SFOD Speedgrip',  //DONT NEED
            image: '/attachments/underbarrel/sfodspeedgrip.png'
        },
    ];


    var underbarrel = false;
    // //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt5").innerHTML = "";

    if (attArr.includes(4)) {
        underbarrel = true;

    }

    if (underbarrel != false) {
        var ranUnderbarrel = Math.floor(Math.random() * underbarrels.length) + 0;

        var underbarrelPick = underbarrels[ranUnderbarrel];
 
        // //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt5").innerHTML = '<b>' + "Underbarrel -  " + '</b>' + underbarrelPick.name + '<br>' + '<img  style="width:200px;" alt="'+ underbarrelPick.name +'"  src="' + underbarrelPick.image + '">';
    }


     if (underbarrel != true){
        document.getElementById("primaryAtt5").innerHTML = '<b>' + "Underbarrel -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }


    //Magazine

    var magazines = [
        {
            name: '7 Rnd',  //DONT NEED
            image: '/attachments/magazines/7rnd.png'
        },
        {
            name: 'Fast Mag',  //DONT NEED
            image: '/attachments/magazines/fastmag.png'
        },
        {
            name: '7 Rnd Speed Mag',  //DONT NEED
            image: '/attachments/magazines/7rndspeedmag.png'
        },
        {
            name: 'STANAG 9 Rnd',  //DONT NEED
            image: '/attachments/magazines/stanag9rnd.png'
        },
        {
            name: 'Vandal Speed Loader',  //DONT NEED
            image: '/attachments/magazines/vandalspeedloader.png'
        },
        {
            name: 'Salvo 9 Rnd Fast Mag',  //DONT NEED
            image: '/attachments/magazines/salvo9rndfastmag.png'
        },
    ];


    var magazine = false;
    // //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt6").innerHTML = "";

    if (attArr.includes(5)) {
        magazine = true;

    }

    if (magazine != false) {
        var ranMagazine = Math.floor(Math.random() * magazines.length) + 0;


        var magazinePick = magazines[ranMagazine];

        //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt6").innerHTML = '<b>' + "Magazine -  " + '</b>' + magazinePick.name + '<br>' + '<img  style="width:200px;" alt="'+magazinePick.name + '"  src="' + magazinePick.image + '">';
    }

     if (magazine != true){
        document.getElementById("primaryAtt6").innerHTML = '<b>' + "Magazine -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }





    //Handle

    var handles = [
        {
            name: 'Speed Tape',  //DONT NEED
            image: '/attachments/handles/speedtape.png'
        },
        {
            name: 'Dropshot Wrap', //DONT NEED
            image: '/attachments/handles/dropshotwrap.png'
        },
        {
            name: 'Field Tape', //DONT NEED
            image: '/attachments/handles/fieldtape.png'
        },
        {
            name: 'SARS Jungle Grip', //DONT NEED
            image: '/attachments/handles/sarsjunglegrip.png'
        },
        {
            name: 'Serpent Wrap',//DONT NEED
            image: '/attachments/handles/serpentwrap.png'
        },
        {
            name: 'Airbone Elastic Wrap',  //DONT NEED
            image: '/attachments/handles/airborneelasticwrap.png'
        },
    ];


    var handle = false;
    //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt7").innerHTML = "";

    if (attArr.includes(6)) {
        handle = true;

    }

    if (handle != false) {
        var ranHandle = Math.floor(Math.random() * handles.length) + 0;
        

        var handlePick = handles[ranHandle];

        //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt7").innerHTML = '<b>' + "Handle -  " + '</b>' + handlePick.name + '<br>' + '<img  style="width:200px;" alt="'+ handlePick.name +'" src="' + handlePick.image + '">';
    }

     if (handle != true){
        document.getElementById("primaryAtt7").innerHTML = '<b>' + "Handle -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }


    //Stock

    var stocks = [
        {
            name: 'Tactical Stock', //DONT NEED
            image: '/attachments/stocks/tacticalstock.png'
        },
        {
            name: 'Marathon Stock',  //DONT NEED
            image: '/attachments/stocks/marathonstock.png'
        },
        {
            name: 'Duster Pad',  //DONT NEED
            image: '/attachments/stocks/dusterpad.png'
        },
        {
            name: 'CQB Pad',  //DONT NEED
            image: '/attachments/stocks/cqbpad.png'
        },
        {
            name: 'SAS Combat Stock',  //DONT NEED
            image: '/attachments/stocks/sascombatstock.png'
        },
        {
            name: 'Raider Pad',  //DONT NEED
            image: '/attachments/stocks/raiderpad.png'
        },
    ];


    var stock = false;
    //document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt8").innerHTML = "";

    if (attArr.includes(7)) {
        stock = true;

    }

    if (stock != false) {
        var ranStock = Math.floor(Math.random() * stocks.length) + 0;
        

        var stockPick = stocks[ranStock];

        //document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt8").innerHTML = '<b>' + "Stock -  " + '</b>' + stockPick.name + '<br>' + '<img  style="width:200px;" alt="'+stockPick.name + '" src="' + stockPick.image + '">';
    }

    if (stock != true){
        document.getElementById("primaryAtt8").innerHTML = '<b>' + "Stock -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
    }

}