import { Stack } from 'expo-router';
import { ContextProvider } from './providers/ContextProvider';

export default function RootLayout() {
  return (
    <ContextProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="index" />
        <Stack.Screen name="test" />
        <Stack.Screen name="+not-found" />
      </Stack>
    </ContextProvider>
  );
}
