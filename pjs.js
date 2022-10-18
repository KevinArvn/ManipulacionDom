const form = document.getElementById('form');
const input1 = document.getElementById('calculo1');
const input2 = document.getElementById('calculo2');
const btn = document.getElementById('btn');
const pResult = document.getElementById('result');


            form.addEventListener('submit', sumaInputValues);
                console.log("hola");

                function  sumaInputValues(event){
                    console.log({event});
                    event.preventDefault();
                    const sumaInputs = input1.value + input2.value;
                    pResult.innerText= "Result: " + sumaInputs;
               

                } 
                
               