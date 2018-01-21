<?php
namespace app\modules\admin\entities;

use yii\db\ActiveQuery;
use yii\db\ActiveRecord;

/**
 * Class Player
 * @package app\modules\admin\entities
 */
class Player extends ActiveRecord
{
    /**
     * @var string
     */
    public $keyName;


    /**
     * @return ActiveQuery object
     */
    public static function find()
    {
        return \Yii::createObject(ActiveQuery::className(), [get_called_class()]);
    }

    /**
     * @return string
     */
    public static function tableName()
    {
        return 'player';
    }

    /**
     * @return ActiveQuery
     */
    public function getKey()
    {
        return $this->hasOne(Key::className(), ['id', 'keyId']);
    }
}