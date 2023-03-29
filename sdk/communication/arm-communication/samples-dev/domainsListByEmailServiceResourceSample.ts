/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { CommunicationServiceManagementClient } from "@azure/arm-communication";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Handles requests to list all Domains resources under the parent EmailServices resource.
 *
 * @summary Handles requests to list all Domains resources under the parent EmailServices resource.
 * x-ms-original-file: specification/communication/resource-manager/Microsoft.Communication/preview/2023-03-01-preview/examples/domains/listByEmailService.json
 */
async function listDomainsResourcesByEmailServiceName() {
  const subscriptionId =
    process.env["COMMUNICATION_SUBSCRIPTION_ID"] ||
    "11112222-3333-4444-5555-666677778888";
  const resourceGroupName =
    process.env["COMMUNICATION_RESOURCE_GROUP"] || "MyResourceGroup";
  const emailServiceName = "MyEmailServiceResource";
  const credential = new DefaultAzureCredential();
  const client = new CommunicationServiceManagementClient(
    credential,
    subscriptionId
  );
  const resArray = new Array();
  for await (let item of client.domains.listByEmailServiceResource(
    resourceGroupName,
    emailServiceName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  listDomainsResourcesByEmailServiceName();
}

main().catch(console.error);
