
function showLyrics(){
    for(i=99; i>=1; i--){
        let bottle, bottle2;
        let x = i-1;
        if(i==1){ // these 'if' statements are just about getting either 'bottle' or 'bottles' to appear correctly in the printed lyrics.
                bottle = " bottle";
            }else{
                bottle = " bottles";
            }
            if(x==1){
                bottle2 = " bottle";
            }else{
                bottle2 = " bottles";
            }
        document.getElementById("lyrics").innerHTML += ("</br>"+ i + bottle + " of beer on the wall, " + i + bottle +" of beer,</br> Take one down and pass it around, " + x + bottle2 + " of beer on the wall.");
    };
    document.getElementById("lyrics").innerHTML+=("</br>No more bottles of beer on the wall, no more bottles of beer,</br>Go to the store and buy some more, 99 bottles of beer on the wall.");
};