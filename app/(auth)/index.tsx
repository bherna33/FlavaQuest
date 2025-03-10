import { RouteButton } from "@/components/ui/";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index(){
    return (
        <View>
            <Text className="font-bold text-5xl my-80 p-4 text-center ">
                FlavaQuest
            </Text>

            <RouteButton
                route="./sign-up"
                text="Sign Up"
                
            />

            <Link href={"/sign-in"} className="font-bold text-2xl text-center p-4 m-4">
                Sign In
            </Link>
        </View>
    );
}