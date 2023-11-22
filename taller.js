//머쓱이보다 키 큰 사람
function solution1(arr,height){
  const new_arr = [...arr,height].sort(compare);
  const idx = new_arr.length-1;
  let my_idx = 0 ;
  for(let i = 0 ; i <= idx; i ++){
    if(new_arr[i] === height){
      console.log(i,height);
      my_idx = i;
    }
  }
  

  return idx-my_idx;
}

function compare(a,b) {
  return a-b;
}


function solution(arr,height){
  const items  = arr.filter((cur_value)=>{
    return cur_value>height;
  })

 return items.length;
}



console.log(solution([149, 180, 192, 170],167));