import { useEffect } from "react";

const TabTitle = (title) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
};

export default TabTitle;
