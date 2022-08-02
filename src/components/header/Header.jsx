import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../context/context";
import { getConcursosById } from "../../requests/Request";
import "./style.css";

export default function Header() {
  const { loterias, setId, loteriasConcurso, id, setFilterConcurso } = useContext(Context);
  const [filterId, setFilterId] = useState([])
  const idString = Number(id);

  useEffect(() => {
    filterById();
    getConcursoById(filterId)
  }, [idString]);

  const getSelect = (e) => {
    setId(e.target.value);
  };

  const filterById = () => {
    const resul = loteriasConcurso
      .filter((loteria) => {
        return loteria.loteriaId == id;
      })
    setFilterId(resul[0]?.concursoId)
  };

  const getConcursoById = async (id) => {
    const result = await getConcursosById(id)
    setFilterConcurso(result)
  }

  return (
    <select className="form-select" onChange={getSelect}>
      <option selected value={""}>
        Selecione o jogo
      </option>
      {loterias.map((loteria) => {
        return (
          <option key={loteria.id} value={loteria.id}>
            {loteria.nome.toUpperCase()}
          </option>
        );
      })}
    </select>
  );
}
