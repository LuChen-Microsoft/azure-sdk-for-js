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
  TriggerDataMoveRequest,
  RecoveryServicesBackupClient,
} from "@azure/arm-recoveryservicesbackup";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Triggers Data Move Operation on target vault
 *
 * @summary Triggers Data Move Operation on target vault
 * x-ms-original-file: specification/recoveryservicesbackup/resource-manager/Microsoft.RecoveryServices/stable/2024-04-01/examples/BackupDataMove/TriggerDataMove_Post.json
 */
async function triggerDataMove() {
  const subscriptionId =
    process.env["RECOVERYSERVICESBACKUP_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const vaultName = "target-rsv";
  const resourceGroupName =
    process.env["RECOVERYSERVICESBACKUP_RESOURCE_GROUP"] || "targetRG";
  const parameters: TriggerDataMoveRequest = {
    correlationId:
      "MTg2OTcyMzM4NzYyMjc1NDY3Nzs1YmUzYmVmNi04YjJiLTRhOTItOTllYi01NTM0MDllYjk2NjE=",
    dataMoveLevel: "Vault",
    sourceRegion: "USGov Iowa",
    sourceResourceId:
      "/subscriptions/04cf684a-d41f-4550-9f70-7708a3a2283b/resourceGroups/sourceRG/providers/Microsoft.RecoveryServices/vaults/source-rsv",
  };
  const credential = new DefaultAzureCredential();
  const client = new RecoveryServicesBackupClient(credential, subscriptionId);
  const result = await client.beginBMSTriggerDataMoveAndWait(
    vaultName,
    resourceGroupName,
    parameters,
  );
  console.log(result);
}

async function main() {
  triggerDataMove();
}

main().catch(console.error);
