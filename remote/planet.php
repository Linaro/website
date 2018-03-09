<!DOCTYPE html>
<html >
<head>
<meta http-equiv="Content-type" content="text/html; charset=utf-8" />

<!-- Page framework CSS  -->
<link rel="stylesheet" type="text/css" href="http://www.linaro.org/remote/css/blueprint.css" />
<!-- // -->
<style>
body {background:#222; color:#fff;}
h3 {padding:5px 10px; color:#a1cd41;}
span {padding:5px 10px;}
p {padding:0px 10px 10px;}

</style>
</head>
<body>

<div id="headline">
  
<h1 style="margin-top:0; padding-top:10px; margin-bottom:10px; text-align:center; font-size:22px;">Blogs at planet.linaro.org</h1>
</div>
    
<?php


$url = "http://planet.ubuntu.com/rss20.xml";
$rss = simplexml_load_file($url);

if($rss)
	{
	$items = $rss->channel->item;
	foreach($items as $item)
		{
		$title = $item->title;
		$link = $item->link;
		$published_on = $item->pubDate;
		$description = $item->description;

		echo '<h3>'.$title.'</h3>';
		echo '<span>'.$published_on.'</span>';
		echo '<p>'.$link.'</p>';
		}
	}
?>

</body>
</html>

