/* global Chart, coreui */

/**
 * --------------------------------------------------------------------------
 * CoreUI Boostrap Admin Template main.js
 * Licensed under MIT (https://github.com/coreui/coreui-free-bootstrap-admin-template/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

// Disable the on-canvas tooltip
Chart.defaults.pointHitDetectionRadius = 1
Chart.defaults.plugins.tooltip.enabled = false
Chart.defaults.plugins.tooltip.mode = 'index'
Chart.defaults.plugins.tooltip.position = 'nearest'
Chart.defaults.plugins.tooltip.external = coreui.ChartJS.customTooltips
Chart.defaults.defaultFontColor = coreui.Utils.getStyle('--cui-body-color')

document.documentElement.addEventListener('ColorSchemeChange', () => {
  cardChart1.data.datasets[0].pointBackgroundColor = coreui.Utils.getStyle('--cui-primary')
  cardChart2.data.datasets[0].pointBackgroundColor = coreui.Utils.getStyle('--cui-info')
  mainChart.options.scales.x.grid.color = coreui.Utils.getStyle('--cui-border-color-translucent')
  mainChart.options.scales.x.ticks.color = coreui.Utils.getStyle('--cui-body-color')
  mainChart.options.scales.y.border.color = coreui.Utils.getStyle('--cui-border-color-translucent')
  mainChart.options.scales.y.grid.color = coreui.Utils.getStyle('--cui-border-color-translucent')
  mainChart.options.scales.y.ticks.color = coreui.Utils.getStyle('--cui-body-color')

  cardChart1.update()
  cardChart2.update()
  mainChart.update()
})

const random = (min, max) =>
  Math.floor((Math.random() * (max - min + 1)) + min)

const cardChart1 = new Chart(document.getElementById('card-chart1'), {
  type: 'line',
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First dataset',
        backgroundColor: 'transparent',
        borderColor: 'rgba(255,255,255,.55)',
        pointBackgroundColor: coreui.Utils.getStyle('--cui-primary'),
        data: [65, 59, 84, 84, 51, 55, 40]
      }
    ]
  },
  options: {
    plugins: {
      legend: {
        display: false
      }
    },
    maintainAspectRatio: false,
    scales: {
      x: {
        border: {
          display: false
        },
        grid: {
          display: false,
          drawBorder: false
        },
        ticks: {
          display: false
        }
      },
      y: {
        min: 30,
        max: 89,
        display: false,
        grid: {
          display: false
        },
        ticks: {
          display: false
        }
      }
    },
    elements: {
      line: {
        borderWidth: 1,
        tension: 0.4
      },
      point: {
        radius: 4,
        hitRadius: 10,
        hoverRadius: 4
      }
    }
  }
})

const cardChart2 = new Chart(document.getElementById('card-chart2'), {
  type: 'line',
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First dataset',
        backgroundColor: 'transparent',
        borderColor: 'rgba(255,255,255,.55)',
        pointBackgroundColor: coreui.Utils.getStyle('--cui-info'),
        data: [1, 18, 9, 17, 34, 22, 11]
      }
    ]
  },
  options: {
    plugins: {
      legend: {
        display: false
      }
    },
    maintainAspectRatio: false,
    scales: {
      x: {
        border: {
          display: false
        },
        grid: {
          display: false,
          drawBorder: false
        },
        ticks: {
          display: false
        }
      },
      y: {
        min: -9,
        max: 39,
        display: false,
        grid: {
          display: false
        },
        ticks: {
          display: false
        }
      }
    },
    elements: {
      line: {
        borderWidth: 1
      },
      point: {
        radius: 4,
        hitRadius: 10,
        hoverRadius: 4
      }
    }
  }
})

// eslint-disable-next-line no-unused-vars
const cardChart3 = new Chart(document.getElementById('card-chart3'), {
  type: 'line',
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First dataset',
        backgroundColor: 'rgba(255,255,255,.2)',
        borderColor: 'rgba(255,255,255,.55)',
        data: [78, 81, 80, 45, 34, 12, 40],
        fill: true
      }
    ]
  },
  options: {
    plugins: {
      legend: {
        display: false
      }
    },
    maintainAspectRatio: false,
    scales: {
      x: {
        display: false
      },
      y: {
        display: false
      }
    },
    elements: {
      line: {
        borderWidth: 2,
        tension: 0.4
      },
      point: {
        radius: 0,
        hitRadius: 10,
        hoverRadius: 4
      }
    }
  }
})

// eslint-disable-next-line no-unused-vars
const cardChart4 = new Chart(document.getElementById('card-chart4'), {
  type: 'bar',
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'March', 'April'],
    datasets: [
      {
        label: 'My First dataset',
        backgroundColor: 'rgba(255,255,255,.2)',
        borderColor: 'rgba(255,255,255,.55)',
        data: [78, 81, 80, 45, 34, 12, 40, 85, 65, 23, 12, 98, 34, 84, 67, 82],
        barPercentage: 0.6
      }
    ]
  },
  options: {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      x: {
        grid: {
          display: false,
          drawTicks: false

        },
        ticks: {
          display: false
        }
      },
      y: {
        border: {
          display: false
        },
        grid: {
          display: false,
          drawBorder: false,
          drawTicks: false
        },
        ticks: {
          display: false
        }
      }
    }
  }
})

const mainChart = new Chart(document.getElementById('main-chart'), {
  type: 'line',
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First dataset',
        backgroundColor: `rgba(${coreui.Utils.getStyle('--cui-info-rgb')}, .1)`,
        borderColor: coreui.Utils.getStyle('--cui-info'),
        pointHoverBackgroundColor: '#fff',
        borderWidth: 2,
        data: [
          random(50, 200),
          random(50, 200),
          random(50, 200),
          random(50, 200),
          random(50, 200),
          random(50, 200),
          random(50, 200)
        ],
        fill: true
      },
      {
        label: 'My Second dataset',
        borderColor: coreui.Utils.getStyle('--cui-success'),
        pointHoverBackgroundColor: '#fff',
        borderWidth: 2,
        data: [
          random(50, 200),
          random(50, 200),
          random(50, 200),
          random(50, 200),
          random(50, 200),
          random(50, 200),
          random(50, 200)
        ]
      }
    ]
  },
  options: {
    maintainAspectRatio: false,
    plugins: {
      annotation: {
        annotations: {
          line1: {
            type: 'line',
            yMin: 95,
            yMax: 95,
            borderColor: coreui.Utils.getStyle('--cui-danger'),
            borderWidth: 1,
            borderDash: [8, 5]
          }
        }
      },
      legend: {
        display: false
      }
    },
    scales: {
      x: {
        grid: {
          color: coreui.Utils.getStyle('--cui-border-color-translucent'),
          drawOnChartArea: false
        },
        ticks: {
          color: coreui.Utils.getStyle('--cui-body-color')
        }
      },
      y: {
        border: {
          color: coreui.Utils.getStyle('--cui-border-color-translucent')
        },
        grid: {
          color: coreui.Utils.getStyle('--cui-border-color-translucent')
        },
        ticks: {
          beginAtZero: true,
          color: coreui.Utils.getStyle('--cui-body-color'),
          max: 250,
          maxTicksLimit: 5,
          stepSize: Math.ceil(250 / 5)
        }
      }
    },
    elements: {
      line: {
        tension: 0.4
      },
      point: {
        radius: 0,
        hitRadius: 10,
        hoverRadius: 4,
        hoverBorderWidth: 3
      }
    }
  }
})

/**
 * Section: registar-perito.html
 */
