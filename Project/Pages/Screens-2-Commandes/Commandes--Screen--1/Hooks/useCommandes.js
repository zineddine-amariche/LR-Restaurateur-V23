import { BluetoothEscposPrinter } from "@brooons/react-native-bluetooth-escpos-printer";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { useState } from "react";
import { useWindowDimensions } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { cleanOrders } from "../../../../Redux/Actions/Commandes";
import { getSecondLeft } from "../../../../Redux/Actions/Timer";
import {
  COMMANDES_FAILED,
  DES_REFRESH,
  GET_ARTICLES,
  LOADING,
  ORDER_BYID_SUCCESS,
  ORDER_SUCCESS,
  REFRESH,
  STOP_COMMANDES_LOADING,
  SUCCESS,
} from "../../../../Redux/Types/Commandes";
import {
  DELETE_MESSAGES_PRINTER,
  PRINTER_FAILED,
} from "../../../../Redux/Types/Printer";

export function useCommandes() {
  const dispatch = useDispatch();
  const navigation= useNavigation()

  const Commandes = useSelector((state) => state.Commandes);
  const {
    toComfirm,
    idOrder,
    others,
    loading_btn,
    refresh,
    orders,
  } = Commandes;
  const Printer = useSelector((state) => state.Printer);
  const { isPrinter, nombreTicket } = Printer;
  // console.log('isPrinter', isPrinter)
  const textButtonFiltre = ["Toutes", "À préparer", "En Cuisine", "Prêtes"];
  const [status, setStatus] = useState("Toutes");
  const [Loading, setLoading] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [IsChanged, setIsChanged] = useState(false);
  const [Visible, setVisible] = useState(false);
  const auth = useSelector((state) => state.auth);
  const mergedArray = [...toComfirm, ...others];
  const { Token } = auth;
  const { width } = useWindowDimensions();

  let configHead = {
    headers: {
      "Content-Type": "application/json",
      "Accept-Language": "fr",
      Authorization: "Bearer " + Token,
    },
  };

  const GetProducts = async (id) => {
    dispatch({ type: LOADING });
    // console.log("id", id);
    let body = JSON.stringify({
      orderId: id,
    });
    let URL = "https://dev500.live-resto.fr/apiv2e/orders/details";
    try {
      if (Token) {
        await axios
          .post(URL, body, configHead)
          .then((res) => {
            let Data = res.data.order;

            console.log("dataStatus--------------------", Data);
            // dispatch({ type: ORDER_SUCCESS, payload: Data });
          })
          .catch((err) => {
            console.log("--- error failed", err);
            // dispatch({type: COMMANDES_FAILED});
          });
        // DesActiveLoading()
        // dispatch({ type: STOP_COMMANDES_LOADING });
      }
    } catch (error) {
      console.log("--- error failed", error);
    }
  };
  const ActiveChange = () => {
    setIsChanged(true);
  };
  const DesActiveChange = () => {
    setIsChanged(false);
  };
  const ActiveDone = () => {
    setIsDone(true);
  };
  const PrinteById = async (item, ordersById, nombreArticl) => {
    let i = 1;
    do {
      if (IsChanged && ordersById && ordersById.length > 0) {
        // console.log(`title print`, i);
        // console.log(`body print`, i);
        // console.log(`ordersById`, ordersById);
        try {
          await BluetoothEscposPrinter.printerInit();
          await BluetoothEscposPrinter.printerLeftSpace(0);
          await BluetoothEscposPrinter.printerAlign(
            BluetoothEscposPrinter.ALIGN.CENTER
          );
          await BluetoothEscposPrinter.setBlob(0);
          await BluetoothEscposPrinter.printText("______________________\r\n", {
            fonttype: 3,
            widthtimes: 1,
            heigthtimes: 1,
          });
          await BluetoothEscposPrinter.printText("Live Resto\r\n", {
            encoding: "GBK",
            codepage: 0,
            widthtimes: 3,
            heigthtimes: 3,
            fonttype: 1,
          });
          await BluetoothEscposPrinter.setBlob(0);
          await BluetoothEscposPrinter.printText("#" + item?.id + "\r\n", {
            encoding: "GBK",
            codepage: 0,
            widthtimes: 3,
            heigthtimes: 3,
            fonttype: 1,
          });
          await BluetoothEscposPrinter.printText(
            "______________________________________\r\n",
            {
              fonttype: 1,
            }
          );
          await BluetoothEscposPrinter.printerAlign(
            BluetoothEscposPrinter.ALIGN.CENTER
          );
          await BluetoothEscposPrinter.setBlob(0);
          await BluetoothEscposPrinter.printText(" Livraison \r\n", {
            encoding: "GBK",
            codepage: 0,
            widthtimes: 3,
            heigthtimes: 3,
            fonttype: 1,
          });
          await BluetoothEscposPrinter.printText("\r\n", {});
          await BluetoothEscposPrinter.printerAlign(
            BluetoothEscposPrinter.ALIGN.CENTER
          );
          await BluetoothEscposPrinter.printText(
            "Client : " +
              item?.delivery.full_name +
              "  --  " +
              item?.delivery.phone +
              "\r\n",
            {}
          );
          await BluetoothEscposPrinter.printText(
            " Addresse : " + item?.delivery.address + "  \r\n",
            {}
          );
          await BluetoothEscposPrinter.printText(
            "Ville : " + item?.delivery.city + " \r\n",
            {}
          );

          await BluetoothEscposPrinter.printerAlign(
            BluetoothEscposPrinter.ALIGN.CENTER
          );
          await BluetoothEscposPrinter.printText(
            "______________________________________\r\n",
            {
              fonttype: 1,
            }
          );
          await BluetoothEscposPrinter.printText("\r\n", {});

          {
            ordersById.map((i) => {
              return (
                BluetoothEscposPrinter.printColumn(
                  [38, 0, 8],
                  [
                    BluetoothEscposPrinter.ALIGN.LEFT,
                    BluetoothEscposPrinter.ALIGN.CENTER,
                    BluetoothEscposPrinter.ALIGN.RIGHT,
                  ],
                  [
                    "" + i?._joinData.quantity + "x " + i?.title + "",
                    "",
                    "" + i?._joinData.price.toFixed(2) + " €",
                  ],
                  {
                    encoding: "windows-1254",
                    codepage: 25,
                    widthtimes: 0.75,
                    heigthtimes: 0.75,
                  }
                ),
                i._joinData.extras &&
                  i._joinData.extras.map((ext) => {
                    return (
                      BluetoothEscposPrinter.printerAlign(
                        BluetoothEscposPrinter.ALIGN.LEFT
                      ),
                      BluetoothEscposPrinter.printText(
                        "" + ext.choice +  "" +   "" +"\r\n",
                        {
                          encoding: "windows-1254",
                          codepage: 25,
                        }
                      )
                    );
                  }),
                BluetoothEscposPrinter.printText("\r\n", {})
              );
            });
          }

          await BluetoothEscposPrinter.printText("\r\n", {});
          await BluetoothEscposPrinter.printerAlign(
            BluetoothEscposPrinter.ALIGN.CENTER
          );
          await BluetoothEscposPrinter.setBlob(0);
          await BluetoothEscposPrinter.printText(
            " Nombre d'articles: " + nombreArticl + "\r\n",
            {
              encoding: "windows-1254",
              codepage: 25,
              widthtimes: 1,
              heigthtimes: 1,
              fonttype: 1,
            }
          );

          await BluetoothEscposPrinter.printText(
            "______________________________________\r\n",
            {
              fonttype: 1,
            }
          );

          await BluetoothEscposPrinter.printColumn(
            [20, 2, 10],
            [
              BluetoothEscposPrinter.ALIGN.LEFT,
              BluetoothEscposPrinter.ALIGN.LEFT,
              BluetoothEscposPrinter.ALIGN.RIGHT,
            ],
            ["Moyen de paiement ", ":", "" + item?.payments[0].title + ""],
            {
              encoding: "windows-1250",
              codepage: 25,
            }
          );
          await BluetoothEscposPrinter.printColumn(
            [20, 2, 10],
            [
              BluetoothEscposPrinter.ALIGN.LEFT,
              BluetoothEscposPrinter.ALIGN.LEFT,
              BluetoothEscposPrinter.ALIGN.RIGHT,
            ],
            [
              "Frais de Livraison",
              ":",
              "" + item?.delivery_price.toFixed(2) + " €",
            ],
            {
              encoding: "windows-1254",
              codepage: 25,
            }
          );

          await BluetoothEscposPrinter.printColumn(
            [20, 2, 10],
            [
              BluetoothEscposPrinter.ALIGN.LEFT,
              BluetoothEscposPrinter.ALIGN.CENTER,
              BluetoothEscposPrinter.ALIGN.RIGHT,
            ],
            ["Remise :", "", "" + item?.discount.toFixed(2) + " € \r\n"],
            {
              encoding: "windows-1254",
              codepage: 25,
            }
          );

          await BluetoothEscposPrinter.printColumn(
            [14, 0, 8],
            [
              BluetoothEscposPrinter.ALIGN.LEFT,
              BluetoothEscposPrinter.ALIGN.LEFT,
              BluetoothEscposPrinter.ALIGN.RIGHT,
            ],
            ["Prix Total :", "", "" + item?.total.toFixed(2) + " €"],
            {
              encoding: "windows-1254",
              codepage: 25,
              widthtimes: 1,
              heigthtimes: 1,
            }
          );

          await BluetoothEscposPrinter.printText(
            "_________________________________\r\n",
            {
              fonttype: 1,
              heigthtimes: 1,
            }
          );
          await BluetoothEscposPrinter.printText("\r\n", {});
          await BluetoothEscposPrinter.printerAlign(
            BluetoothEscposPrinter.ALIGN.CENTER
          );
          await BluetoothEscposPrinter.printText(
            "Merci d'avoir commandé chez Live Resto\r\n",
            {
              encoding: "windows-1250",
              codepage: 25,
            }
          );

          await BluetoothEscposPrinter.printText(
            "UNE ENTREPRISE FRAN€AISE \r\n",
            {
              encoding: "GBK",
            }
          );
          await BluetoothEscposPrinter.printerAlign(
            BluetoothEscposPrinter.ALIGN.CENTER
          );
          await BluetoothEscposPrinter.printText("\r\n\r\n\r\n", {});
          await BluetoothEscposPrinter.printText("  \r\n", {
            encoding: "windows-1250",
            codepage: 25,
            widthtimes: 3,
            heigthtimes: 3,
            fonttype: 1,
          });
        } catch (error) {
          dispatch({
            type: PRINTER_FAILED,
            payload: "COMMANDE NON IMPRIMÉE !",
          });
          setTimeout(() => {
            dispatch({ type: DELETE_MESSAGES_PRINTER });
          }, 5000);
          alert(error);
        }
        ActiveDone();
        // console.log(
        //   "Frais de Livraison",
        //   ":",
        //   "" + item.delivery_price.toFixed(2) + " €"
        // );
        // console.log("Moyen de paiment : ", item.payments[0].title);
        // console.log("item.discount", item.discount);
        // console.log("is Done .... ", item.id);
        // console.log("Remise", item.discount.toFixed(2));
        // if (ordersById && ordersById.length > 0) {
        //   ordersById?.map((i) => {
        //     console.log("----------------------", i.title);
        //     // i._joinData.extras && console.log('----------------------', i._joinData.extras);
        //     i._joinData.extras &&
        //       i._joinData.extras.map((ext) => {
        //         return console.log(
        //           "----------------------",
        //           ext.choice,
        //           "prix ****",
        //           ext.price
        //         );
        //       });
        //   });
        // }
        // console.log("Prix Total :", "", "" + item.total.toFixed(2) + " €");
        // console.log( " Nombre d'articles: " , nombreArticl)
      }
      if (isDone) {
        await BluetoothEscposPrinter.cutOnePoint();
        // console.log(`cut priint`, i);
        // console.log(`-----------`);
        if (i <= nombreTicket) {
          ActiveChange();
          // console.log("is change .... ");
        } else {
          DesActiveChange();
        }
      }
      i++;
    } while (i <= nombreTicket);
  };
  // To cuisnie
  const ToCuisine = async (id) => {
    const url = "https://dev500.live-resto.fr/apiv2e/orders/update";
    try {
      dispatch({ type: LOADING });
      await fetch(url, {
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-type": "application/json",
          Authorization: "Bearer " + Token,
        },
        body: JSON.stringify({
          orderId: id,
          action: "kitchenstate_id",
          kitchenstate_id: 30,
        }),
      })
        .then((res) => res.json())
        .then((response) => {
          console.log("response||||", response);
          dispatch({ type: SUCCESS });
        });
    } catch (error) {
      console.log(error);
    }
  };
  // Prete
  const ToDeliv = async (id) => {
    const url = "https://dev500.live-resto.fr/apiv2e/orders/update";
    try {
      dispatch({ type: LOADING });
      await fetch(url, {
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-type": "application/json",
          Authorization: "Bearer " + Token,
        },
        body: JSON.stringify({
          orderId: id,
          action: "kitchenstate_id",
          kitchenstate_id: 40,
        }),
      })
        .then((res) => res.json())
        .then((response) => {
          console.log("response||||", response);
          dispatch({ type: SUCCESS });
        });
    } catch (error) {
      console.log(error);
    }
  };
  const AcitvePopUp = () => {
    setVisible(true);
  };
  const DesAcitvePopUp = () => {
    setVisible(false);
  };
  const ActiveLoading = () => {
    setLoading(true);
  };
  const DesActiveLoading = () => {
    setLoading(false);
  };
  const GetOrdersOnClick = async (id, item) => {
    ActiveLoading();

    let body = JSON.stringify({
      orderId: id,
    });
    let URL = "https://dev500.live-resto.fr/apiv2e/orders/details";
    try {
      if (Token) {
        await fetch(URL, {
          method: "POST",
          headers: {
            accept: "application/json",
            "Content-type": "application/json",
            Authorization: "Bearer " + Token,
          },
          body,
        })
          .then((res) => res.json())
          .then((dataStatus) => {
            ActiveDone(),
              ActiveChange(),
              PrinteById(
                item,
                dataStatus.order.products,
                dataStatus.order.productsCount
              );
          })
          .catch((err) => {
            console.log("--- error fey", err);
            // dispatch({type: COMMANDES_FAILED});
          });
        dispatch({ type: REFRESH });
      }
    } catch (error) {
      console.log("--- error fey", error);
    }
  };
  // function Button Card 1
  const OnClick = (id, item) => {
    if (isPrinter) {
      GetOrdersOnClick(id, item);
      setTimeout(() => {
        ToCuisine(id);
        // setLoading(false);
      }, 4000);
    } else {
      setLoading(true)
      AcitvePopUp();
      setTimeout(() => {
        ToCuisine(id);
        dispatch({ type: REFRESH });
        // setLoading(false)
      }, 4000);
    }
  };
  // function Button Card 2
  const ToPrete = (id) => {
      ActiveLoading();
      setTimeout(() => {
        ToDeliv(id);
        dispatch({ type: REFRESH });
      }, 3000);
    // }
  };
  // function Button Card 3
  const OnPrinte = (id, item) => {
    if (isPrinter) {
      GetOrdersOnClick(id, item);
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    } else {
      ActiveLoading();
      AcitvePopUp();
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }
  };

  const NavigatonTo = (nav, To) => {
    nav.navigate(To);
  };

  const ToReservation = () => {
    navigation.navigate('Reservation');
  };
  const ToCommandes = () => {
    navigation.navigate('Commandes');
  };

  return {
    textButtonFiltre,
    toComfirm,
    setStatus,
    status,
    GetProducts,
    Token,
    orders,
    mergedArray,
    ToCuisine,
    configHead,
    ToDeliv,
    loading_btn,
    isPrinter,
    OnClick,
    Visible,
    DesAcitvePopUp,
    refresh,
    ToPrete,
    Loading,
    ActiveChange,
    ActiveDone,
    AcitvePopUp,
    NavigatonTo,
    GetOrdersOnClick,
    ActiveLoading,
    DesActiveLoading,
    PrinteById,
    width,
    OnPrinte,
    dispatch,
    ToReservation,
    ToCommandes
  };
}

