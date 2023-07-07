import GridSquare from "../components/GridSquare";
import { render, screen } from '@testing-library/react'

it('should render the correct value' , ()=>{  

    const mockSelectSquare = jest.fn();
    render(<GridSquare  
        boardValue={'X'}
        selectSquare={mockSelectSquare}   
    />);

    const gridSquareElement = screen.getByTestId('gridSquareTest')
    expect(gridSquareElement.textContent).toBe('X');

});

