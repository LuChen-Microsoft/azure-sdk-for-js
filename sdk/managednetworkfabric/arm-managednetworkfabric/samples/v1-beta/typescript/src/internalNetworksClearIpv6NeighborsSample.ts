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
  EnableDisableOnResources,
  AzureNetworkFabricManagementServiceAPI
} from "@azure/arm-managednetworkfabric";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to clearIpv6Neighbors for internalNetwork.
 *
 * @summary clearIpv6Neighbors for internalNetwork.
 * x-ms-original-file: specification/managednetworkfabric/resource-manager/Microsoft.ManagedNetworkFabric/preview/2023-02-01-preview/examples/InternalNetworks_clearIpv6Neighbors_MaximumSet_Gen.json
 */
async function internalNetworksClearIpv6NeighborsMaximumSetGen() {
  const subscriptionId =
    process.env["MANAGEDNETWORKFABRIC_SUBSCRIPTION_ID"] || "subscriptionId";
  const resourceGroupName =
    process.env["MANAGEDNETWORKFABRIC_RESOURCE_GROUP"] || "resourceGroupName";
  const l3IsolationDomainName = "example-l3domain";
  const internalNetworkName = "example-internalnetwork";
  const body: EnableDisableOnResources = {
    resourceIds: [
      "/subscriptions/xxxxxx/resourceGroups/resourcegroupname/providers/Microsoft.ManagedNetworkFabric/l3IsolationDomains/example-l3domain"
    ]
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureNetworkFabricManagementServiceAPI(
    credential,
    subscriptionId
  );
  const result = await client.internalNetworks.beginClearIpv6NeighborsAndWait(
    resourceGroupName,
    l3IsolationDomainName,
    internalNetworkName,
    body
  );
  console.log(result);
}

async function main() {
  internalNetworksClearIpv6NeighborsMaximumSetGen();
}

main().catch(console.error);