//  test printer extars in line
// {
//   orders && orders.length > 0
//     ? orders.map((i) => {
//         i._joinData.extras &&
//           i._joinData.extras.map((ext) => {
//             return BluetoothEscposPrinter.printColumn(
//               [32, 0, 8],
//               [
//                 BluetoothEscposPrinter.ALIGN.LEFT,
//                 BluetoothEscposPrinter.ALIGN.LEFT,
//                 BluetoothEscposPrinter.ALIGN.RIGHT,
//               ],
//               [
//                 "" + "extars" + " ",
//                 "" + ext.choice + "",
//                 "" + ext.price + " €",
//               ],
//               {
//                 encoding: "windows-1254",
//                 codepage: 25,
//                 widthtimes: 0.75,
//                 heigthtimes: 0.75,
//               }
//             );
//           });
//       })
//     : await BluetoothEscposPrinter.printText(
//         "No article .... \r\n",
//         {}
//       );
// }



// const doWihlePrintr = async (item) => {
//   let i = 1;
//   do {
//     if (IsChanged && orders) {
//       // console.log(`title print`, i);
//       // console.log(`body print`, i);
//       try {
//         await BluetoothEscposPrinter.printerInit();
//         await BluetoothEscposPrinter.printerLeftSpace(0);
//         await BluetoothEscposPrinter.printerAlign(
//           BluetoothEscposPrinter.ALIGN.CENTER
//         );
//         await BluetoothEscposPrinter.setBlob(0);
//         await BluetoothEscposPrinter.printText("______________________\r\n", {
//           fonttype: 3,
//           widthtimes: 1,
//           heigthtimes: 1,
//         });
//         await BluetoothEscposPrinter.printText("Live Resto\r\n", {
//           encoding: "GBK",
//           codepage: 0,
//           widthtimes: 3,
//           heigthtimes: 3,
//           fonttype: 1,
//         });
//         await BluetoothEscposPrinter.setBlob(0);
//         await BluetoothEscposPrinter.printText("#" + item.id + "\r\n", {
//           encoding: "GBK",
//           codepage: 0,
//           widthtimes: 3,
//           heigthtimes: 3,
//           fonttype: 1,
//         });
//         await BluetoothEscposPrinter.printText(
//           "______________________________________\r\n",
//           {
//             fonttype: 1,
//           }
//         );
//         await BluetoothEscposPrinter.printerAlign(
//           BluetoothEscposPrinter.ALIGN.CENTER
//         );
//         await BluetoothEscposPrinter.setBlob(0);
//         await BluetoothEscposPrinter.printText(" Livraison \r\n", {
//           encoding: "GBK",
//           codepage: 0,
//           widthtimes: 3,
//           heigthtimes: 3,
//           fonttype: 1,
//         });
//         await BluetoothEscposPrinter.printText("\r\n", {});
//         await BluetoothEscposPrinter.printerAlign(
//           BluetoothEscposPrinter.ALIGN.CENTER
//         );
//         await BluetoothEscposPrinter.printText(
//           "Client : " +
//             item.delivery.full_name +
//             "  --  " +
//             item.delivery.phone +
//             "\r\n",
//           {}
//         );
//         await BluetoothEscposPrinter.printText(
//           " Addresse : " + item.delivery.address + "  \r\n",
//           {}
//         );
//         await BluetoothEscposPrinter.printText(
//           "Ville : " + item.delivery.city + " \r\n",
//           {}
//         );
//         await BluetoothEscposPrinter.printerAlign(
//           BluetoothEscposPrinter.ALIGN.CENTER
//         );
//         await BluetoothEscposPrinter.printText(
//           "______________________________________\r\n",
//           {
//             fonttype: 1,
//           }
//         );
//         await BluetoothEscposPrinter.printText("\r\n", {});

