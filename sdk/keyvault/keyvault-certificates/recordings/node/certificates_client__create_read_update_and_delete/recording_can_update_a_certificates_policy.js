let nock = require('nock');

module.exports.hash = "30f738369f00526140e5dc306bf9cd0b";

module.exports.testInfo = {"uniqueName":{},"newDate":{}}

nock('https://keyvault_name.vault.azure.net:443', {"encodedQueryParams":true})
  .post('/certificates/CRUDCertificateName-canupdateacertificatespolicy-/create')
  .query(true)
  .reply(401, {"error":{"code":"Unauthorized","message":"AKV10000: Request is missing a Bearer or PoP token."}}, [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Content-Length',
  '97',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'WWW-Authenticate',
  'Bearer authorization="https://login.windows.net/12345678-1234-1234-1234-123456789012", resource="https://vault.azure.net"',
  'x-ms-keyvault-region',
  'westus2',
  'x-ms-client-request-id',
  '3523ac7a-1cf9-48fa-874d-49e62da0d46d',
  'x-ms-request-id',
  '4c32d8af-3695-4d22-aa74-fd42180b5719',
  'x-ms-keyvault-service-version',
  '1.9.378.1',
  'x-ms-keyvault-network-info',
  'conn_type=Ipv4;addr=131.107.147.44;act_addr_fam=InterNetwork;',
  'X-Content-Type-Options',
  'nosniff',
  'Strict-Transport-Security',
  'max-age=31536000;includeSubDomains',
  'Date',
  'Thu, 28 Apr 2022 00:04:09 GMT'
]);

nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .get('/common/discovery/instance')
  .query(true)
  .reply(200, {"tenant_discovery_endpoint":"https://login.microsoftonline.com/12345678-1234-1234-1234-123456789012/v2.0/.well-known/openid-configuration","api-version":"1.1","metadata":[{"preferred_network":"login.microsoftonline.com","preferred_cache":"login.windows.net","aliases":["login.microsoftonline.com","login.windows.net","login.microsoft.com","sts.windows.net"]},{"preferred_network":"login.partner.microsoftonline.cn","preferred_cache":"login.partner.microsoftonline.cn","aliases":["login.partner.microsoftonline.cn","login.chinacloudapi.cn"]},{"preferred_network":"login.microsoftonline.de","preferred_cache":"login.microsoftonline.de","aliases":["login.microsoftonline.de"]},{"preferred_network":"login.microsoftonline.us","preferred_cache":"login.microsoftonline.us","aliases":["login.microsoftonline.us","login.usgovcloudapi.net"]},{"preferred_network":"login-us.microsoftonline.com","preferred_cache":"login-us.microsoftonline.com","aliases":["login-us.microsoftonline.com"]}]}, [
  'Cache-Control',
  'max-age=86400, private',
  'Content-Type',
  'application/json; charset=utf-8',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Methods',
  'GET, OPTIONS',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'x-ms-request-id',
  '6c8541ac-d78f-49c6-a5aa-8fcc5c0d0300',
  'x-ms-ests-server',
  '2.1.12651.9 - EUS ProdSlices',
  'X-XSS-Protection',
  '0',
  'Set-Cookie',
  'fpc=ArOSd2CbuQhKtd3KM08k7l0; expires=Sat, 28-May-2022 00:04:09 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'esctx=AQABAAAAAAD--DLA3VO7QrddgJg7WevrKPCztou2MKiz0nErKY3K6QZP2iWyw2J9JowXhr_-ou13L1CrE-NYclL5LHZThAl5-a4adJ5RK7DgNwbKuDihv5kzJzp62lmiRSrbW9Z_khuIfRXdYt2JUYgreMKDmfqTUri0KPCJ0Mu3ZGQaLOTvIBDKVwUF0XwAo-iSNVl_BqEgAA; domain=.login.microsoftonline.com; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; samesite=none; httponly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; samesite=none; httponly',
  'Date',
  'Thu, 28 Apr 2022 00:04:08 GMT',
  'Content-Length',
  '980'
]);

nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .get('/12345678-1234-1234-1234-123456789012/v2.0/.well-known/openid-configuration')
  .reply(200, {"token_endpoint":"https://login.microsoftonline.com/12345678-1234-1234-1234-123456789012/oauth2/v2.0/token","token_endpoint_auth_methods_supported":["client_secret_post","private_key_jwt","client_secret_basic"],"jwks_uri":"https://login.microsoftonline.com/12345678-1234-1234-1234-123456789012/discovery/v2.0/keys","response_modes_supported":["query","fragment","form_post"],"subject_types_supported":["pairwise"],"id_token_signing_alg_values_supported":["RS256"],"response_types_supported":["code","id_token","code id_token","id_token token"],"scopes_supported":["openid","profile","email","offline_access"],"issuer":"https://login.microsoftonline.com/12345678-1234-1234-1234-123456789012/v2.0","request_uri_parameter_supported":false,"userinfo_endpoint":"https://graph.microsoft.com/oidc/userinfo","authorization_endpoint":"https://login.microsoftonline.com/12345678-1234-1234-1234-123456789012/oauth2/v2.0/authorize","device_authorization_endpoint":"https://login.microsoftonline.com/12345678-1234-1234-1234-123456789012/oauth2/v2.0/devicecode","http_logout_supported":true,"frontchannel_logout_supported":true,"end_session_endpoint":"https://login.microsoftonline.com/12345678-1234-1234-1234-123456789012/oauth2/v2.0/logout","claims_supported":["sub","iss","cloud_instance_name","cloud_instance_host_name","cloud_graph_host_name","msgraph_host","aud","exp","iat","auth_time","acr","nonce","preferred_username","name","tid","ver","at_hash","c_hash","email"],"kerberos_endpoint":"https://login.microsoftonline.com/12345678-1234-1234-1234-123456789012/kerberos","tenant_region_scope":"WW","cloud_instance_name":"microsoftonline.com","cloud_graph_host_name":"graph.windows.net","msgraph_host":"graph.microsoft.com","rbac_url":"https://pas.windows.net"}, [
  'Cache-Control',
  'max-age=86400, private',
  'Content-Type',
  'application/json; charset=utf-8',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Methods',
  'GET, OPTIONS',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'x-ms-request-id',
  '9ad2023a-0706-4253-a676-32eea2e32c00',
  'x-ms-ests-server',
  '2.1.12707.9 - WUS2 ProdSlices',
  'X-XSS-Protection',
  '0',
  'Set-Cookie',
  'fpc=Aur-ECoOjbBJtMJEoHJI2UU; expires=Sat, 28-May-2022 00:04:09 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'esctx=AQABAAAAAAD--DLA3VO7QrddgJg7WevrVbOZhW5FQf5KXv0Bg4qwE7FL4wNKyqs00ieVDHkjLsGIOgLx86bDJ0Te_mulAmHYBFYOTHFSmrieb6qjasJ0Z8r9ohLsBaSj8Sq6iqOfMN1N1DfwQqnBXH5Dfq7mVDlzdu2P0D-mBcwNWX53zKXr5ZAj8J6TwGBPg2kZ_uby5nAgAA; domain=.login.microsoftonline.com; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; samesite=none; httponly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; samesite=none; httponly',
  'Date',
  'Thu, 28 Apr 2022 00:04:08 GMT',
  'Content-Length',
  '1753'
]);

nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .post('/12345678-1234-1234-1234-123456789012/oauth2/v2.0/token', "client_id=azure_client_id&scope=https%3A%2F%2Fsanitized%2F&grant_type=client_credentials&x-client-SKU=msal.js.node&x-client-VER=1.7.0&x-client-OS=win32&x-client-CPU=x64&x-ms-lib-capability=retry-after, h429&x-client-current-telemetry=5|771,2,,,|,&x-client-last-telemetry=5|0|||0,0&client-request-id=3d977ce1-69c2-4020-b8a0-e17964874506&client_secret=azure_client_secret&claims=%7B%22access_token%22%3A%7B%22xms_cc%22%3A%7B%22values%22%3A%5B%22cp1%22%5D%7D%7D%7D")
  .reply(200, {"token_type":"Bearer","expires_in":86399,"ext_expires_in":86399,"access_token":"access_token"}, [
  'Cache-Control',
  'no-store, no-cache',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'x-ms-request-id',
  'c609b235-4a1c-41d3-b783-fd1d76e52b00',
  'x-ms-ests-server',
  '2.1.12707.9 - WUS2 ProdSlices',
  'x-ms-clitelem',
  '1,0,0,,',
  'X-XSS-Protection',
  '0',
  'Set-Cookie',
  'fpc=AsrhcLLSL_ZCoPetEJ49XpBPlvakAQAAAPjQ-9kOAAAA; expires=Sat, 28-May-2022 00:04:09 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; samesite=none; httponly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; samesite=none; httponly',
  'Date',
  'Thu, 28 Apr 2022 00:04:09 GMT',
  'Content-Length',
  '1315'
]);

