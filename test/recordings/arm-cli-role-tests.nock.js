// This file has been autogenerated.

var profile = require('../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '358f3860-9dbe-4ace-b0c0-3d4f2d861014',
    name: 'adminSubscription123',
    username: 'user@domain.example',
    registeredProviders: ['website', 'sqlserver', 'visualstudio.account'],
    registeredResourceNamespaces: ['microsoft.insights', 'successbricks.cleardb'],
    isDefault: true
  }, newProfile.environments['rdfenext']));

  return newProfile;
};

exports.setEnvironment = function() {
}

exports.scopes = [[function (nock) { 
var result = 
nock('https://aad-pas-nova-by1-001.cloudapp.net:443')
  .get('/1EEEB395-21C8-4AE0-B145-2ABD2DFE501D/roleDefinitions')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://aad-pas-nova-by1-001.cloudapp.net/1EEEB395-21C8-4AE0-B145-2ABD2DFE501D/$metadata#roleDefinitions\",\"value\":[\r\n    {\r\n      \"roleId\":\"be21d9e2-3caf-4ef2-a7b2-5339196d939b\",\"appId\":\"6ead6d32-1d83-4559-bc85-d7b5b2a2f8e8\",\"name\":\"Operator\",\"description\":\"Operator role allowing reads, updates, and actions\",\"scope\":\"/\",\"permissions\":[\r\n        {\r\n          \"actions\":[\r\n            \"*/read\",\"*/update\",\"*/action\"\r\n          ]\r\n        }\r\n      ]\r\n    },{\r\n      \"roleId\":\"acdd72a7-3385-48ef-bd42-f606fba81ae7\",\"appId\":\"6ead6d32-1d83-4559-bc85-d7b5b2a2f8e8\",\"name\":\"Reader\",\"description\":\"Reader role allowing only read operations\",\"scope\":\"/\",\"permissions\":[\r\n        {\r\n          \"actions\":[\r\n            \"*/read\"\r\n          ]\r\n        }\r\n      ]\r\n    },{\r\n      \"roleId\":\"b24988ac-6180-42a0-ab88-20f7382dd24c\",\"appId\":\"80941f63-e69b-4695-ba71-3f8028ca1e5f\",\"name\":\"Operator\",\"description\":\"Operator role allowing reads, updates, and actions\",\"scope\":\"/\",\"permissions\":[\r\n        {\r\n          \"actions\":[\r\n            \"*/read\",\"*/update\",\"*/action\"\r\n          ]\r\n        }\r\n      ]\r\n    },{\r\n      \"roleId\":\"7af85c43-6fb7-49f9-9ff6-f9ff20d7205c\",\"appId\":\"80941f63-e69b-4695-ba71-3f8028ca1e5f\",\"name\":\"Reader\",\"description\":\"GETs allowed\",\"scope\":\"/\",\"permissions\":[\r\n        {\r\n          \"actions\":[\r\n            \"GET\"\r\n          ]\r\n        }\r\n      ]\r\n    },{\r\n      \"roleId\":\"43137be5-c198-403e-8b8e-cfcb933bf291\",\"appId\":\"80941f63-e69b-4695-ba71-3f8028ca1e5f\",\"name\":\"Writer\",\"description\":\"PUTs / POSTs allowed\",\"scope\":\"/\",\"permissions\":[\r\n        {\r\n          \"actions\":[\r\n            \"POST\",\"PUT\"\r\n          ]\r\n        },{\r\n          \"actions\":[\r\n            \"SomeRandomCondition\"\r\n          ]\r\n        }\r\n      ]\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.0',
  dataserviceversion: '3.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  date: 'Mon, 09 Jun 2014 22:22:29 GMT',
  'content-length': '1762' });
 return result; }],
