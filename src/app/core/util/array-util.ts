export const  removeDuplicatesFromSimpleObjects = <X>(arr: X[], discriminators: Array<keyof X>) => arr.filter((v1, i, arr) => arr.findIndex((v2) => discriminators.every(k => v2[k] === v1[k])) === i) // O(n^2 * k)
// ComplexObjects when Angular join with TS 4.1 https://stackoverflow.com/questions/58434389/typescript-deep-keyof-of-a-nested-object
