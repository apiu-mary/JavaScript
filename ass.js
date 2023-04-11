function string(){
    let food = "eating"
    let food2=food.split(" ").reverse()
    console.log(food2)
    
}

// Write a function that takes in the following array and consoles the target if it is found else
// null
// let num = [2,8,0,23,5,45,76]
function binarysearch(arr,target){
    let leftIndex=0;
    let rightIndex=arr.length-1;
    while(leftIndex<rightIndex){
        let middle=((leftIndex+rightIndex)/2)
        if(arr[middle]===target){
            return middle;
        }
        else if (arr[middle]<target){
            leftIndex=middle+1;
        }
        else{
            rightIndex=middle-1;
        }
        return null
            

        

    
        

    }
}
let num = [2,8,0,23,5,45,76];
let target= 23
console.log(binarysearch(num,target))
// Given years between 2000 and 2023, console all the leap years in the following
// sentence, i.e “2020 is a leap year” if not console log i.e “2001 is not a leap year”
// Given a range of numbers from 0 to 100, console”Fizz” if the numbers are divisible by 3,
// “Buzz” if the numbers are divisible by 5, and “FizzBuzz” if divisible by both 3 and 5.
// Write a function that takes in an array of numbers and returns an array that has all
// elements multiplied by 4.
// let numArray = [12,87,45,75,23,64,73]
function mulptiplication(arr1){
     arr1.forEach(element => {
        console.log(element*4)
        
        
     });
     
     
    

 }
  let arr= [12,87,45,75,23,64,73]
 console.log(mulptiplication,arr)
//  Write a function that takes in an array of strings and returns an array with every element
// turned into a number
// let nums = [“10”,”24”,”45”,”56”,”67”]
