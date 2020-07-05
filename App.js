import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native';

export default function App(){

    const [massa,setMassa] = useState(0);
    const [altura,setAltura] = useState(0);
    const [resultado,setResultado] = useState(0);
    const [resultadoText,setResultadoText] = useState("");
    
  

  function calcular () {
   
    let imc = massa /(altura * altura);


    if(imc<16){
      setResultadoText("Magreza Grave");
    }else if(imc < 17){
      setResultadoText("Magreza Moderada");
    }
    else if(imc < 18.5){
      setResultadoText("Magreza Leve");
    }
    else if(imc < 25){
      setResultadoText("Saúdavel");
    }
    else if(imc < 30){
      setResultadoText("Sobrepeso");
    }
    else if(imc < 35){
      setResultadoText("Obsidade Grau 1");
    }
    else if(imc < 40){
      setResultadoText("Obsidade Grau 2");
    }
    else{
      setResultadoText("Obsidade Grau 3");
    }

    if((altura) == '' || (massa) == '' ){
      setResultadoText("valor inválido");
      setResultado('');
    }else{
      setResultado(imc);
    }

    
   
  }

 
    return (
      <View style={styles.container}>
        <StatusBar translucent backgroundColor="#f0435f"/>
        <View style={styles.entradas}>
          <TextInput placeholder="Massa" keyboardType="numeric" style={styles.input} value={massa} onChangeText={setMassa}/>
          <TextInput placeholder="Altura" keyboardType="numeric" style={styles.input} value={altura} onChangeText={setAltura}/>
        </View>
        <TouchableOpacity onPress={calcular} style={styles.button}><Text style={styles.buttonText}>Calcular</Text></TouchableOpacity>
        <View style={styles.caixaResult}>
            <Text style={styles.resultado}>{(resultado!='')&&resultado.toFixed(2)}</Text>
            <Text style={[styles.resultado, {fontSize: 35}]}>{resultadoText}</Text>
        </View>
        
        <View style={styles.credits}>
            <Text style={{marginLeft :30,marginRight:30}}>BY</Text>
            <Text>Victor Gabriel</Text>
        </View>
          
       
    
      </View>
    );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  entradas:{
    flexDirection: 'row',
  },
  input:{
    height: 90,
    textAlign: 'center',
    width: '50%',
    fontSize: 50,
    marginTop: 24,
    color: 'lightgray'
  },
  button: {
    backgroundColor: '#f14762',
    borderRadius: 50,
    marginLeft: 50,
    marginRight: 50,
  },
  buttonText: {
    alignSelf: 'center',
    padding: 15,
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
  },
  resultado: {
    alignSelf: 'center',
    color: '#9b9b9b',
    fontSize: 65,
    padding: 15,

  },
  caixaResult:{
    backgroundColor: '#f3f3f3',
    marginTop: 10,
    padding: 20,
    borderRadius:10,
    marginRight:10,
    marginLeft:10,
  },
  credits: {
    marginTop: 170,
    alignSelf: 'center',
  }

});
