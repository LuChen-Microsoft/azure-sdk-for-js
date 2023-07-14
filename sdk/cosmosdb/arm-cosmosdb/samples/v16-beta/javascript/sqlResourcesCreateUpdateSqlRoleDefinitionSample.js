/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { CosmosDBManagementClient } = require("@azure/arm-cosmosdb");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Creates or updates an Azure Cosmos DB SQL Role Definition.
 *
 * @summary Creates or updates an Azure Cosmos DB SQL Role Definition.
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/preview/2023-03-15-preview/examples/CosmosDBSqlRoleDefinitionCreateUpdate.json
 */
async function cosmosDbSqlRoleDefinitionCreateUpdate() {
  const subscriptionId = process.env["COSMOSDB_SUBSCRIPTION_ID"] || "mySubscriptionId";
  const roleDefinitionId = "myRoleDefinitionId";
  const resourceGroupName = process.env["COSMOSDB_RESOURCE_GROUP"] || "myResourceGroupName";
  const accountName = "myAccountName";
  const createUpdateSqlRoleDefinitionParameters = {
    type: "CustomRole",
    assignableScopes: [
      "/subscriptions/mySubscriptionId/resourceGroups/myResourceGroupName/providers/Microsoft.DocumentDB/databaseAccounts/myAccountName/dbs/sales",
      "/subscriptions/mySubscriptionId/resourceGroups/myResourceGroupName/providers/Microsoft.DocumentDB/databaseAccounts/myAccountName/dbs/purchases",
    ],
    permissions: [
      {
        dataActions: [
          "Microsoft.DocumentDB/databaseAccounts/sqlDatabases/containers/items/create",
          "Microsoft.DocumentDB/databaseAccounts/sqlDatabases/containers/items/read",
        ],
        notDataActions: [],
      },
    ],
    roleName: "myRoleName",
  };
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const result = await client.sqlResources.beginCreateUpdateSqlRoleDefinitionAndWait(
    roleDefinitionId,
    resourceGroupName,
    accountName,
    createUpdateSqlRoleDefinitionParameters
  );
  console.log(result);
}

async function main() {
  cosmosDbSqlRoleDefinitionCreateUpdate();
}

main().catch(console.error);
