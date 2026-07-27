import './style.css';
import { PrivacyScreen } from '@capawesome/capacitor-privacy-screen';

const log = document.getElementById('log');

function print(label, data) {
  log.hidden = false;
  log.textContent += `${label}: ${JSON.stringify(data)}\n`;
  log.scrollTop = log.scrollHeight;
}

document.getElementById('enable').addEventListener('click', async () => {
  await PrivacyScreen.enable();
  print('enable', 'done');
});

document.getElementById('disable').addEventListener('click', async () => {
  await PrivacyScreen.disable();
  print('disable', 'done');
});

document.getElementById('check').addEventListener('click', async () => {
  const { enabled } = await PrivacyScreen.isEnabled();
  print('isEnabled', { enabled });
});

await PrivacyScreen.addListener('screenshotTaken', () => {
  print('screenshotTaken', 'the user took a screenshot');
});
