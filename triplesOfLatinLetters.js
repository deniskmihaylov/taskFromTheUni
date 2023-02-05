function solve (number) {

    for (let i = 0; i < number; i++) {
        for (let j = 0; j < number; j++){
            for (let k = 0; k < number; k++) {
                let char1 = String.fromCharCode('a'.charCodeAt(0) + i)
                let char2 = String.fromCharCode('a'.charCodeAt(0) + j)
                let char3 = String.fromCharCode('a'.charCodeAt(0) + k)
                console.log(`${char1}${char2}${char3}`);
            }
        }
    }
}
solve(2)