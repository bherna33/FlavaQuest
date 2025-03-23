import { Stack } from "expo-router";
import { SafeAreaView } from "react-native";

export default function AuthLayout(){
    return (
        <SafeAreaView className="flex-1">
            <Stack>
                <Stack.Screen name="index" options={{ headerShown: false }} />
                <Stack.Screen name="sign-in" options={{ headerShown: false }} />
                <Stack.Screen name="sign-up" options={{ headerShown: false }} />
                {/* <Stack.Screen name="+not-found" /> */}
            </Stack>
        </SafeAreaView>
    );
}