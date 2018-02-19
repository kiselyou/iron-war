<?php
namespace app\widgets\table;

use yii\base\View;

class Table extends View
{
	const SKIN_DARK = 'settings__table settings__table_bordered';
	const SKIN_EMPTY = null;

	/**
	 * @var string
	 */
	public $skin;
	/**
	 * @var Row[]
	 */
	public $headerRows = [];

	/**
	 * @var Row[]
	 */
	public $bodyRows = [];

	/**
	 * @var string
	 */
	private $path = '/app/layout/table.php';

	/**
	 * Table constructor.
	 */
	public function __construct()
	{
		parent::__construct();
		$this->skin = self::SKIN_DARK;
	}

	/**
	 * @return Table
	 */
	static public function factory()
	{
		return new Table();
	}

	/**
	 * @param {string} $value - This is constants of current class
	 * @return $this
	 */
	public function setSkin($value)
	{
		$this->skin = $value;
		return $this;
	}

	/**
	 * @return Table
	 */
	public function addHeaderRow()
	{
		$this->headerRows[] = new Row();
		return $this;
	}

	/**
	 * @param $value
	 * @param null|string|integer $width
	 * @param int $colspan
	 * @param int $rowspan
	 * @return Table
	 */
	public function addColumn($value, $width = null, $colspan = 1, $rowspan = 1)
	{
		if (empty($this->headerRows)) {
			$this->addHeaderRow();
		}
		/* @var Row $row */
		$row = end($this->headerRows);
		$row->addColumn($value, $width, $colspan, $rowspan);
		return $this;
	}

	/**
	 * @param array $data
	 * @return Table
	 */
	public function setData(array $data)
	{
		$this->bodyRows = $data;
		return $this;
	}

	/**
	 * @return string
	 */
	public function toHtml()
	{
		return $this->render($this->path, ['table' => $this]);
	}
}