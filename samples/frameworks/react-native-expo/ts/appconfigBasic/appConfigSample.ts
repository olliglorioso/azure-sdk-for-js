/**
 * @summary Demonstrates the CRUD operations on the configuration settings.
 */
import { AppConfigurationClient } from "@azure/app-configuration";

export async function runAppConfigSample() {
  console.log(`Running helloworld sample`);

  // Set the following environment variable or edit the value on the following line.
  const connectionString =
    process.env["APPCONFIG_CONNECTION_STRING"] || "<connection string>";
  const client = new AppConfigurationClient(connectionString);

  const greetingKey = "Samples:Greeting";

  await cleanupSampleValues([greetingKey], client);

  // creating a new setting
  console.log(`Adding in new setting ${greetingKey}`);
  await client.addConfigurationSetting({ key: greetingKey, value: "Hello!" });

  const newSetting = await client.getConfigurationSetting({ key: greetingKey });
  console.log(`${greetingKey} has been set to ${newSetting.value}`);

  // changing the value of a setting
  await client.setConfigurationSetting({ key: greetingKey, value: "Goodbye!" });

  const updatedSetting = await client.getConfigurationSetting({
    key: greetingKey,
  });
  console.log(`${greetingKey} has been set to ${updatedSetting.value}`);

  // removing the setting
  await client.deleteConfigurationSetting({ key: greetingKey });
  console.log(`${greetingKey} has been deleted`);

  await cleanupSampleValues([greetingKey], client);
}

async function cleanupSampleValues(
  keys: string[],
  client: AppConfigurationClient
) {
  const settingsIterator = client.listConfigurationSettings({
    keyFilter: keys.join(","),
  });

  for await (const setting of settingsIterator) {
    await client.deleteConfigurationSetting({
      key: setting.key,
      label: setting.label,
    });
  }
}
