<?php
namespace app\modules\admin\controllers;

use yii\data\ActiveDataProvider;
use yii\web\Controller;
use app\modules\admin\entities\Player;
use app\modules\admin\models\PlayerSearch;

class MainController extends Controller
{
	public function actionIndex()
	{

	    $query = Player::find()
            ->select('
                    p.id,
                    p.name,
                    p.keyId,
                    k.name AS keyName
                ')
            ->alias('p')
            ->leftJoin('key AS k', 'k.id = p.keyId');

        $searchPlayer = new PlayerSearch();
        $queryParams = \Yii::$app->request->queryParams;

        if ($queryParams) {
            $searchPlayer->name = $queryParams['PlayerSearch']['name'];
            $searchPlayer->keyId = $queryParams['PlayerSearch']['keyId'];

            if (!empty($searchPlayer->name)) {
                $query->andWhere(['like', 'p.name', $searchPlayer->name]);
            }

            if (!empty($searchPlayer->keyId)) {
                $query->andWhere(['p.keyId' => $searchPlayer->keyId]);
            }

        }

        $dataProvider = new ActiveDataProvider([
            'query' => $query,
            'sort' => [
                'defaultOrder' => [
                    'name' => SORT_ASC,
                ],
                'attributes' => [
                    'id' => ['id' => SORT_ASC],
                    'name' => ['name' => SORT_ASC]
                ],
            ],
        ]);

		return $this->render('index', [
			'dataProvider' => $dataProvider,
            'searchPlayer' => $searchPlayer
		]);
	}
}