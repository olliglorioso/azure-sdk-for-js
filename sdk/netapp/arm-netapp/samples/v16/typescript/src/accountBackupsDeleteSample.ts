/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { NetAppManagementClient } from "@azure/arm-netapp";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Delete the specified Backup for a Netapp Account
 *
 * @summary Delete the specified Backup for a Netapp Account
 * x-ms-original-file: specification/netapp/resource-manager/Microsoft.NetApp/stable/2022-03-01/examples/Backups_Account_Delete.json
 */
async function accountBackupsDelete() {
  const subscriptionId = "D633CC2E-722B-4AE1-B636-BBD9E4C60ED9";
  const resourceGroupName = "resourceGroup";
  const accountName = "accountName";
  const backupName = "backupName";
  const credential = new DefaultAzureCredential();
  const client = new NetAppManagementClient(credential, subscriptionId);
  const result = await client.accountBackups.beginDeleteAndWait(
    resourceGroupName,
    accountName,
    backupName
  );
  console.log(result);
}

accountBackupsDelete().catch(console.error);
