/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { VirtualHub, NetworkManagementClient } from "@azure/arm-network";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Creates a VirtualHub resource if it doesn't exist else updates the existing VirtualHub.
 *
 * @summary Creates a VirtualHub resource if it doesn't exist else updates the existing VirtualHub.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-09-01/examples/VirtualHubPut.json
 */
async function virtualHubPut() {
  const subscriptionId = process.env["NETWORK_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["NETWORK_RESOURCE_GROUP"] || "rg1";
  const virtualHubName = "virtualHub2";
  const virtualHubParameters: VirtualHub = {
    addressPrefix: "10.168.0.0/24",
    location: "West US",
    sku: "Basic",
    tags: { key1: "value1" },
    virtualWan: {
      id:
        "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualWans/virtualWan1"
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.virtualHubs.beginCreateOrUpdateAndWait(
    resourceGroupName,
    virtualHubName,
    virtualHubParameters
  );
  console.log(result);
}

async function main() {
  virtualHubPut();
}

main().catch(console.error);
