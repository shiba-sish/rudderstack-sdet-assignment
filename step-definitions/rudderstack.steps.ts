import { Given, When, Then } from '@wdio/cucumber-framework';
import { login, navigateToConnections, fetchDataPlaneURL, getWriteKey, sendEvent, getEventCounts } from '../support/apiUtils';

let dataPlaneURL: string;
let writeKey: string;

Given('I log in to Rudderstack dashboard', async () => {
  await login(process.env.EMAIL, process.env.PASSWORD);
});

Given('I navigate to the Connections page', async () => {
  await navigateToConnections();
});

Given('I fetch the Data Plane URL', async () => {
  dataPlaneURL = await fetchDataPlaneURL();
});

Given('I copy the Write Key from the HTTP Source', async () => {
  writeKey = await getWriteKey();
});

When('I send a test event using API', async () => {
  await sendEvent(dataPlaneURL, writeKey);
});

Then('I should see the event count in the Webhook Destination', async () => {
  const { delivered, failed } = await getEventCounts();
  console.log(`Delivered: ${delivered}, Failed: ${failed}`);
});
