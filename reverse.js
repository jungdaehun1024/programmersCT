//벼열 뒤집기 

function solution1(num_list){
   const idx = num_list.length-1;
   const new_arr = [];
   for(let i = 0 ; i <=idx ; i++){
   new_arr.push(num_list[idx-i]);
  
   }


   return new_arr
}

console.log(solution1([1, 2, 3, 4, 5]));


function solution2(num_list) {
    return num_list.reverse()
}