import { Button, DropdownMenu, Flex, Heading } from "@radix-ui/themes";
import type { SectionTitle } from "./consts";

export type Sections = Record<SectionTitle, boolean>;

type HeaderProps = {
  title: string;
  sections: Sections;
  onChangeFilteredSections: (sectionFilters: Sections) => void;
};

export const Header = ({
  title,
  sections,
  onChangeFilteredSections,
}: HeaderProps) => {
  const isFilterButtonVisible = Object.entries(sections).length > 0;

  const menuItems = Object.entries(sections).map(([field, isSelected]) => (
    <DropdownMenu.CheckboxItem
      key={field}
      checked={isSelected}
      onSelect={(e) => e.preventDefault()}
      onCheckedChange={() => {
        onChangeFilteredSections({
          ...sections,
          [field]: !isSelected,
        });
      }}
    >
      {field}
    </DropdownMenu.CheckboxItem>
  ));

  return (
    <Flex justify={"between"} align="center" gap="2">
      <Heading>{title}</Heading>
      {isFilterButtonVisible && (
        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            <Button>Filter by section</Button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content variant="solid">
            {menuItems}
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      )}
    </Flex>
  );
};
