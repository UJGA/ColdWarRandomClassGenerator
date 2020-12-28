//Template

function template() {
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
            name: 'test1',
            image: '/attachments/gun/test.png'
        },
        {
            name: 'test2',
            image: '/attachments/gun/test.png'
        },
        {
            name: 'test3',
            image: '/attachments/gun/test.png'
        },
        {
            name: 'test4',
            image: '/attachments/gun/test.png'
        },
        {
            name: 'test5',
            image: '/attachments/gun/test.png'
        },
        {
            name: 'test6',
            image: '/attachments/gun/test.png'
        },
        {
            name: 'test7',
            image: '/attachments/gun/test.png'
        }
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
            name: 'test1',
            image: '/attachments/gun/test.png'
        },
        {
            name: 'test2',
            image: '/attachments/gun/test.png'
        },
        {
            name: 'test3',
            image: '/attachments/gun/test.png'
        },
        {
            name: 'test4',
            image: '/attachments/gun/test.png'
        },
        {
            name: 'test5',
            image: '/attachments/gun/test.png'
        },
        {
            name: 'test6',
            image: '/attachments/gun/test.png'
        },
        {
            name: 'test7',
            image: '/attachments/gun/test.png'
        }
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
            name: 'test1',
            image: '/attachments/gun/test.png'
        },
        {
            name: 'test2',
            image: '/attachments/gun/test.png'
        },
        {
            name: 'test3',
            image: '/attachments/gun/test.png'
        },
        {
            name: 'test4',
            image: '/attachments/gun/test.png'
        },
        {
            name: 'test5',
            image: '/attachments/gun/test.png'
        },
        {
            name: 'test6',
            image: '/attachments/gun/test.png'
        },
        {
            name: 'test7',
            image: '/attachments/gun/test.png'
        }
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
            name: 'test1',
            image: '/attachments/gun/test.png'
        },
        {
            name: 'test2',
            image: '/attachments/gun/test.png'
        },
        {
            name: 'test3',
            image: '/attachments/gun/test.png'
        },
        {
            name: 'test4',
            image: '/attachments/gun/test.png'
        },
        {
            name: 'test5',
            image: '/attachments/gun/test.png'
        },
        {
            name: 'test6',
            image: '/attachments/gun/test.png'
        },
        {
            name: 'test7',
            image: '/attachments/gun/test.png'
        }
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
            name: 'test1',
            image: '/attachments/gun/test.png'
        },
        {
            name: 'test2',
            image: '/attachments/gun/test.png'
        },
        {
            name: 'test3',
            image: '/attachments/gun/test.png'
        },
        {
            name: 'test4',
            image: '/attachments/gun/test.png'
        },
        {
            name: 'test5',
            image: '/attachments/gun/test.png'
        },
        {
            name: 'test6',
            image: '/attachments/gun/test.png'
        },
        {
            name: 'test7',
            image: '/attachments/gun/test.png'
        }
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
            name: 'test1',
            image: '/attachments/gun/test.png'
        },
        {
            name: 'test2',
            image: '/attachments/gun/test.png'
        },
        {
            name: 'test3',
            image: '/attachments/gun/test.png'
        },
        {
            name: 'test4',
            image: '/attachments/gun/test.png'
        },
        {
            name: 'test5',
            image: '/attachments/gun/test.png'
        },
        {
            name: 'test6',
            image: '/attachments/gun/test.png'
        },
        {
            name: 'test7',
            image: '/attachments/gun/test.png'
        }
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