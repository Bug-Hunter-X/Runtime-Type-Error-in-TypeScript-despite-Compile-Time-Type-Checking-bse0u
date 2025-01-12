# Runtime Type Error in TypeScript

This repository demonstrates a scenario where a runtime type error occurs in TypeScript despite successful compilation.  The error is subtle and highlights the limitations of TypeScript's type system in handling certain runtime situations.

## The Problem
The `combineArrays` function is designed to combine two number arrays. However, the code passes an array `arr2` containing a string, leading to a runtime type error. TypeScript's compile-time type checking doesn't catch this because the type inference focuses on the structure (array of numbers) rather than runtime values.

## Solution
The solution involves stricter type checking using runtime type guards or additional validation to ensure all elements are numbers before combining the arrays. See `bugSolution.ts` for a solution.