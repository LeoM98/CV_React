import React from 'react';
import Leo from '../IMG/leo.jpg'
import Face from '../IMG/facebook.png'
import Insta from '../IMG/instagram.png'
import Wat from '../IMG/whatsapp.png'
import Git from '../IMG/git.png'
import Py from '../IMG/python.png'
import C from '../IMG/c++.png'
import Java from '../IMG/java.png'
import Can from '../IMG/cancer.png'
import Red from '../IMG/redes.jpg'
import S from '../IMG/sss.jpg'
import Mat from '../IMG/matrix.png'
import Bas from '../IMG/bases.jpg'
import Reg from '../IMG/regular.png'
import G from '../IMG/gmail.png'
import P from '../IMG/phone.png'

class Perfil extends React.Component{
    handleChange=e=>{
        console.log({value:e.target.value});
    };

    render(){
        return(<body>
            <div className="perfil">
                <img src= {Leo} alt=""></img>
            </div>
    
            <div className="info">
                <p id="title" contenteditable="true" spellcheck="false"><span>Leonardo David Monsalvo Camacho</span></p>    
                <p className="acerca">Soy estudiante de la Universidad Tecnológica de bolívar, estoy cursando el semestre número 7 de la carrera Ingeniería de sistemas computacionales. Tengo 20 años y estoy completamente enterado de lo que sucede con el futuro de mi carrera.</p>
    
                <div className="redes">
                    <a href="https://www.facebook.com/leo.monsalvo.14?ref=bookmarks"><img src={Face} alt=""></img></a>
                    <a href="https://www.instagram.com/monsalvo_leo/"><img src={Insta} alt=""></img></a>
                    <a href="https://api.whatsapp.com/send?phone=3006366657&text=Estoy%20interesado%20en%20el%20trabajo,%20me%20gustar%C3%ADa%20saber%20m%C3%A1s"><img src={Wat} alt=""></img></a>
                    <a href="https://github.com/LeoM98"><img src={Git} alt=""></img></a>
                </div>
    
                <h2>Experiencia</h2>
                
                <div className="experiencia">
                    <img src={Py} alt=""></img>
                    <p>Python</p>
                    <small>
                        En este lenguaje de programación he trabajo casi toda mi carrera completa, desde hacer programas sencillos, hasta programas que exigen mucho más conocimiento de la carrera. He trabajado con algunos frameworks y patrones de diseño, la variedad de cosas que se pueden hacer en python puede sorprender a cualquiera. Este lenguaje es interpretado.
                    </small>
                </div>
    
                <div className="experiencia">
                    <img src={C} alt=""></img>
                    <p>C++</p>
                    <small>
                            Sobre este lenguaje he creado múltiples programas asociados a las operaciones matemáticas, es muy fácil de usar y no requiere de mucho trabajo para instalarlo. Es un lenguaje compilado que nos permite y/o facilita el uso de herramientas mediante sus librerías tan especificas. C++ es compatible con muchas herramientas, y se le debe reconocer puesto que muchos de los programas que inocentemente usamos hoy fueron escritos en este gran lenguaje de programación.
                    </small>
                </div>
    
                <div className="experiencia">
                    <img src={Java} alt=""></img>
                    <p>Java</p>
                    <small>
                            Es un lenguaje de programación completamente orientado a las clases, a la abstracción de las cosas del mundo real. El uso de Java a lo largo de mi carrera llegó cuando realice un proyecto basado en expresiones regulares, esto lo hice por medio de librerías proporcionadas por este mismo lenguaje, se aclara de que java es un lenguaje interpretado.
                    </small>
                </div>
    
                <h2>Mis Proyectos</h2>
                <div className="proyectos">
                    <img src={Can} alt=""></img>
                    <img src={S} alt=""></img>
                    <img src={Red} alt=""></img>
                    <img src={Reg} alt=""></img>
                    <img src={Mat} alt=""></img>
                    <img src={Bas} alt=""></img>
                </div>
    
                <div className="formulario">
                    <h2>Contactarme</h2>
                    <form>
                        <div className="entradas">
                            <input type="text" placeholder="Nombres"></input>
                            <input type="text" placeholder="Apellidos"></input>
                        </div>
    
                        <div className="entradas">
                            <input type='number' placeholder="Número de celular"></input>
                            <input type="email" placeholder="Correo electronico"></input>
                        </div>
    
                        <div className="mensaje">
                            <textarea rows="5" placeholder="Escribe tu mensaje"></textarea>
                        </div>
    
                        <div className="button">
                            <a className="btn blue">Enviar</a>
                        </div>
    
                    </form>
                </div>
    
                <div className="contacto">
                    <span><img src={G} alt=""></img><a href="mailto:leonardomoc98@gmail.com">leonardomoc98@gmail.com</a></span>
                    <span><img src={P} alt=""></img>+57 300-63666-57</span>
                </div>
    
            </div>
    
        </body>

        )
    }

}

export default Perfil;