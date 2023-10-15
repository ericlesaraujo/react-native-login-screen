import React from "react";
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from "react-native";


export const Home = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>E-mail</Text>
            <TextInput placeholderTextColor='#555' placeholder="E-mail" style={styles.fields} />
            <Text style={styles.title}>Senha</Text>
            <TextInput placeholderTextColor='#555' placeholder="Senha" style={styles.fields} />
            <TouchableOpacity activeOpacity={0.7} style={styles.button}>
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#121214',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
        color: '#f1f1f1',
        fontWeight: 'bold',
        fontSize: 15,
        paddingTop: 15,
    },
    fields: {
        backgroundColor: '#29292e',
        color: '#f1f1f1',
        fontSize: 18,
        padding: 15,
        marginTop: 30,
        borderRadius: 7,
        width: 300,
        alignItems: 'center',
    },
    button: {
        backgroundColor: 'rgb(192, 192, 192)',
        padding: 15,
        borderRadius: 7,
        alignItems: 'center',
        marginTop: 20,
        width: 300,
    },
    buttonText: {
        color: '#fff',
        fontSize: 15,
    }
  });
  