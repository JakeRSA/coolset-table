import { Flex, Table as RTable, Text } from "@radix-ui/themes";
import { useState } from "react";
import { RowsPerPage } from "./RowsPerPage";
import { PageSwitcher } from "./PageSwitcher";
import { Header } from "./Header";
import { TableContent } from "./TableContent";
import { DEFAULT_ROWS_PER_PAGE, type SectionTitle } from "./consts";

export type TableRow = {
  id: number;
  name: string;
  section: SectionTitle;
  price: number;
  weight: number;
};

type Props = {
  data: TableRow[];
  title: string;
};

export const Table = ({ data, title }: Props) => {
  const [selectedRowsPerPage, setSelectedRowsPerPage] = useState(
    DEFAULT_ROWS_PER_PAGE
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

  const filteredData = data.filter((row) => sectionFilters[row.section]);

  const recordsToDisplay = filteredData.slice(
    (selectedPage - 1) * selectedRowsPerPage,
    selectedPage * selectedRowsPerPage
  );
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
    return <Text>No data available</Text>;
  }

  return (
    <>
      <Header
        title={title}
        sections={sectionFilters}
        onChangeFilteredSections={setSectionFilters}
      />
      <TableContent rows={rows} />
      <Flex align="center">
        <RowsPerPage
          rowsPerPage={selectedRowsPerPage}
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
    </>
  );
};
