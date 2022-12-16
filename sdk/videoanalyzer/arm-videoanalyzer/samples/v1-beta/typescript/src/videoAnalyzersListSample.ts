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
 * This sample demonstrates how to Lists the Video Analyzer accounts in the specified resource group.
 *
 * @summary Lists the Video Analyzer accounts in the specified resource group.
 * x-ms-original-file: specification/videoanalyzer/resource-manager/Microsoft.Media/preview/2021-11-01-preview/examples/video-analyzer-accounts-list-all-accounts.json
 */
async function listAllVideoAnalyzerAccounts() {
  const subscriptionId =
    process.env["VIDEOANALYZER_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName =
    process.env["VIDEOANALYZER_RESOURCE_GROUP"] || "contoso";
  const credential = new DefaultAzureCredential();
  const client = new VideoAnalyzerManagementClient(credential, subscriptionId);
  const result = await client.videoAnalyzers.list(resourceGroupName);
  console.log(result);
}

async function main() {
  listAllVideoAnalyzerAccounts();
}

main().catch(console.error);