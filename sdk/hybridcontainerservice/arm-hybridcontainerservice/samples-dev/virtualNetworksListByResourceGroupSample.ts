/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { HybridContainerServiceClient } from "@azure/arm-hybridcontainerservice";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Lists the Hybrid AKS virtual networks by resource group
 *
 * @summary Lists the Hybrid AKS virtual networks by resource group
 * x-ms-original-file: specification/hybridaks/resource-manager/Microsoft.HybridContainerService/preview/2023-11-15-preview/examples/ListVirtualNetworkByResourceGroup.json
 */
async function listVirtualNetworkByResourceGroup() {
  const subscriptionId =
    process.env["HYBRIDCONTAINERSERVICE_SUBSCRIPTION_ID"] ||
    "a3e42606-29b1-4d7d-b1d9-9ff6b9d3c71b";
  const resourceGroupName =
    process.env["HYBRIDCONTAINERSERVICE_RESOURCE_GROUP"] ||
    "test-arcappliance-resgrp";
  const credential = new DefaultAzureCredential();
  const client = new HybridContainerServiceClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.virtualNetworks.listByResourceGroup(
    resourceGroupName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  listVirtualNetworkByResourceGroup();
}

main().catch(console.error);
