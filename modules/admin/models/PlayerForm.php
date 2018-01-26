<?php
namespace app\modules\admin\models;

class PlayerForm extends FormControls
{
    /**
     * @var string
     */
    public $name;


    /**
     * @return array
     */
    public function rules() {
        return [
            ['name', 'required'],
            ['name', 'string', 'min' => 4, 'max' => 20],
            ['name', 'trim'],
        ];
    }

    /**
     * @return array
     */
    public function attributeLabels()
    {
        return [
            'name' => 'Имя игрока'
        ];
    }
}