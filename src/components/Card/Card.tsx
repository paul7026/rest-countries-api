import styles from "./Card.module.css";

export interface CardProps {
  img: string;
  name: string;
  info: {
    title: string;
    description: string;
  }[];
  onClick: () => void;
}

function Card({ img, name, info, onClick }: CardProps) {
  return (
    <article className={styles.article} onClick={onClick}>
      <img src={img} alt={name} />
      <div className={styles["card-body"]}>
        <h3>{name}</h3>
        <ul>
          {info.map((item) => (
            <li key={item.title}>
              <b>{item.title}</b> {item.description}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default Card;
