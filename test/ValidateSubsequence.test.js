const ValidateSubsequence = require('../src/ValidateSubsequence')

describe('ValidateSubsequence', () => {
	describe('isValidSubsequence', () =>  {
		it('1. should return true', () => {
			const inputArray = [5, 1, 22, 25, 6, -1, 8, 10];
			const inputSequence =  [1, 6, -1, 10];

			const actualResult = ValidateSubsequence.isValidSubsequence(inputArray, inputSequence)

			expect(actualResult).toBeTruthy()
		})

		it('2. should return true', () => {
			const inputArray = [5, 1, 22, 25, 6, -1, 8, 10];
			const inputSequence =  [5, 1, 22, 25, 6, -1, 8, 10];

			const actualResult = ValidateSubsequence.isValidSubsequence(inputArray, inputSequence)

			expect(actualResult).toBeTruthy()
		})

		it('3. should return true', () => {
			const inputArray = [5, 1, 22, 25, 6, -1, 8, 10];
			const inputSequence =  [5, 1, 22, 6, -1, 8, 10];

			const actualResult = ValidateSubsequence.isValidSubsequence(inputArray, inputSequence)

			expect(actualResult).toBeTruthy()
		})
	})
})