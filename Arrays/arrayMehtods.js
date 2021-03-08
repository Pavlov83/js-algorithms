/* The cleanest algorithm usually takes advantage of standart objects inherent in the
language itself.The most important in computer science are arrays.Arrаy methods
 worth remembering are sort,reverse,slice,splice.Array elements are zero based.*/

const items = ['item_1','item_2','item_3'];

 class Arr{
     constructor(...items){
         this.arr = new Array(...items);
     }

     sort(compareFunction){
         return this.arr.sort(compareFunction);
     }

     reverse(){
         return this.arr.reverse();
     }

     slice(start,end){
         return this.arr.reverse();
     }

     splice(start, ...params){

        return this.arr.splice(start, ...params);
     }
     
}     

