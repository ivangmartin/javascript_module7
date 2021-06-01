//caso 1

const pattern = /^[A-Z]{2}\d{22}$/;

const iban = "ES6600190020961234567890";

console.log(iban);
iban.match(pattern) ? console.log("IBAN correcto") : console.log("IBAN no valido");

//caso 2
console.log("****************");

 const pattern2 = /^[A-Z]{2}\d{2}(\s?\d{4}){5}$/;

const iban2 = ['ES6600190020961234567890', 'ES66 0019 0020 9612 3456 7890'];
var salida="";
for(var aux= 0; aux<iban2.length; aux++){
    salida += iban2[aux];
        iban2[aux].match(pattern2) ? salida += " --- IBAN correcto\n" : salida += " --- IBAN no valido\n";
}
console.log(salida);

//caso3
console.log("****************");

 const pattern3 = /^[A-Z]{2}\d{2}/;

// usamos el iban inicial para esta caso ---> const iban = "ES6600190020961234567890";

console.log(iban.match(pattern3)[0]);

///*************** MATRICULAS **************/
//caso 1
console.log("****************");

const pattern4 = /(^\d{4})((\s?)|(\-))([A-Z]{3}$)/;

const MATRICULAS = ['2221 GMD', '2345-GMD', '4532BDB', '0320-AAA'];
salida="";
for(aux= 0; aux<MATRICULAS.length; aux++){
    salida += MATRICULAS[aux];
        MATRICULAS[aux].match(pattern4) ? salida += " --- Matricula correcta\n" : salida += " --- Matricula no valida\n";
}
console.log(salida);

//caso 2
console.log("****************");
salida="";
const pattern5 = /^\d{4}/;
const pattern6 = /[A-Z]{3}$/;
for(aux= 0; aux<MATRICULAS.length; aux++){
    if(MATRICULAS[aux].match(pattern4)){
        salida += MATRICULAS[aux] + " -- Numeros: " + MATRICULAS[aux].match(pattern5) + " -- Letras " + MATRICULAS[aux].match(pattern6) +"\n";
    }
}

console.log(salida);

// ********** EXTRAER IMAGENES ***********
//CASO 1
console.log("*****************");
const pattern7 = /(^<img.*)(\ssrc=".*")/g;
const texto1=`<img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"/>`;

var str = texto1.match(pattern7)[0];
var sub = str.slice(str.indexOf("src=")+5, -1);

console.log(sub);

//CASO 2
console.log("*****************");

const pattern8 = /((<img)(\s*|\n*|t*)(src=".*"))/g;

var texto=`<html>
  <body>
    <img
      src="https://image.freepik.com/iconos-gratis/github-circular_318-10610.jpg"
    />
    <h1>ejemplo</h1>
    <img
      src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
    />
  </body>
</html>
`;

str = texto.match(pattern8);

str.forEach(element => {
    sub = element.slice(element.indexOf("src=")+5, -1);
    console.log(sub);
});

//*********** TARJETA CREDITO. VALIDAR *********/

const pattern9 = /^(5[0-5]\d{2})((\s?|-?)\d{4}){3}$/;

var validateCard = () => {
var num = document.getElementById("card").value;

document.getElementById("result").innerText = num.match(pattern9) ? "Tarjeta Válida" : "Tarjeta NO Válida";


for(var i=0;i<4;i++){
    if(num.length == 19){
        console.log(i);

        console.log(num.slice(i*5,i*5 + 4));
    }else if(num.length === 16){
        console.log(num.slice(i*4,i*4 + 4));
    }
}

}

document.getElementById("button").addEventListener("click",validateCard);


