describe('pigLatin', function() {
  it("adds ay to the end of words that start with a vowel", function() {
    expect(pigLatin("apple")).to.equal("apple-ay");
  });

    it("removes consonants from beginning of word and concats to end of word with ay", function() {
      expect(pigLatin("school")).to.equal("ool-schay");
    })

  // INTERIM UNIT TESTING FOR WORDS STARTING WITH CONSONANTS
  // it("finds up to three consonants at the beginning of a word", function() {
  //   expect(pigLatin("school")).to.equal("sch");
  // });
  //

  // it("removes the leading consonants from the word", function() {
  //   expect(pigLatin("jinx")).to.equal("inx");
  // });



});
