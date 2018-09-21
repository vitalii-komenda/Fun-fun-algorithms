/*
Given two strings, base and remove, return a version of the base string where all instances of the remove string have been removed (not case sensitive). You may assume that the remove string is length 1 or more. Remove only non-overlapping instances, so with "xxx" removing "xx" leaves "x".

withoutString("Hello there", "llo") → "He there"
withoutString("Hello there", "e") → "Hllo thr"
withoutString("Hello there", "x") → "Hello there"

*/

const del = (base, from, len) => {
	while(len > 0) {
		base[from--] = null;
		len--;
    }
	return base;
};

export const withoutString = (base, remove) => {
	let rI = 0;
	for(let i=0; i<base.length; i++) {
		if (base[i] === remove[rI]){
			while(base[i] === remove[rI] && remove[rI]) {
				i++;
				rI++;
            }
			if (base[i-1] === remove[rI-1] && remove.length === rI) {
				del(base, i-1, remove.length);
            }
            rI = 0;
		}
	}

	return base.join('');
}
