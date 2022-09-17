class ValidateSubsequence {

  static isValidSubsequence(array, sequence) {
    // Time Complexcity = O(n) Linear time complexity.
    // Just need 1 loop to process and n based on length of array parameter
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