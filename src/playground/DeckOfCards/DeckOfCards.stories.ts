import type { Meta, StoryObj } from "@storybook/react";

import { DeckOfCards } from "./DeckOfCards";

const meta = {
  title: "Playground/DeckOfCards",
  component: DeckOfCards,
} satisfies Meta<typeof DeckOfCards>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
