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
  MsixImageURI,
  DesktopVirtualizationAPIClient
} from "@azure/arm-desktopvirtualization";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Expands and Lists MSIX packages in an Image, given the Image Path.
 *
 * @summary Expands and Lists MSIX packages in an Image, given the Image Path.
 * x-ms-original-file: specification/desktopvirtualization/resource-manager/Microsoft.DesktopVirtualization/preview/2021-09-03-preview/examples/MsixImage_Expand_Post.json
 */
async function msixImageExpand() {
  const subscriptionId = "daefabc0-95b4-48b3-b645-8a753a63c4fa";
  const resourceGroupName = "resourceGroup1";
  const hostPoolName = "hostpool1";
  const msixImageURI: MsixImageURI = { uri: "imagepath" };
  const credential = new DefaultAzureCredential();
  const client = new DesktopVirtualizationAPIClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.msixImages.listExpand(
    resourceGroupName,
    hostPoolName,
    msixImageURI
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

msixImageExpand().catch(console.error);
