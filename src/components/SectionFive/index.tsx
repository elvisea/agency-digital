import styles from "./styles.module.scss";

export default function SectionThree() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.containerContent}>
          <div>
            <span>START WITH US</span>
            <h1>Start working faster today</h1>
            <p>
              We know the best solution for all of your business ideas and we
              can help you solve all business problems
            </p>
            <button>GET STARTED</button>
          </div>
          <img src="/images/section-five.png" alt="" />
        </div>
      </div>
    </>
  );
}
