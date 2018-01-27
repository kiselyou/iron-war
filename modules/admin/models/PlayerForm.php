<?php
namespace app\modules\admin\models;

class PlayerForm extends FormControls
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
            ['name', 'string', 'min' => 4, 'max' => 20],
            ['name', 'trim'],
            ['keyId', 'integer'],
            ['keyId', 'required'],
        ];
    }

    /**
     * @return array
     */
    public function attributeLabels()
    {
        return [
            'name' => 'Имя игрока',
            'keyId' => 'Ключ'
        ];
    }

    public function getKey()
    {
        
    }
}