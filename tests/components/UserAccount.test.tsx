import { render, screen } from "@testing-library/react";
import UserAccount from "../../src/components/UserAccount";
import { User } from "../../src/entities";

describe("UserAccount", () => {
  it("Should render the user name when user is provided", () => {
    const user: User = { id: 1, name: "John Doe" };
    render(<UserAccount user={user} />);
    const text = screen.getByText(user.name);
    expect(text).toBeInTheDocument();
  });

  it("Should render edit button if the user is admin", () => {
    const user = { id: 1, name: "John Doer", isAdmin: true };
    render(<UserAccount user={user} />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/edit/i);
  });

  it("Should not render edit button if the user is not admin", () => {
    const user = { id: 1, name: "John Doer", isAdmin: false };
    render(<UserAccount user={user} />);
    const button = screen.queryByRole("button");
    expect(button).not.toBeInTheDocument();
  });
});
