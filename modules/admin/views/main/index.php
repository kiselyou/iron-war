<?php
use \yii\grid\GridView;
use \yii\grid\CheckboxColumn;
use \app\modules\admin\entities\Player;

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
                'filter' => \yii\helpers\Html::activeDropDownList(
                    $searchPlayer,
                    'keyId',
                    \yii\helpers\ArrayHelper::map(\app\modules\admin\entities\Key::find()
                        ->asArray()
                        ->all(),
                        'id',
                        'name'
                    ),
                    [
                        'class'=>'form-control',
                        'prompt' => 'не выбрано'
                    ]
                ),
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
