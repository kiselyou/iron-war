<?php
use \yii\helpers\Html;
use \yii\grid\GridView;
use \yii\grid\CheckboxColumn;
use \yii\helpers\ArrayHelper;
use \app\modules\admin\entities\Player;
use \app\modules\admin\entities\Key;

/* @var $dataProvider \yii\data\ActiveDataProvider */
/* @var $searchPlayer \app\modules\admin\models\PlayerSearch */

?>

<?=
    GridView::widget([
        'dataProvider' => $dataProvider,
        'filterModel' => $searchPlayer,
        'columns' => [
            [
                'attribute' => 'id',
                'label' => 'ID',
                'format' => 'text',
                'headerOptions' => [
                    'width' => '1%',
                ],
            ],
            [
                'attribute' => 'name',
                'format' => 'text',
                'label' => 'Имя игрока',
            ],
            [
                'attribute' => 'keyName',
                'value' => function (Player $player) {
                    return $player->keyName;
                },
                'filter' => Html::activeDropDownList(
                    $searchPlayer,
                    'keyId',
                    ArrayHelper::map(Key::find()
                        ->asArray()
                        ->all(),
                        'id',
                        'name'
                    ),
                    [
                        'class'=>'form-control',
                        'prompt' => 'не выбрано',
                    ]
                ),
                'label' => 'Ключ',
            ],
            [
                'class' => CheckboxColumn::className(),
                'headerOptions' => [
                    'width' => '1%',
                ],
            ],
        ],
    ])
?>
