<?php

use \yii\bootstrap\Html;
use yii\bootstrap\ActiveForm;

/* @var $playerForm \app\modules\admin\models\PlayerForm */

?>

<h3>Добавить игрока</h3>

<div class="row">
    <div class="col-sm-6 text-left"></div>
    <div class="col-sm-6 text-right">
        <?=
            Html::a(
                'Список игроков',
                'index',
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

        <?php
            $form = ActiveForm::begin([
                'method' => 'POST',
                'action' => ['create'],
                'id' => 'form-create-player'
            ]);
        ?>

        <?= $form->field($playerForm, 'name'); ?>
        <?= Html::button('Сохранить', ['class' => 'btn btn-default btn-sm', 'id' => 'form-create-player-save']); ?>

        <?php ActiveForm::end(); ?>

        <div class="form-save-ok" hidden>Сохранено</div>
        <div class="form-save-error" hidden>Ошибка</div>

    </div>
</div>

