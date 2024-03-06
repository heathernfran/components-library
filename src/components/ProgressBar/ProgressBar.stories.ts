import type { Meta, StoryObj } from "@storybook/react";

import { ProgressBar } from "./ProgessBar";

const meta = {
  title: "Components/ProgressBar",
  component: ProgressBar,
} satisfies Meta<typeof ProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const ValueAt25: Story = {
  args: {
    value: 25,
  },
};

export const ValueAt75: Story = {
  args: {
    value: 75,
  },
};

export const ValueAt0: Story = {
  args: {
    value: 0,
  },
};

export const ValueAt100: Story = {
  args: {
    value: 100,
  },
};

export const InvalidValueNegative1: Story = {
  args: {
    value: -1,
  },
};

export const InvalidValueNegative100: Story = {
  args: {
    value: -100,
  },
};
