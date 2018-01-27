<?php
namespace app\modules\admin\controllers;

use yii\data\ActiveDataProvider;
use yii\helpers\ArrayHelper;
use yii\web\Controller;
use app\modules\admin\entities\Player;
use app\modules\admin\models\PlayerForm;
use app\modules\admin\models\PlayerFormSearch;
use app\modules\admin\repository\KeyRepository;

class MainController extends Controller
{
    /**
     * @var KeyRepository
     */
    private $keys;


    public function init()
    {
        parent::init();
        $this->keys = new KeyRepository();
    }

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
            'playerFormSearch' => $playerFormSearch,
            'keysDropDownList' => $this->keys->getKeysDropDownList()
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
                $player->keyId = $form->keyId;
                $player->save();
            }
            $form->setFormStatus($isValid);
            return $this->asJson($form->getFormStatus());
        }

        return $this->render('create', [
            'playerForm' => $form,
            'keysDropDownList' => $this->keys->getKeysDropDownList()
        ]);
    }
}