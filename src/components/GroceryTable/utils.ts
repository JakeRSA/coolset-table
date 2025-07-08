import type { SectionTitle } from "./consts";
import type { GroceryData, GroceryTableRow, Sorting } from "./GroceryTable";

export const getInitialSectionFilters = (
  data: GroceryData[]
): Record<SectionTitle, boolean> => {
  return data.reduce<Record<string, boolean>>((acc, row) => {
    if (!acc[row.section]) {
      acc[row.section] = true;
    }
    return acc;
  }, {});
};

export const getSortedAndFilteredTableData = ({
  data,
  sorting,
  filters,
}: {
  data: GroceryData[];
  sorting: Sorting;
  filters: Record<SectionTitle, boolean>;
}) => {
  return data
    .map((item) => ({
      ...item,
      weight: undefined,
      pricePerWeight: (item.price / item.weight / 10).toFixed(2),
    }))
    .filter((row) => filters[row.section])
    .sort((rowA, rowB) => {
      if (!sorting) return 0;
      if (rowA[sorting.key] < rowB[sorting.key]) {
        return sorting.direction === "ascending" ? -1 : 1;
      }
      if (rowA[sorting.key] > rowB[sorting.key]) {
        return sorting.direction === "ascending" ? 1 : -1;
      }
      return 0;
    });
};

export const getPageRows = ({
  data,
  selectedPage,
  selectedRowsPerPage,
}: {
  data: GroceryTableRow[];
  selectedPage: number;
  selectedRowsPerPage: number;
}): GroceryTableRow[] => {
  return data.slice(
    (selectedPage - 1) * selectedRowsPerPage,
    selectedPage * selectedRowsPerPage
  );
};
