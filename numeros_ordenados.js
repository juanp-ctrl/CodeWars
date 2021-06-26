let str = "3 5 1 2 7 88 22 -2 232 -200";

function highAndLow(numbers){
    let Anumbers = numbers.split(" ")
    Anumbers.sort((a,b) => {return a-b});   //Le pasamos una función de comparación
                                            //si retorna negativo es por que es menor
                                            //si es positivo es mayor y 0 es igual
    return `${Anumbers[Anumbers.length-1]} ${Anumbers[0]}`;
}

highAndLow(str);