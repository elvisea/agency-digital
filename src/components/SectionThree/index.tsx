import Image from "next/image";
import styles from "./styles.module.scss";

export default function SectionThree() {
  return (
    <>
      <div className={styles.container}>
        <span>COMO FUNCIONA</span>
        <h1>Nossos Processos</h1>
        <p>
          Sabemos a melhor solução para todas as suas ideias de negócios e
          podemos ajudá-lo
          <br /> a resolver todos os problemas de negócios
        </p>

        <div className={styles.containerCard}>
          <img src="/images/card-02.png" alt="" />
          <div>
            {/* <img src="" alt="" /> */}
            <h2>Auditoria Empresarial</h2>
            <p>
              Uma auditoria examina os registros financeiros da sua empresa para
              verificar se eles são preciso. Isso é feito por meio de uma
              revisão sistemática de suas transações.
            </p>
          </div>
        </div>

        <div className={styles.containerCard}>
          <img src="/images/card-02.png" alt="" />
          <div>
            {/* <img src="" alt="" /> */}
            <h2>Data tracking</h2>
            <p>
              O hardware e software, que quando usados juntos permitem que você
              saiba onde algo está a qualquer momento
            </p>
          </div>
        </div>

        <div className={styles.containerCard}>
          <img src="/images/card-02.png" alt="" />
          <div>
            {/* <img src="" alt="" /> */}
            <h2>Results</h2>
            <p>
              Uma auditoria examina os registros financeiros da sua empresa para
              verificar se eles são preciso. Isso é feito por meio de uma
              revisão sistemática de suas transações.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
