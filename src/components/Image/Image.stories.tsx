// @ts-ignore
import type { Meta, StoryObj } from "@storybook/react";
import { Image } from "./Image";

const meta: Meta<typeof Image> = {
  title: "Components/Image",
  component: Image,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Image>;

export const Default: Story = {
  args: {
    src: "https://placehold.co/300x200",
    alt: "Placeholder Image",
  },
};

export const Rounded: Story = {
  args: {
    src: "https://placehold.co/300x200",
    alt: "Rounded Image",
    rounded: true,
  },
};

export const Disabled: Story = {
  args: {
    src: "https://placehold.co/300x200",
    alt: "Disabled Image",
    disabled: true,
  },
};
