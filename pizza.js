//피자 나눠먹기 (1)
function solution1(n){
  const human = n;// 사람 수 
  const rests = human % 7; // 사람 수를 피자조각으로 나눈 값 
 if(rests === 0 ){ // 나머지가 없으면 
    return Math.floor(human/7);  // 몫 => 피자 판수
  }else if (rests !==0 ){ // 나머지가 있으면 
    return(Math.floor((human /7) + 1));  // 몫+1 => 피자 판수
  }
  }


function solution(n){
  return Math.ceil(n/7);
}

console.log(solution(12));