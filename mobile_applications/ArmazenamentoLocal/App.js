import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, Keyboard } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';

export default function App() {
  const [nomeProduto, setNomeProduto] = useState("")
  const [precoProduto, setPrecoProduto] = useState()
  const [listaProdutos,setListaProdutos]=useState([])
  const [produtoEditado,setProdutoEditado]=useState(null)

  useEffect(()=>{
    buscarDados()
  },[])

  async function salvar() {
    let produtos = []

    if(await AsyncStorage.getItem("PRODUTOS")!=null){
      produtos = JSON.parse(await AsyncStorage.getItem("PRODUTOS"))
    }

    if(produtoEditado){
      produtos[produtoEditado.index].nome = nomeProduto
      produtos[produtoEditado.index].preco = precoProduto
      setProdutoEditado(null)
    } else {
      produtos.push({nome:nomeProduto,preco:precoProduto})
    }
    

    //Salvado os dados no Async Storage
    await AsyncStorage.setItem("PRODUTOS",JSON.stringify(produtos))

    alert(produtoEditado ? "PRODUTO ATUALIZADO" : "PRODUTO SALVO")

    buscarDados()
    setNomeProduto("")
    setPrecoProduto("")
    Keyboard.dismiss()
  }

  async function buscarDados() {
    const p = await AsyncStorage.getItem("PRODUTOS")
    setListaProdutos(JSON.parse(p))
  }

  async function excluir(index) {
    const dados = listaProdutos.splice(index - 1,1)
    setListaProdutos(dados)
    
    await AsyncStorage.setItem("PRODUTOS",JSON.stringify(dados))
  }

  async function editar(index) {
    const produto = listaProdutos[index]
    setNomeProduto(produto.nome)
    setPrecoProduto(produto.preco)
    setProdutoEditado({index})
  }


  return (
    <View style={styles.container}>
      <Text>Cadastro</Text>
      <TextInput
        placeholder='Digite o nome do produto'
        style={styles.input}
        value={nomeProduto}
        onChangeText={(value) => setNomeProduto(value)}
      />
      <TextInputMask
        placeholder='Digite o preço do produto'
        style={styles.input}
        type='money'
        value={precoProduto}
        onChangeText={(value) => setPrecoProduto(value)}
      />
      <TouchableOpacity style={styles.btn} onPress={salvar}>
        <Text style={{ color: "white" }}>{
          produtoEditado ? "ATUALIZAR" : "CADASTRAR"
          }</Text>
      </TouchableOpacity>

      {/* {Botão para buscarDados} */}
      <TouchableOpacity style={styles.btn} onPress={buscarDados}>
        <Text style={{color:"white"}}>BUSCAR DADOS</Text>
      </TouchableOpacity>

      <FlatList 
        data={listaProdutos}
        renderItem={({item,index})=>{
          return(
            <View style={styles.listFlat}>
              <View> 
                <Text>Nome:{item.nome} - Preco:{item.preco}</Text>
              </View>
              <View>
                <TouchableOpacity onPress={() => excluir(index)}>
                  <Text style={{color:"red"}}>Excluir</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => editar(index)}>
                  <Text style={{color:"yellow"}}>editar</Text>
                </TouchableOpacity>
              </View>
              
            </View>

          )
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop:30
  },
  input: {
    borderWidth: 1,
    height: 50,
    width: 300,
    borderRadius: 15,
    marginTop: 10
  },
  btn: {
    backgroundColor: "blue",
    borderWidth: 1,
    height: 50,
    width: 300,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10
  },
  listFlat:{
    width:300,
    borderWidth:1,
    borderRadius:15,
    height:80,
    justifyContent:"center",
    alignItems:"center",
    marginVertical:3
  }
});
