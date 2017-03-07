QUnit.test("Test the between function.", function (assert) {
          var str1 = "/0243gj"
          var result = between(str1, "/", "g");
          assert.deepEqual(result, "0243", "We expect result to be 0243");
          var result = between(str1, "/");
          assert.deepEqual(result, "0243gj", "We expect result to be 0243gj");
});
QUnit.test("Test the displayOutput function.", function (assert) {
          document.getElementById('input').innerHTML = "456";
          document.getElementById('output').innerHTML = "456";
          displayOutput('input', 'output');
          assert.equal(document.getElementById("output").innerHTML, "", "Passed - Expected ");
});
QUnit.test("Test the getAreaCode function.", function (assert) {
          var str1 = '(415) 457-7512';
          var result = getAreaCode(str1);
          assert.deepEqual(result, "415", "We expect result to be 415");
});
QUnit.test("Test the getCOCode function.", function (assert) {
          var str1 = '(415) 457-7512';
          var result = getCOCode(str1);
          assert.deepEqual(result, "457", "We expect result to be 457");
});
QUnit.test("Test the getLineCode function.", function (assert) {
          var str1 = '(415) 457-7512';
          var result = getLineCode(str1);
          assert.deepEqual(result, "7512", "We expect result to be 7512");
});
QUnit.test("Test the displayAreaCode function.", function (assert) {
          addDigit("3");
          squareButton();
          assert.equal(currentInputdisp, "(3)^2", "Passed - (3)^2");
          assert.equal(currentInputreal, "square(3)", "Passed - square(3)");
          currentInputdisp = '';
          currentInputreal = '';
});
QUnit.test("Test the displayCOCode function.", function (assert) {
          addDigit("3");
          squareButton();
          assert.equal(currentInputdisp, "(3)^2", "Passed - (3)^2");
          assert.equal(currentInputreal, "square(3)", "Passed - square(3)");
          currentInputdisp = '';
          currentInputreal = '';
});
QUnit.test("Test the displayLineCode function.", function (assert) {
          addDigit("3");
          squareButton();
          assert.equal(currentInputdisp, "(3)^2", "Passed - (3)^2");
          assert.equal(currentInputreal, "square(3)", "Passed - square(3)");
          currentInputdisp = '';
          currentInputreal = '';
});
