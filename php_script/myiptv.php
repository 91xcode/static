<?php

header("Content-Type: text/html; charset=utf-8");
include "HttpProxyBlock.php";

error_reporting(E_ALL);
ini_set("display_errors", "On");

function get_json($url, $post_data) {
    $http = HttpProxyBlock::instance();
    $http->setTimeout(40);
    $return = $http->post($url, $post_data);
    return $return;
}

/**
 * curl获取数据 get
 * @param type $url
 * @return type
 */
function get_json_get($url) {
    $http = HttpProxyBlock::instance();
    $http->setTimeout(40);
    $return = $http->get($url);
    return $return;
}

function getdianShiHome() {
    $url = "http://cdn.dianshihome.com/tvlive/apk/channel/3rd.json";
    $json = get_json_get($url);
    $res = json_decode($json, true);

    $temp = array();
    if ($res) {
        $temp = array_column($res, 'channels', 'identifier');
    }

    if (empty($temp)) {
        echo "数据为空";
        return;
    }

//    var_dump($temp);die;

    $arrRes = array();
    foreach ($temp as $key => $value) {
        $tt = array();
        foreach ($value as $kk => $vv) {


            if (isset($vv['name'])) {
                $tt[$kk]['title'] = $vv['name'];
            } else {
                $tt[$kk]['title'] = "";
            }


            if (isset($vv['url'])) {

                if (strpos($vv['url'], 'm3u8') === false) {
                    if (isset($vv['streams'])) {
                        foreach ($vv['streams'] as $k => $v) {
                            if (strpos($v, 'm3u8') === false) {
                                $tt[$kk]['url'] = '';
                                continue;
                            } else {
                                $tt[$kk]['url'] = $v;
                                break;
                            }
                        }
                    } else {
                        $tt[$kk]['url'] = '';
                    }
                } else {
                    $tt[$kk]['url'] = $vv['url'];
                }
            } else {
                $tt[$kk]['url'] = "";
            }
        }




        $arrRes[strtolower($key)] = $tt;
    }


    return $arrRes;
}

function format($data) {
    if (empty($data)) {
        return;
    }

    $blackArr = array("央广精选", "时尚精品汇", "家有品质", "每日优选", "好享优选", "芒果淘好货", "时尚精品汇", "聚实惠","斗牛财经");
    foreach ($data as $key => $value) {
        foreach ($value as $k => $vv) {

            if (strpos($vv['title'], 'CGTN') !== false) {
                unset($data[$key][$k]);
            }


            if (strpos($vv['title'], '购') !== false) {
                unset($data[$key][$k]);
            }
            if (strpos($vv['title'], '榜') !== false) {
                unset($data[$key][$k]);
            }
            if (strpos($vv['title'], '销') !== false) {
                unset($data[$key][$k]);
            }
            if (strpos($vv['title'], '鲨') !== false) {
                unset($data[$key][$k]);
            }

            if (strpos($vv['title'], '卖') !== false) {
                unset($data[$key][$k]);
            }

            if (in_array($vv['title'], $blackArr)) {
                unset($data[$key][$k]);
            }

            if (!isset($vv['url']) || empty($vv['url'])) {
                unset($data[$key][$k]);
            }
        }
    }


    $arr = array();
    foreach ($data AS $mk => $mv) {
        if ($mk == 'tvlive_local_channel_identifier') {
            $mk = "local";
 
        } elseif ($mk == 'mx') {
            $mk = "other";
        }
        
        
        foreach ($mv AS $nk => $nv) {
            $arr[$mk][] = $nv;
        }
        
    }
    
    foreach ($arr AS $mmk => $mmv) {
        if(!in_array($mmk, array("cctv",'local','other'))){
            unset($arr[$mmk]);
        }
    }
    
    
    
    return $arr;
}

$result = getdianShiHome();
//var_dump($result);
$respone = format($result);
//var_dump($result);

//echo json_encode($respone);
file_put_contents("/usr/local/Cellar/openresty/nginx/html/static/tv.json", json_encode((object)$respone,JSON_UNESCAPED_SLASHES), FILE_APPEND);
