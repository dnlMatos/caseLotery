import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../context/context";
import { getConcursosById } from "../../requests/Request";
import "./style.css";

export default function Header() {
  const { filterConcurso, setFilterConcurso, loterias, setId, loteriasConcurso, id, setConcursosId } = useContext(Context);

  useEffect(() => {
    filterById();
    getConcursoById(filterConcurso)
  }, [id]);

  const getSelect = (e) => {
    setId(e.target.value);
  };

  const filterById = () => {
    const resul = loteriasConcurso
      .filter((loteria) => {
        return loteria.loteriaId == id;
      })
      setFilterConcurso(resul[0]?.concursoId)
  };

  const getConcursoById = async (id) => {
    const result = await getConcursosById(id)
    setConcursosId(result)
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
