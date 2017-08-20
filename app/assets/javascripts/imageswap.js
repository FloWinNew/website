<script language="javascript" type="text/javascript">

    $(document).ready(function () {
      setImageOne();
    });

    function setImageOne() {
      $('#imageSwap').fadeIn(500).html('<img src="image01.jpg" />').delay(2000).fadeOut(500, function () { setImageTwo(); });
    }

    function setImageTwo() {
      $('#imageSwap').fadeIn(500).html('<img src="image02.jpg" />').delay(2000).fadeOut(500, function () { setImageOne(); });
    }

  </script>
