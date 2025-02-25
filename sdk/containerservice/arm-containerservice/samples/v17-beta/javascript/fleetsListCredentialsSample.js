/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { ContainerServiceClient } = require("@azure/arm-containerservice");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Lists the user credentials of a Fleet.
 *
 * @summary Lists the user credentials of a Fleet.
 * x-ms-original-file: specification/containerservice/resource-manager/Microsoft.ContainerService/preview/2022-06-02-preview/examples/Fleets_ListCredentialsResult.json
 */
async function listFleetCredentials() {
  const subscriptionId = "subid1";
  const resourceGroupName = "rg1";
  const fleetName = "fleet";
  const credential = new DefaultAzureCredential();
  const client = new ContainerServiceClient(credential, subscriptionId);
  const result = await client.fleets.listCredentials(resourceGroupName, fleetName);
  console.log(result);
}

listFleetCredentials().catch(console.error);
