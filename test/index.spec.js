let chai = require('chai');
let expect = chai.expect;
let validator = require('../index');

describe('Validator Cards lib', () => {
  describe('Validator Card', () => {
    it("numero do cartão válido", () => {
      expect(validator.cardValidator('4539983237489397')).to.equal(true);
    });
    it('numero do cartão com menos de 14 dígitos', () => {
      expect(validator.cardValidator('145872')).to.equal(false);
    });
    it('número do cartão com dígitos não numéricos', () => {
      expect(validator.cardValidator('453998323748939a')).to.equal(false);
    });
    it('número do cartão com mais de 16 dígitos', () => {
      expect(validator.cardValidator('45399832374893977')).to.equal(false);
    });
    it('número do cartão sem dígitos', () => {
      expect(validator.cardValidator('')).to.equal(false);
    });
    it('número do cartão com dígitos iguais', () => {
      expect(validator.cardValidator('00000000000000000')).to.equal(false);
    });
    it('número do cartão com dígitos iguais', () => {
      expect(validator.cardValidator('5555555555555555')).to.equal(false);
    });
  });
});