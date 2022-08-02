import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../context/context";
import moment from "moment";
import "./style.css";

export default function Concurso() {
  const { loteriasConcurso, filterConcurso, id } = useContext(Context);
  const [filter, setFilter] = useState([])

  console.log(id);
  console.log(loteriasConcurso);
  console.log(filterConcurso);

  useEffect(() => {
    filterById()
  }, [id])

  const filterById = () => {
    const resul = loteriasConcurso
      .filter((loteria) => {
        return loteria.loteriaId == id;
      })
    setFilter(resul)
  };

  return (
    <div className="concurso gap-3">
      <p className="m-0">CONCURSO</p>
      <p className="m-0 fw-bold">{filter[0]?.concursoId} - {moment(filterConcurso.data).format("DD/MM/YYYY")}</p>
    </div>
  );
}
