function tests1(){
    let testEncode = encode('abc',1)
    if (testEncode === 'bcd'){
        console.log('deu certo')
    }else{console.log('deu errado, o resultado foi: '+testEncode)
    }   
}

function tests2(){
    let testDecode = decode('bcd',1);
    if (testDecode === 'abc'){
        console.log('deu certo')
    }else{'deu errado, o resultado foi :'+testDecode
    }
}