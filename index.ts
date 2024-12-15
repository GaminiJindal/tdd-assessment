function add(numbers:string){
    let sum=0;
   let char="";
   for(let i=0;i<numbers.length;i++){
       char=char+numbers[i];
       const number=parseInt(char)
       if(!isNaN(number) ){
           if(number>0){
           if(!isNaN(parseInt(numbers[i+1]))){
               continue;
           }else{
           sum=sum+number;
           }  
           }else{
               throw(`negative numbers not allowed ${number}`)
               return;
           }
           
       }
       char="";

   }
   return sum;
}


const result=add("-1,5");

console.log(result,"resultresult")