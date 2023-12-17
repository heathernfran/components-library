import type { Meta, StoryObj } from "@storybook/react";

import { Modal } from "./Modal";

const meta = {
  title: "Components/Modal",
  component: Modal,
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    content:
      "Cotton candy cheesecake sugar plum halvah chocolate cake powder gummies candy apple pie. Wafer cotton candy cake jujubes jelly beans danish sugar plum cookie lemon drops. Biscuit topping liquorice cotton candy lemon drops lemon drops.",
  },
};
