<?php

/* @var $this \yii\web\View */
/* @var $content string */

use yii\helpers\Html;
use app\assets\AppAsset;

AppAsset::register($this);
?>
<?php $this->beginPage() ?>
<!DOCTYPE html>
<html lang="<?= Yii::$app->language ?>">
<head>
    <meta charset="<?= Yii::$app->charset ?>">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
	<?= Html::csrfMetaTags() ?>
    <title><?= Html::encode($this->title) ?></title>
	<?php $this->head() ?>
</head>
    <body>

    <div class="container-fluid">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#">Iron-War</a>
        </div>
        <div class="navbar-collapse collapse">
            <?=
                \yii\widgets\Menu::widget([
                    'options' => ['class' => 'nav navbar-nav navbar-right'],
                    'items' => [
                        ['label' => '<i class="glyphicon glyphicon-user"></i>', 'url' => ['site/index']],
                        ['label' => '<i class="glyphicon glyphicon-log-in"></i>', 'url' => ['site/index']],
                        ['label' => '<i class="glyphicon glyphicon-off"></i>', 'url' => ['site/login'], 'visible' => Yii::$app->user->isGuest],
                    ],
                    'encodeLabels' => false,
                    'activateParents' => true,
                ]);
            ?>
            <form class="navbar-form navbar-right">
                <input type="text" class="form-control" placeholder="Search...">
            </form>
        </div>
    </div>

    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-3 col-md-2 sidebar">
                <?=
                    \yii\widgets\Menu::widget([
                        'options' => ['class' => 'nav nav-sidebar'],
                        'items' => [
                            ['label' => 'Home', 'url' => ['site/index']],
                            ['label' => 'Login', 'url' => ['site/login'], 'visible' => Yii::$app->user->isGuest],
                        ],
                        'encodeLabels' => true,
                        'activateParents' => true,
                    ]);
                ?>
            </div>

            <div class="col-sm-9 col-md-10">

                <?php $this->beginBody() ?>

                <?= $content ?>

                <?php $this->endBody() ?>

            </div>
        </div>
    </div>

    </body>
</html>
<?php $this->endPage() ?>
