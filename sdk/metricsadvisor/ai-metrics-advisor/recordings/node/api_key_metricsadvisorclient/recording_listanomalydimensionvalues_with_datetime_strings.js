let nock = require('nock');

module.exports.hash = "100d49946ff5cc61cc6db4eadf46eb8a";

module.exports.testInfo = {"uniqueName":{},"newDate":{}}

nock('https://endpoint:443', {"encodedQueryParams":true})
  .post('/metricsadvisor/v1.0/enrichment/anomalyDetection/configurations/26ece682-80a6-4415-89a2-05903dd9a640/anomalies/dimension/query', {"startTime":"2020-01-05T00:00:00.000Z","endTime":"2020-11-05T00:00:00.000Z","dimensionName":"city"})
  .reply(200, {"value":["__SUM__","Karachi","Los Angeles","Delhi","Manila","Seoul","Mumbai","Beijing","New York","Miami","Mexico City","Tianjin","Philadelphia","Osaka","Moscow","Santiago","Istanbul","Taipei","Madrid","Kolkata","Rio de Janeiro","Shenzhen","Belo Horizonte","Jakarta","Lahore","Dallas","Wuhan","Cairo","Hyderabad","Lima","Dhaka","Bogota","Shanghai","Paris","Bangkok","Houston","Buenos Aires","Kinshasa","London","Chennai","Bengaluru","Lagos","Tokyo","Sao Paulo","Chicago","Hong Kong","Chongqing","Guangzhou","Tehran","Boston","Ho Chi Minh City","Khartoum","Barcelona","Washington","Pune","Shenyang","Saint Petersburg","Toronto","Guadalajara","Singapore","Dongguan","Luanda","Baghdad","Haora"]}, [
  'Content-Length',
  '693',
  'Content-Type',
  'application/json; charset=utf-8',
  'x-request-id',
  'e8039faf-dac1-4208-87bd-20e9faefa5bf',
  'x-envoy-upstream-service-time',
  '211',
  'apim-request-id',
  'e8039faf-dac1-4208-87bd-20e9faefa5bf',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'x-content-type-options',
  'nosniff',
  'Date',
  'Wed, 02 Jun 2021 07:07:54 GMT'
]);
