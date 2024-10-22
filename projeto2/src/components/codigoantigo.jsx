import Events from "./components/Events";
import ListRender from './components/ListRender';
import NewStates from './components/NewStates';
import PropsTest from './components/PropsTest';
import Destructing from './components/Destructing';


const codigoantigo = () => {
  return (
    <div>

        {/*trabalhando com events*/}
      <Events />
      {/*Uso de useStates*/}
      <NewStates />
      {/*Mostrando listas na tela*/}
      <ListRender />
      {/*Trabalhando com props*/}
      <PropsTest name={nome} />
      {/*Destructing*/}
      <Destructing time= "São Paulo" estado="SP" posicao={1} campeao={true} />
      <Destructing time= "Gama" estado="DF" posicao={2} campeao={false} />
      <Destructing time= "Vasco da Gama" estado="RJ" posicao={1000} campeao={false}/>
      
      


    </div>
  )
}

export default codigoantigo