nock('https://keyvault_name.vault.azure.net:443', {"encodedQueryParams":true})
  .post('/certificates/CRUDCertificateName-canupdateacertificatespolicy-/create', {"policy":{"key_props":{},"secret_props":{},"x509_props":{"subject":"cn=MyCert","sans":{}},"issuer":{"name":"Self"},"attributes":{}},"attributes":{}})
  .query(true)
  .reply(202, {"id":"https://keyvault_name.vault.azure.net/certificates/CRUDCertificateName-canupdateacertificatespolicy-/pending","issuer":{"name":"Self"},"csr":"MIICoTCCAYkCAQAwETEPMA0GA1UEAxMGTXlDZXJ0MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAzLHJ46HQiq58DtylL4S6dNABtzCVdPDnN+lBA4uQhcD+k7+no+M8mi3FlcHh4Hb7p/IcpWc+I03VjoEWnW+pvVFrYYeLNaL5SNjiMG4Bs30500ahsGHHWJW5l4jeSSFZvWJ26m2WwCH/ncBRQ3DDcgovyKL+J80swh/9K3HqvzZRUTrD0e6WZ/nuJawJ2Y7O55ySE6VtAGWe9rHVsIyjIvt527DgxjvRhO9dy5KusK/bc1ysUiHiibhZGM+Z3ziKbyzlL1F7dr108Vm1F1wIkjjRgm3kHX11EPv1eXx+PUaFFs1mDA+6U0sOFHZPBCpcxkWIyedsFTSGBkNEV9SfQQIDAQABoEswSQYJKoZIhvcNAQkOMTwwOjAOBgNVHQ8BAf8EBAMCBaAwHQYDVR0lBBYwFAYIKwYBBQUHAwEGCCsGAQUFBwMCMAkGA1UdEwQCMAAwDQYJKoZIhvcNAQELBQADggEBAFBLQm94+IEnIE5KZVNMBJ4KL4nrwgmH47L78QxmF2uOvhSHh2G0ZFZSu38TpO9NcBS2WFI86I2qJdN3grWwfSMuwSjutzNXYJs2LxofaYJh7bQSJrkz3Wxj5JUfh5fsHMMDAthDp2eC7qendwCPY0VCzCmcTvvJqdjfj0BcUv6yaQxSlKu8kRxKpskxTDzSAfB4QruRyEStbiLEoJR3K3BNUMSSvBzv4M9GXr99KqDcft3fO1pRK/SRWqitmIW9bXpL97lfx21BuIwGcU612XjARSoNmPz1npv5vDuhF0hwZ/yI5wXhyehi0GEUia1EPJyCkSxe/411XR64/ML6WnM=","cancellation_requested":false,"status":"inProgress","status_details":"Pending certificate created. Certificate request is in progress. This may take some time based on the issuer provider. Please check again later.","request_id":"ed564ab17d52478eaa7f9d171df81b17"}, [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Location',
  'https://keyvault_name.vault.azure.net/certificates/CRUDCertificateName-canupdateacertificatespolicy-/pending?api-version=7.3&request_id=ed564ab17d52478eaa7f9d171df81b17',
  'Retry-After',
  '0',
  'x-ms-keyvault-region',
  'westus2',
  'x-ms-client-request-id',
  '3523ac7a-1cf9-48fa-874d-49e62da0d46d',
  'x-ms-request-id',
  '39312297-3a1d-4978-b76a-1a39d4cb5edb',
  'x-ms-keyvault-service-version',
  '1.9.378.1',
  'x-ms-keyvault-network-info',
  'conn_type=Ipv4;addr=131.107.147.44;act_addr_fam=InterNetwork;',
  'x-ms-keyvault-rbac-assignment-id',
  '0cc3cf84-3de1-5005-ab06-0ef4d04fa1de',
  'x-ms-keyvault-rbac-cache',
  'ra_age=1082;da_age=1082;rd_age=1082;brd_age=11876;ra_notif_age=1552;dec_lev=1;',
  'X-Content-Type-Options',
  'nosniff',
  'Strict-Transport-Security',
  'max-age=31536000;includeSubDomains',
  'Date',
  'Thu, 28 Apr 2022 00:04:10 GMT',
  'Content-Length',
  '1339'
]);

