import type { Meta, StoryObj } from "@storybook/react-vite";
import { Table } from "./Table";
import { mockData } from "./mockData";

const meta = {
  title: "Components/Table",
  component: Table,
  tags: ["autodocs"],
  argTypes: {
    data: { control: "text" },
  },
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    data: mockData,
  },
};
