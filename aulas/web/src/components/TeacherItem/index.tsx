import React from "react";

import "./styles.css"

import WhatsappIcon from "../../assets/images/icons/whatsapp.svg"


function TeacherItem() {

    return(

    <article className="teacher-item">
<header>
    <img src="https://avatars2.githubusercontent.com/u/45443380?s=460&u=3a9e5d0cc92034ab3681913a9ad7bfba1ff6a525&v=4" alt="Daniel Netto"/>
    <div>
        <strong>Daniel Netto</strong>
        <span>Matemática</span>
    </div>
</header>
<p>
    Nulla pellentesque.
    <br/><br/>
    Nulla justo turpis, pharetra sed urna nec, fringilla ultrices dui.
    Nam congue id dui vitae porta. Duis dignissim leo vel mi egestas aliquam.
</p>
<footer>
    <p>
     Preço/hora
     <strong> R$ 100,00</strong>
    </p>
    <button type="button">
       <img src={WhatsappIcon} alt="Whatsapp"/>
        Fale conosco
    </button>
</footer>           
</article>
)
}

export default TeacherItem;