import { Carousel, Culture } from "@/components/Culture";
import { Item, Recommended } from "@/components/Recommended";
import SearchBar from "@/components/SearchBar";
import Title from "@/components/Title";
import { Trending } from "@/components/Trending";
import { View, SafeAreaView, ScrollView} from "react-native";

export default function Index() {
    return (
		<ScrollView 
			showsVerticalScrollIndicator={false}
		>
			<SafeAreaView className="flex-1">
				<View>
					<Title
						title="Start Your Quest for Flavor! "
						className="font-bold text-4xl text-center m-4 py-4"
					/>
					<SearchBar
						placeholder="🔍 Search Foods, Drinks, Deserts"
						className="border-2 p-4 rounded-2xl m-4"
					/>

					<Trending
						imageStyles =""
						containerStyles="bg-gray-300 m-4 rounded-3xl h-64 shadow-sm"
						buttonStyles="border-2 m-4 p-3 rounded-2xl"
						titleStyles="text-3xl font-bold my-4 ml-5 "
						textStyles="text-2xl text-center"
						column="max-w-64 mt-5"
					/>

					<Carousel
						carouselStyles="rounded-xl"
						items={[
							<Culture
								title="Trinidad & Tobago"

							/>,

							<Culture
								title="Haiti"
							/>,

							<Culture
								title="Africa"
							/>,

							<Culture
								title="Jamaica"
							/>,

							<Culture
								title="Chinese"
							/>,

						]}
					/>

					<Recommended
						title="Recommended For You"
						titleStyle="text-2xl font-bold"
						subTitle="See All"
						subTitleStyle="mt-2"
						containerStyle="m-4"
					/>

					<Carousel
						items={[
							<Item
								foodName="Food Item"
							/>,
							<Item
								foodName="Food Item2"
							/>,
							<Item
								foodName="Food Item3"
							/>,
							<Item
								foodName="Food Item4"
							/>,
							<Item
								foodName="Food Item5"
							/>,
						]}
					/>

				</View>
			</SafeAreaView>
		</ScrollView>
    );
}
