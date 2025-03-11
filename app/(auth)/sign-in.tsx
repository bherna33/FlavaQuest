import { RouteButton, InputBox, InLine, Or } from "@/components/ui";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function SignIn(){
    return(
        <View>
            <Text className="font-bold text-3xl text-center my-6">
                FlavaQuest
            </Text>

            <Text className="text-2xl text-center m-6 px-10">
                Sign up or login below to start you Quest for Flavor!
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

            <InLine
                leftText="Remember me"
                leftTextStyle="absolute"
                rightText="Forgot Password?"
                rightTextStyle="text-sky-600 text-right"
                container="mx-4"
            /> 

            <RouteButton 
                text="Sign In"
                route="../(tabs)"
            />

            <Or/>

            <RouteButton 
                text="Sign in with Google"
                route="../(tabs)"
            />

            <RouteButton 
                text="Sign in with Apple"
                route="../(tabs)"
            />

            <RouteButton 
                text="Sign in with Facebook"
                route="../(tabs)"
            />

            <Text className="text-center my-8">
                Don't have an account? <Link href={"/(auth)/sign-up"} className="font-bold">Sign Up</Link>
            </Text>
            
        </View>
    );
}