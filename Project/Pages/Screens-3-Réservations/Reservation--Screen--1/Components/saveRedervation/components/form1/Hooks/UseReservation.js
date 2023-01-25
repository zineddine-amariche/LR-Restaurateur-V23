import * as Yup from 'yup';
import {fr} from 'yup-locales';
import {setLocale} from 'yup';

setLocale(fr);

export function UseReservation() {
  
  const reservationValues = {
    name:'',
    tel:'',
    numberOfPersons:'',
    salle:'',
    day:'',
    hour:''
  };




  const onSubmit = (values) => {
     console.log(values,'validation telephone')
  };



  

  let validationSchema = Yup.object().shape({
    name: Yup.string()
     
      .required('Nom et prenom sont obligatoires'),
    tel: Yup.string()
      .min(
        10,
        'Le numero de telephone de contenir au moins 10 chiffres',
      )
      //   .matches(lowercaseRegEx,'Doit contenir un caractère alphabétique minuscule!',)
      //   .matches(uppercaseRegEx,'Doit contenir un caractère alphabétique majuscule!',)
      // .matches(numericRegEx, 'Doit contenir un caractère numérique!')
      //   .matches(specialsRegEx, 'Doit contenir un caractère spécial')
      .required('Le numero de telephone est obligatoire'),
      numberOfPersons:Yup.number().required('le nombre de personnes est obligatoire'),
      salle:Yup.string(),
      day:Yup.date().required('la date est obligatoire'),
      hour:Yup.string().required('Heure est obligatoire'),
  });

  return {
    validationSchema,
    reservationValues,
    onSubmit,
  };
}
