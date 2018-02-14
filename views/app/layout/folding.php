<?php
/* @var string $title */
/* @var string $render */
?>

<div class="folding mt-1">
	<div class="folding__title">
		<i class="fa fa-cogs"></i>
		<span><?= $title ?></span>
	</div>

	<div class="folding__body folding__body_gray">

		<?php for ($i = 0; $i < 3; $i++) : ?>

			<?= $this->render($render) ?>

		<?php endfor; ?>

	</div>
</div>