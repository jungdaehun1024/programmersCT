//아이스 아메리카노
function solution(money){
 const price = 5500;
 const count = Math.floor(money/price);
 const rest = money - (count*price);
 return [count,rest];
}


console.log(solution(15000));
