import {
  View,
  Text,
  ScrollView,
 
} from "react-native";
import React,{useState} from "react";
import { Formik } from "formik";
import { UseReservation } from "../form1/Hooks/UseReservation";
import styles from "./styles";

// import Icon from "react-native-vector-icons/FontAwesome";
import * as Animatable from "react-native-animatable";
import PrimaryInput from "../input";
import Space from "../../../../../../../Components/Space";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import ButtonValidate from "../Button";
import CustomDatePiker from "../CustomDate";
import { COLORS } from "../../../../../../../constants/theme";

const Form1 = ({ FocusHandeler, isFocused ,navigation}) => {
  const [selected, setSelected] = useState(null);

  const onSelect = (item) => {
    setSelected(item);
  };
  const {
    validationSchema,
    reservationValues,
    onSubmit,
  } = UseReservation();

  return (
    
    <Animatable.View animation="fadeInUpBig" style={styles.containerForm}>
      <Formik
        initialValues={reservationValues}
        validationSchema={validationSchema}
        onSubmit={(values, formikAction) => {
          onSubmit(values);
          formikAction.setSubmitting(false);
          
        }}
      >
        {({
          values,
          errors,
          handleChange,
          handleBlur,
          touched,
          handleSubmit,
          isSubmitting,
          setFieldValue
        }) => {
          const {name,tel,numberOfPersons,salle,day,hour} = values;
          return (
            <KeyboardAwareScrollView  showsVerticalScrollIndicator={false}>
                <PrimaryInput
                // placeholderTextColor="#aac840"
                // underlineColor="pink"
                  Label={"Nom & Prenom"}
                  placeholder="Saisissez votre nom et prenom"
                  numberOfLines={1}
                  style={styles.Input}
                  name={name}
                  id={name}
                  value={name}
                  onBlur={handleBlur("name")}
                  onChangeText={handleChange("name")}
                  FocusHandeler={FocusHandeler}
                  isFocused={isFocused}
                 
                />
                {errors.name && touched.name ? (
                  <Animatable.View animation="fadeInLeft" duration={500}>
                    <Text style={styles.error}>{errors.name}</Text>
                  </Animatable.View>
                ) : null}

                <Space space={20} />
                <PrimaryInput
                  Label={"Numero Telephone"}
                  placeholder="Saisissez votre numero de telephone"
                  numberOfLines={1}
                  style={styles.Input}
                  name={tel}
                  id={tel}
                  value={tel}
                  onBlur={handleBlur("tel")}
                  onChangeText={handleChange("tel")}
                  FocusHandeler={FocusHandeler}
                  isFocused={isFocused}
                />
                {errors.tel && touched.tel ? (
                  <Animatable.View animation="fadeInLeft" duration={500}>
                    <Text style={styles.error}>{errors.tel}</Text>
                  </Animatable.View>
                ) : null}

                <Space space={20} />
                <PrimaryInput
                  Label={"Nombre de personnes"}
                  placeholder="Saisissez votre nombre de personnes"
                  numberOfLines={1}
                  style={styles.Input}
                  name={numberOfPersons}
                  id={numberOfPersons}
                  value={numberOfPersons}
                  onBlur={handleBlur("numberOfPersons")}
                  onChangeText={handleChange("numberOfPersons")}
                  FocusHandeler={FocusHandeler}
                  isFocused={isFocused}
                />
                {errors.numberOfPersons && touched.numberOfPersons ? (
                  <Animatable.View animation="fadeInLeft" duration={500}>
                    <Text style={styles.error}>{errors.numberOfPersons}</Text>
                  </Animatable.View>
                ) : null}
                <Space space={20} />
                <PrimaryInput
                  Label={"Salle"}
                  placeholder="Saisissez votre salle"
                  numberOfLines={1}
                  style={styles.Input}
                  name={salle}
                  id={salle}
                  value={salle}
                  onBlur={handleBlur("salle")}
                  onChangeText={handleChange("salle")}
                  FocusHandeler={FocusHandeler}
                  isFocused={isFocused}
                />
                {errors.salle && touched.salle ? (
                  <Animatable.View animation="fadeInLeft" duration={500}>
                    <Text style={styles.error}>{errors.salle}</Text>
                  </Animatable.View>
                ) : null}

                {/* <Space space={20} /> */}
                {/* <PrimaryInput
                  Label={"Jour de réservation"}
                  placeholder="Saisissez votre jour de réservation"
                  numberOfLines={1}
                  style={styles.Input}
                  name={day}
                  id={day}
                  value={day}
                  onBlur={handleBlur("day")}
                  onChangeText={handleChange("day")}
                  FocusHandeler={FocusHandeler}
                  isFocused={isFocused}
                />
                  
                {errors.day && touched.day ? (
                  <Animatable.View animation="fadeInLeft" duration={500}>
                    <Text style={styles.error}>{errors.day}</Text>
                  </Animatable.View>
                ) : null} */}
                <Space space={20} />
                
                <CustomDatePiker
                  label={"Jour de réservation"}
                  placeholder={"Saisissez votre jour de réservation"}
                  setFieldValue={setFieldValue}
                  name={"day"}
                  touched={touched.day}
                  onBlur={handleBlur("day")}
                  value={selected}
                  onSelect={onSelect}
                  style={styles.Input}
                  fontSize={15}
                />
                  {errors.day && touched.day ? (
                  <Animatable.View animation="fadeInLeft" duration={500}>
                    <Text style={styles.error}>{errors.day}</Text>
                  </Animatable.View>
                ) : null}

                  <Space space={20} />
                <PrimaryInput
                  Label={"Heure"}
                  placeholder="Saisissez votre heure de reservation"
                  numberOfLines={1}
                  style={styles.Input}
                  name={hour}
                  id={hour}
                  value={hour}
                  onBlur={handleBlur("hour")}
                  onChangeText={handleChange("hour")}
                  FocusHandeler={FocusHandeler}
                  isFocused={isFocused}
                />
                {errors.hour && touched.hour ? (
                  <Animatable.View animation="fadeInLeft" duration={500}>
                    <Text style={styles.error}>{errors.hour}</Text>
                  </Animatable.View>
                ) : null}
                


               
                <Space space={20} />
              
               
                <View style={styles.containerButtons}>
                  <ButtonValidate
                    handleSubmit={handleSubmit}
                    isSubmitting={isSubmitting}
                  />
                </View>

                <Space space={20} />
          
            </KeyboardAwareScrollView>
          );
        }}
      </Formik>
    </Animatable.View>
  );
};

export default Form1;
