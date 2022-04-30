import { render, screen } from '@testing-library/react';
import CharacterGridView from '../components/CharacterGridView';

const characters = [{
        id: "1",
        image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
        name: "Rick Sanchez",
        species: "Human"
    },
    {
        id: "2",
        image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
        name: "Morty Smith",
        species: "Human"
    }
];

test('renders CharacterGridView with image alt text', () => {
    render(<CharacterGridView appData={characters}/>);

    const linkElement = screen.getByAltText(/Morty Smith/i);
    expect(linkElement).toBeInTheDocument();
});