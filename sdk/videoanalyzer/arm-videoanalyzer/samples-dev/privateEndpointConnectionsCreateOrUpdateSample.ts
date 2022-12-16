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
  PrivateEndpointConnection,
  VideoAnalyzerManagementClient
} from "@azure/arm-videoanalyzer";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Update private endpoint connection state under video analyzer account.
 *
 * @summary Update private endpoint connection state under video analyzer account.
 * x-ms-original-file: specification/videoanalyzer/resource-manager/Microsoft.Media/preview/2021-11-01-preview/examples/video-analyzer-private-endpoint-connection-put.json
 */
async function updatePrivateEndpointConnection() {
  const subscriptionId =
    process.env["VIDEOANALYZER_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName =
    process.env["VIDEOANALYZER_RESOURCE_GROUP"] || "contoso";
  const accountName = "contososports";
  const name = "10000000-0000-0000-0000-000000000000";
  const parameters: PrivateEndpointConnection = {
    privateLinkServiceConnectionState: {
      description: "Test description.",
      status: "Approved"
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new VideoAnalyzerManagementClient(credential, subscriptionId);
  const result = await client.privateEndpointConnections.createOrUpdate(
    resourceGroupName,
    accountName,
    name,
    parameters
  );
  console.log(result);
}

async function main() {
  updatePrivateEndpointConnection();
}

main().catch(console.error);