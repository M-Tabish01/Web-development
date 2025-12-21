let arr = [1,5,6,2,3,2,5,3,8,]

function doubleconsecutive(arr){
    if(arr.length===0) return [];

    let result = [];
    let prev = null;
    
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === prev){
            result.push(arr[i])
        }else{
            result.push(arr[i]*2)
        }
        prev = arr[i]
    }
    return result;
}

doubleconsecutive(arr)