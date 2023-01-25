import {
  View,
  Text,
  FlatList,
  Dimensions,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import { styles } from "./Styles";
import ChildrenCop from "../Childern/Children";
import { useSelector } from "react-redux";
import NoCommandes from "../../../../../assets/Info/Group188.png";
import { useCommandeTerminé } from "../../Hooks/useCommandeTerminé";

const LazyCard3 = React.lazy(() => import("../Card-3"));

const SectionType = ({ navigation }) => {
  const { mergedArray, width } = useCommandeTerminé();
  const Printer = useSelector((state) => state.Printer);
  const { error, type } = Printer;

  const Loading = () => {
    return (
      <View style={styles.LoadingBox}>
        <Text>Loading...</Text>
      </View>
    );
  };
  const ItemsRender = ({ item, navigation }) => {
    // console.log("item", item.kitchenstate_id);
    if (item?.kitchenstate_id === 40 ) {
      return (
        <React.Suspense fallback={<Loading />}>
          <LazyCard3 item={item} navigation={navigation} />
        </React.Suspense>
      );
    } else return <View></View>;
  };

  const Tablet = useSelector((state) => state.IsTab);
  const { IsTab } = Tablet;

  // console.log("mergedArray", mergedArray);

  return (
    <View style={styles.container}>
      <View style={styles.FlatList}>
        {error && type && <ChildrenCop error={error} type={type} />}
        {mergedArray.length ? (

               IsTab ? (
                <FlatList
                  key={"_"}
                  numColumns={2}
                  data={mergedArray}
                  renderItem={({ item, index }) => {
                    return <ItemsRender item={item} navigation={navigation} />;
                  }}
                  keyExtractor={(item) => "_" + item.id}
                  contentContainerStyle={[
                    styles.wrapper,
                    { width: width - 10 },
                  ]}
                  columnWrapperStyle={{ justifyContent: "center" }}
                  ListEmptyComponent={<Loading />}
                />
              ) : (
                <FlatList
                  key={"_"}
                  numColumns={1}
                  data={mergedArray}
                  renderItem={({ item, index }) => {
                    return <ItemsRender item={item} navigation={navigation} />;
                  }}
                  keyExtractor={(item) => "_" + item.id}
                  contentContainerStyle={[
                    styles.wrapper,
                    { width: width - 10, alignItems: "center" },
                  ]}
                  ListEmptyComponent={<Loading />}
                />
              )
          
              
            
          
        ) : (
          <View style={styles.NoCommandes}>
            <Image source={NoCommandes} />
            <Text style={styles.TextNoCommandes}>Pas de commandes</Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default SectionType;
