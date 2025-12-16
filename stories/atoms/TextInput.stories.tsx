import type { Meta, StoryObj } from "@storybook/react";
import { TextInput } from "../../components/atoms/TextInput";

const meta: Meta<typeof TextInput> = {
  title: "Atoms/TextInput",
  component: TextInput,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof TextInput>;

export const Default: Story = {
  args: {
    placeholder: "Enter text...",
  },
};
