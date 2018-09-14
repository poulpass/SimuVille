var villeAjout1;
var villeAjout2;
var villeAjout3;
var arrayMaisons1=[];
var maison1;
var calendrierCata = [];
var nombreCata;
var degatsVille1=0;

//Lancer la simulation
$( "#startButton" ).click(function() {
    $( "#formulaires_villes" ).hide();
    $( "#page_form" ).hide();
    $( "#page_simu" ).show();
    setVille1();
    chrono();
});


$('#SelectVilles').click(function() {
    
    $('#formulaire1').collapse('hide');
    $('#formulaire2').collapse('hide');
    $('#formulaire3').collapse('hide');
    $('#startButton').collapse('hide');
    $('#valideVille').collapse('show');
});

$('#valideVille').click(function() {
    var n = $('#SelectVilles').val();
    var t = $('#selectAnnees').val();
    
    ////Gestion des catastrophes
    for (var i = 0; i <= n ; i++) {
        $('#formulaire' + i).collapse('show').delay( 8800 );
            if (t<50){
                nombreCata = Math.floor((Math.random() * 2));
            }
            else if (t<500 && t>=50){
                nombreCata = Math.floor((Math.random() * 10)+1);
            }
            else if (t<10000 && t>=500){
                nombreCata = Math.floor((Math.random() * 31)+2);
            }
            else {
                nombreCata = Math.floor((Math.random() * 54)+4);
            }
    };

    for (y = 0; y <= nombreCata; y++) {
        calendrierCata.push(Math.floor((Math.random() * t)+1));
        console.log(calendrierCata)
    };

    $('#startButton').collapse('show');
    $('#valideVille').collapse('hide');
});


function setVille1(){
    var popVille1 = parseFloat($("#popVille1").val());

    if (popVille1 < 1000){
        maison1 = 1;
    }
    else if (popVille1 <= 10000){
         maison1 = parseInt(popVille1/1000);
    }
    else if(popVille1 > 10000){
         maison1 = 10+ parseInt(popVille1/10000);
    }
    else{
        popVille1 = 2 ;
    };
    for (i = 0; i < maison1; i++) {
        var randomMaison = Math.floor((Math.random() * 36) + 1);
        arrayMaisons1.push('<img src="icon/'+randomMaison+'.svg" height="32px" width="32px"></img>')
        $("#maisonsVille1").html(arrayMaisons1);
    };

    if (popVille1 < 1000 && popVille1 > 2){
        villeAjout1 = 1;
    }
    else if (popVille1 >= 1000 && popVille1 < 10000){
        villeAjout1 = parseInt(popVille1/1000);
    }
    else if(popVille1 >= 10000){
        villeAjout1 = 10+ parseInt(popVille1/10000);
    }

}


