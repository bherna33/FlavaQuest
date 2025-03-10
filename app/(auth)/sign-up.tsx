import { RouteButton, InputBox, InLine } from "@/components/ui";
import { Link } from "expo-router";
import { Text, View, TextInput } from "react-native";

export default function SignUp(){
    return(
        <View className="bg-white">
            <Text className="font-bold text-3xl text-center my-6">
                FlavaQuest
            </Text>

            <InputBox
                placeholder="example@email.com"
                title="Email"
                textStyles="text-gray-500 px-4 absolute ml-8 mt-2 bg-white" 
            />

            <InputBox
                placeholder="Password"
                title="Password"
                textStyles="text-gray-500 px-4 absolute ml-8 mt-2 bg-white" 
            />

            <InputBox
                placeholder="Password"
                title="Confirm Password"
                textStyles="text-gray-500 px-4 absolute ml-8 mt-2 bg-white" 
            />

            <InLine
                leftText="Remember me"
                leftTextStyle=""
                rightText=""
                rightTextStyle=""
            /> 

            <RouteButton 
                text="Sign Up"
                route="../(tabs)"
            />

            <Text className="text-center text-xl my-8">
                -or-
            </Text>

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