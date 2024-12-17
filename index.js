// function to add numbers on string separated by any delimiter and throwing exception for all  negative numbers

function add(numbers){
    //sum variable is in which sum gets stored
    let sum=0;
    //char variable is for each character in string numbers
   let char="";
    //negativeElements is an array in which all -ve elements gets pushed

   let negativeElements=[];
   for(let i=0;i<numbers.length;i++){
        //char is having 6 initially and adding 7 into it to make it 67 so that it can be added as 67 rather than 6 and 7 separately
       char=char+numbers[i];
    //finalElement converts char string type into integer

       const finalElement=parseInt(char);
       //This is to skip delimiter
       if(!isNaN(finalElement) ){
        //If next element is number then skip to add like for 67 skip 6 so that it can be added as 67 rather than 6 and 7 separately
           if(!isNaN(parseInt(numbers[i+1]))){
               continue;
           }
           //If element is a positive number then add it up else push it to array that contain all negative numbers
           if(finalElement>0){
           sum=sum+finalElement;
           }else{
               negativeElements.push(finalElement)
           }
       }
       // Other than -ve char for any other empyty the char variable and when it skipped for 67 the char would contain whole 67 as well as for -ve like -1 
           if(char!=="-"){
                       char="";
           }
   }
   // If -ve elements array length is there then throw exception else return sum
   if(negativeElements.length>0){
       throw(`negative numbers not allowed ${negativeElements.join(",")}`)
               return; 
   }else{
    // return sum if no error
       return sum;
   }
   
}

// function called and return value is in result
const result=add("1\n2,3");

console.log(result,"resultresult")