import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";

import "./App.css";
import { GroceryTable } from "./components/GroceryTable/GroceryTable";
import { mockData } from "./components/GroceryTable/mockData";

function App() {
  return (
    <Theme>
      <GroceryTable data={mockData} />
    </Theme>
  );
}

export default App;
