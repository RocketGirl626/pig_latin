describe('pigLatin', function() {
  it("adds ay to the end of words that start with a vowel", function() {
    expect(pigLatin("apple")).to.equal("apple-ay");
  });

  it("removes consonants from beginning of word and concats to end of word with ay", function() {
    expect(pigLatin("school")).to.equal("ool-schay");
  });

  it("if there is a qu in the first and second letter positions it will remove u with the q", function() {
    expect(pigLatin("quiet")).to.equal("iet-quay");
  });

  it("if there is a qu in the second and third letter positions it will remove u with the q", function() {
    expect(pigLatin("squirrel")).to.equal("irrel-squay");
  });

  it("if there is a y in the first letter position treat it as a consonant", function() {
    expect(pigLatin("Yolanda")).to.equal("olanda-Yay");
  });


  // INTERIM UNIT TESTING FOR WORDS STARTING WITH CONSONANTS (all passing)
  // it("finds up to three consonants at the beginning of a word", function() {
  //   expect(pigLatin("school")).to.equal("sch");
  // });
  //

  // it("removes the leading consonants from the word", function() {
  //   expect(pigLatin("jinx")).to.equal("inx");
  // });



});
