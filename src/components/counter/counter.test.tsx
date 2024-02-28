import { render, screen } from "@testing-library/react";
import Counter from "./Counter";
import userEvent from "@testing-library/user-event";
import React from "react";

describe("counter", () => {
  test("renders correctly", () => {
    render(<Counter />);
    const counterElement = screen.getByRole("heading");
    expect(counterElement).toBeInTheDocument();

    const incrementButton = screen.getByRole("button", {
      name: "Increment",
    });
    expect(incrementButton).toBeInTheDocument();
  });

  test("render a count of 0", () => {
    render(<Counter />);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("0");
  });

  test("renders a count of 1 after clicking the increment button", async () => {
    render(<Counter/>)
    const countElement= screen.getByRole('heading')
    const incrementButton= screen.getByRole('button',{
        name:"Increment",
    })
    await  userEvent.click(incrementButton)
    expect(countElement).toHaveTextContent('1')
  })

  test("renders a count of 2 after clicking twice the increment button", async () => {
    render(<Counter />);
    const incrementButton = screen.getByRole("button", {
      name: "Increment",
    });
    await userEvent.click(incrementButton);
    await userEvent.click(incrementButton);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("2");
  });

  test("render a count of 10 after clicking the set button", async () => {
    render(<Counter />);
    const amountInputElement = screen.getByRole("spinbutton");
    await userEvent.click(amountInputElement);
    await userEvent.type(amountInputElement, "10");
    expect(amountInputElement).toHaveValue(10);
    const setButton = screen.getByRole("button", {
      name: "Set",
    });
    await userEvent.click(setButton);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("10");
  });

  test("elements are focused in the right order", async () => {
    render(<Counter />);
    const amountInput = screen.getByRole("spinbutton");
    const setButton = screen.getByRole("button", { name: "Set" });
    const incrementButton = screen.getByRole("button", { name: "Increment" });
    userEvent.tab();
    expect(incrementButton).toHaveFocus();
    userEvent.tab();
    expect(amountInput).toHaveFocus();
    userEvent.tab();
    expect(setButton).toHaveFocus();
  });
});