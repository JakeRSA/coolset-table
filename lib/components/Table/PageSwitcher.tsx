import { Flex, IconButton, Text } from "@radix-ui/themes";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";

type PageSwitcherProps = {
  page: number;
  rowsPerPage: number;
  count: number;
  onPageChange: (newPage: number) => void;
};
export const PageSwitcher = ({
  page,
  rowsPerPage,
  count,
  onPageChange,
}: PageSwitcherProps) => {
  const firstRowIndex = (page - 1) * rowsPerPage + 1;
  const lastRowIndex = Math.min(page * rowsPerPage, count);

  const isLastPage = lastRowIndex >= count;
  return (
    <Flex gap="2">
      <Text>{`${firstRowIndex}-${lastRowIndex} of ${count}`}</Text>
      <IconButton
        variant="ghost"
        disabled={page === 1}
        onClick={() => onPageChange(page - 1)}
      >
        <ChevronLeftIcon />
      </IconButton>
      <IconButton
        variant="ghost"
        disabled={isLastPage}
        onClick={() => onPageChange(page + 1)}
      >
        <ChevronRightIcon />
      </IconButton>
    </Flex>
  );
};
