import './styles.css';

export function Header(props) {
  return (
    <header className="topo1">
      <h2>{props.nome}</h2>
    </header>
  );
}
