import * as WebBrowser from 'expo-web-browser';

const handlePress = async () => {
  let result = await Promise.race([
    WebBrowser.openBrowserAsync('https://www.example.com'),
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error('Timeout opening browser')), 5000)
    ),
  ]);

  if (result instanceof Error) {
    console.error('Error opening browser:', result);
  } else {
    console.log('Result: ', result);
  }
};