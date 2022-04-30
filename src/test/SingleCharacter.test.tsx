import { render, screen } from '@testing-library/react';
import SingleCharacter from '../components/SingleCharacter';

const character = {
    id: "1",
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    name: "Rick Sanchez",
    species: "Human",
};

test('renders SingleCharacter with image alt text', () => {
    render(<SingleCharacter character={character} key={character.id}/>);

    const linkElement = screen.getByAltText(/Rick Sanchez/i);
    expect(linkElement).toBeInTheDocument();
});

test('renders SingleCharacter with Name field', () => {
    render(<SingleCharacter  character={character} key={character.id}/>);
    const linkElement = screen.getByText('Name : Rick Sanchez');

    expect(linkElement).toBeInTheDocument();
});

test('renders SingleCharacter with Species field', () => {
    render(<SingleCharacter  character={character} key={character.id}/>);
    const linkElement = screen.getByText('Species : Human');

    expect(linkElement).toBeInTheDocument();
});