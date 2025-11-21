// @ts-ignore
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    label: "Click Me",
    bg: "#2563eb",
  },
};

export const Disabled: Story = {
  args: {
    label: "Can't click",
    disabled: true,
  },
};
