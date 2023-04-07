///longest word creator


///This program takes all the letters
//of two string inputs
//and creates the longest possible string
//where each letter is different from the previous one


//the two inputs
const s1 = "helloaaasdsd";
const s2 = "worlfdawwwwwsed";

const array=(s1+s2).split('').sort(); //concat strings, turn into array, and sorting 

//console.log(array)

//finding the unique letters that the strings contain
const uniqueLetters=[...new Set(array.join(''))]
//console.log(uniqueLetters)


//variable to get the initial occurences of each unique letter 
let occurences=0;

//array that will store the data [letter,occurencesLeft]
const letterPairs=[]; 

//getting the occureneces
for(let i=0;i<uniqueLetters.length;i++){
    const currentLetter=uniqueLetters[i];
    occurences=array.filter(letter=>letter==currentLetter).length;
    letterPairs.push([currentLetter,occurences]);
};

//console.log(letterPairs);

//the array that will store our final result
const finalArray=[];

//variable used to find the letter with the remaining most occurences 
let highestOccurence=0;
let loop=true;
let failed=false;


while(loop){
    
    ///find the letter with the highest occurences
if(!failed){
    for(let i=0;i<letterPairs.length;i++){
        if(letterPairs[i][1]>highestOccurence){
            highestOccurence=letterPairs[i][1];
        };
    };
};





for(let i=0;i<letterPairs.length;i++){
    
  
    //letter has the highest occurence  
    if(letterPairs[i][1]==highestOccurence&&highestOccurence!=0){
        
        //the letter is not the same as the previous one added
        if(letterPairs[i][0]!=finalArray[finalArray.length-1]){
            finalArray.push(letterPairs[i][0]);
            letterPairs[i][1]=letterPairs[i][1]-1
            highestOccurence=0;
            failed=false;
            break;
        };
        //in case there is no letter with same number of occurences
    };
    if(highestOccurence==0){
        loop=false
    };
    
    //if nothing of the above happens, mark it as if at the current highest occurence
    //there is only the number that we previously added so that  
    failed=true;
    
};

//highest occurence gets reset to 0 when number was added successfully
if(highestOccurence!=0){highestOccurence=highestOccurence-1;};
    
};

console.log(finalArray);
console.log(letterPairs);

console.log(finalArray.join(''));
