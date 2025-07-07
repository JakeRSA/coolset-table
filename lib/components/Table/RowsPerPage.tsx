import { Button, DropdownMenu, Flex, Text } from "@radix-ui/themes";

type RowsPerPageProps = {
  rowsPerPage: number;
  rowsPerPageOptions: number[];
  onRowsPerPageChange: (newRowsPerPage: number) => void;
};

export const RowsPerPage = ({
  rowsPerPage,
  rowsPerPageOptions,
  onRowsPerPageChange,
}: RowsPerPageProps) => {
  if (rowsPerPageOptions.length === 0) {
    throw new Error("rowsPerPageOptions must contain at least one option");
  }
  return (
    <Flex gap="2">
      <Text>Rows per page:</Text>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <Button>
            {rowsPerPage}
            <DropdownMenu.TriggerIcon />
          </Button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content variant="solid">
          {rowsPerPageOptions.map((option) => (
            <DropdownMenu.Item
              key={option}
              onClick={() => onRowsPerPageChange(option)}
            >
              {option}
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </Flex>
  );
};
