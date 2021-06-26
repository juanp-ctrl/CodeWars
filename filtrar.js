
let arr = [1, 2, 'b'];

function filter_list(l){
    
    let numeros = l.filter( elemento => {
        return typeof(elemento) !== typeof('a');
    })
    return numeros;
}

let arr2 = filter_list(arr);
arr2;