nock('https://keyvault_name.vault.azure.net:443', {"encodedQueryParams":true})
  .get('/certificates/CRUDCertificateName-canupdateacertificatespolicy-/pending')
  .query(true)
  .reply(200, {"id":"https://keyvault_name.vault.azure.net/certificates/CRUDCertificateName-canupdateacertificatespolicy-/pending","issuer":{"name":"Self"},"csr":"MIICoTCCAYkCAQAwETEPMA0GA1UEAxMGTXlDZXJ0MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAzLHJ46HQiq58DtylL4S6dNABtzCVdPDnN+lBA4uQhcD+k7+no+M8mi3FlcHh4Hb7p/IcpWc+I03VjoEWnW+pvVFrYYeLNaL5SNjiMG4Bs30500ahsGHHWJW5l4jeSSFZvWJ26m2WwCH/ncBRQ3DDcgovyKL+J80swh/9K3HqvzZRUTrD0e6WZ/nuJawJ2Y7O55ySE6VtAGWe9rHVsIyjIvt527DgxjvRhO9dy5KusK/bc1ysUiHiibhZGM+Z3ziKbyzlL1F7dr108Vm1F1wIkjjRgm3kHX11EPv1eXx+PUaFFs1mDA+6U0sOFHZPBCpcxkWIyedsFTSGBkNEV9SfQQIDAQABoEswSQYJKoZIhvcNAQkOMTwwOjAOBgNVHQ8BAf8EBAMCBaAwHQYDVR0lBBYwFAYIKwYBBQUHAwEGCCsGAQUFBwMCMAkGA1UdEwQCMAAwDQYJKoZIhvcNAQELBQADggEBAFBLQm94+IEnIE5KZVNMBJ4KL4nrwgmH47L78QxmF2uOvhSHh2G0ZFZSu38TpO9NcBS2WFI86I2qJdN3grWwfSMuwSjutzNXYJs2LxofaYJh7bQSJrkz3Wxj5JUfh5fsHMMDAthDp2eC7qendwCPY0VCzCmcTvvJqdjfj0BcUv6yaQxSlKu8kRxKpskxTDzSAfB4QruRyEStbiLEoJR3K3BNUMSSvBzv4M9GXr99KqDcft3fO1pRK/SRWqitmIW9bXpL97lfx21BuIwGcU612XjARSoNmPz1npv5vDuhF0hwZ/yI5wXhyehi0GEUia1EPJyCkSxe/411XR64/ML6WnM=","cancellation_requested":false,"status":"inProgress","status_details":"Pending certificate created. Certificate request is in progress. This may take some time based on the issuer provider. Please check again later.","request_id":"ed564ab17d52478eaa7f9d171df81b17"}, [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Retry-After',
  '0',
  'x-ms-keyvault-region',
  'westus2',
  'x-ms-client-request-id',
  'a8b7be34-3523-464b-aa24-2aade3f8180c',
  'x-ms-request-id',
  '1bf33c14-a4ef-4056-b187-77966971840e',
  'x-ms-keyvault-service-version',
  '1.9.378.1',
  'x-ms-keyvault-network-info',
  'conn_type=Ipv4;addr=131.107.147.44;act_addr_fam=InterNetwork;',
  'x-ms-keyvault-rbac-assignment-id',
  '0cc3cf84-3de1-5005-ab06-0ef4d04fa1de',
  'x-ms-keyvault-rbac-cache',
  'ra_age=1083;da_age=1083;rd_age=1083;brd_age=11876;ra_notif_age=1553;dec_lev=0;',
  'X-Content-Type-Options',
  'nosniff',
  'Strict-Transport-Security',
  'max-age=31536000;includeSubDomains',
  'Date',
  'Thu, 28 Apr 2022 00:04:10 GMT',
  'Content-Length',
  '1339'
]);

