import styles from "./styles.module.scss";

export default function SectionTwo() {
  return (
    <>
      <div className={styles.container}>
        <span>FEATURES</span>
        <h1>
          Estamos aqui <br />
          para ajudá-lo com
        </h1>

        <div className={styles.containerCards}>
          <div>
            <h2>Faça seu negócio crescer</h2>
            <p>
              A varinha mágica para o sucesso está em descobrir como gerar
              lucros e garantir a capacidade necessária para sustentar esse
              crescimento para a posteridade.
            </p>
          </div>
          <div>
            <h2>Gere mais vendas</h2>
            <p>
              Um cliente potencial, uma vez perdido, é difícil de reter. Mas
              mantendo alguns fatores críticos em mente, podemos, com certeza,
              usar esses programas de fidelidade como ferramentas de retenção de
              clientes.
            </p>
          </div>
          <div>
            <h2>Grow your business</h2>
            <p>
              Sabemos como podemos desenvolver relacionamentos profundos e
              baseados na confiança com nossos clientes e trabalhar juntos de
              forma mais colaborativa
            </p>
          </div>
          <div>
            <h2>UX Pesquisa</h2>
            <p>
              A pesquisa UX é o estudo sistemático de usuários-alvo e seus
              requisitos, para adicionar contextos e percepções realistas aos
              processos de design.
            </p>
          </div>
          <div>
            <h2>Auditoria Empresarial</h2>
            <p>
              Uma auditoria examina os registros financeiros de sua empresa para
              verificar se eles estão corretos. Isso é feito por meio de uma
              revisão sistemática de suas transações.
            </p>
          </div>
          <div>
            <h2>Rastreamento de dados</h2>
            <p>
              O hardware e software, que quando usados juntos permitem que você
              saiba onde algo está a qualquer momento
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
