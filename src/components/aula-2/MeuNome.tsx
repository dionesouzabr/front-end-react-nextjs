//const MeuNome = () => {
//    return <p>Dione</p>;
//};

import { FC } from "react";

type MeuNomeProps = {
    name: string;
    age: number;
    birthDate: Date;
};

export const MeuNome: FC<MeuNomeProps> = ({ name, age, birthDate }) => (
    <p>
        Sou o {name}, tenho {age} anos e eu nasci em {birthDate.toLocaleDateString("pt-BR")}
    </p>
);
