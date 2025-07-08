import { Flex, Heading, Table } from "@radix-ui/themes";
import type { Sorting, TableRow } from "./Table";
import { ArrowDownIcon, ArrowUpIcon } from "@radix-ui/react-icons";

type HeaderCellProps = {
  fieldName: keyof TableRow;
  label: string;
  sorting: Sorting;
  onChangeSorting: (sorting: Sorting) => void;
};

export const HeaderCell = ({
  fieldName,
  label,
  sorting,
  onChangeSorting,
}: HeaderCellProps) => {
  const handleClick = () => {
    if (sorting?.key === fieldName) {
      const newDirection =
        sorting.direction === "ascending" ? "descending" : "ascending";
      onChangeSorting({ key: fieldName, direction: newDirection });
    } else {
      onChangeSorting({ key: fieldName, direction: "ascending" });
    }
  };

  return (
    <Table.ColumnHeaderCell key={fieldName} onClick={handleClick}>
      <Flex gap="2" align="center">
        {sorting?.key === fieldName &&
          (sorting.direction === "ascending" ? (
            <ArrowUpIcon />
          ) : (
            <ArrowDownIcon />
          ))}
        <Heading size="1" weight="bold">
          {label}
        </Heading>
      </Flex>
    </Table.ColumnHeaderCell>
  );
};
