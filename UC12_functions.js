/**
 * Removes part of string between two sub strings
 * @param {string} text The original string
 * @param {string} start The starting string
 * @param {string} end The ending string
 * @return {string} The string in between
 * @throws (Error} If start or end not found
 */
function between(string, start, end) {
          var startAt = string.indexOf(start);
          console.log(startAt)
          if (startAt == -1) {
                    throw new Error("No start found: " + start);
          }
          startAt += start.length;
          var endAt = string.indexOf(end, startAt);
          if (end == undefined) {
                    endAt = string.length;
          }
          if (endAt == -1) {
                    throw new Error("No end found: " + end);
          }
          return string.slice(startAt, endAt);
}
/**
 * Returns an line code from a phone number
 * @param   {string} phoneNum The phone number
 * @returns {string} The line code
 */
function displayOutput(inputId, outputId) {
          document.getElementById(outputId).innerHTML = "";
          displayAreaCode(inputId, outputId);
          displayCOCode(inputId, outputId);
          displayLineCode(inputId, outputId);
}
/**
 * This takes the inputed numbers to varify if the AreaCode is valend or needs an error message
 * @throws {Error} If AreaCode is invalded the error.message appear
 * @param   {string} phoneNum The inputed phone number
 * @returns {string} Returning either the AreaCode line or an error message
 */
function getAreaCode(phoneNum) {
          var areaCode;
          try {
                    areaCode = between(phoneNum, "(", ")");
                    areaCode = areaCode.trim();
                    if (areaCode.length == 3 && Number(areaCode)) {
                              return areaCode;
                    }
                    else {
                              throw new Error("Invalid area code: " + areaCode);
                    }
          }
          catch (error) {
                    throw new Error("Invalid phone number: " + error.message);
          }
}
/**
 * This takes the inputed numbers to varify if the CoCode is valend or needs an error message
 * @throws {Error} If CoCode is invalded the error.message appear
 * @param   {string} phoneNum The inputed phone number
 * @returns {string} Returning either the CoCode line or an error message
 */
function getCOCode(phoneNum) {
          var COCode;
          try {
                    COCode = between(phoneNum, " ", "-");
                    COCode = COCode.trim();
                    if (COCode.length == 3 && Number(COCode)) {
                              return COCode;
                    }
                    else {
                              throw new Error("Invalid CO code: " + COCode);
                    }
          }
          catch (error) {
                    throw new Error("Invalid phone number: " + error.message);
          }
}
/**
 * This takes the inputed numbers to varify if the lineCode is valid or needs an error message
 * @throws {Error} If LineCode is invalded the error.message appear
 * @param   {string} phoneNum The inputed phone number
 * @returns {string} Returning either the LineCode line or an error message
 */
function getLineCode(phoneNum) {
          var lineCode;
          try {
                    lineCode = between(phoneNum, "-");
                    lineCode = lineCode.trim();
                    if (lineCode.length == 4 && Number(lineCode)) {
                              return lineCode;
                    }
                    else {
                              throw new Error("Invalid line code: " + lineCode);
                    }
          }
          catch (error) {
                    throw new Error("Invalid phone number: " + error.message);
          }
}
/**
 * Displays either the AreaCode or the error message depending on the input numbers
 * @param {string} inputId  The input numbers from the text box
 * @param {string} outputId Results from the input
 */
function displayAreaCode(inputId, outputId) {
          var outputText = "";
          var phoneNum = document.getElementById(inputId).value;
          // Now try to get the code
          try {
                    var areaCode = getAreaCode(phoneNum);
                    outputText = "Your area code is " + areaCode;
          }
          catch (error) {
                    console.log(error.message);
                    outputText = error.message;
          }
          document.getElementById(outputId).innerHTML += "</br>" + outputText;
}
/**
 * Displays either the CoCode or the error message depending on the input numbers
 * @param {string} inputId  The input numbers from the text box
 * @param {string} outputId Results from the input
 */
function displayCOCode(inputId, outputId) {
          var outputText = "";
          var phoneNum = document.getElementById(inputId).value;
          // Now try to get the code
          try {
                    var COCode = getCOCode(phoneNum);
                    outputText = "Your CO code is " + COCode;
          }
          catch (error) {
                    console.log(error.message);
                    outputText = error.message;
          }
          document.getElementById(outputId).innerHTML += "</br>" + outputText;
}
/**
 * Displays either the LineCode or the error message depending on the input numbers
 * @param {string} inputId  The input numbers from the text box
 * @param {string} outputId Results from the input
 */
function displayLineCode(inputId, outputId) {
          var outputText = "";
          var phoneNum = document.getElementById(inputId).value;
          // Now try to get the code
          try {
                    var lineCode = getLineCode(phoneNum);
                    outputText = "Your line code is " + lineCode;
          }
          catch (error) {
                    console.log(error.message);
                    outputText = error.message;
          }
          document.getElementById(outputId).innerHTML += "</br>" + outputText;
}
