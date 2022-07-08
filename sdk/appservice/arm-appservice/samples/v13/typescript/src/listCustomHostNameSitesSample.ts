/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  ListCustomHostNameSitesOptionalParams,
  WebSiteManagementClient
} from "@azure/arm-appservice";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Get custom hostnames under this subscription
 *
 * @summary Get custom hostnames under this subscription
 * x-ms-original-file: specification/web/resource-manager/Microsoft.Web/stable/2022-03-01/examples/ListCustomHostNameSites.json
 */
async function getCustomHostnamesUnderSubscription() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const credential = new DefaultAzureCredential();
  const client = new WebSiteManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.listCustomHostNameSites()) {
    resArray.push(item);
  }
  console.log(resArray);
}

getCustomHostnamesUnderSubscription().catch(console.error);

/**
 * This sample demonstrates how to Get custom hostnames under this subscription
 *
 * @summary Get custom hostnames under this subscription
 * x-ms-original-file: specification/web/resource-manager/Microsoft.Web/stable/2022-03-01/examples/ListCustomSpecificHostNameSites.json
 */
async function getSpecificCustomHostnameUnderSubscription() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const hostname = "www.example.com";
  const options: ListCustomHostNameSitesOptionalParams = { hostname };
  const credential = new DefaultAzureCredential();
  const client = new WebSiteManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.listCustomHostNameSites(options)) {
    resArray.push(item);
  }
  console.log(resArray);
}

getSpecificCustomHostnameUnderSubscription().catch(console.error);
