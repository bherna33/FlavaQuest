import { ProfileLink } from "@/components";
import { SafeAreaView, Text, View } from "react-native";

export default function Profile() {
	return (
		<SafeAreaView className="flex-1">
			<Text className="text-6xl font-bold p-4">
				Settings
			</Text>
			<View className="flex-1 bg-gray-300 ">
				<Text className="text-4xl font-bold px-4 pt-4">
					General 
				</Text>

				<ProfileLink
					text="Account Information"
					icon="🔼"
				/>
				<ProfileLink
					text="Account Information"
					icon="🔼"
				/>
				<ProfileLink
					text="Account Information"
					icon="🔼"
				/>
				<ProfileLink
					text="Account Information"
					icon="🔼"
				/>
				<ProfileLink
					text="Account Information"
					icon="🔼"
				/>

				<Text className="text-4xl font-bold px-4 pt-4">
					Support 
				</Text>
				
				<ProfileLink
					text="Account Information"
					icon="🔼"
				/>
				<ProfileLink
					text="Account Information"
					icon="🔼"
				/>
				<ProfileLink
					text="Account Information"
					icon="🔼"
				/>
			</View>
		</SafeAreaView>
	);
}
