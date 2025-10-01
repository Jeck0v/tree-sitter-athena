; Athena DSL Highlighting

; Keywords
"DEPLOYMENT-ID" @keyword
"VERSION-ID" @keyword
"ENVIRONMENT SECTION" @keyword
"SERVICES SECTION" @keyword
"SERVICE" @keyword
(end_service) @keyword

; Properties
"IMAGE-ID" @property
"PORT-MAPPING" @property
"ENV-VARIABLE" @property
"COMMAND" @property
"DEPENDS-ON" @property
"HEALTH-CHECK" @property
"RESTART-POLICY" @property
"RESOURCE-LIMITS" @property
"VOLUME-MAPPING" @property
"NETWORK-NAME" @property

; Operators
"TO" @operator
"CPU" @operator
"MEMORY" @operator

; Constants
"always" @constant
"unless-stopped" @constant
"on-failure" @constant

; Literals
(template_var) @variable.special
(quoted_string) @string
(number) @number
(version) @number
(identifier) @variable
(comment) @comment
