import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "../global.css"

export default function RootLayout() {
    return (
        <>
            <Stack>
                <Stack.Screen name="(auth)" options={{ headerShown: false }} />
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                <Stack.Screen name="+not-found" />
            </Stack>
            <StatusBar backgroundColor='#161622' style='dark' />
        </>
    );

}
