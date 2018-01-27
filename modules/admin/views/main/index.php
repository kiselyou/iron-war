<?php
use \yii\bootstrap\Html;
use \yii\grid\GridView;
use \yii\grid\CheckboxColumn;
use \app\modules\admin\entities\Player;

/* @var $dataProvider \yii\data\ActiveDataProvider */
/* @var $playerFormSearch \app\modules\admin\models\PlayerFormSearch */
/* @var $keysDropDownList array */
?>

<h3>Список игроков</h3>

<div class="row">
    <div class="col-sm-6 text-left"></div>
    <div class="col-sm-6 text-right">
        <?=
            Html::a(
                'Добавить',
                'create',
                [
                    'class' => 'btn btn-default btn-sm'
                ]
            );
        ?>
    </div>

</div>
<hr>
<div class="row">
    <div class="col-sm-12">

        <?=
            GridView::widget([
                'dataProvider' => $dataProvider,
                'filterModel' => $playerFormSearch,
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
                            $playerFormSearch,
                            'keyId',
                            $keysDropDownList,
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

    </div>
</div>
