<?php

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

class Row
{
	public $columns = [];

	/**
	 * @param null|string|integer $value
	 * @param null|string|integer $width
	 * @param int $colspan
	 * @param int $rowspan
	 * @return Column
	 */
	public function addColumn($value, $width = null, $colspan = 1, $rowspan = 1)
	{
		$column = Column::factory($value, $width)
			->setColspan($colspan)
			->setRowspan($rowspan);

		$this->columns[] = $column;
		return $column;
	}
}

class Table
{
	/**
	 * @var Row[]
	 */
	public $headerRows = [];

	/**
	 * @var Row[]
	 */
	public $bodyRows = [];

	/**
	 * Table constructor.
	 */
	public function __construct()
	{

	}

	/**
	 * @return Table
	 */
	static public function factory()
	{
		return new Table();
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
}

$table = Table::factory()
	->addColumn('')

?>

<table class="settings__table settings__table_bordered">
	<thead class="settings__table-header">
		<tr>
			<th rowspan="">Елементы</th>
			<th width="100px">Текущее</th>
			<th width="100px">Макс.</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Класс</td>
			<td>II</td>
			<td>II</td>
		</tr>
		<tr>
			<td>Корпус</td>
			<td>2000 ед.</td>
			<td>3500 ед.</td>
		</tr>
		<tr>
			<td>Броня</td>
			<td>4%</td>
			<td>8%</td>
		</tr>
		<tr>
			<td>Щиты</td>
			<td>2 x 2500</td>
			<td>4 x 2500</td>
		</tr>
		<tr>
			<td>Грузовой отсек</td>
			<td>1500 ед.</td>
			<td>2800 ед.</td>
		</tr>
	</tbody>
</table>
