import { ERROR_MESSAGE } from '../../src/constants';

describe('racing car', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  context('자동차 이름 입력', () => {
    it('자동차의 이름이 다섯 글자가 넘어가면 alert창과 함께 에러메세지를 호출한다.', () => {
      const alertStub = cy.stub();
      cy.on('window:alert', alertStub);

      cy.get('[data-cy="car-name-input"]').type('park sil');
      cy.get('[data-cy="car-name-button"]')
        .click()
        .then(() => {
          expect(alertStub.getCall(0)).to.be.calledWith(
            ERROR_MESSAGE.INVALID_NAME_LENGTH,
          );
        });

      cy.get('[data-cy="car-name-input"]')
        .clear()
        .type('foo, bar, baz, park sil');
      cy.get('[data-cy="car-name-button"]')
        .click()
        .then(() => {
          expect(alertStub.getCall(0)).to.be.calledWith(
            ERROR_MESSAGE.INVALID_NAME_LENGTH,
          );
        });
    });

    it('자동차의 이름이 비어있으면, alert창과 함께 에러메세지를 호출한다.', () => {
      const alertStub = cy.stub();
      cy.on('window:alert', alertStub);
      cy.get('[data-cy="car-name-button"]')
        .click()
        .then(() => {
          expect(alertStub.getCall(0)).to.be.calledWith(
            ERROR_MESSAGE.INVALID_NAME_LENGTH,
          );
        });

      cy.get('[data-cy="car-name-input"]').type('foo, bar, baz, ,');
      cy.get('[data-cy="car-name-button"]')
        .click()
        .then(() => {
          expect(alertStub.getCall(0)).to.be.calledWith(
            ERROR_MESSAGE.INVALID_NAME_LENGTH,
          );
        });
    });

    it('자동차 이름을 정상적으로 입력하면 시도할 횟수를 입력하는 입력창을 볼 수 있다.', () => {
      cy.get('[data-cy="car-name-input"]').type('foo, bar, baz');
      cy.get('[data-cy="car-name-button"]')
        .click()
        .then(() => {
          cy.get('#movement-count-field').should('to.be.visible');
        });
    });
  });
});
