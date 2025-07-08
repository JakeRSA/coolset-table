import { Flex } from "@radix-ui/themes";
import { useState } from "react";
import { PageHeader } from "./PageHeader";
import { TableContent } from "./TableContent";
import { DEFAULT_ROWS_PER_PAGE, type SectionTitle } from "./consts";
import { Footer } from "./Footer/Footer";
import {
  getInitialSectionFilters,
  getPageRows,
  getSortedAndFilteredTableData,
} from "./utils";

export type GroceryTableRow = {
  id: number;
  name: string;
  section: SectionTitle;
  price: number;
  weight: number;
};

export type Sorting = {
  key: keyof GroceryTableRow;
  direction: "ascending" | "descending";
} | null;

type GroceryTableProps = {
  data: GroceryTableRow[];
};

export const GroceryTable = ({ data }: GroceryTableProps) => {
  const [selectedRowsPerPage, setSelectedRowsPerPage] = useState(
    DEFAULT_ROWS_PER_PAGE
  );
  const [selectedPage, setSelectedPage] = useState(1);

  const initialSectionFilters = getInitialSectionFilters(data);

  const [sectionFilters, setSectionFilters] = useState<
    Record<SectionTitle, boolean>
  >(initialSectionFilters);
  const [sorting, setSorting] = useState<Sorting>(null);

  const filteredData = getSortedAndFilteredTableData({
    data,
    sorting,
    filters: sectionFilters,
  });

  const recordsToDisplay = getPageRows({
    data: filteredData,
    selectedPage,
    selectedRowsPerPage,
  });

  const handleChangeRowsPerPage = (rowsPerPage: number) => {
    setSelectedRowsPerPage(rowsPerPage);
    setSelectedPage(1);
  };

  return (
    <Flex className="h-screen" direction="column" gap="3" p="9">
      <PageHeader
        sections={sectionFilters}
        onChangeFilteredSections={setSectionFilters}
      />
      <TableContent
        data={recordsToDisplay}
        sorting={sorting}
        onChangeSorting={setSorting}
      />
      <Footer
        displayedData={filteredData}
        selectedRowsPerPage={selectedRowsPerPage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
        selectedPage={selectedPage}
        onChangePage={setSelectedPage}
      />
    </Flex>
  );
};
