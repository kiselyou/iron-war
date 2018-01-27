<?php

namespace app\modules\admin\models;

use yii\base\Model;

/**
 * Class FormControls
 *
 * _ - need to create unique property
 *
 * @package app\modules\admin\models
 */
class FormControls extends Model
{
    /**
     * @var string
     */
    const FORM_KEY_SAVE = 'save';
    /**
     * @var string
     */
    const FORM_KEY_VALIDATE = 'validate';

    /**
     * This is status to send response
     *
     * @var boolean
     */
    private $_formStatus = false;
    /**
     * Additional info to send response
     *
     * @var string
     */
    private $_formMessage;
    /**
     * This is
     * _ - need to create unique property
     *
     * @var null|string
     */
    private $_formActionKey;


    /**
     * @return null|string
     */
    public function getFormKey()
    {
        return $this->_formActionKey;
    }

    /**
     * @param boolean $value
     * @param string $message
     * @return $this
     */
    public function setFormStatus($value, $message = null)
    {
        $this->_formStatus = (bool)$value;
        $this->_formMessage = $message;
        return $this;
    }

    /**
     * @return array
     */
    public function getFormStatus()
    {
        return [
            '_formStatus' => $this->_formStatus,
            '_formMessage' => $this->_formMessage
        ];
    }

    /**
     * @param array $data
     * @param null $formName
     * @return bool
     */
    public function load($data, $formName = null)
    {
        $this->_formActionKey = $data['_formActionKey'] ?? null;
        return parent::load($data, $formName);
    }
}