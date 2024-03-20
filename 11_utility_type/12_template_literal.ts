/**
 * Template Literal 
 */

type Code = 'string Number'

// Uppercase
type CodeUpper = Uppercase<Code>;

// Lowercase
type CodeLower = Lowercase<CodeUpper>;

// Capitalize
type CodeCaptialize = Capitalize<Code>;

// Uncapitalize
type CodeUncapitalize = Uncapitalize<CodeCaptialize>;
