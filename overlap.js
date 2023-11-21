//중복된 숫자 개수
function solution1(array,n){
  let result = 0;
 for(element of array){
   if(element === n){
    result++;
   }
 }

   return result;
}

function solution2(array,n){
  let count = 0;
  array.filter((curr_val)=>{
    if(curr_val === n){
      count++;
    }
  })
  return count;
}


solution2([0,4,4,2,3,4],4);