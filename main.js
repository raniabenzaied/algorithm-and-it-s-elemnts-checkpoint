let str = 'hey my name is rania benzaied.';
let length = str.length;
console.log(length);

function countWords(str) {
    const arr = str.split(' ');

    return arr.filter(word => word !== '').length;
}
console.log(countWords(str));



function vowel_count(str) {
    var vowel_list = 'aeiouAEIOU';
    var vcount = 0;

    for (var x = 0; x < str.length; x++) {
        if (vowel_list.indexOf(str[x]) !== -1) {
            vcount += 1;
        }

    }
    return vcount;
}
console.log(vowel_count(str));