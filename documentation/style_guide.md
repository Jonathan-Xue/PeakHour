Refer to https://google.github.io/styleguide/jsguide.html

Every statement must be terminated with a semicolon. Relying on automatic semicolon insertion is forbidden.

The prime directive of line-wrapping is: prefer to break at a higher syntactic level.
Horizontal alignment is permitted, but it is generally discouraged by Google Style. 

Declare all local variables with either const or let. Use const by default, unless a variable needs to be reassigned. The var keyword must not be used.
Local variables are not habitually declared at the start of their containing block or block-like construct. Instead, local variables are declared close to the point they are first used (within reason), to minimize their scope.
Array literals may include the spread operator (...) to flatten elements out of one or more other iterables. The spread operator should be used instead of more awkward constructs with Array.prototype. There is no space after the ....

Example:

[...foo]   // preferred over Array.prototype.slice.call(foo)
[...foo, ...bar]   // preferred over foo.concat(bar)

Enumerations are defined by adding the @enum annotation to an object literal. Additional properties may not be added to an enum after it is defined. Enums must be constant, and all enum values must be deeply immutable.

Identifiers use only ASCII letters and digits, and, in a small number of cases noted below, underscores and very rarely (when required by frameworks like Angular) dollar signs.

Give as descriptive a name as possible, within reason. Do not worry about saving horizontal space as it is far more important to make your code immediately understandable by a new reader. Do not use abbreviations that are ambiguous or unfamiliar to readers outside your project, and do not abbreviate by deleting letters within a word.

Package names are all lowerCamelCase. Class, interface, record, and typedef names are written in UpperCamelCase. 
Method names are written in lowerCamelCase. Names for @private methods must end with a trailing underscore.

Method names are typically verbs or verb phrases. 
Enum names are written in UpperCamelCase, similar to classes, and should generally be singular nouns.
Constant names use CONSTANT_CASE: all uppercase letters, with words separated by underscores.

Non-constant field names (static or otherwise) are written in lowerCamelCase, with a trailing underscore for private fields. These names are typically nouns or noun phrases. For example, computedValues or index_.

Parameter names are written in lowerCamelCase. Note that this applies even if the parameter expects a constructor. One-character parameter names should not be used in public methods.

Local variable names are written in lowerCamelCase, except for module-local (top-level) constants, as described above. Constants in function scopes are still named in lowerCamelCase. Note that lowerCamelCase is used even if the variable holds a constructor
