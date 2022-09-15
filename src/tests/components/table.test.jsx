import { render, screen } from "@testing-library/react";
import Table from "../../components/Table";

const data = [
  {
    id: 1,
    name: "John",
    age: 23,
  },
  {
    id: 2,
    name: "Doe",
    age: 34,
  },
];

const descriptor = [
  {
    label: "Name",
    accessor: "name",
    key: "name",
  },
  {
    label: 'Age',
    accessor: 'age',
    key: 'age',
    render: ({ age }) => `${age} yrs`
  },
];

describe("<Table />", () => {
  it("should render component", () => {
    expect.assertions(1);

    render(<Table data={data} descriptor={descriptor} />);

    expect(screen.getByRole('row', { name: '1 John 23 yrs' })).toBeInTheDocument();
  });

});
