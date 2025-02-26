import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    FlatList,
    ScrollView,
    KeyboardAvoidingView,
    Image,
    ImageBackground,
} from "react-native";
import React, { useState, useEffect } from "react";
import * as SecureStore from "expo-secure-store";
import { SafeAreaView } from "react-native-safe-area-context";
import DropDownPicker from "react-native-dropdown-picker";

const SignStudPartThree = ({ navigation }) => {
    const [date, setDate] = useState("09-10-2020");
    const [token, setToken] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userType, setUserType] = useState("");
    const [userId, setUserId] = useState(0);

    useEffect(() => {
        getValueFor("x-token");
    }, []);

    async function getValueFor(key) {
        let result = await SecureStore.getItemAsync(key);
        if (result) {
            setToken(result);
            decodeJwt(result);
        } else {
            alert("No values stored under that jwt-token.");
        }
    }

    // const decodeJwt = async (currentToken) => {
    // 	const decodedJwt = jwt_decode(currentToken);

    // 	if (decodedJwt.result.type !== null) {
    // 		if (decodedJwt.result.type === "Student") {
    // 			navigation.navigate("SignUpUserCredentialsStudent");
    // 			return;
    // 		} else if (decodedJwt.result.type === "Employee") {
    // 			navigation.navigate("SignUpUserCredentialsEmployee");
    // 			return;
    // 		} else {
    // 			navigation.navigate("SignUpUserCredentialsVisitor");
    // 			return;
    // 		}
    // 	}

    // 	setUserEmail(decodedJwt.result.email);
    // 	setUserType(decodedJwt.result.type);
    // 	setUserId(decodedJwt.result.id);
    // };

    const [studentNumber, setStudentNumber] = useState("");
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState([]);
    const [items, setItems] = useState([
        { label: "Moderna", value: "Moderna" },
        { label: "Pfizer-BioNTech", value: "Pfizer-BioNTech" },
        { label: "Oxford/AstraZeneca ", value: "Oxford/AstraZeneca " },

    ]);

    return (
        <SafeAreaView style={{ flex: 1,  }}>
            <View style={styles.mainContainer}>
                <View style={styles.header}>
                    <Image
                        source={require("../assets/reg3_identifier.png")}
                        resizeMode="contain"
                        style={{ width: "80%", height: "80%" }}
                    />
                </View>

                <View style={styles.bodyContainer}>

                    <View
                        style={{
                            width: "100%",
                            flex:1,
                            alignItems: "center",

                        }}
                    >
                        <Text style={styles.label}>1st Dose</Text>
                        <DropDownPicker
                        open={open}
                        value={value}
                        items={items}
                        setOpen={setOpen}
                        setValue={setValue}
                        setItems={setItems}
                        theme="LIGHT"
                        //multiple={true}
                        mode="BADGE"
                        listMode="SCROLLVIEW"
                        badgeDotColors={[
                            "#e76f51",
                            "#00b4d8",
                            "#e9c46a",
                            "##25cf41",
                            "#8ac926",
                            "#2536cf",
                            "#d11f99",
                        ]}
                        style={{ borderColor: "#28CD4199", }}
                    />

                     <Text style={styles.label}>Student no.{studentNumber}</Text>
                        <TextInput
                            placeholder="Student no."
                            defaultValue={""}
                            onChangeText={(text) => {
                                //	setStudentNumber(text);
                            }}
                            style={styles.input}
                        />
                         <Text style={styles.label}>2nd Dose</Text>
                               <DropDownPicker
                        open={open}
                        value={value}
                        items={items}
                        setOpen={setOpen}
                        setValue={setValue}
                        setItems={setItems}
                        theme="LIGHT"
                        //multiple={true}
                        mode="BADGE"
                        listMode="SCROLLVIEW"
                        badgeDotColors={[
                            "#e76f51",
                            "#00b4d8",
                            "#e9c46a",
                            "##25cf41",
                            "#8ac926",
                            "#2536cf",
                            "#d11f99",
                        ]}
                        style={{ borderColor: "#28CD4199", }}
                    />
                     <Text style={styles.label}>Student no.{studentNumber}</Text>
                        <TextInput
                            placeholder="Student no."
                            defaultValue={""}
                            onChangeText={(text) => {
                                //	setStudentNumber(text);
                            }}
                            style={styles.input}
                        />
                    </View>

                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: 'space-between',
                            alignItems:'center',
                            marginBottom: 30,
                           
                        }}
                    >
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate("Login");
                            }}
                            style={styles.backbutton}
                        >
                            <Image
                                source={require("../assets/back-icon.png")}
                                style={{ width: 60, height: 60 }}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate("SignStudPartTwo");
                            }}
                            style={styles.button}
                        >
                            <Text style={styles.buttonText}>Next</Text>
                        </TouchableOpacity>
                    </View>

                    

                    {/* {
                   error? 
                   <Text style={styles.errorMessage}>*{errorMessage}</Text>
                   :
                   <Text style={styles.errorMessage}></Text>
               } */}

                </View>

            </View>

        </SafeAreaView>
    );
};

export default SignStudPartThree;

const styles = StyleSheet.create({
    mainContainer: {
        height: '100%',
        backgroundColor: "#E1F5E4",
    },
    header: {
        width: "100%",
        height: "20%",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
    },
    bodyContainer: {
        height: '80%',
        paddingHorizontal: 40,
    }, label: {
        width: '100%',
        textAlign: "left",
        marginVertical:15
    }, input: {
        margin: 5,
        width: '100%',
        height: 50,
        borderColor: "#28CD41",
        borderWidth: 1,
        borderRadius: 10,
        overflow: "hidden",
        paddingVertical: 1,
        paddingLeft:10,
        fontSize: 16,
        color: "#4d7861",
        backgroundColor: "#ffff",
    },button: {
		backgroundColor: "#28CD41",
		padding: 10,
		borderRadius: 10,
		paddingVertical: 18,
		width: 122,
		height: 60,
	},
	buttonText: {
		color: "#FFF",
		fontStyle: "normal",
		fontWeight: "bold",
		fontSize: 16,
		textAlign: "center",
		textTransform: "uppercase",
	},

});
