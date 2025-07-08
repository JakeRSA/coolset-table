import { Table } from "@radix-ui/themes";
import type { GroceryTableRow } from "./GroceryTable";

export const TableRows = ({ data }: { data: GroceryTableRow[] }) => {
  return data.map((row) => (
    <Table.Row key={row.id}>
      {Object.entries(row).reduce<React.ReactElement[]>(
        (cells, [key, value]) => {
          if (key === "id") {
            return cells;
          }
          if (key === "weight") {
            return cells;
          }
          cells.push(<Table.Cell key={`${key}=${row.id}`}>{value}</Table.Cell>);
          return cells;
        },
        []
      )}
    </Table.Row>
  ));
};
