// 1) Write a JavaScript Function to Reverse a String.
function ReverseString(string)
{
    let reverseString = '';
    for(let i= string.length -1; i>=0; i--)
    {
        reverseString += string[i]
    }
    return reverseString;
}
console.log(ReverseString("Hi this is Alaa"));


// 2) Write a JavaScript Function to check whether a String is Palindrome or not.
function checkPalindrome(string)
{
    for (let i = 0; i<string.length / 2; i++)
    {
        if(string[i].toLowerCase() !== string[string.length - 1 - i].toLowerCase())
        {
            return `${string} is not a palindrome`;
        }
    }
    return `${string} is a palindrome`;
}
console.log(checkPalindrome("Mon"))


// 3) Write a JavaScript Function to calculate the number of Vowels & Consonants in a
// String.
function calcVowelsConsonants(string)
{
    const vowels = 'aeiou';
    let vowelsCounter = 0
    let consonantsCounter = 0
    string = string.replace(/\s/g, '');

    for (let char of string.toLowerCase())
    {
        if (vowels.includes(char))
        vowelsCounter++;
        else
        consonantsCounter++;
    }
    return `Vowels Number is : ${vowelsCounter}
Consonants Number is : ${consonantsCounter}`
}
console.log(calcVowelsConsonants("Alaa Munshit"))


// 4) Write a JavaScript Function to find the common Elements in an Array.
function CommonElements(array1,array2)
{
    let array3=[];

    for (let i=0; i<array1.length; i++)
    {
        for (let j=0; j<array2.length; j++)
        {
            if (array1[i] === array2[j])
            {
                array3.push(array1[i]);
            }
        }
        array3=[...new Set(array3)];
    }
    return `Common elements are ${array3}`
}
console.log(CommonElements([10,20,30,40,50],[20,20,30,60,70,90]))


// 5) Write a JavaScript Function to check if a String is an Anagram of another String or
// not.
function checkAnagram(str1, str2)
{
    if (str1.length !== str2.length)
    {
        return false;
    }
    var str1new = str1
    str1new = str1new.split('').sort().join('');

    var str2new = str2;
    str2new = str2new.split('').sort().join('');

    if(str1new === str2new)
    return true;
}
console.log(checkAnagram('abc' , 'bca'));