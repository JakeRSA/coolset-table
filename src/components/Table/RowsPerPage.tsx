import { Button, DropdownMenu, Flex, Text } from "@radix-ui/themes";
import { ROWS_PER_PAGE_OPTIONS } from "./consts";

type RowsPerPageProps = {
  rowsPerPage: number;
  onChangeRowsPerPage: (newRowsPerPage: number) => void;
};

export const RowsPerPage = ({
  rowsPerPage,
  onChangeRowsPerPage,
}: RowsPerPageProps) => {
  return (
    <Flex gap="3" align="center">
      <Text size="1">Rows per page:</Text>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <Button variant="ghost" size="1">
            {rowsPerPage}
            <DropdownMenu.TriggerIcon />
          </Button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content variant="solid">
          {ROWS_PER_PAGE_OPTIONS.map((option) => (
            <DropdownMenu.Item
              key={option}
              onSelect={() => onChangeRowsPerPage(option)}
            >
              {option}
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </Flex>
  );
};
