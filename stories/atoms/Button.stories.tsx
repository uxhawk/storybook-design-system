import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../../components/atoms/Button";

const meta: Meta<typeof Button> = {
  title: "Atoms/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "radio",
      options: ["primary", "secondary", "tertiary"],
    },
    size: { control: "radio", options: ["sm", "md", "lg"] },
  },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Primary CTA",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary CTA",
    variant: "secondary",
  },
};

export const Large: Story = {
  args: {
    children: "Large Button",
    size: "lg",
  },
};
