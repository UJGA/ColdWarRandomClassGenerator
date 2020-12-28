//XM4

function xm4() {
    var numAttachments = [0, 1, 2, 3, 4, 5, 6, 7];
    var totalCount = 8;
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
            name: 'Silliz Holoscout',
            image: '/attachments/optics/sillixholosxout.png'
        },
        {
            name: 'Microflex LED',
            image: '/attachments/optics/microflexLED.png'
        },
        {
            name: 'Hawksmoor',
            image: '/attachments/optics/hawksmoor.png'
        },
        {
            name: 'Royal & Kross 4x',
            image: '/attachments/optics/royalkross4x.png'
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
            image: '/attachments/xm4/muzzlebrake556.png'
        },
        {
            name: 'Flashguard 5.56',
            image: '/attachments/xm4/flashguard556.png'
        },
        {
            name: 'Suppressor',
            image: '/attachments/xm4/suppressor.png'
        },
        {
            name: 'Infantry Compensator',
            image: '/attachments/xm4/infantrycompensator.png'
        },
        {
            name: 'SOCOM Eliminator',
            image: '/attachments/xm4/socomeliminator.png'
        },
        {
            name: 'Agency Suppressor',
            image: '/attachments/xm4/agencysuppressir.png'
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
            image: '/attachments/xm4/118ranger.png'
        },
        {
            name: '12.5 Cavalry Lancer',
            image: '/attachments/xm4/125cavalrylancer.png'
        },
        {
            name: '13.5 Rinforced Heavy',
            image: '/attachments/xm4/135reinforcedheavy.png'
        },
        {
            name: '13.7 Extended',
            image: '/attachments/xm4/127extended.png'
        },
        {
            name: '13.7 Takedown',
            image: '/attachments/xm4/137takedown.png'
        },
        {
            name: '13.5 Task Force',
            image: '/attachments/xm4/135taskforce.png'
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
            image: '/attachments/xm4/steadyaimlaser.png'
        },
        {
            name: 'Mounted Flashlight',
            image: '/attachments/xm4/mountedflashlight.png'
        },
        {
            name: 'SOF Target Designator',
            image: '/attachments/xm4/softargetdesignator.png'
        },
        {
            name: 'SWAT 5mw Laser Sight',
            image: '/attachments/xm4/swat5mwlasersight.png'
        },
        {
            name: 'Tiger Team Spotlight',
            image: '/attachments/xm4/tigerteamspotlight.png'
        },
        {
            name: 'Emver Sighting Point',
            image: '/attachments/xm4/embersightingpoint.png'
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
            image: '/attachments/underbarrel/foregrup.png'
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
            image: '/attachments/xm4/40rnd.png'
        },
        {
            name: 'Jungle-Style Mag',
            image: '/attachments/xm4/junglestylemag.png'
        },
        {
            name: '40 Rnd Speed Mag',
            image: '/attachments/xm4/40rndspeedmag.png'
        },
        {
            name: 'STANAG 50 Rnd',
            image: '/attachments/xm4/stanag50rnd.png'
        },
        {
            name: 'SAS Mag Clamp',
            image: '/attachments/xm4/sasmagclamp.png'
        },
        {
            name: 'Salvo 50 Rnd Fast Mag',
            image: '/attachments/xm4/salvo50rndfastmag.png'
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
            image: '/attachments/xm4/speedtape.png'
        },
        {
            name: 'Dropshot Wrap',
            image: '/attachments/xm4/dropshotwrap.png'
        },
        {
            name: 'Field Tape',
            image: '/attachments/xm4/fieldtape.png'
        },
        {
            name: 'SARS Jungle Grip',
            image: '/attachments/xm4/sarsjunglegrip.png'
        },
        {
            name: 'Serpent Wrap',
            image: '/attachments/xm4/serpentwrap.png'
        },
        {
            name: 'Airborne Elastic Wrap',
            image: '/attachments/xm4/airborneelasticwrap.png'
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
            image: '/attachments/xm4/tacticalstock.png'
        },
        {
            name: 'Wire Stock',
            image: '/attachments/xm4/wirestock.png'
        },
        {
            name: 'Duster Stock',
            image: '/attachments/xm4/dusterstock.png'
        },
        {
            name: 'Buffer Tube',
            image: '/attachments/xm4/buffertube.png'
        },
        {
            name: 'SAS Combat Stock',
            image: '/attachments/xm4/sascombatstock.png'
        },
        {
            name: 'Raider Pad',
            image: '/attachments/xm4/raiderpad.png'
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