document.getElementById('form-registar-perito')?.addEventListener('submit', function (event) {
  event.preventDefault();

  const nome = document.getElementById('nome').value;
  const morada = document.getElementById('morada').value;
  const email = document.getElementById('email').value;
  const especialidade = document.getElementById('especialidade').value;

  const novoPerito = { nome, morada, email, especialidade };
  const peritos = JSON.parse(localStorage.getItem('peritos')) || [];
  peritos.push(novoPerito);
  localStorage.setItem('peritos', JSON.stringify(peritos));

  document.getElementById('form-registar-perito').reset();
  alert('Perito registrado com sucesso!');

  // Redirecionar para a página de listar peritos
  window.location.href = 'listar-peritos.html';
});

/**
 * Section: novas-ocorrencias.html
 */
function adicionarLinha() {
  const localidade = document.getElementById('nova-localidade').value;
  const tipo = document.getElementById('novo-tipo').value;
  const data = document.getElementById('nova-data').value;
  const estado = document.getElementById('novo-estado').value;

  if (localidade && tipo && data && estado) {
    // Recuperar ocorrências existentes do localStorage
    const ocorrencias = JSON.parse(localStorage.getItem('reports')) || [];

    // Criar uma nova ocorrência
    const novaOcorrencia = {
      localidade,
      tipo,
      data: new Date(data).toLocaleDateString('pt-PT', { year: 'numeric', month: 'short', day: 'numeric' }),
      estado
    };

    // Adicionar a nova ocorrência à lista
    ocorrencias.push(novaOcorrencia);

    // Salvar a lista atualizada no localStorage
    localStorage.setItem('reports', JSON.stringify(ocorrencias));

    // Atualizar a tabela na interface
    const tabela = document.getElementById('novas-ocorrencias-table');
    const novaLinha = document.createElement('tr');
    novaLinha.innerHTML = `
      <td>${novaOcorrencia.localidade}</td>
      <td>${novaOcorrencia.tipo}</td>
      <td>${novaOcorrencia.data}</td>
      <td>${novaOcorrencia.estado}</td>
      <td class="text-center">
        <a href="associar-peritos.html" class="btn btn-success btn-acao">Associar</a>
        <button class="btn btn-danger btn-acao" onclick="removerLinha(this)">Rejeitar</button>
        <button class="btn btn-success btn-acao">Ver detalhes</button>
      </td>
    `;
    tabela.appendChild(novaLinha);

    // Limpar os campos do formulário
    document.getElementById('nova-localidade').value = '';
    document.getElementById('novo-tipo').value = '';
    document.getElementById('nova-data').value = '';
    document.getElementById('novo-estado').value = '';
  } else {
    alert('Por favor, preencha todos os campos antes de adicionar.');
  }
}

