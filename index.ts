
function add(numbers:string){
    let sum:number=0;
   let char:string="";
   for(let i=0;i<numbers.length;i++){
       char=char+numbers[i];
       const finalElement=parseInt(char)
       if(!isNaN(finalElement) ){
           if(finalElement>0){
           if(!isNaN(parseInt(numbers[i+1]))){
               continue;
           }else{
           sum=sum+finalElement;
           }  
           }else{
               throw(`negative numbers not allowed ${finalElement}`)
               return;
           }
       }
           if(char!=="-"){
            char="";
           }

   }
   return sum;
}


const result=add("//;\n1;2");

console.log(result,"resultresult")