import React from "react";
import "../styles/MainContent.css";
import clock from "../assets/omega.jpg";

function MainContent() {
    return (
        <main className="main-content">
            <p>Legenda zegarmistrzostwa w nowej odsłonie! Speedmaster Moonwatch Professional New Generation
                Speedmaster Moonwatch to jeden z najbardziej znanych zegarków na świecie. Będąc częścią wszystkich
                sześciu lądowań na Księżycu, legendarny chronograf jest imponującym odzwierciedleniem pionierskiego
                ducha przygody.
                Prezentowany na szczotkowanej bransoletce z pięcioma łukami w rzędzie, ten 42-milimetrowy Moonwatch ze
                stali nierdzewnej ma hesalitowe szkło z przodu i wytłaczany medalion z koniem morskim na deklu.
                Zainspirowany stylem Speedmaster czwartej generacji noszonym na Księżycu, zawiera również asymetryczną
                kopertę, czarną tarczę stopniową i słynną kropkę ponad 90 na pierścieniu z anodyzowanego aluminium.
                Zegarek jest napędzany przez OMEGA Co-Axial Master Chronometer Calibre 3861, który zasila małą sekundową
                tarczę pomocniczą, 30-minutowy i 12-godzinny licznik wraz z centralną funkcją chronografu. Rezerwa chodu
                sięga 50h.</p>
            <img src={clock} alt="Example" className="content-image" />
        </main>
    );
}

export default MainContent;
