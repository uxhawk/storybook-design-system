import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "../../components/molecules/Card";

const meta: Meta<typeof Card> = {
  title: "Molecules/Card",
  component: Card,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Card>;

export const WithTitle: Story = {
  render: (args) => (
    <Card {...args}>
      <p>This is a simple card.</p>
    </Card>
  ),
  args: {
    title: "Card Title",
  },
};
