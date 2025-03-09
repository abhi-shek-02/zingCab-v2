import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const categories = [
  {
    id: "1",
    name: "Hill Stations",
    image: "https://darjeelingyatra.com/uploads/lolegaon-750.jpg",
  },
  {
    id: "4",
    name: "Beaches",
    image:
      "https://www.travelescape.in/wp-content/uploads/2017/08/Digha-Beach.jpg",
  },
  {
    id: "9",
    name: "Wildlife",
    image:
      "https://media.istockphoto.com/id/949472768/photo/tiger-portrait.jpg?s=612x612&w=0&k=20&c=cPI-hIwXxLwRYcGW3HaC_3C6J_MMIE_BbMjI9Ac0XNE=",
  },
  {
    id: "2",
    name: "Heritage",
    image:
      "https://images.pexels.com/photos/10852670/pexels-photo-10852670.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    id: "3",
    name: "Spiritual",
    image:
      "https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/dakshineswar-kali-temple-sounak-ghosh.jpg",
  },

  {
    id: "5",
    name: "Friends",
    image:
      "https://www.shutterstock.com/image-photo/indian-friends-hangout-happy-concept-600w-458301829.jpg",
  },
  {
    id: "6",
    name: "Couple",
    image:
      "https://i.pinimg.com/736x/2e/56/66/2e56663e5b66dda4cd6c442d1348b470.jpg",
  },
  {
    id: "7",
    name: "Family",
    image:
      "https://i.pinimg.com/736x/05/54/42/05544299cfc18bbb9c7ae44964202939.jpg",
  },
  {
    id: "8",
    name: "Traveler",
    image:
      "https://thumbs.dreamstime.com/b/traveler-woman-enjoy-mountains-landscape-travel-concept-vacations-hiking-backpack-mountains-traveler-woman-enjoy-119582553.jpg",
  },
];

