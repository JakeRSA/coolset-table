import { Flex, IconButton, Text } from "@radix-ui/themes";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";

type PageSwitcherProps = {
  page: number;
  rowsPerPage: number;
  count: number;
  onChangePage: (newPage: number) => void;
};
export const PageSwitcher = ({
  page,
  rowsPerPage,
  count,
  onChangePage,
}: PageSwitcherProps) => {
  const firstRowIndex = (page - 1) * rowsPerPage + 1;
  const lastRowIndex = Math.min(page * rowsPerPage, count);

  const isLastPage = lastRowIndex >= count;
  return (
    <Flex gap="2" align="center">
      <Text size="1">{`${firstRowIndex}-${lastRowIndex} of ${count}`}</Text>
      <IconButton
        variant="ghost"
        disabled={page === 1}
        onClick={() => onChangePage(page - 1)}
      >
        <ChevronLeftIcon />
      </IconButton>
      <IconButton
        variant="ghost"
        disabled={isLastPage}
        onClick={() => onChangePage(page + 1)}
      >
        <ChevronRightIcon />
      </IconButton>
    </Flex>
  );
};
