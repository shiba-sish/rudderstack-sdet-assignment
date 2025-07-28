import axios from 'axios';

export async function login(email: string, password: string) {
  // Stub: Replace with Puppeteer/Playwright login if needed
}

export async function navigateToConnections() {
  // Stub: Navigate to connections page
}

export async function fetchDataPlaneURL(): Promise<string> {
  return 'https://example.dataplane.rudderstack.com';
}

export async function getWriteKey(): Promise<string> {
  return 'your_write_key_here';
}

export async function sendEvent(dataPlaneURL: string, writeKey: string) {
  const event = {
    userId: "test-user",
    event: "Test Event",
    properties: { test: true }
  };

  await axios.post(`${dataPlaneURL}/v1/track`, event, {
    headers: { Authorization: `Basic ${Buffer.from(writeKey + ':').toString('base64')}` }
  });
}

export async function getEventCounts(): Promise<{ delivered: number, failed: number }> {
  return { delivered: 1, failed: 0 };
}
