module.exports = grammar({
  name: "athena",

  rules: {
    source_file: ($) => repeat($.line),

    line: ($) =>
      choice(
        $.deployment_directive,
        $.version_directive,
        $.section_directive,
        $.service_directive,
        $.service_property,
        $.end_service,
        $.comment,
        $.empty_line,
      ),

    deployment_directive: ($) => seq("DEPLOYMENT-ID", $.identifier),
    version_directive: ($) => seq("VERSION-ID", $.version),
    section_directive: ($) => choice("ENVIRONMENT SECTION", "SERVICES SECTION"),
    service_directive: ($) => seq("SERVICE", $.identifier),
    end_service: ($) => seq("END", "SERVICE"),

    service_property: ($) =>
      choice(
        seq("IMAGE-ID", $.value),
        seq("PORT-MAPPING", $.port_mapping),
        seq("ENV-VARIABLE", $.template_var),
        seq("COMMAND", $.quoted_string),
        seq("DEPENDS-ON", $.identifier),
        seq("HEALTH-CHECK", $.quoted_string),
        seq("RESTART-POLICY", $.restart_policy),
        seq(
          "RESOURCE-LIMITS",
          "CPU",
          $.quoted_string,
          "MEMORY",
          $.quoted_string,
        ),
        seq("VOLUME-MAPPING", $.quoted_string, "TO", $.quoted_string),
        seq("NETWORK-NAME", $.identifier),
      ),

    port_mapping: ($) => seq($.number, "TO", $.number),
    template_var: ($) => /\{\{[A-Z_][A-Z0-9_]*\}\}/,
    quoted_string: ($) => /"[^"]*"/,
    restart_policy: ($) => choice("always", "unless-stopped", "on-failure"),
    identifier: ($) => /[a-zA-Z_][a-zA-Z0-9_-]*/,
    version: ($) => /\d+\.\d+\.\d+/,
    number: ($) => /\d+/,
    value: ($) => /[^\s]+/,
    comment: ($) => /\/\/.*/,
    empty_line: ($) => /\s*/,
  },
});
