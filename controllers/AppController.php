<?php
namespace app\controllers;

use yii\web\Controller;

class AppController extends Controller
{
	/**
	 * Displays homepage.
	 *
	 * @return string
	 */
	public function actionIndex()
	{
		var_dump('==================================================');
		return $this->render('index', [
			'test' => 'asdasda'
		]);
	}
}