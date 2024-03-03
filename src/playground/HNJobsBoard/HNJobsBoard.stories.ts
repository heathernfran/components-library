import type { Meta, StoryObj } from "@storybook/react";

import { HNJobsBoard } from "./HNJobsBoard";

const meta = {
  title: "Playground/HNJobsBoard",
  component: HNJobsBoard,
} satisfies Meta<typeof HNJobsBoard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
