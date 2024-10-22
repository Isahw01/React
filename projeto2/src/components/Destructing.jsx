
const Destructing = (
    {time, estado, posicao, campeao}
) => {
  return (
    <div>
        <hr />
        <h2>O nome do time é: {time}</h2>
        <h2>O estado do time é: {estado}</h2>
        <h2>Sua posição é: {posicao}</h2>
        {campeao && <h1> ESTE TIME É CAMPEAO</h1>}
    </div>
  )
}

export default Destructing