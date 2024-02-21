import { View, StyleSheet, ImageBackground, Image, Button, ScrollView } from "react-native";
import { Text, TextInput } from "react-native-paper";
import { useState } from "react";


const LoginView = ({ navigation }) => {

    const [form , setForm] = useState({login:'123', senha:'123'})


    return (

        <ScrollView
            contentContainerStyle={Styles.scrollView}
            scrollEnabled={false}
            horizontal={false}
        >
            <ImageBackground
                source={require("../../img/fundo_gal.jpg")}
                style={Styles.background}
            >
                <View style={Styles.container}>
                    <Image source={require("../../img/logo.png")} style={Styles.logo} />
                </View>
                <View style={Styles.TextInput}>
                    <View style={Styles.inputContainer}>
                        <TextInput
                            label="Email"
                            // value={text}
                            onChangeText={text => setForm(text)}
                        />
                    </View>
                    <View style={Styles.inputContainer}>
                        <TextInput
                            label="Senha"
                            // value={text}
                            onChangeText={text => setForm(text)}
                            secureTextEntry
                            right={<TextInput.Icon icon="eye" size={15} />}
                        />
                    </View>
                    <View style={Styles.btn}>
                        <Button
                            title="Logar"
                            onPress={() => navigation.navigate('Home')}
                        />
                    </View>
                </View>

            </ImageBackground>
        </ScrollView>
    );
};

const Styles = StyleSheet.create({
    scrollView: {
        flexGrow: 1,
    },
    container: {
        flex: 1,
        alignItems: "center",
        paddingTop: "25%",
    },
    background: {
        flex: 1,
        resizeMode: "cover",
    },
    TextInput: {
        flex: 3,
        alignItems: "center",
    },
    inputContainer: {
        marginBottom: 18,
    },
    logo: {
        width: 300,
        resizeMode: "contain"
    },
    btn: {
        width: 80,
    }
})

export default LoginView