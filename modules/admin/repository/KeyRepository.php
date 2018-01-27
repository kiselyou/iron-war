<?php
namespace app\modules\admin\repository;

use app\modules\admin\entities\Key;
use yii\helpers\ArrayHelper;

class KeyRepository
{
    /**
     * @return Key[]
     */
    public function getKeys()
    {
        return Key::find()->asArray()->all();
    }

    /**
     * @return array
     */
    public function getKeysDropDownList()
    {
        return ArrayHelper::map($this->getKeys(), 'id', 'name');
    }
}