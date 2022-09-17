class ValidateSubsequence {

  static isValidSubsequence(array, sequence) {
  	let indexSequence = 0
    for(let index = 0; index  < array.length; index++) {
      if(array[index] === sequence[indexSequence]) {
        indexSequence++
      }
      if(indexSequence === sequence.length) {
        return true
      }
    }
    return false
  }
}
module.exports = ValidateSubsequence;