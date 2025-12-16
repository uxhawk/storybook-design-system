import type { Meta, StoryObj } from "@storybook/react";
import { DashboardTemplate } from "../../components/templates/DashboardTemplate";

const meta: Meta<typeof DashboardTemplate> = {
  title: "Templates/DashboardTemplate",
  component: DashboardTemplate,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof DashboardTemplate>;

export const Default: Story = {
  render: (args) => (
    <DashboardTemplate {...args}>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-lg bg-white p-6 shadow">Widget 1</div>
        <div className="rounded-lg bg-white p-6 shadow">Widget 2</div>
        <div className="rounded-lg bg-white p-6 shadow">Widget 3</div>
      </div>
    </DashboardTemplate>
  ),
};
