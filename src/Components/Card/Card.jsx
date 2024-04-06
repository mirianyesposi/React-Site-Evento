
export default function Card({ img, titulo, descricao }) {
  return (
    <div className='ofc'>
      <img src={img} alt={titulo} />
      <h1>{titulo}</h1>
      <p>{descricao}</p>
      <button className='btnLearn'>Learn more</button>
    </div>
  );
}
