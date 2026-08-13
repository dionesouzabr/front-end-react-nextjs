const hobbies = ['Motociclismo', 'Fotografia', 'Esportes'];

export const Hobbies = () => {
    const [hobbyPreferido, ...outrosHobbies] = hobbies;

    const novosHobbies = ['Festas', 'Baladas'];

    const meusHobbies = [...outrosHobbies, ...novosHobbies];


    return (
        <>
            <p>Estes são meus hobbies:</p>
            <ul className="list-disc pl-10">
                <li className="font-bold">{hobbyPreferido}</li>
                {meusHobbies.map((meuHobby, index) => (
                    <li key={`hobby-${index}`}>{meuHobby}</li>
                ))}
            </ul>
        </>
    );
};