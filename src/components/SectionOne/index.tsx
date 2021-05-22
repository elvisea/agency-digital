import Image from "next/image";
import styles from "./styles.module.scss";

export default function SectionOne() {
  return (
    <>
      <div className={styles.container}>
        <header>
          <Image
            src="/images/logo.svg"
            alt="Logo Empresa"
            height={61}
            width={259}
          />
          <nav>
            <a href="http://">Home</a>
            <a href="http://">Seus benefícios</a>
            <a href="http://">Nosso processo</a>
            <a href="http://">Nossos trabalhos</a>
            <a href="http://">Testemunhos</a>
            <a href="http://">Inicie um projeto</a>
          </nav>
          <button>GET STARTED</button>
        </header>

        <div className={styles.containerContent}>
          <h1>Uma agência de design de produto digital</h1>
          <h2>Somos Agência Digital Criativa e Profissional</h2>
          <button>GET STARTED</button>
          <Image src="/images/hero.png" alt="" height={786} width={1080} />
        </div>
      </div>
    </>
  );
}
