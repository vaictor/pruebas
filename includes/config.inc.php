<?php
header('Content-Type: text/html; charset=utf-8');
date_default_timezone_set('MST');
setlocale(LC_MONETARY, 'en_US');

defined('DS') ? NULL : define('DS', DIRECTORY_SEPARATOR);

defined('SITE_ROOT') ? NULL : define('SITE_ROOT', dirname(dirname(__FILE__)).DS);
defined('INCLUDE_PATH') ? NULL : define('INCLUDE_PATH', SITE_ROOT.'includes'.DS);
defined('FUNCTION_PATH') ? NULL : define('FUNCTION_PATH', INCLUDE_PATH.'functions'.DS);
defined('LIB_PATH') ? NULL : define('LIB_PATH', INCLUDE_PATH.'libraries'.DS);
defined('MODEL_PATH') ? NULL : define('MODEL_PATH', INCLUDE_PATH.'models'.DS);
defined('VIEW_PATH') ? NULL : define('VIEW_PATH', INCLUDE_PATH.'views'.DS);

$SERVER = json_decode(file_get_contents(INCLUDE_PATH . 'server.json'));

$url = $SERVER->url;

defined('DATABASE_HOST') ? NULL : define('DATABASE_HOST', $SERVER->host);
defined('DATABASE_NAME') ? NULL : define('DATABASE_NAME', $SERVER->database);
defined('DATABASE_USER') ? NULL : define('DATABASE_USER', $SERVER->user);
defined('DATABASE_PASSWORD') ? NULL : define('DATABASE_PASSWORD', $SERVER->password);

unset($SERVER);

require_once(FUNCTION_PATH.'functions.inc.php');
require_once(LIB_PATH.'database.class.php');
require_once(MODEL_PATH.'personas.model.php');