import { Flex } from "@radix-ui/themes";
import { RowsPerPage } from "./RowsPerPage";
import { PageSwitcher } from "./PageSwitcher";
import type { TableRow } from "./Table";

type FooterProps = {
  displayedData: TableRow[];
  selectedRowsPerPage: number;
  onChangeRowsPerPage: (rowsPerPage: number) => void;
  selectedPage: number;
  onChangePage: (page: number) => void;
};

export const Footer = ({
  displayedData,
  selectedRowsPerPage,
  onChangeRowsPerPage,
  selectedPage,
  onChangePage,
}: FooterProps) => {
  return (
    <Flex align="center" gap="4">
      <RowsPerPage
        rowsPerPage={selectedRowsPerPage}
        onChangeRowsPerPage={onChangeRowsPerPage}
      />
      <PageSwitcher
        page={selectedPage}
        rowsPerPage={selectedRowsPerPage}
        count={displayedData.length}
        onChangePage={onChangePage}
      />
    </Flex>
  );
};