//         {
//           orders.map((i) => {
//             return (
//               BluetoothEscposPrinter.printColumn(
//                 [38, 0, 8],
//                 [
//                   BluetoothEscposPrinter.ALIGN.LEFT,
//                   BluetoothEscposPrinter.ALIGN.CENTER,
//                   BluetoothEscposPrinter.ALIGN.RIGHT,
//                 ],
//                 [
//                   "" + i?._joinData.quantity + "x " + i?.title + "",
//                   "",
//                   "" + i?._joinData.price.toFixed(2) + " €",
//                 ],
//                 {
//                   encoding: "windows-1254",
//                   codepage: 25,
//                   widthtimes: 0.75,
//                   heigthtimes: 0.75,
//                 }
//               ),
//               i._joinData.extras &&
//                 i._joinData.extras.map((ext) => {
//                   return (
//                     BluetoothEscposPrinter.printerAlign(
//                       BluetoothEscposPrinter.ALIGN.LEFT
//                     ),
//                     BluetoothEscposPrinter.printText(
//                       " " + ext.choice + "\r\n",
//                       {
//                         encoding: "windows-1254",
//                         codepage: 25,
//                       }
//                     )
//                   );
//                 }),
//               BluetoothEscposPrinter.printText("\r\n", {})
//             );
//           });
//         }

