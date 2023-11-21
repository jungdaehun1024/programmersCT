//각도기 

//angle(각을 인자로 받고) 
//filter를 사용해서  angle이 현재 요소(x)보다 크거나 같은 구간의 개수를 반환한다.

function solution1(angle) {
    return [0, 90, 91, 180].filter(x => angle>=x).length;
}
console.log(solution1(180));



//각도기 ver_2
const solution2 = angle =>{
  if((angle>0)&&(angle<90)){
    return 1;
  }else if(angle === 90){
    return 2;
  }else if((angle>90)&&(angle<180)){
    return 3;
  }else if(angle===180){
    return 4;
  }
}