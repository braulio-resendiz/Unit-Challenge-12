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
                    endAt = string.length - 1;
          }
          if (endAt == -1) {
                    throw new Error("No end found: " + end);
          }
          return string.slice(startAt, endAt);
}
/**
 * Returns an area code from a phone number
 * @param   {string} phoneNum The phone number
 * @returns {string} The area code
 */
function getCOCode(phoneNum) {
          var COCode;
          try {
                    COCode = between(phoneNum, " ", "-");
          }
          catch (error) {
                    COCode = undefined;
          }
          return COCode
}

/**
 * Returns an line code from a phone number
 * @param   {string} phoneNum The phone number
 * @returns {string} The line code
 */
function getLineCode(phoneNum) {
          var LineCode;
          try {
                    LineCode = between(phoneNum, "-");
          }
          catch (error) {
                    LineCode = undefined;
          }
          return LineCode
}

/**
 * [[Description]]
 * @param {string} a [[Description]]
 * @param {string} b [[Description]]
 */
function displayOutput(a, b) {
          displayAreaCode(a, b);
          displayCOCode(a, b);
          displayLineCode(a, b);
}

/**
 * [[Description]]
 * @param {string} inputId  [[Description]]
 * @param {string} outputId [[Description]]
 */
function displayAreaCode(inputId, outputId) {
          document.getElementById(outputId).innerHTML = "";
          var input = "'" + document.getElementById(inputId).value + "'";
          var outputText = "";
          if (getAreaCode(input) != undefined) {
                    outputText = "The Area Code is " + getAreaCode(input) + ".";
                    document.getElementById(outputId).style.color = "blue";
          }
          else if (getAreaCode(input) == undefined) {
                    outputText = "Error";
                    document.getElementById(outputId).style.color = "blue";
          }
          document.getElementById(outputId).innerHTML = outputText;
}

/**
 * [[Description]]
 * @param {string} inputId  [[Description]]
 * @param {string} outputId [[Description]]
 */
function displayCOCode(inputId, outputId) {
          var input = "'" + document.getElementById(inputId).value + "'";
          var outputText = "";
          if (getCOCode(input) != undefined) {
                    outputText = "The CO Code is " + getCOCode(input) + ".";
                    document.getElementById(outputId).style.color = "blue";
          }
          else if (getCOCode(input) == undefined) {
                    outputText = "Error";
                    document.getElementById(outputId).style.color = "blue";
          }
          document.getElementById(outputId).innerHTML += "</br>" + outputText;
}

/**
 * [[Description]]
 * @param {string} inputId  [[Description]]
 * @param {string} outputId [[Description]]
 */
function displayLineCode(inputId, outputId) {
          var input = "'" + document.getElementById(inputId).value + "'";
          var outputText = "";
          if (getLineCode(input) != undefined) {
                    outputText = "The Line Code is " + getLineCode(input) + ".";
                    document.getElementById(outputId).style.color = "blue";
          }
          else if (getLineCode(input) == undefined) {
                    outputText = "Error";
                    document.getElementById(outputId).style.color = "blue";
          }
          document.getElementById(outputId).innerHTML += "</br>" + outputText;
}

/**
 * [[Description]]
 * @throws {Error} [[Description]]
 * @param   {string} phoneNum [[Description]]
 * @returns {string} [[Description]]
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
 * [[Description]]
 * @throws {Error} [[Description]]
 * @param   {string} phoneNum [[Description]]
 * @returns {string} [[Description]]
 */
function getCOCode(phoneNum) {
          var COCode;
          try {
                    COCode = between(phoneNum, " ", "-");
                    areaCode = areaCode.trim();
                    if (COCode.length == 3 && Number(COCode)) {
                              return areaCode;
                    }
                    else {
                              throw new Error("Invalid CO code: " + areaCode);
                    }
          }
          catch (error) {
                    throw new Error("Invalid phone number: " + error.message);
          }
}

/**
 * [[Description]]
 * @throws {Error} [[Description]]
 * @param   {string} phoneNum [[Description]]
 * @returns {string} [[Description]]
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
 * [[Description]]
 * @param {string} inputId  [[Description]]
 * @param {string} outputId [[Description]]
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
