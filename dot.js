//점 위치 구하기

function solution1(array){
const quadrant= array;
console.log(quadrant)
if(quadrant[0]>0 && quadrant[1]>0)return 1;

if(quadrant[0]<0 && quadrant[1]>0)return 2;

if(quadrant[0]<0 && quadrant[1]<0)return 3;

if(quadrant[0]>0 && quadrant[1]<0)return 4;
}


console.log(solution1([2,4]));



function solution2(array){
  const [num1,num2]= array;
  //T,F값이 할당
  const check = num1 * num2 >0;
  return num1 >0 ? (check ? 1 : 4) : (check ? 3 : 2);
}


console.log(solution2([2,4]));