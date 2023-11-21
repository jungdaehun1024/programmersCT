//배열의 유사도
function solution1  (s1,s2){
 let count = 0;
 for(element of s2){
  if(s1.includes(element)){
    count++;
  }
}
 return count;
}


function solution2(s1,s2){
 const result =s1.filter((curr_val, curr_idx,array)=>{
  return s2.includes(curr_val);
 })

 return result.length;
}




solution2(["a", "b", "c"],["com", "b", "d", "p", "c"]);