//         await BluetoothEscposPrinter.printText("\r\n", {});
//         await BluetoothEscposPrinter.printerAlign(
//           BluetoothEscposPrinter.ALIGN.CENTER
//         );
//         await BluetoothEscposPrinter.setBlob(0);
//         await BluetoothEscposPrinter.printText(
//           " Nombre d'articles: " + orders.productsCount + "\r\n",
//           {
//             encoding: "windows-1254",
//             codepage: 25,
//             widthtimes: 1,
//             heigthtimes: 1,
//             fonttype: 1,
//           }
//         );

//         await BluetoothEscposPrinter.printText(
//           "______________________________________\r\n",
//           {
//             fonttype: 1,
//           }
//         );
//         await BluetoothEscposPrinter.printColumn(
//           [20, 2, 10],
//           [
//             BluetoothEscposPrinter.ALIGN.LEFT,
//             BluetoothEscposPrinter.ALIGN.LEFT,
//             BluetoothEscposPrinter.ALIGN.RIGHT,
//           ],
//           ["Moyen de paiement ", ":", "" + item.payments[0].title + ""],
//           {
//             encoding: "windows-1254",
//             codepage: 25,
//           }
//         );
//         await BluetoothEscposPrinter.printColumn(
//           [20, 2, 10],
//           [
//             BluetoothEscposPrinter.ALIGN.LEFT,
//             BluetoothEscposPrinter.ALIGN.LEFT,
//             BluetoothEscposPrinter.ALIGN.RIGHT,
//           ],
//           [
//             "Frais de Livraison",
//             ":",
//             "" + item.delivery_price.toFixed(2) + " €",
//           ],
//           {
//             encoding: "windows-1254",
//             codepage: 25,
//           }
//         );