const events = [
  // Hill Stations
  {
    id: "1",
    category: "Hill Stations",
    title: "Darjeeling Himalayan Retreat",
    location: "Darjeeling",
    image:
      "https://media.istockphoto.com/id/896324660/photo/toy-train.jpg?s=612x612&w=0&k=20&c=z2BYZhzj3RhUNSfDeAnFwfkm-jPU-CNU4lTdQxRqMQM=",
  },
  {
    id: "2",
    category: "Hill Stations",
    title: "Kalimpong Escape",
    location: "Kalimpong",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7NL6mFhTtH8F74Zi_mtSj8j7qK495seTqhw&s",
  },
  {
    id: "3",
    category: "Hill Stations",
    title: "Sandakphu Trek",
    location: "Sandakphu",
    image: "https://trekinsikkim.in/sandakphu-trek/sandakphu-trek-route.webp",
  },
  {
    id: "4",
    category: "Hill Stations",
    title: "Kurseong Tea Gardens",
    location: "Kurseong",
    image:
      "https://media.istockphoto.com/id/482968725/photo/tea-plantation-landscape.jpg?s=612x612&w=0&k=20&c=-S_CYiX1_g4Xgo6Zyim-vJ-4K6htnyClaQyrNGKQ0B4=",
  },
  {
    id: "5",
    category: "Hill Stations",
    title: "Lava & Loleygaon",
    location: "Lava",
    image: "https://darjeelingyatra.com/uploads/lolegaon-750.jpg",
  },
  {
    id: "6",
    category: "Hill Stations",
    title: "Rishyap Hidden Paradise",
    location: "Rishyap",
    image: "https://im.whatshot.in/img/2022/Jul/hs9-1651819022-1657791393.jpg",
  },
  {
    id: "7",
    category: "Hill Stations",
    title: "Tinchuley Village",
    location: "Tinchuley",
    image: "https://dooars.info/wp-content/uploads/2019/03/Tinchuley-head.jpg",
  },
  {
    id: "8",
    category: "Hill Stations",
    title: "Mirik Lake & Orange Orchards",
    location: "Mirik",
    image: "https://northbengaltourism.com/images/darjeeling/mirik_780.jpg",
  },
  {
    id: "9",
    category: "Hill Stations",
    title: "Pedong Hills",
    location: "Pedong",
    image:
      "https://northbengaltourism.com/images/holiday/828x466_DARJEELING.jpg",
  },

  // Wildlife & National Parks
  {
    id: "10",
    category: "Wildlife",
    title: "Sundarbans Tiger Safari",
    location: "Sundarbans",
    image:
      "https://www.sundarbanwildlifetourism.com/wp-content/uploads/2022/06/tiger-safari-india.jpg",
  },
  {
    id: "11",
    category: "Wildlife",
    title: "Gorumara National Park",
    location: "Dooars",
    image:
      "https://www.shutterstock.com/image-photo/elephant-jaldapara-national-park-260nw-2310416677.jpg",
  },
  {
    id: "12",
    category: "Wildlife",
    title: "Jaldapara Wildlife Sanctuary",
    location: "Jaldapara",
    image:
      "https://www.travelchhutichhuti.com/blog/wp-content/uploads/2020/09/Jaldapara-1.png",
  },
  {
    id: "13",
    category: "Wildlife",
    title: "Buxa Tiger Reserve",
    location: "Buxa",
    image: "https://static.toiimg.com/photo/48189080.cms",
  },
  {
    id: "14",
    category: "Wildlife",
    title: "Neora Valley National Park",
    location: "Kalimpong",
    image:
      "https://s7ap1.scene7.com/is/image/incredibleindia/neora-valley-national-park-kalimpong-wb-1-attr-hero?qlt=82&ts=1726645079009",
  },
  {
    id: "15",
    category: "Wildlife",
    title: "Mahananda Wildlife Sanctuary",
    location: "Siliguri",
    image:
      "https://indiano.travel/wp-content/uploads/2023/08/Infront-of-Mahananda-Wildlife-Sanctuary-2.webp",
  },
  {
    id: "16",
    category: "Wildlife",
    title: "Singalila National Park",
    location: "Singalila",
    image:
      "https://www.holidify.com/images/cmsuploads/compressed/Landrover-Route-in-singalila-national-park_20180212172912.jpg",
  },

  // Heritage & Cultural Sites
  {
    id: "17",
    category: "Heritage",
    title: "Hazarduari Palace",
    location: "Murshidabad",
    image:
      "https://assets-news.housing.com/news/wp-content/uploads/2021/03/10174542/Hazarduari-Palace%E2%80%99s-construction-may-have-cost-16.50-lakh-gold-coins-shutterstock_379562728.jpg",
  },
  {
    id: "18",
    category: "Heritage",
    title: "Bishnupur Terracotta Temples",
    location: "Bishnupur",
    image:
      "https://i0.wp.com/traveldreams.live/wp-content/uploads/2020/11/nandlal-3-1.jpg?resize=1300%2C867&ssl=1",
  },
  {
    id: "19",
    category: "Heritage",
    title: "Cooch Behar Palace",
    location: "Cooch Behar",
    image: "https://static.toiimg.com/photo/64884124.cms",
  },
  {
    id: "20",
    category: "Heritage",
    title: "Rabindranath Tagore's Shantiniketan",
    location: "Shantiniketan",
    image:
      "https://en-media.thebetterindia.com/uploads/2016/08/Untitled-design-8-4.png",
  },
  {
    id: "21",
    category: "Heritage",
    title: "Victoria Memorial",
    location: "Kolkata",
    image:
      "https://images.pexels.com/photos/6210324/pexels-photo-6210324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: "22",
    category: "Heritage",
    title: "Marble Palace",
    location: "Kolkata",
    image:
      "https://res.cloudinary.com/kmadmin/image/upload/v1724217008/kiomoi/Marble_Palace_Mansion_7838.jpg",
  },

  // Spiritual Places
  {
    id: "23",
    category: "Spiritual",
    title: "Dakshineswar Kali Temple",
    location: "Kolkata",
    image:
      "https://m.media-amazon.com/images/I/6162207dCuL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: "24",
    category: "Spiritual",
    title: "Kalighat Temple",
    location: "Kolkata",
    image:
      "https://blog.yatradham.org/wp-content/uploads/2023/12/Kalighat-Temple-Kolkata.jpg",
  },
  {
    id: "25",
    category: "Spiritual",
    title: "Tarapith Temple",
    location: "Tarapith",
    image:
      "https://mcmscache.epapr.in/post_images/website_356/post_44985569/full.jpg",
  },
  {
    id: "26",
    category: "Spiritual",
    title: "Mayapur ISKCON Temple",
    location: "Mayapur",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/57/7d/ec/photo0jpg.jpg?w=1200&h=1200&s=1",
  },
  {
    id: "27",
    category: "Spiritual",
    title: "Belur Math",
    location: "Howrah",
    image:
      "https://kolkatatourism.travel/images/places-to-visit/headers/belur-math-kolkata-entry-fee-timings-holidays-reviews-header.jpg",
  },

  // Beaches & Coastal
  {
    id: "28",
    category: "Beaches",
    title: "Digha Beach",
    location: "Digha",
    image:
      "https://www.travelescape.in/wp-content/uploads/2017/08/Digha-Beach.jpg",
  },
  {
    id: "29",
    category: "Beaches",
    title: "Mandarmani Beach",
    location: "Mandarmani",
    image:
      "https://lekhakpravin.com/wp-content/uploads/2024/04/Mandarmani-Beach-Mandarmani-Sea-Beach.png",
  },
  {
    id: "30",
    category: "Beaches",
    title: "Bakkhali Beach",
    location: "Bakkhali",
    image:
      "https://www.holidify.com/images/cmsuploads/compressed/870_20200219134500.jpg",
  },

  // Adventure
  {
    id: "31",
    category: "Adventure",
    title: "Teesta River Rafting",
    location: "Teesta",
    image: "https://www.sikkimtourismindia.com/uploads/river-rafting.jpg",
  },
  {
    id: "32",
    category: "Adventure",
    title: "Rock Climbing in Susunia Hills",
    location: "Bankura",
    image:
      "https://www.shutterstock.com/editorial/image-editorial/N4zcY338MajaY3z2MTEzNg==/indian-rock-climber-makes-difficult-move-on-440nw-7621598a.jpg",
  },

  // City Tours
  {
    id: "33",
    category: "City Tour",
    title: "Kolkata Heritage Walk",
    location: "Kolkata",
    image:
      "https://media.tacdn.com/media/attractions-splice-spp-674x446/06/72/f7/b5.jpg",
  },
  {
    id: "34",
    category: "City Tour",
    title: "Science City Exploration",
    location: "Kolkata",
    image:
      "https://files.yappe.in/place/full/science-city-kolkata-1959515.webp",
  },
  {
    id: "35",
    category: "City Tour",
    title: "Howrah Bridge",
    location: "Kolkata",
    image:
      "https://s7ap1.scene7.com/is/image/incredibleindia/howrah-bridge-howrah-west-bengal-1-attr-hero?qlt=82&ts=1726642836188",
  },

  // Add more destinations to reach 100...
];

