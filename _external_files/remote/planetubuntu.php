<!DOCTYPE html>
<html >
<head>
<meta http-equiv="Content-type" content="text/html; charset=utf-8" />
<link rel="stylesheet" type="text/css" href="http://uds.chrisjohnston.org/css/display.css" />
</head>
<body>

 <div class="headline">
<h1>Blogs at planet.ubuntu.com</h1>
</div>

<div class="typography">
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
</div>
</body>
</html>

