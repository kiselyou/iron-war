<?php

namespace app\modules\admin\models;

use yii\base\Model;

class FormControls extends Model
{
    /**
     * @var string
     */
    const FORM_KEY_SAVE = 'save';
    /**
     * @var string
     */
    const FORM_KEY_UPDATE = 'update';
    /**
     * @var string
     */
    const FORM_KEY_VALIDATE = 'validate';

    /**
     *  _ - need to create unique property
     *
     * @var boolean
     */
    public $_status = false;
    /**
     * This is
     * _ - need to create unique property
     *
     * @var null|string
     */
    public $_formActionKey;


    /**
     * @return null|string
     */
    public function getFormKey()
    {
        return $this->_formActionKey;
    }

    /**
     * @param boolean $value
     * @return $this
     */
    public function setFormStatus($value)
    {
        $this->_status = (bool)$value;
        return $this;
    }

    /**
     * @return array
     */
    public function getFormStatus()
    {
        return ['status' => $this->_status];
    }

    /**
     * @param array $data
     * @param null $formName
     * @return bool
     */
    public function load($data, $formName = null)
    {
        $this->_formActionKey = isset($data['_formActionKey']) ? $data['_formActionKey'] : null;
        return parent::load($data, $formName);
    }
}