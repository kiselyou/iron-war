<?php
namespace app\modules\admin\controllers;

use yii\data\ActiveDataProvider;
use yii\web\Controller;
use app\modules\admin\entities\Player;
use app\modules\admin\models\PlayerForm;
use app\modules\admin\models\PlayerFormSearch;

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

        $playerFormSearch = new PlayerFormSearch();
        $playerFormSearch->load(\Yii::$app->request->get());

        if (!empty($playerFormSearch->name)) {
            $query->andWhere(['like', 'p.name', $playerFormSearch->name]);
        }

        if (!empty($playerFormSearch->keyId)) {
            $query->andWhere(['p.keyId' => $playerFormSearch->keyId]);
        }

        $dataProvider = new ActiveDataProvider([
            'query' => $query,
            'sort' => [
                'defaultOrder' => [
                    'name' => SORT_ASC,
                ],
                'attributes' => [
                    'id' => ['id' => SORT_ASC],
                    'name' => ['name' => SORT_ASC],
                    'keyId' => ['keyName' => SORT_ASC]
                ],
            ],
        ]);

		return $this->render('index', [
			'dataProvider' => $dataProvider,
            'playerFormSearch' => $playerFormSearch
		]);
	}

	public function actionCreate()
    {
        $form = new PlayerForm();
        $form->load(\Yii::$app->request->post());

        if ($form->getFormKey() == PlayerForm::FORM_KEY_VALIDATE) {
            $form->setFormStatus($form->validate());
            return $this->asJson($form->getFormStatus());
        }

        if ($form->getFormKey() == PlayerForm::FORM_KEY_SAVE) {
            $isValid = $form->validate();
            if ($isValid) {
                $player = new Player();
                $player->name = $form->name;
                $player->save();
            }
            return $this->asJson($isValid);
        }

        return $this->render('create', [
            'playerForm' => $form
        ]);
    }
}