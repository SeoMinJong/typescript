/**
 * Exclude Type
 * 유니언 타입에서 특정 타입을 제외하도록 함
 */

type NoString = Exclude<string|boolean|number, string>

type NoFunction = Exclude<string | (() => void) , Function>;