[function (nock) { 
var result = 
nock('https://aad-pas-nova-by1-001.cloudapp.net:443')
  .get('/1EEEB395-21C8-4AE0-B145-2ABD2DFE501D/roleDefinitions')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://aad-pas-nova-by1-001.cloudapp.net/1EEEB395-21C8-4AE0-B145-2ABD2DFE501D/$metadata#roleDefinitions\",\"value\":[\r\n    {\r\n      \"roleId\":\"be21d9e2-3caf-4ef2-a7b2-5339196d939b\",\"appId\":\"6ead6d32-1d83-4559-bc85-d7b5b2a2f8e8\",\"name\":\"Operator\",\"description\":\"Operator role allowing reads, updates, and actions\",\"scope\":\"/\",\"permissions\":[\r\n        {\r\n          \"actions\":[\r\n            \"*/read\",\"*/update\",\"*/action\"\r\n          ]\r\n        }\r\n      ]\r\n    },{\r\n      \"roleId\":\"acdd72a7-3385-48ef-bd42-f606fba81ae7\",\"appId\":\"6ead6d32-1d83-4559-bc85-d7b5b2a2f8e8\",\"name\":\"Reader\",\"description\":\"Reader role allowing only read operations\",\"scope\":\"/\",\"permissions\":[\r\n        {\r\n          \"actions\":[\r\n            \"*/read\"\r\n          ]\r\n        }\r\n      ]\r\n    },{\r\n      \"roleId\":\"b24988ac-6180-42a0-ab88-20f7382dd24c\",\"appId\":\"80941f63-e69b-4695-ba71-3f8028ca1e5f\",\"name\":\"Operator\",\"description\":\"Operator role allowing reads, updates, and actions\",\"scope\":\"/\",\"permissions\":[\r\n        {\r\n          \"actions\":[\r\n            \"*/read\",\"*/update\",\"*/action\"\r\n          ]\r\n        }\r\n      ]\r\n    },{\r\n      \"roleId\":\"7af85c43-6fb7-49f9-9ff6-f9ff20d7205c\",\"appId\":\"80941f63-e69b-4695-ba71-3f8028ca1e5f\",\"name\":\"Reader\",\"description\":\"GETs allowed\",\"scope\":\"/\",\"permissions\":[\r\n        {\r\n          \"actions\":[\r\n            \"GET\"\r\n          ]\r\n        }\r\n      ]\r\n    },{\r\n      \"roleId\":\"43137be5-c198-403e-8b8e-cfcb933bf291\",\"appId\":\"80941f63-e69b-4695-ba71-3f8028ca1e5f\",\"name\":\"Writer\",\"description\":\"PUTs / POSTs allowed\",\"scope\":\"/\",\"permissions\":[\r\n        {\r\n          \"actions\":[\r\n            \"POST\",\"PUT\"\r\n          ]\r\n        },{\r\n          \"actions\":[\r\n            \"SomeRandomCondition\"\r\n          ]\r\n        }\r\n      ]\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.0',
  dataserviceversion: '3.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  date: 'Mon, 09 Jun 2014 22:22:29 GMT',
  'content-length': '1762' });
 return result; }],
[function (nock) { 
var result = 
nock('https://aad-pas-nova-by1-001.cloudapp.net:443')
  .get('/1EEEB395-21C8-4AE0-B145-2ABD2DFE501D/roleDefinitions')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://aad-pas-nova-by1-001.cloudapp.net/1EEEB395-21C8-4AE0-B145-2ABD2DFE501D/$metadata#roleDefinitions\",\"value\":[\r\n    {\r\n      \"roleId\":\"be21d9e2-3caf-4ef2-a7b2-5339196d939b\",\"appId\":\"6ead6d32-1d83-4559-bc85-d7b5b2a2f8e8\",\"name\":\"Operator\",\"description\":\"Operator role allowing reads, updates, and actions\",\"scope\":\"/\",\"permissions\":[\r\n        {\r\n          \"actions\":[\r\n            \"*/read\",\"*/update\",\"*/action\"\r\n          ]\r\n        }\r\n      ]\r\n    },{\r\n      \"roleId\":\"acdd72a7-3385-48ef-bd42-f606fba81ae7\",\"appId\":\"6ead6d32-1d83-4559-bc85-d7b5b2a2f8e8\",\"name\":\"Reader\",\"description\":\"Reader role allowing only read operations\",\"scope\":\"/\",\"permissions\":[\r\n        {\r\n          \"actions\":[\r\n            \"*/read\"\r\n          ]\r\n        }\r\n      ]\r\n    },{\r\n      \"roleId\":\"b24988ac-6180-42a0-ab88-20f7382dd24c\",\"appId\":\"80941f63-e69b-4695-ba71-3f8028ca1e5f\",\"name\":\"Operator\",\"description\":\"Operator role allowing reads, updates, and actions\",\"scope\":\"/\",\"permissions\":[\r\n        {\r\n          \"actions\":[\r\n            \"*/read\",\"*/update\",\"*/action\"\r\n          ]\r\n        }\r\n      ]\r\n    },{\r\n      \"roleId\":\"7af85c43-6fb7-49f9-9ff6-f9ff20d7205c\",\"appId\":\"80941f63-e69b-4695-ba71-3f8028ca1e5f\",\"name\":\"Reader\",\"description\":\"GETs allowed\",\"scope\":\"/\",\"permissions\":[\r\n        {\r\n          \"actions\":[\r\n            \"GET\"\r\n          ]\r\n        }\r\n      ]\r\n    },{\r\n      \"roleId\":\"43137be5-c198-403e-8b8e-cfcb933bf291\",\"appId\":\"80941f63-e69b-4695-ba71-3f8028ca1e5f\",\"name\":\"Writer\",\"description\":\"PUTs / POSTs allowed\",\"scope\":\"/\",\"permissions\":[\r\n        {\r\n          \"actions\":[\r\n            \"POST\",\"PUT\"\r\n          ]\r\n        },{\r\n          \"actions\":[\r\n            \"SomeRandomCondition\"\r\n          ]\r\n        }\r\n      ]\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.0',
  dataserviceversion: '3.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  date: 'Mon, 09 Jun 2014 22:22:29 GMT',
  'content-length': '1762' });
 return result; },
