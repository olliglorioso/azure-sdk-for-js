/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { MySQLManagementFlexibleServerClient } from "@azure/arm-mysql-flexible";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to List all the backups for a given server.
 *
 * @summary List all the backups for a given server.
 * x-ms-original-file: specification/mysql/resource-manager/Microsoft.DBforMySQL/stable/2021-05-01/examples/BackupsListByServer.json
 */
async function listBackupsForAServer() {
  const subscriptionId = "ffffffff-ffff-ffff-ffff-ffffffffffff";
  const resourceGroupName = "TestGroup";
  const serverName = "mysqltestserver";
  const credential = new DefaultAzureCredential();
  const client = new MySQLManagementFlexibleServerClient(
    credential,
    subscriptionId
  );
  const resArray = new Array();
  for await (let item of client.backups.listByServer(
    resourceGroupName,
    serverName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

listBackupsForAServer().catch(console.error);
