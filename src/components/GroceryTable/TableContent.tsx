import { Flex, Table, Text } from "@radix-ui/themes";
import type { GroceryTableRow, Sorting } from "./GroceryTable";
import { HeaderCell } from "./HeaderCell";
import { TableRows } from "./TableRows";

type TableContentProps = {
  data: GroceryTableRow[];
  sorting: Sorting;
  onChangeSorting: (sorting: TableContentProps["sorting"]) => void;
};

export const TableContent = ({
  data,
  sorting,
  onChangeSorting,
}: TableContentProps) => {
  if (data.length === 0) {
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
          fieldName="pricePerWeight"
          label="Price / 100g (€)"
          onChangeSorting={onChangeSorting}
          sorting={sorting}
        />
      </Table.Header>
      <Table.Body>
        <TableRows data={data} />
      </Table.Body>
    </Table.Root>
  );
};
