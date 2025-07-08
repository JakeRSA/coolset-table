import { Flex, Table, Text } from "@radix-ui/themes";
import type { Sorting } from "./Table";
import { HeaderCell } from "./HeaderCell";

type TableContentProps = {
  rows: React.ReactNode[];
  sorting: Sorting;
  onChangeSorting: (sorting: TableContentProps["sorting"]) => void;
};

export const TableContent = ({
  rows,
  sorting,
  onChangeSorting,
}: TableContentProps) => {
  if (rows.length === 0) {
    return (
      <Flex justify="center" p="4">
        <Text>No data available</Text>
      </Flex>
    );
  }

  return (
    <Table.Root className="w-full max-h-9/10" variant="surface" size="1">
      <Table.Header>
        <HeaderCell
          fieldName="name"
          label="Name"
          onChangeSorting={onChangeSorting}
          sorting={sorting}
        />
        <HeaderCell
          fieldName="section"
          label="Section"
          onChangeSorting={onChangeSorting}
          sorting={sorting}
        />
        <HeaderCell
          fieldName="price"
          label="Price (€)"
          onChangeSorting={onChangeSorting}
          sorting={sorting}
        />
        <HeaderCell
          fieldName="weight"
          label="Price / 100g (€)"
          onChangeSorting={onChangeSorting}
          sorting={sorting}
        />
      </Table.Header>
      <Table.Body className="overflow-y-scroll">{rows}</Table.Body>
    </Table.Root>
  );
};
