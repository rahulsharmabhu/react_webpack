<?php

$shop = 'rahul.dev.shopify.com';
$hmac = 'jasdhfjbscadfq213434dfbsjfdgbsbfjsdfbghsfbdsfgkbdsfgk23434325235asdhfjbscadfq213434dfbsjfdgbsbfjsdfbghsfbdsfgkbdsfgk23434';
include('./header.php') 

?>

<link rel="stylesheet" href="../dist/main.css">

<script type="text/javascript">
        var preshophmac = {
            shop : <?php echo json_encode($shop); ?>,
            hmac : <?php echo json_encode($hmac);; ?>
        };
</script>

<div id="app">

</div>

<script src="../dist/index.bundle.js"></script>

<?php include('./footer.php') ?>