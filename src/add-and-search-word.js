/*
Example of usage

addWord("bad")
addWord("dad")
addWord("mad")
search("pad") -> false
search("bad") -> true
search(".ad") -> true
search("b..") -> true

More details at https://leetcode.com/explore/learn/card/trie/148/practical-application-i/1052/
*/


const node = (isWord, val) => {
    return {isWord: isWord, val: val, children: {}};
};

/**
 * Initialize your data structure here.
 */
const WordDictionary = function() {
    this.root = node(false);
};

/**
 * Adds a word into the data structure. 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    let root = this.root;

    for (let i=0; i<word.length; i++) {
        if (root.children[word[i]]) {
            if (i === word.length-1) {
                root.children[word[i]].isWord = true;
            } else {
                root = root.children[word[i]];
            }
        } else {            
            root.children[word[i]] = node(i === word.length-1);
            root = root.children[word[i]];
        }
    }
};

/**
 * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter. 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word, root = this.root) {
    const startFrom = []

    for (let i=0; i<word.length; i++) {
        if (word[i] === '.') {
            for(const children in root.children) {                
                if (this.search(word.slice(i+1), root.children[children])) {
                    return true;
                }
            }
            return false;
        } else if (root.children && root.children[word[i]]) {
            root = root.children[word[i]]
        } else {
            return false
        }
    }
    
    return root.isWord;
};
