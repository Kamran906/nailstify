import AsyncStorage from '@react-native-async-storage/async-storage';
import messaging from '@react-native-firebase/messaging';

export async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
  }
}

const getFcmToken= async ()=>{
    let fcmToken= await AsyncStorage.getItem('fcm Token');
    console.log(fcmToken,"fcm token")
    if(!fcmToken)
    try{
const fcmToken= await messaging().getToken();
if(fcmToken){
    console.log(fcmToken,"The new Generated Token");
    await AsyncStorage.setItem('fcm token',fcmToken)
}
    }catch(error){
console.log(error,"error raised in fcmtoken");
showError(error.message)
    }
}