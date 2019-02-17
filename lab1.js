//Name: Eshwar Vasudevan CWID: 10432312

// 1.Sum of the squares in an array
const questionOne = function questionOne(arr) 
{
    return Math.pow(arr[0],2) + Math.pow(arr[1],2) + Math.pow(arr[2],2);
    
}

// 2.Generating the fibonacci series 
const questionTwo = function questionTwo(num)
{
   let arr=[0,1];
   for(let i=2;i<num+1;i++)
   {
       arr.push(arr[i-2]+arr[i-1]);
   }
   return arr[num];
}

// 3.function that prints out the number of vowels in a string 
const questionThree = function questionThree(text) 
{
    
const vowels= ["a","e","i","o","u"]


    v_counter=0;
    for(let letters of text.toLowerCase())
    {
        if(vowels.includes(letters))
        {
            v_counter++;
        }
    }
return v_counter;
}

// 4.funtion to return the factorial of a given number 

const questionFour = function questionFour(num) 
{
    if(num<0)
    console.log("Please enter a positive number or zero");

    else if(num==1)
    return 1;

    else 
    {
        return (num* questionFour(num-1));
    }
    questionFour(5);
    
}

module.exports={


questionOne,questionTwo,questionThree,questionFour
};



