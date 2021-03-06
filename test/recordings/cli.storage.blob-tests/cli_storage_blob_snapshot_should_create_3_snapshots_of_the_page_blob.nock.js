// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'a0d901ba-9956-4f7d-830c-2d7974c36666',
    name: 'Azure Storage DM Dev',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_STORAGE_CONNECTION_STRING'] = 'DefaultEndpointsProtocol=https;AccountName=xplat;AccountKey=null';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://xplat.blob.core.windows.net:443')
  .put('/storage-cli-blob-test/pageblobname77449713?comp=snapshot')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Wed, 20 Jul 2016 09:58:25 GMT',
  etag: '"0x8D3B08464321928"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '6d45a802-0001-0021-566d-e2fb36000000',
  'x-ms-version': '2015-04-05',
  'x-ms-snapshot': '2016-07-20T09:58:48.9913510Z',
  date: 'Wed, 20 Jul 2016 09:58:48 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.blob.core.windows.net:443')
  .put('/storage-cli-blob-test/pageblobname77449713?comp=snapshot')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Wed, 20 Jul 2016 09:58:25 GMT',
  etag: '"0x8D3B08464321928"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '6d45a802-0001-0021-566d-e2fb36000000',
  'x-ms-version': '2015-04-05',
  'x-ms-snapshot': '2016-07-20T09:58:48.9913510Z',
  date: 'Wed, 20 Jul 2016 09:58:48 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.blob.core.windows.net:443')
  .put('/storage-cli-blob-test/pageblobname77449713?comp=snapshot')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Wed, 20 Jul 2016 09:58:25 GMT',
  etag: '"0x8D3B08464321928"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '12aa03d1-0001-0023-0e6d-e2f9cc000000',
  'x-ms-version': '2015-04-05',
  'x-ms-snapshot': '2016-07-20T09:58:49.5443844Z',
  date: 'Wed, 20 Jul 2016 09:58:49 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.blob.core.windows.net:443')
  .put('/storage-cli-blob-test/pageblobname77449713?comp=snapshot')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Wed, 20 Jul 2016 09:58:25 GMT',
  etag: '"0x8D3B08464321928"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '12aa03d1-0001-0023-0e6d-e2f9cc000000',
  'x-ms-version': '2015-04-05',
  'x-ms-snapshot': '2016-07-20T09:58:49.5443844Z',
  date: 'Wed, 20 Jul 2016 09:58:49 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.blob.core.windows.net:443')
  .put('/storage-cli-blob-test/pageblobname77449713?comp=snapshot')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Wed, 20 Jul 2016 09:58:25 GMT',
  etag: '"0x8D3B08464321928"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'a3685bf7-0001-003d-246d-e22321000000',
  'x-ms-version': '2015-04-05',
  'x-ms-snapshot': '2016-07-20T09:58:50.1414220Z',
  date: 'Wed, 20 Jul 2016 09:58:49 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.blob.core.windows.net:443')
  .put('/storage-cli-blob-test/pageblobname77449713?comp=snapshot')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Wed, 20 Jul 2016 09:58:25 GMT',
  etag: '"0x8D3B08464321928"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'a3685bf7-0001-003d-246d-e22321000000',
  'x-ms-version': '2015-04-05',
  'x-ms-snapshot': '2016-07-20T09:58:50.1414220Z',
  date: 'Wed, 20 Jul 2016 09:58:49 GMT',
  connection: 'close' });
 return result; }]];