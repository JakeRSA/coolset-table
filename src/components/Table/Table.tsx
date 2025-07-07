import { Flex, Table as RTable } from "@radix-ui/themes";
import { useState } from "react";
import { Header } from "./Header";
import { TableContent } from "./TableContent";
import { DEFAULT_ROWS_PER_PAGE, type SectionTitle } from "./consts";
import { Footer } from "./Footer/Footer";

export type TableRow = {
  id: number;
  name: string;
  section: SectionTitle;
  price: number;
  weight: number;
};

type Props = {
  data: TableRow[];
};

export const Table = ({ data }: Props) => {
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

  // TODO sorting

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

  return (
    <Flex direction="column" gap="3" width="100vw" p="9">
      {/* TODO sticky header */}
      <Header
        sections={sectionFilters}
        onChangeFilteredSections={setSectionFilters}
      />
      <TableContent rows={rows} />
      <Footer
        displayedData={filteredData}
        selectedRowsPerPage={selectedRowsPerPage}
        onChangeRowsPerPage={(rowsPerPage) => {
          setSelectedPage(1);
          setSelectedRowsPerPage(rowsPerPage);
        }}
        selectedPage={selectedPage}
        onChangePage={(page) => {
          setSelectedPage(page);
        }}
      />
    </Flex>
  );
};
