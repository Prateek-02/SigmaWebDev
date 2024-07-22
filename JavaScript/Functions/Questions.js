// 1 (Count number of Vowels in the given string)


function countVowels(str){
    str = str.toLowerCase();
    let count = 0;
    for(const char of str){
        // console.log(char);
        if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' ){
            count++;
        }
    }
    console.log(`Numbes of vowels in the string are: ${count}`);
}

countVowels("ApnaCollege");



