
import './App.css';
import Card from './components/Card'
import iPhone_13 from './img/iPhone_13.PNG'
import iPhone_13_pro from './img/iPhone_13_pro.PNG'
import iPhone_12 from './img/iPhone_12.PNG'


function App() {
  return (
    <div className="App">
      <div className="nav">
        <ul>
          <li>Mac</li>
          <li>iPad</li>
          <li>iPhone</li>
          <li>Watch</li>
          <li>TV y Casa</li>
          <li>Sólo en Apple</li>
          <li>Soporte</li>
          <li>Dónde Comprar</li>
        </ul>
      </div>
      
      <div className="title">
        <p>Productos</p>
      </div>
      <div className="Tarjetas">
        <Card title_card="iPhone 13" titleModal="iPhone 13" imagen={iPhone_13} 
        pulgadas="6.7 o 6.1 pulgadas Pantalla OLED sin marco con ProMotion" 
        camara="Sistema de cámaras Pro Teleobjetivo, gran angular y ultra gran angular" 
        chip="Chip A15 Bionic El chip más rápido en un smartphone"
        compatible="Compatible con 5G" 
        bateria="Hasta 28 horas de reproducción de video"/>

        <Card title_card="iPhone 13 Pro" titleModal="iPhone 13 Pro" imagen={iPhone_13_pro} 
        pulgadas="6.1 o 5.4 pulgadas Pantalla OLED sin marco"
        camara="Sistema avanzado de dos cámaras Gran angular y ultra gran angular"
        chip="Chip A15 Bionic Más rápido que la competencia"
        compatible="Compatible con 5G"
        bateria="Hasta 19 horas de reproducción de video"/>


        <Card title_card="iPhone 12" titleModal="iPhone 12" imagen={iPhone_12}
        pulgadas="6.1 o 5.4 pulgadas Pantalla OLED sin marco"
        camara="Sistema de dos cámaras Gran angular y ultra gran angular"
        chip="Chip A14 Bionic"
        compatible="Compatible con 5G"
        bateria="Hasta 17 horas de reproducción de video"/>
      </div>
    </div>
  );
}

export default App;
