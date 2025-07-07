import type { Meta, StoryObj } from "@storybook/react-vite";
import { Table } from "./Table";

const meta = {
  title: "Components/Table",
  component: Table,
  tags: ["autodocs"],
  argTypes: {
    str: { control: "text" },
  },
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    str: "This is a test string",
  },
};
