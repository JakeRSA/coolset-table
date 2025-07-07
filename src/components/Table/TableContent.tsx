import { Flex, Heading, Table, Text } from "@radix-ui/themes";

export const TableContent = ({ rows }: { rows: React.ReactNode[] }) => {
  if (!rows || rows.length === 0) {
    return (
      <Flex justify="center" p="4">
        <Text>No data available</Text>
      </Flex>
    );
  }

  return (
    <Table.Root variant="surface" size="1">
      <Table.Header>
        <Table.ColumnHeaderCell key={"name"}>
          <Heading size="1" weight="bold">
            Name
          </Heading>
        </Table.ColumnHeaderCell>
        <Table.ColumnHeaderCell key={"section"}>
          <Heading size="1" weight="bold">
            Section
          </Heading>
        </Table.ColumnHeaderCell>
        <Table.ColumnHeaderCell key={"price"}>
          <Heading size="1" weight="bold">
            Price (€)
          </Heading>
        </Table.ColumnHeaderCell>
        <Table.ColumnHeaderCell key={"weight"}>
          <Heading size="1" weight="bold">
            Price / 100g (€)
          </Heading>
        </Table.ColumnHeaderCell>
      </Table.Header>
      <Table.Body>{rows}</Table.Body>
    </Table.Root>
  );
};
