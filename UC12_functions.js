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
          if (startAt == -1) {
                    throw new Error("No start found: " + start);
          }
          startAt += start.length;
          var endAt = string.indexOf(end, startAt);
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
}

function displayCheckVALID_PHONE(inputId, outputId) {
          var input = document.getElementById(inputId).value;
          var outputText = "";
          if (VALID_PHONE(input) == true) {
                    outputText = "The number " + input + " is a valid Phone number.";
                    document.getElementById(outputId).style.color = "blue";
          }
          else {
                    outputText = "The number " + input + " is not a valid phone number.";
                    document.getElementById(outputId).style.color = "blue";
          }
          document.getElementById(outputId).innerHTML = outputText;
}

function phonenumchk(num) {
          var sum = 0;
          for (var i = 0; i < num.length; i++) {
                    if (i != 3) {
                              sum += parseInt(num[i]);
                    }
                    else {
                              i++
                    }
          }
          return sum;
}

function hyphenchk(num) {
          return num[3]
}

function fivfivfivchk(num) {
          if (num[0] == "5" && num[1] == "5" && num[2] == "5") {
                    return false
          }
          return true
}

function VALID_PHONE(num) {
          if (phonenumchk(num) > 0 && fivfivfivchk(num) && num.length == 8 && hyphenchk(num) == "-") {
                    return true;
          }
          return false;
}

function changeElementClass(id, className) {
          var el = document.getElementById(id);
          el.className = className;
}
