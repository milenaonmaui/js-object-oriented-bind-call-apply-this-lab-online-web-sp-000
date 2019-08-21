//Your code here
function justInvoke(fn) {
  return fn()
}

const write = function(){
  console.log('Write something');
  return true;
}

console.log(justInvoke(write))