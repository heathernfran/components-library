import type { Meta, StoryObj } from "@storybook/react";

import { LikeButton } from "./LikeButton";

const meta = {
  title: "Components/LikeButton",
  component: LikeButton,
} satisfies Meta<typeof LikeButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
