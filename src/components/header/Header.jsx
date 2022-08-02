import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../context/context";
import "./style.css";

export default function Header() {
  const { loterias, setId, loteriasConcurso, id } = useContext(Context);
  const [filterId, setFilterId] = useState([])
  const idString = Number(id);

  useEffect(() => {
    filterById();
  }, [idString]);

  const getSelect = (e) => {
    setId(e.target.value);
  };

  const filterById = () => {
    const resul = loteriasConcurso
      .filter((loteria) => {
        return loteria.loteriaId == id;
      })
      .map((loteria) => {
        return loteria;
      });
      setFilterId(resul)
  };

  console.log(filterId);
  console.log(idString);

  return (
    <select className="form-select" onChange={getSelect}>
      <option selected value={""}>
        Selecione o jogo
      </option>
      {loterias.map((loteria) => {
        return (
          <option key={loteria.id} value={loteria.id}>
            {loteria.nome}
          </option>
        );
      })}
    </select>
  );
}
