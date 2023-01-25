import {useDispatch, useSelector} from 'react-redux';
import {useState} from 'react';

export function UseHoraire() {
  const [visibleMod, setVisible] = useState(false);
  const close = () => {
    setVisible(false);
  };
  const open = () => {
    setVisible(true);
  };
  const [horaireData, setHoraireData] = useState({
    day: [
      {
        id: 2,
        jour: 'Lundi',
        debutj: '08:00',
        finj: '12:00',
        debuts: '15:00',
        fins: '22:00',
        isOpen: true,
      },
      {
        id: 3,
        jour: 'Mardi',
        debutj: '08:00',
        finj: '13:00',
        debuts: '15:00',
        fins: '22:00',
        isOpen: true,
      },
      {
        id: 4,
        jour: 'Mercredi',
        debutj: '08:00',
        finj: '12:00',
        debuts: '15:00',
        fins: '22:00',
        isOpen: true,
      },
      {
        id: 5,
        jour: 'Jeudi',
        debutj: '08:00',
        finj: '12:00',
        debuts: '15:00',
        fins: '22:00',
        isOpen: true,
      },
      {
        id: 6,
        jour: 'Vendredi',
        debutj: '08:00',
        finj: '12:00',
        debuts: '15:00',
        fins: '23:00',
        isOpen: true,
      },
      {
        id: 1,
        jour: 'Dimanche',
        debutj: '12:00',
        finj: '12:00',
        debuts: '15:00',
        fins: '22:00',
        isOpen: false,
      },
    ],
  });

  let data = [
      '00','01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23'
  ]
  let Minutes = [
    '00','01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59'
]
  return {
    visibleMod,
    open,
    close,
    horaireData,
    data,
    Minutes
  };
}
