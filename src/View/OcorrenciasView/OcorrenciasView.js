import React, { useState } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { TextInput } from 'react-native-paper';
import { DatePickerInput } from 'react-native-paper-dates';
import { SafeAreaProvider } from "react-native-safe-area-context";

const OcorrenciasView = ({ navigation }) => {

    const [inputDate, setInputDate] = React.useState(new Date())

    const [error, setError] = useState(false)

    const [user, setUser] = useState({
        cliente: '',
        funcionario: '',
        responsavel: '',
        status: '',
        dataInicial: '',
        dataFinal: '',
        garantia: '',
        descricaoServico: '',
        laudo: '',
        Obs: '',
    })

    return (

        <ScrollView>
            <View style={Styles.container}>
                <View style={Styles.navbar}>
                    <Text>cadastro de Ocorrências </Text>
                </View>
                <View>
                    <TextInput style={Styles.textInp}
                        label="Cliente*"
                        // value={text}
                        // onChangeText={text => setUser(text)}
                        mode="outlined"
                    />

                    <TextInput style={Styles.textInp}
                        label="Funcionário*"
                        // value={text}
                        // onChangeText={text => setUser(text)}
                        mode="outlined"
                    />

                    <TextInput style={Styles.textInp}
                        label="Responsável*"
                        // value={text}
                        // onChangeText={text => setUser(text)}
                        mode="outlined"
                    />

                    <TextInput style={Styles.textInp}
                        label="Status*"
                        // value={text}
                        // onChangeText={text => setUser(text)}
                        mode="outlined"
                    />

                    <SafeAreaProvider style={Styles.textInp}>
                        <View style={{ justifyContent: 'center', flex: 1, alignItems: 'center' }}>
                            <DatePickerInput
                                locale="pt-BR"
                                label="Data Inicial*"
                                value={inputDate}
                                onChange={(d) => setInputDate(d)}
                                inputMode="start"
                                mode="outlined"
                            />
                        </View>
                    </SafeAreaProvider>

                    <SafeAreaProvider style={Styles.textInp}>
                        <View style={{ justifyContent: 'center', flex: 1, alignItems: 'center' }}>
                            <DatePickerInput
                                locale="pt-BR"
                                label="Data Final"
                                value={inputDate}
                                onChange={(d) => setInputDate(d)}
                                inputMode="start"
                                mode="outlined"
                            />
                        </View>
                    </SafeAreaProvider>

                    <TextInput style={Styles.textInp}
                        label="Garantia"
                        // value={text}
                        // onChangeText={text => setUser(text)}
                        mode="outlined"
                    />

                    <TextInput style={Styles.textInp}
                        label="Descrição de Serviço"
                        // value={text}
                        // onChangeText={text => setUser(text)}
                        mode="outlined"
                    />

                    <TextInput style={Styles.textInp}
                        label="Laudo"
                        // value={text}
                        // onChangeText={text => setUser(text)}
                        mode="outlined"
                        multiline={true} // Permite várias linhas de texto
                        numberOfLines={4} // Número inicial de linhas
                    />

                    <TextInput style={Styles.textInp}
                        label="Observações"
                        // value={text}
                        // onChangeText={text => setUser(text)}
                        mode="outlined"
                        multiline={true} // Permite várias linhas de texto
                        numberOfLines={4} // Número inicial de linhas
                    />
                </View>
            </View>
        </ScrollView>


    )
};

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    textInp: {
        marginTop: 10
    }
})

export default OcorrenciasView