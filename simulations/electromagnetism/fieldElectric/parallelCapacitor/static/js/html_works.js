

$('#footer').append(`
<footer class="shadow-lg text-center text-white" style="background-color:#0a0016;">
  <!-- Grid container -->
  <div class="container p-4 pb-0">
    <!-- Section: Social media -->
    <section class="mb-4">

      <!-- Twitter -->
      <a class="btn btn-outline-light btn-floating m-1" title="Twitter - BezerraReinan"
        href="https://twitter.com/BezerraReinan" role="button"><i class="bi bi-twitter"></i></a>

      <!-- Instagram -->
      <a class="btn btn-outline-light btn-floating m-1" title="Instagram - reinanbr_"
        href="https://www.instagram.com/reinanbr_/" role="button"><i class="bi bi-instagram"></i></a>

      <!-- Github -->
      <a class="btn btn-outline-light btn-floating m-1" title="GitHub - ReinanBr" href="https://github.com/reinanbr"
        role="button"><i class="bi bi-github"></i></a>
    </section>

    <!-- Section: Social media -->
  </div>
  <!-- Grid container -->

  <!-- Copyright -->
  <div class="shadow-lg card d-flex p-1 text-center p-3" style="background-color: #05000b;">
    © 2023
    <a class="text-white" href="https://github.com/reinanbr">ReySofts | Reinan Br</a>

    <small><a class="text-white" href="/sites/cardapio/privacidade.html">Política de Privacidade e Direito
        Autoral</a></small>
    <!-- <br><small><a class="text-white" href="/privacidade.html">Codigo-Fonte</a></small>
     -->

<div style="text-align:left;width:20wh">
<img width="90wh" src='/sites/cardapio/assets/imgs/marcaif.png'>
<img width="90wh" src='/sites/cardapio/assets/imgs/reysofts_logo.png'>
</div>
    <hr style="background-color:white" />

    <div id="painelAlert">

    </div>
    <div style='text-align:left'>
      <textarea id='inputComment'
        style="border-color:white;border-radius:10px; font-size:15px;padding:19px 25px;height:12vh;width:25wh"
        placeholder="relate um bug, ou envie uma sugestão ou comentário."></textarea>
      <br />
      <button type='button' id="btnSendFeed" class='btn btn-dark'>enviar</button>
    </div>

  </div>
  <!-- <div class='nameVersion'><small>Em desenvolvimento..</small></div> -->
  <!-- <div class='text-center p-3' style='background-color:#001339'><small>Este site não possui nenhuma ligação com
      nenhuma instituição federal.</small></div>
  Copyright -->
</footer>`)

