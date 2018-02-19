<?php
namespace app\widgets\table;

class Row
{
	/**
	 * @var Column[]
	 */
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