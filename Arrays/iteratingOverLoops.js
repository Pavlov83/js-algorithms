/* In JS we can use five different control structures for iterations,
the most customizable is the 'for' loop.If the number of iterations cannot be determined,
we can use while or do while.For objects we can use for in and for of loops to iterate over
keys or values',to get both we can loop over entries().We can break out of the loop at anytime.
with break statement or skip to the next one while using the continuse statement.
Native array methods used to iterate over items are indexOf,lastIndexOf,includes,fill,join
We can use callback functions to the findIndex,find,filter,forEach,map,some,every,reduce.
*/

class Obj{
    constructor(Obj){
        this.obj = new Object(obj);
    }

    indexOf(searchElement,fromIndex = 0){
        for(let i = 0; i < this.obj.length;i++){
            if(this.obj[i] === searchElement) return i;
        }return -1
    }

    lastIndexOf(searchElement,fromIndex = this.obj.length -1){
            for(let i = fromIndex; i>= 0; i--){
                if(this.obj[i] === searchElement) return i;
            }
    }

    includes(searchElement, fromIndex = 0){
        let i = fromIndex;
        while(i < this.obj.length){
            if(this.obj[i++] === searchElement) return true;
        }
        return false;
    }

    fill(value,start = 0,end = this.obj.length -1){
        let i = start;
        do(this.obj[i++] = value)
        while(i<=end);
        return this.obj;
    }

    join(separator = ","){
        let str="";
        let i = 0;
        for(const value of this.obj){
            i++;
            str += value +(i < this.obj.length ? separator : "")
        }
        return str;
    }

    //findIndex

    //find

    //filter

    //forEach

    //map

    //some

    //every

    //reduce
}

