export const ROWS_PER_PAGE_OPTIONS = [10, 25, 50, 100];
export const DEFAULT_ROWS_PER_PAGE = ROWS_PER_PAGE_OPTIONS[0];

export const SECTION_TITLES = [
  "Produce",
  "Dairy",
  "Bakery",
  "Meat",
  "Seafood",
  "Beverages",
  "Pantry",
  "Frozen",
  "Snacks",
  "Condiments",
  "Canned Goods",
  "Breakfast",
] as const;
export type SectionTitle = (typeof SECTION_TITLES)[number];