function removerLinha(botao) {
  const linha = botao.closest('tr');
  const tabela = document.getElementById('novas-ocorrencias-table');
  const index = Array.from(tabela.rows).indexOf(linha);

  // Remover a ocorrência do localStorage
  const ocorrencias = JSON.parse(localStorage.getItem('reports')) || [];
  ocorrencias.splice(index, 1);
  localStorage.setItem('reports', JSON.stringify(ocorrencias));

  // Remover a linha da tabela
  linha.remove();
}

function verDetalhes(isNova) {
  const url = `ver-detalhes.html?nova=${isNova ? '1' : '0'}`;
  window.location.href = url;
}


/**
 * Section: listar-auditorias.html
 */
function filtrarTabela() {
  const localidadeInput = document.getElementById('localidade').value.toLowerCase();
  const estadoInput = document.getElementById('estado').value;
  const tabela = document.getElementById('auditorias-table');
  const linhas = tabela.getElementsByTagName('tr');

  for (let i = 0; i < linhas.length; i++) {
    const colunas = linhas[i].getElementsByTagName('td');
    const localidade = colunas[0].textContent.toLowerCase();
    const estado = colunas[3].textContent;

    if (
      (localidade.includes(localidadeInput) || localidadeInput === '') &&
      (estado === estadoInput || estadoInput === '')
    ) {
      linhas[i].style.display = '';
    } else {
      linhas[i].style.display = 'none';
    }
  }
}

/**
 * Section: ver-detalhes.html
 */
window.onload = () => {
  const params = new URLSearchParams(window.location.search);
  const isNova = params.get('nova') === '1';

  const titulo = document.getElementById('titulo-ocorrencia');
  const morada = document.getElementById('morada');
  const codPostal = document.getElementById('codigo-postal');
  const descricao = document.getElementById('descricao');
  const secaoUpload = document.getElementById('secao-upload');
  const imagensExistentes = document.getElementById('imagens-existentes');

  if (isNova) {
    titulo.textContent = "Nova Ocorrência";
    morada.value = "";
    codPostal.value = "";
    descricao.value = "";

    morada.placeholder = "Morada";
    codPostal.placeholder = "Código Postal";
    descricao.placeholder = "Descrição";

    morada.removeAttribute('readonly');
    codPostal.removeAttribute('readonly');
    descricao.removeAttribute('readonly');

    secaoUpload.classList.remove('d-none');
  } else {
    titulo.textContent = "Estruturas debilitadas - Anadia";
    morada.value = "Rua do Barreiro nº5";
    codPostal.value = "3780-187";
    descricao.value = "Poste de iluminação inclinado na Rua do Barreiro ameaça segurança na via pública";

    morada.setAttribute('readonly', true);
    codPostal.setAttribute('readonly', true);
    descricao.setAttribute('readonly', true);

    imagensExistentes.classList.remove('d-none');
  }
};

