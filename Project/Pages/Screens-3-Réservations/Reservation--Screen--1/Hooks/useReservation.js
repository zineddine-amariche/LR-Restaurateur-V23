import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postReservations } from "../../../../Redux/Actions/Reservations/accepte_decline_reservations";
import { GetReservationsById } from "../../../../Redux/Actions/Reservations/GetResrvation";

export function useReservation() {
  const Commandes = useSelector((state) => state.Commandes);
  const { toComfirm, others, loading_btn, refresh } = Commandes;
  const Printer = useSelector((state) => state.Printer);
  const { isPrinter } = Printer;

  const [orders, setOrders] = useState([]);
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const mergedArray = [...toComfirm, ...others];
  const { Token } = auth;

  let configHead = {
    headers: {
      "Content-Type": "application/json",
      "Accept-Language": "fr",
      accept: "application/json",
      Authorization: "Bearer " + Token,
    },
  };

  const GetProducts = async (id) => {
    try {
      if (Token) {
        // console.log('fetch', Token, id);
        await fetch("https://dev500.live-resto.fr/apiv2e/orders/details", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept-Language": "fr",
            Authorization: "Bearer " + Token,
          },
          body: JSON.stringify({
            orderId: id,
          }),
        })
          .then((res) => res.json())
          .then((dataStatus) => {
            // console.log('dataStatus', dataStatus.order.products);
            setOrders(dataStatus.order.products);
            // dispatch({type: SUCCESS});

            // console.log('orders', orders)
          });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const [Loading, setLoading] = useState(false);
  const [Visible, setVisible] = useState(false);
  const [VisibleV, setVisibleV] = useState(false);

  const ActiveChange = () => {
    setIsChanged(true);
  };

  const getReservations = useSelector((state) => state.getReservations);

  const { result_token } = getReservations;
  const { establishment_id, pos_id, token } = result_token;

  let configHeader = {
    headers: {
      "Content-Type": "application/json",
      "Accept-Language": "fr",
      accept: "application/json",
      Authorization: "Bearer " + token,
    },
  };
  const set = () => {
    setVisible(true);
  };

  const AcitvePopUp = (id) => {
    setVisible(true);
    GetReservationsById(dispatch, configHeader, id);
  };
  const DesAcitvePopUp = () => {
    setVisible(false);
  };

  const AcitvePopUpV = (id) => {
    console.log('id', id)
    setVisibleV(true);
    // GetReservationsById(dispatch, configHeader, id);
  };



  const DesAcitvePopUpV = () => {
    setVisibleV(false);
  };

  return {
    DesAcitvePopUp,
    AcitvePopUp,
    ActiveChange,
    GetProducts,
    mergedArray,
    orders,
    Visible,
    VisibleV,
    AcitvePopUpV,
    DesAcitvePopUpV,
    set,
    configHead,
    configHeader,
    dispatch
  };
}
