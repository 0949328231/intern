import {Image, SafeAreaView, StyleSheet, Text, TouchableOpacity} from 'react-native';

import React, {useEffect, useState} from 'react';
import GetUserDetail from './user';

const CallApi = () => {
  const [user, setUser] = useState({});
  // useEffect(() => {
  //   getUserDetail().then(responseUser => setUser(responseUser));
  // }, []);
  // // const {email, gender, userId, url, phone} = user;
  useEffect(() => {
    setInterval(()=>{
    GetUserDetail().then(respon => setUser(respon));
    },1000)
  }, []);

  const {
    email,
    dateOfBirth,
    gender,
    userId,
    address,
    username,
    url,
    phone,
    registeredDate,
  } = user;

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => {}}>
        {/* <TouchableOpacity onPress={() => {}}> */}
        <Text>Đây là Thông tin lấy từ API</Text>
      </TouchableOpacity>
      <Text>Thong tin</Text>
      <Image source={{url}} style={{height:300,width:300}}></Image>
      <Text>email: {email}</Text>
      <Text>name: {username}</Text>
      <Text>sex: {gender}</Text>
      <Text>phone: {phone}</Text>
    </SafeAreaView>
  );
};

export default CallApi;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'blue',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
