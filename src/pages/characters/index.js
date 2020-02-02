import React, { useEffect } from "react";

import { truncateString } from "../../utils/truncate-string";
import {
  useCharacterState,
  useCharacterDispatch,
  fetchAllCharacters
} from "../../context/character";

const Characters = () => {
  const dispatch = useCharacterDispatch();

  useEffect(() => {
    fetchAllCharacters(dispatch);
  }, [dispatch]);

  const { characters, loading } = useCharacterState();

  if (loading) {
    return <h1>Carregando</h1>;
  }

  return (
    <>
      <CharactersTable characters={characters} />
    </>
  );
};

const CharactersTable = ({ characters }) => {
  return (
    <table border="1">
      <thead>
        <tr>
          <td>Personagem</td>
          <td>Descrição</td>
        </tr>
      </thead>

      <tbody>
        {characters.map(character => {
          const {
            attributes: { name, description, image }
          } = character;

          return (
            <tr key={`character-${name}`}>
              <td>
                <img alt={`Imagem do ${name}`} src={image.original} />
                {name}
              </td>
              <td>
                <div
                  dangerouslySetInnerHTML={{
                    __html: truncateString(description, 200)
                  }}
                />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Characters;
