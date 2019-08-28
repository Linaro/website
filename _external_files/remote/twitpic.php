<?php

header('Content-type: application/javascript');


$path = 'tmp/';
$raw_files =  scandir($path);
$files = array();
$latest = FALSE;

foreach($raw_files as $file)
{
	if(preg_match('/(^twitpic-[0-9]{10}\.txt$)/', $file) == TRUE)
	{
		$files[] = $file;
	}
}

if(count($files > 0))
{
	$latest = array_pop($files);
	
	foreach($files as $file)
	{
		unlink($path.$file);
	}
}

if($latest !== FALSE)
{
	$last_request = substr($latest, 8, 10);
	$time_diff = time() - $last_request;
	
	if($time_diff < 1200)
	{
		if($pics = @file_get_contents($path.$latest))
		{	
			echo $pics;
			exit;
		}
	}
}

$api_request = 'http://api.twitpic.com/2/tags/show.json?tag=linaroconnect&callback=?';

if($pics = @file_get_contents($api_request))
{
	$file_name = 'twitpic-'.time().'.txt';	
	@file_put_contents($path.$file_name, $pics);
	
	echo $pics;
}

echo json_encode(array());
?>