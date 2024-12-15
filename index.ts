// function to add numbers on string separated by any delimiter and throwing exception for all  negative numbers

function add(numbers:string){
    let sum:number=0;
   let char:string="";
   let negativeElements:number[]=[];
   for(let i=0;i<numbers.length;i++){
       char=char+numbers[i];
       const finalElement=parseInt(char)
       if(!isNaN(finalElement) ){
           if(!isNaN(parseInt(numbers[i+1]))){
               continue;
           }
           if(finalElement>0){
           sum=sum+finalElement;
           }else{
               negativeElements.push(finalElement)
           }
       }
           if(char!=="-"){
                       char="";
           }
   }
   if(negativeElements.length>0){
       throw(`negative numbers not allowed ${negativeElements.join(",")}`)
               return; 
   }else{
       return sum;
   }
   
}


const result=add("1\n2,3");

console.log(result,"resultresult")