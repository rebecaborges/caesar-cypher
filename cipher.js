function buttonEncode(){
    let str = document.getElementById('text1').value
    let offPosition = parseInt(document.getElementById('desloc').value)
    let outEncode = encode(str,offPosition)
    document.getElementById('textCifra').innerHTML= outEncode

}

function buttonDecode(){
    let str = document.getElementById('text1').value
    let offPosition = document.getElementById('desloc').value
    let outDecode = decode(str,offPosition)
    document.getElementById('textDescifra').innerHTML= outDecode
}

function encode (str,offPosition){
    let ascii;
    let outText ='';

    for (let i=0; i < str.length; i++){
        if(str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90){
        ascii = ((str.charCodeAt(i) -65 + offPosition)% 26)+65;
        outText += String.fromCharCode(ascii)
        
        }else if(str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122){
        ascii = ((str.charCodeAt(i) -97 + offPosition)% 26)+97;
        outText += String.fromCharCode(ascii)
        
        }else { ascii =str.charCodeAt(i)
        outText += String.fromCharCode(ascii)
        }

    }return outText;

}

function decode(str,offPosition){
    let ascii;
    let outText= "";
  
    for(i=0; i<str.length; i++){
        if(str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90){
        ascii = ((str.charCodeAt(i) -65-(offPosition%26)+26)%26)+65;
        outText += String.fromCharCode(ascii)
  
        }else if (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122){
        ascii = ((str.charCodeAt(i) -97-(offPosition%26)+26)%26)+97;
        outText += String.fromCharCode(ascii)

        }else {ascii = str.charCodeAt(i)
        outText += String.fromCharCode(ascii) 
        }    
    }return outText

}