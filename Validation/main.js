function validate(){
    let valid=true;
    let name=document.getElementById("name").value;
    let even=document.getElementById("count").value;
    let id=document.getElementById("AlienId").value;
    let HumanPhrase=document.getElementById("Phrase").value;
    let date=document.getElementById("future").value;
    const today=new Date();
    today.setDate(today.getDate() + 1);
    const tomorrow = today.toISOString().split('T')[0];
    document.getElementById("future").setAttribute("min", tomorrow);


    document.getElementById("nameerror").style.display="none";
    document.getElementById("counterror").style.display="none";
    document.getElementById("iderror").style.display="none";
    document.getElementById("Phraseerror").style.display="none";
    document.getElementById("dateerror").style.display="none";
    
    if(name===""){
         document.getElementById("nameerror").style.display="inline";
         valid=false;
    }else{
        let planetname=/^(?=.*[aeiouAEIOU])(?=.*\d).+$/;
        if(!planetname.test(name)){
            document.getElementById("nameerror").innerHTML="**Planet is name must contain one vowel and one digit required**";
            // document.getElementById("nameerror").style.display="inline";
        }
    }
    if(even===""){
        document.getElementById("counterror").innerHTML="Antenna counts must be even";
        document.getElementById("counterror").style.display="inline";
        valid=false;
    }
    else{
        let evenCount=/^\d{2}(\d{2})*$/;
        if(!evenCount.test(even)){
            document.getElementById("counterror").innerHTML= "**Enter even counts of digits only**";
            document.getElementById("counterror").style.display="inline";
            valid=false;

        }
    }
    if(id===""){
        document.getElementById("iderror").style.display="inline";
        valid=false;
    }
    else{
        let alienid=/^(?=.*[a-zA-Z])(?=.*\d)[A-za-z@#$%_]+$/;
        if(!alienid.test(id)){
            document.getElementById("iderror").innerHTML="**Enter Alien id using mixed chars**";
            document.getElementById("iderror").style.display="inline";
        }
    }
    if(HumanPhrase===""){
        document.getElementById("Phraseerror").innerHTML="**Enter favourite HumanPhrase**";
        document.getElementById("Phraseerror").style.display="inline";
        valid=false;
    }
    else{
        let emoji=/^(?=.*[\p{P}\p{Emoji}]).+$/u;
        if(!emoji.test(HumanPhrase)){
            document.getElementById("Phraseerror").style.display="inline";
            document.getElementById("Phraseerror").innerHTML="Enter a valid HumanPhrase**";
            valid=false;
        }
    }
    if(date===""){
        document.getElementById("dateerror").style.display="inline";
        valid=false;
    }
    return valid;
}