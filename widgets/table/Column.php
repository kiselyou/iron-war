<?php
namespace app\widgets\table;

class Column
{
	/**
	 * @var string|integer
	 */
	public $value;
	/**
	 * @var null|string|integer
	 */
	public $width;
	/**
	 * @var integer
	 */
	public $colspan = 1;
	/**
	 * @var integer
	 */
	public $rowspan = 1;

	/**
	 * Column constructor.
	 * @param null|string|integer $value
	 * @param null|string|integer $width
	 */
	public function __construct($value = null, $width = null)
	{
		$this->value = $value;
		$this->width = $width;
	}

	/**
	 * @param null|string|integer $value
	 * @param null|string|integer $width
	 * @return Column
	 */
	static public function factory($value = null, $width = null)
	{
		return new Column($value, $width);
	}

	/**
	 * @param string|integer $value
	 * @return Column
	 */
	public function setValue($value) {
		$this->value = $value;
		return $this;
	}

	/**
	 * @param null|string|integer $value
	 * @return Column
	 */
	public function setWidth($value) {
		$this->width = $value;
		return $this;
	}

	/**
	 * @param integer $value
	 * @return Column
	 */
	public function setColspan($value) {
		$this->colspan = $value;
		return $this;
	}

	/**
	 * @param integer $value
	 * @return Column
	 */
	public function setRowspan($value) {
		$this->rowspan = $value;
		return $this;
	}
}