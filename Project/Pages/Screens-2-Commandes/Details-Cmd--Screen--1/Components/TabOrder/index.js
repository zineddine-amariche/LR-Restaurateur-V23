import { View, Text, Image } from "react-native";
import React from "react";
import Imae from "../../../../../assets/Info/Component8(1).png";
import { styles } from "./styles";
import { FlatList } from "react-native";
import { LogBox } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from "accordion-collapse-react-native";
import { ListItem } from "native-base";
import { COLORS } from "../../../../../constants/theme";

LogBox.ignoreAllLogs();
const TabOrder = ({ orders }) => {
  const Tab = ({ item }) => {
    return (
      <View>
        <Collapse>
          <CollapseHeader style={{ marginTop: 7 }}>
            <View style={styles.row}>
              <View style={styles.rowItem}>
                <Image source={Imae} />
                <Text style={styles.textTab}>
                  {item?.title}

                  {item?._joinData?.extras && (
                    <Icon name="add" color={COLORS.white} />
                  )}
                </Text>
              </View>
              <View style={styles.rowItem}>
                <Text style={styles.textQty}>x{item?._joinData?.quantity}</Text>
                <Text style={styles.textPrice}>
                  {item?._joinData?.price.toFixed(2)}€
                </Text>
              </View>
            </View>
          </CollapseHeader>
          {item?._joinData?.extras ? (
            <CollapseBody
              style={{
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#eee",
                borderRadius: 6,
                marginTop: 5,
              }}
            >
              <ListItem>
                <View style={{ height: "100%", width: "100%" }}>
                  {item?._joinData?.extras?.map((i) => {
                    return (
                      <View
                        style={{
                          flexDirection: "row",
                          backgroundColor: "#eee",
                          width: "100%",
                          justifyContent: "space-between",
                        }}
                        key={i.choice}
                      >
                        <Text
                          style={{
                            fontWeight: "700",
                            width: 150,
                            marginLeft: -5,
                          }}
                        >
                          {i.choice}
                        </Text>
                        <Text style={{}}>{i.option}</Text>
                        <Text style={{ width: 20, fontWeight: "700" }}>
                          {i.price}
                        </Text>
                      </View>
                    );
                  })}
                </View>
              </ListItem>
            </CollapseBody>
          ) : (
            <View></View>
          )}
        </Collapse>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={orders}
        renderItem={({ item, index }) => {
          return <Tab item={item} />;
        }}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default TabOrder;
