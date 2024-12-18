const { expect } = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
  let bigEyedBrother;

  beforeEach(() => {
    if (!bigEyedBrother) {
      bigEyedBrother = sinon.spy(console);
    }
  });

  afterEach(() => {
    bigEyedBrother.log.resetHistory();
  });

  it('sendPaymentRequestToApi(100, 20) logs "The total is: 120" to the console', () => {
    sendPaymentRequestToApi(100, 20);
    expect(bigEyedBrother.log.calledWith('The total is: 120')).to.be.true;
    expect(bigEyedBrother.log.calledOnce).to.be.true;
  });

  it('sendPaymentRequestToApi(10, 10) logs "The total is: 20" to the console', () => {
    sendPaymentRequestToApi(10, 10);
    expect(bigEyedBrother.log.calledWith('The total is: 20')).to.be.true;
    expect(bigEyedBrother.log.calledOnce).to.be.true;
  });
});
