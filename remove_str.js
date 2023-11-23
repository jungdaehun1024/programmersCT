// //특정문자 제거하기

function solution(my_string,letter){
   const str = my_string.split(letter).join('');

   return str;
}
console.log(solution("BCBdbe","B"));








