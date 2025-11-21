// @ts-ignore
import type { Meta, StoryObj } from "@storybook/react";
import { Table } from "./Table";
import { TableHeader } from "./subcomponents/TableHeader";
import { TableRow } from "./subcomponents/TableRow";
import { TableCell } from "./subcomponents/TableCell";
import { TableFooter } from "./subcomponents/TableFooter";

const meta: Meta<typeof Table> = {
  title: "Components/Table",
  component: Table,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Table>;

export const Default: Story = {
  render: () => (
    <Table>
      <TableHeader columns={["Name", "Email", "Role"]} />
      <tbody>
        <TableRow>
          <TableCell>Jane Doe</TableCell>
          <TableCell>jane@example.com</TableCell>
          <TableCell>Admin</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>John Doe</TableCell>
          <TableCell>john@example.com</TableCell>
          <TableCell>User</TableCell>
        </TableRow>
      </tbody>
      <TableFooter text="Showing 2 results" />
    </Table>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Table disabled>
      <TableHeader columns={["Name", "Email"]} />
      <tbody>
        <TableRow>
          <TableCell>Sample</TableCell>
          <TableCell>disabled@example.com</TableCell>
        </TableRow>
      </tbody>
      <TableFooter text="Disabled Table" />
    </Table>
  ),
};
