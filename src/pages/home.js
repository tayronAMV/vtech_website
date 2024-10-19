import raz from  '../Photos/raz.jpeg'
import Amitay_Elad from '../Photos/Amitay_Elad.jpeg'
import './home.css'
export const Home = () => {
    return (<div>
        <h1>Vortman technologies</h1>
        <h1>where the future begins</h1>
        <div id="raz">
            <img src={raz} alt='raz' />
            
            <h1>Our Co founder and head of R&D</h1>
        </div>
        <div id="Amitay_Elad">
            <h1>Our wall street investor</h1>
            <img src={Amitay_Elad} alt='elad' />
            <h1>our Co Founder and ceo</h1>

        </div>
    </div>);
 };