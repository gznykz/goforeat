import React from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet, ActivityIndicator,Platform } from "react-native";
// utils
import GLOBAL_PARAMS from "../utils/global_params";
import Colors from "../utils/Colors";

const styles = StyleSheet.create({
  loadingContainer: {
    // position:'absolute',
    // top:0,
    // left:0,
    // flex:1,
    backgroundColor: Colors.main_white,
    justifyContent: "flex-start",
    padding: 60,
    zIndex: 10000,
    backgroundColor: "transparent",
    height: GLOBAL_PARAMS._winHeight
  },
  loadingContainerAndroid: {
    position:'absolute',
    top:0,
    left:0,
    flex:1,
    justifyContent: "flex-start",
    padding: 60,
    backgroundColor: Colors.main_white,
    width: GLOBAL_PARAMS._winWidth,
    height: GLOBAL_PARAMS._winHeight,
    zIndex: 10
  }
});

const Loading = props => {
  return (
    <View style={[Platform.OS === 'ios' ? styles.loadingContainer : styles.loadingContainerAndroid,props.style]}>
      <View
        style={{
          alignSelf: "center",
          // backgroundColor: Colors.fontBlack,
          // borderRadius: 20,
          // opacity: 0.8,
          padding: 25
        }}
        >
        <ActivityIndicator size="small" color={Colors.deep_gray}/>
        <Text allowFontScaling={false} style={{ color: Colors.deep_gray, marginTop: 10,fontSize: 14 }}>{props.message}</Text>
      </View>
    </View>
  );
};

Loading.defaultProps = {
  message: "Loading...",
  style: {}
};

Loading.propTypes = {
  message: PropTypes.string,
  style: PropTypes.object
};

export default Loading;
