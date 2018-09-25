import React from 'react';
import { View, Text, Button, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { modificaEmail } from '../actions/AutenticacaoActions'

const formLogin =  props => {
    console.log(props);
    return (
        <View style={styles.pagina}>
            <View style={styles.viewTitulo}>
                <Text style={styles.titulo}>WhatsApp Clone</Text>
            </View>
            <View style={styles.conteudo}>
                <TextInput value={props.email} style={styles.entradas} placeholder="E-mail" onChangeText={ texto => props.modificaEmail(texto)} />
                <TextInput value={props.senha} style={styles.entradas} placeholder="Senha" />
                <TouchableOpacity onPress={() => Actions.formCadastro()}>
                    <Text style={styles.link} >Ainda não tem cadastro? Cadastre-se</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.conteudo}>
                <Button title="Acessar" color="#115E54" onPress={() => false} />
            </View>
        </View>
    );
};

const mapStateToProps = state =>(
    {
        email: state.AutenticacaoReducer.email,
        senha: state.AutenticacaoReducer.senha
    }
);

export default connect(mapStateToProps, { modificaEmail })(formLogin);

const styles = StyleSheet.create({
    pagina: {
        flex: 1,
        padding: 10
    },
    viewTitulo: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titulo: {
        fontSize: 25,
    },
    entradas: {
        fontSize: 15,
        height: 50,
    },
    link: {
        fontSize: 15
    },
    conteudo: {
        flex: 2
    }
})