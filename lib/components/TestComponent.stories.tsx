import type { Meta, StoryObj } from "@storybook/react-vite";
import { TestComponent } from "./TestComponent";

const meta = {
  title: "Example/TestComponent",
  component: TestComponent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    str: { control: "text" },
  },
  args: { str: "Hello, World!" },
} satisfies Meta<typeof TestComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    str: "This is a test string",
  },
};
