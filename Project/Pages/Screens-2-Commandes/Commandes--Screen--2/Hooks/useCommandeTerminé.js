import { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {BluetoothEscposPrinter} from '@brooons/react-native-bluetooth-escpos-printer';
import { DELETE_MESSAGES_PRINTER, PRINTER_FAILED } from '../../../../Redux/Types/Printer';
import { useWindowDimensions } from 'react-native';
import { REFRESH } from '../../../../Redux/Types/Commandes';

export function useCommandeTerminé() {
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const {Token} = auth;

  let configHead = {
    headers: {
      'Content-Type': 'application/json',
      'Accept-Language': 'fr',
      accept: 'application/json',
      Authorization: 'Bearer ' + Token,
    },
  };

  const NavigatonTo = (nav, To) => {
    nav.navigate(To);
  };
  const [Loading, setLoading] = useState(false);

  const Commandes = useSelector(state => state.Commandes);
  const {toComfirm, others, loading_btn, refresh} = Commandes;
  const mergedArray = [ ...others];
  const Tablet = useSelector(state => state.IsTab);
  const {IsTab} = Tablet;
  const [IsChanged, setIsChanged] = useState(false);
  const [orders, setOrders] = useState([]);
  const [isDone, setIsDone] = useState(false);
  let [count, setCount] = useState(3);
  const [Visible, setVisible] = useState(false);
  const {width} = useWindowDimensions();
  const Printer = useSelector((state) => state.Printer);
  const { isPrinter, nombreTicket } = Printer;
  const ActiveDone = () => {
    setIsDone(true);
  };
  const GetProducts = async id => {
    try {
      if (Token) {
        // console.log('fetch', Token, id);
        await fetch('https://dev500.live-resto.fr/apiv2e/orders/details', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept-Language': 'fr',
            Authorization: 'Bearer ' + Token,
          },
          body: JSON.stringify({
            orderId: id,
          }),
        })
          .then(res => res.json())
          .then(dataStatus => {
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
  const ActiveChange = () => {
    setIsChanged(true);
  };
  const DesActiveChange = () => {
    setIsChanged(false);
  };
  const doWihlePrintr = async item => {
    let i = 1;
    do {
      if (IsChanged) {
        console.log(`title print`, i);
        console.log(`body print`, i);
        try {
          await BluetoothEscposPrinter.printerInit();
          await BluetoothEscposPrinter.printerLeftSpace(0);
          await BluetoothEscposPrinter.printerAlign(
            BluetoothEscposPrinter.ALIGN.CENTER,
          );
          await BluetoothEscposPrinter.setBlob(0);
          await BluetoothEscposPrinter.printText('______________________\r\n', {
            fonttype: 3,
            widthtimes: 1,
            heigthtimes: 1,
          });
          await BluetoothEscposPrinter.printText('Live Resto\r\n', {
            encoding: 'GBK',
            codepage: 0,
            widthtimes: 3,
            heigthtimes: 3,
            fonttype: 1,
          });
          await BluetoothEscposPrinter.setBlob(0);
          await BluetoothEscposPrinter.printText('#' + item.id + '\r\n', {
            encoding: 'GBK',
            codepage: 0,
            widthtimes: 3,
            heigthtimes: 3,
            fonttype: 1,
          });
          await BluetoothEscposPrinter.printText(
            '______________________________________\r\n',
            {
              fonttype: 1,
            },
          );
          await BluetoothEscposPrinter.printerAlign(
            BluetoothEscposPrinter.ALIGN.CENTER,
          );
          await BluetoothEscposPrinter.setBlob(0);
          await BluetoothEscposPrinter.printText(' Livraison \r\n', {
            encoding: 'GBK',
            codepage: 0,
            widthtimes: 3,
            heigthtimes: 3,
            fonttype: 1,
          });
          await BluetoothEscposPrinter.printText('\r\n', {});
          await BluetoothEscposPrinter.printerAlign(
            BluetoothEscposPrinter.ALIGN.CENTER,
          );
          await BluetoothEscposPrinter.printText(
            'Client : ' +
              item.delivery.full_name +
              '  --  ' +
              item.delivery.phone +
              '\r\n',
            {},
          );
          await BluetoothEscposPrinter.printText(
            ' Addresse : ' + item.delivery.address + '  \r\n',
            {},
          );
          await BluetoothEscposPrinter.printText(
            'Ville : ' + item.delivery.city + ' \r\n',
            {},
          );
          await BluetoothEscposPrinter.printerAlign(
            BluetoothEscposPrinter.ALIGN.CENTER,
          );
          await BluetoothEscposPrinter.printText(
            '______________________________________\r\n',
            {
              fonttype: 1,
            },
          );
          await BluetoothEscposPrinter.printText('\r\n', {});

          {
            orders && orders.length > 0
              ? orders.map(i => {
                  return BluetoothEscposPrinter.printColumn(
                    [38, 0, 8],
                    [
                      BluetoothEscposPrinter.ALIGN.LEFT,
                      BluetoothEscposPrinter.ALIGN.CENTER,
                      BluetoothEscposPrinter.ALIGN.RIGHT,
                    ],
                    [
                      '' + i._joinData.quantity + 'x ' + i.title + '',
                      '',
                      '' + i._joinData.price.toFixed(2) + ' €',
                    ],
                    {
                      encoding: 'windows-1254',
                      codepage: 25,
                      widthtimes: 0.75,
                      heigthtimes: 0.75,
                    },
                  );
                })
              : await BluetoothEscposPrinter.printText(
                  'No article .... \r\n',
                  {},
                );
          }
          await BluetoothEscposPrinter.printText('\r\n', {});
          await BluetoothEscposPrinter.printerAlign(
            BluetoothEscposPrinter.ALIGN.CENTER,
          );
          await BluetoothEscposPrinter.setBlob(0);
          await BluetoothEscposPrinter.printText(
            " Nombre d'articles: " + item.productsCount + '\r\n',
            {
              // encoding: 'GBK',
              encoding: 'windows-1254',
              codepage: 25,
              widthtimes: 1,
              heigthtimes: 1,
              fonttype: 1,
            },
          );

          await BluetoothEscposPrinter.printText(
            '______________________________________\r\n',
            {
              fonttype: 1,
            },
          );

          await BluetoothEscposPrinter.printColumn(
            [20, 2, 10],
            [
              BluetoothEscposPrinter.ALIGN.LEFT,
              BluetoothEscposPrinter.ALIGN.LEFT,
              BluetoothEscposPrinter.ALIGN.RIGHT,
            ],
            [
              'Frais de Livraison',
              ':',
              '' + item.delivery_price.toFixed(2) + ' €',
            ],
            {
              encoding: 'windows-1254',
              codepage: 25,
            },
          );

          {
            item.discount == 0
              ? await BluetoothEscposPrinter.printColumn(
                  [10, 12, 10],
                  [
                    BluetoothEscposPrinter.ALIGN.LEFT,
                    BluetoothEscposPrinter.ALIGN.CENTER,
                    BluetoothEscposPrinter.ALIGN.RIGHT,
                  ],
                  ['', '', ''],
                  {
                    encoding: 'UTF-8',
                    fonttype: 1,
                    widthtimes: 1,
                    heigthtimes: 1,
                  },
                )
              : await BluetoothEscposPrinter.printColumn(
                  [20, 2, 10],
                  [
                    BluetoothEscposPrinter.ALIGN.LEFT,
                    BluetoothEscposPrinter.ALIGN.CENTER,
                    BluetoothEscposPrinter.ALIGN.RIGHT,
                  ],
                  ['Remise :', '', '' + item.discount.toFixed(2) + ' € \r\n'],
                  {
                    encoding: 'windows-1254',
                    codepage: 25,
                  },
                );
          }

          await BluetoothEscposPrinter.printColumn(
            [14, 0, 8],
            [
              BluetoothEscposPrinter.ALIGN.LEFT,
              BluetoothEscposPrinter.ALIGN.LEFT,
              BluetoothEscposPrinter.ALIGN.RIGHT,
            ],
            ['Prix Total :', '', '' + item.total.toFixed(2) + ' €'],
            {
              encoding: 'windows-1254',
              codepage: 25,
              widthtimes: 1,
              heigthtimes: 1,
            },
          );

          await BluetoothEscposPrinter.printText(
            '_________________________________\r\n',
            {
              fonttype: 1,
              heigthtimes: 1,
            },
          );
          await BluetoothEscposPrinter.printText('\r\n', {});
          await BluetoothEscposPrinter.printerAlign(
            BluetoothEscposPrinter.ALIGN.CENTER,
          );
          await BluetoothEscposPrinter.printText(
            "Merci d'avoir commandé chez Live Resto\r\n",
            {
              encoding: 'windows-1250',
              codepage: 25,
            },
          );

          await BluetoothEscposPrinter.printText(
            'UNE ENTREPRISE FRAN€AISE \r\n',
            {
              // Western European (Windows)
              //  encoding: 'Windows-1253',
              //  encoding: 'Utf-8',
              encoding: 'GBK',

              // codepage: 25,
            },
          );
          await BluetoothEscposPrinter.printerAlign(
            BluetoothEscposPrinter.ALIGN.CENTER,
          );
          await BluetoothEscposPrinter.printText('\r\n\r\n\r\n', {});
          await BluetoothEscposPrinter.printText('  \r\n', {
            encoding: 'windows-1250',
            codepage: 25,
            widthtimes: 3,
            heigthtimes: 3,
            fonttype: 1,
          });
        } catch (error) {
          dispatch({type: PRINTER_FAILED, payload: "l'impression échoué"});
          setTimeout(() => {
            dispatch({type: DELETE_MESSAGES_PRINTER});
          }, 5000);
        }
        // setIsDone(true);
        ActiveDone();
        console.log('is Done .... ', item.id);
      }
      if (isDone) {
        // await BluetoothEscposPrinter.cutOnePoint();
        console.log(`cut priint`, i);
        console.log(`-----------`);
        if (i <= count) {
          ActiveChange();
          console.log('is change .... ');
        } else {
          DesActiveChange();
        }
      }
      i++;
    } while (i <= count);
  };
  const ActiveLoading = () => {
    setLoading(true);
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
        setLoading(false);
      }, 4000);
    } else {
      ActiveLoading();
      AcitvePopUp();
      setTimeout(() => {
        setLoading(false);
      }, 4000);
    }
  };
  const DesAcitvePopUp = () => {
    setVisible(false);
  };
  const AcitvePopUp = () => {
    setVisible(true);
  };
  return {
    configHead,
    NavigatonTo,
    dispatch,
    mergedArray,
    dispatch,
    IsTab,
    doWihlePrintr,
    GetProducts,
    DesAcitvePopUp,
    Visible,
    AcitvePopUp,
    width,
    ActiveDone,
    ActiveChange,
    OnClick,
    Loading
  };
}
