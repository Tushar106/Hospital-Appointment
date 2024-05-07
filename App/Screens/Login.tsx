import {  ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import LoginDoctor from "../../assets/images/LoginDoctors.png"

const Login = () => {
    return (
        <View style={style.container}>
            <ImageBackground source={LoginDoctor} resizeMode="cover" style={style.imageWrapper}>
                <View style={{ paddingLeft: 12 }} >
                    <Text style={style.text}>Protect yourself {"\n"}and your loved {"\n"}ones!</Text>
                </View>
            </ImageBackground>
            <View style={style.ButtonWrapper}>
                <Text style={{fontSize:16,color:"white",fontWeight:"500"}}>Heally Taking care of your health! Book your doctor and protect your loved once</Text>
                <TouchableOpacity style={style.button1}>
                    <Text style={style.buttonText1}>Login with Phone Number</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.button2}>
                    <Text style={style.buttonText2}>Login with Google</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const style = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
    },
    imageWrapper: {
        flex: 2,
    },
    text: {
        fontSize: 24,
        color: "#fff",
        fontStyle: "italic",
        fontWeight: "bold",
    },
    ButtonWrapper: {
        flex: 1,
        alignItems: "center",
        gap:10
    },
    button1: {
        width: "85%",
        backgroundColor: "#25814E",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        textAlign: "center",
        padding: 10,
        borderRadius: 10
    },
    button2: {
        width: "85%",
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        textAlign: "center",
        padding: 10,
        borderRadius: 10
    },
    buttonText1: {
        fontSize: 20,
        fontStyle: "italic",
        fontWeight: "600",
        color: "white"
    },
    buttonText2: {
        fontSize: 20,
        fontStyle: "italic",
        fontWeight: "600",
        color: "black"
    },
})
export default Login