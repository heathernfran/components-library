import type { Meta, StoryObj } from "@storybook/react";

import { Accordion } from "./Accordion";

const meta = {
  title: "Components/Accordion",
  component: Accordion,
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      {
        value: "html",
        title: "HTML",
        content:
          "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.",
      },
      {
        value: "css",
        title: "CSS",
        content:
          "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.",
      },
      {
        value: "javascript",
        title: "JavaScript",
        content:
          "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.",
      },
    ],
  },
};
