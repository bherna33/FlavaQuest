import { Collections } from "@/src/components";
import { SearchBar } from "@/src/components/ui";
import { SafeAreaView, ScrollView, Text } from "react-native";

export default function Recipes() {
	return (
		<SafeAreaView className="flex-1">
			<Text className="p-4 text-3xl font-bold">
				Your Saved Recipes
			</Text>
			<SearchBar 
				placeholder="Search your recipes"
			/>
			<ScrollView>
				<Collections/>
				<Collections/>
				<Collections/>
			</ScrollView>
		</SafeAreaView>
	);
}