//         await BluetoothEscposPrinter.printColumn(
//           [20, 2, 10],
//           [
//             BluetoothEscposPrinter.ALIGN.LEFT,
//             BluetoothEscposPrinter.ALIGN.CENTER,
//             BluetoothEscposPrinter.ALIGN.RIGHT,
//           ],
//           ["Remise :", "", "" + item.discount.toFixed(2) + " € \r\n"],
//           {
//             encoding: "windows-1254",
//             codepage: 25,
//           }
//         );

//         await BluetoothEscposPrinter.printColumn(
//           [14, 0, 8],
//           [
//             BluetoothEscposPrinter.ALIGN.LEFT,
//             BluetoothEscposPrinter.ALIGN.LEFT,
//             BluetoothEscposPrinter.ALIGN.RIGHT,
//           ],
//           ["Prix Total :", "", "" + item.total.toFixed(2) + " €"],
//           {
//             encoding: "windows-1254",
//             codepage: 25,
//             widthtimes: 1,
//             heigthtimes: 1,
//           }
//         );

//         await BluetoothEscposPrinter.printText(
//           "_________________________________\r\n",
//           {
//             fonttype: 1,
//             heigthtimes: 1,
//           }
//         );
//         await BluetoothEscposPrinter.printText("\r\n", {});
//         await BluetoothEscposPrinter.printerAlign(
//           BluetoothEscposPrinter.ALIGN.CENTER
//         );
//         await BluetoothEscposPrinter.printText(
//           "Merci d'avoir commandé chez Live Resto\r\n",
//           {
//             encoding: "windows-1250",
//             codepage: 25,
//           }
//         );

