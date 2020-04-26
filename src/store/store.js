import React from "react";


const Store = React.createContext({
  todos: [
    "Buy milk",
    "Play klanlar.org :)"
  ]
});

export default Store;