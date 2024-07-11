import style from "./Loading.module.css";

const Loading = () => {
  return (
    <div className={style.loadingCont}>
      <div className={style.animationCont}>
        <div className={style.loader}></div>
        <p>Loading...</p>
      </div>
    </div>
  )
}

export default Loading
