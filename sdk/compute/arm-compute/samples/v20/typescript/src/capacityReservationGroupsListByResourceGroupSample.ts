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
  CapacityReservationGroupsListByResourceGroupOptionalParams,
  ComputeManagementClient
} from "@azure/arm-compute";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Lists all of the capacity reservation groups in the specified resource group. Use the nextLink property in the response to get the next page of capacity reservation groups.
 *
 * @summary Lists all of the capacity reservation groups in the specified resource group. Use the nextLink property in the response to get the next page of capacity reservation groups.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/ComputeRP/stable/2022-11-01/examples/capacityReservationExamples/CapacityReservationGroup_ListByResourceGroup.json
 */
async function listCapacityReservationGroupsInResourceGroup() {
  const subscriptionId =
    process.env["COMPUTE_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName =
    process.env["COMPUTE_RESOURCE_GROUP"] || "myResourceGroup";
  const expand = "virtualMachines/$ref";
  const options: CapacityReservationGroupsListByResourceGroupOptionalParams = {
    expand
  };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.capacityReservationGroups.listByResourceGroup(
    resourceGroupName,
    options
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  listCapacityReservationGroupsInResourceGroup();
}

main().catch(console.error);