nock('https://keyvault_name.vault.azure.net:443', {"encodedQueryParams":true})
  .get('/certificates/CRUDCertificateName-canupdateacertificatespolicy-/')
  .query(true)
  .reply(200, {"id":"https://keyvault_name.vault.azure.net/certificates/CRUDCertificateName-canupdateacertificatespolicy-/3a8ee22e0375449aa720a1c9e96f141b","attributes":{"enabled":false,"nbf":1651103649,"exp":1682640249,"created":1651104250,"updated":1651104250,"recoveryLevel":"CustomizedRecoverable+Purgeable","recoverableDays":7},"policy":{"id":"https://keyvault_name.vault.azure.net/certificates/CRUDCertificateName-canupdateacertificatespolicy-/policy","key_props":{"exportable":true,"kty":"RSA","key_size":2048,"reuse_key":false},"secret_props":{"contentType":"application/x-pkcs12"},"x509_props":{"subject":"cn=MyCert","sans":{},"ekus":["1.3.6.1.5.5.7.3.1","1.3.6.1.5.5.7.3.2"],"key_usage":["digitalSignature","keyEncipherment"],"validity_months":12,"basic_constraints":{"ca":false}},"lifetime_actions":[{"trigger":{"lifetime_percentage":80},"action":{"action_type":"AutoRenew"}}],"issuer":{"name":"Self"},"attributes":{"enabled":true,"created":1651104250,"updated":1651104250}},"pending":{"id":"https://keyvault_name.vault.azure.net/certificates/CRUDCertificateName-canupdateacertificatespolicy-/pending"}}, [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'x-ms-keyvault-region',
  'westus2',
  'x-ms-client-request-id',
  'a1a3754d-54e2-49a4-b411-29b8f21561c5',
  'x-ms-request-id',
  '05440f57-3526-4a5d-b8dd-4a2fc28e6ca3',
  'x-ms-keyvault-service-version',
  '1.9.378.1',
  'x-ms-keyvault-network-info',
  'conn_type=Ipv4;addr=131.107.147.44;act_addr_fam=InterNetwork;',
  'x-ms-keyvault-rbac-assignment-id',
  '0cc3cf84-3de1-5005-ab06-0ef4d04fa1de',
  'x-ms-keyvault-rbac-cache',
  'ra_age=1083;da_age=1083;rd_age=1083;brd_age=11876;ra_notif_age=1553;dec_lev=1;',
  'X-Content-Type-Options',
  'nosniff',
  'Strict-Transport-Security',
  'max-age=31536000;includeSubDomains',
  'Date',
  'Thu, 28 Apr 2022 00:04:10 GMT',
  'Content-Length',
  '1157'
]);

