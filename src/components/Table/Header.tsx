import { Button, DropdownMenu, Flex, Heading } from "@radix-ui/themes";
import type { SectionTitle } from "./consts";
import { MixerHorizontalIcon } from "@radix-ui/react-icons";

export type Sections = Record<SectionTitle, boolean>;

type HeaderProps = {
  sections: Sections;
  onChangeFilteredSections: (sectionFilters: Sections) => void;
};

export const Header = ({ sections, onChangeFilteredSections }: HeaderProps) => {
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
    <Flex justify={"between"} align="center">
      <Heading size="3" weight="medium">
        Today's groceries
      </Heading>
      {isFilterButtonVisible && (
        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            <Button variant="outline">
              <MixerHorizontalIcon />
              Filter by section
            </Button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content variant="solid">
            {menuItems}
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      )}
    </Flex>
  );
};
