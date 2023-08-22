import React from "react";
import { render, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom'
import ExampleClientComponent from "./ExampleClientComponent";
describe("ExampleClientComponent", () => {
    it("increments count when the button is clicked", () => {
        const testData = {
            userId: 1,
            id: 1,
            title: "Test Title",
            completed: false,
        };

        const { getByText } = render(<ExampleClientComponent data={testData} />);
        const button = getByText(`CLIENT ${testData.title} 0`);

        fireEvent.click(button);

        expect(button.textContent).toBe(`CLIENT ${testData.title} 1`);
    });
});