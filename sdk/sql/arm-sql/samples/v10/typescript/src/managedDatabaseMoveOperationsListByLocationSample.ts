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
  ManagedDatabaseMoveOperationsListByLocationOptionalParams,
  SqlManagementClient
} from "@azure/arm-sql";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Lists managed database move operations.
 *
 * @summary Lists managed database move operations.
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2022-05-01-preview/examples/ManagedDatabaseMoveOperationResultList.json
 */
async function getsAllManagedDatabaseMoveOperationsForSpecifiedSubscriptionResourceGroupAndLocation() {
  const subscriptionId =
    process.env["SQL_SUBSCRIPTION_ID"] ||
    "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = process.env["SQL_RESOURCE_GROUP"] || "rg1";
  const locationName = "westeurope";
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.managedDatabaseMoveOperations.listByLocation(
    resourceGroupName,
    locationName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

/**
 * This sample demonstrates how to Lists managed database move operations.
 *
 * @summary Lists managed database move operations.
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2022-05-01-preview/examples/ManagedDatabaseMoveOperationResultListMax.json
 */
async function getsTheLatestManagedDatabaseMoveOperationsForEachDatabaseUnderSpecifiedSubscriptionResourceGroupAndLocationFilteredByOperationType() {
  const subscriptionId =
    process.env["SQL_SUBSCRIPTION_ID"] ||
    "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = process.env["SQL_RESOURCE_GROUP"] || "rg1";
  const locationName = "westeurope";
  const filter = "Properties/Operation eq 'StartManagedInstanceDatabaseMove'";
  const options: ManagedDatabaseMoveOperationsListByLocationOptionalParams = {
    filter
  };
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.managedDatabaseMoveOperations.listByLocation(
    resourceGroupName,
    locationName,
    options
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

/**
 * This sample demonstrates how to Lists managed database move operations.
 *
 * @summary Lists managed database move operations.
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2022-05-01-preview/examples/ManagedDatabaseMoveOperationResultListLastOperations.json
 */
async function getsTheLatestManagedDatabaseMoveOperationsForEachDatabaseUnderSpecifiedSubscriptionResourceGroupAndLocation() {
  const subscriptionId =
    process.env["SQL_SUBSCRIPTION_ID"] ||
    "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = process.env["SQL_RESOURCE_GROUP"] || "rg1";
  const locationName = "westeurope";
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.managedDatabaseMoveOperations.listByLocation(
    resourceGroupName,
    locationName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  getsAllManagedDatabaseMoveOperationsForSpecifiedSubscriptionResourceGroupAndLocation();
  getsTheLatestManagedDatabaseMoveOperationsForEachDatabaseUnderSpecifiedSubscriptionResourceGroupAndLocationFilteredByOperationType();
  getsTheLatestManagedDatabaseMoveOperationsForEachDatabaseUnderSpecifiedSubscriptionResourceGroupAndLocation();
}

main().catch(console.error);
