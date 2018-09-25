import React from 'react'
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { connect } from 'react-redux'

const formCadastro =  props => {
console.log(props)
return (
    <View style={styles.pagina}>
        <View style={styles.entradas}>
            <TextInput value={props.nome} style={styles.entrada} placeholder="Nome" />
            <TextInput value={props.email} style={styles.entrada} placeholder="E-mail" />
            <TextInput value={props.senha} style={styles.entrada} placeholder="Senha" />
        </View>
        <View style={styles.botoes}>
            <Button onPress={() => false} color="#115E54" title="Cadastrar"></Button>
        </View>

    </View>
);
}
const mapStateToProps = state =>(
    {
        nome: state.AutenticacaoReducer.nome,
        email: state.AutenticacaoReducer.email,
        senha: state.AutenticacaoReducer.senha
    }
);

export default connect(mapStateToProps, null)(formCadastro);


const styles = StyleSheet.create({
    pagina:{
        flex: 1,
        padding: 10
    },
    entradas: {
        flex: 4,
        justifyContent: 'center'
    },
    entrada:{
        fontSize: 15,
        height:50,
        borderRadius: 10,
        paddingTop:10,
    },
    botoes:{
        flex: 1
    }
})