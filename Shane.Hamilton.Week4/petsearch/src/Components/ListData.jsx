import {pets} from '../assets/pets';


export default function ListData({value}) {
    const petList = pets.filter(pets=>
        pets.animalType.toLowerCase() === value.toLowerCase()
    );

    const rowItems = petList.map(pets=>
        <tr key={pets.id}>
            <td className="text-center" ><img src={pets.image} alt={pets.name} className="image img-thumbnail rounded mx-auto d-block" /></td>
            <td className="text-start">{pets.name}</td>
            <td className="text-start">{pets.animalType}</td>
            <td className="text-start">{pets.specialty}</td>

        </tr>
    );
    return rowItems;
}
