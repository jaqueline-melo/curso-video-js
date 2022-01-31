function fatorial(n) {
    let fator = 1
    for (let c = n; c > 1; c--) {
        fator *= c
        
    }
    return fator
}
console.log(fatorial(5));

//5!=5x4x3x2x1=120
