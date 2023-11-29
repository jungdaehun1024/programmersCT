//모음 제거 
function solution(my_string){

 const arr_char = [...my_string].filter((cur_val)=>{
  return cur_val !== 'a' && cur_val !=='e' && cur_val !=='i' &&cur_val !=='o' && cur_val !=='u'
 })

  return arr_char.join("");
}

solution("bus")




function solution(my_string) {
    return my_string.replace(/[aeiou]/g, '');
}
