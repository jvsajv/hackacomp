import React from "react";
import "../styles/Home.css"
import { Parallax, Background } from "react-parallax";
import background from "../assets/background_home.png"
export default function Home() {
    return (
        <Parallax bgImage={background} strength={500}>
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
        </Parallax>
    );
}