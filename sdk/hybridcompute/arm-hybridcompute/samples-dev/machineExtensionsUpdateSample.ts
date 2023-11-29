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
  MachineExtensionUpdate,
  HybridComputeManagementClient
} from "@azure/arm-hybridcompute";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to The operation to create or update the extension.
 *
 * @summary The operation to create or update the extension.
 * x-ms-original-file: specification/hybridcompute/resource-manager/Microsoft.HybridCompute/preview/2023-06-20-preview/examples/extension/Extension_Update.json
 */
async function createOrUpdateAMachineExtension() {
  const subscriptionId =
    process.env["HYBRIDCOMPUTE_SUBSCRIPTION_ID"] || "{subscriptionId}";
  const resourceGroupName =
    process.env["HYBRIDCOMPUTE_RESOURCE_GROUP"] || "myResourceGroup";
  const machineName = "myMachine";
  const extensionName = "CustomScriptExtension";
  const extensionParameters: MachineExtensionUpdate = {
    type: "CustomScriptExtension",
    enableAutomaticUpgrade: true,
    publisher: "Microsoft.Compute",
    settings: {
      commandToExecute:
        'powershell.exe -c "Get-Process | Where-Object { $_.CPU -lt 100 }"'
    },
    typeHandlerVersion: "1.10"
  };
  const credential = new DefaultAzureCredential();
  const client = new HybridComputeManagementClient(credential, subscriptionId);
  const result = await client.machineExtensions.beginUpdateAndWait(
    resourceGroupName,
    machineName,
    extensionName,
    extensionParameters
  );
  console.log(result);
}

async function main() {
  createOrUpdateAMachineExtension();
}

main().catch(console.error);
