const stepPermutation = (permutationsOfAllCharsExceptLast, lastChar, j) => {
    let permutation = [];
    permutation = permutation.concat(permutationsOfAllCharsExceptLast.slice(0, j))
    permutation = permutation.concat(lastChar);
    permutation = permutation.concat(permutationsOfAllCharsExceptLast.slice(j))
    
    return permutation;
};

const permute = function(arr) {
    if (arr.length < 0) return ;
    if (arr.length === 1) return [arr];

    const lastChar = arr.slice(arr.length-1);
    const allExceptLastChar = arr.slice(0, arr.length-1);
    const permutationsOfAllCharsExceptLast = permute(allExceptLastChar);

    const permutations = [];
    for (let i=0; i<permutationsOfAllCharsExceptLast.length; i++) {
        for(let j=0; j<=allExceptLastChar.length; j++) {            
            permutations.push(
                stepPermutation(permutationsOfAllCharsExceptLast[i], lastChar, j)
            )
        }
    }

    return permutations;
};

export default permute;
