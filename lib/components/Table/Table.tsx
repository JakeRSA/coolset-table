import { Heading, Table as RTable } from "@radix-ui/themes";

export type TableRow<T> = T & {
  id: number;
};

export type TableData = TableRow<Record<string, any>>[];

type Props = {
  data: TableData;
  title: string;
};

export const Table = ({ data, title }: Props) => {
  if (!data || data.length === 0) {
    return <p>No data available</p>;
  }

  const headers = Object.keys(data[0])
    .filter((key) => key !== "id")
    .map((key) => (
      <RTable.ColumnHeaderCell key={key}>{key}</RTable.ColumnHeaderCell>
    ));

  const rows = data.map((row) => (
    <RTable.Row key={row.id}>
      {Object.entries(row).reduce<React.ReactElement[]>(
        (cells, [key, value]) => {
          if (key !== "id") {
            cells.push(
              <RTable.Cell key={`${key}=${row.id}`}>{value}</RTable.Cell>
            );
          }
          return cells;
        },
        []
      )}
    </RTable.Row>
  ));

  return (
    <>
      <Heading>{title}</Heading>
      <RTable.Root variant="surface">
        <RTable.Header>{headers}</RTable.Header>
        <RTable.Body>{rows}</RTable.Body>
      </RTable.Root>
    </>
  );
};
