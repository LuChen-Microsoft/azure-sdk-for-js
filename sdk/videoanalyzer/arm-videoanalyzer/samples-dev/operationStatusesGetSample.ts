/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { VideoAnalyzerManagementClient } from "@azure/arm-videoanalyzer";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Get private endpoint connection operation status.
 *
 * @summary Get private endpoint connection operation status.
 * x-ms-original-file: specification/videoanalyzer/resource-manager/Microsoft.Media/preview/2021-11-01-preview/examples/video-analyzer-private-endpoint-connection-operation-status-by-id-terminal-state.json
 */
async function getStatusOfPrivateEndpointAsynchronousOperationWhenItIsCompleted() {
  const subscriptionId =
    process.env["VIDEOANALYZER_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName =
    process.env["VIDEOANALYZER_RESOURCE_GROUP"] || "contoso";
  const accountName = "contososports";
  const name = "D612C429-2526-49D5-961B-885AE11406FD";
  const operationId = "CDE44A33-DD32-4FFA-A1BC-601DC4D52B03";
  const credential = new DefaultAzureCredential();
  const client = new VideoAnalyzerManagementClient(credential, subscriptionId);
  const result = await client.operationStatuses.get(
    resourceGroupName,
    accountName,
    name,
    operationId
  );
  console.log(result);
}

async function main() {
  getStatusOfPrivateEndpointAsynchronousOperationWhenItIsCompleted();
}

main().catch(console.error);