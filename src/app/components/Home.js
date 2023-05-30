import React from "react";
import { Parallax } from "react-parallax";
import { Table } from "react-bootstrap";

import "../styles/Home.css"
import background from "../assets/background_home.png"

var tableData = {
  "07/07": {
    "atividades": [
      {
        "hora": "20:00",
        "atividade": "Abertura do evento"
      },
      {
        "hora": "23:00",
        "atividade": "Formação de equipes"
      }
    ]
  },
  "08/07": {
    "atividades": [
      {
        "hora": "00:00",
        "atividade": "Palestra - Tema: Ideação"
      },
      {
        "hora": "07:00",
        "atividade": "Café da manhã"
      },
      {
        "hora": "10:00",
        "atividade": "Palestra - Tema: Validação"
      },
      {
        "hora": "13:00",
        "atividade": "Almoço"
      },
      {
        "hora": "14:30",
        "atividade": "Check-in nas equipes"
      },
      {
        "hora": "16:00",
        "atividade": "Palestra - Tema: Prototipação"
      },
      {
        "hora": "17:00",
        "atividade": "Coffee break"
      },
      {
        "hora": "20:00",
        "atividade": "Palestra - Tema: Pitch"
      },
      {
        "hora": "22:00",
        "atividade": "Jantar"
      }
    ]
  },
  "09/07": {
    "atividades": [
      {
        "hora": "02:00",
        "atividade": "Coffee break"
      },
      {
        "hora": "03:00",
        "atividade": "Pitch"
      },
      {
        "hora": "07:00",
        "atividade": "Café da manhã"
      },
      {
        "hora": "09:30",
        "atividade": "Palestra - Tema: Demo Day"
      },
      {
        "hora": "11:00",
        "atividade": "Check-in nas equipes"
      },
      {
        "hora": "12:00",
        "atividade": "Almoço"
      },
      {
        "hora": "15:00",
        "atividade": "Coffee break"
      },
      {
        "hora": "17:00",
        "atividade": "Demo Day"
      },
      {
        "hora": "20:00",
        "atividade": "Encerramento do evento"
      }
    ]
  }
}
const renderRow = (date, atividade, atividades) => {
  if (atividade === atividades[0]) {
    return (
      <tr key={`${date}_${atividade["hora"]}`}>
        <th rowSpan={atividades.length} className={date.split("/")[0]}>{date}</th>
        <td>{atividade["hora"]}</td>
        <td>{atividade["atividade"]}</td>
      </tr>)
  }
  else {
    return (
      <tr key={`${date}_${atividade["hora"]}`}>
        <td>{atividade["hora"]}</td>
        <td>{atividade["atividade"]}</td>
      </tr>
    )
  }
}
const BuildTable = () => {
  const keys = Object.keys(tableData)
  return keys.map(date => {
    return tableData[date].atividades.map(atividade => {
      return (
          renderRow(date, atividade, tableData[date].atividades)
      )
    })
  });
}

export default function Home() {
  return (
    <Parallax bgImage={background} strength={500}>
      <div className="welcome">
        <div className="subtitle">
          <h1>Objetivo do Hackacomp</h1>
        </div>
        <div className="welcome-text">
          <p>
            O nosso objetivo é promover uma maratona para que os alunos do dcomp
            criem soluções sustentáveis e regionais para os desafios globais (SPOILER ALERT:
            O TEMA TEM COMO BASE OS OBJETIVOS DE DESENVOLVIMENTO
            SUSTENTÁVEL DA ONU E REGIONALISMO).

          </p>

          <p>
            Os objetivos específicos incluem
            estimular a criatividade, desenvolver soluções inovadoras para problemas regionais
            específicos, incentivar a colaboração, fomentar o diálogo entre diferentes setores da
            sociedade e identificar oportunidades para a implementação das soluções
            desenvolvidas.
          </p>
        </div>
      </div>
      <div className="schedule">
        <div className="subtitle">
          <h1>Programação do Hackacomp</h1>
        </div>
        <Table responsive>
          <thead>
            <tr>
              <th>Data</th>
              <th>Hora</th>
              <th>Atividade</th>
            </tr>
          </thead>
          <tbody>
            {BuildTable()}
          </tbody>
        </Table>
      </div>
    </Parallax>
  );
}