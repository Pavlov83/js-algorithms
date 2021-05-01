//recursive
// function findClosestValueBST(tree,target,closest){
    
//    if(tree === null)return closest;

//    if(Math.abs(target-closest) > Math.abs(target - tree.value)){
//        closest = tree.value;
//    }if(target < tree.value){
//        return findClosestValueBST(tree.left,target,closest)
//    }else if(target > target.value){
//        return findClosestValueBST(tree.right, target, closest)
//    }else{
//        return closest
//    }
// }

//iterative

function findClosestValueBST(tree,target){
    return findClosestValueBST(tree,target,Infinity)
}

function findClosestValueBST(tree,target,closest){
    let currentNode = tree;
    while(currentNode !== null){
        if(Math.abs(target - closest) > Math.abs(target -currentNode.val)){
            closest = currentNode.value;
        }else if(target > currentNode){
            currentNode = currentNode.right;
        }else{
            break
        }
    }
    return closest;
}