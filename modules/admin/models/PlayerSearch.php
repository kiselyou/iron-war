<?php
namespace app\modules\admin\models;


use yii\base\Model;

class PlayerSearch extends Model
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