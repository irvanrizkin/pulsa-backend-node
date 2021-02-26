const chai = require('chai');
const chaiHttp = require('chai-http');
require('dotenv').config();

const { expect } = chai;

chai.use(chaiHttp);

const ChaiReq = chai.request(process.env.BASE_URL);

describe('/transaction endpoint', () => {
  const phone = '081234567890';
  const name = 'Amane';
  const operator = 'XL';
  const nominal = 50000;

  it('should return status code 200', (done) => {
    ChaiReq
      .post('/transaction/add')
      .set('Content-Type', 'application/json')
      .send({
        phone,
        name,
        operator,
        nominal,
      })
      .end((_, res) => {
        expect(res.status).to.equal(200);
      });
    done();
  });

  it('should have data property', (done) => {
    ChaiReq
      .post('/transaction/add')
      .set('Content-Type', 'application/json')
      .send({
        phone,
        name,
        operator,
        nominal,
      })
      .end((_, res) => {
        expect(res.body).to.have.property('data');
      });
    done();
  });

  it('should have data property with same data sent before', (done) => {
    ChaiReq
      .post('/transaction/add')
      .set('Content-Type', 'application/json')
      .send({
        phone,
        name,
        operator,
        nominal,
      })
      .end((_, res) => {
        expect(res.body.data.phone).to.equal(phone);
        expect(res.body.data.name).to.equal(name);
        expect(res.body.data.operator).to.equal(operator);
        expect(res.body.data.nominal).to.equal(nominal);
      });
    done();
  });
});
