import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native';

import { connect } from 'react-redux';

import img_write from '../images/download.png';

class SetPassSetting extends Component {
  constructor() {
    super()
    this.state = {
      text: ''
    }
  }
  render() {
    return(
      <View style = { styles.contentStyle}>
        <Text style = {styles.txtLabelStyle}>Set password setting</Text>
        <View style = { styles.rowFieldBtnStyle }>
          <TextInput
            style = { styles.txtInputStyle}
            placeholder = 'password'
            underlineColorAndroid = "transparent"
            secureTextEntry = {true}
            maxLength = {20}
            onChangeText={(text) => this.setState({text})}
          />
          <TouchableOpacity
            style = { styles.bntStyle }
            onPress = { () => {
              this.props.onWritePassSetting(this.state.text)
            }}
          >
            <Image
                style={ styles.imgStyle }
                source = {img_write}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default connect()(SetPassSetting);

const styles = StyleSheet.create({
  imgStyle: {
    width: 30,
    height: 30,
    alignItems: 'center',
    marginLeft: 10
  },
  contentStyle: {
    margin: 10,
    padding: 10,
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 5,
    borderColor: 'black'
  },
  rowFieldBtnStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bntStyle: {
    width: 50,
    margin: 10
  },
  txtInputStyle: {
    height: 40,
    flex: 1,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 2,
    marginRight: 10
  },
  txtLabelStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  }

});
