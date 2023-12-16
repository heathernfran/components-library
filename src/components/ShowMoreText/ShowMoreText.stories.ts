import type { Meta, StoryObj } from "@storybook/react";

import { ShowMoreText } from "./ShowMoreText";

const meta = {
  title: "Components/ShowMoreText",
  component: ShowMoreText,
} satisfies Meta<typeof ShowMoreText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const OneParagraph: Story = {
  args: {
    text: "Candy tiramisu sugar plum gummies danish jelly chocolate bar marzipan lollipop. Candy canes bear claw chocolate cake sugar plum chupa chups sugar plum. Sesame snaps jelly halvah gummi bears bear claw cookie. Sweet ice cream marzipan muffin tootsie roll jelly-o sweet roll macaroon. Danish gummi bears jelly-o gingerbread gummies chupa chups jelly chocolate. Lemon drops chocolate cake cookie shortbread jujubes oat cake tart candy halvah. Oat cake gummi bears liquorice soufflé icing sugar plum chocolate cake. Shortbread cheesecake pudding bear claw dragée biscuit. Donut pie gummies carrot cake lemon drops candy canes bear claw apple pie. Halvah jelly beans dessert halvah tart jelly. Tiramisu cake donut liquorice chocolate bar. Pudding wafer carrot cake dragée gummies cheesecake jujubes carrot cake. Icing liquorice gingerbread brownie cookie cake. Cake lollipop bear claw muffin jelly-o.",
  },
};
