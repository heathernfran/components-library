import type { Meta, StoryObj } from "@storybook/react";

import { TicTacToe } from "./TicTacToe";

const meta = {
  title: "Playground/TicTacToe",
  component: TicTacToe,
} satisfies Meta<typeof TicTacToe>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
