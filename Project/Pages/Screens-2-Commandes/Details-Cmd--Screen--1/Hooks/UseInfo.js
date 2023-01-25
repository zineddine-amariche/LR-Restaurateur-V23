import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ORDER_SUCCESS } from "../../../../Redux/Types/Commandes";
import { useWindowDimensions } from "react-native";
import {
  DELETE_MESSAGES_PRINTER,
  PRINTER_FAILED,
} from "../../../../Redux/Types/Printer";
import { BluetoothEscposPrinter } from "@brooons/react-native-bluetooth-escpos-printer";

export function useInfo() {
  const { width } = useWindowDimensions();
  const dispatch = useDispatch();
  const Printer = useSelector((state) => state.Printer);
  const { isPrinter } = Printer;
  const Commandes = useSelector((state) => state.Commandes);
  const auth = useSelector((state) => state.auth);

  const { nombreTicket } = Printer;

  const { productData, orders } = Commandes;
  const { Token } = auth;

  let configHead = {
    headers: {
      "Content-Type": "application/json",
      "Accept-Language": "fr",
      Authorization: "Bearer " + Token,
    },
  };

  const GetOrderMenue = async (id) => {
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
            dispatch({ type: ORDER_SUCCESS, payload: Data });
          })
          .catch((err) => {
            console.log("--- error fey", err);
          });
      }
    } catch (error) {
      console.log("--- error fey", error);
    }
  };

  const [isDone, setIsDone] = useState(false);
  const [IsChanged, setIsChanged] = useState(false);
  const [Loading, setLoading] = useState(false);
  const [Visible, setVisible] = useState(false);
  const AcitvePopUp = () => {
    setVisible(true);
  };

  const DesAcitvePopUp = () => {
    setVisible(false);
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

  const doWihlePrintr = async (item, articlNbr) => {
    let i = 1;
    setLoading(true)
    do {
      if (IsChanged && orders && orders.length > 0) {
        // console.log(`title print`, i);
        // console.log(`body print`, i);
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
          await BluetoothEscposPrinter.printText("#" + item.id + "\r\n", {
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
              item.delivery.full_name +
              "  --  " +
              item.delivery.phone +
              "\r\n",
            {}
          );
          await BluetoothEscposPrinter.printText(
            " Addresse : " + item.delivery.address + "  \r\n",
            {}
          );
          await BluetoothEscposPrinter.printText(
            "Ville : " + item.delivery.city + " \r\n",
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
            orders.map((i) => {
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
                    // return BluetoothEscposPrinter.printColumn(
                    //   [36, 8],
                    //   [
                    //     BluetoothEscposPrinter.ALIGN.LEFT,
                    //     BluetoothEscposPrinter.ALIGN.RIGHT,
                    //   ],
                    //   ["" + ext?.choice + "\r\n", "" + ext?.price + " €"],

                    //   {
                    //     encoding: "windows-1254",
                    //     codepage: 25,
                    //     widthtimes: 0.75,
                    //     heigthtimes: 0.75,
                    //   }
                    // );
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
            " Nombre d'articles: " + articlNbr.productsCount + "\r\n",
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
            ["Moyen de paiement ", ":", "" + item.payments[0].title + ""],
            {
              encoding: "windows-1254",
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
              "" + item.delivery_price.toFixed(2) + " €",
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
            ["Remise :", "", "" + item.discount.toFixed(2) + " € \r\n"],
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
            ["Prix Total :", "", "" + item.total.toFixed(2) + " €"],
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
          dispatch({ type: PRINTER_FAILED, payload: "l'impression échoué" });
          setTimeout(() => {
            dispatch({ type: DELETE_MESSAGES_PRINTER });
          }, 5000);
          alert(error);
        }

        ActiveDone();
        console.log("is Done .... ", item.id);
        console.log("item.discount .... ", item.discount);
        if (orders && orders.length > 0) {
          orders?.map((i) => {
            console.log("----------------------", i.title);
          });
        }
      }
      if (isDone) {
        await BluetoothEscposPrinter.cutOnePoint();
        console.log(`cut priint`, i);
        console.log(`-----------`);
        if (i <= nombreTicket) {
          ActiveChange();
          console.log("is change .... ");
        } else {
          DesActiveChange();
        }
      }
      i++;
    } while (i <= nombreTicket);
  };

  // function Button Card 3
  const OnPrint = (item, NombreArticle) => {
    if (isPrinter) {
      doWihlePrintr(item, NombreArticle);
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    } else {
      setLoading(true);
      AcitvePopUp();
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }
  };

  return {
    GetOrderMenue,
    orders,
    doWihlePrintr,
    ActiveChange,
    ActiveDone,
    width,
    productData,
    OnPrint,
    Loading,
    DesAcitvePopUp,
    AcitvePopUp,
    Visible,
  };
}
