import {View, StyleSheet, Text} from "react-native";

const HomeView = ({ navigation}) => {

    return(


        <View style={StyleSheet.container}>
            <Text>Pagina Home</Text>
        </View>
    )
};

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#fff",
        paddingTop: "8%",
    }
})

export default HomeView