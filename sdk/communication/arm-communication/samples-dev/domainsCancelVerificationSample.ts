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
  VerificationParameter,
  CommunicationServiceManagementClient
} from "@azure/arm-communication";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Cancel verification of DNS record.
 *
 * @summary Cancel verification of DNS record.
 * x-ms-original-file: specification/communication/resource-manager/Microsoft.Communication/preview/2023-03-01-preview/examples/domains/cancelVerification.json
 */
async function cancelVerification() {
  const subscriptionId =
    process.env["COMMUNICATION_SUBSCRIPTION_ID"] ||
    "11112222-3333-4444-5555-666677778888";
  const resourceGroupName =
    process.env["COMMUNICATION_RESOURCE_GROUP"] || "MyResourceGroup";
  const emailServiceName = "MyEmailServiceResource";
  const domainName = "mydomain.com";
  const parameters: VerificationParameter = { verificationType: "SPF" };
  const credential = new DefaultAzureCredential();
  const client = new CommunicationServiceManagementClient(
    credential,
    subscriptionId
  );
  const result = await client.domains.beginCancelVerificationAndWait(
    resourceGroupName,
    emailServiceName,
    domainName,
    parameters
  );
  console.log(result);
}

async function main() {
  cancelVerification();
}

main().catch(console.error);
