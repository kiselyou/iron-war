<?php

use \yii\bootstrap\Html;
use yii\bootstrap\ActiveForm;

/* @var $playerForm \app\modules\admin\models\PlayerForm */
/* @var $keysDropDownList array */

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

        <?= $form->field($playerForm, 'keyId')->dropDownList($keysDropDownList, ['prompt'=>'Не выбрано']); ?>

        <div class="row block-test-message" hidden>
            <div class="col-sm-12">
                <span class="text-test-message"></span>
                <button class="btn btn-link">Делаем что-то</button>
            </div>
        </div>

        <?=
        Html::button(
            'Сохранить',
            [
                'class' => 'btn btn-default btn-sm',
                'id' => 'form-create-player-save',
                'disabled' => true
            ]
        );
        ?>

        <div class="form-save-ok" hidden>Успешно сохранено</div>
        <div class="form-save-error" hidden>Ошибка сохранения</div>

        <?php ActiveForm::end(); ?>

    </div>
</div>