// Generate IDs dynamically
events.forEach((event, index) => (event.id = (index + 1).toString()));

const ZingDarshan = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Filter events based on selected category, show all if nothing is selected
  const filteredEvents = selectedCategory
    ? events.filter((event) => event.category === selectedCategory)
    : events;

  return (
    <View style={styles.container}>
      {/* Header */}
      {/* <Text style={styles.header}>BluSmart Darshan</Text> */}

      {/* Horizontal Category List */}
      <View style={{ backgroundColor: "#E0F2FE" }}>
        <FlatList
          data={categories}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                setSelectedCategory(
                  selectedCategory === item.name ? null : item.name
                )
              }
            >
              <View
                style={[
                  styles.categoryContainer,
                  selectedCategory === item.name && styles.selectedCategory,
                ]}
              >
                <Image
                  source={{ uri: item.image }}
                  style={styles.categoryImage}
                />
                <Text style={styles.categoryText}>{item.name}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>

      {/* Vertical Event List */}
      <FlatList
        data={filteredEvents}
        keyExtractor={(item) => item.id}
        windowSize={2}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.cardImage} />
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardLocation}>{item.location}</Text>
            <View
              style={{
                width: "100%",
                backgroundColor: "#E9F4FF",
                paddingVertical: 10,
                borderBottomEndRadius: 10,
                borderBottomLeftRadius: 10,
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  color: "#007AFF",
                }}
              >
                Tap to Explore
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F5F5F5", marginBottom: 100 },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 15,
    color: "#1E4DB7",
    // marginBottom: 20,
  },
  categoryContainer: {
    alignItems: "center",
    marginHorizontal: 10,
    padding: 5,
    paddingVertical: 20,
  },
  selectedCategory: { borderBottomWidth: 2, borderBottomColor: "#1E4DB7" },
  categoryImage: {
    width: 80,
    height: 80,
    borderRadius: 50,
    borderWidth: 5,
    borderColor: "#fff",
    elevation: 5,
  },
  categoryText: {
    marginTop: 5,
    fontSize: 12,
    fontWeight: "500",
    color: "#696E72",
  },
  card: {
    backgroundColor: "#FEFFFE",
    borderRadius: 10,
    margin: 10,
    // borderColor:'grey',
    // padding: 10,
    elevation: 3,
  },
  cardImage: {
    width: "100%",
    height: 150,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 5,
    color: "#333333",
    paddingLeft: 20,
    paddingTop: 5,
  },
  cardLocation: {
    fontSize: 14,
    color: "#AAAAAA",
    paddingLeft: 20,
    paddingBottom: 10,
  },
});

export default ZingDarshan;
