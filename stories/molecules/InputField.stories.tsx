import type { Meta, StoryObj } from "@storybook/react";
import { InputField } from "../../components/molecules/InputField";

const meta: Meta<typeof InputField> = {
  title: "Molecules/InputField",
  component: InputField,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof InputField>;

export const Default: Story = {
  args: {
    label: "Email",
    placeholder: "you@example.com",
  },
};
