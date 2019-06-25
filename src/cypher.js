  
document.querySelector("#btn-encode").addEventListener("click", (str) => { encode(str)});
document.querySelector("#btn-decode").addEventListener("click", (str) => { decode(str)});

encode = () => {
  const str = document.querySelector("#text").value;
  const inputValue = parseInt(document.querySelector("#inputValue").value);
  let ascii; 
  let outText ='';

  for (let i in str) {
    if(str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90){
      ascii = ((str.charCodeAt(i) -65 + inputValue)% 26) + 65;
      outText += String.fromCharCode(ascii)
    
    }else if(str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122){
      ascii = ((str.charCodeAt(i) -97 + inputValue)% 26) + 97;
      outText += String.fromCharCode(ascii)
    
    }else { ascii =str.charCodeAt(i)
      outText += String.fromCharCode(ascii)
    }
  }
  return printText(outText);
}

decode = () => {
  const str = document.querySelector("#text").value;
  const inputValue = parseInt(document.querySelector("#inputValue").value);
  let ascii;
  let outText= ""; 

  for (let i in str) {
    if(str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90){
      ascii = (str.charCodeAt(i) -65- (inputValue)% 26 + 26) % 26 + 65;
      outText += String.fromCharCode(ascii)

    }else if (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122){
      ascii = (str.charCodeAt(i) -97- (inputValue)% 26 + 26) % 26 + 97;
      outText += String.fromCharCode(ascii)

    }else { ascii =str.charCodeAt(i)
      outText += String.fromCharCode(ascii) 
    }
  }
  return printText(outText);
}

printText = (outText) => {
  return document.querySelector('#textEncodeAndDecode').innerHTML= 'Sua mensagem cifrada é: '+ outText;
}