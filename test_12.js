QUnit.test("Test the between function.", function (assert) {
          var str1 = "/0243gj"
          var result = between(str1, "/", "g");
          assert.deepEqual(result, "0243", "We expect result to be 0243");
          var result = between(str1, "/");
          assert.deepEqual(result, "0243gj", "We expect result to be 0243gj");
});
QUnit.test("Test the getAreaCode function.", function (assert) {
          var str1 = '(415) 555-7512';
          var result = getAreaCode(str1);
          assert.deepEqual(result, "415", "We expect result to be 415");
});
QUnit.test("Test the getCOCode function.", function (assert) {
          var str1 = '(415) 555-7512';
          var result = getCOCode(str1);
          assert.deepEqual(result, "555", "We expect result to be 555");
});
QUnit.test("Test the getLineCode function.", function (assert) {
          var str1 = '(415) 555-7512';
          var result = getLineCode(str1);
          assert.deepEqual(result, "7512", "We expect result to be 7512");
});
QUnit.test( "Errors thrown for getAreaCode", function( assert ) {
    assert.throws( function() {
        getAreaCode("415) 555-7512");
    }, "Missing '('. An error should have been thrown." );

    assert.throws( function() {
        getAreaCode("(415 555-7512");
    }, "Missing ')'. An error should have been thrown." );
    assert.throws( function() {
        getAreaCode("(41555) 555-7512");
    }, "Invalid area code: 41555. An error should have been thrown." );
    assert.throws( function() {
        getAreaCode("(4j5) 555-7512");
    }, "Invalid area code: 4j5. An error should have been thrown." );
});
QUnit.test( "Errors thrown for getCOCode", function( assert ) {
    assert.throws( function() {
        getCOCode("(415)555-7512");
    }, "Missing ' '. An error should have been thrown." );

    assert.throws( function() {
        getCOCode("(415) 5557512");
    }, "Missing '-'. An error should have been thrown." );
    assert.throws( function() {
        getCOCode("(415) 55-7512");
    }, "Invalid CO code: 55. An error should have been thrown." );
    assert.throws( function() {
        getCOCode("(415) 5g5-7512");
    }, "Invalid CO code: 5g5. An error should have been thrown." );
});
QUnit.test( "Errors thrown for getLineCode", function( assert ) {
    assert.throws( function() {
        getLineCode("(415) 5557512");
    }, "Missing '-'. An error should have been thrown." );
    assert.throws( function() {
        getLineCode("(415) 555-71512");
    }, "Invalid line code: 71512. An error should have been thrown." );
    assert.throws( function() {
        getLineCode("(415) 555-7r12");
    }, "Invalid line code: 7r12. An error should have been thrown." );

});
