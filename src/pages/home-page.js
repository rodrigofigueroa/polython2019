import {html, css} from 'lit-element';
import {PageDM} from '../utils/page-dm.js';

class HomePage extends PageDM {
  static get styles() {
    return css`
      .container-mapa {
        padding: 10px;        
        display: flex;
      }
      .container-mapa .mapa{
        width: 60%;
        background: #f2f2f2;
      }
      .container-mapa .rutas{
        width: 40%;
        background: #f2f2f2;
      }
      .custom-select-dos{
        display: inline-block;
        width: 100%;
        height: calc(2.25rem + 2px);
        padding: .375rem 1.75rem .375rem .75rem;
        line-height: 1.5;
        color: #495057;
        vertical-align: middle;
        background: #fff url(data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' v…0 4 5'%3E%3Cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E) no-repeat right .75rem center;
        background-size: 8px 10px;
        border: 1px solid #ced4da;
        border-radius: .25rem;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
    }
    .elige-rutas{
        width: 100%;
      background: red;
      text-align: center;
    }
    .elige-rutas h1{
      margin-block-end: 0;
      margin-block-start: 0;
    }
    `;
  }

  render() {
    return html`
      <section class="container-mapa">      
          <article class="mapa">
            <p>inserta el mapa aqui</p>
          </article>
          <article class="rutas">        
            <div class="elige-rutas">
              <h1>Rutas </h1>
            </div>     
            <div class="container-rutas">               
              <select class="custom-select-dos">
                  <option value="r-1">Ruta 1</option>
                  <option value="r-2">Ruta 2</option>
                  <option value="r-3">Ruta 3</option>
                  <option value="r-4">Ruta 4</option>
              </select>              
              <p class="cm-ruta"> 5 Camiones en ruta</p>         
              <p class="cm-min"> 4 minutos para que llegue</p>
              <p class="cm-prox"> Proxima Parada Tal</p>
              <p> Hubo un choque demorará el Cámion </p>
              <p>Esta lloviendo demorara el Cámion </p>
              <p> Se desvio el camion a la siguiente parada </p>
            </div>
          </article>      
      </section>
    `;
  }
}

window.customElements.define('home-page', HomePage);
