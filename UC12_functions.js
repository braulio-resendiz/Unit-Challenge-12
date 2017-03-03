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
 * Returns an area code from a phone number
 * @param   {string} phoneNum The phone number
 * @returns {string} The area code
 */
function getAreaCode(phoneNum) {
          var areaCode;
          try {
                    areaCode = between(phoneNum, "(", ")");
          }
          catch (error) {
                    console.log(error.message);
                    return undefined;
          }
          return areaCode
}

function getCOCode(phoneNum) {
          var COCode;
          try {
                    COCode = between(phoneNum, " ", "-");
          }
          catch (error) {
                    console.log(error.message);
                    return undefined;
          }
          return COCode
}

function getLineCode(phoneNum) {
          var LineCode;
          try {
                    LineCode = between(phoneNum, "(", ")");
          }
          catch (error) {
                    console.log(error.message);
                    return undefined;
          }
          return LineCode
}

function displayOutput(a, b) {
          displayAreaCode(a, b);
          displayCOCode(a, b);
          displayLineCode(a, b);
}

function displayAreaCode(inputId, outputId) {
          var input = "'" + document.getElementById(inputId).value + "'";
          console.log(input)
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

function displayCOCode(inputId, outputId) {
          var input = "'" + document.getElementById(inputId).value + "'";
          console.log(input)
          var outputText = "";
          if (getCOCode(input) != undefined) {
                    outputText = "The CO Code is " + getCOCode(input) + ".";
                    document.getElementById(outputId).style.color = "blue";
          }
          else if (getCOCode(input) == undefined) {
                    outputText = "Error";
                    document.getElementById(outputId).style.color = "blue";
          }
          document.getElementById(outputId).innerHTML = outputText;
}

function displayLineCode(inputId, outputId) {
          var input = "'" + document.getElementById(inputId).value + "'";
          console.log(input)
          var outputText = "";
          if (getLineCode(input) != undefined) {
                    outputText = "The Line Code is " + getLineCode(input) + ".";
                    document.getElementById(outputId).style.color = "blue";
          }
          else if (getLineCode(input) == undefined) {
                    outputText = "Error";
                    document.getElementById(outputId).style.color = "blue";
          }
          document.getElementById(outputId).innerHTML = outputText;
}

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
          document.getElementById(outputId).innerHTML = outputText;
}
