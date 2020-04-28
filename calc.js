function calc(option){
  expression=document.getElementById('exp').value.trim().split('');
console.log(expression)
operand=[];
operator=[];
ex=[];
solve=[]
function isOperator(op){
  if((op=='+')||(op=='-')||(op=='/')||(op=='*'))
  {
    return true
  }
  else
 
  return false
}

function Precedence(op){
         if((op=='+')||(op=='-')){
           return 1;
         }
         else
         if((op=='*')||(op=='/')){
           return 2;
         }
         else
         return 0;
         
         
}
expression.forEach(ele=>{
if(isOperator(ele)){
 if(operator.length==0){
   operator.push(ele)
 }
 else
 if(operator.length!=0){
   if(Precedence(ele)>=Precedence(operator[operator.length-1])){
     operator.push(ele)
   }
   else
   {
     pop=operator.pop()
     operator.push(ele)
     ex.push(pop)
   }
 }
}
else
{
  ex.push(ele)
}
})
operator=operator.reverse();
operator.forEach(op=>{
  
  ex.push(op)
})

ex.forEach(ele=>{
 number=parseInt(ele)
  if(Number.isInteger(number)){
    
  solve.push(ele)
   
  }
  else
  if(isOperator(ele)){
  
    firstno=parseFloat(solve[solve.length-1]);
    secondno=parseFloat(solve[solve.length-2]);
 

  ans=eval(secondno +ele+ firstno)
  solve.push(ans) 

  index=solve.findIndex(no=>{
    no==ele
  })
  index=index-2
  solve.splice(index,2)

  }

})
console.log(solve)
solve=solve[0]
if(solve.isFinite)
document.getElementById('Result').innerText=solve
else
document.getElementById('Result').innerText=0

}