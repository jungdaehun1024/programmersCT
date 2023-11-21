//양꼬치
function solution1(n,k){
  const condition = Math.floor(n/10);

 return (condition >= 1)? (12000*n)+(2000*(k-condition)) : (12000*n) +(2000*k);
}



function solution2(n,k){
  let sum = 0 ;
  const condition = Math.floor(n/10);

  //양꼬치를 10개 아래로 주문 시 단순 계산
  if(condition <= 0){
    return  sum = (12000*n) +(2000*k);

  //양꼬치 10개 이상 주문시 할인
  }else if (condition >= 1 ){
    return  sum = (12000*n)+(2000*(k-condition));
   }
}