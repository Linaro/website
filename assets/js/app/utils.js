/**
 * Check the size of the viewport.
 */
function checkSize() {
  // Set some variables to use with the if checks below
  var mediaQueryXs = checkIfBlock(".viewport-check .d-block");
  var mediaQuerySm = checkIfBlock(".viewport-check .d-sm-block");
  var mediaQueryMd = checkIfBlock(".viewport-check .d-md-block");
  var mediaQueryLg = checkIfBlock(".viewport-check .d-lg-block");
  var mediaQueryXl = checkIfBlock(".viewport-check .d-xl-block");
  return {
    xs: mediaQueryXs,
    sm: mediaQuerySm,
    md: mediaQueryMd,
    lg: mediaQueryLg,
    xl: mediaQueryXl,
  };
}

/**
 * Checks if an element's display CSS property is set to block.
 * @param {Element} target The target element to check if display is block.
 * @returns
 */
function checkIfBlock(target) {
  var target = $(target).css("display") == "block";
  return target;
}
