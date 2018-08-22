<?php 
if (isset($_GET['sd'])) {
$summitdate = $_GET['sd'];
} else {
$summitdate = date("Y-m-d");
}



?>

<!DOCTYPE html>
<html >
<head>
<title></title>
<meta http-equiv="Content-type" content="text/html; charset=utf-8" />
<meta name="keywords" content="" />
<meta name="description" content="" />
<link rel="shortcut icon" href="http://www.linaro.org/favicon.ico" />
<link rel="stylesheet" type="text/css" href="http://www.linaro.org/remote/css/blueprint.css" />
<style>
body, html {margin:0; padding:0; height:100%; background:#fff;}
iframe {display:block; border:0;}

iframe#time {position:absolute; top:4px; height:30px; right:1px; border:0; width:300px; border-radius:5px; -webkit-border-radius:5px; -moz-border-radius:5px;}

.gradient, .gradient2 {height:30px;
background: -moz-linear-gradient(top, rgba(34,34,34,0) 0%, rgba(34,34,34,1) 93%, rgba(34,34,34,1) 100%); /* FF3.6+ */
background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(34,34,34,0)), color-stop(93%,rgba(34,34,34,1)), color-stop(100%,rgba(34,34,34,1))); /* Chrome,Safari4+ */
background: -webkit-linear-gradient(top, rgba(34,34,34,0) 0%,rgba(34,34,34,1) 93%,rgba(34,34,34,1) 100%); /* Chrome10+,Safari5.1+ */
background: -o-linear-gradient(top, rgba(34,34,34,0) 0%,rgba(34,34,34,1) 93%,rgba(34,34,34,1) 100%); /* Opera11.10+ */
background: -ms-linear-gradient(top, rgba(34,34,34,0) 0%,rgba(34,34,34,1) 93%,rgba(34,34,34,1) 100%); /* IE10+ */
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00222222', endColorstr='#222222',GradientType=0 ); /* IE6-9 */
background: linear-gradient(top, rgba(34,34,34,0) 0%,rgba(34,34,34,1) 93%,rgba(34,34,34,1) 100%); /* W3C */
position:absolute;
bottom:15%;
width:30%;
left:0%;
}
.gradient2 {bottom:50%}
#headline {position:absolute; width:18%; left:0; top:28px; }

</style>
<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.6.4/jquery.js"></script>

       <script>
      $(document).ready(function(){
       
       

        
      });
      
      
      $(document).keyup(function(e)
	{
	  if (e.keyCode == '49') {
     $('#panel3').attr('src', 'https://connect.linaro.org/summit/index2.php?refresh=<?php echo rand(1000,1999);?>&url=http://summit.linaro.org/lcq2-12/2012-05-28/display');
   }
    if (e.keyCode == '50') {
     $('#panel3').attr('src', 'https://connect.linaro.org/summit/index2.php?refresh=<?php echo rand(1000,1999);?>&url=http://summit.linaro.org/lcq2-12/2012-05-29/display');
   }
    if (e.keyCode == '51') {
     $('#panel3').attr('src', 'https://connect.linaro.org/summit/index2.php?refresh=<?php echo rand(1000,1999);?>&url=http://summit.linaro.org/lcq2-12/2012-05-30/display');
   }
    if (e.keyCode == '52') {
     $('#panel3').attr('src', 'https://connect.linaro.org/summit/index2.php?refresh=<?php echo rand(1000,1999);?>&url=http://summit.linaro.org/lcq2-12/2012-05-31/display');
   }
    if (e.keyCode == '53') {
     $('#panel3').attr('src', 'https://connect.linaro.org/summit/index2.php?refresh=<?php echo rand(1000,1999);?>&url=http://summit.linaro.org/lcq2-12/2012-06-01/display');
   }
	});
      


    </script>




</head>
<body>

<iframe src="http://free.timeanddate.com/clock/i2x5srdj/n69/fc9c0/tc222/pct/pa8/tt0/tw1/th1/ta1/tb2" width="35%" height="4%" id="time"></iframe>
<div id="headline">  <h1 style="text-align:center; width:100%; font-size:14px;">(use #linaroconnect)</h1></div>

<iframe style="float:right;" src="https://connect.linaro.org/summit/index2.php?refresh=<?php echo rand(1000,1999);?>&url=http://summit.linaro.org/lce12/<?php echo $summitdate ?>/display" width="85%" height="90%" id="panel3" scrolling="no" horizontalscrolling="no" verticalscrolling="yes"></iframe>



<iframe style="float:left;" src="tweets.html?refresh=<?php echo rand(1000,1999);?>" width="15%" scrolling="no" height="90%" id="panel1"></iframe>

<iframe src="logos.html" width="100%" scrolling="no" height="9%" id="panel5" style="clear:both"></iframe>
</body>
</html>