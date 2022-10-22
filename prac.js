
//
//  Class Object construction
//
class valueClass  {
  constructor(
    value1,
    value2
  ) {
    this.value1 = value1
    this.value2 = value2
  }

  // Class function
   sum(){
    console.log(this.value1 + this.value2)
   }

   multi(){
    console.log(this.value1 * this.value2)
   }

}

// 
//  Object Constructor function.
//

// function myFunc {
//   value1,
//   value2

//   {this.value1 = value1
//     this.value2 = value2
//   }

//   this.sum = function {
//     console.log(this.value1 + this.value2)
//   }
//   this.multi = function {
//     console.log(this.value1 * this.value2)
//   }
// }

const buttonObj = 
{}

function addProp() {
  buttonObj.new = 10;
  console.log(buttonObj)
}

function removeProp(){
  delete buttonObj.new;
  console.log(removeProp)
}

$.ajax ({
    url: 'https://api.github.com/ayas3/firstRepo',
    success: function(response) {
    console.log(response)
    }
})