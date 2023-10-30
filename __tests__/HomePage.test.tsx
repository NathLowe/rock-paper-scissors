// import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import HomePage from '@/components/HomePage'

describe("HomePage", ()=>{
    it('should have "Rock-Paper-Scissors"',()=>{
        render(<HomePage/>) //ARRANGE
    
        const rock = screen.getByText("Rock-Paper-Scissors") // ACT
    
        expect(rock).toBeInTheDocument() //ASSERT
    })
    
    it('should contain "Choose"',()=>{
        render(<HomePage/>) //ARRANGE
    
        const choose = screen.getByText(/Choose/i) // ACT
    
        expect(choose).toBeInTheDocument() //ASSERT
    })
})

