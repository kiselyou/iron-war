<?php
namespace app\modules\admin\entities;

use yii\db\ActiveQuery;
use yii\db\ActiveRecord;

class Key extends ActiveRecord
{
    /**
     * @return object
     */
    public static function find()
    {
        return \Yii::createObject(ActiveQuery::className(), [get_called_class()]);
    }

    public static function tableName()
    {
        return 'key';
    }

    /**
     * @return ActiveQuery
     */
    public function getPlayer()
    {
        return $this->hasMany(Player::className(), ['keyId', 'id']);
    }
}