import * as Yup from 'yup';
import {fr} from 'yup-locales';
import {setLocale} from 'yup';
import {useDispatch, useSelector} from 'react-redux';
import {useState} from 'react';
import { dispatchLogin } from '../../../../Redux/Actions/Login';

setLocale(fr);

export function UseLogin() {
  const [isSelected, setSelection] = useState(false);
  const [hidePass, setHidePass] = useState(false);
  const hadelChnageCheck = () => {
    setSelection(!isSelected);
  };
  const auth = useSelector(state => state.auth);

  const {isLogged,loading} = auth;
  
  const loginValues = {
    login: '',
    password: '',
  };
  // let token = `${process.env.REACT_APP_CLE}`;
  let configHead = {
    headers: {
      // method: 'POST',
      'Content-Type': 'application/json',
      'Accept-Language': 'fr',
      // Authorization: 'Bearer ' + token,
    },
  };

  const dispatch = useDispatch();
  const onSubmit = async (values) => {
     await dispatchLogin(dispatch, configHead, values,isLogged,loading)
  };
  const HandlehidePass = () => {
    setHidePass(!hidePass);
  };


  const lowercaseRegEx = /(?=.*[a-z])/;
  const uppercaseRegEx = /(?=.*[A-Z])/;
  const numericRegEx = /(?=.*[0-9])/;
  const specialsRegEx = /[^A-Za-z 0-9]/g;
  const emailRegex =
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

  let validationSchema = Yup.object().shape({
    login: Yup.string()
      .max(
        25,
        'identifiant est trop long - doit être de 15 caractères maximum.',
      )
      .required('identifiant est requis')
      .min(
        4,
        'identifiant est trop court - doit comporter au moins 4 caractères.',
      ),
    password: Yup.string()
      .max(
        25,
        'Le mot de passe est trop long - doit être de 15 caractères maximum.',
      )
      .min(
        4,
        'Le mot de passe est trop court - doit comporter au moins 4 caractères.',
      )
      //   .matches(lowercaseRegEx,'Doit contenir un caractère alphabétique minuscule!',)
      //   .matches(uppercaseRegEx,'Doit contenir un caractère alphabétique majuscule!',)
      // .matches(numericRegEx, 'Doit contenir un caractère numérique!')
      //   .matches(specialsRegEx, 'Doit contenir un caractère spécial')
      .required('Mot de passe requis'),
  });

  return {
    validationSchema,
    loginValues,
    isSelected,
    hadelChnageCheck,
    hidePass,
    HandlehidePass,
    onSubmit,
  };
}