nock('https://keyvault_name.vault.azure.net:443', {"encodedQueryParams":true})
  .patch('/certificates/CRUDCertificateName-canupdateacertificatespolicy-/policy', {"key_props":{},"secret_props":{},"x509_props":{"subject":"cn=MyOtherCert","sans":{}},"issuer":{"name":"Self"},"attributes":{}})
  .query(true)
  .reply(200, {"id":"https://keyvault_name.vault.azure.net/certificates/CRUDCertificateName-canupdateacertificatespolicy-/policy","key_props":{"exportable":true,"kty":"RSA","key_size":2048,"reuse_key":false},"secret_props":{"contentType":"application/x-pkcs12"},"x509_props":{"subject":"cn=MyOtherCert","sans":{},"ekus":["1.3.6.1.5.5.7.3.1","1.3.6.1.5.5.7.3.2"],"key_usage":["digitalSignature","keyEncipherment"],"validity_months":12,"basic_constraints":{"ca":false}},"lifetime_actions":[{"trigger":{"lifetime_percentage":80},"action":{"action_type":"AutoRenew"}}],"issuer":{"name":"Self"},"attributes":{"enabled":true,"created":1651104250,"updated":1651104250}}, [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'x-ms-keyvault-region',
  'westus2',
  'x-ms-client-request-id',
  'ce7e1fcb-618c-4af2-a0dc-4b1782ad07b0',
  'x-ms-request-id',
  'f21a492b-c435-49b6-8acc-7e536f4f8342',
  'x-ms-keyvault-service-version',
  '1.9.378.1',
  'x-ms-keyvault-network-info',
  'conn_type=Ipv4;addr=131.107.147.44;act_addr_fam=InterNetwork;',
  'x-ms-keyvault-rbac-assignment-id',
  '0cc3cf84-3de1-5005-ab06-0ef4d04fa1de',
  'x-ms-keyvault-rbac-cache',
  'ra_age=1083;da_age=1083;rd_age=1083;brd_age=11876;ra_notif_age=1553;dec_lev=1;',
  'X-Content-Type-Options',
  'nosniff',
  'Strict-Transport-Security',
  'max-age=31536000;includeSubDomains',
  'Date',
  'Thu, 28 Apr 2022 00:04:10 GMT',
  'Content-Length',
  '667'
]);

nock('https://keyvault_name.vault.azure.net:443', {"encodedQueryParams":true})
  .get('/certificates/CRUDCertificateName-canupdateacertificatespolicy-/')
  .query(true)
  .reply(200, {"id":"https://keyvault_name.vault.azure.net/certificates/CRUDCertificateName-canupdateacertificatespolicy-/3a8ee22e0375449aa720a1c9e96f141b","attributes":{"enabled":false,"nbf":1651103649,"exp":1682640249,"created":1651104250,"updated":1651104250,"recoveryLevel":"CustomizedRecoverable+Purgeable","recoverableDays":7},"policy":{"id":"https://keyvault_name.vault.azure.net/certificates/CRUDCertificateName-canupdateacertificatespolicy-/policy","key_props":{"exportable":true,"kty":"RSA","key_size":2048,"reuse_key":false},"secret_props":{"contentType":"application/x-pkcs12"},"x509_props":{"subject":"cn=MyOtherCert","sans":{},"ekus":["1.3.6.1.5.5.7.3.1","1.3.6.1.5.5.7.3.2"],"key_usage":["digitalSignature","keyEncipherment"],"validity_months":12,"basic_constraints":{"ca":false}},"lifetime_actions":[{"trigger":{"lifetime_percentage":80},"action":{"action_type":"AutoRenew"}}],"issuer":{"name":"Self"},"attributes":{"enabled":true,"created":1651104250,"updated":1651104250}},"pending":{"id":"https://keyvault_name.vault.azure.net/certificates/CRUDCertificateName-canupdateacertificatespolicy-/pending"}}, [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'x-ms-keyvault-region',
  'westus2',
  'x-ms-client-request-id',
  'afcb3f3d-f670-470c-a71c-e99f5a5a39a0',
  'x-ms-request-id',
  '12482614-e91c-47c8-aa26-ed0e3b3999bb',
  'x-ms-keyvault-service-version',
  '1.9.378.1',
  'x-ms-keyvault-network-info',
  'conn_type=Ipv4;addr=131.107.147.44;act_addr_fam=InterNetwork;',
  'x-ms-keyvault-rbac-assignment-id',
  '0cc3cf84-3de1-5005-ab06-0ef4d04fa1de',
  'x-ms-keyvault-rbac-cache',
  'ra_age=1083;da_age=1083;rd_age=1083;brd_age=11876;ra_notif_age=1553;dec_lev=0;',
  'X-Content-Type-Options',
  'nosniff',
  'Strict-Transport-Security',
  'max-age=31536000;includeSubDomains',
  'Date',
  'Thu, 28 Apr 2022 00:04:10 GMT',
  'Content-Length',
  '1162'
]);
