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
  PrivateLinkService,
  NetworkManagementClient
} from "@azure/arm-network";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Creates or updates an private link service in the specified resource group.
 *
 * @summary Creates or updates an private link service in the specified resource group.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-09-01/examples/PrivateLinkServiceCreate.json
 */
async function createPrivateLinkService() {
  const subscriptionId = process.env["NETWORK_SUBSCRIPTION_ID"] || "subId";
  const resourceGroupName = process.env["NETWORK_RESOURCE_GROUP"] || "rg1";
  const serviceName = "testPls";
  const parameters: PrivateLinkService = {
    autoApproval: { subscriptions: ["subscription1", "subscription2"] },
    fqdns: ["fqdn1", "fqdn2", "fqdn3"],
    ipConfigurations: [
      {
        name: "fe-lb",
        privateIPAddress: "10.0.1.4",
        privateIPAddressVersion: "IPv4",
        privateIPAllocationMethod: "Static",
        subnet: {
          id:
            "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualNetworks/vnetlb/subnets/subnetlb"
        }
      }
    ],
    loadBalancerFrontendIpConfigurations: [
      {
        id:
          "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/loadBalancers/lb/frontendIPConfigurations/fe-lb"
      }
    ],
    location: "eastus",
    visibility: {
      subscriptions: ["subscription1", "subscription2", "subscription3"]
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.privateLinkServices.beginCreateOrUpdateAndWait(
    resourceGroupName,
    serviceName,
    parameters
  );
  console.log(result);
}

async function main() {
  createPrivateLinkService();
}

main().catch(console.error);
