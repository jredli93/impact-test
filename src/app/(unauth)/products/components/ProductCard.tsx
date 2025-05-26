export default function ProductCard(props) {
  const { name, description, price } = props;
  return (
    <div className="flex flex-col rounded-lg bg-white text-dark gap-2 p-4">
      <h3>{name}</h3>
      <p>{description}</p>
      <p>{price} $</p>
    </div>
  );
}
