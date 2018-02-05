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
                        'class' => \yii\grid\ActionColumn::className(),
                        'headerOptions' => [
                            'width' => '1%'
                        ],
                        'buttonOptions' => [
                            'class' => 'btn btn-default btn-xs'
                        ],
                        'template' => '{delete}',
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


<!--<div class="modal show">-->
<!--	<div class="modal-dialog">-->
<!--		<div class="modal-content">-->
<!--			<div class="modal-header" data-modal="header">-->
<!--				<button type="button" class="close" data-modal="close">&times;</button>-->
<!--				<h4 class="modal-title" data-modal="header-text">Название модали</h4>-->
<!--			</div>-->
<!--			<div class="modal-body" data-modal="body"></div>-->
<!--			<div class="modal-footer" data-modal="footer">-->
<!--				<button type="button" class="btn btn-sm btn-primary" data-modal="btn-primary"></button>-->
<!--				<button type="button" class="btn btn-sm btn-default" data-modal="btn-default"></button>-->
<!--				<button type="button" class="btn btn-sm btn-danger" data-modal="btn-danger"></button>-->
<!--				<button type="button" class="btn btn-sm btn-warning" data-modal="btn-warning"></button>-->
<!--			</div>-->
<!--		</div>-->
<!--	</div>-->
<!--</div>-->