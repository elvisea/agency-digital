import styles from "./styles.module.scss";

export default function SectionTwo() {
  return (
    <>
      <div className={styles.container}>
        <header>
          <img src="/images/logo.svg" alt="Logo Empresa" />
          <nav>
            <a href="http://">Home</a>
            <a href="http://">Seus benefícios</a>
            <a href="http://">Nosso processo</a>
            <a href="http://">Nossos trabalhos</a>
            <a href="http://">Testemunhos</a>
            <a href="http://">Inicie um projeto</a>
          </nav>
        </header>

        <div></div>
      </div>
    </>
  );
}
