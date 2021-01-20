

function subsets(arr) {
  // base case 
  if (!arr.length) return [[]];
  const last = arr[arr.length - 1];

  // recursive call, get the subsets for the array which is one element smaller
  const subs = subsets(arr.slice(0, arr.length - 1));

  // for each subset in the previous set, push on the element we initially removed
  // then concat this new set with the set from the recursive call 
  return subs.concat(subs.map((el) => {
    let newArr = el.slice(0);
    newArr.push(last);
    return newArr;
  }));
}
