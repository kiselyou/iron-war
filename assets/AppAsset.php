<?php
/**
 * @link http://www.yiiframework.com/
 * @copyright Copyright (c) 2008 Yii Software LLC
 * @license http://www.yiiframework.com/license/
 */

namespace app\assets;

use yii\web\AssetBundle;

/**
 * Main application asset bundle.
 *
 * @author Qiang Xue <qiang.xue@gmail.com>
 * @since 2.0
 */
class AppAsset extends AssetBundle
{
    public $basePath = '@webroot';
    public $baseUrl = '@web';

    public $css = [
        'build/bundle.css',
		'build/components-font-awesome/css/font-awesome.css',
		'build/bootstrap/dist/css/bootstrap.css'
    ];
    public $js = [
        'build/three.js/three.min.js',
        'build/stats.js/build/stats.min.js',
        'build/ShaderParticleEngine/build/ShaderParticles.min.js',
        'build/bundle.js',
    ];
    public $depends = [];
}
