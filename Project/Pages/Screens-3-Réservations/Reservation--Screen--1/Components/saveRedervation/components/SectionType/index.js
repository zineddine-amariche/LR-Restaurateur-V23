import { View, Text, FlatList, Dimensions, TouchableOpacity, ScrollView } from "react-native";
import React, { Children, useState } from "react";
import { styles } from "./Styles";
// import SelectDropdown from "react-native-select-dropdown";
// import { COLORS } from "../../../../../constants/theme";
// import Icon from "react-native-vector-icons/Entypo";
// import CardAtt from "../Card-1";

// import CardEn from "../Card-2";
// import ChildrenCop from "../Childern/Children";
import { useSelector } from "react-redux";
import DateHandler from "../../../date";

import Form1 from '../form1';
import Form2 from '../forme2';
const SectionType = ({ navigation, ActiveButton }) => {
  const [isFocused, setIsFocused] = useState(false);

  const FocusHandeler = (item) => {
    setIsFocused(item);
  };
  const Printer = useSelector((state) => state.Printer);
  const { error, type } = Printer;



  const Tablet = useSelector((state) => state.IsTab);
  const { IsTab } = Tablet;
  return (
    <ScrollView style={styles.container}>
   

    
        

        {!ActiveButton
          ?  (
            <>
             <Form1 navigation={navigation} FocusHandeler={FocusHandeler} isFocused={isFocused}/>
            
              
              </>
            )
          : (
             <Form2 navigation={navigation}/>
            )}
      
    </ScrollView>
  );
};

export default SectionType;
