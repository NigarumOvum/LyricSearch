import './style.css'

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
    <header>
      <h1>Lyrics Search Web App</h1>
        <h2>Search Song Name and Artist for better results. </h2> 
      <form id="form">
        <input
          type="text"
          id="search"
          placeholder="Canción o Artista"
        />
        <button>Buscar</button>
      </form>
    </header>

    <div id="result" class="container">
      <p>Resultados se mostrarán acá</p>
    </div>

    <div id="more" class="container centered"></div>
  <div id="footer">
    <div class="container text-center">
      <div class="fnav">
        <p class="gradient">Copyright &copy; 2021. Designed by <a href="https://neighbordevcr.com" rel="nofollow">NeighborDev CR.</a></p>
      </div>
    </div>
  </div>
`
