import {useState} from 'react';

export function UseClose() {
  const [visibleModel, setVisibleModel] = useState(false);

  const openModel = () => {
    setVisibleModel(true);
  };
  const closeModel = () => {
    setVisibleModel(false);
  };
  return {
    visibleModel,
    openModel,
    closeModel,
  };
}
