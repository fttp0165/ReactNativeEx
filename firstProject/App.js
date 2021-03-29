import { StatusBar  } from 'expo-status-bar';
import React,{useState, Component} from 'react';
import { StyleSheet, Text, View,Button,TextInput } from 'react-native';



  const GenerateRandomNumber=()=>
{
 var RandomNumber ="XH"+Math.floor(Math.random() * 10000)  ;
 return RandomNumber;
}
  const validation=GenerateRandomNumber();

export default function App() {
  // const food = 'candy'
  
  const [food,setFood] = useState('candy')
  const [text, onChangeText] = React.useState("Useless Text")
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [password,setPassword]=useState("");
  const [passwordSecond,setPasswordSecond]=useState("");
  const [validStatus,setValidStatus]=useState("key in password");
  let checkPassword=(passwordSecond,validation)=>{
    alert(passwordSecond)
    if(passwordSecond == validation){
      ()=>setValidStatus("PASS")
    }else{
      ()=>setValidStatus("Fail")
     }
  }
  return (
    <View style={styles.container}>
      <View style={styles.titleBox}>
        <Text style={styles.titleText}>會員登入</Text>
      </View>
      <View style={styles.textBody}>
        <TextInput 
         title={"name"}
         style={styles.inputIn}
         placeholder={'Account'}
         State={'13'}
        />
        <TextInput 
         title={"password"}
         style={styles.inputIn}
         placeholder={'Password'}
         secureTextEntry={true}
         maxLength={10}
         onChangeText={(password)=>setPassword(password)}
        />
        <TextInput 
         title={"Validation"}
         style={styles.inputIn}
         placeholder={'Password Again'}
         onChangeText={
           (passwordSecond)=> setPassword(passwordSecond),
           (passwordSecond)=>{
             if(passwordSecond==validation){
              setValidStatus("PASS")
             }else{
              setValidStatus("FAIL")
             }
           }
          }
        />
       <Text
       style={{fontSize:20}}
       >Validation:{validation}</Text>
       <Text
       style={{color:'red',fontSize:25,marginTop:15}}
       >I'm not Robot:{validStatus}</Text>
      </View>
      <StatusBar style="auto" />
      <View
        style={styles.logIn}>
         <Button 
           title="Log In"
           color={'white'}
           />
       </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#f2f2f2',
      alignItems: 'center',
      justifyContent: 'center',
  },titleBox: {
      borderTopLeftRadius: 12,
      borderTopRightRadius: 12,
      backgroundColor: 'black',
      width: 320,
      padding: 10,
      paddingTop: 30,
      alignItems: 'center',
      justifyContent: 'center',
  },logo: {
      width: 60,
      height: 60,
      borderRadius: 30,
      backgroundColor: '#000839',
      color: '#f3f3f3',
      fontSize: 30,
      fontWeight: '700',
      overflow: 'hidden', //iOS css hack
      textAlign: 'center',
      lineHeight: 45,
      marginBottom: 5,
  },titleText: {
      fontSize: 30,
      fontWeight: '800',
      color: '#fff',
  },inputIn: {
      width:250,
      height:50,
      backgroundColor:'white',
      borderWidth:3,
      borderColor:'black',
      borderStyle:'solid',
      borderRadius:25,
      paddingStart:15,
      fontSize:15,
      marginBottom:15,
      textAlign:'center',
      marginLeft:20
  },textBody:{
      borderBottomLeftRadius: 12,
      borderBottomRightRadius: 12,
      backgroundColor: 'white',
      width: 320,
      height:320,
      padding: 10,
  },logIn:{
      width: 80,
      height:50,
      marginTop:15,
      borderRadius: 12,
      fontSize:15,
      textAlign:'center',
      paddingTop:5,
      backgroundColor: 'black',
     
      
  }
});
