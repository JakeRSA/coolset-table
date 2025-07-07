import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";

import "./App.css";
import { Table } from "./components/Table/Table";
import { mockData } from "./components/Table/mockData";

function App() {
  return (
    <Theme>
      <Table data={mockData} />
    </Theme>
  );
}

export default App;
