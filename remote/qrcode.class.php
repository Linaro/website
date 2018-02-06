<?php
//============================================================+
// File name   : qrcode.class.php
// Begin       : 2011-01-01
// Last Update : 2011-02-26
// Version     : 1.0.0
// License     : GNU LGPL (http://www.gnu.org/copyleft/lesser.html)
// 	----------------------------------------------------------------------------
//  Copyright (C) 2011 by Stefan Mayr, code@grizzly.cc
// 	
// 	This program is free software: you can redistribute it and/or modify
// 	it under the terms of the GNU Lesser General Public License as published by
// 	the Free Software Foundation, either version 2.1 of the License, or
// 	(at your option) any later version.
// 	
// 	This program is distributed in the hope that it will be useful,
// 	but WITHOUT ANY WARRANTY; without even the implied warranty of
// 	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// 	GNU Lesser General Public License for more details.
// 	
// 	You should have received a copy of the GNU Lesser General Public License
// 	along with this program.  If not, see <http://www.gnu.org/licenses/>.
// 	
// 	See LICENSE.TXT file for more information.
//  ----------------------------------------------------------------------------
//
// Description : PHP class for generating QR barcodes specially for social media 
//               plattforms like Facebook, Twitter and YouTube
//
// Author: Stefan Mayr
//  ----------------------------------------------------------------------------
//
// Example Usage :  
// $qr = new SocialQrCode ();
// $qr->setType ( SocialQrCode::QRCODE_TYPE_PNG );
// $qr->generate ( "http://qrcodescript.com" );
//
// Send the qr code to the standard output device (browser)
// $qr->show ();
//
// OR: force downloading the qr code
// $qr->force_download ( 'qrcode.png' );
//
// OR: storing the qr code to a directory
// $qr->store ( "./codes/", "mycode1.pdf" );
//
//============================================================+


/**
 * PHP class for generating QR barcodes specailly for social media
 * plattforms like Facebook, Twitter and YouTube and any other URL
 * @abstract Functions for generating social media QR barcodes.
 * @author Stefan Mayr
 * @copyright 2011 Stefan Mayr, Grizzly GmbH, code@grizzly.cc
 * @link http://qrcodescript.com
 * @license http://www.gnu.org/copyleft/lesser.html LGPL
 * @version 1.0.0
 */

class SocialQrCode {
	
	/**
	 * Constant holding the url to the QR-Code-Api
	 */
	const QR_API_URL = "http://api.2fb.co/";
	
	/**
	 * Constant representing the type PNG
	 */
	const QRCODE_TYPE_PNG = 0;
	
	/**
	 * Constant representing the type PDF
	 */
	const QRCODE_TYPE_PDF = 1;
	
	/**
	 * @var string representation of the qrcode
	 * @access private
	 */
	private $qr_code = null;
	
	/**
	 * @var size of the qr code
	 * @access private
	 */
	private $qr_code_size = 20;
	
	/**
	 * @var type of the qr code
	 * @access private
	 */
	private $qr_code_type = self::QRCODE_TYPE_PNG;
	
	/**
	 * @var copyright statement on the qr code
	 * @access private
	 */
	private $qr_code_copyright = "powered by fansticker.net";
	
	/**
	 * Generates a QR-Code for a given social plattform profile url
	 * @param string $social_profile_url url to the users social media profile.
	 * @access public
	 */
	public function generate($social_profile_url) {
		$url = $this->get_api_url ( $social_profile_url );
		$response = $this->download_curl ( $url );
		if (! $response) {
			$response = $this->download_fopen ( $url );
			if (! $response) {
				$response = $this->download_fsock ( $url );
			}
		}
		$this->qr_code = $response;
	}
	
	/** 
	 * Forces the browser to download the file
	 * @param string $filename the name of the download file
	 * @access public
	 */
	public function force_download($filename) {
		header ( "Cache-Control: public" );
		header ( "Content-Description: File Transfer" );
		header ( "Content-Disposition: attachment; filename=" . $filename );
		if ($this->qr_code) {
			switch ($this->qr_code_type) {
				case self::QRCODE_TYPE_PNG :
					header ( 'Content-Type: image/png' );
					break;
				case self::QRCODE_TYPE_PDF :
					header ( 'Content-type: application/pdf' );
					break;
			}
			
			header ( "Content-Transfer-Encoding: binary" );
			echo $this->qr_code;
		}
	}
	
	/** 
	 * Stores the qr code to the local server disk
	 * @param string $dest_directory the directory to store the code in
	 * @param string $dest_file the filename for the file to store
	 * @access public
	 */
	public function store($dest_directory, $dest_file) {
		if ($dest_directory && $dest_file && $this->qr_code) {
			$this->make_dir ( $dest_directory, 777 );
			if (is_dir ( $dest_directory )) {
				$f = fopen ( $dest_directory . $dest_file, 'wb' );
				fwrite ( $f, $this->qr_code, strlen ( $this->qr_code ) );
			} else {
				return false;
			}
		} else {
			return false;
		}
	}
	
