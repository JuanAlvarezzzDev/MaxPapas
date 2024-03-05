import { useState } from "react";

const useSidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  return { showSidebar, setShowSidebar };
};


export default useSidebar