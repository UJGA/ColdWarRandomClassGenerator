//Template

function test12() {
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

    //Underbarrel

    var underbarrels = [
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


    var underbarrel = false;
    // //document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt5").innerHTML = "";

    if (attArr.includes(4)) {
        underbarrel = true;

    }

    if (underbarrel != false) {
        var ranUnderbarrel = Math.floor(Math.random() * underbarrels.length) + 0;

        var underbarrelPick = underbarrels[ranUnderbarrel];
 
        // //document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt5").innerHTML = '<b>' + "Underbarrel -  " + '</b>' + underbarrelPick.name + '<br>' + '<img  style="width:200px;" alt="'+ underbarrelPick.name +'"  src="' + underbarrelPick.image + '">';
    }


     if (underbarrel != true){
        document.getElementById("secondaryAtt5").innerHTML = '<b>' + "Underbarrel -  " + '</b> None <br>' + '<img  style="width:200px;"  alt="None" src="none.png">';
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