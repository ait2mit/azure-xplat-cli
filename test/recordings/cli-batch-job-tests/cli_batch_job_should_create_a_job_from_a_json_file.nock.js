// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '2915bbd6-1252-405f-8173-6c00428146d9',
    name: 'Batch-MatthChr',
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
  process.env['AZURE_BATCH_ACCOUNT'] = 'matthchreastus2';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://matthchreastus2.eastus2.batch.azure.com';
  
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://matthchreastus2.eastus2.batch.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/jobs?api-version=2016-07-01.3.1&timeout=30', '*')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Wed, 03 Aug 2016 23:58:05 GMT',
  etag: '0x8D3BBFA02EB32EF',
  location: 'https://matthchreastus2.eastus2.batch.azure.com/jobs/job-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '6011d542-c1ea-43c2-a020-660e2e6ee1cf',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': 'd95e3369-6c3f-414e-8df8-3f85db7faf90',
  dataserviceversion: '3.0',
  dataserviceid: 'https://matthchreastus2.eastus2.batch.azure.com/jobs/job-1',
  date: 'Wed, 03 Aug 2016 23:58:04 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://matthchreastus2.eastus2.batch.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/jobs?api-version=2016-07-01.3.1&timeout=30', '*')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Wed, 03 Aug 2016 23:58:05 GMT',
  etag: '0x8D3BBFA02EB32EF',
  location: 'https://matthchreastus2.eastus2.batch.azure.com/jobs/job-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '6011d542-c1ea-43c2-a020-660e2e6ee1cf',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': 'd95e3369-6c3f-414e-8df8-3f85db7faf90',
  dataserviceversion: '3.0',
  dataserviceid: 'https://matthchreastus2.eastus2.batch.azure.com/jobs/job-1',
  date: 'Wed, 03 Aug 2016 23:58:04 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://matthchreastus2.eastus2.batch.azure.com:443')
  .get('/jobs/xplatJob?api-version=2016-07-01.3.1&timeout=30')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://matthchreastus2.eastus2.batch.azure.com/$metadata#jobs/@Element\",\"id\":\"xplatJob\",\"displayName\":\"displayName\",\"url\":\"https://matthchreastus2.eastus2.batch.azure.com/jobs/xplatJob\",\"eTag\":\"0x8D3BBFA02EB32EF\",\"lastModified\":\"2016-08-03T23:58:05.4558447Z\",\"creationTime\":\"2016-08-03T23:58:05.4053911Z\",\"state\":\"active\",\"stateTransitionTime\":\"2016-08-03T23:58:05.4558447Z\",\"priority\":1,\"usesTaskDependencies\":false,\"constraints\":{\r\n    \"maxWallClockTime\":\"P1D\",\"maxTaskRetryCount\":5\r\n  },\"jobManagerTask\":{\r\n    \"id\":\"jobManager\",\"displayName\":\"jobManagerDisplay\",\"commandLine\":\"cmd /c dir /s\",\"resourceFiles\":[\r\n      {\r\n        \"blobSource\":\"https://testacct.blob.core.windows.net/\",\"filePath\":\"filePath\"\r\n      }\r\n    ],\"environmentSettings\":[\r\n      {\r\n        \"name\":\"name1\",\"value\":\"value1\"\r\n      },{\r\n        \"name\":\"name2\",\"value\":\"value2\"\r\n      }\r\n    ],\"constraints\":{\r\n      \"maxWallClockTime\":\"PT1H\",\"retentionTime\":\"P10675199DT2H48M5.4775807S\",\"maxTaskRetryCount\":5\r\n    },\"runElevated\":false,\"runExclusive\":true,\"killJobOnCompletion\":false\r\n  },\"jobPreparationTask\":{\r\n    \"id\":\"jobPrep\",\"commandLine\":\"cmd /c dir /s\",\"resourceFiles\":[\r\n      {\r\n        \"blobSource\":\"https://testacct.blob.core.windows.net/\",\"filePath\":\"jobPrepFilePath\"\r\n      }\r\n    ],\"environmentSettings\":[\r\n      {\r\n        \"name\":\"jobPrepName1\",\"value\":\"jobPrepValue1\"\r\n      },{\r\n        \"name\":\"jobPrepName2\",\"value\":\"jobPrepValue2\"\r\n      }\r\n    ],\"constraints\":{\r\n      \"maxWallClockTime\":\"P10675199DT2H48M5.4775807S\",\"retentionTime\":\"P10675199DT2H48M5.4775807S\",\"maxTaskRetryCount\":2\r\n    },\"runElevated\":false,\"waitForSuccess\":true,\"rerunOnNodeRebootAfterSuccess\":true\r\n  },\"jobReleaseTask\":{\r\n    \"id\":\"jobRelease\",\"commandLine\":\"cmd /c dir /s\",\"resourceFiles\":[\r\n      {\r\n        \"blobSource\":\"https://testacct.blob.core.windows.net/\",\"filePath\":\"jobReleaseFilePath\"\r\n      }\r\n    ],\"environmentSettings\":[\r\n      {\r\n        \"name\":\"jobReleaseName1\",\"value\":\"jobReleaseValue1\"\r\n      },{\r\n        \"name\":\"jobReleaseName2\",\"value\":\"jobReleaseValue2\"\r\n      }\r\n    ],\"maxWallClockTime\":\"PT15M\",\"retentionTime\":\"P10675199DT2H48M5.4775807S\",\"runElevated\":false\r\n  },\"commonEnvironmentSettings\":[\r\n    {\r\n      \"name\":\"commonName1\",\"value\":\"commonValue1\"\r\n    },{\r\n      \"name\":\"commonName2\",\"value\":\"commonValue2\"\r\n    }\r\n  ],\"poolInfo\":{\r\n    \"poolId\":\"xplatTestPool\"\r\n  },\"metadata\":[\r\n    {\r\n      \"name\":\"specMeta1\",\"value\":\"specMetaValue1\"\r\n    },{\r\n      \"name\":\"specMeta2\",\"value\":\"specMetaValue2\"\r\n    }\r\n  ],\"executionInfo\":{\r\n    \"startTime\":\"2016-08-03T23:58:05.4558447Z\",\"poolId\":\"xplatTestPool\"\r\n  },\"onAllTasksComplete\":\"noaction\",\"onTaskFailure\":\"noaction\"\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  'last-modified': 'Wed, 03 Aug 2016 23:58:05 GMT',
  etag: '0x8D3BBFA02EB32EF',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '8f36e891-3e1b-4d32-9198-fc9de4a0d75f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': '2c8f7abf-8792-4fad-a25a-5f4b9a6aac8c',
  dataserviceversion: '3.0',
  date: 'Wed, 03 Aug 2016 23:58:04 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://matthchreastus2.eastus2.batch.azure.com:443')
  .get('/jobs/xplatJob?api-version=2016-07-01.3.1&timeout=30')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://matthchreastus2.eastus2.batch.azure.com/$metadata#jobs/@Element\",\"id\":\"xplatJob\",\"displayName\":\"displayName\",\"url\":\"https://matthchreastus2.eastus2.batch.azure.com/jobs/xplatJob\",\"eTag\":\"0x8D3BBFA02EB32EF\",\"lastModified\":\"2016-08-03T23:58:05.4558447Z\",\"creationTime\":\"2016-08-03T23:58:05.4053911Z\",\"state\":\"active\",\"stateTransitionTime\":\"2016-08-03T23:58:05.4558447Z\",\"priority\":1,\"usesTaskDependencies\":false,\"constraints\":{\r\n    \"maxWallClockTime\":\"P1D\",\"maxTaskRetryCount\":5\r\n  },\"jobManagerTask\":{\r\n    \"id\":\"jobManager\",\"displayName\":\"jobManagerDisplay\",\"commandLine\":\"cmd /c dir /s\",\"resourceFiles\":[\r\n      {\r\n        \"blobSource\":\"https://testacct.blob.core.windows.net/\",\"filePath\":\"filePath\"\r\n      }\r\n    ],\"environmentSettings\":[\r\n      {\r\n        \"name\":\"name1\",\"value\":\"value1\"\r\n      },{\r\n        \"name\":\"name2\",\"value\":\"value2\"\r\n      }\r\n    ],\"constraints\":{\r\n      \"maxWallClockTime\":\"PT1H\",\"retentionTime\":\"P10675199DT2H48M5.4775807S\",\"maxTaskRetryCount\":5\r\n    },\"runElevated\":false,\"runExclusive\":true,\"killJobOnCompletion\":false\r\n  },\"jobPreparationTask\":{\r\n    \"id\":\"jobPrep\",\"commandLine\":\"cmd /c dir /s\",\"resourceFiles\":[\r\n      {\r\n        \"blobSource\":\"https://testacct.blob.core.windows.net/\",\"filePath\":\"jobPrepFilePath\"\r\n      }\r\n    ],\"environmentSettings\":[\r\n      {\r\n        \"name\":\"jobPrepName1\",\"value\":\"jobPrepValue1\"\r\n      },{\r\n        \"name\":\"jobPrepName2\",\"value\":\"jobPrepValue2\"\r\n      }\r\n    ],\"constraints\":{\r\n      \"maxWallClockTime\":\"P10675199DT2H48M5.4775807S\",\"retentionTime\":\"P10675199DT2H48M5.4775807S\",\"maxTaskRetryCount\":2\r\n    },\"runElevated\":false,\"waitForSuccess\":true,\"rerunOnNodeRebootAfterSuccess\":true\r\n  },\"jobReleaseTask\":{\r\n    \"id\":\"jobRelease\",\"commandLine\":\"cmd /c dir /s\",\"resourceFiles\":[\r\n      {\r\n        \"blobSource\":\"https://testacct.blob.core.windows.net/\",\"filePath\":\"jobReleaseFilePath\"\r\n      }\r\n    ],\"environmentSettings\":[\r\n      {\r\n        \"name\":\"jobReleaseName1\",\"value\":\"jobReleaseValue1\"\r\n      },{\r\n        \"name\":\"jobReleaseName2\",\"value\":\"jobReleaseValue2\"\r\n      }\r\n    ],\"maxWallClockTime\":\"PT15M\",\"retentionTime\":\"P10675199DT2H48M5.4775807S\",\"runElevated\":false\r\n  },\"commonEnvironmentSettings\":[\r\n    {\r\n      \"name\":\"commonName1\",\"value\":\"commonValue1\"\r\n    },{\r\n      \"name\":\"commonName2\",\"value\":\"commonValue2\"\r\n    }\r\n  ],\"poolInfo\":{\r\n    \"poolId\":\"xplatTestPool\"\r\n  },\"metadata\":[\r\n    {\r\n      \"name\":\"specMeta1\",\"value\":\"specMetaValue1\"\r\n    },{\r\n      \"name\":\"specMeta2\",\"value\":\"specMetaValue2\"\r\n    }\r\n  ],\"executionInfo\":{\r\n    \"startTime\":\"2016-08-03T23:58:05.4558447Z\",\"poolId\":\"xplatTestPool\"\r\n  },\"onAllTasksComplete\":\"noaction\",\"onTaskFailure\":\"noaction\"\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  'last-modified': 'Wed, 03 Aug 2016 23:58:05 GMT',
  etag: '0x8D3BBFA02EB32EF',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '8f36e891-3e1b-4d32-9198-fc9de4a0d75f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': '2c8f7abf-8792-4fad-a25a-5f4b9a6aac8c',
  dataserviceversion: '3.0',
  date: 'Wed, 03 Aug 2016 23:58:04 GMT',
  connection: 'close' });
 return result; }]];