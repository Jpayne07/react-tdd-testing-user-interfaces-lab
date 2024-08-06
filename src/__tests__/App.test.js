import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import App from "../App";

// Your tests here
test("displays a top-level heading with the text `Hi, I'm ______`", ()=>{
    render(<App/>)
    const topLevelHeading = screen.getByRole("heading", {
        name: /hi, i'm/i,
        exact:false,
        level:1,
    })

    expect(topLevelHeading).toBeInTheDocument();
})

test("Test for h2", ()=>{
    render(<App/>)
    const topLevelHeading = screen.getByRole("heading", {
        name: /about me/i,
        exact:false,
        level:2,
    })

    expect(topLevelHeading).toBeInTheDocument();
})
test("Test for p", ()=>{
    render(<App/>)
    expect (screen.getByText("bio")).toBeInTheDocument
})

test("Test for linkedin Link", ()=>{
    render(<App/>)
    const topLevelHeading = screen.getByRole("link", {
        name: /linkedin/i,
        exact:false,
        
    })

    expect(topLevelHeading).toBeInTheDocument();
})
test("Test for github Link", ()=>{
    render(<App/>)
    const topLevelHeading = screen.getByRole("link", {
        name: /github/i,
        exact:false,
        
    })

    expect(topLevelHeading).toBeInTheDocument();
})