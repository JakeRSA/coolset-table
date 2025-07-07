import { Table as RTable } from "@radix-ui/themes";

type Props = {
  str: string;
};

export const Table = ({ str }: Props) => {
  return (
    <RTable.Root>
      <RTable.Header>
        <RTable.ColumnHeaderCell>Name</RTable.ColumnHeaderCell>
      </RTable.Header>
      <RTable.Body>
        <RTable.Row>
          <RTable.Cell>{str}</RTable.Cell>
        </RTable.Row>
        <RTable.Row>
          <RTable.Cell>Another Name</RTable.Cell>
        </RTable.Row>
      </RTable.Body>
    </RTable.Root>
  );
};
