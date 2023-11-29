//문자열 반복출력하기 
function solution1(my_string,n){
 const str = my_string;
 let answer = []
 for(let i = 0 ; i<str.length ;i++){
 answer[i] = str[i].repeat(n);
 }
 return answer.join("");
}

function solution(my_string,n){
  const test = [...my_string].map((val,idx)=>{
    return val.repeat(n)
  }).join("");


  return test;
}
solution("hello",3);


