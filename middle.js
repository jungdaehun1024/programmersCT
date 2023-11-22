//중앙값 구하기 
function solution(numbers){
  const arr = numbers.sort(compare);
  const idx = arr.length;
  const mid = Math.floor(idx / 2);

  return arr[mid];


  
}

//오름차순정렬
function compare(a,b){
  return a-b;
}

//중앙값 
console.log(solution([9, -1, 0]));
