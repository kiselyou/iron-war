<?php
namespace app\modules\admin\models;


use yii\base\Model;

class PlayerFormSearch extends Model
{
    /**
     * @var string
     */
    public $name;
    /**
     * @var integer
     */
    public $keyId;


    /**
     * @return array
     */
    public function rules() {
        return [
            ['name', 'required'],
            ['keyId', 'required'],
        ];
    }
}