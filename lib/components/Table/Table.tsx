import { Flex, Table as RTable } from "@radix-ui/themes";
import { useState } from "react";
import { RowsPerPage } from "./RowsPerPage";
import { PageSwitcher } from "./PageSwitcher";
import { Header } from "./Header";
import { TableContent } from "./TableContent";

export type SectionTitle =
  | "Produce"
  | "Dairy"
  | "Bakery"
  | "Meat"
  | "Seafood"
  | "Beverages"
  | "Pantry"
  | "Frozen"
  | "Snacks"
  | "Condiments"
  | "Canned Goods"
  | "Breakfast";

export type TableRow = {
  id: number;
  name: string;
  section: SectionTitle;
  price: number;
  weight: number;
};

type PaginationProps = {
  // TODO: page, rowsPerPage, selectedPage should be passed to table with pagination prop?
  rowsPerPageOptions: number[];
  onChangePage: (
    event: React.MouseEvent<HTMLButtonElement>,
    newPage: number
  ) => void;
};

type Props = {
  data: TableRow[];
  title: string;
  pagination?: PaginationProps;
};

export const Table = ({ data, title, pagination }: Props) => {
  const [selectedRowsPerPage, setSelectedRowsPerPage] = useState(
    pagination?.rowsPerPageOptions?.[0] || Number.POSITIVE_INFINITY
  );

  const [selectedPage, setSelectedPage] = useState(1);

  const initialSectionFilters = data.reduce<Record<string, boolean>>(
    (acc, row) => {
      if (!acc[row.section]) {
        acc[row.section] = true;
      }
      return acc;
    },
    {}
  );

  const [sectionFilters, setSectionFilters] = useState<
    Record<SectionTitle, boolean>
  >(initialSectionFilters);

  const headers = Object.keys(data[0])
    .filter((key) => key !== "id")
    .map((key) => (
      <RTable.ColumnHeaderCell key={key}>{key}</RTable.ColumnHeaderCell>
    ));

  const filteredData = data.filter((row) => sectionFilters[row.section]);

  const recordsToDisplay = pagination
    ? filteredData.slice(
        (selectedPage - 1) * selectedRowsPerPage,
        selectedPage * selectedRowsPerPage
      )
    : filteredData;

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

  if (!filteredData || filteredData.length === 0) {
    return <p>No data available</p>;
  }

  return (
    <>
      {/* TODO: rename Header so it doesn't clash conceptually with Radix UI's Header */}
      <Header
        title={title}
        sections={sectionFilters}
        onChangeFilteredSections={setSectionFilters}
      />
      <TableContent rows={rows} />
      {pagination && (
        <Flex align="center">
          <RowsPerPage
            rowsPerPage={selectedRowsPerPage}
            rowsPerPageOptions={pagination.rowsPerPageOptions}
            onChangeRowsPerPage={(selectedOption) => {
              setSelectedPage(1);
              setSelectedRowsPerPage(selectedOption);
              // TODO fix this:
              window.scrollTo({ top: 0 });
            }}
          />
          <PageSwitcher
            page={selectedPage}
            rowsPerPage={selectedRowsPerPage}
            count={filteredData.length}
            onChangePage={(newPage) => {
              setSelectedPage(newPage);
              window.scrollTo({ top: 0 });
            }}
          />
        </Flex>
      )}
    </>
  );
};
