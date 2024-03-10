import React, { useState } from "react";
import Header from "./components/Home/Header";
const App = () => {
  const [visible, setVisible] = useState(3);

  // Load more cards
  const loadMore = () => {
    setVisible((prevVisible) => prevVisible + 3);
  };

  return (
    <div>
      <Header />

      <div>
        <h2 className="text-center text-gray myy">Get Your Dream Car</h2>
      </div>
    </div>
  );
};

export default App;
