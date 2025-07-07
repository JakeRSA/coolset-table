import { Flex, Heading, Table as RTable } from "@radix-ui/themes";
import { useState } from "react";
import { RowsPerPage } from "./RowsPerPage";
import { PageSwitcher } from "./PageSwitcher";

export type TableRow<T> = T & {
  id: number;
};

export type TableData = TableRow<Record<string, any>>[];

type PaginationProps = {
  // TODO: page, rowsPerPage, selectedPage should be passed to table with pagination prop?
  rowsPerPageOptions: number[];
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement>,
    newPage: number
  ) => void;
};

type Props = {
  data: TableData;
  title: string;
  pagination?: PaginationProps;
};

export const Table = ({ data, title, pagination }: Props) => {
  const [selectedRowsPerPage, setSelectedRowsPerPage] = useState(
    pagination?.rowsPerPageOptions?.[0] || Number.POSITIVE_INFINITY
  );

  const [selectedPage, setSelectedPage] = useState(1);

  if (!data || data.length === 0) {
    return <p>No data available</p>;
  }

  const headers = Object.keys(data[0])
    .filter((key) => key !== "id")
    .map((key) => (
      <RTable.ColumnHeaderCell key={key}>{key}</RTable.ColumnHeaderCell>
    ));

  const recordsToDisplay = pagination
    ? data.slice(
        (selectedPage - 1) * selectedRowsPerPage,
        selectedPage * selectedRowsPerPage
      )
    : data;

  const rows = recordsToDisplay.map((row) => (
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
      {pagination && (
        <Flex>
          <RowsPerPage
            rowsPerPage={selectedRowsPerPage}
            rowsPerPageOptions={pagination.rowsPerPageOptions}
            onRowsPerPageChange={(selectedOption) => {
              setSelectedPage(1);
              setSelectedRowsPerPage(selectedOption);
            }}
          />
          <PageSwitcher
            page={selectedPage}
            rowsPerPage={selectedRowsPerPage}
            count={data.length}
            onPageChange={setSelectedPage}
          />
        </Flex>
      )}
    </>
  );
};
