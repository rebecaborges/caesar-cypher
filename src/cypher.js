document.querySelector("#btn-encode").addEventListener("click", (event) => { eventButton(event)});
document.querySelector("#btn-decode").addEventListener("click", (event) => { eventButton(event)});

eventButton = (event) => {
  const str = document.querySelector("#text").value;
  const offset = parseInt(document.querySelector("#offset").value);

  if(event.target.value === "encode"){
    encode(str, offset);
  }else{
    decode(str, offset);
  };
};

encode = (str, offset) => {
  let ascii; 
  let outText ='';

  for (let i in str) {
    if(str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90){
      ascii = ((str.charCodeAt(i) -65 + offset)% 26) + 65;
      outText += String.fromCharCode(ascii);
    
    }else if(str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122){
      ascii = ((str.charCodeAt(i) -97 + offset)% 26) + 97;
      outText += String.fromCharCode(ascii);
    
    }else { ascii = str.charCodeAt(i);
      outText += String.fromCharCode(ascii);
    };
  };
  return printText(outText);
};

decode = (str, offset) => {
  let ascii;
  let outText= ""; 

  for (let i in str) {
    if(str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90){
      ascii = (str.charCodeAt(i) -65- (offset)% 26 + 26) % 26 + 65;
      outText += String.fromCharCode(ascii);

    }else if (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122){
      ascii = (str.charCodeAt(i) -97- (offset)% 26 + 26) % 26 + 97;
      outText += String.fromCharCode(ascii);

    }else { ascii = str.charCodeAt(i);
      outText += String.fromCharCode(ascii);
    };
  };
  return printText(outText);
};

printText = (outText) => {
  return document.querySelector("#textEncodeAndDecode").innerHTML= "Sua mensagem cifrada é: " + outText;
};

