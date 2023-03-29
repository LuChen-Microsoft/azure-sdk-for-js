/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { SqlManagementClient } from "@azure/arm-sql";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Gets a list of managed instances in a resource group.
 *
 * @summary Gets a list of managed instances in a resource group.
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2022-08-01-preview/examples/ManagedInstanceListByResourceGroup.json
 */
async function listManagedInstancesByResourceGroup() {
  const subscriptionId =
    process.env["SQL_SUBSCRIPTION_ID"] ||
    "20D7082A-0FC7-4468-82BD-542694D5042B";
  const resourceGroupName = process.env["SQL_RESOURCE_GROUP"] || "Test1";
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.managedInstances.listByResourceGroup(
    resourceGroupName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

/**
 * This sample demonstrates how to Gets a list of managed instances in a resource group.
 *
 * @summary Gets a list of managed instances in a resource group.
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2022-08-01-preview/examples/ManagedInstanceListByResourceGroupWithExpandEqualsAdministrators.json
 */
async function listManagedInstancesByResourceGroupWithExpandAdministratorsOrActivedirectory() {
  const subscriptionId =
    process.env["SQL_SUBSCRIPTION_ID"] ||
    "20D7082A-0FC7-4468-82BD-542694D5042B";
  const resourceGroupName = process.env["SQL_RESOURCE_GROUP"] || "Test1";
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.managedInstances.listByResourceGroup(
    resourceGroupName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  listManagedInstancesByResourceGroup();
  listManagedInstancesByResourceGroupWithExpandAdministratorsOrActivedirectory();
}

main().catch(console.error);
