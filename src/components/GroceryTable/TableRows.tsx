import { Table } from "@radix-ui/themes";
import type { GroceryTableRow } from "./GroceryTable";

export const TableRows = ({ data }: { data: GroceryTableRow[] }) => {
  return data.map((row) => (
    <Table.Row key={row.id}>
      {Object.entries(row).reduce<React.ReactElement[]>(
        (cells, [key, value]) => {
          if (key !== "id") {
            cells.push(
              <Table.Cell key={`${key}=${row.id}`}>{value}</Table.Cell>
            );
          }
          return cells;
        },
        []
      )}
    </Table.Row>
  ));
};
