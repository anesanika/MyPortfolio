import style from "./Listcard.module.css";

export const Listcard = (props) => {
  return (
    <div className={style.listCardCont}>
      <p>{props.title}</p>
      <div className={style.lists}>
        {props.children}
      </div>
    </div>
  )
}
