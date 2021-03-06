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
  .head('/storageclitest?restype=container')
  .reply(404, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '3f134283-0001-003a-646c-e2d5a4000000',
  'x-ms-version': '2015-04-05',
  date: 'Wed, 20 Jul 2016 09:55:50 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.blob.core.windows.net:443')
  .head('/storageclitest?restype=container')
  .reply(404, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '3f134283-0001-003a-646c-e2d5a4000000',
  'x-ms-version': '2015-04-05',
  date: 'Wed, 20 Jul 2016 09:55:50 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.blob.core.windows.net:443')
  .put('/storageclitest?restype=container')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Wed, 20 Jul 2016 09:55:51 GMT',
  etag: '"0x8D3B084086C598A"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '18ae7a3d-0001-000b-5d6c-e28e73000000',
  'x-ms-version': '2015-04-05',
  date: 'Wed, 20 Jul 2016 09:55:50 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.blob.core.windows.net:443')
  .put('/storageclitest?restype=container')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Wed, 20 Jul 2016 09:55:51 GMT',
  etag: '"0x8D3B084086C598A"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '18ae7a3d-0001-000b-5d6c-e28e73000000',
  'x-ms-version': '2015-04-05',
  date: 'Wed, 20 Jul 2016 09:55:50 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.blob.core.windows.net:443')
  .head('/storageclitest?restype=container')
  .reply(200, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Wed, 20 Jul 2016 09:55:51 GMT',
  etag: '"0x8D3B084086C598A"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'd01a7748-0001-0014-506c-e25563000000',
  'x-ms-version': '2015-04-05',
  'x-ms-lease-status': 'unlocked',
  'x-ms-lease-state': 'available',
  date: 'Wed, 20 Jul 2016 09:55:51 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.blob.core.windows.net:443')
  .head('/storageclitest?restype=container')
  .reply(200, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Wed, 20 Jul 2016 09:55:51 GMT',
  etag: '"0x8D3B084086C598A"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'd01a7748-0001-0014-506c-e25563000000',
  'x-ms-version': '2015-04-05',
  'x-ms-lease-status': 'unlocked',
  'x-ms-lease-state': 'available',
  date: 'Wed, 20 Jul 2016 09:55:51 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.blob.core.windows.net:443')
  .get('/storageclitest?restype=container&comp=acl')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><SignedIdentifiers />", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  'last-modified': 'Wed, 20 Jul 2016 09:55:51 GMT',
  etag: '"0x8D3B084086C598A"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'b10847e4-0001-0025-476c-e20eb4000000',
  'x-ms-version': '2015-04-05',
  date: 'Wed, 20 Jul 2016 09:55:51 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.blob.core.windows.net:443')
  .get('/storageclitest?restype=container&comp=acl')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><SignedIdentifiers />", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  'last-modified': 'Wed, 20 Jul 2016 09:55:51 GMT',
  etag: '"0x8D3B084086C598A"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'b10847e4-0001-0025-476c-e20eb4000000',
  'x-ms-version': '2015-04-05',
  date: 'Wed, 20 Jul 2016 09:55:51 GMT',
  connection: 'close' });
 return result; }]];