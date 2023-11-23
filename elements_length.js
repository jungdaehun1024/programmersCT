//배열 원소의 길이
function solution1(strlist){
  const idx = strlist.length;
  let arr = []
  for(let i = 0 ; i<idx ; i++){
    arr[i] = strlist[i].length
  }
  
  return arr;
}





function solution(strlist){
 const arr = strlist.map((cur_val)=>{
  return cur_val.length;
 })

 return arr;
}


console.log(solution(["I", "Love", "Programmers."]));