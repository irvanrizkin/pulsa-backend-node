const chai = require('chai');
const chaiHttp = require('chai-http');
require('dotenv').config();

const { expect } = chai;

chai.use(chaiHttp);

const ChaiReq = chai.request(process.env.BASE_URL);

describe('/ endpoint', () => {
  it('should return status code 200', (done) => {
    ChaiReq
      .get('/')
      .end((_, res) => {
        expect(res.status).to.equal(200);
      });
    done();
  });
});
