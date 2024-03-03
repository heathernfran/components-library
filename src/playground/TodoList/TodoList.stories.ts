import type { Meta, StoryObj } from "@storybook/react";

import { TodoList } from "./TodoList";

const meta = {
  title: "Playground/TodoList",
  component: TodoList,
} satisfies Meta<typeof TodoList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
