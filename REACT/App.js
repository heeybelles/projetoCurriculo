import { Text, SafeAreaView, StyleSheet, Image, View, ScrollView} from 'react-native';
import { Button } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';


export default function App() {
  return (
   
     <View style={styles.container}>
    <SafeAreaView >
    <ScrollView>
    
    <View
   
      style={{
      background:'#afeeee',
      shadowColor:'#000',

        marginTop:140,
        flexDirection: 'row',
        height: 200,
        padding: 20,
      }}>
   
          
    </View>
      <Card  style={styles.card}><Text>    </Text>
          <Image style={styles.image}
          source={require('/Dudinha.jfif')}
        />
        <Text>    </Text>
       <Text style={{fontWeight: 'bold', color:'#008080',marginLeft:50, fontSize: 17, marginTop: -10}}>
     Eduarda Belles
  <Text style={{color: '#20b2aa'}}> - Estudante DS</Text>
   
</Text>
<Text>  </Text>
 <Text style={{fontWeight: 'bold',color: '#20b2aa'}}>  SOBRE MIM: </Text>
        <Text>  Considero-me uma programadora front-end.</Text> <Text>  Sou ordenada, dedicada e responsável.  </Text>
        <Text>    </Text>
         <Text style={{fontWeight: 'bold',color: '#20b2aa'}}>  ESTUDOS: </Text>
         <Text>  Etec Adolpho Berezin</Text>
         
           <Text>  3/3 - Desenvolvimento de Sistemas</Text>
           <Text>    </Text>
           <Text style={{fontWeight: 'bold', color: '#20b2aa'}}>   IDIOMAS:</Text>
           <Text>   Português - nativo</Text>
            <Text>   3/4 - Coreano</Text>
            <Text>   Inglês - básico</Text>
             <Text>   Espanhol - básico</Text>
              <Text>    </Text>
         <Text style={{fontWeight: 'bold',color: '#20b2aa'}}>   CONTATO: </Text>
         <Text>   Telefone: (13)0000-0000</Text> <Text>   E-mail: dudabelles.9@gmail.com</Text>
          
      </Card>
      </ScrollView>
    </SafeAreaView>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
 

  card: {
  width: '400px',
   height: '700px',
   },

  image: {
    
marginTop: -80,
marginLeft: 110,
   width: '100px',
   height: '100px',
 borderRadius: 50,
         
  }
});