	/** 
	 * Writes the qr code to the standard output for displaying
	 * @access public
	 */
	public function show() {
		if ($this->qr_code) {
			switch ($this->qr_code_type) {
				case self::QRCODE_TYPE_PNG :
					header ( 'Content-Type: image/png' );
					break;
				case self::QRCODE_TYPE_PDF :
					header ( 'Content-type: application/pdf' );
					header ( 'Content-Disposition: inline; filename="qrcode.pdf"' );
					break;
			}
			echo $this->qr_code;
		}
	}
	
	/** 
	 * Sets the size of the QR code
	 * @param int $size the size of the code
	 * @access public
	 */
	public function setSize($size) {
		$this->qr_code_size = $size;
	}
	
	/** 
	 * Sets the type of the QR code
	 * @param int $type the type of the code
	 * @access public
	 */
	public function setType($type) {
		$this->qr_code_type = $type;
	}
	
	/** 
	 * Sets the copyright statement on the qr code sticker
	 * @param int $copyright the text to display
	 * @access public
	 */
	public function setCopyright($copyright) {
		$this->qr_code_copyright = $copyright;
	}
	
	/**
	 * Generates the url to the qr code api server with all the parameters needed
	 * @param string $social_profile_url url to the users social media profile.
	 * @param string $type the type of the qr code (PDF, PNG, ...)
	 * @access private
	 */
	private function get_api_url($social_profile_url) {
		switch ($this->qr_code_type) {
			case self::QRCODE_TYPE_PNG :
				$typeparam = "PNG";
				break;
			case self::QRCODE_TYPE_PDF :
				$typeparam = "PDF";
				break;
		}
		$url = self::QR_API_URL . "?type=" . $typeparam . "&size=" . $this->qr_code_size . "&url=" . urlencode ( $social_profile_url ) . "&cr=" . urlencode ( $this->qr_code_copyright );
		return $url;
	}
	
	/** 
	 * Tries to download the content of the given url using CURL
	 * @param string $url the url of the file to download
	 * @return the data retrieved 
	 * @access private
	 */
	private function download_curl($url) {
		if (! function_exists ( 'curl_init' ))
			return false;
		
		$ch = curl_init ();
		curl_setopt ( $ch, CURLOPT_URL, $url );
		curl_setopt ( $ch, CURLOPT_HEADER, 0 );
		curl_setopt ( $ch, CURLOPT_FAILONERROR, 1 );
		
		curl_setopt ( $ch, CURLOPT_RETURNTRANSFER, 1 );
		
		$r = curl_exec ( $ch );
		curl_close ( $ch );
		return $r;
	}
	
	/** 
	 * Tries to download the content of the given url using fOpen
	 * @param string $url the url of the file to download
	 * @return the data retrieved 
	 * @access private
	 */
	private function download_fopen($url) {
		if (! $file = @fopen ( $url, 'rb' ))
			return false;
		
		$r = '';
		while ( $block = fread ( $file, 512 ) ) {
			$r .= $block;
		}
		
		fclose ( $file );
		return $r;
	}
	
	/** 
	 * Tries to download the content of the given url using fSocks
	 * @param string $url the url of the file to download
	 * @return the data retrieved 
	 * @access private
	 */
	private function download_fsock($url) {
		$data = parse_url ( $url );
		
		if (! $connect = @fsockopen ( $data ['host'], 80, $errno, $errstr ))
			return false;
		
		fwrite ( $connect, "GET " . $data ['path'] . (isset ( $data ['query'] ) ? '?' . $data ['query'] : '') . " HTTP/1.1\r\n" );
		fwrite ( $connect, "Host: " . $data ['host'] . "\r\n" );
		fwrite ( $connect, "Connection: Close\r\n\r\n" );
		
		// Skip HTTP headers
		$stop = false;
		while ( ! $stop ) {
			$r = str_replace ( "\r", '', fgets ( $connect ) );
			if (strpos ( $r, '404 Not Found' ))
				return false;
			if ($r == "\n")
				$stop = true;
		}
		
		$r = '';
		while ( ! feof ( $connect ) ) {
			
			$r .= str_replace ( "\r", '', fread ( $connect, 512 ) );
		}
		fclose ( $connect );
		
		return $r;
	}
	
	/** 
	 * Tries to make the directory on the server
	 * @param string $pathname the path of the directory
	 * @param string $mode the permission mode for the directory
	 * @access private
	 */
	private function make_dir($pathname, $mode) {
		if (! is_dir ( $pathname )) {
			$dirs = "";
			$path = explode ( '/', $pathname );
			foreach ( $path as $dir ) {
				$dirs .= $dir . "/";
				@mkdir ( $dirs, $mode );
				@chmod ( $dirs, $mode );
			}
		}
		return true;
	}

}

?>