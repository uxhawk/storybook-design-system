import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "../../components/atoms/Badge";

const meta: Meta<typeof Badge> = {
  title: "Atoms/Badge",
  component: Badge,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "radio",
      options: ["info", "success", "warning", "error"],
    },
  },
};
export default meta;

type Story = StoryObj<typeof Badge>;

export const Info: Story = {
  args: {
    children: "Info",
    variant: "info",
  },
};

export const Success: Story = {
  args: {
    children: "Success",
    variant: "success",
  },
};
