

document.getElementById("nappi").onclick = function(){
        var luku = document.getElementById("numero").value;
        nuoli1 = document.getElementById("nuoli1");
        nuoli2 = document.getElementById("nuoli2");
        nuoli3 = document.getElementById("nuoli3");
        nuoli4 = document.getElementById("nuoli4");
        nuoli5 = document.getElementById("nuoli5");
    console.log('luku:',luku," nuolet: ",nuoli1,nuoli2,nuoli3,nuoli4,nuoli5);

    /* 
    if (nuoli1.checked == true){
        document.write("nuoli1");
    }
    else if (nuoli2.checked == true){
        document.write("nuoli2");
    }
    else if (nuoli3.checked == true){
        document.write("nuoli3");
    }
    else if (nuoli4.checked == true){
        document.write("nuoli4");
    }
    else if (nuoli5.checked == true){
        document.write("nuoli5");
    }
    else{
        document.write("ei osu");
    }
    */

    if (nuoli5.checked == true && luku <= 3.5){
        document.write("Annetaan 3 siripiria ja soitetaan");
        document.write('<a href="koe.html"><h2>takas</h2></a>');
    }
    else if (nuoli5.checked == true && luku <= 4.9 && luku >= 3.5){
        document.write("Annetaan 3 siripiria + 15hh");
        document.write('<a href="koe.html"><h2>takas</h2></a>');
    }
    else if (nuoli5.checked == true && luku <= 6.9 && luku >= 4.9){
        document.write("Annetaan 2 siripiria + 15hh");
        document.write('<a href="koe.html"><h2>takas</h2></a>');
    }
    else if (nuoli5.checked == true && luku <= 8.9 && luku >= 6.9){
        document.write("Annetaan 1 siripiria + 10hh");
        document.write('<a href="koe.html"><h2>takas</h2></a>');
    }
    else if (nuoli5.checked == true && luku <= 11 && luku >= 8.9){
        document.write("Ei tarvita toimenpiteitä");
        document.write('<a href="koe.html"><h2>takas</h2></a>');
    }
    else if (nuoli1.checked == true && luku <= 4.9 && luku >= 3.5){
        document.write("Annetaan 10hh");
        document.write('<a href="koe.html"><h2>takas</h2></a>');
    }
    else if (nuoli1.checked == true && luku <= 7.8 && luku >= 4.9){
        document.write("Ei tarvita toimenpiteitä");
        document.write('<a href="koe.html"><h2>takas</h2></a>');
    }
    else if (nuoli1.checked == true && luku <= 8.9 && luku >= 7.8){
        document.write("Korjataan insuliini pumpulla");
        document.write('<a href="koe.html"><h2>takas</h2></a>');
    }
    else if (nuoli1.checked == true || nuoli3.checked == true && luku > 8.9){
        document.write("Korjataan insuliini pumpulla");
        document.write('<a href="koe.html"><h2>takas</h2></a>');
    }
    else if (nuoli3.checked == true && luku <= 4.9 && luku >= 3.5){
        document.write("Annetaan 1 siripiria + 15hh");
        document.write('<a href="koe.html"><h2>takas</h2></a>');
    }
    else if (nuoli3.checked == true && luku <= 6.9 && luku >= 4.9){
        document.write("Annetaan 10hh");
        document.write('<a href="koe.html"><h2>takas</h2></a>');
    }
    else if (nuoli3.checked == true && luku <= 8.9 && luku >= 6.9){
        document.write("Ei tarvita toimenpiteitä");
        document.write('<a href="koe.html"><h2>takas</h2></a>');
    }
    else{
        document.write("valintaa ei tunneta");
        document.write('<a href="koe.html"><h2>takas</h2></a>');
    }


 }


 