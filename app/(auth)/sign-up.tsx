import { RouteButton, InputBox, InLine, Checkbox } from "@/components/ui";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function SignUp(){
    return(
        <View>
            <Text className="font-bold text-3xl text-center my-6 ">
                FlavaQuest
            </Text>

            <InputBox
                placeholder="example@email.com"
                title="Email"
                textStyles="text-gray-500 px-4 absolute ml-8 mt-2 bg-gray-100"
            />

            <InputBox
                placeholder="Password"
                title="Password"
                textStyles="text-gray-500 px-4 absolute ml-8 mt-2 bg-gray-100"
            />

            <InputBox
                placeholder="Password"
                title="Confirm Password"
                textStyles="text-gray-500 px-4 absolute ml-8 mt-2 bg-gray-100"
            />

            <InLine
                leftText="Remember me"
                rightText=""
                container="mx-4"
                checkBox={<Checkbox/>}
            />

            <RouteButton
                text="Sign Up"
                route="../(tabs)"
            />

            <View className="justify-center p-4 my-4">
                <View>
                    <View className="border">
                    </View>
                </View>
                <View className=" absolute w-screen items-center ">
                    <Text className="text-xl bg-gray-100 p-2">
                        or
                    </Text>
                </View>
            </View>

            <RouteButton
                text="Sign up with Google"
                route="../(tabs)"
            />

            <RouteButton
                text="Sign up with Apple"
                route="../(tabs)"
            />

            <RouteButton
                text="Sign up with Facebook"
                route="../(tabs)"
            />

            <Text className="text-center my-8">
                Already have an account? <Link href={"/(auth)/sign-in"} className="font-bold">Sign In</Link>
            </Text>

        </View>
    );
}