/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { NetworkManagementClient } = require("@azure/arm-network");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Update a DDoS protection plan tags.
 *
 * @summary Update a DDoS protection plan tags.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-09-01/examples/DdosProtectionPlanUpdateTags.json
 */
async function dDoSProtectionPlanUpdateTags() {
  const subscriptionId = process.env["NETWORK_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["NETWORK_RESOURCE_GROUP"] || "rg1";
  const ddosProtectionPlanName = "test-plan";
  const parameters = { tags: { tag1: "value1", tag2: "value2" } };
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.ddosProtectionPlans.updateTags(
    resourceGroupName,
    ddosProtectionPlanName,
    parameters
  );
  console.log(result);
}

async function main() {
  dDoSProtectionPlanUpdateTags();
}

main().catch(console.error);
