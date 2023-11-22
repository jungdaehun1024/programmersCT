//최대값 만들기(1)
function solution(numbers){
 const arr = numbers.sort(compare);
 console.log(arr);
 const idx = arr.length;
 const max_val = arr[idx -1] * arr[idx - 2];
   return max_val;
}

function compare(a,b){
  return a-b;
}
