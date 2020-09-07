import React from "react";
import {
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from "react-native";

export class PlatformTouchable extends React.Component {
  render() {
         const Touchable = Platform.select({
      android:TouchableOpacity,
      ios    :TouchableNativeFeedback ,
    });
      
      return <Touchable {...this.props}/>;
  }
}


 // const Touchable =
 //   Platform.OS === 'android' ? TouchableOpacity : TouchableNativeFeedback;
    