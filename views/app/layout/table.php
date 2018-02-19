<?php

/* @var $table \app\widgets\table\Table */

?>

<table class="<?= $table->skin ?>">

	<thead class="settings__table-header">
	<?php foreach ($table->headerRows as $row): ?>

		<tr>
		<?php foreach ($row->columns as $cell): ?>

			<?php $width = $cell->width ? 'width="' . $cell->width . '"' : ''; ?>

			<th colspan="<?= $cell->colspan ?>" rowspan="<?= $cell->rowspan ?>" <?= $width; ?>>
				<?= $cell->value ?>
			</th>

		<?php endforeach; ?>
		</tr>

	<?php endforeach; ?>
	</thead>

	<tbody>
	<?php foreach ($table->bodyRows as $row): ?>

		<tr>
		<?php foreach ($row as $cell): ?>

			<td><?= $cell ?></td>

		<?php endforeach; ?>
		</tr>

	<?php endforeach; ?>
	</tbody>

</table>