document.getElementById('guardarBtn')?.addEventListener('click', () => {
  const dadosOcorrencia = {
    morada: document.getElementById('morada').value,
    codigoPostal: document.getElementById('codigo-postal').value,
    descricao: document.getElementById('descricao').value
  };

  localStorage.setItem('dadosOcorrencia', JSON.stringify(dadosOcorrencia));
  alert("Dados guardados localmente!");
});

/**
 * Section: listar-peritos.html
 */
function carregarPeritos() {
  const peritos = JSON.parse(localStorage.getItem('peritos')) || [];
  const tabela = document.getElementById('peritos-table');
  tabela.innerHTML = '';

  peritos.forEach((perito, index) => {
    const linha = document.createElement('tr');
    linha.innerHTML = `
      <td>${perito.nome}</td>
      <td>${perito.morada}</td>
      <td>${perito.especialidade}</td>
      <td>${perito.ocorrencia || 'N/A'}</td>
      <td>
        <button class="btn btn-success btn-sm" onclick="editarPerito(${index})">Ver detalhes</button>
        <button class="btn btn-danger btn-sm" onclick="removerLinha(${index})">Remover</button>
      </td>
    `;
    tabela.appendChild(linha);
  });
}

function removerLinha(index) {
  const peritos = JSON.parse(localStorage.getItem('peritos')) || [];
  peritos.splice(index, 1); // Remove o perito pelo índice
  localStorage.setItem('peritos', JSON.stringify(peritos)); // Atualiza o localStorage
  carregarPeritos(); // Recarrega a tabela
}

function filtrarPeritos() {
  const nomeFiltro = document.getElementById('filtro-nome').value.toLowerCase();
  const zonaFiltro = document.getElementById('filtro-zona').value.toLowerCase();
  const especialidadeFiltro = document.getElementById('filtro-especialidade').value.toLowerCase();

  const peritos = JSON.parse(localStorage.getItem('peritos')) || [];
  const tabela = document.getElementById('peritos-table');
  tabela.innerHTML = '';

  peritos
    .filter(perito => 
      (perito.nome.toLowerCase().includes(nomeFiltro) || !nomeFiltro) &&
      (perito.morada.toLowerCase().includes(zonaFiltro) || !zonaFiltro) &&
      (perito.especialidade.toLowerCase().includes(especialidadeFiltro) || !especialidadeFiltro)
    )
    .forEach((perito, index) => {
      const linha = document.createElement('tr');
      linha.innerHTML = `
        <td>${perito.nome}</td>
        <td>${perito.morada}</td>
        <td>${perito.especialidade}</td>
        <td>${perito.ocorrencia || 'N/A'}</td>
        <td>
          <button class="btn btn-success btn-sm" onclick="editarPerito(${index})">Ver detalhes</button>
          <button class="btn btn-danger btn-sm" onclick="removerLinha(${index})">Remover</button>
        </td>
      `;
      tabela.appendChild(linha);
    });
}

// Carregar os peritos ao carregar a página
window.onload = carregarPeritos;

// Função para carregar as ocorrências do localStorage e exibi-las na tabela
function carregarOcorrencias() {
  const ocorrencias = JSON.parse(localStorage.getItem('reports')) || [];
  const tabela = document.getElementById('novas-ocorrencias-table');
  tabela.innerHTML = ''; // Limpar a tabela antes de carregar os dados

  ocorrencias.forEach(ocorrencia => {
    const linha = document.createElement('tr');
    linha.innerHTML = `
      <td>${ocorrencia.localidade}</td>
      <td>${ocorrencia.tipo}</td>
      <td>${ocorrencia.data}</td>
      <td>${ocorrencia.estado}</td>
      <td class="text-center">
        <a href="associar-peritos.html" class="btn btn-success btn-acao">Associar</a>
        <button class="btn btn-danger btn-acao" onclick="removerLinha(this)">Rejeitar</button>
        <button class="btn btn-success btn-acao">Ver detalhes</button>
      </td>
    `;
    tabela.appendChild(linha);
  });
}

// Carregar as ocorrências ao abrir a página
if (window.location.pathname.includes('novas-ocorrencias.html')) {
  window.onload = carregarOcorrencias;
}