function (nock) { 
var result = 
nock('https://aad-pas-nova-by1-001.cloudapp.net:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/1EEEB395-21C8-4AE0-B145-2ABD2DFE501D/roleAssignments', '*')
  .reply(201, "{\r\n  \"odata.metadata\":\"https://aad-pas-nova-by1-001.cloudapp.net/1EEEB395-21C8-4AE0-B145-2ABD2DFE501D/$metadata#roleAssignments/@Element\",\"roleAssignmentId\":\"837c4715-8fd3-44ac-9844-455cfbdc6c0f\",\"appId\":\"797f4846-ba00-4fd7-ba43-dac1f8f63013\",\"roleId\":\"be21d9e2-3caf-4ef2-a7b2-5339196d939b\",\"principalId\":\"a30db067-cde1-49be-95bb-9619a8cc8617\",\"scope\":\"SDKXplatUnitTest\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  location: 'https://aad-pas-nova-by1-001.cloudapp.net/1EEEB395-21C8-4AE0-B145-2ABD2DFE501D/roleAssignments(guid\'837c4715-8fd3-44ac-9844-455cfbdc6c0f\')',
  server: 'Microsoft-IIS/8.0',
  dataserviceversion: '3.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  date: 'Mon, 09 Jun 2014 22:22:30 GMT',
  'content-length': '373' });
 return result; },
function (nock) { 
var result = 
nock('https://aad-pas-nova-by1-001.cloudapp.net:443')
  .get('/1EEEB395-21C8-4AE0-B145-2ABD2DFE501D/roleAssignments()?')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://aad-pas-nova-by1-001.cloudapp.net/1EEEB395-21C8-4AE0-B145-2ABD2DFE501D/$metadata#roleAssignments\",\"value\":[\r\n    {\r\n      \"roleAssignmentId\":\"837c4715-8fd3-44ac-9844-455cfbdc6c0f\",\"appId\":\"797f4846-ba00-4fd7-ba43-dac1f8f63013\",\"roleId\":\"be21d9e2-3caf-4ef2-a7b2-5339196d939b\",\"principalId\":\"a30db067-cde1-49be-95bb-9619a8cc8617\",\"scope\":\"SDKXplatUnitTest\"\r\n    },{\r\n      \"roleAssignmentId\":\"54cb6881-0a1c-4ee0-b230-4cf0b8912217\",\"appId\":\"80941f63-e69b-4695-ba71-3f8028ca1e5f\",\"roleId\":\"7af85c43-6fb7-49f9-9ff6-f9ff20d7205c\",\"principalId\":\"12edb772-da3a-4647-bff1-8b66f48c33bb\",\"scope\":\"/sub/123\"\r\n    },{\r\n      \"roleAssignmentId\":\"9e5720d4-0727-4108-9edb-96190ab2845b\",\"appId\":\"80941f63-e69b-4695-ba71-3f8028ca1e5f\",\"roleId\":\"43137be5-c198-403e-8b8e-cfcb933bf291\",\"principalId\":\"12edb772-da3a-4647-bff1-8b66f48c33bb\",\"scope\":\"/sub/456\"\r\n    },{\r\n      \"roleAssignmentId\":\"b22b7c3e-b452-4b97-90aa-06087caf047b\",\"appId\":\"80941f63-e69b-4695-ba71-3f8028ca1e5f\",\"roleId\":\"7af85c43-6fb7-49f9-9ff6-f9ff20d7205c\",\"principalId\":\"59875459-47b4-4ebd-971f-f16e588979d2\",\"scope\":\"/sub/123\"\r\n    },{\r\n      \"roleAssignmentId\":\"57f2e446-6118-4cbb-a04b-40c28727aad2\",\"appId\":\"80941f63-e69b-4695-ba71-3f8028ca1e5f\",\"roleId\":\"7af85c43-6fb7-49f9-9ff6-f9ff20d7205c\",\"principalId\":\"b6c365fc-3832-4dc8-b91e-24648bdb49b2\",\"scope\":\"/sub/123\"\r\n    },{\r\n      \"roleAssignmentId\":\"935c7e85-c42d-4097-892c-9b76b970577f\",\"appId\":\"80941f63-e69b-4695-ba71-3f8028ca1e5f\",\"roleId\":\"7af85c43-6fb7-49f9-9ff6-f9ff20d7205c\",\"principalId\":\"f46d4f6f-8a39-49a9-b34d-ca54add0a2ae\",\"scope\":\"/sub/123\"\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; odata=minimalmetadata; streaming=true; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.0',
  dataserviceversion: '3.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  date: 'Mon, 09 Jun 2014 22:22:30 GMT',
  'content-length': '1605' });
 return result; },
function (nock) { 
var result = 
nock('https://aad-pas-nova-by1-001.cloudapp.net:443')
  .delete('/1EEEB395-21C8-4AE0-B145-2ABD2DFE501D/roleAssignments(guid%27837c4715-8fd3-44ac-9844-455cfbdc6c0f%27)')
  .reply(204, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  date: 'Mon, 09 Jun 2014 22:22:31 GMT' });
 return result; }]];