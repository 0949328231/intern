import axios from 'axios';
import {Alert} from 'react-native';

const GetUserDetail = async () => {
  try {
    // Alert.alert('Hello');
    let response = await axios.get('https://randomuser.me/api');
    if (response.status != 200) {
      throw 'Failed request';
    }

    if (response.data.results.length > 0) {
      let responseUser = response.data.results[0];
      let user = {};
      user.dateOfBirth = new Date(responseUser.dob.date);
      user.email = responseUser.email ?? '';
      user.gender = responseUser.gender ?? 'male'; //default value
      user.userId = `${responseUser.id.name}${responseUser.id.value}`;
      user.address = `${responseUser.location.state}, ${responseUser.location.street.name}`;
      user.username = responseUser.login.username ?? '';
      user.url = responseUser.picture.large ?? '';
      user.phone = responseUser.phone ?? '';
      user.registeredDate = new Date(responseUser.registered.date);

      return user;
    }
    throw 'user not found';
  } catch (error) {
    debugger;
    throw error;
  }
};
export default GetUserDetail;

