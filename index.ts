import axios from 'axios';

interface Pet {
    id: number;
    name: string;
    category: {
        id: number;
        name: string;
    };
    photoUrls: string[];
    tags: {
        id: number;
        name: string;
    }[];
    status: 'available' | 'pending' | 'sold';
}

async function getPetsByStatus(status: string): Promise<Pet[]> {
    const response = await axios.get(`https://petstore3.swagger.io/api/v3/pet/findByStatus?status=${status}`);
    return response.data;
}

async function main() {
    const status = 'available';
    const pets = await getPetsByStatus(status);
    console.log(pets);
}

main();
