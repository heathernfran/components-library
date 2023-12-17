import type { Meta, StoryObj } from "@storybook/react";

import { DropdownMenu } from "./DropdownMenu";

const meta = {
  title: "Components/DropdownMenu",
  component: DropdownMenu,
} satisfies Meta<typeof DropdownMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: ["New", "Open", "Save", "Delete"],
  },
};
