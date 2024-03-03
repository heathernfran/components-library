import type { Meta, StoryObj } from "@storybook/react";

import { FavouriteBooks } from "./FavouriteBooks";

const meta = {
  title: "Playground/FavouriteBooks",
  component: FavouriteBooks,
} satisfies Meta<typeof FavouriteBooks>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