//         await BluetoothEscposPrinter.printText(
//           "UNE ENTREPRISE FRAN€AISE \r\n",
//           {
//             encoding: "GBK",
//           }
//         );
//         await BluetoothEscposPrinter.printerAlign(
//           BluetoothEscposPrinter.ALIGN.CENTER
//         );
//         await BluetoothEscposPrinter.printText("\r\n\r\n\r\n", {});
//         await BluetoothEscposPrinter.printText("  \r\n", {
//           encoding: "windows-1250",
//           codepage: 25,
//           widthtimes: 3,
//           heigthtimes: 3,
//           fonttype: 1,
//         });
//       } catch (error) {
//         dispatch({ type: PRINTER_FAILED, payload: "l'impression échoué" });
//         setTimeout(() => {
//           dispatch({ type: DELETE_MESSAGES_PRINTER });
//         }, 5000);
//         alert(error);
//       }

//       ActiveDone();
//       console.log("is Done .... ", item.id);
//       console.log("item.discount .... ", item.discount);
//       if (orders && orders.length > 0) {
//         orders?.map((i) => {
//           console.log("----------------------", i.title);
//         });
//       }
//     }
//     if (isDone) {
//       await BluetoothEscposPrinter.cutOnePoint();
//       // console.log('nombreTicket', nombreTicket);
//       console.log(`cut priint`, i);
//       console.log("orders.productsCount", orders.productsCount);
//       console.log(`-----------`);
//       if (i <= nombreTicket) {
//         ActiveChange();
//         console.log("is change .... ");
//       } else {
//         DesActiveChange();
//       }
//     }
//     i++;
//   } while (i <= nombreTicket);
// };