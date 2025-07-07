import { Table } from "@radix-ui/themes";

export const TableContent = ({ rows }: { rows: React.ReactNode[] }) => {
  if (!rows || rows.length === 0) {
    return <p>No data available</p>;
  }

  return (
    <Table.Root variant="surface">
      <Table.Header>
        <Table.ColumnHeaderCell key={"name"}>Name</Table.ColumnHeaderCell>
        <Table.ColumnHeaderCell key={"section"}>Section</Table.ColumnHeaderCell>
        <Table.ColumnHeaderCell key={"price"}>Price (€)</Table.ColumnHeaderCell>
        <Table.ColumnHeaderCell key={"weight"}>
          Price / 100g (€)
        </Table.ColumnHeaderCell>
      </Table.Header>
      <Table.Body>{rows}</Table.Body>
    </Table.Root>
  );
};
