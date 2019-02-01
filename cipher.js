function buttonEncode(){
    let str = document.getElementById('text1').value
    let offPosition = parseInt(document.getElementById('desloc').value)
    let outEncode = encode(str,offPosition)
    document.getElementById('textCifra').innerHTML= 'Sua mensagem cifrada é: '+outEncode;
    
}

function buttonDecode(){
    let str = document.getElementById('text1').value
    let offPosition = parseInt(document.getElementById('desloc').value)
    let outDecode = decode(str,offPosition)
    document.getElementById('textDescifra').innerHTML= 'Sua mensagem decifrada é: '+outDecode
}

function encode (str,offPosition){
    let ascii; // guarda a formula de deslocamento
    let outText =''; // guarda a posição da string com deslocamento, uma ao lado da outra, formando uma string completa

    for (let i=0; i < str.length; i++){
        if(str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90){
        ascii = ((str.charCodeAt(i) -65 + offPosition)%26)+65;
        outText += String.fromCharCode(ascii) //pega a posição da string e concatena com a soma do deslocamento
        
        }else if(str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122){
        ascii = ((str.charCodeAt(i) -97 + offPosition)%26)+97;
        outText += String.fromCharCode(ascii)
        
        }else { ascii =str.charCodeAt(i)
        outText += String.fromCharCode(ascii)
        }

    }return outText;

}

function decode(str,offPosition){
    let ascii; // guarda a formula de deslocamento
    let outText= ""; 
  
    for(i=0; i<str.length; i++){
        if(str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90){
        ascii = (str.charCodeAt(i) -65- (offPosition)%26)+65;
        outText += String.fromCharCode(ascii)
  
        }else if (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122){
        ascii = (str.charCodeAt(i) -97- (offPosition)%26)+97;
        outText += String.fromCharCode(ascii)

        }else {ascii = str.charCodeAt(i)
        outText += String.fromCharCode(ascii) 
        }    
    }return outText

} 
