function tests1(x,y){
  let testEncode = encode(x,y)
  if (testEncode === 'bcd'){
      console.log('deu certo')
  }else {
    console.log('deu errado, o resultado foi: '+ testEncode)
  }
  return testEncode
  
}console.log(tests1('abc',1))
console.log(tests1('defsQ3',2))

function tests2(x,y){
  let testDecode = decode(x,y);
  if (testDecode === 'abc'){
      console.log('deu certo')
  }else {console.log ('deu errado, o resultado foi :'+ testDecode)
  }return testDecode

}console.log(tests2('bcd',1))
console.log(tests2('ghk4i',-2))