import React from "react";
import Laoder from "../../../../../../../Components/Laoder";

const LazyCard1 = React.lazy(() => import("../../../Card-1"));
const LazyCard2 = React.lazy(() => import("../../../Card-2"));
const LazyCard3 = React.lazy(() => import("../../../Card-3"));

const RenderItem = ({ item, navigation }) => {
  if (item?.kitchenstate_id === 20 && item?.state_id === 20) {
    return (
      <React.Suspense fallback={<Laoder />}>
        <LazyCard1 item={item} navigation={navigation} />
      </React.Suspense>
    );
  }
  if (item?.kitchenstate_id === 30 && item?.state_id === 20) {
    return (
      <React.Suspense fallback={<Laoder />}>
        <LazyCard2 item={item} navigation={navigation} />
      </React.Suspense>
    );
  }
  if (item?.kitchenstate_id === 40 && item?.state_id === 20) {
    return (
      <React.Suspense fallback={<Laoder />}>
        <LazyCard3 item={item} navigation={navigation} />
      </React.Suspense>
    );
  } else {
    return null;
  }
};

export default RenderItem;
