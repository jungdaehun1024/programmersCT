//삼각형의 완성조건(1)
function solution(sides){
  const condition = sides.sort(compare);
  return condition[0]+condition[1] > condition[2] ? 1 : 2;
}

function compare(a,b){
  return a-b;
}



console.log(solution([3,2,1]));