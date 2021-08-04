<?php
/**
 * 
 *
 */

class HttpProxyBlock {
	
	/**
	 * Curl句柄
	 * @var CURL
	 */
	private $handle;
	
	/**
	 * HTTP请求超时时间
	 * @var int
	 */
	private $timeout = 20;
	
	private static $instance;
	private $_port = 80;					//访问的端口,http默认是 80
	private $_userAgent = "";				//客户端 USERAGENT,如:"Mozilla/4.0",为空则使用用户的浏览器
	private $_useCookie = true;				//是否使用 COOKIE 建议打开，因为一般网站都会用到
	private $_ssl = false;					//是否使用代理
	private $_gzip = true;					//客户端是否支持 gzip压缩
	
	private $_proxy = false ;				//是否使用代理
	private $_proxyType = 'HTTP' ;			//代理类型,可选择 HTTP 或 SOCKS5
	private $_proxyHost = array() ;			//代理的主机地址
	private $_proxyAuth = false ;			//代理是否要身份认证(HTTP方式时)
	private $_proxyAuthType = 'BASIC';		//认证的方式.可选择 BASIC 或 NTLM 方式
	private $_proxyAuthUser = 'user';		//认证的用户名
	private $_proxyAuthPwd = 'password';	//认证的密码
	
	
	
	private function __construct() {
		$this->handle = curl_init();
		curl_setopt($this->handle, CURLOPT_FOLLOWLOCATION, TRUE);
		curl_setopt($this->handle, CURLOPT_AUTOREFERER, TRUE);
		curl_setopt($this->handle, CURLOPT_CONNECTTIMEOUT, $this->timeout);
		curl_setopt($this->handle, CURLOPT_HEADER, 0);
		curl_setopt($this->handle, CURLOPT_RETURNTRANSFER, TRUE);
		
		if($this->_proxy) {
			$proxyType = $this->_proxyType =='HTTP' ? CURLPROXY_HTTP : CURLPROXY_SOCKS5;
			curl_setopt($this->handle, CURLOPT_PROXYTYPE , $proxyType) ;
		
			foreach ($this->_proxyHost as $_v1) {
				$temp = explode(':', $_v1);
				curl_setopt($this->handle,CURLOPT_PROXY, $temp[0]) ;
				curl_setopt($this->handle,CURLOPT_PROXYPORT, $temp[1]) ;
			}
		
			if($this->_proxyAuth) {
				$proxyAuthType = $this->_proxyAuthType =='BASIC' ? CURLAUTH_BASIC : CURLAUTH_NTLM;
				curl_setopt($this->handle,CURLOPT_PROXYAUTH, $proxyAuthType);
				$user = "[{$this->_proxyAuthUser}]:[{$this->_proxyAuthPwd}]";
				 
				curl_setopt($this->handle,CURLOPT_PROXYUSERPWD, $user);
			}
		
			//打开的支持SSL
			if($this->_ssl){
				curl_setopt($this->handle,CURLOPT_SSL_VERIFYPEER, false);									//不对认证证书来源的检查
				curl_setopt($this->handle,CURLOPT_SSL_VERIFYHOST, true);									//从证书中检查SSL加密算法是否存在
			}
		
			$header[]= 'Expect:';   																//设置http头,支持lighttpd服务器的访问
			curl_setopt($this->handle, CURLOPT_HTTPHEADER, $header);
			$userAgent = $this->_userAgent ? $this->_userAgent : $_SERVER['HTTP_USER_AGENT'];       //设置 HTTP USERAGENT
			curl_setopt($this->handle,CURLOPT_USERAGENT, $userAgent);
		
		
			//设置客户端是否支持 gzip压缩
			if($this->_gzip){
				curl_setopt($this->handle,CURLOPT_ENCODING, 'gzip');
			}
		
			//是否使用到COOKIE
			if($this->_useCookie){
				$cookfile = tempnam(sys_get_temp_dir(),'cuk');  						//生成存放临时COOKIE的文件(要绝对路径)
				curl_setopt($this->handle,CURLOPT_COOKIEJAR, $cookfile);
				curl_setopt($this->handle,CURLOPT_COOKIEFILE, $cookfile);
			}
			curl_setopt($this->handle,CURLOPT_HEADER, true);
			curl_setopt($this->handle,CURLOPT_RETURNTRANSFER, true);							//是否将头文件的信息作为数据流输出(HEADER信息),这里保留报文
			curl_setopt($this->handle,CURLOPT_BINARYTRANSFER, true);							//获取的信息以文件流的形式返回，而不是直接输出。
		
		}
	}

	
	
	/**
	 *
	 * @return HttpProxyBlock
	 */
	public static function &instance() {
		if (!isset(self::$instance)) {
			self::$instance = new HttpProxyBlock();
		}
	
		return self::$instance;
	}
	
	/**
	 * 设置来源URL
	 * @param string $url
	 */
	public function setReferer($url) {
		curl_setopt($this->handle, CURLOPT_REFERER, $url);
	}
	
	/**
	 * 设置超时时间
	 * @param int $second
	 */
	public function setTimeout($second=20) {
		$this->timeout = $second;
		curl_setopt($this->handle, CURLOPT_CONNECTTIMEOUT_MS, $this->timeout * 200);
		curl_setopt($this->handle, CURLOPT_TIMEOUT, $this->timeout);
	}
	
	/**
	 * 忽略之前保存的 Cookie
	 */
	public function newSession() {
		curl_setopt($this->handle, CURLOPT_COOKIESESSION, TRUE);
	}
	
	public function setCookie($cookie) {
		curl_setopt($this->handle, CURLOPT_COOKIE, $cookie);
	}
	
	/**
	 * 用Get方法请求数据
	 * @param string $url
	 */
	public function get($url) {
		curl_setopt($this->handle, CURLOPT_HTTPGET, TRUE);
		curl_setopt($this->handle, CURLOPT_URL, $url);
		return curl_exec($this->handle);
	}
	
	/**
	 * 提交数据到指定的URL
	 * @param string $url
	 * @param Array $post_data 类似于 $_GET/$_POST 取得的数据
	 */
	public function post($url, $post_data) {
		curl_setopt($this->handle, CURLOPT_POST, TRUE);
		curl_setopt($this->handle, CURLOPT_URL, $url);
		curl_setopt($this->handle, CURLOPT_POSTFIELDS, $post_data);
	
		return curl_exec($this->handle);
	}
	
	public function set($option, $value) {
		curl_setopt($this->handle, $option, $value);
	}
	
	public function error() {
		return curl_error($this->handle);
	}
	


}

