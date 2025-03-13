import { FontAwesome6 } from "@expo/vector-icons";
import {
  Image,
  StyleSheet,
  Platform,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Text,
  View,
  Touchable,
  Pressable,
  Dimensions,
  FlatList,
  ImageBackground,
  Animated,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import LottieView from "lottie-react-native";
import Carousel from "react-native-reanimated-carousel";
import { useEffect, useRef, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useRouter } from "expo-router";
import { mainColor } from "@/constants/Colors";

const ListData = [
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
    id: "10",
    category: "Wildlife",
    title: "Sundarbans Tiger Safari",
    location: "Sundarbans",
    image:
      "https://www.sundarbanwildlifetourism.com/wp-content/uploads/2022/06/tiger-safari-india.jpg",
  },
  {
    id: "1",
    category: "Hill Stations",
    title: "Darjeeling Himalayan Retreat",
    location: "Darjeeling",
    image:
      "https://media.istockphoto.com/id/896324660/photo/toy-train.jpg?s=612x612&w=0&k=20&c=z2BYZhzj3RhUNSfDeAnFwfkm-jPU-CNU4lTdQxRqMQM=",
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
];

const ListDatas = [
  {
    id: "28",
    category: "Beaches",
    title: "Durgapur",
    location: "Durgapur",
    image:
      "https://s7ap1.scene7.com/is/image/incredibleindia/2-durgapur-steel-plant-durgapur-west-bengal-city-hero?qlt=82&ts=1726643819222",
  },
  {
    id: "29",
    category: "Beaches",
    title: "kharagpur",
    location: "kharagpur",
    image:
      "https://www.sikareducationhub.in/wp-content/uploads/2025/01/kgp_bg-1030x687.jpg",
  },
  {
    id: "10",
    category: "Wildlife",
    title: "Sundarbans Tiger Safari",
    location: "Asansol",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/24/IMG_asnrlyjn.jpg",
  },
  {
    id: "1",
    category: "Hill Stations",
    title: "Haldia",
    location: "Haldia",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/32/Jamnagar_Refinery.jpg",
  },
  {
    id: "11",
    category: "Wildlife",
    title: "Gorumara National Park",
    location: "Bolpur",
    image:
      "https://i0.wp.com/traveldreams.live/wp-content/uploads/2023/02/4.jpg?resize=840%2C560&ssl=1",
  },
  {
    id: "12",
    category: "Wildlife",
    title: "Jaldapara Wildlife Sanctuary",
    location: "Berhampore",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/0/04/Maa_Dayamoyee_Kalibari_at_Berhampore_in_Murshidabad_district_04.jpg",
  },
];
const data = [
  {
    id: 1,
    title: "City Rides",
    image: "https://static.toiimg.com/photo/107166486.cms",
  },
  {
    id: 2,
    title: "Rentals",
    image:
      "https://media.istockphoto.com/id/1175862440/photo/family-enjoying-summer-picnic-in-the-nature-stock-photo.jpg?s=612x612&w=0&k=20&c=royTmUhsW1MN82lq7w2WHVQhPzOdRbulonyiaBv5g1k=",
  },
  {
    id: 3,
    title: "Airport Rides",
    image:
      "https://d1hk373emqoob6.cloudfront.net/media/images/rental-cars.width-600.jpg",
    // description:'ONE RENTAL FOR ALL YOUR LOCATION'
  },
];
const listItem = [
  {
    id: 3,
    title: "Schedule Intercity",
    image:
      "https://quickride.in/quickRideHomeLandingPage/taxiAssets/rentalImage.png",
    // description:'ONE RENTAL FOR ALL YOUR LOCATION'
  },
  {
    id: 1,
    title: "Now in Kolkata",
    image:
      "https://blog.uber-cdn.com/cdn-cgi/image/width=2160,quality=80,onerror=redirect,format=auto/wp-content/uploads/2018/08/Screen-Shot-2018-08-27-at-11.42.41-AM-1024x510.png",
  },
  // {
  //   id: 3,
  //   title: "Schedule Intercity",
  //   image:
  //     "https://quickride.in/quickRideHomeLandingPage/taxiAssets/rentalImage.png",
  //   // description:'ONE RENTAL FOR ALL YOUR LOCATION'
  // },
  {
    id: 2,
    title: "Schedule City Rides",
    image:
      "https://media.assettype.com/outlooktraveller%2Fimport%2Foutlooktraveller%2Fpublic%2Fuploads%2Farticles%2Ftravelnews%2Fa1.jpg?w=480&auto=format%2Ccompress&fit=max",
  },

  {
    id: 4,
    title: "Schedule Rentals",
    image:
      "https://s3-eu-west-1.amazonaws.com/carla-blog-images-webp/uber-car-rental-ridesharing.webp",
    // description:'ONE RENTAL FOR ALL YOUR LOCATION'
  },
  {
    id: 5,
    title: "Book for Someone else",
    image:
      "https://t4.ftcdn.net/jpg/05/08/07/71/360_F_508077111_ZHFjcVoXe5QGIcwY1GOcCGcru7AmeLiC.jpg",
    // description:'ONE RENTAL FOR ALL YOUR LOCATION'
  },
  {
    id: 6,
    title: "Schedule Airport Rides",
    image:
      "https://media.istockphoto.com/id/696113732/photo/the-back-of-an-airplane-to-take-off.jpg?s=612x612&w=0&k=20&c=_gz8147mDBeJP-EZ5f-yYfOV62LdcT3kJ6bAUHlslog=",
    // description:'ONE RENTAL FOR ALL YOUR LOCATION'
  },
  {
    id: 7,
    title: "Schedule City Tour",
    image:
      "https://media.istockphoto.com/id/1005830448/photo/howrah-bridge.jpg?s=612x612&w=0&k=20&c=g5Zbl2IKWsKdkrxxfDs4zSYQjStH0xvNuq0pc6WH_vk=",
    // description:'ONE RENTAL FOR ALL YOUR LOCATION'
  },
  {
    id: 8,
    title: "Add Multiple Stops",
    image:
      "https://media.istockphoto.com/id/1483218108/photo/happy-smiling-family-with-sibling-kids-standing-in-front-of-car-for-picnic-by-looking-camera.jpg?s=612x612&w=0&k=20&c=UfuvkCGrCkyL8XnEoORur4c4e_2eGHLQlCM0reRIYec=",
    // description:'ONE RENTAL FOR ALL YOUR LOCATION'
  },
];
const { width } = Dimensions.get("window");
export default function HomeScreen() {
  const navigation = useNavigation();
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(0);
  const fadeAnim1 = useRef(new Animated.Value(0)).current;
  const fadeAnim2 = useRef(new Animated.Value(0)).current;
  const fadeAnim3 = useRef(new Animated.Value(0)).current;

  const translateY1 = useRef(new Animated.Value(10)).current;
  const translateY2 = useRef(new Animated.Value(10)).current;
  const translateY3 = useRef(new Animated.Value(10)).current;

  useEffect(() => {
    const animateText = (fadeAnim, translateY, delay) => {
      return Animated.loop(
        Animated.sequence([
          Animated.delay(delay),
          Animated.parallel([
            Animated.timing(fadeAnim, {
              toValue: 1,
              duration: 800,
              useNativeDriver: true,
            }),
            Animated.timing(translateY, {
              toValue: 0,
              duration: 800,
              useNativeDriver: true,
            }),
          ]),
          Animated.delay(1000), // Stay visible for some time
          Animated.parallel([
            Animated.timing(fadeAnim, {
              toValue: 0,
              duration: 800,
              useNativeDriver: true,
            }),
            Animated.timing(translateY, {
              toValue: -10,
              duration: 800,
              useNativeDriver: true,
            }),
          ]),
        ])
      ).start();
    };

    animateText(fadeAnim1, translateY1, 0);
    animateText(fadeAnim2, translateY2, 800);
    animateText(fadeAnim3, translateY3, 1600);
  }, []);
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView
        style={{ flex: 1, backgroundColor: "white" }}
        keyboardShouldPersistTaps="handled"
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("bookingScreen")}
          style={{
            // flex: 0.5,
            backgroundColor: "#0045FF",
            justifyContent: "center",
            alignItems: "center",
            // borderBottomLeftRadius: 10,
            // borderBottomRightRadius: 10,
            shadowColor: "#2C66E3",
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.2,
            shadowRadius: 5,
            height: 240,
            // Shadow for Android
            elevation: 5,
          }}
        >
          {/* <View style={{ marginTop: 90 }}>
            <Text
              style={{ color: "#fff", fontFamily: "Poppins", fontSize: 12.5 }}
            >
              Reliable Pricing | Effortless Booking | Simplicity{" "}
            </Text>
          </View> */}
          <View
            style={{
              marginTop: 60,
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <Animated.Text
              style={{
                color: "#fff",
                fontFamily: "Poppins_Regular",
                fontSize: 12.5,
                opacity: fadeAnim1,
                transform: [{ translateY: translateY1 }],
              }}
            >
              Reliable Pricing{" "}
            </Animated.Text>

            <Animated.Text
              style={{
                color: "#fff",
                fontFamily: "Poppins_Regular",
                fontSize: 12.5,
                opacity: fadeAnim2,
                transform: [{ translateY: translateY2 }],
              }}
            >
              | Effortless Booking{" "}
            </Animated.Text>

            <Animated.Text
              style={{
                color: "#fff",
                fontFamily: "Poppins_Regular",
                fontSize: 12.5,
                opacity: fadeAnim3,
                transform: [{ translateY: translateY3 }],
              }}
            >
              | Simplicity
            </Animated.Text>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: "#fff",
              width: "70%",
              marginTop: 8,
              flexDirection: "row",
              padding: 12,
              borderRadius: 10,
              alignContent: "center",
              shadowColor: "#2C66E3",
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.2,
              shadowRadius: 5,

              // Shadow for Android
              // elevation: 5,
            }}
          >
            <Text
              style={{
                color: "#878ca8",
                alignContent: "center",
                fontFamily: "Poppins_Regular",
              }}
            >
              Introducing
            </Text>
            <Text
              style={{
                marginLeft: 5,
                alignContent: "center",
                // fontWeight: "bold",
                color: "#435b8e",
                fontFamily: "Poppins_Medium",
              }}
            >
              Seamless Rides
            </Text>
          </TouchableOpacity>
          <Text
            style={{
              color: "#fff",
              fontFamily: "Poppins_Regular",
              marginLeft: 120,
              marginTop: 3,
              fontSize: 10,
            }}
          >
            *Gold Standard of Ride
          </Text>
          <View
            style={{
              // backgroundColor: "grey",
              width: "90%",
              // height: 80,
              top: 15,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {[
              {
                title: "Outstation",
                rideLottie: require("../../assets/A3.json"),
              },
              {
                title: "Round Trip",
                rideLottie: require("../../assets/A2.json"),
              },
              {
                title: "Airport Rides",
                rideLottie: require("../../assets/AirportRide.json"),
              },
            ]?.map((item, index) => {
              return (
                <View
                  style={{
                    height: "80%",
                    width: "30%",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "white",
                    margin: 10,
                    borderRadius: 10,
                    // shadowColor: "#2C66E3",
                    // shadowOffset: { width: 0, height: 4 },
                    // shadowOpacity: 0.2,
                    // shadowRadius: 5,

                    // // Shadow for Android
                    // elevation: 5,
                    borderColor: "#dbdbdb75",
                    borderWidth: 1.5,
                  }}
                >
                  <View
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {/* <View
                      style={{
                        flex: 0.3,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      {index == 1 && (
                        <Text
                          style={{
                            fontSize: 11,
                            color: "#212529",
                            marginTop: 3,
                          }}
                        >
                          Extra slots
                        </Text>
                      )}{" "}
                      {index == 2 && (
                        <Text style={{ fontSize: 11, marginTop: 3 }}>
                          Upto 50% off
                        </Text>
                      )}
                    </View> */}
                    {/* fffr */}
                    <View
                      style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                        // backgroundColor: "red",
                      }}
                    >
                      <LottieView
                        source={item.rideLottie} // Replace with your JSON file path
                        // source={require("../../assets/AirportRide.json")}
                        autoPlay
                        loop
                        style={{
                          alignContent: "center",
                          width: 80,
                          height: 100,
                        }} // Adjust size
                      />
                    </View>
                    <Text
                      style={{
                        // fontWeight: "bold",
                        color: "#435890",
                        flex: 0.3,
                        justifyContent: "center",
                        alignItems: "center",
                        fontSize: 11,
                        fontFamily: "Poppins_Medium",
                      }}
                    >
                      {item?.title}
                    </Text>
                  </View>
                </View>
              );
            })}
          </View>
        </TouchableOpacity>

        <View
          style={{
            // flex: 1,
            marginTop: 30,
            justifyContent: "center",
            alignItems: "center",
            // marginBottom: 105,
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("zingDarshan")}
            style={{
              // flex: 0.3,
              // height: "20%",
              width: "95%",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#F5FEFF",
              margin: 10,
              borderRadius: 10,
              shadowColor: "#2C66E3",
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.2,
              shadowRadius: 5,
              height: 40,
              // Shadow for Android
              elevation: 5,
              marginTop: 10,
              // padding:10,
            }}
          >
            <View
              style={{
                flex: 0.6,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                // backgroundColor: "red",
              }}
            >
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  // backgroundColor: "black",
                  alignItems: "center",
                  justifyContent: "center",
                  alignContent: "center",
                }}
              >
                <LottieView
                  source={require("../../assets/Location.json")} // Replace with your JSON file path
                  // source={require("../../assets/AirportRide.json")}
                  autoPlay
                  loop
                  style={{
                    alignContent: "center",
                    width: 30,
                    height: 100,
                    alignSelf: "center",
                  }} // Adjust size
                />
              </View>
              <View
                style={{
                  flex: 4,
                  flexDirection: "column",
                }}
              >
                <Text
                  style={{
                    color: "#3366CF",
                    // fontWeight: "600",
                    fontFamily: "Poppins_Medium",
                    fontSize: 13,
                  }}
                >
                  Explore Bengal like never before
                </Text>
              </View>
              <View
                style={{
                  flex: 0.8,
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <AntDesign name="arrowright" size={15} color="#3366CF" />
              </View>
            </View>
          </TouchableOpacity>

          <View style={{ height: 120 }}>
            <FlatList
              data={ListData}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ item, index }) => {
                return (
                  <View
                    style={{
                      marginHorizontal: 0,
                      padding: 10,
                      height: 120,
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "#E0F2FE",
                    }}
                  >
                    <TouchableOpacity
                      style={{ justifyContent: "center", alignItems: "center" }}
                      onPress={() =>
                        navigation.navigate("bookingScreen", {
                          bookingData: item,
                        })
                      }
                    >
                      <View
                        style={{
                          // width: 90, // Slightly larger than the image
                          // height: 90, // Slightly larger than the image
                          borderRadius: 50, // Same as the image to create a perfect circle
                          borderWidth: 2,
                          borderColor: "#dbdbdb75", // Semi-transparent border
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Image
                          source={{ uri: item.image }}
                          style={{
                            width: 80,
                            height: 80,
                            borderRadius: 50,
                            borderWidth: 5,
                            borderColor: "#fff",
                            // elevation: 5,
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        />
                      </View>

                      <Text
                        style={{
                          paddingTop: 8,
                          fontFamily: "Poppins_Regular",
                          fontSize: 11,
                          fontWeight: "600",
                        }}
                      >
                        {item?.location}
                      </Text>
                    </TouchableOpacity>
                  </View>
                );
              }}
              keyExtractor={(item) => item.id}
            />
          </View>
          <View
            style={{ borderRadius: 0.5, width: "100%", height: 1, padding: 1 }}
          ></View>
          <View style={{ height: 90 }}>
            <FlatList
              data={ListDatas}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ item, index }) => {
                return (
                  <View
                    style={{
                      marginHorizontal: 0,
                      padding: 10,
                      height: 90,
                      justifyContent: "center",
                      alignItems: "center",
                      // backgroundColor: "#E0F2FE",
                      // elevation:1
                    }}
                  >
                    <TouchableOpacity
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
                        shadowColor: "#2C66E3",
                        shadowOffset: { width: 0, height: 4 },
                        shadowOpacity: 0.2,
                        shadowRadius: 5,
                        elevation: 5,
                      }}
                      onPress={() =>
                        navigation.navigate("bookingScreen", {
                          bookingData: item,
                        })
                      }
                    >
                      <View
                        style={{
                          // width: 90, // Slightly larger than the image
                          // height: 90, // Slightly larger than the image
                          borderRadius: 50, // Same as the image to create a perfect circle
                          borderWidth: 2,
                          borderColor: "#dbdbdb75", // Semi-transparent border
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Image
                          source={{ uri: item.image }}
                          style={{
                            width: 40,
                            height: 40,
                            borderRadius: 50,
                            borderWidth: 1,
                            borderColor: "#fff",
                            // elevation: 5,
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        />
                      </View>
                      <Text
                        style={{
                          paddingTop: 8,
                          fontFamily: "Poppins_Regular",
                          fontSize: 12.5,
                          // fontWeight: "600",
                        }}
                      >
                        {item?.location}
                      </Text>
                    </TouchableOpacity>
                  </View>
                );
              }}
              keyExtractor={(item) => item.id}
            />
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("bookingScreen")}
            style={{
              // flex: 0.3,
              // height: "20%",
              width: "95%",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#f9faff",
              margin: 10,
              borderRadius: 10,
              shadowColor: "#2C66E3",
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.2,
              shadowRadius: 5,
              height: 120,
              // Shadow for Android
              elevation: 5,
              marginTop: 5,
              // borderColor: "#2C66E3",
              // borderWidth: 0.5,
            }}
          >
            <View
              style={{
                flex: 0.6,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                // backgroundColor: "red",
              }}
            >
              <View
                style={{
                  flex: 2,
                  flexDirection: "row",
                  // backgroundColor: "black",
                  alignItems: "center",
                  justifyContent: "center",
                  alignContent: "center",
                }}
              >
                <LottieView
                  source={require("../../assets/ExpressCar.json")} // Replace with your JSON file path
                  // source={require("../../assets/AirportRide.json")}
                  autoPlay
                  loop
                  style={{
                    alignContent: "center",
                    width: 80,
                    height: 100,
                    alignSelf: "center",
                  }} // Adjust size
                />
              </View>
              <View style={{ flex: 4, flexDirection: "column" }}>
                <Text
                  style={{ color: "#545A75", fontFamily: "Poppins_Medium" }}
                >
                  Need a Ride? Just Zing It!
                </Text>
                <Text
                  style={{
                    color: "#8292B6",
                    fontFamily: "Poppins_Regular",
                    fontSize: 11,
                  }}
                >
                  Experience gold standard
                </Text>
              </View>
              <View
                style={{
                  flex: 0.8,
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <AntDesign name="right" size={15} color="#2d78ff" />
              </View>
            </View>

            <View
              style={{
                flex: 0.01,
                backgroundColor: "#dbdbdb75",
                height: "10%",
                width: "90%",
              }}
            ></View>
            <TouchableOpacity
              onPress={() => navigation.navigate("bookingScreen")}
              style={{
                flex: 0.3,
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              <Text
                style={{
                  justifyContent: "center",
                  alignContent: "center",
                  // fontWeight: "bold",
                  color: mainColor,
                  alignSelf: "center",
                  fontFamily: "Poppins_Medium",
                }}
              >
                Book Now
              </Text>
            </TouchableOpacity>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              height: 200,
              width: "95%",
              borderRadius: 10,
              // borderRadius: 10,
              // shadowColor: "#a49c9c",
              // shadowOffset: { width: 0, height: 4 },
              // shadowOpacity: 0.2,
              // shadowRadius: 5,
              // // height: 120,
              // // Shadow for Android
              // elevation: 5,
              marginTop: 3,

              justifyContent: "center",
              // alignItems: "center",
              backgroundColor: "#f9faff",
              margin: 10,

              shadowColor: "#2C66E3",
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.2,
              shadowRadius: 5,

              // Shadow for Android
              elevation: 5,
            }}
            onPress={() => {
              try {
                navigation.navigate("howItWorks");
              } catch (e) {
                console.log("E", e);
              }
            }}
          >
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Text
                style={{
                  fontSize: 18,
                  color: "#2d78ff",
                  fontFamily: "Poppins_Medium",
                  // fontWeight: "700",
                }}
              >
                Welcome to ZingCab
              </Text>
              <Text style={{ fontSize: 10, fontFamily: "Poppins_Regular" }}>
                Tap to see how ZingCab works
              </Text>
              <LottieView
                source={require("../../assets/SUV.json")}
                autoPlay
                loop
                style={{
                  alignContent: "center",
                  width: "100%",
                  height: 130,
                  alignSelf: "center",
                }}
              />
            </View>
          </TouchableOpacity>

          <View
            style={{
              // backgroundColor: "blue",
              height: 190,
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 10,
            }}
          >
            <Text
              style={{
                justifyContent: "flex-start",
                textAlign: "left",
                fontSize: 15,
                // fontWeight: "600",
                fontFamily: "Poppins_Bold",
              }}
            >
              Travel Smart with Zingcab!
            </Text>
            {/* <FlatList
              data={listItem}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <View
                  style={{
                    width: width * 0.7,
                    margin: 10,
                    borderRadius: 10,
                    overflow: "hidden",
                    alignSelf: "center",
                    justifyContent: "center",
                    // alignItems: "center",
                    backgroundColor: "#f9faff",

                    shadowColor: "#a49c9c",
                    shadowOffset: { width: 0, height: 4 },
                    shadowOpacity: 0.2,
                    shadowRadius: 5,

                    // Shadow for Android
                    elevation: 5,
                    padding: 10,
                  }}
                >
                  <Text
                    style={{
                      position: "absolute",
                      top: 10,
                      left: 10,
                      backgroundColor: "rgba(0,0,0,0.6)", // Semi-transparent background
                      color: "white",
                      paddingHorizontal: 8,
                      paddingVertical: 5,
                      borderRadius: 5,
                      fontWeight: "bold",
                      fontSize: 14,
                      marginTop: 10,
                    }}
                  >
                    {item.title}
                  </Text>

                  <Image
                    src={item.image}
                    style={{
                      alignContent: "center",
                      width: '100%',
                      height: '100%',
                      alignSelf: "center",
                      resizeMode: "contain", // Ensures the image scales properly
                    }}
                  />
                </View>
              )}
              horizontal
            /> */}
            <FlatList
              data={listItem}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <View style={styles.card}>
                  <ImageBackground
                    src={item.image}
                    style={styles.image}
                    resizeMode="cover" // Ensures the image covers the whole area
                  >
                    <Text style={styles.text}>{item.title}</Text>
                  </ImageBackground>
                </View>
              )}
              horizontal
            />
          </View>

          <Carousel
            loop
            width={width}
            height={270}
            autoPlay={true}
            autoPlayInterval={2000}
            data={data}
            scrollAnimationDuration={1000}
            mode="parallax"
            modeConfig={{
              parallaxScrollingScale: 0.9,
              parallaxScrollingOffset: 50,
            }}
            renderItem={({ item }) => (
              <View
                style={{
                  borderRadius: 15,
                  overflow: "hidden",
                  backgroundColor: "white",
                  shadowColor: "#2C66E3",
                  shadowOffset: { width: 0, height: 4 },
                  shadowOpacity: 0.2,
                  shadowRadius: 5,
                  elevation: 5,
                  alignItems: "center",
                  marginBottom: 40,
                }}
              >
                {/* <LottieView
                  source={item.image}
                  autoPlay
                  loop
                  style={{
                    alignContent: "center",
                    width: 80,
                    height: 100,
                    alignSelf: "center",
                  }}
                /> */}
                <Image
                  // source={{uri :item.image}}
                  source={{ uri: item.image }}
                  style={{
                    marginTop: 10,
                    alignContent: "center",
                    width: "80%",
                    height: "70%",
                    alignSelf: "center",
                    borderRadius: 10,
                  }}
                  resizeMode="cover" // Ensures the image covers the whole area
                />
                <Text
                  style={{
                    fontSize: 15,
                    // fontWeight: "bold",
                    color: "#435b8e",
                    textAlign: "center",
                    fontFamily: "Poppins_Medium",
                    // marginTop: 2,
                    // marginBottom: 10,
                  }}
                >
                  {item.title}
                </Text>
              </View>
            )}
          />
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    width: width * 0.7,
    margin: 10,
    borderRadius: 10,
    overflow: "hidden",
    alignSelf: "center",
    justifyContent: "center",
    backgroundColor: "#f9faff",
    shadowColor: "#2C66E3",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  image: {
    width: "100%",
    height: 150, // Fixed height for proper display
    justifyContent: "flex-start", // Aligns text at the top
  },
  text: {
    position: "absolute",
    top: 10,
    left: 10,
    backgroundColor: "rgba(0,0,0,0.6)", // Semi-transparent background
    color: "white",
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 5,
    fontWeight: "bold",
    fontSize: 14,
    fontFamily: "Poppins_Bold",
  },
});
// const styles = StyleSheet.create({
//   container: {
//     alignItems: "center",
//     justifyContent: "center",
//     paddingVertical: 20,
//   },
// card: {
//   borderRadius: 15,
//   overflow: "hidden",
//   backgroundColor: "white",
//   shadowColor: "#000",
//   shadowOffset: { width: 0, height: 4 },
//   shadowOpacity: 0.2,
//   shadowRadius: 5,
//   elevation: 5,
//   alignItems: "center",
// },
//   image: {
// width: "100%",
// height: 150,
// borderRadius: 10,
//   },
//   text: {
// fontSize: 15,
// fontWeight: "bold",
// color: "#435b8e",
// textAlign: "center",
// // marginTop: 2,
// marginBottom: 10,
//   },
// });
