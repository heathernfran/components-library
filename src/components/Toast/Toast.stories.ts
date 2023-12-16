import type { Meta, StoryObj } from "@storybook/react";

import { Toast } from "./Toast";

const meta = {
  title: "Components/Toast",
  component: Toast,
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    message: "Apple pie wafer jelly sweet cotton candy. ",
  },
};