function chrono() {

    var annee = 0;
    
    var maxAnnee = parseInt($("#selectAnnees").val());

    var popVille1 = parseInt($("#popVille1").val());
    var natVille1 = parseFloat($("#natVille1").val());
    var mortVille1 = parseFloat($("#mortVille1").val());

    var popVille2 = parseFloat($("#popVille2").val());
    var natVille2 = parseFloat($("#natVille2").val());
    var mortVille2 = parseFloat($("#mortVille2").val());

    var popVille3 = parseFloat($("#popVille3").val());
    var natVille3 = parseFloat($("#natVille3").val());
    var mortVille3 = parseFloat($("#mortVille3").val());

      var chrono = setInterval(function() {
        $("#chrono").html(annee);


        for(var ii=0; ii < calendrierCata.length; ii++){
            var fouille = calendrierCata[ii];
            if(fouille == parseInt(annee)){
                var badaboum=Math.floor((Math.random() * 6) + 1);
                switch(badaboum) {
                    case 0:
                        //RAS
                        degatsVille1 = 0;
                        break;
                    case 1:
                        //EAU
                        degatsVille1 = 5;
                        colorCata = "blue";
                        break;
                    case 2:
                        //FEU
                        degatsVille1 = 8;
                        colorCata = "red";
                        break;
                    case 3:
                        //TERRE
                        degatsVille1 = 10;
                        colorCata = "brown";
                        break;
                    case 4:
                        //AIR
                        degatsVille1 = 4;
                        colorCata = "grey";
         
                        break;
                    case 5:
                        //EPIDEMIE
                        degatsVille1 = 36;
                        colorCata = "green";
                        break;
                    case 6:
                        //GUERRE
                        degatsVille1 = 47;
                        colorCata = "black";
                        break;
                    default:
                        console.log("Erreur de cataclysme")
                }
               // alert("C'est la cata ! : "  );

                    $("#divVille1").css({
                        backgroundColor: colorCata
                    }, 10);
                    setTimeout(
                        function() 
                        {
                            $("#divVille1").delay( 100 ).css({
                                backgroundColor: "white"
                            }, 100);
                        }, 100);
                        setTimeout(
                            function() 
                            {
                                $("#divVille1").delay( 100 ).css({
                                    backgroundColor: colorCata
                                }, 100);
                            }, 200);
                            setTimeout(
                                function() 
                                {
                                    $("#divVille1").delay( 100 ).css({
                                        backgroundColor: "white"
                                    }, 100);
                                }, 300);

              break;
            };
        };
        popVille1Calc = popVille1 + (popVille1 * natVille1)-(popVille1 * mortVille1)-(popVille1*degatsVille1/100);
        popVille1 = parseInt(popVille1Calc);
        $("#popVille1Live").html(popVille1);

        popVille2Calc = popVille2 + (popVille2 * natVille2)-(popVille2 * mortVille2);
        popVille2 = parseInt(popVille2Calc);
        $("#popVille2Live").html(popVille2.toString());

        popVille3Calc = popVille3 + (popVille3 * natVille3)-(popVille3 * mortVille3);
        popVille3 = parseInt(popVille3Calc);
        $("#popVille3Live").html(popVille3.toString());
        degatsVille1=0;

/*
        if(jQuery.inArray(annee, calendrierCata) ){
            alert("C'est la cata ! : "  );
            console.log(calendrierCata);
        };*/
/////////////////////////////////////
    if (popVille1 < 1000 && popVille1 > 2){
        maison1 = 1;
    }
    else if (popVille1 >= 1000 && popVille1 < 10000){
         maison1 = parseInt(popVille1/1000);
    }
    else if(popVille1 >= 10000){
         maison1 = 10+ parseInt(popVille1/10000);
    }
    else{
        popVille1 = 2 ;
    };


    if(maison1 > villeAjout1){
        console.log("oui")
        var construction = (maison1-villeAjout1);
        
        for (yy = 0; yy < construction; yy++) {
            var randomMaison = Math.floor((Math.random() * 36) + 1);
            arrayMaisons1.push('<img src="icon/'+randomMaison+'.svg" height="32px" width="32px"></img>')
        };
        
        $("#maisonsVille1").html(arrayMaisons1);
    };
    if(maison1 < villeAjout1){
        var poubelle = [];
        var destruction = (villeAjout1-maison1);
        console.log("villeAjout="+villeAjout1+' _ '+'maison='+maison1+' _ '+'destruction='+destruction)
        $("#maisonsVille1").html(arrayMaisons1);
        villeAjout1 = maison1;
        for (yy = 0; yy < destruction; yy++) {
            poubelle = arrayMaisons1.splice(-1, 1);
        };
    };  
/////////////////////////////////////
    if (popVille2 < 1000){
        var maison2 = 1;
    }
    else if (popVille2 <= 10000){
        var maison2 = parseInt(popVille2/1000);
    }
    else{
        var maison2 = 10+ parseInt(popVille2/10000);
    };

    if(maison2 > villeAjout2){
        var randomMaison = Math.floor((Math.random() * 36) + 1);
        $("#maisonsVille2").append('<img src="icon/'+randomMaison+'.svg" height="32px" width="32px"></img>');
    };
/////////////////////////////////////
    if (popVille3 < 1000){
        var maison3 = 1;
    }
    else if (popVille3 <= 10000){
        var maison3 = parseInt(popVille3/1000);
    }
    else{
        var maison3 = 10+ parseInt(popVille3/10000);
    };

    if(maison3 > villeAjout3){
        var randomMaison = Math.floor((Math.random() * 36) + 1);
        $("#maisonsVille3").append('<img src="icon/'+randomMaison+'.svg" height="32px" width="32px"></img>');
    };
    villeAjout1 = maison1;
    villeAjout2 = maison2;
    villeAjout3 = maison3;
    
        annee++;
        
        if (annee >= maxAnnee+1) {
            clearInterval(chrono);
        }

    }, 100);
}




/////////////////////////////////////////_EMPECHER D'ENTRER UNE MAUVAISE VALEUR
$("#selectAnnees").focusout (function(){
    var check = parseInt($("#selectAnnees").val());
    if (isNaN(check)){
        $("#selectAnnees").val("1");
    }
    console.log(check)
});



$("#popVille1").focusout (function(){
    var check = parseInt($("#popVille1").val());
    if (isNaN(check) || check < 2 ){
        $("#popVille1").val("2");
    }
    console.log(check)
});$("#natVille1").focusout (function(){
    var check = parseInt($("#natVille1").val());
    if (isNaN(check) || check <= 0,000 || check > 2){
        $("#natVille1").val("0,001");
    }
    console.log(check)
});$("#mortVille1").focusout (function(){
    var check = parseInt($("#mortVille1").val());
    if (isNaN(check) || check <= 0,000 || check > 2){
        $("#mortVille1").val("0,001");
    }   
    console.log(check)
});


$("#popVille2").focusout (function(){
    var check = parseInt($("#popVille2").val());
    if (isNaN(check) || check < 2 || check > 5000){
        $("#popVille2").val("2");
    }
    console.log(check)
});$("#natVille2").focusout (function(){
    var check = parseInt($("#natVille2").val());
    if (isNaN(check) || check <= 0 || check > 2){
        $("#natVille2").val("0,001");
    }
    console.log(check)
});$("#mortVille2").focusout (function(){
    var check = parseInt($("#mortVille2").val());
    if (isNaN(check) || check <= 0 || check > 2){
        $("#mortVille2").val("0,001");
    }
    console.log(check)
});


$("#popVille3").focusout (function(){
    var check = parseInt($("#popVille3").val());
    if (isNaN(check) || check < 2 ){
        $("#popVille3").val("2");
    }
    console.log(check)
});$("#natVille3").focusout (function(){
    var check = parseInt($("#natVille3").val());
    if (isNaN(check) || check <= 0 || check > 2){
        $("#natVille3").val("0,001");
    }
    console.log(check)
});$("#mortVille3").focusout (function(){
    var check = parseInt($("#mortVille3").val());
    if (isNaN(check) || check <= 0 || check > 2){
        $("#mortVille3").val("0,001");
    }
    console.log(check)
});




function cata(){
    switch(badaboum) {
        case 0:
        //RAS
            break;
        case 1:
            //EAU
            break;
        case 2:
            //FEU
            break;
        case 3:
            //TERRE
            break;
        case 4:
            //AIR
            break;
        case 5:
            //EPIDEMIE
            break;
        case 6:
            //GUERRE
            break;
        default:
            console.log("Erreur de cataclysme")
    }
}

