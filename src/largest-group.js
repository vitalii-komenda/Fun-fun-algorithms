// Find largest group of connected items
// example [[1, 2], [2, 3], [4, 5]]
// should return [1, 2], [2, 3] as the largest group of connected items

function largestGroup(itemAssociation) {
    let globalSize = 0;
    let biggestRoot;
    
    // O(n)
    const root = (Arr, i) => {
        while(Arr[ i ] != i){
            i = Arr[ i ];
        }
        return i;
    }
    // O(A) + O(B) = O(A+B)
    const union = (Arr, size, A, B) => {
        const root_A = root(Arr, A);
        const root_B = root(Arr, B);
        if(size[root_A] < size[root_B]) {
            Arr[ root_A ] = Arr[root_B];
            size[root_B] += size[root_A];
            
            if (globalSize < size[root_B]) {
                globalSize = size[root_B];
                biggestRoot = root_B;
            }
        }
        else {
            Arr[ root_B ] = Arr[root_A];
            size[root_A] += size[root_B];
            
            if (globalSize < size[root_A]) { 
                globalSize = size[root_A];
                biggestRoot = root_A;
            }
            
            return root_A;
        }
    }
    const find = (Arr, A, B) => {
        if( root(Arr, A) === root(Arr, B) ) return true;
        else return false;
    }
        
    const groups = {};
    const size = {};
    // O(n)
    for(let i=0; i<itemAssociation.length; i++) {
        const group = itemAssociation[i];
        
        groups[group[0]] = group[0];
        groups[group[1]] = group[1];
        
        size[ group[0] ] = 1;
        size[ group[1] ] = 1;
    }
    
    // O(n) * O(n) = O(n^2)
    for(let i=0; i<itemAssociation.length; i++) {
        const group = itemAssociation[i];
        
        // O(n)
        union(groups, size, group[0], group[1]);
    }
    
    const ans = [];
    
    for(let g in groups) {
        if (find(groups, g, biggestRoot)) {
            ans.push(g);
        }
    }
    
    return ans;
};


console.log(
  largestGroup([
    ['a', 'b'],
    ['b', 'c'],
    
    ['d', 'e'], 
    ['e', 'n'], 
    ['n', 'r'], 
  ])
)









