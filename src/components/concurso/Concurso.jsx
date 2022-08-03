import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../context/context";
import moment from "moment";
import "./style.css";

export default function Concurso() {
  const { loteriasConcurso, concursosId, id } = useContext(Context);
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    filterById();
  }, [id]);

  const filterById = () => {
    const resul = loteriasConcurso.filter((loteria) => {
      return loteria.loteriaId == id;
    });
    console.log(resul);
    setFilter(resul);
  };

  return (
    <div className="concurso gap-3">
      <p className="m-0">CONCURSO</p>
      {id == "" ? (
        <p>SELECIONE UM JOGO</p>
      ) : (
        <p className="m-0 fw-bold">
          {filter[0]?.concursoId} - {" "}
          {moment(concursosId.data).format("DD/MM/YYYY")}
        </p>
      )}
    </div>
  );
}
