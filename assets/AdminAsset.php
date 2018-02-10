<?php
namespace app\assets;

use yii\web\AssetBundle;

/**
 * @author Valery Kiseloiu
 */
class AdminAsset extends AssetBundle
{
    public $basePath = '@webroot';
    public $baseUrl = '@web';

	public $css = [
		'build/components-font-awesome/css/font-awesome.css'
	];

    public $js = [
        'build/bundle-admin.js'
    ];

    public $depends = [
        'yii\web\YiiAsset',
        'yii\bootstrap\BootstrapAsset',
    ];
}
