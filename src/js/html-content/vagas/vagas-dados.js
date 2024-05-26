// object and list object
const vagas = {
    'Design': [
        {
            title: 'Productor Designer',
            period: 'Mid',
            remuneration: 7000
        },
        {
            title: 'UX Designer',
            period: 'Full-time',
            remuneration: 6000
        }
    ],
    'Desenvolvimento de Software': [
        {
            title: 'Desenvolvedor(a) iOS',
            period: 'Full-time',
            remuneration: 8000
        },
        {
            title: 'Desenvolvedor(a) Front-end',
            period: 'Full-time',
            remuneration: 7000
        },
        {
            title: 'Desenvolvedor(a) Back-end',
            period: 'Full-time',
            remuneration: 4000
        }
    ]
};

/*
HTML Template
<article class="vagas__cargos">
    <h3>Design</h3>
    <div id="vagas__cargos__abertos">
        <div class="vagas__cargos__abertos__item">
            <span>Product Designer</span>

            <div class="informacoes">
                <span>Full time</span>
                <span>Faixa salarial: R$1200,00</span>
            </div>
        </div>
    </div>
</article>
*/

export default vagas;